import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { api } from '../lib/api'
import { ONAY_ESIGI_TRY, PARA_DURUM_ETIKET, type ParaTalebi } from '../types'

export function ParaTalebiPage() {
  const { oturum } = useApp()
  const rol = oturum?.rol
  const [kayitlar, setKayitlar] = useState<ParaTalebi[]>([])
  const [esik, setEsik] = useState(ONAY_ESIGI_TRY)
  const [hata, setHata] = useState<string | null>(null)
  const [baslik, setBaslik] = useState('')
  const [tutar, setTutar] = useState('')
  const [gerekce, setGerekce] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  async function yukle() {
    try {
      const res = await api.paraTalebi()
      setKayitlar(res.kayitlar)
      setEsik(res.onayEsigi)
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
      await api.paraTalebiEkle({
        baslik,
        tutar: Number(tutar) || 0,
        paraBirimi: 'TRY',
        gerekce,
      })
      setBaslik('')
      setTutar('')
      setGerekce('')
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Kaydedilemedi.')
    } finally {
      setKaydediliyor(false)
    }
  }

  async function aksiyon(id: string, a: 'onayla' | 'red' | 'ode') {
    try {
      await api.paraTalebiAksiyon(id, { aksiyon: a })
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Güncellenemedi.')
    }
  }

  function canOnay(k: ParaTalebi) {
    if (k.durum === 'amir_onay_bekliyor') return rol === 'amir' || rol === 'admin'
    if (k.durum === 'ceo_onay_bekliyor') return rol === 'admin'
    return false
  }

  const tutarNum = Number(tutar) || 0
  const rota =
    tutarNum <= esik
      ? `≤ ${esik.toLocaleString('tr-TR')} TL → ilk amir onayı`
      : `> ${esik.toLocaleString('tr-TR')} TL → CEO onayı`

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <Link to="/moduller" className="text-link">
            ← Modüller
          </Link>
          <h1>Para talebi</h1>
          <p className="muted">
            Yönetici onaylı · {esik.toLocaleString('tr-TR')} TL eşiği
          </p>
        </div>
      </header>

      {hata && <p className="form-error">{hata}</p>}

      <form className="form-panel" onSubmit={onSubmit}>
        <label>
          Başlık
          <input value={baslik} onChange={(e) => setBaslik(e.target.value)} required />
        </label>
        <label>
          Tutar (TRY)
          <input
            type="number"
            min={0}
            step="0.01"
            value={tutar}
            onChange={(e) => setTutar(e.target.value)}
            required
          />
        </label>
        <label>
          Gerekçe
          <textarea value={gerekce} onChange={(e) => setGerekce(e.target.value)} rows={2} />
        </label>
        <p className="muted">{rota}</p>
        <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
          {kaydediliyor ? 'Kaydediliyor…' : 'Talep gönder'}
        </button>
      </form>

      <ul className="job-list">
        {kayitlar.length === 0 && <li className="empty">Henüz para talebi yok.</li>}
        {kayitlar.map((k) => (
          <li key={k.id} className="job-row static-row stack-item">
            <div className="job-main">
              <div className="job-tags">
                <span className="badge badge-tip">{PARA_DURUM_ETIKET[k.durum]}</span>
                <span className="badge badge-tip">
                  {k.tutar <= esik ? 'Amir rotası' : 'CEO rotası'}
                </span>
              </div>
              <strong>{k.baslik}</strong>
              <span className="muted">
                {k.tutar.toLocaleString('tr-TR')} {k.paraBirimi}
                {k.gerekce ? ` · ${k.gerekce}` : ''}
              </span>
            </div>
            {canOnay(k) && (
              <div className="inline-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => void aksiyon(k.id, 'onayla')}
                >
                  Onayla
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => void aksiyon(k.id, 'red')}
                >
                  Red
                </button>
              </div>
            )}
            {rol === 'admin' && k.durum === 'onaylandi' && (
              <div className="inline-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => void aksiyon(k.id, 'ode')}
                >
                  Ödendi
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
