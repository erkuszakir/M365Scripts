import bcrypt from 'bcryptjs'
import crypto from 'node:crypto'
import jwt from 'jsonwebtoken'
import { getIdentity } from '../cursor/identity'
import { sql, sqlOne } from './sql'
import {
  isValidEmail,
  mapIsEmri,
  mapKullanici,
  normalizeEmail,
  type IsEmriDurum,
  type IsEmriRow,
  type IsEmriTipi,
  type KullaniciRow,
  type PublicKullanici,
  type Role,
} from './types'

export const SESSION_COOKIE = 'lojistik_oturum'

export function isBootstrapOpen() {
  return !process.env.SEED_ADMIN_PASSWORD?.trim()
}

export function resolveBootstrapOwnerEmail(): string | null {
  const raw = process.env.SEED_ADMIN_EMAIL?.trim()
  if (!raw) return null
  const email = normalizeEmail(raw)
  return isValidEmail(email) ? email : null
}

export function validatePassword(sifre: string): string | null {
  if (sifre.length < 8) return 'Şifre en az 8 karakter olmalı.'
  if (!/[A-Za-z]/.test(sifre) || !/[0-9]/.test(sifre)) {
    return 'Şifre en az bir harf ve bir rakam içermelidir.'
  }
  return null
}

function randomPassword(bytes = 9) {
  return crypto.randomBytes(bytes).toString('base64url')
}

let cachedSecret: string | null = null

async function jwtSecret(): Promise<string> {
  if (cachedSecret) return cachedSecret
  const fromEnv = process.env.JWT_SECRET?.trim()
  if (fromEnv && fromEnv.length >= 32) {
    cachedSecret = fromEnv
    return cachedSecret
  }
  const row = await sqlOne<{ deger: string }>('SELECT deger FROM app_meta WHERE anahtar = $1', [
    'jwt_secret',
  ])
  if (row?.deger && row.deger.length >= 32) {
    cachedSecret = row.deger
    return cachedSecret
  }
  const generated = crypto.randomBytes(48).toString('base64url')
  await sql(
    `INSERT INTO app_meta (anahtar, deger) VALUES ($1, $2)
     ON CONFLICT (anahtar) DO UPDATE SET deger = EXCLUDED.deger`,
    ['jwt_secret', generated],
  )
  cachedSecret = generated
  return cachedSecret
}

export async function signToken(user: PublicKullanici) {
  return jwt.sign({ sub: user.id, rol: user.rol }, await jwtSecret(), { expiresIn: '7d' })
}

function cookieSecure() {
  return Boolean(process.env.CURSOR_APP_ID) || process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL)
}

export function setSessionCookieHeader(token: string) {
  const parts = [
    `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${7 * 24 * 60 * 60}`,
  ]
  if (cookieSecure()) parts.push('Secure')
  return parts.join('; ')
}

export function clearSessionCookieHeader() {
  const parts = [`${SESSION_COOKIE}=`, 'Path=/', 'HttpOnly', 'SameSite=Lax', 'Max-Age=0']
  if (cookieSecure()) parts.push('Secure')
  return parts.join('; ')
}

function readCookie(req: Request, name: string) {
  const raw = req.headers.get('cookie') || ''
  for (const part of raw.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) return decodeURIComponent(rest.join('='))
  }
  return undefined
}

export async function requireCursorPerson(request: Request) {
  const identity = await getIdentity(request)
  if (!identity.verified) {
    return Response.json(
      { hata: 'Cursor oturumu gerekli.', reason: identity.reason },
      { status: 401, headers: { 'cache-control': 'private, no-store' } },
    )
  }
  if (identity.kind !== 'person') {
    return Response.json(
      { hata: 'Bu uygulama yalnızca kişisel Cursor oturumu ile kullanılabilir.' },
      { status: 403, headers: { 'cache-control': 'private, no-store' } },
    )
  }
  const email = (identity.email || '').trim().toLowerCase()
  if (!email) {
    return Response.json(
      { hata: 'Cursor hesabında e-posta yok; giriş bağlanamaz.' },
      { status: 403, headers: { 'cache-control': 'private, no-store' } },
    )
  }
  return { email, name: identity.name || '', sub: identity.sub }
}

