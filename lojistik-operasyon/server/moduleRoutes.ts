import { baslangicOnayDurumu, canApprove, ONAY_ESIGI_TRY, onaySonrasiDurum } from './approval'
import {
  mapCrmAktivite,
  mapCrmMusteri,
  mapDemirbas,
  mapParaTalebi,
  mapSatinAlma,
  type CrmAktiviteRow,
  type CrmAktiviteTipi,
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
const CRM_DURUM: CrmDurum[] = ['lead', 'aktif', 'pasif']
const CRM_AKTIVITE: CrmAktiviteTipi[] = ['arama', 'toplanti', 'teklif', 'email', 'not']

function isYonetici(rol: string) {
  return rol === 'admin' || rol === 'amir'
}

async function seedCrmIfEmpty(adminId: string) {
  const count = await sqlOne<{ c: string | number }>('SELECT COUNT(*)::int AS c FROM crm_musteriler')
  if (Number(count?.c || 0) > 0) return
  const now = new Date().toISOString()
  const bugun = now.slice(0, 10)
  const ornekler = [
    {
      id: 'crm-1001',
      firma: 'Anadolu Çelik A.Ş.',
      yetkili: 'Mehmet Yılmaz',
      telefon: '0216 555 01 01',
      email: 'mehmet.yilmaz@anadolucelik.example',
      durum: 'aktif' as CrmDurum,
      notlar: 'Aylık parça sevkiyatı; Gebze depo anlaşması var.',
      sektor: 'Sanayi / Çelik',
      sehir: 'Kocaeli',
      kaynak: 'Referans',
      tahmini_ciro: 2400000,
      son_gorusme: bugun,
    },
    {
      id: 'crm-1002',
      firma: 'Marmara Gıda Lojistik',
      yetkili: 'Ayşe Demir',
      telefon: '0212 444 22 11',
      email: 'ayse.demir@marmaragida.example',
      durum: 'lead' as CrmDurum,
      notlar: 'Soğuk zincir nakliye teklifi istendi.',
      sektor: 'Gıda',
      sehir: 'İstanbul',
      kaynak: 'Fuar',
      tahmini_ciro: 850000,
      son_gorusme: bugun,
    },
    {
      id: 'crm-1003',
      firma: 'Ege Survey Mühendislik',
      yetkili: 'Can Öztürk',
      telefon: '0232 333 09 09',
      email: 'can@egesurvey.example',
      durum: 'aktif' as CrmDurum,
      notlar: 'Yol etüt işleri için alt yüklenici.',
      sektor: 'Mühendislik',
      sehir: 'İzmir',
      kaynak: 'Web',
      tahmini_ciro: 420000,
      son_gorusme: bugun,
    },
  ]
  for (const m of ornekler) {
    await sql(
      `INSERT INTO crm_musteriler (
        id, firma, yetkili, telefon, email, durum, notlar, sektor, sehir, kaynak,
        tahmini_ciro, son_gorusme, olusturan_id, olusturma_zamani, guncelleme_zamani
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$14)`,
      [
        m.id,
        m.firma,
        m.yetkili,
        m.telefon,
        m.email,
        m.durum,
        m.notlar,
        m.sektor,
        m.sehir,
        m.kaynak,
        m.tahmini_ciro,
        m.son_gorusme,
        adminId,
        now,
      ],
    )
  }
  const aktiviteler = [
    {
      id: 'cra-1',
      musteri_id: 'crm-1001',
      tip: 'toplanti' as CrmAktiviteTipi,
      baslik: 'Q1 hacim planı',
      detay: 'Haftalık 4 tır Gebze–Ankara hattı konuşuldu.',
    },
    {
      id: 'cra-2',
      musteri_id: 'crm-1002',
      tip: 'teklif' as CrmAktiviteTipi,
      baslik: 'Soğuk zincir teklifi gönderildi',
      detay: '3 araçlık aylık paket, 12 ay taahhüt.',
    },
    {
      id: 'cra-3',
      musteri_id: 'crm-1003',
      tip: 'arama' as CrmAktiviteTipi,
      baslik: 'Etüt sahası teyidi',
      detay: 'D100 km 40–60 arası ölçüm tarihi netleşti.',
    },
  ]
  for (const a of aktiviteler) {
    await sql(
      `INSERT INTO crm_aktiviteler (id, musteri_id, tip, baslik, detay, olusturan_id, olusturma_zamani)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [a.id, a.musteri_id, a.tip, a.baslik, a.detay, adminId, now],
    )
  }
}

/** Modül API’leri. Eşleşmezse null. */
export async function handleModuleRoutes(
  path: string,
  method: string,
  request: Request,
  session: Session,
): Promise<Response | null> {
  // —— Demirbaş ——
  if (path === '/api/demirbas' && method === 'GET') {
    if (!isYonetici(session.user.rol)) return json({ hata: 'Yetki gerekli.' }, { status: 403 })
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
      isYonetici(session.user.rol)
        ? await sql<SatinAlmaRow>('SELECT * FROM satin_alma ORDER BY guncelleme_zamani DESC')
        : await sql<SatinAlmaRow>(
            'SELECT * FROM satin_alma WHERE talep_eden_id = $1 ORDER BY guncelleme_zamani DESC',
            [session.user.id],
          )
    return json({ kayitlar: rows.map(mapSatinAlma), onayEsigi: ONAY_ESIGI_TRY })
  }

  if (path === '/api/satin-alma' && method === 'POST') {
    const body = await readBody(request)
    const baslik = String(body.baslik ?? '').trim()
    const aciklama = String(body.aciklama ?? '').trim()
    const tutar = Math.max(0, Number(body.tutar ?? 0) || 0)
    const paraBirimi = String(body.paraBirimi ?? 'TRY').trim() || 'TRY'
    const durum = baslangicOnayDurumu(tutar) as SatinAlmaDurum
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `sa-${Date.now()}`
    await sql(
      `INSERT INTO satin_alma (
        id, baslik, aciklama, tutar, para_birimi, durum, talep_eden_id, onaylayan_id, onay_notu,
        olusturma_zamani, guncelleme_zamani
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,NULL,'',$8,$8)`,
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
    const body = await readBody(request)
    const aksiyon = String(body.aksiyon ?? '').trim() as 'onayla' | 'red' | 'tamamla' | ''
    const now = new Date().toISOString()

    if (aksiyon === 'onayla' || aksiyon === 'red' || aksiyon === 'tamamla') {
      if (aksiyon === 'tamamla') {
        if (session.user.rol !== 'admin') {
          return json({ hata: 'Tamamlama için CEO/admin gerekli.' }, { status: 403 })
        }
      } else if (!canApprove(session.user.rol, row.durum)) {
        const kim =
          row.durum === 'ceo_onay_bekliyor'
            ? `CEO onayı gerekli (>${ONAY_ESIGI_TRY.toLocaleString('tr-TR')} TL).`
            : 'İlk amir onayı gerekli.'
        return json({ hata: kim }, { status: 403 })
      }
      const sonraki = onaySonrasiDurum(Number(row.tutar), row.durum, aksiyon)
      if (!sonraki || (sonraki !== 'onaylandi' && sonraki !== 'red' && sonraki !== 'tamamlandi')) {
        return json({ hata: 'Bu işlem bu durumda yapılamaz.' }, { status: 400 })
      }
      const notu = String(body.onayNotu ?? '').trim()
      await sql(
        `UPDATE satin_alma SET durum=$1, onaylayan_id=$2, onay_notu=$3, guncelleme_zamani=$4 WHERE id=$5`,
        [sonraki, session.user.id, notu || row.onay_notu || '', now, id],
      )
      const updated = await sqlOne<SatinAlmaRow>('SELECT * FROM satin_alma WHERE id = $1', [id])
      return json({ kayit: mapSatinAlma(updated!) })
    }

    return json({ hata: 'Geçersiz işlem.' }, { status: 400 })
  }

  // —— Para talebi ——
  if (path === '/api/para-talebi' && method === 'GET') {
    const rows =
      isYonetici(session.user.rol)
        ? await sql<ParaTalebiRow>('SELECT * FROM para_talebi ORDER BY guncelleme_zamani DESC')
        : await sql<ParaTalebiRow>(
            'SELECT * FROM para_talebi WHERE talep_eden_id = $1 ORDER BY guncelleme_zamani DESC',
            [session.user.id],
          )
    return json({ kayitlar: rows.map(mapParaTalebi), onayEsigi: ONAY_ESIGI_TRY })
  }

  if (path === '/api/para-talebi' && method === 'POST') {
    const body = await readBody(request)
    const baslik = String(body.baslik ?? '').trim()
    const tutar = Math.max(0, Number(body.tutar ?? 0) || 0)
    const paraBirimi = String(body.paraBirimi ?? 'TRY').trim() || 'TRY'
    const gerekce = String(body.gerekce ?? '').trim()
    const durum = baslangicOnayDurumu(tutar) as ParaTalebiDurum
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `pt-${Date.now()}`
    await sql(
      `INSERT INTO para_talebi (
        id, baslik, tutar, para_birimi, gerekce, durum, talep_eden_id, onaylayan_id, onay_notu,
        olusturma_zamani, guncelleme_zamani
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,NULL,'',$8,$8)`,
      [id, baslik, tutar, paraBirimi, gerekce, durum, session.user.id, now],
    )
    const row = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
    return json({ kayit: mapParaTalebi(row!) }, { status: 201 })
  }

  const paraMatch = path.match(/^\/api\/para-talebi\/([^/]+)$/)
  if (paraMatch && method === 'PATCH') {
    const id = decodeURIComponent(paraMatch[1])
    const row = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })
    const body = await readBody(request)
    const aksiyon = String(body.aksiyon ?? '').trim() as 'onayla' | 'red' | 'ode' | ''
    const now = new Date().toISOString()

    if (aksiyon === 'onayla' || aksiyon === 'red' || aksiyon === 'ode') {
      if (aksiyon === 'ode') {
        if (session.user.rol !== 'admin') {
          return json({ hata: 'Ödeme işaretlemek için CEO/admin gerekli.' }, { status: 403 })
        }
      } else if (!canApprove(session.user.rol, row.durum)) {
        const kim =
          row.durum === 'ceo_onay_bekliyor'
            ? `CEO onayı gerekli (>${ONAY_ESIGI_TRY.toLocaleString('tr-TR')} TL).`
            : 'İlk amir onayı gerekli.'
        return json({ hata: kim }, { status: 403 })
      }
      const sonraki = onaySonrasiDurum(Number(row.tutar), row.durum, aksiyon)
      if (!sonraki || (sonraki !== 'onaylandi' && sonraki !== 'red' && sonraki !== 'odendi')) {
        return json({ hata: 'Bu işlem bu durumda yapılamaz.' }, { status: 400 })
      }
      const notu = String(body.onayNotu ?? '').trim()
      await sql(
        `UPDATE para_talebi SET durum=$1, onaylayan_id=$2, onay_notu=$3, guncelleme_zamani=$4 WHERE id=$5`,
        [sonraki, session.user.id, notu || row.onay_notu || '', now, id],
      )
      const updated = await sqlOne<ParaTalebiRow>('SELECT * FROM para_talebi WHERE id = $1', [id])
      return json({ kayit: mapParaTalebi(updated!) })
    }

    return json({ hata: 'Geçersiz işlem.' }, { status: 400 })
  }

  // —— CRM ——
  if (path === '/api/crm' && method === 'GET') {
    if (!isYonetici(session.user.rol)) return json({ hata: 'Yetki gerekli.' }, { status: 403 })
    await seedCrmIfEmpty(session.user.id)
    const rows = await sql<CrmMusteriRow>(
      'SELECT * FROM crm_musteriler ORDER BY guncelleme_zamani DESC',
    )
    return json({ kayitlar: rows.map(mapCrmMusteri) })
  }

  if (path === '/api/crm' && method === 'POST') {
    if (!isYonetici(session.user.rol)) return json({ hata: 'Yetki gerekli.' }, { status: 403 })
    const body = await readBody(request)
    const firma = String(body.firma ?? '').trim()
    const yetkili = String(body.yetkili ?? '').trim()
    const telefon = String(body.telefon ?? '').trim()
    const email = String(body.email ?? '').trim()
    const durum = String(body.durum ?? 'lead') as CrmDurum
    const notlar = String(body.notlar ?? '').trim()
    const sektor = String(body.sektor ?? '').trim()
    const sehir = String(body.sehir ?? '').trim()
    const kaynak = String(body.kaynak ?? '').trim()
    const tahminiCiro = Math.max(0, Number(body.tahminiCiro ?? 0) || 0)
    const sonGorusme = String(body.sonGorusme ?? '').trim()
    if (!firma) return json({ hata: 'Firma adı zorunlu.' }, { status: 400 })
    if (!CRM_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `crm-${Date.now()}`
    await sql(
      `INSERT INTO crm_musteriler (
        id, firma, yetkili, telefon, email, durum, notlar, sektor, sehir, kaynak,
        tahmini_ciro, son_gorusme, olusturan_id, olusturma_zamani, guncelleme_zamani
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$14)`,
      [
        id,
        firma,
        yetkili,
        telefon,
        email,
        durum,
        notlar,
        sektor,
        sehir,
        kaynak,
        tahminiCiro,
        sonGorusme,
        session.user.id,
        now,
      ],
    )
    const row = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
    return json({ kayit: mapCrmMusteri(row!) }, { status: 201 })
  }

  const crmMatch = path.match(/^\/api\/crm\/([^/]+)$/)
  if (crmMatch) {
    if (!isYonetici(session.user.rol)) return json({ hata: 'Yetki gerekli.' }, { status: 403 })
    const id = decodeURIComponent(crmMatch[1])
    const row = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
    if (!row) return json({ hata: 'Kayıt bulunamadı.' }, { status: 404 })

    if (method === 'GET') {
      const aktiviteler = await sql<CrmAktiviteRow>(
        'SELECT * FROM crm_aktiviteler WHERE musteri_id = $1 ORDER BY olusturma_zamani DESC',
        [id],
      )
      return json({ kayit: mapCrmMusteri(row), aktiviteler: aktiviteler.map(mapCrmAktivite) })
    }

    if (method === 'PATCH') {
      const body = await readBody(request)
      const firma = body.firma !== undefined ? String(body.firma).trim() : row.firma
      const yetkili = body.yetkili !== undefined ? String(body.yetkili).trim() : row.yetkili
      const telefon = body.telefon !== undefined ? String(body.telefon).trim() : row.telefon
      const email = body.email !== undefined ? String(body.email).trim() : row.email
      const durum = (body.durum !== undefined ? String(body.durum) : row.durum) as CrmDurum
      const notlar = body.notlar !== undefined ? String(body.notlar) : row.notlar
      const sektor = body.sektor !== undefined ? String(body.sektor).trim() : row.sektor || ''
      const sehir = body.sehir !== undefined ? String(body.sehir).trim() : row.sehir || ''
      const kaynak = body.kaynak !== undefined ? String(body.kaynak).trim() : row.kaynak || ''
      const tahminiCiro =
        body.tahminiCiro !== undefined
          ? Math.max(0, Number(body.tahminiCiro) || 0)
          : Number(row.tahmini_ciro || 0)
      const sonGorusme =
        body.sonGorusme !== undefined ? String(body.sonGorusme).trim() : row.son_gorusme || ''
      if (!firma) return json({ hata: 'Firma adı zorunlu.' }, { status: 400 })
      if (!CRM_DURUM.includes(durum)) return json({ hata: 'Geçersiz durum.' }, { status: 400 })
      const now = new Date().toISOString()
      await sql(
        `UPDATE crm_musteriler SET
          firma=$1, yetkili=$2, telefon=$3, email=$4, durum=$5, notlar=$6,
          sektor=$7, sehir=$8, kaynak=$9, tahmini_ciro=$10, son_gorusme=$11, guncelleme_zamani=$12
         WHERE id=$13`,
        [
          firma,
          yetkili,
          telefon,
          email,
          durum,
          notlar,
          sektor,
          sehir,
          kaynak,
          tahminiCiro,
          sonGorusme,
          now,
          id,
        ],
      )
      const updated = await sqlOne<CrmMusteriRow>('SELECT * FROM crm_musteriler WHERE id = $1', [id])
      return json({ kayit: mapCrmMusteri(updated!) })
    }

    if (method === 'POST' && path.endsWith('/aktivite')) {
      /* handled below */
    }
  }

  const aktMatch = path.match(/^\/api\/crm\/([^/]+)\/aktivite$/)
  if (aktMatch && method === 'POST') {
    if (!isYonetici(session.user.rol)) return json({ hata: 'Yetki gerekli.' }, { status: 403 })
    const musteriId = decodeURIComponent(aktMatch[1])
    const musteri = await sqlOne<CrmMusteriRow>('SELECT id FROM crm_musteriler WHERE id = $1', [
      musteriId,
    ])
    if (!musteri) return json({ hata: 'Müşteri bulunamadı.' }, { status: 404 })
    const body = await readBody(request)
    const tip = String(body.tip ?? 'not') as CrmAktiviteTipi
    const baslik = String(body.baslik ?? '').trim()
    const detay = String(body.detay ?? '').trim()
    if (!CRM_AKTIVITE.includes(tip)) return json({ hata: 'Geçersiz aktivite tipi.' }, { status: 400 })
    if (!baslik) return json({ hata: 'Başlık zorunlu.' }, { status: 400 })
    const now = new Date().toISOString()
    const id = `cra-${Date.now()}`
    await sql(
      `INSERT INTO crm_aktiviteler (id, musteri_id, tip, baslik, detay, olusturan_id, olusturma_zamani)
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [id, musteriId, tip, baslik, detay, session.user.id, now],
    )
    await sql(`UPDATE crm_musteriler SET son_gorusme=$1, guncelleme_zamani=$2 WHERE id=$3`, [
      now.slice(0, 10),
      now,
      musteriId,
    ])
    const row = await sqlOne<CrmAktiviteRow>('SELECT * FROM crm_aktiviteler WHERE id = $1', [id])
    return json({ aktivite: mapCrmAktivite(row!) }, { status: 201 })
  }

  return null
}
