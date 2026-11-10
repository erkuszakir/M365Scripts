import Database from 'better-sqlite3'
import bcrypt from 'bcryptjs'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isLocalDev, randomPassword, validatePassword } from './secret.js'
import { isValidEmail, normalizeEmail, type KullaniciRow } from './types.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, 'data')
const dbPath = path.join(dataDir, 'lojistik.sqlite')
const credentialsFile = path.join(dataDir, 'ilk-giris.txt')

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

export const db = new Database(dbPath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

/** SEED_ADMIN_PASSWORD yoksa ilk giriş şifresiz bootstrap açıktır. */
export function isBootstrapOpen() {
  return !process.env.SEED_ADMIN_PASSWORD?.trim()
}

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS kullanicilar (
      id TEXT PRIMARY KEY,
      kullanici_adi TEXT NOT NULL UNIQUE COLLATE NOCASE,
      sifre_hash TEXT NOT NULL,
      ad_soyad TEXT NOT NULL,
      email TEXT NOT NULL DEFAULT '',
      rol TEXT NOT NULL CHECK (rol IN ('admin', 'user')),
      aktif INTEGER NOT NULL DEFAULT 1,
      olusturma_zamani TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS is_emirleri (
      id TEXT PRIMARY KEY,
      baslik TEXT NOT NULL,
      aciklama TEXT NOT NULL DEFAULT '',
      tip TEXT NOT NULL CHECK (tip IN ('nakliye', 'depo', 'survey')),
      durum TEXT NOT NULL CHECK (durum IN ('bekliyor', 'atandi', 'devam', 'tamamlandi', 'sorunlu')),
      lokasyon TEXT NOT NULL DEFAULT '',
      tarih TEXT NOT NULL,
      atanan_id TEXT REFERENCES kullanicilar(id) ON DELETE SET NULL,
      arac TEXT NOT NULL DEFAULT '',
      notlar TEXT NOT NULL DEFAULT '',
      olusturan_id TEXT NOT NULL REFERENCES kullanicilar(id),
      olusturma_zamani TEXT NOT NULL,
      guncelleme_zamani TEXT NOT NULL
    );
  `)

  ensureEmailColumn()
  ensureEmailIndex()

  const count = db.prepare('SELECT COUNT(*) AS c FROM kullanicilar').get() as { c: number }
  if (count.c === 0) {
    if (process.env.SEED_ADMIN_PASSWORD?.trim()) seedWithSecrets()
    else console.warn('[kurulum] Bootstrap açık: SEED_ADMIN_PASSWORD yok, ilk giriş şifresiz.')
  } else {
    syncAdminSeed()
  }
}

function ensureEmailColumn() {
  const cols = db.prepare('PRAGMA table_info(kullanicilar)').all() as { name: string }[]
  if (!cols.some((c) => c.name === 'email')) {
    db.exec(`ALTER TABLE kullanicilar ADD COLUMN email TEXT NOT NULL DEFAULT ''`)
  }
}

function ensureEmailIndex() {
  db.exec(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_kullanicilar_email_unique
    ON kullanicilar(email)
    WHERE email != ''
  `)
}

function hash(sifre: string) {
  return bcrypt.hashSync(sifre, 10)
}

function resolveAdminSeed(): { password: string; email: string } {
  const adminPass = process.env.SEED_ADMIN_PASSWORD!.trim()
  const passErr = validatePassword(adminPass)
  if (passErr) throw new Error(`SEED_ADMIN_PASSWORD geçersiz: ${passErr}`)

  const adminEmailRaw = process.env.SEED_ADMIN_EMAIL?.trim()
  if (!adminEmailRaw) {
    throw new Error('SEED_ADMIN_EMAIL zorunlu (Cursor hesabınızın e-postası).')
  }
  const email = normalizeEmail(adminEmailRaw)
  if (!isValidEmail(email)) throw new Error('SEED_ADMIN_EMAIL geçersiz.')
  return { password: adminPass, email }
}

function upsertAdmin(input: { password: string; email: string; now: string; adSoyad?: string }) {
  const byName = db
    .prepare('SELECT id FROM kullanicilar WHERE kullanici_adi = ? COLLATE NOCASE')
    .get('admin') as { id: string } | undefined
  const adSoyad = input.adSoyad || 'Operasyon Yöneticisi'

  if (byName) {
    db.prepare(
      `UPDATE kullanicilar
       SET sifre_hash = ?, ad_soyad = ?, email = ?, rol = 'admin', aktif = 1
       WHERE id = ?`,
    ).run(hash(input.password), adSoyad, input.email, byName.id)
    return byName.id
  }

  db.prepare(`
    INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, email, rol, aktif, olusturma_zamani)
    VALUES ('u-admin', 'admin', ?, ?, ?, 'admin', 1, ?)
  `).run(hash(input.password), adSoyad, input.email, input.now)
  return 'u-admin'
}

