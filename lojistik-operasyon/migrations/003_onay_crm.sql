-- Amir rolü (admin = CEO onay yetkisi)
ALTER TABLE kullanicilar DROP CONSTRAINT IF EXISTS kullanicilar_rol_check;
ALTER TABLE kullanicilar ADD CONSTRAINT kullanicilar_rol_check
  CHECK (rol IN ('admin', 'amir', 'user'));

-- Satın alma onay durumları
UPDATE satin_alma SET durum = 'amir_onay_bekliyor' WHERE durum IN ('taslak', 'onay_bekliyor');
ALTER TABLE satin_alma DROP CONSTRAINT IF EXISTS satin_alma_durum_check;
ALTER TABLE satin_alma ADD CONSTRAINT satin_alma_durum_check
  CHECK (durum IN ('amir_onay_bekliyor', 'ceo_onay_bekliyor', 'onaylandi', 'red', 'tamamlandi'));
ALTER TABLE satin_alma ADD COLUMN IF NOT EXISTS onaylayan_id TEXT REFERENCES kullanicilar(id);
ALTER TABLE satin_alma ADD COLUMN IF NOT EXISTS onay_notu TEXT NOT NULL DEFAULT '';

-- Para talebi onay durumları
UPDATE para_talebi SET durum = 'amir_onay_bekliyor' WHERE durum = 'bekliyor';
ALTER TABLE para_talebi DROP CONSTRAINT IF EXISTS para_talebi_durum_check;
ALTER TABLE para_talebi ADD CONSTRAINT para_talebi_durum_check
  CHECK (durum IN ('amir_onay_bekliyor', 'ceo_onay_bekliyor', 'onaylandi', 'odendi', 'red'));
ALTER TABLE para_talebi ADD COLUMN IF NOT EXISTS onaylayan_id TEXT REFERENCES kullanicilar(id);
ALTER TABLE para_talebi ADD COLUMN IF NOT EXISTS onay_notu TEXT NOT NULL DEFAULT '';

-- CRM zengin alanlar
ALTER TABLE crm_musteriler ADD COLUMN IF NOT EXISTS sektor TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_musteriler ADD COLUMN IF NOT EXISTS sehir TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_musteriler ADD COLUMN IF NOT EXISTS kaynak TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_musteriler ADD COLUMN IF NOT EXISTS tahmini_ciro NUMERIC(14, 2) NOT NULL DEFAULT 0;
ALTER TABLE crm_musteriler ADD COLUMN IF NOT EXISTS son_gorusme TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS crm_aktiviteler (
  id TEXT PRIMARY KEY,
  musteri_id TEXT NOT NULL REFERENCES crm_musteriler(id) ON DELETE CASCADE,
  tip TEXT NOT NULL CHECK (tip IN ('arama', 'toplanti', 'teklif', 'email', 'not')),
  baslik TEXT NOT NULL,
  detay TEXT NOT NULL DEFAULT '',
  olusturan_id TEXT NOT NULL REFERENCES kullanicilar(id),
  olusturma_zamani TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_crm_aktiviteler_musteri
  ON crm_aktiviteler (musteri_id, olusturma_zamani DESC);
