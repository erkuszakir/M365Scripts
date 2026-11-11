import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import {
  DEMIRBAS_DURUM_ETIKET,
  type Demirbas,
  type DemirbasDurum,
} from '../types'

export function DemirbasPage() {
  const [kayitlar, setKayitlar] = useState<Demirbas[]>([])
  const [hata, setHata] = useState<string | null>(null)
  const [ad, setAd] = useState('')
  const [kod, setKod] = useState('')
  const [lokasyon, setLokasyon] = useState('')
  const [durum, setDurum] = useState<DemirbasDurum>('aktif')
  const [adet, setAdet] = useState(1)
  const [notlar, setNotlar] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  async function yukle() {
    try {
      const res = await api.demirbas()
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
      await api.demirbasEkle({ ad, kod, lokasyon, durum, adet, notlar })
      setAd('')
      setKod('')
      setLokasyon('')
      setDurum('aktif')
      setAdet(1)
      setNotlar('')
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Kaydedilemedi.')
    } finally {
      setKaydediliyor(false)
    }
  }

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <Link to="/moduller" className="text-link">
            ← Modüller
          </Link>
          <h1>Depo demirbaş</h1>
          <p className="muted">{kayitlar.length} kayıt</p>
        </div>
      </header>

      {hata && <p className="form-error">{hata}</p>}

      <form className="form-panel" onSubmit={onSubmit}>
        <label>
          Ad
          <input value={ad} onChange={(e) => setAd(e.target.value)} required />
        </label>
        <label>
          Kod
          <input value={kod} onChange={(e) => setKod(e.target.value)} />
        </label>
        <label>
          Lokasyon
          <input value={lokasyon} onChange={(e) => setLokasyon(e.target.value)} />
        </label>
        <label>
          Durum
          <select value={durum} onChange={(e) => setDurum(e.target.value as DemirbasDurum)}>
            {(Object.keys(DEMIRBAS_DURUM_ETIKET) as DemirbasDurum[]).map((d) => (
              <option key={d} value={d}>
                {DEMIRBAS_DURUM_ETIKET[d]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Adet
          <input
            type="number"
            min={1}
            value={adet}
            onChange={(e) => setAdet(Number(e.target.value) || 1)}
          />
        </label>
        <label>
          Notlar
          <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} rows={2} />
        </label>
        <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
          {kaydediliyor ? 'Kaydediliyor…' : 'Ekle'}
        </button>
      </form>

      <ul className="job-list">
        {kayitlar.length === 0 && <li className="empty">Henüz demirbaş yok.</li>}
        {kayitlar.map((k) => (
          <li key={k.id} className="job-row static-row">
            <div className="job-main">
              <div className="job-tags">
                <span className="badge badge-tip">{DEMIRBAS_DURUM_ETIKET[k.durum]}</span>
              </div>
              <strong>
                {k.ad}
                {k.kod ? ` · ${k.kod}` : ''}
              </strong>
              <span className="muted">
                {k.lokasyon || 'Lokasyon yok'} · {k.adet} adet
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
