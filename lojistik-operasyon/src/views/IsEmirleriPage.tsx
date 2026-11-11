import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DurumBadge, TipBadge } from '../components/StatusBadge'
import { useApp } from '../context/AppContext'
import { DURUM_ETIKET, TIP_ETIKET, type IsEmriDurum, type IsEmriTipi } from '../types'

export function IsEmirleriPage() {
  const { isEmirleri, kullaniciBul } = useApp()
  const [tip, setTip] = useState<IsEmriTipi | 'hepsi'>('hepsi')
  const [durum, setDurum] = useState<IsEmriDurum | 'hepsi'>('hepsi')
  const [q, setQ] = useState('')

  const liste = useMemo(() => {
    return isEmirleri.filter((ie) => {
      if (tip !== 'hepsi' && ie.tip !== tip) return false
      if (durum !== 'hepsi' && ie.durum !== durum) return false
      if (q.trim()) {
        const hay = `${ie.baslik} ${ie.lokasyon} ${ie.arac}`.toLowerCase()
        if (!hay.includes(q.trim().toLowerCase())) return false
      }
      return true
    })
  }, [isEmirleri, tip, durum, q])

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <h1>İş emirleri</h1>
          <p className="muted">{liste.length} kayıt</p>
        </div>
        <Link to="/yeni" className="btn btn-primary">
          Yeni
        </Link>
      </header>

      <div className="filters">
        <input
          className="search"
          placeholder="Ara: başlık, lokasyon, araç…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="filter-row">
          <select value={tip} onChange={(e) => setTip(e.target.value as IsEmriTipi | 'hepsi')}>
            <option value="hepsi">Tüm tipler</option>
            {(Object.keys(TIP_ETIKET) as IsEmriTipi[]).map((t) => (
              <option key={t} value={t}>
                {TIP_ETIKET[t]}
              </option>
            ))}
          </select>
          <select
            value={durum}
            onChange={(e) => setDurum(e.target.value as IsEmriDurum | 'hepsi')}
          >
            <option value="hepsi">Tüm durumlar</option>
            {(Object.keys(DURUM_ETIKET) as IsEmriDurum[]).map((d) => (
              <option key={d} value={d}>
                {DURUM_ETIKET[d]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="job-list panel">
        {liste.length === 0 && <li className="empty">Kayıt bulunamadı.</li>}
        {liste.map((ie) => {
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
                    {ie.tarih} · {ie.lokasyon}
                    {kisi ? ` · ${kisi.adSoyad}` : ''}
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
    </div>
  )
}
