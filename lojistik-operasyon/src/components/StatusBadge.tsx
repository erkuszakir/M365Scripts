import { DURUM_ETIKET, TIP_ETIKET, type IsEmriDurum, type IsEmriTipi } from '../types'

export function DurumBadge({ durum }: { durum: IsEmriDurum }) {
  return <span className={`badge badge-durum badge-${durum}`}>{DURUM_ETIKET[durum]}</span>
}

export function TipBadge({ tip }: { tip: IsEmriTipi }) {
  return <span className={`badge badge-tip badge-tip-${tip}`}>{TIP_ETIKET[tip]}</span>
}
