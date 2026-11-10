import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DurumBadge, TipBadge } from '../components/StatusBadge'
import { useApp } from '../context/AppContext'
import type { IsEmriDurum } from '../types'

const SAHA_AKSIYONLAR: { durum: IsEmriDurum; etiket: string; sinif: string }[] = [
  { durum: 'devam', etiket: 'İşe başla', sinif: 'btn-primary' },
  { durum: 'tamamlandi', etiket: 'Tamamla', sinif: 'btn-success' },
  { durum: 'sorunlu', etiket: 'Sorun bildir', sinif: 'btn-danger' },
]

export function SahaDetayPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { oturum, isEmirleri, durumGuncelle } = useApp()
  const ie = isEmirleri.find((x) => x.id === id)
  const [not, setNot] = useState(ie?.notlar ?? '')
  const [mesaj, setMesaj] = useState<string | null>(null)

  if (!ie || !oturum || ie.atananId !== oturum.id) {
    return (
      <div className="stack">
        <p>Bu iş size atanmamış veya bulunamadı.</p>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/saha')}>
          İşlerime dön
        </button>
      </div>
    )
  }

  function aksiyon(durum: IsEmriDurum) {
    durumGuncelle(ie!.id, durum, not)
    setMesaj(
      durum === 'tamamlandi'
        ? 'İş tamamlandı olarak işaretlendi.'
        : durum === 'sorunlu'
          ? 'Sorun kaydedildi. Operasyon bilgilendirilecek.'
          : 'İş devam ediyor olarak güncellendi.',
    )
  }

  return (
    <div className="stack saha">
      <button type="button" className="back-link" onClick={() => navigate('/saha')}>
        ← İşlerim
      </button>

      <header className="page-header column">
        <div className="job-tags">
          <TipBadge tip={ie.tip} />
          <DurumBadge durum={ie.durum} />
        </div>
        <h1>{ie.baslik}</h1>
        <p className="muted">
          {ie.tarih} · {ie.lokasyon}
        </p>
        {ie.arac && <span className="arac-pill">{ie.arac}</span>}
      </header>

      <section className="panel detail-block">
        <h2>Görev</h2>
        <p className="saha-desc">{ie.aciklama || '—'}</p>
      </section>

      <label className="form-panel tight">
        Not / saha gözlemi
        <textarea
          value={not}
          onChange={(e) => setNot(e.target.value)}
          rows={3}
          placeholder="Kısa not yazın…"
        />
      </label>

      <div className="saha-actions">
        {SAHA_AKSIYONLAR.map((a) => (
          <button
            key={a.durum}
            type="button"
            className={`btn ${a.sinif} btn-block btn-lg`}
            onClick={() => aksiyon(a.durum)}
            disabled={ie.durum === a.durum && a.durum !== 'sorunlu'}
          >
            {a.etiket}
          </button>
        ))}
      </div>

      {mesaj && <p className="success">{mesaj}</p>}
    </div>
  )
}
