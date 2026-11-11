import { Router } from 'express'
import bcrypt from 'bcryptjs'
import {
  clearSessionCookie,
  requireAdmin,
  requireAuth,
  setSessionCookie,
  signToken,
} from './auth.js'
import {
  db,
  isBootstrapOpen,
  loginOrBootstrapFromCursor,
  resolveBootstrapOwnerEmail,
} from './db.js'
import { rateLimit } from './rateLimit.js'
import { validatePassword } from './secret.js'
import {
  isValidEmail,
  mapIsEmri,
  mapKullanici,
  normalizeEmail,
  type IsEmriDurum,
  type IsEmriRow,
  type IsEmriTipi,
  type KullaniciRow,
  type Role,
} from './types.js'

export const router = Router()

router.get('/health', (_req, res) => {
  res.json({ ok: true })
})

router.get('/auth/setup-status', (_req, res) => {
  const ownerEmail = resolveBootstrapOwnerEmail()
  res.json({
    sifresizIlkGiris: isBootstrapOpen(),
    cursorEmail: _req.cursorViewer?.email ?? null,
    sahipEmailTanimli: Boolean(ownerEmail),
  })
})

router.post(
  '/auth/bootstrap',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    key: (req) => `bootstrap:${req.cursorViewer?.email || req.ip || 'unknown'}`,
  }),
  (req, res) => {
    if (!isBootstrapOpen()) {
      return res.status(403).json({
        hata: 'Şifresiz giriş kapalı. SEED_ADMIN_PASSWORD eklendikten sonra şifre ile girin.',
      })
    }
    const viewer = req.cursorViewer
    if (!viewer?.email) {
      return res.status(403).json({ hata: 'Cursor kimliği eksik.' })
    }

    try {
      const row = loginOrBootstrapFromCursor({ email: viewer.email, name: viewer.name })
      const kullanici = mapKullanici(row)
      setSessionCookie(res, signToken(kullanici))
      return res.json({ kullanici, sifresiz: true })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Şifresiz giriş başarısız.'
      const status = msg.includes('kayıtlı değil') || msg.includes('SEED_ADMIN_EMAIL') ? 403 : 400
      return res.status(status).json({ hata: msg })
    }
  },
)

router.post(
  '/auth/login',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    key: (req) => {
      const name = String(req.body?.kullaniciAdi ?? '').trim().toLowerCase()
      const ip = req.ip || req.socket.remoteAddress || 'unknown'
      return `login:${ip}:${name || '_'}`
    },
  }),
  (req, res) => {
    const kullaniciAdi = String(req.body?.kullaniciAdi ?? '').trim()
    const sifre = String(req.body?.sifre ?? '')
    if (!kullaniciAdi || !sifre) {
      return res.status(400).json({ hata: 'Kullanıcı adı ve şifre gerekli.' })
    }

    const row = db
      .prepare('SELECT * FROM kullanicilar WHERE kullanici_adi = ? COLLATE NOCASE AND aktif = 1')
      .get(kullaniciAdi) as KullaniciRow | undefined

    if (!row || !bcrypt.compareSync(sifre, row.sifre_hash)) {
      return res.status(401).json({ hata: 'Kullanıcı adı veya şifre hatalı.' })
    }

    const viewer = req.cursorViewer
    if (!viewer?.email) {
      return res.status(403).json({ hata: 'Cursor kimliği eksik.' })
    }
    if (!row.email || normalizeEmail(row.email) !== viewer.email) {
      return res.status(403).json({
        hata:
          'Bu Cursor hesabı bu kullanıcıya bağlı değil. Hesap e-postası Cursor e-postanızla aynı olmalı.',
      })
    }

    const kullanici = mapKullanici(row)
    setSessionCookie(res, signToken(kullanici))
    return res.json({ kullanici })
  },
)

router.post('/auth/logout', (_req, res) => {
  clearSessionCookie(res)
  res.json({ ok: true })
})

router.get('/auth/me', requireAuth, (req, res) => {
  res.json({ kullanici: req.user, cursorEmail: req.cursorViewer?.email ?? null })
})

