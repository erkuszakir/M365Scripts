import { Link } from 'react-router-dom'
import { DurumBadge, TipBadge } from '../components/StatusBadge'
import { useApp } from '../context/AppContext'

export function SahaPage({ gecmis = false }: { gecmis?: boolean }) {
  const { oturum, isEmirleri } = useApp()
  if (!oturum) return null

  const benim = isEmirleri.filter((ie) => ie.atananId === oturum.id)
  const liste = gecmis
    ? benim.filter((ie) => ie.durum === 'tamamlandi')
    : benim.filter((ie) => ie.durum !== 'tamamlandi')

  return (
    <div className="stack saha">
      <header className="page-header column">
        <h1>{gecmis ? 'Tamamlanan işler' : 'Bugünkü işlerim'}</h1>
        <p className="muted">
          {oturum.adSoyad} · {liste.length} kayıt
        </p>
      </header>

      <ul className="saha-list">
        {liste.length === 0 && (
          <li className="empty panel">
            {gecmis ? 'Tamamlanmış iş yok.' : 'Size atanmış aktif iş yok.'}
          </li>
        )}
        {liste.map((ie) => (
          <li key={ie.id}>
            <Link to={`/saha/${ie.id}`} className="saha-card">
              <div className="job-tags">
                <TipBadge tip={ie.tip} />
                <DurumBadge durum={ie.durum} />
              </div>
              <strong>{ie.baslik}</strong>
              <span className="muted">{ie.lokasyon}</span>
              {ie.arac && <span className="arac-pill">{ie.arac}</span>}
              <span className="saha-cta">Aç ›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
