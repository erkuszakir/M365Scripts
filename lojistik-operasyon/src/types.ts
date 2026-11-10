export type Role = 'admin' | 'user'

export type IsEmriTipi = 'nakliye' | 'depo' | 'survey'

export type IsEmriDurum =
  | 'bekliyor'
  | 'atandi'
  | 'devam'
  | 'tamamlandi'
  | 'sorunlu'

export interface Kullanici {
  id: string
  kullaniciAdi: string
  adSoyad: string
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

export const TIP_ETIKET: Record<IsEmriTipi, string> = {
  nakliye: 'Nakliye',
  depo: 'Depo',
  survey: 'Yol Survey',
}

export const DURUM_ETIKET: Record<IsEmriDurum, string> = {
  bekliyor: 'Bekliyor',
  atandi: 'Atandı',
  devam: 'Devam ediyor',
  tamamlandi: 'Tamamlandı',
  sorunlu: 'Sorunlu',
}
