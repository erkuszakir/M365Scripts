import bcrypt from 'bcryptjs'
import {
  clearSessionCookieHeader,
  isBootstrapOpen,
  loginOrBootstrapFromCursor,
  loginWithPassword,
  mapIsEmri,
  mapKullanici,
  requireCursorPerson,
  requireSession,
  resolveBootstrapOwnerEmail,
  setSessionCookieHeader,
  signToken,
  sql,
  sqlOne,
  validatePassword,
  type IsEmriDurum,
  type IsEmriRow,
  type IsEmriTipi,
  type KullaniciRow,
  type Role,
} from './session.js'
import { isValidEmail, normalizeEmail } from './types.js'

function json(data: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  if (!headers.has('content-type')) headers.set('content-type', 'application/json')
  if (!headers.has('cache-control')) headers.set('cache-control', 'private, no-store')
  return new Response(JSON.stringify(data), { ...init, headers })
}

async function readBody(request: Request) {
  try {
    return (await request.json()) as Record<string, unknown>
  } catch {
    return {}
  }
}

export async function dispatch(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/+$/, '') || '/'
  const method = request.method.toUpperCase()

  try {
    if (path === '/api/health' && method === 'GET') {
      const viewer = await requireCursorPerson(request)
      if (viewer instanceof Response) return viewer
      return json({ ok: true })
    }

    if (path === '/api/auth/setup-status' && method === 'GET') {
      const viewer = await requireCursorPerson(request)
      if (viewer instanceof Response) return viewer
      return json({
        sifresizIlkGiris: isBootstrapOpen(),
        cursorEmail: viewer.email,
        sahipEmailTanimli: Boolean(resolveBootstrapOwnerEmail()),
      })
    }

    if (path === '/api/auth/bootstrap' && method === 'POST') {
      const viewer = await requireCursorPerson(request)
      if (viewer instanceof Response) return viewer
      if (!isBootstrapOpen()) {
        return json(
          { hata: 'Şifresiz giriş kapalı. SEED_ADMIN_PASSWORD eklendikten sonra şifre ile girin.' },
          { status: 403 },
        )
      }
      try {
        const row = await loginOrBootstrapFromCursor({ email: viewer.email, name: viewer.name })
        const kullanici = mapKullanici(row)
        const token = await signToken(kullanici)
        return json(
          { kullanici, sifresiz: true },
          { headers: { 'set-cookie': setSessionCookieHeader(token) } },
        )
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Şifresiz giriş başarısız.'
        return json({ hata: msg }, { status: 403 })
      }
    }

    if (path === '/api/auth/login' && method === 'POST') {
      const viewer = await requireCursorPerson(request)
      if (viewer instanceof Response) return viewer
      const body = await readBody(request)
      const kullaniciAdi = String(body.kullaniciAdi ?? '').trim()
      const sifre = String(body.sifre ?? '')
      if (!kullaniciAdi || !sifre) {
        return json({ hata: 'Kullanıcı adı ve şifre gerekli.' }, { status: 400 })
      }
      try {
        const row = await loginWithPassword(kullaniciAdi, sifre, viewer.email)
        const kullanici = mapKullanici(row)
        const token = await signToken(kullanici)
        return json({ kullanici }, { headers: { 'set-cookie': setSessionCookieHeader(token) } })
      } catch (err) {
        return json(
          { hata: err instanceof Error ? err.message : 'Giriş başarısız.' },
          { status: 401 },
        )
      }
    }

    if (path === '/api/auth/logout' && method === 'POST') {
      return json({ ok: true }, { headers: { 'set-cookie': clearSessionCookieHeader() } })
    }

    if (path === '/api/auth/me' && method === 'GET') {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      return json({ kullanici: session.user, cursorEmail: session.viewerEmail })
    }

    if (path === '/api/kullanicilar' && method === 'GET') {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
      const rows = await sql<KullaniciRow>(
        'SELECT * FROM kullanicilar ORDER BY rol ASC, ad_soyad ASC',
      )
      return json({ kullanicilar: rows.map(mapKullanici) })
    }

    if (path === '/api/kullanicilar' && method === 'POST') {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
      const body = await readBody(request)
      const kullaniciAdi = String(body.kullaniciAdi ?? '').trim()
      const adSoyad = String(body.adSoyad ?? '').trim()
      const email = normalizeEmail(String(body.email ?? ''))
      const sifre = String(body.sifre ?? '')
      const rol = String(body.rol ?? 'user') as Role
      if (!kullaniciAdi || !adSoyad || !email || !sifre) {
        return json({ hata: 'Kullanıcı adı, ad soyad, e-posta ve şifre zorunlu.' }, { status: 400 })
      }
      if (!isValidEmail(email)) return json({ hata: 'Geçerli bir e-posta girin.' }, { status: 400 })
      if (rol !== 'admin' && rol !== 'user') return json({ hata: 'Geçersiz rol.' }, { status: 400 })
      const sifreHata = validatePassword(sifre)
      if (sifreHata) return json({ hata: sifreHata }, { status: 400 })
      if (
        await sqlOne('SELECT id FROM kullanicilar WHERE lower(kullanici_adi) = lower($1)', [
          kullaniciAdi,
        ])
      ) {
        return json({ hata: 'Bu kullanıcı adı zaten var.' }, { status: 409 })
      }
      if (await sqlOne('SELECT id FROM kullanicilar WHERE lower(email) = $1', [email])) {
        return json({ hata: 'Bu e-posta zaten kayıtlı.' }, { status: 409 })
      }
      const id = `u-${Date.now()}`
      const now = new Date().toISOString()
      await sql(
        `INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, email, rol, aktif, olusturma_zamani)
         VALUES ($1,$2,$3,$4,$5,$6,1,$7)`,
        [id, kullaniciAdi, bcrypt.hashSync(sifre, 10), adSoyad, email, rol, now],
      )
      const row = await sqlOne<KullaniciRow>('SELECT * FROM kullanicilar WHERE id = $1', [id])
      return json({ kullanici: mapKullanici(row!) }, { status: 201 })
    }

    const userMatch = path.match(/^\/api\/kullanicilar\/([^/]+)$/)
    if (userMatch) {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
      const id = decodeURIComponent(userMatch[1])

      if (method === 'PUT') {
        const row = await sqlOne<KullaniciRow>('SELECT * FROM kullanicilar WHERE id = $1', [id])
        if (!row) return json({ hata: 'Kullanıcı bulunamadı.' }, { status: 404 })
        const body = await readBody(request)
        const adSoyad =
          body.adSoyad !== undefined ? String(body.adSoyad).trim() : row.ad_soyad
        const email =
          body.email !== undefined ? normalizeEmail(String(body.email)) : row.email
        const rol = (body.rol !== undefined ? String(body.rol) : row.rol) as Role
        const aktif = body.aktif !== undefined ? (body.aktif ? 1 : 0) : row.aktif
        const sifre = body.sifre !== undefined ? String(body.sifre) : ''
        if (!adSoyad) return json({ hata: 'Ad soyad zorunlu.' }, { status: 400 })
        if (!email || !isValidEmail(email)) {
          return json({ hata: 'Geçerli e-posta zorunlu.' }, { status: 400 })
        }
        if (rol !== 'admin' && rol !== 'user') return json({ hata: 'Geçersiz rol.' }, { status: 400 })
        let sifreHash = row.sifre_hash
        if (sifre) {
          const sifreHata = validatePassword(sifre)
          if (sifreHata) return json({ hata: sifreHata }, { status: 400 })
          sifreHash = bcrypt.hashSync(sifre, 10)
        }
        await sql(
          `UPDATE kullanicilar SET ad_soyad=$1, email=$2, rol=$3, aktif=$4, sifre_hash=$5 WHERE id=$6`,
          [adSoyad, email, rol, aktif, sifreHash, id],
        )
        const updated = await sqlOne<KullaniciRow>('SELECT * FROM kullanicilar WHERE id = $1', [id])
        return json({ kullanici: mapKullanici(updated!) })
      }

      if (method === 'DELETE') {
        if (session.user.id === id) {
          return json({ hata: 'Kendi hesabınızı silemezsiniz.' }, { status: 400 })
        }
        await sql('UPDATE is_emirleri SET atanan_id = NULL WHERE atanan_id = $1', [id])
        await sql('DELETE FROM kullanicilar WHERE id = $1', [id])
        return json({ ok: true })
      }
    }

    if (path === '/api/is-emirleri' && method === 'GET') {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      const rows =
        session.user.rol === 'admin'
          ? await sql<IsEmriRow>(
              'SELECT * FROM is_emirleri ORDER BY tarih DESC, guncelleme_zamani DESC',
            )
          : await sql<IsEmriRow>(
              'SELECT * FROM is_emirleri WHERE atanan_id = $1 ORDER BY tarih DESC, guncelleme_zamani DESC',
              [session.user.id],
            )
      return json({ isEmirleri: rows.map(mapIsEmri) })
    }

    if (path === '/api/is-emirleri' && method === 'POST') {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
      const body = await readBody(request)
      const baslik = String(body.baslik ?? '').trim()
      const aciklama = String(body.aciklama ?? '').trim()
      const tip = String(body.tip ?? '') as IsEmriTipi
      const lokasyon = String(body.lokasyon ?? '').trim()
      const tarih = String(body.tarih ?? '').trim()
      const atananId = body.atananId ? String(body.atananId) : null
      const arac = String(body.arac ?? '').trim()
      if (!baslik || !lokasyon || !tarih) {
        return json({ hata: 'Başlık, lokasyon ve tarih zorunlu.' }, { status: 400 })
      }
      if (!['nakliye', 'depo', 'survey'].includes(tip)) {
        return json({ hata: 'Geçersiz iş tipi.' }, { status: 400 })
      }
      const now = new Date().toISOString()
      const id = `ie-${Date.now()}`
      const durum: IsEmriDurum = atananId ? 'atandi' : 'bekliyor'
      await sql(
        `INSERT INTO is_emirleri (
          id, baslik, aciklama, tip, durum, lokasyon, tarih, atanan_id, arac, notlar,
          olusturan_id, olusturma_zamani, guncelleme_zamani
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'',$10,$11,$11)`,
        [id, baslik, aciklama, tip, durum, lokasyon, tarih, atananId, arac, session.user.id, now],
      )
      const row = await sqlOne<IsEmriRow>('SELECT * FROM is_emirleri WHERE id = $1', [id])
      return json({ isEmri: mapIsEmri(row!) }, { status: 201 })
    }

    const isMatch = path.match(/^\/api\/is-emirleri\/([^/]+)$/)
    if (isMatch) {
      const session = await requireSession(request)
      if (session instanceof Response) return session
      const id = decodeURIComponent(isMatch[1])
      const row = await sqlOne<IsEmriRow>('SELECT * FROM is_emirleri WHERE id = $1', [id])
      if (!row) return json({ hata: 'İş emri bulunamadı.' }, { status: 404 })

      if (method === 'GET') {
        if (session.user.rol !== 'admin' && row.atanan_id !== session.user.id) {
          return json({ hata: 'Bu iş emrine erişim yok.' }, { status: 403 })
        }
        return json({ isEmri: mapIsEmri(row) })
      }

      if (method === 'PATCH') {
        const isAdmin = session.user.rol === 'admin'
        const isOwner = row.atanan_id === session.user.id
        if (!isAdmin && !isOwner) return json({ hata: 'Bu iş emrine erişim yok.' }, { status: 403 })
        const body = await readBody(request)
        let durum = row.durum
        let notlar = row.notlar
        let atananId = row.atanan_id
        let baslik = row.baslik
        let aciklama = row.aciklama
        let tip = row.tip
        let lokasyon = row.lokasyon
        let tarih = row.tarih
        let arac = row.arac
        if (isAdmin) {
          if (body.baslik !== undefined) baslik = String(body.baslik).trim()
          if (body.aciklama !== undefined) aciklama = String(body.aciklama).trim()
          if (body.tip !== undefined) tip = String(body.tip) as IsEmriTipi
          if (body.lokasyon !== undefined) lokasyon = String(body.lokasyon).trim()
          if (body.tarih !== undefined) tarih = String(body.tarih).trim()
          if (body.arac !== undefined) arac = String(body.arac).trim()
          if (body.notlar !== undefined) notlar = String(body.notlar)
          if (body.durum !== undefined) durum = String(body.durum) as IsEmriDurum
          if (body.atananId !== undefined) {
            atananId = body.atananId ? String(body.atananId) : null
            if (atananId && !body.durum && (durum === 'bekliyor' || durum === 'atandi')) {
              durum = 'atandi'
            }
            if (!atananId && durum === 'atandi' && !body.durum) durum = 'bekliyor'
          }
        } else {
          if (body.durum !== undefined) durum = String(body.durum) as IsEmriDurum
          if (body.notlar !== undefined) notlar = String(body.notlar)
          const allowed: IsEmriDurum[] = ['devam', 'tamamlandi', 'sorunlu']
          if (body.durum !== undefined && !allowed.includes(durum)) {
            return json({ hata: 'Saha kullanıcısı bu durumu seçemez.' }, { status: 400 })
          }
        }
        const now = new Date().toISOString()
        await sql(
          `UPDATE is_emirleri SET
            baslik=$1, aciklama=$2, tip=$3, durum=$4, lokasyon=$5, tarih=$6,
            atanan_id=$7, arac=$8, notlar=$9, guncelleme_zamani=$10
           WHERE id=$11`,
          [baslik, aciklama, tip, durum, lokasyon, tarih, atananId, arac, notlar, now, id],
        )
        const updated = await sqlOne<IsEmriRow>('SELECT * FROM is_emirleri WHERE id = $1', [id])
        return json({ isEmri: mapIsEmri(updated!) })
      }
    }

    return json({ hata: 'API bulunamadı.' }, { status: 404 })
  } catch (err) {
    console.error(err)
    return json(
      { hata: err instanceof Error ? err.message : 'Sunucu hatası.' },
      { status: 500 },
    )
  }
}