export async function requireSession(
  request: Request,
): Promise<Response | { user: PublicKullanici; viewerEmail: string }> {
  const viewer = await requireCursorPerson(request)
  if (viewer instanceof Response) return viewer

  const token = readCookie(request, SESSION_COOKIE)
  if (!token) {
    return Response.json(
      { hata: 'Oturum gerekli.' },
      { status: 401, headers: { 'cache-control': 'private, no-store' } },
    )
  }
  try {
    const payload = jwt.verify(token, await jwtSecret()) as { sub: string; rol: Role }
    const row = await sqlOne<KullaniciRow>(
      'SELECT * FROM kullanicilar WHERE id = $1 AND aktif = 1',
      [payload.sub],
    )
    if (!row) {
      return Response.json(
        { hata: 'Oturum geçersiz.' },
        { status: 401, headers: { 'cache-control': 'private, no-store' } },
      )
    }
    const user = mapKullanici(row)
    if (normalizeEmail(user.email) !== viewer.email) {
      return Response.json(
        { hata: 'Oturum Cursor hesabıyla eşleşmiyor. Tekrar giriş yapın.' },
        {
          status: 403,
          headers: {
            'cache-control': 'private, no-store',
            'set-cookie': clearSessionCookieHeader(),
          },
        },
      )
    }
    return { user, viewerEmail: viewer.email }
  } catch {
    return Response.json(
      { hata: 'Oturum geçersiz.' },
      { status: 401, headers: { 'cache-control': 'private, no-store' } },
    )
  }
}

async function findUserByEmail(email: string) {
  return sqlOne<KullaniciRow>(
    'SELECT * FROM kullanicilar WHERE lower(email) = $1 AND aktif = 1',
    [normalizeEmail(email)],
  )
}

async function upsertAdmin(input: {
  password: string
  email: string
  now: string
  adSoyad?: string
}) {
  const adSoyad = input.adSoyad || 'Operasyon Yöneticisi'
  const hash = bcrypt.hashSync(input.password, 10)
  const byName = await sqlOne<{ id: string }>(
    'SELECT id FROM kullanicilar WHERE lower(kullanici_adi) = lower($1)',
    ['admin'],
  )
  if (byName) {
    await sql(
      `UPDATE kullanicilar
       SET sifre_hash = $1, ad_soyad = $2, email = $3, rol = 'admin', aktif = 1
       WHERE id = $4`,
      [hash, adSoyad, input.email, byName.id],
    )
    return byName.id
  }
  await sql(
    `INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, email, rol, aktif, olusturma_zamani)
     VALUES ('u-admin', 'admin', $1, $2, $3, 'admin', 1, $4)`,
    [hash, adSoyad, input.email, input.now],
  )
  return 'u-admin'
}

