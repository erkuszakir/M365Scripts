-- İş emri tiplerini genişlet: yol etüdü + yük gözetmenliği
ALTER TABLE is_emirleri DROP CONSTRAINT IF EXISTS is_emirleri_tip_check;
ALTER TABLE is_emirleri ADD CONSTRAINT is_emirleri_tip_check
  CHECK (tip IN ('nakliye', 'depo', 'survey', 'etut', 'gozetmenlik'));

CREATE TABLE IF NOT EXISTS demirbas (
  id TEXT PRIMARY KEY,
  ad TEXT NOT NULL,
  kod TEXT NOT NULL DEFAULT '',
  lokasyon TEXT NOT NULL DEFAULT '',
  durum TEXT NOT NULL CHECK (durum IN ('aktif', 'arizali', 'hurda', 'zimmetli')),
  adet INTEGER NOT NULL DEFAULT 1,
  notlar TEXT NOT NULL DEFAULT '',
  olusturan_id TEXT NOT NULL REFERENCES kullanicilar(id),
  olusturma_zamani TEXT NOT NULL,
  guncelleme_zamani TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS satin_alma (
  id TEXT PRIMARY KEY,
  baslik TEXT NOT NULL,
  aciklama TEXT NOT NULL DEFAULT '',
  tutar NUMERIC(14, 2) NOT NULL DEFAULT 0,
  para_birimi TEXT NOT NULL DEFAULT 'TRY',
  durum TEXT NOT NULL CHECK (durum IN ('taslak', 'onay_bekliyor', 'onaylandi', 'red', 'tamamlandi')),
  talep_eden_id TEXT NOT NULL REFERENCES kullanicilar(id),
  olusturma_zamani TEXT NOT NULL,
  guncelleme_zamani TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS para_talebi (
  id TEXT PRIMARY KEY,
  baslik TEXT NOT NULL,
  tutar NUMERIC(14, 2) NOT NULL DEFAULT 0,
  para_birimi TEXT NOT NULL DEFAULT 'TRY',
  gerekce TEXT NOT NULL DEFAULT '',
  durum TEXT NOT NULL CHECK (durum IN ('bekliyor', 'onaylandi', 'odendi', 'red')),
  talep_eden_id TEXT NOT NULL REFERENCES kullanicilar(id),
  olusturma_zamani TEXT NOT NULL,
  guncelleme_zamani TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS crm_musteriler (
  id TEXT PRIMARY KEY,
  firma TEXT NOT NULL,
  yetkili TEXT NOT NULL DEFAULT '',
  telefon TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  durum TEXT NOT NULL CHECK (durum IN ('lead', 'aktif', 'pasif')),
  notlar TEXT NOT NULL DEFAULT '',
  olusturan_id TEXT NOT NULL REFERENCES kullanicilar(id),
  olusturma_zamani TEXT NOT NULL,
  guncelleme_zamani TEXT NOT NULL
);
