/** Satın alma / para talebi: ≤ eşik amir, üstü CEO (admin). */
export const ONAY_ESIGI_TRY = 5000

export type OnayDurum =
  | 'amir_onay_bekliyor'
  | 'ceo_onay_bekliyor'
  | 'onaylandi'
  | 'odendi'
  | 'red'
  | 'tamamlandi'

export function baslangicOnayDurumu(tutar: number): 'amir_onay_bekliyor' | 'ceo_onay_bekliyor' {
  return Number(tutar) <= ONAY_ESIGI_TRY ? 'amir_onay_bekliyor' : 'ceo_onay_bekliyor'
}

export function canApprove(rol: string, durum: string): boolean {
  if (durum === 'amir_onay_bekliyor') return rol === 'amir' || rol === 'admin'
  if (durum === 'ceo_onay_bekliyor') return rol === 'admin'
  return false
}

export function onaySonrasiDurum(
  _tutar: number,
  mevcut: string,
  aksiyon: 'onayla' | 'red' | 'tamamla' | 'ode',
): OnayDurum | null {
  if (aksiyon === 'red') return 'red'
  if (aksiyon === 'onayla') {
    if (mevcut === 'amir_onay_bekliyor' || mevcut === 'ceo_onay_bekliyor') return 'onaylandi'
  }
  if (aksiyon === 'tamamla' && mevcut === 'onaylandi') return 'tamamlandi'
  if (aksiyon === 'ode' && mevcut === 'onaylandi') return 'odendi'
  return null
}