router.get('/kullanicilar', requireAuth, requireAdmin, (_req, res) => {
  const rows = db
    .prepare('SELECT * FROM kullanicilar ORDER BY rol ASC, ad_soyad ASC')
    .all() as KullaniciRow[]
  res.json({ kullanicilar: rows.map(mapKullanici) })
})

router.post('/kullanicilar', requireAuth, requireAdmin, (req, res) => {
  const kullaniciAdi = String(req.body?.kullaniciAdi ?? '').trim()
  const adSoyad = String(req.body?.adSoyad ?? '').trim()
  const email = normalizeEmail(String(req.body?.email ?? ''))
  const sifre = String(req.body?.sifre ?? '')
  const rol = String(req.body?.rol ?? 'user') as Role

  if (!kullaniciAdi || !adSoyad || !email || !sifre) {
    return res.status(400).json({ hata: 'Kullanıcı adı, ad soyad, e-posta ve şifre zorunlu.' })
  }
  if (!isValidEmail(email)) return res.status(400).json({ hata: 'Geçerli bir e-posta girin.' })
  if (rol !== 'admin' && rol !== 'user') {
    return res.status(400).json({ hata: 'Geçersiz rol.' })
  }
  const sifreHata = validatePassword(sifre)
  if (sifreHata) return res.status(400).json({ hata: sifreHata })

  const existsName = db
    .prepare('SELECT id FROM kullanicilar WHERE kullanici_adi = ? COLLATE NOCASE')
    .get(kullaniciAdi)
  if (existsName) return res.status(409).json({ hata: 'Bu kullanıcı adı zaten var.' })

  const existsEmail = db
    .prepare('SELECT id FROM kullanicilar WHERE lower(email) = ?')
    .get(email)
  if (existsEmail) return res.status(409).json({ hata: 'Bu e-posta zaten kayıtlı.' })

  const id = `u-${Date.now()}`
  const now = new Date().toISOString()
  db.prepare(`
    INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, email, rol, aktif, olusturma_zamani)
    VALUES (?, ?, ?, ?, ?, ?, 1, ?)
  `).run(id, kullaniciAdi, bcrypt.hashSync(sifre, 10), adSoyad, email, rol, now)

  const row = db.prepare('SELECT * FROM kullanicilar WHERE id = ?').get(id) as KullaniciRow
  res.status(201).json({ kullanici: mapKullanici(row) })
})

router.put('/kullanicilar/:id', requireAuth, requireAdmin, (req, res) => {
  const id = req.params.id
  const row = db.prepare('SELECT * FROM kullanicilar WHERE id = ?').get(id) as KullaniciRow | undefined
  if (!row) return res.status(404).json({ hata: 'Kullanıcı bulunamadı.' })

  const adSoyad = req.body?.adSoyad !== undefined ? String(req.body.adSoyad).trim() : row.ad_soyad
  const email =
    req.body?.email !== undefined ? normalizeEmail(String(req.body.email)) : row.email
  const rol = (req.body?.rol !== undefined ? String(req.body.rol) : row.rol) as Role
  const aktif =
    req.body?.aktif !== undefined ? (req.body.aktif ? 1 : 0) : row.aktif
  const sifre = req.body?.sifre !== undefined ? String(req.body.sifre) : ''

  if (!adSoyad) return res.status(400).json({ hata: 'Ad soyad zorunlu.' })
  if (!email || !isValidEmail(email)) return res.status(400).json({ hata: 'Geçerli e-posta zorunlu.' })
  if (rol !== 'admin' && rol !== 'user') {
    return res.status(400).json({ hata: 'Geçersiz rol.' })
  }

  if (row.rol === 'admin' && (rol !== 'admin' || aktif === 0)) {
    const adminCount = (
      db.prepare("SELECT COUNT(*) AS c FROM kullanicilar WHERE rol = 'admin' AND aktif = 1").get() as {
        c: number
      }
    ).c
    if (adminCount <= 1) {
      return res.status(400).json({ hata: 'Son aktif admin pasifleştirilemez / rolü değiştirilemez.' })
    }
  }

  const emailOwner = db
    .prepare('SELECT id FROM kullanicilar WHERE lower(email) = ? AND id != ?')
    .get(email, id)
  if (emailOwner) return res.status(409).json({ hata: 'Bu e-posta başka kullanıcıda.' })

  let sifreHash = row.sifre_hash
  if (sifre) {
    const sifreHata = validatePassword(sifre)
    if (sifreHata) return res.status(400).json({ hata: sifreHata })
    sifreHash = bcrypt.hashSync(sifre, 10)
  }

  db.prepare(`
    UPDATE kullanicilar
    SET ad_soyad = ?, email = ?, rol = ?, aktif = ?, sifre_hash = ?
    WHERE id = ?
  `).run(adSoyad, email, rol, aktif, sifreHash, id)

  const updated = db.prepare('SELECT * FROM kullanicilar WHERE id = ?').get(id) as KullaniciRow
  res.json({ kullanici: mapKullanici(updated) })
})

