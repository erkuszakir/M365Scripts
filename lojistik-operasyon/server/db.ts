import Database from 'better-sqlite3'
import bcrypt from 'bcryptjs'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomPassword } from './secret.js'

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

  const count = db.prepare('SELECT COUNT(*) AS c FROM kullanicilar').get() as { c: number }
  if (count.c === 0) seed()
}

function hash(sifre: string) {
  return bcrypt.hashSync(sifre, 10)
}

function resolveSeedPasswords() {
  const admin =
    process.env.SEED_ADMIN_PASSWORD?.trim() || `Adm-${randomPassword(6)}`
  const user = process.env.SEED_USER_PASSWORD?.trim() || `Usr-${randomPassword(6)}`
  return { admin, user }
}

function writeLocalCredentials(adminPass: string, userPass: string) {
  const lines = [
    'İlk giriş bilgileri (yalnızca yerel dosya; git’e girmez)',
    `admin / ${adminPass}`,
    `ahmet / ${userPass}`,
    `mehmet / ${userPass}`,
    `ayse / ${userPass}`,
    '',
    'Bu dosyayı güvenli tutun veya ilk girişten sonra şifreleri değiştirin.',
  ]
  fs.writeFileSync(credentialsFile, lines.join('\n'), { mode: 0o600 })
  console.warn('[kurulum] Örnek kullanıcı şifreleri server/data/ilk-giris.txt dosyasına yazıldı.')
}

function seed() {
  const now = new Date().toISOString()
  const bugun = now.slice(0, 10)
  const { admin: adminPass, user: userPass } = resolveSeedPasswords()

  const insertUser = db.prepare(`
    INSERT INTO kullanicilar (id, kullanici_adi, sifre_hash, ad_soyad, rol, aktif, olusturma_zamani)
    VALUES (@id, @kullaniciAdi, @sifreHash, @adSoyad, @rol, 1, @olusturmaZamani)
  `)
  const insertIs = db.prepare(`
    INSERT INTO is_emirleri (
      id, baslik, aciklama, tip, durum, lokasyon, tarih, atanan_id, arac, notlar,
      olusturan_id, olusturma_zamani, guncelleme_zamani
    ) VALUES (
      @id, @baslik, @aciklama, @tip, @durum, @lokasyon, @tarih, @atananId, @arac, @notlar,
      @olusturanId, @olusturmaZamani, @guncellemeZamani
    )
  `)

  const tx = db.transaction(() => {
    insertUser.run({
      id: 'u-admin',
      kullaniciAdi: 'admin',
      sifreHash: hash(adminPass),
      adSoyad: 'Operasyon Yöneticisi',
      rol: 'admin',
      olusturmaZamani: now,
    })
    insertUser.run({
      id: 'u-ahmet',
      kullaniciAdi: 'ahmet',
      sifreHash: hash(userPass),
      adSoyad: 'Ahmet Yılmaz',
      rol: 'user',
      olusturmaZamani: now,
    })
    insertUser.run({
      id: 'u-mehmet',
      kullaniciAdi: 'mehmet',
      sifreHash: hash(userPass),
      adSoyad: 'Mehmet Kara',
      rol: 'user',
      olusturmaZamani: now,
    })
    insertUser.run({
      id: 'u-ayse',
      kullaniciAdi: 'ayse',
      sifreHash: hash(userPass),
      adSoyad: 'Ayşe Demir',
      rol: 'user',
      olusturmaZamani: now,
    })

    const isler = [
      {
        id: 'ie-1001',
        baslik: 'Gebze → Ankara parça sevkiyatı',
        aciklama: 'Paletli yük, 12 ton. Alıcı depo 09:00–16:00 arası teslim kabul ediyor.',
        tip: 'nakliye',
        durum: 'devam',
        lokasyon: 'Gebze / Ankara',
        tarih: bugun,
        atananId: 'u-ahmet',
        arac: '34 ABC 120 · Tır',
        notlar: 'Çıkış tartısı yapıldı.',
        olusturanId: 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      },
      {
        id: 'ie-1002',
        baslik: 'Depo A — giriş mal kabul',
        aciklama: 'Tedarikçi irsaliyesi. Raf B3–B5 yerleştirme.',
        tip: 'depo',
        durum: 'atandi',
        lokasyon: 'Merkez Depo A',
        tarih: bugun,
        atananId: 'u-ayse',
        arac: '',
        notlar: '',
        olusturanId: 'u-admin',
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
        olusturanId: 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      },
      {
        id: 'ie-1004',
        baslik: 'İzmir depo çıkış — 8 palet',
        aciklama: 'Soğuk zincir değil. Müşteri randevusu 14:00.',
        tip: 'nakliye',
        durum: 'atandi',
        lokasyon: 'İzmir → Manisa',
        tarih: bugun,
        atananId: 'u-mehmet',
        arac: '35 KRF 88 · Kamyon',
        notlar: '',
        olusturanId: 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      },
      {
        id: 'ie-1005',
        baslik: 'Depo B sayım düzeltmesi',
        aciklama: 'SKU-778 farkı kapatılacak. Foto ile teyit.',
        tip: 'depo',
        durum: 'sorunlu',
        lokasyon: 'Merkez Depo B',
        tarih: bugun,
        atananId: 'u-ayse',
        arac: '',
        notlar: 'Raf etiketi okunmuyor.',
        olusturanId: 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      },
      {
        id: 'ie-1006',
        baslik: 'TEM güzergâh keşfi',
        aciklama: 'Ağır tonaj için alternatif çıkış noktaları.',
        tip: 'survey',
        durum: 'tamamlandi',
        lokasyon: 'TEM / İstanbul Anadolu',
        tarih: bugun,
        atananId: 'u-mehmet',
        arac: '34 SVY 05 · Pikap',
        notlar: 'Rapor operasyona iletildi.',
        olusturanId: 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      },
    ]

    for (const ie of isler) insertIs.run(ie)
  })

  tx()
  writeLocalCredentials(adminPass, userPass)
}

export function resetDemoDb() {
  db.exec('DELETE FROM is_emirleri; DELETE FROM kullanicilar;')
  seed()
}
