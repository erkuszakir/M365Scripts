import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const MODULLER = [
  {
    to: '/moduller/demirbas',
    baslik: 'Depo demirbaş',
    aciklama: 'Ekipman ve zimmet kayıtları',
  },
  {
    to: '/moduller/satin-alma',
    baslik: 'Satın alma',
    aciklama: 'Malzeme ve hizmet talepleri',
  },
  {
    to: '/moduller/para-talebi',
    baslik: 'Para talebi',
    aciklama: 'Avans ve ödeme istekleri',
  },
  {
    to: '/moduller/crm',
    baslik: 'CRM',
    aciklama: 'Müşteri ve aday firmalar',
    adminOnly: true,
  },
]

export function ModullerPage() {
  const { oturum } = useApp()
  const admin = oturum?.rol === 'admin'
  const liste = MODULLER.filter((m) => !m.adminOnly || admin)

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <h1>Modüller</h1>
          <p className="muted">Demirbaş, satın alma, para talebi{admin ? ' ve CRM' : ''}.</p>
        </div>
      </header>

      <ul className="job-list module-list">
        {liste.map((m) => (
          <li key={m.to}>
            <Link to={m.to} className="job-row">
              <div className="job-main">
                <strong>{m.baslik}</strong>
                <span className="muted">{m.aciklama}</span>
              </div>
              <span className="chevron" aria-hidden>
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {admin && (
        <section className="panel">
          <div className="panel-head">
            <h2>Saha iş tipleri</h2>
          </div>
          <p className="muted" style={{ padding: '0 4px 8px' }}>
            Yol etüdü ve yük indirme/bindirme gözetmenliği iş emri olarak açılır.
          </p>
          <Link to="/yeni" className="btn btn-primary btn-block">
            Yeni iş emri
          </Link>
        </section>
      )}
    </div>
  )
}
