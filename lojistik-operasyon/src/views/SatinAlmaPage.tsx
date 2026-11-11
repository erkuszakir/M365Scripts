import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { api } from '../lib/api'
import { SATIN_DURUM_ETIKET, type SatinAlma, type SatinAlmaDurum } from '../types'

export function SatinAlmaPage() {
  const { oturum } = useApp()
  const admin = oturum?.rol === 'admin'
  const [kayitlar, setKayitlar] = useState<SatinAlma[]>([])
  const [hata, setHata] = useState<string | null>(null)
  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [tutar, setTutar] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  async function yukle() {
    try {
      const res = await api.satinAlma()
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
      await api.satinAlmaEkle({
        baslik,
        aciklama,
        tutar: Number(tutar) || 0,
        paraBirimi: 'TRY',
      })
      setBaslik('')
      setAciklama('')
      setTutar('')
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Kaydedilemedi.')
    } finally {
      setKaydediliyor(false)
    }
  }

  async function durumDegistir(id: string, durum: SatinAlmaDurum) {
    try {
      await api.satinAlmaGuncelle(id, { durum })
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
          <h1>Satın alma</h1>
          <p className="muted">{kayitlar.length} talep</p>
        </div>
      </header>

      {hata && <p className="form-error">{hata}</p>}

      <form className="form-panel" onSubmit={onSubmit}>
        <label>
          Başlık
          <input value={baslik} onChange={(e) => setBaslik(e.target.value)} required />
        </label>
        <label>
          Açıklama
          <textarea value={aciklama} onChange={(e) => setAciklama(e.target.value)} rows={2} />
        </label>
        <label>
          Tutar (TRY)
          <input
            type="number"
            min={0}
            step="0.01"
            value={tutar}
            onChange={(e) => setTutar(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
          {kaydediliyor ? 'Kaydediliyor…' : 'Talep oluştur'}
        </button>
      </form>

      <ul className="job-list">
        {kayitlar.length === 0 && <li className="empty">Henüz satın alma talebi yok.</li>}
        {kayitlar.map((k) => (
          <li key={k.id} className="job-row static-row stack-item">
            <div className="job-main">
              <div className="job-tags">
                <span className="badge badge-tip">{SATIN_DURUM_ETIKET[k.durum]}</span>
              </div>
              <strong>{k.baslik}</strong>
              <span className="muted">
                {k.tutar.toLocaleString('tr-TR')} {k.paraBirimi}
                {k.aciklama ? ` · ${k.aciklama}` : ''}
              </span>
            </div>
            {admin && (
              <div className="inline-actions">
                {k.durum === 'onay_bekliyor' && (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => void durumDegistir(k.id, 'onaylandi')}
                    >
                      Onayla
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => void durumDegistir(k.id, 'red')}
                    >
                      Red
                    </button>
                  </>
                )}
                {k.durum === 'onaylandi' && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => void durumDegistir(k.id, 'tamamlandi')}
                  >
                    Tamamla
                  </button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
