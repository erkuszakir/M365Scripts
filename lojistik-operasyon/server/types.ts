export type Role = 'admin' | 'amir' | 'user'
export type IsEmriTipi = 'nakliye' | 'depo' | 'survey' | 'etut' | 'gozetmenlik'
export type IsEmriDurum = 'bekliyor' | 'atandi' | 'devam' | 'tamamlandi' | 'sorunlu'

export type DemirbasDurum = 'aktif' | 'arizali' | 'hurda' | 'zimmetli'
export type SatinAlmaDurum =
  | 'amir_onay_bekliyor'
  | 'ceo_onay_bekliyor'
  | 'onaylandi'
  | 'red'
  | 'tamamlandi'
export type ParaTalebiDurum =
  | 'amir_onay_bekliyor'
  | 'ceo_onay_bekliyor'
  | 'onaylandi'
  | 'odendi'
  | 'red'
export type CrmDurum = 'lead' | 'aktif' | 'pasif'
export type CrmAktiviteTipi = 'arama' | 'toplanti' | 'teklif' | 'email' | 'not'

export const IS_EMRI_TIPLERI: IsEmriTipi[] = [
  'nakliye',
  'depo',
  'survey',
  'etut',
  'gozetmenlik',
]

export const ROLES: Role[] = ['admin', 'amir', 'user']

export interface KullaniciRow {
  id: string
  kullanici_adi: string
  sifre_hash: string
  ad_soyad: string
  email: string
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

export interface DemirbasRow {
  id: string
  ad: string
  kod: string
  lokasyon: string
  durum: DemirbasDurum
  adet: number
  notlar: string
  olusturan_id: string
  olusturma_zamani: string
  guncelleme_zamani: string
}

export interface SatinAlmaRow {
  id: string
  baslik: string
  aciklama: string
  tutar: string | number
  para_birimi: string
  durum: SatinAlmaDurum
  talep_eden_id: string
  onaylayan_id: string | null
  onay_notu: string
  olusturma_zamani: string
  guncelleme_zamani: string
}

export interface ParaTalebiRow {
  id: string
  baslik: string
  tutar: string | number
  para_birimi: string
  gerekce: string
  durum: ParaTalebiDurum
  talep_eden_id: string
  onaylayan_id: string | null
  onay_notu: string
  olusturma_zamani: string
  guncelleme_zamani: string
}

export interface CrmMusteriRow {
  id: string
  firma: string
  yetkili: string
  telefon: string
  email: string
  durum: CrmDurum
  notlar: string
  sektor: string
  sehir: string
  kaynak: string
  tahmini_ciro: string | number
  son_gorusme: string
  olusturan_id: string
  olusturma_zamani: string
  guncelleme_zamani: string
}

export interface CrmAktiviteRow {
  id: string
  musteri_id: string
  tip: CrmAktiviteTipi
  baslik: string
  detay: string
  olusturan_id: string
  olusturma_zamani: string
}

export interface PublicKullanici {
  id: string
  kullaniciAdi: string
  adSoyad: string
  email: string
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

export interface PublicDemirbas {
  id: string
  ad: string
  kod: string
  lokasyon: string
  durum: DemirbasDurum
  adet: number
  notlar: string
  olusturanId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface PublicSatinAlma {
  id: string
  baslik: string
  aciklama: string
  tutar: number
  paraBirimi: string
  durum: SatinAlmaDurum
  talepEdenId: string
  onaylayanId: string | null
  onayNotu: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface PublicParaTalebi {
  id: string
  baslik: string
  tutar: number
  paraBirimi: string
  gerekce: string
  durum: ParaTalebiDurum
  talepEdenId: string
  onaylayanId: string | null
  onayNotu: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface PublicCrmMusteri {
  id: string
  firma: string
  yetkili: string
  telefon: string
  email: string
  durum: CrmDurum
  notlar: string
  sektor: string
  sehir: string
  kaynak: string
  tahminiCiro: number
  sonGorusme: string
  olusturanId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface PublicCrmAktivite {
  id: string
  musteriId: string
  tip: CrmAktiviteTipi
  baslik: string
  detay: string
  olusturanId: string
  olusturmaZamani: string
}

export function mapKullanici(row: KullaniciRow): PublicKullanici {
  return {
    id: row.id,
    kullaniciAdi: row.kullanici_adi,
    adSoyad: row.ad_soyad,
    email: row.email,
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

export function mapDemirbas(row: DemirbasRow): PublicDemirbas {
  return {
    id: row.id,
    ad: row.ad,
    kod: row.kod,
    lokasyon: row.lokasyon,
    durum: row.durum,
    adet: Number(row.adet),
    notlar: row.notlar,
    olusturanId: row.olusturan_id,
    olusturmaZamani: row.olusturma_zamani,
    guncellemeZamani: row.guncelleme_zamani,
  }
}

export function mapSatinAlma(row: SatinAlmaRow): PublicSatinAlma {
  return {
    id: row.id,
    baslik: row.baslik,
    aciklama: row.aciklama,
    tutar: Number(row.tutar),
    paraBirimi: row.para_birimi,
    durum: row.durum,
    talepEdenId: row.talep_eden_id,
    onaylayanId: row.onaylayan_id ?? null,
    onayNotu: row.onay_notu || '',
    olusturmaZamani: row.olusturma_zamani,
    guncellemeZamani: row.guncelleme_zamani,
  }
}

export function mapParaTalebi(row: ParaTalebiRow): PublicParaTalebi {
  return {
    id: row.id,
    baslik: row.baslik,
    tutar: Number(row.tutar),
    paraBirimi: row.para_birimi,
    gerekce: row.gerekce,
    durum: row.durum,
    talepEdenId: row.talep_eden_id,
    onaylayanId: row.onaylayan_id ?? null,
    onayNotu: row.onay_notu || '',
    olusturmaZamani: row.olusturma_zamani,
    guncellemeZamani: row.guncelleme_zamani,
  }
}

export function mapCrmMusteri(row: CrmMusteriRow): PublicCrmMusteri {
  return {
    id: row.id,
    firma: row.firma,
    yetkili: row.yetkili,
    telefon: row.telefon,
    email: row.email,
    durum: row.durum,
    notlar: row.notlar,
    sektor: row.sektor || '',
    sehir: row.sehir || '',
    kaynak: row.kaynak || '',
    tahminiCiro: Number(row.tahmini_ciro || 0),
    sonGorusme: row.son_gorusme || '',
    olusturanId: row.olusturan_id,
    olusturmaZamani: row.olusturma_zamani,
    guncellemeZamani: row.guncelleme_zamani,
  }
}

export function mapCrmAktivite(row: CrmAktiviteRow): PublicCrmAktivite {
  return {
    id: row.id,
    musteriId: row.musteri_id,
    tip: row.tip,
    baslik: row.baslik,
    detay: row.detay,
    olusturanId: row.olusturan_id,
    olusturmaZamani: row.olusturma_zamani,
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
