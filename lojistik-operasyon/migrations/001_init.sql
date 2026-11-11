CREATE TABLE IF NOT EXISTS kullanicilar (
  id TEXT PRIMARY KEY,
  kullanici_adi TEXT NOT NULL UNIQUE,
  sifre_hash TEXT NOT NULL,
  ad_soyad TEXT NOT NULL,
  email TEXT NOT NULL DEFAULT '',
  rol TEXT NOT NULL CHECK (rol IN ('admin', 'user')),
  aktif INTEGER NOT NULL DEFAULT 1,
  olusturma_zamani TEXT NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_kullanicilar_email_unique
  ON kullanicilar (lower(email))
  WHERE email <> '';

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

CREATE TABLE IF NOT EXISTS app_meta (
  anahtar TEXT PRIMARY KEY,
  deger TEXT NOT NULL
);
