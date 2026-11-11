export type Role = 'admin' | 'amir' | 'user'

export type IsEmriTipi = 'nakliye' | 'depo' | 'survey' | 'etut' | 'gozetmenlik'

export type IsEmriDurum =
  | 'bekliyor'
  | 'atandi'
  | 'devam'
  | 'tamamlandi'
  | 'sorunlu'

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
  onaylayanId: string | null
  onayNotu: string
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
  onaylayanId: string | null
  onayNotu: string
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
  sektor: string
  sehir: string
  kaynak: string
  tahminiCiro: number
  sonGorusme: string
  olusturanId: string
  olusturmaZamani: string
  guncellemeZamani: string
}

export interface CrmAktivite {
  id: string
  musteriId: string
  tip: CrmAktiviteTipi
  baslik: string
  detay: string
  olusturanId: string
  olusturmaZamani: string
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
  amir_onay_bekliyor: 'Amir onayı',
  ceo_onay_bekliyor: 'CEO onayı',
  onaylandi: 'Onaylandı',
  red: 'Red',
  tamamlandi: 'Tamamlandı',
}

export const PARA_DURUM_ETIKET: Record<ParaTalebiDurum, string> = {
  amir_onay_bekliyor: 'Amir onayı',
  ceo_onay_bekliyor: 'CEO onayı',
  onaylandi: 'Onaylandı',
  odendi: 'Ödendi',
  red: 'Red',
}

export const CRM_DURUM_ETIKET: Record<CrmDurum, string> = {
  lead: 'Aday',
  aktif: 'Aktif',
  pasif: 'Pasif',
}

export const CRM_AKTIVITE_ETIKET: Record<CrmAktiviteTipi, string> = {
  arama: 'Arama',
  toplanti: 'Toplantı',
  teklif: 'Teklif',
  email: 'E-posta',
  not: 'Not',
}

export const ROL_ETIKET: Record<Role, string> = {
  admin: 'CEO / Admin',
  amir: 'İlk amir',
  user: 'Kullanıcı',
}

export const ONAY_ESIGI_TRY = 5000
