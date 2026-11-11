import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import { CRM_DURUM_ETIKET, type CrmDurum, type CrmMusteri } from '../types'

export function CrmPage() {
  const [kayitlar, setKayitlar] = useState<CrmMusteri[]>([])
  const [hata, setHata] = useState<string | null>(null)
  const [firma, setFirma] = useState('')
  const [yetkili, setYetkili] = useState('')
  const [telefon, setTelefon] = useState('')
  const [email, setEmail] = useState('')
  const [durum, setDurum] = useState<CrmDurum>('lead')
  const [notlar, setNotlar] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  async function yukle() {
    try {
      const res = await api.crm()
      setKayitlar(res.kayitlar)
      setHata(null)
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Yüklenemedi.')
    }
  }

  useEffect(() => {
    void yukle()
  }, [])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setKaydediliyor(true)
    try {
      await api.crmEkle({ firma, yetkili, telefon, email, durum, notlar })
      setFirma('')
      setYetkili('')
      setTelefon('')
      setEmail('')
      setDurum('lead')
      setNotlar('')
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Kaydedilemedi.')
    } finally {
      setKaydediliyor(false)
    }
  }

  async function durumDegistir(id: string, yeni: CrmDurum) {
    try {
      await api.crmGuncelle(id, { durum: yeni })
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Güncellenemedi.')
    }
  }

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <Link to="/moduller" className="text-link">
            ← Modüller
          </Link>
          <h1>CRM</h1>
          <p className="muted">{kayitlar.length} müşteri / aday</p>
        </div>
      </header>

      {hata && <p className="form-error">{hata}</p>}

      <form className="form-panel" onSubmit={onSubmit}>
        <label>
          Firma
          <input value={firma} onChange={(e) => setFirma(e.target.value)} required />
        </label>
        <label>
          Yetkili
          <input value={yetkili} onChange={(e) => setYetkili(e.target.value)} />
        </label>
        <label>
          Telefon
          <input value={telefon} onChange={(e) => setTelefon(e.target.value)} />
        </label>
        <label>
          E-posta
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Durum
          <select value={durum} onChange={(e) => setDurum(e.target.value as CrmDurum)}>
            {(Object.keys(CRM_DURUM_ETIKET) as CrmDurum[]).map((d) => (
              <option key={d} value={d}>
                {CRM_DURUM_ETIKET[d]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Notlar
          <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} rows={2} />
        </label>
        <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
          {kaydediliyor ? 'Kaydediliyor…' : 'Müşteri ekle'}
        </button>
      </form>

      <ul className="job-list">
        {kayitlar.length === 0 && <li className="empty">Henüz CRM kaydı yok.</li>}
        {kayitlar.map((k) => (
          <li key={k.id} className="job-row static-row stack-item">
            <div className="job-main">
              <div className="job-tags">
                <span className="badge badge-tip">{CRM_DURUM_ETIKET[k.durum]}</span>
              </div>
              <strong>{k.firma}</strong>
              <span className="muted">
                {[k.yetkili, k.telefon, k.email].filter(Boolean).join(' · ') || 'İletişim yok'}
              </span>
              {k.notlar ? <span className="muted">{k.notlar}</span> : null}
            </div>
            <div className="inline-actions">
              {k.durum !== 'aktif' && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => void durumDegistir(k.id, 'aktif')}
                >
                  Aktif yap
                </button>
              )}
              {k.durum !== 'pasif' && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => void durumDegistir(k.id, 'pasif')}
                >
                  Pasif
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
