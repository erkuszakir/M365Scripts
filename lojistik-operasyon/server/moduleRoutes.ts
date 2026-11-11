import {
  mapCrmMusteri,
  mapDemirbas,
  mapParaTalebi,
  mapSatinAlma,
  type CrmDurum,
  type CrmMusteriRow,
  type DemirbasDurum,
  type DemirbasRow,
  type ParaTalebiDurum,
  type ParaTalebiRow,
  type PublicKullanici,
  type SatinAlmaDurum,
  type SatinAlmaRow,
} from './types'
import { sql, sqlOne } from './sql'

type Session = { user: PublicKullanici; viewerEmail: string }

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

const DEMIRBAS_DURUM: DemirbasDurum[] = ['aktif', 'arizali', 'hurda', 'zimmetli']
const SATIN_DURUM: SatinAlmaDurum[] = ['taslak', 'onay_bekliyor', 'onaylandi', 'red', 'tamamlandi']
const PARA_DURUM: ParaTalebiDurum[] = ['bekliyor', 'onaylandi', 'odendi', 'red']
const CRM_DURUM: CrmDurum[] = ['lead', 'aktif', 'pasif']

/** Modül API’leri. Eşleşmezse null. */
export async function handleModuleRoutes(
  path: string,
  method: string,
  request: Request,
  session: Session,
): Promise<Response | null> {
  // —— Demirbaş ——
  if (path === '/api/demirbas' && method === 'GET') {
    const rows = await sql<DemirbasRow>(
      'SELECT * FROM demirbas ORDER BY guncelleme_zamani DESC',
    )
    return json({ kayitlar: rows.map(mapDemirbas) })
  }

  if (path === '/api/demirbas' && method === 'POST') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const body = await readBody(request)
    const ad = String(body.ad ?? '').trim()
    const kod = String(body.kod ?? '').trim()
    const lokasyon = String(body.lokasyon ?? '').trim()
    const durum = String(body.durum ?? 'aktif') as DemirbasDurum
    const adet = Math.max(1, Number(body.adet ?? 1) || 1)
    const notlar = String(body.notlar ?? '').trim()
    if (!ad) return json({ hata: 'Demirbaş adı zorunlu.' }, { status: 400 })
    if (!DEMIRBAS_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `db-${Date.now()}`
    await sql(
      `INSERT INTO demirbas (id, ad, kod, lokasyon, durum, adet, notlar, olusturan_id, olusturma_zamani, guncelleme_zamani)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$9)`,
      [id, ad, kod, lokasyon, durum, adet, notlar, session.user.id, now],
    )
    const row = await sqlOne<DemirbasRow>('SELECT * FROM demirbas WHERE id = $1', [id])
    return json({ kayit: mapDemirbas(row!) }, { status: 201 })
  }

  const demirbasMatch = path.match(/^\/api\/demirbas\/([^/]+)$/)
  if (demirbasMatch && method === 'PATCH') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const id = decodeURIComponent(demirbasMatch[1])
    const row = await sqlOne<DemirbasRow>('SELECT * FROM demirbas WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })
    const body = await readBody(request)
    const ad = body.ad !== undefined ? String(body.ad).trim() : row.ad
    const kod = body.kod !== undefined ? String(body.kod).trim() : row.kod
    const lokasyon = body.lokasyon !== undefined ? String(body.lokasyon).trim() : row.lokasyon
    const durum = (body.durum !== undefined ? String(body.durum) : row.durum) as DemirbasDurum
    const adet = body.adet !== undefined ? Math.max(1, Number(body.adet) || 1) : Number(row.adet)
    const notlar = body.notlar !== undefined ? String(body.notlar) : row.notlar
    if (!ad) return json({ hata: 'Demirbaş adı zorunlu.' }, { status: 400 })
    if (!DEMIRBAS_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    await sql(
      `UPDATE demirbas SET ad=$1, kod=$2, lokasyon=$3, durum=$4, adet=$5, notlar=$6, guncelleme_zamani=$7 WHERE id=$8`,
      [ad, kod, lokasyon, durum, adet, notlar, now, id],
    )
    const updated = await sqlOne<DemirbasRow>('SELECT * FROM demirbas WHERE id = $1', [id])
    return json({ kayit: mapDemirbas(updated!) })
  }

  // —— Satın alma ——
  if (path === '/api/satin-alma' && method === 'GET') {
    const rows =
      session.user.rol === 'admin'
        ? await sql<SatinAlmaRow>('SELECT * FROM satin_alma ORDER BY guncelleme_zamani DESC')
        : await sql<SatinAlmaRow>(
            'SELECT * FROM satin_alma WHERE talep_eden_id = $1 ORDER BY guncelleme_zamani DESC',
            [session.user.id],
          )
    return json({ kayitlar: rows.map(mapSatinAlma) })
  }

  if (path === '/api/satin-alma' && method === 'POST') {
    const body = await readBody(request)
    const baslik = String(body.baslik ?? '').trim()
    const aciklama = String(body.aciklama ?? '').trim()
    const tutar = Math.max(0, Number(body.tutar ?? 0) || 0)
    const paraBirimi = String(body.paraBirimi ?? 'TRY').trim() || 'TRY'
    const durum = (session.user.rol === 'admin'
      ? String(body.durum ?? 'onay_bekliyor')
      : 'onay_bekliyor') as SatinAlmaDurum
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    if (!SATIN_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `sa-${Date.now()}`
    await sql(
      `INSERT INTO satin_alma (id, baslik, aciklama, tutar, para_birimi, durum, talep_eden_id, olusturma_zamani, guncelleme_zamani)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$8)`,
      [id, baslik, aciklama, tutar, paraBirimi, durum, session.user.id, now],
    )
    const row = await sqlOne<SatinAlmaRow>('SELECT * FROM satin_alma WHERE id = $1', [id])
    return json({ kayit: mapSatinAlma(row!) }, { status: 201 })
  }

  const satinMatch = path.match(/^\/api\/satin-alma\/([^/]+)$/)
  if (satinMatch && method === 'PATCH') {
    const id = decodeURIComponent(satinMatch[1])
    const row = await sqlOne<SatinAlmaRow>('SELECT * FROM satin_alma WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })
    const isOwner = row.talep_eden_id === session.user.id
    const isAdmin = session.user.rol === 'admin'
    if (!isAdmin && !isOwner) return json({ hata: 'Erişim yok.' }, { status: 403 })
    const body = await readBody(request)
    let baslik = row.baslik
    let aciklama = row.aciklama
    let tutar = Number(row.tutar)
    let paraBirimi = row.para_birimi
    let durum = row.durum
    if (isAdmin || (isOwner && (row.durum === 'taslak' || row.durum === 'onay_bekliyor'))) {
      if (body.baslik !== undefined) baslik = String(body.baslik).trim()
      if (body.aciklama !== undefined) aciklama = String(body.aciklama).trim()
      if (body.tutar !== undefined) tutar = Math.max(0, Number(body.tutar) || 0)
      if (body.paraBirimi !== undefined) paraBirimi = String(body.paraBirimi).trim() || 'TRY'
    }
    if (isAdmin && body.durum !== undefined) {
      durum = String(body.durum) as SatinAlmaDurum
      if (!SATIN_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    }
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    const now = new Date().toISOString()
    await sql(
      `UPDATE satin_alma SET baslik=$1, aciklama=$2, tutar=$3, para_birimi=$4, durum=$5, guncelleme_zamani=$6 WHERE id=$7`,
      [baslik, aciklama, tutar, paraBirimi, durum, now, id],
    )
    const updated = await sqlOne<SatinAlmaRow>('SELECT * FROM satin_alma WHERE id = $1', [id])
    return json({ kayit: mapSatinAlma(updated!) })
  }

  // —— Para talebi ——
  if (path === '/api/para-talebi' && method === 'GET') {
    const rows =
      session.user.rol === 'admin'
        ? await sql<ParaTalebiRow>('SELECT * FROM para_talebi ORDER BY guncelleme_zamani DESC')
        : await sql<ParaTalebiRow>(
            'SELECT * FROM para_talebi WHERE talep_eden_id = $1 ORDER BY guncelleme_zamani DESC',
            [session.user.id],
          )
    return json({ kayitlar: rows.map(mapParaTalebi) })
  }

  if (path === '/api/para-talebi' && method === 'POST') {
    const body = await readBody(request)
    const baslik = String(body.baslik ?? '').trim()
    const tutar = Math.max(0, Number(body.tutar ?? 0) || 0)
    const paraBirimi = String(body.paraBirimi ?? 'TRY').trim() || 'TRY'
    const gerekce = String(body.gerekce ?? '').trim()
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `pt-${Date.now()}`
    await sql(
      `INSERT INTO para_talebi (id, baslik, tutar, para_birimi, gerekce, durum, talep_eden_id, olusturma_zamani, guncelleme_zamani)
       VALUES ($1,$2,$3,$4,$5,'bekliyor',$6,$7,$7)`,
      [id, baslik, tutar, paraBirimi, gerekce, session.user.id, now],
    )
    const row = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
    return json({ kayit: mapParaTalebi(row!) }, { status: 201 })
  }

  const paraMatch = path.match(/^\/api\/para-talebi\/([^/]+)$/)
  if (paraMatch && method === 'PATCH') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const id = decodeURIComponent(paraMatch[1])
    const row = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })
    const body = await readBody(request)
    const durum = (body.durum !== undefined ? String(body.durum) : row.durum) as ParaTalebiDurum
    if (!PARA_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    await sql(`UPDATE para_talebi SET durum=$1, guncelleme_zamani=$2 WHERE id=$3`, [durum, now, id])
    const updated = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
    return json({ kayit: mapParaTalebi(updated!) })
  }

  // —— CRM ——
  if (path === '/api/crm' && method === 'GET') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const rows = await sql<CrmMusteriRow>(
      'SELECT * FROM crm_musteriler ORDER BY guncelleme_zamani DESC',
    )
    return json({ kayitlar: rows.map(mapCrmMusteri) })
  }

  if (path === '/api/crm' && method === 'POST') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const body = await readBody(request)
    const firma = String(body.firma ?? '').trim()
    const yetkili = String(body.yetkili ?? '').trim()
    const telefon = String(body.telefon ?? '').trim()
    const email = String(body.email ?? '').trim()
    const durum = String(body.durum ?? 'lead') as CrmDurum
    const notlar = String(body.notlar ?? '').trim()
    if (!firma) return json({ hata: 'Firma adı zorunlu.' }, { status: 400 })
    if (!CRM_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `crm-${Date.now()}`
    await sql(
      `INSERT INTO crm_musteriler (id, firma, yetkili, telefon, email, durum, notlar, olusturan_id, olusturma_zamani, guncelleme_zamani)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$9)`,
      [id, firma, yetkili, telefon, email, durum, notlar, session.user.id, now],
    )
    const row = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
    return json({ kayit: mapCrmMusteri(row!) }, { status: 201 })
  }

  const crmMatch = path.match(/^\/api\/crm\/([^/]+)$/)
  if (crmMatch && method === 'PATCH') {
    if (session.user.rol !== 'admin') return json({ hata: 'Admin yetkisi gerekli.' }, { status: 403 })
    const id = decodeURIComponent(crmMatch[1])
    const row = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })
    const body = await readBody(request)
    const firma = body.firma !== undefined ? String(body.firma).trim() : row.firma
    const yetkili = body.yetkili !== undefined ? String(body.yetkili).trim() : row.yetkili
    const telefon = body.telefon !== undefined ? String(body.telefon).trim() : row.telefon
    const email = body.email !== undefined ? String(body.email).trim() : row.email
    const durum = (body.durum !== undefined ? String(body.durum) : row.durum) as CrmDurum
    const notlar = body.notlar !== undefined ? String(body.notlar) : row.notlar
    if (!firma) return json({ hata: 'Firma adı zorunlu.' }, { status: 400 })
    if (!CRM_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    await sql(
      `UPDATE crm_musteriler SET firma=$1, yetkili=$2, telefon=$3, email=$4, durum=$5, notlar=$6, guncelleme_zamani=$7 WHERE id=$8`,
      [firma, yetkili, telefon, email, durum, notlar, now, id],
    )
    const updated = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
    return json({ kayit: mapCrmMusteri(updated!) })
  }

  return null
}
