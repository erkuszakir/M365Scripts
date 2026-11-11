export type Role = 'admin' | 'user'

export type IsEmriTipi = 'nakliye' | 'depo' | 'survey' | 'etut' | 'gozetmenlik'

export type IsEmriDurum =
  | 'bekliyor'
  | 'atandi'
  | 'devam'
  | 'tamamlandi'
  | 'sorunlu'

export type DemirbasDurum = 'aktif' | 'arizali' | 'hurda' | 'zimmetli'
export type SatinAlmaDurum = 'taslak' | 'onay_bekliyor' | 'onaylandi' | 'red' | 'tamamlandi'
export type ParaTalebiDurum = 'bekliyor' | 'onaylandi' | 'odendi' | 'red'
export type CrmDurum = 'lead' | 'aktif' | 'pasif'

export interface Kullanici {
  id: string
  kullaniciAdi: string
  adSoyad: string
  email: string
  rol: Role
  aktif: boolean
}

export interface IsEmri {
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

export interface Demirbas {
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

export interface SatinAlma {
  id: string
  baslik: string
  aciklama: string
  tutar: number
  paraBirimi: string
  durum: SatinAlmaDurum
  talepEdenId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface ParaTalebi {
  id: string
  baslik: string
  tutar: number
  paraBirimi: string
  gerekce: string
  durum: ParaTalebiDurum
  talepEdenId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface CrmMusteri {
  id: string
  firma: string
  yetkili: string
  telefon: string
  email: string
  durum: CrmDurum
  notlar: string
  olusturanId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export const TIP_ETIKET: Record<IsEmriTipi, string> = {
  nakliye: 'Nakliye',
  depo: 'Depo',
  survey: 'Yol Survey',
  etut: 'Yol Etüdü',
  gozetmenlik: 'Gözetmenlik',
}

export const DURUM_ETIKET: Record<IsEmriDurum, string> = {
  bekliyor: 'Bekliyor',
  atandi: 'Atandı',
  devam: 'Devam ediyor',
  tamamlandi: 'Tamamlandı',
  sorunlu: 'Sorunlu',
}

export const DEMIRBAS_DURUM_ETIKET: Record<DemirbasDurum, string> = {
  aktif: 'Aktif',
  arizali: 'Arızalı',
  hurda: 'Hurda',
  zimmetli: 'Zimmetli',
}

export const SATIN_DURUM_ETIKET: Record<SatinAlmaDurum, string> = {
  taslak: 'Taslak',
  onay_bekliyor: 'Onay bekliyor',
  onaylandi: 'Onaylandı',
  red: 'Red',
  tamamlandi: 'Tamamlandı',
}

export const PARA_DURUM_ETIKET: Record<ParaTalebiDurum, string> = {
  bekliyor: 'Bekliyor',
  onaylandi: 'Onaylandı',
  odendi: 'Ödendi',
  red: 'Red',
}

export const CRM_DURUM_ETIKET: Record<CrmDurum, string> = {
  lead: 'Aday',
  aktif: 'Aktif',
  pasif: 'Pasif',
}