router.delete('/kullanicilar/:id', requireAuth, requireAdmin, (req, res) => {
  const id = req.params.id
  const row = db.prepare('SELECT * FROM kullanicilar WHERE id = ?').get(id) as KullaniciRow | undefined
  if (!row) return res.status(404).json({ hata: 'Kullanıcı bulunamadı.' })
  if (req.user?.id === id) {
    return res.status(400).json({ hata: 'Kendi hesabınızı silemezsiniz.' })
  }
  if (row.rol === 'admin') {
    const adminCount = (
      db.prepare("SELECT COUNT(*) AS c FROM kullanicilar WHERE rol = 'admin' AND aktif = 1").get() as {
        c: number
      }
    ).c
    if (adminCount <= 1 && row.aktif === 1) {
      return res.status(400).json({ hata: 'Son aktif admin silinemez.' })
    }
  }

  db.prepare('UPDATE is_emirleri SET atanan_id = NULL WHERE atanan_id = ?').run(id)
  db.prepare('DELETE FROM kullanicilar WHERE id = ?').run(id)
  res.json({ ok: true })
})

router.get('/is-emirleri', requireAuth, (req, res) => {
  let rows: IsEmriRow[]
  if (req.user!.rol === 'admin') {
    rows = db
      .prepare('SELECT * FROM is_emirleri ORDER BY tarih DESC, guncelleme_zamani DESC')
      .all() as IsEmriRow[]
  } else {
    rows = db
      .prepare(
        'SELECT * FROM is_emirleri WHERE atanan_id = ? ORDER BY tarih DESC, guncelleme_zamani DESC',
      )
      .all(req.user!.id) as IsEmriRow[]
  }
  res.json({ isEmirleri: rows.map(mapIsEmri) })
})

router.get('/is-emirleri/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM is_emirleri WHERE id = ?').get(req.params.id) as
    | IsEmriRow
    | undefined
  if (!row) return res.status(404).json({ hata: 'İş emri bulunamadı.' })
  if (req.user!.rol !== 'admin' && row.atanan_id !== req.user!.id) {
    return res.status(403).json({ hata: 'Bu iş emrine erişim yok.' })
  }
  res.json({ isEmri: mapIsEmri(row) })
})

router.post('/is-emirleri', requireAuth, requireAdmin, (req, res) => {
  const baslik = String(req.body?.baslik ?? '').trim()
  const aciklama = String(req.body?.aciklama ?? '').trim()
  const tip = String(req.body?.tip ?? '') as IsEmriTipi
  const lokasyon = String(req.body?.lokasyon ?? '').trim()
  const tarih = String(req.body?.tarih ?? '').trim()
  const atananId = req.body?.atananId ? String(req.body.atananId) : null
  const arac = String(req.body?.arac ?? '').trim()

  if (!baslik || !lokasyon || !tarih) {
    return res.status(400).json({ hata: 'Başlık, lokasyon ve tarih zorunlu.' })
  }
  if (!['nakliye', 'depo', 'survey'].includes(tip)) {
    return res.status(400).json({ hata: 'Geçersiz iş tipi.' })
  }
  if (atananId) {
    const u = db
      .prepare('SELECT id FROM kullanicilar WHERE id = ? AND aktif = 1')
      .get(atananId)
    if (!u) return res.status(400).json({ hata: 'Atanan kullanıcı bulunamadı.' })
  }

  const now = new Date().toISOString()
  const id = `ie-${Date.now()}`
  const durum: IsEmriDurum = atananId ? 'atandi' : 'bekliyor'

  db.prepare(`
    INSERT INTO is_emirleri (
      id, baslik, aciklama, tip, durum, lokasyon, tarih, atanan_id, arac, notlar,
      olusturan_id, olusturma_zamani, guncelleme_zamani
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, '', ?, ?, ?)
  `).run(id, baslik, aciklama, tip, durum, lokasyon, tarih, atananId, arac, req.user!.id, now, now)

  const row = db.prepare('SELECT * FROM is_emirleri WHERE id = ?').get(id) as IsEmriRow
  res.status(201).json({ isEmri: mapIsEmri(row) })
})