export function syncAdminSeed() {
  const adminPass = process.env.SEED_ADMIN_PASSWORD?.trim()
  if (!adminPass) return
  const { password, email } = resolveAdminSeed()
  upsertAdmin({ password, email, now: new Date().toISOString() })
}

/**
 * Şifresiz mod: Cursor e-postasıyla oturum açar.
 * - E-posta eşleşen aktif kullanıcı varsa onu döner (admin yeniden yazılmaz).
 * - Hiç kullanıcı yoksa ilk Cursor görüntüleyicisini admin yapar.
 * - Kullanıcılar var ama e-posta eşleşmiyorsa reddeder.
 */
export function loginOrBootstrapFromCursor(input: {
  email: string
  name?: string
}): KullaniciRow {
  if (!isBootstrapOpen()) {
    throw new Error('Şifresiz giriş kapalı. SEED_ADMIN_PASSWORD tanımlı.')
  }
  const email = normalizeEmail(input.email)
  if (!isValidEmail(email)) throw new Error('Cursor e-postası geçersiz.')

  const existing = db
    .prepare('SELECT * FROM kullanicilar WHERE lower(email) = ? AND aktif = 1')
    .get(email) as KullaniciRow | undefined
  if (existing) return existing

  const userCount = db.prepare('SELECT COUNT(*) AS c FROM kullanicilar').get() as { c: number }
  if (userCount.c > 0) {
    throw new Error(
      'Bu Cursor hesabı kayıtlı değil. Admin panelinden e-posta ile kullanıcı eklenmeli.',
    )
  }

  const now = new Date().toISOString()
  const placeholder = `Boot-${randomPassword(12)}1a`
  const adSoyad = (input.name || '').trim() || 'Operasyon Yöneticisi'
  const adminId = upsertAdmin({ password: placeholder, email, now, adSoyad })
  seedSampleJobsIfEmpty(adminId)

  if (isLocalDev()) {
    fs.writeFileSync(
      credentialsFile,
      [
        'Bootstrap (şifresiz) aktif — SEED_ADMIN_PASSWORD eklenince şifre zorunlu olur.',
        `admin e-posta: ${email}`,
      ].join('\n'),
      { mode: 0o600 },
    )
  }

  return db.prepare('SELECT * FROM kullanicilar WHERE id = ?').get(adminId) as KullaniciRow
}

function seedSampleJobsIfEmpty(adminId: string) {
  const jobCount = db.prepare('SELECT COUNT(*) AS c FROM is_emirleri').get() as { c: number }
  if (jobCount.c > 0) return

  const now = new Date().toISOString()
  const bugun = now.slice(0, 10)
  const insertIs = db.prepare(`
    INSERT INTO is_emirleri (
      id, baslik, aciklama, tip, durum, lokasyon, tarih, atanan_id, arac, notlar,
      olusturan_id, olusturma_zamani, guncelleme_zamani
    ) VALUES (
      @id, @baslik, @aciklama, @tip, @durum, @lokasyon, @tarih, @atananId, @arac, @notlar,
      @olusturanId, @olusturmaZamani, @guncellemeZamani
    )
  `)

  const isler = [
    {
      id: 'ie-1001',
      baslik: 'Gebze → Ankara parça sevkiyatı',
      aciklama: 'Paletli yük, 12 ton.',
      tip: 'nakliye',
      durum: 'bekliyor',
      lokasyon: 'Gebze / Ankara',
      tarih: bugun,
      atananId: null,
      arac: '34 ABC 120 · Tır',
      notlar: '',
      olusturanId: adminId,
      olusturmaZamani: now,
      guncellemeZamani: now,
    },
    {
      id: 'ie-1002',
      baslik: 'Depo A — giriş mal kabul',
      aciklama: 'Raf B3–B5 yerleştirme.',
      tip: 'depo',
      durum: 'bekliyor',
      lokasyon: 'Merkez Depo A',
      tarih: bugun,
      atananId: null,
      arac: '',
      notlar: '',
      olusturanId: adminId,
      olusturmaZamani: now,
      guncellemeZamani: now,
    },
    {
      id: 'ie-1003',
      baslik: 'D100 km 42–58 yol survey',
      aciklama: 'Dar viraj ve yükseklik kısıtlarını belgele.',
      tip: 'survey',
      durum: 'bekliyor',
      lokasyon: 'D100 / Sakarya',
      tarih: bugun,
      atananId: null,
      arac: '34 SVY 05 · Pikap',
      notlar: '',
      olusturanId: adminId,
      olusturmaZamani: now,
      guncellemeZamani: now,
    },
  ]

  const tx = db.transaction(() => {
    for (const ie of isler) insertIs.run(ie)
  })
  tx()
}

function seedWithSecrets() {
  const now = new Date().toISOString()
  const { password, email } = resolveAdminSeed()
  const adminId = upsertAdmin({ password, email, now })
  seedSampleJobsIfEmpty(adminId)
  console.warn('[kurulum] Admin SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD ile hazır.')
}
