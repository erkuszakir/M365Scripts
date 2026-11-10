export type Role = 'admin' | 'user'
export type IsEmriTipi = 'nakliye' | 'depo' | 'survey'
export type IsEmriDurum = 'bekliyor' | 'atandi' | 'devam' | 'tamamlandi' | 'sorunlu'

export interface KullaniciRow {
  id: string
  kullanici_adi: string
  sifre_hash: string
  ad_soyad: string
  rol: Role
  aktif: number
  olusturma_zamani: string
}

export interface IsEmriRow {
  id: string
  baslik: string
  aciklama: string
  tip: IsEmriTipi
  durum: IsEmriDurum
  lokasyon: string
  tarih: string
  atanan_id: string | null
  arac: string
  notlar: string
  olusturan_id: string
  olusturma_zamani: string
  guncelleme_zamani: string
}

export interface PublicKullanici {
  id: string
  kullaniciAdi: string
  adSoyad: string
  rol: Role
  aktif: boolean
}

export interface PublicIsEmri {
  id: string
  baslik: string
  aciklama: string
  tip: IsEmriTipi
  durum: IsEmriDurum
  lokasyon: string
  tarih: string
  atananId: string | null
  arac: string
  notlar: string
  olusturanId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export function mapKullanici(row: KullaniciRow): PublicKullanici {
  return {
    id: row.id,
    kullaniciAdi: row.kullanici_adi,
    adSoyad: row.ad_soyad,
    rol: row.rol,
    aktif: row.aktif === 1,
  }
}

export function mapIsEmri(row: IsEmriRow): PublicIsEmri {
  return {
    id: row.id,
    baslik: row.baslik,
    aciklama: row.aciklama,
    tip: row.tip,
    durum: row.durum,
    lokasyon: row.lokasyon,
    tarih: row.tarih,
    atananId: row.atanan_id,
    arac: row.arac,
    notlar: row.notlar,
    olusturanId: row.olusturan_id,
    olusturmaZamani: row.olusturma_zamani,
    guncellemeZamani: row.guncelleme_zamani,
  }
}
