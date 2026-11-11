import { Link } from 'react-router-dom'
import { DurumBadge, TipBadge } from '../components/StatusBadge'
import { useApp } from '../context/AppContext'
import type { IsEmriDurum } from '../types'

const OZET_DURUMLAR: IsEmriDurum[] = ['bekliyor', 'atandi', 'devam', 'sorunlu', 'tamamlandi']

export function PanoPage() {
  const { isEmirleri, kullaniciBul } = useApp()
  const bugun = new Date().toISOString().slice(0, 10)
  const bugunku = isEmirleri.filter((ie) => ie.tarih === bugun)
  const aktif = bugunku.filter((ie) => ie.durum !== 'tamamlandi')

  const sayac = Object.fromEntries(
    OZET_DURUMLAR.map((d) => [d, bugunku.filter((ie) => ie.durum === d).length]),
  ) as Record<IsEmriDurum, number>

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <h1>Operasyon panosu</h1>
          <p className="muted">Bugün {bugunku.length} iş · {aktif.length} aktif</p>
        </div>
        <div className="header-actions">
          <Link to="/moduller" className="btn btn-ghost">
            Modüller
          </Link>
          <Link to="/yeni" className="btn btn-primary">
            Yeni iş emri
          </Link>
        </div>
      </header>

      <section className="stat-grid" aria-label="Durum özeti">
        {OZET_DURUMLAR.map((d) => (
          <div key={d} className={`stat-tile stat-${d}`}>
            <span className="stat-num">{sayac[d]}</span>
            <DurumBadge durum={d} />
          </div>
        ))}
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Aktif işler</h2>
          <Link to="/is-emirleri" className="text-link">
            Tümünü gör
          </Link>
        </div>
        <ul className="job-list">
          {aktif.length === 0 && <li className="empty">Bugün aktif iş yok.</li>}
          {aktif.map((ie) => {
            const kisi = kullaniciBul(ie.atananId)
            return (
              <li key={ie.id}>
                <Link to={`/is-emirleri/${ie.id}`} className="job-row">
                  <div className="job-main">
                    <div className="job-tags">
                      <TipBadge tip={ie.tip} />
                      <DurumBadge durum={ie.durum} />
                    </div>
                    <strong>{ie.baslik}</strong>
                    <span className="muted">
                      {ie.lokasyon}
                      {kisi ? ` · ${kisi.adSoyad}` : ' · Atanmadı'}
                    </span>
                  </div>
                  <span className="chevron" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