async function seedSampleJobsIfEmpty(adminId: string) {
  const count = await sqlOne<{ c: string | number }>('SELECT COUNT(*)::int AS c FROM is_emirleri')
  if (Number(count?.c || 0) > 0) return
  const now = new Date().toISOString()
  const bugun = now.slice(0, 10)
  const isler = [
    {
      id: 'ie-1001',
      baslik: 'Gebze → Ankara parça sevkiyatı',
      aciklama: 'Paletli yük, 12 ton.',
      tip: 'nakliye',
      durum: 'bekliyor',
      lokasyon: 'Gebze / Ankara',
      tarih: bugun,
      arac: '34 ABC 120 · Tır',
    },
    {
      id: 'ie-1002',
      baslik: 'Depo A — giriş mal kabul',
      aciklama: 'Raf B3–B5 yerleştirme.',
      tip: 'depo',
      durum: 'bekliyor',
      lokasyon: 'Merkez Depo A',
      tarih: bugun,
      arac: '',
    },
    {
      id: 'ie-1003',
      baslik: 'D100 km 42–58 yol survey',
      aciklama: 'Dar viraj ve yükseklik kısıtlarını belgele.',
      tip: 'survey',
      durum: 'bekliyor',
      lokasyon: 'D100 / Sakarya',
      tarih: bugun,
      arac: '34 SVY 05 · Pikap',
    },
  ]
  for (const ie of isler) {
    await sql(
      `INSERT INTO is_emirleri (
        id, baslik, aciklama, tip, durum, lokasyon, tarih, atanan_id, arac, notlar,
        olusturan_id, olusturma_zamani, guncelleme_zamani
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,NULL,$8,'',$9,$10,$10)`,
      [
        ie.id,
        ie.baslik,
        ie.aciklama,
        ie.tip,
        ie.durum,
        ie.lokasyon,
        ie.tarih,
        ie.arac,
        adminId,
        now,
      ],
    )
  }
}

/**
 * Şifresiz Cursor girişi.
 * - Kayıtlı e-posta → oturum
 * - Boş veritabanı → bu Cursor hesabı ilk admin olur (secret gerekmez)
 * - Opsiyonel SEED_ADMIN_EMAIL varsa yalnızca o e-posta ilk admin olabilir
 */
export async function loginOrBootstrapFromCursor(input: {
  email: string
  name?: string
}): Promise<KullaniciRow> {
  if (!isBootstrapOpen()) {
    throw new Error('Şifresiz giriş kapalı. SEED_ADMIN_PASSWORD tanımlı.')
  }
  const email = normalizeEmail(input.email)
  if (!isValidEmail(email)) throw new Error('Cursor e-postası geçersiz.')

  const existing = await findUserByEmail(email)
  if (existing) return existing

  const ownerEmail = resolveBootstrapOwnerEmail()
  if (ownerEmail && email !== ownerEmail) {
    throw new Error('Şifresiz giriş yalnızca tanımlı sahip hesabı içindir.')
  }

  const count = await sqlOne<{ c: string | number }>('SELECT COUNT(*)::int AS c FROM kullanicilar')
  if (Number(count?.c || 0) > 0) {
    throw new Error('Bu Cursor hesabı kayıtlı değil. Admin sizi kullanıcı olarak eklemeli.')
  }

  const now = new Date().toISOString()
  const placeholder = `Boot-${randomPassword(12)}1a`
  const adSoyad = (input.name || '').trim() || 'Operasyon Yöneticisi'
  const adminId = await upsertAdmin({ password: placeholder, email, now, adSoyad })
  await seedSampleJobsIfEmpty(adminId)
  const row = await sqlOne<KullaniciRow>('SELECT * FROM kullanicilar WHERE id = $1', [adminId])
  if (!row) throw new Error('Admin oluşturulamadı.')
  return row
}

export async function loginWithPassword(kullaniciAdi: string, sifre: string, viewerEmail: string) {
  const row = await sqlOne<KullaniciRow>(
    'SELECT * FROM kullanicilar WHERE lower(kullanici_adi) = lower($1) AND aktif = 1',
    [kullaniciAdi],
  )
  if (!row || !bcrypt.compareSync(sifre, row.sifre_hash)) {
    throw new Error('Kullanıcı adı veya şifre hatalı.')
  }
  if (!row.email || normalizeEmail(row.email) !== viewerEmail) {
    throw new Error(
      'Bu Cursor hesabı bu kullanıcıya bağlı değil. Hesap e-postası Cursor e-postanızla aynı olmalı.',
    )
  }
  return row
}

export { mapIsEmri, mapKullanici, sql, sqlOne }
export type { IsEmriDurum, IsEmriRow, IsEmriTipi, KullaniciRow, PublicKullanici, Role }