router.patch('/is-emirleri/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM is_emirleri WHERE id = ?').get(req.params.id) as
    | IsEmriRow
    | undefined
  if (!row) return res.status(404).json({ hata: 'İş emri bulunamadı.' })

  const isAdmin = req.user!.rol === 'admin'
  const isOwner = row.atanan_id === req.user!.id
  if (!isAdmin && !isOwner) {
    return res.status(403).json({ hata: 'Bu iş emrine erişim yok.' })
  }

  let baslik = row.baslik
  let aciklama = row.aciklama
  let tip = row.tip
  let durum = row.durum
  let lokasyon = row.lokasyon
  let tarih = row.tarih
  let atananId = row.atanan_id
  let arac = row.arac
  let notlar = row.notlar

  if (isAdmin) {
    if (req.body?.baslik !== undefined) baslik = String(req.body.baslik).trim()
    if (req.body?.aciklama !== undefined) aciklama = String(req.body.aciklama).trim()
    if (req.body?.tip !== undefined) tip = String(req.body.tip) as IsEmriTipi
    if (req.body?.lokasyon !== undefined) lokasyon = String(req.body.lokasyon).trim()
    if (req.body?.tarih !== undefined) tarih = String(req.body.tarih).trim()
    if (req.body?.arac !== undefined) arac = String(req.body.arac).trim()
    if (req.body?.notlar !== undefined) notlar = String(req.body.notlar)
    if (req.body?.durum !== undefined) durum = String(req.body.durum) as IsEmriDurum
    if (req.body?.atananId !== undefined) {
      atananId = req.body.atananId ? String(req.body.atananId) : null
      if (atananId && !req.body?.durum) {
        if (durum === 'bekliyor' || durum === 'atandi') durum = 'atandi'
      }
      if (!atananId && durum === 'atandi' && !req.body?.durum) durum = 'bekliyor'
    }
  } else {
    if (req.body?.durum !== undefined) durum = String(req.body.durum) as IsEmriDurum
    if (req.body?.notlar !== undefined) notlar = String(req.body.notlar)
    const allowed: IsEmriDurum[] = ['devam', 'tamamlandi', 'sorunlu']
    if (req.body?.durum !== undefined && !allowed.includes(durum)) {
      return res.status(400).json({ hata: 'Saha kullanıcısı bu durumu seçemez.' })
    }
  }

  const validDurum: IsEmriDurum[] = ['bekliyor', 'atandi', 'devam', 'tamamlandi', 'sorunlu']
  if (!validDurum.includes(durum)) return res.status(400).json({ hata: 'Geçersiz durum.' })
  if (!['nakliye', 'depo', 'survey'].includes(tip)) {
    return res.status(400).json({ hata: 'Geçersiz iş tipi.' })
  }

  const now = new Date().toISOString()
  db.prepare(`
    UPDATE is_emirleri SET
      baslik = ?, aciklama = ?, tip = ?, durum = ?, lokasyon = ?, tarih = ?,
      atanan_id = ?, arac = ?, notlar = ?, guncelleme_zamani = ?
    WHERE id = ?
  `).run(baslik, aciklama, tip, durum, lokasyon, tarih, atananId, arac, notlar, now, row.id)

  const updated = db.prepare('SELECT * FROM is_emirleri WHERE id = ?').get(row.id) as IsEmriRow
  res.json({ isEmri: mapIsEmri(updated) })
})
