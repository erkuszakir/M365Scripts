import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { TIP_ETIKET, type IsEmriTipi } from '../types'

export function YeniIsEmriPage() {
  const { isEmriEkle, kullanicilar } = useApp()
  const navigate = useNavigate()
  const sahacilar = kullanicilar.filter((k) => k.rol === 'user' && k.aktif)

  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [tip, setTip] = useState<IsEmriTipi>('nakliye')
  const [lokasyon, setLokasyon] = useState('')
  const [tarih, setTarih] = useState(new Date().toISOString().slice(0, 10))
  const [atananId, setAtananId] = useState('')
  const [arac, setArac] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setKaydediliyor(true)
    try {
      const yeni = await isEmriEkle({
        baslik,
        aciklama,
        tip,
        lokasyon,
        tarih,
        atananId: atananId || null,
        arac,
      })
      navigate(`/is-emirleri/${yeni.id}`)
    } finally {
      setKaydediliyor(false)
    }
  }

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <h1>Yeni iş emri</h1>
          <p className="muted">Nakliye, depo veya survey görevi oluşturun.</p>
        </div>
      </header>

      <form className="form-panel" onSubmit={onSubmit}>
        <label>
          Tip
          <select value={tip} onChange={(e) => setTip(e.target.value as IsEmriTipi)}>
            {(Object.keys(TIP_ETIKET) as IsEmriTipi[]).map((t) => (
              <option key={t} value={t}>
                {TIP_ETIKET[t]}
              </option>
            ))}
          </select>
        </label>
        <label>
          Başlık
          <input value={baslik} onChange={(e) => setBaslik(e.target.value)} required />
        </label>
        <label>
          Açıklama
          <textarea value={aciklama} onChange={(e) => setAciklama(e.target.value)} rows={3} />
        </label>
        <label>
          Lokasyon
          <input value={lokasyon} onChange={(e) => setLokasyon(e.target.value)} required />
        </label>
        <label>
          Tarih
          <input type="date" value={tarih} onChange={(e) => setTarih(e.target.value)} required />
        </label>
        <label>
          Atanan personel
          <select value={atananId} onChange={(e) => setAtananId(e.target.value)}>
            <option value="">Atanmadı</option>
            {sahacilar.map((k) => (
              <option key={k.id} value={k.id}>
                {k.adSoyad}
              </option>
            ))}
          </select>
        </label>
        <label>
          Araç
          <input
            value={arac}
            onChange={(e) => setArac(e.target.value)}
            placeholder="Plaka · tip"
          />
        </label>
        <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
          {kaydediliyor ? 'Kaydediliyor…' : 'Kaydet'}
        </button>
      </form>
    </div>
  )
}
