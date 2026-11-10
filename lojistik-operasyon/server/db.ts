import Database from 'better-sqlite3'
import bcrypt from 'bcryptjs'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isLocalDev, randomPassword, validatePassword } from './secret.js'
import { isValidEmail, normalizeEmail } from './types.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, 'data')
const dbPath = path.join(dataDir, 'lojistik.sqlite')
const credentialsFile = path.join(dataDir, 'ilk-giris.txt')

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

export const db = new Database(dbPath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

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
  if (count.c === 0) seed()
  else syncAdminSeed()
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

function resolveAdminSeed(): { password: string; email: string; fromEnv: boolean } {
  const adminPass = process.env.SEED_ADMIN_PASSWORD?.trim()
  const adminEmailRaw = process.env.SEED_ADMIN_EMAIL?.trim()

  if (adminPass) {
    const passErr = validatePassword(adminPass)
    if (passErr) throw new Error(`SEED_ADMIN_PASSWORD geçersiz: ${passErr}`)
    if (!adminEmailRaw) {
      throw new Error('SEED_ADMIN_EMAIL zorunlu (Cursor hesabınızın e-postası).')
    }
    const email = normalizeEmail(adminEmailRaw)
    if (!isValidEmail(email)) throw new Error('SEED_ADMIN_EMAIL geçersiz.')
    return { password: adminPass, email, fromEnv: true }
  }

  if (!isLocalDev()) {
    throw new Error(
      'SEED_ADMIN_PASSWORD ve SEED_ADMIN_EMAIL zorunlu. Cursor Secrets’a ekleyin.',
    )
  }

  return {
    password: `Adm-${randomPassword(6)}1`,
    email: 'dev@example.com',
    fromEnv: false,
  }
}

function upsertAdmin(input: { password: string; email: string; now: string }) {
  const byName = db
    .prepare('SELECT id FROM kullanicilar WHERE kullanici_adi = ? COLLATE NOCASE')
    .get('admin') as { id: string } | undefined

  if (byName) {
    db.prepare(
      `UPDATE kullanicilar
       SET sifre_hash = ?, ad_soyad = ?, email = ?, rol = 'admin', aktif = 1
       WHERE id = ?`,
    ).run(hash(input.password), 'Operasyon Yöneticisi', input.email, byName.id)
    return byName.id
  }

  db.prepare(`
    INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, email, rol, aktif, olusturma_zamani)
    VALUES ('u-admin', 'admin', ?, 'Operasyon Yöneticisi', ?, 'admin', 1, ?)
  `).run(hash(input.password), input.email, input.now)
  return 'u-admin'
}

/** Yalnızca admin seed secret’larını senkronlar. Paylaşılan saha şifresi yok. */
export function syncAdminSeed() {
  const adminPass = process.env.SEED_ADMIN_PASSWORD?.trim()
  if (!adminPass) return
  const { password, email } = resolveAdminSeed()
  upsertAdmin({ password, email, now: new Date().toISOString() })
}

function writeLocalCredentials(password: string, email: string) {
  if (!isLocalDev()) return
  const lines = [
    'Yerel geliştirme (git’e girmez)',
    `kullanıcı: admin`,
    `e-posta (Cursor simülasyonu ile eşleşmeli): ${email}`,
    `şifre: ${password}`,
    '',
    'Saha kullanıcıları seed edilmez; admin panelinden e-posta + benzersiz şifre ile ekleyin.',
  ]
  fs.writeFileSync(credentialsFile, lines.join('\n'), { mode: 0o600 })
  console.warn('[kurulum] Yerel admin bilgileri server/data/ilk-giris.txt dosyasına yazıldı.')
}

function seed() {
  const now = new Date().toISOString()
  const bugun = now.slice(0, 10)
  const { password, email, fromEnv } = resolveAdminSeed()
  const adminId = upsertAdmin({ password, email, now })

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
      aciklama: 'Paletli yük, 12 ton. Alıcı depo 09:00–16:00 arası teslim kabul ediyor.',
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
      aciklama: 'Tedarikçi irsaliyesi. Raf B3–B5 yerleştirme.',
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
      aciklama: 'Köprü geçişleri, dar viraj ve yükseklik kısıtlarını belgele.',
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

  if (!fromEnv) writeLocalCredentials(password, email)
  else console.warn('[kurulum] Admin SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD ile hazır.')
}
