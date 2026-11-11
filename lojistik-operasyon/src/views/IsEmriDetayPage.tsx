import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DurumBadge, TipBadge } from '../components/StatusBadge'
import { useApp } from '../context/AppContext'
import { DURUM_ETIKET, type IsEmriDurum } from '../types'

export function IsEmriDetayPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isEmirleri, kullanicilar, kullaniciBul, isEmriGuncelle, oturum } = useApp()
  const ie = isEmirleri.find((x) => x.id === id)
  const sahacilar = kullanicilar.filter((k) => k.rol === 'user' && k.aktif)

  const [atananId, setAtananId] = useState(ie?.atananId ?? '')
  const [durum, setDurum] = useState<IsEmriDurum>(ie?.durum ?? 'bekliyor')
  const [notlar, setNotlar] = useState(ie?.notlar ?? '')
  const [arac, setArac] = useState(ie?.arac ?? '')
  const [kaydedildi, setKaydedildi] = useState(false)
  const [kaydediliyor, setKaydediliyor] = useState(false)

  if (!ie) {
    return (
      <div className="stack">
        <p>İş emri bulunamadı.</p>
        <Link to="/is-emirleri" className="btn btn-ghost">
          Geri
        </Link>
      </div>
    )
  }

  const atanan = kullaniciBul(ie.atananId)
  const admin = oturum?.rol === 'admin'

  async function onSave(e: FormEvent) {
    e.preventDefault()
    setKaydediliyor(true)
    try {
      await isEmriGuncelle(ie!.id, {
        atananId: atananId || null,
        durum,
        notlar,
        arac,
      })
      setKaydedildi(true)
      window.setTimeout(() => setKaydedildi(false), 1800)
    } finally {
      setKaydediliyor(false)
    }
  }

  return (
    <div className="stack">
      <button type="button" className="back-link" onClick={() => navigate(-1)}>
        ← Geri
      </button>

      <header className="page-header column">
        <div className="job-tags">
          <TipBadge tip={ie.tip} />
          <DurumBadge durum={ie.durum} />
        </div>
        <h1>{ie.baslik}</h1>
        <p className="muted">
          {ie.tarih} · {ie.lokasyon}
          {atanan ? ` · ${atanan.adSoyad}` : ''}
        </p>
      </header>

      <section className="panel detail-block">
        <h2>Açıklama</h2>
        <p>{ie.aciklama || '—'}</p>
        {ie.arac && (
          <p className="muted">
            Araç: <strong>{ie.arac}</strong>
          </p>
        )}
        {ie.notlar && (
          <p className="note-box">
            Not: {ie.notlar}
          </p>
        )}
      </section>

      {admin && (
        <form className="form-panel" onSubmit={onSave}>
          <h2>Yönet</h2>
          <label>
            Atanan
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
            Durum
            <select value={durum} onChange={(e) => setDurum(e.target.value as IsEmriDurum)}>
              {(Object.keys(DURUM_ETIKET) as IsEmriDurum[]).map((d) => (
                <option key={d} value={d}>
                  {DURUM_ETIKET[d]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Araç
            <input value={arac} onChange={(e) => setArac(e.target.value)} />
          </label>
          <label>
            Notlar
            <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} rows={3} />
          </label>
          <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
            {kaydediliyor ? 'Kaydediliyor…' : 'Kaydet'}
          </button>
          {kaydedildi && <p className="success">Kaydedildi.</p>}
        </form>
      )}
    </div>
  )
}
