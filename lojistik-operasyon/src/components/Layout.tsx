import { NavLink, Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { ROL_ETIKET } from '../types'

export function Layout() {
  const { oturum, cikisYap } = useApp()
  if (!oturum) return null

  const admin = oturum.rol === 'admin'
  const amir = oturum.rol === 'amir'

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-mark" aria-hidden />
          <div>
            <p className="brand-name">Lojistik Operasyon</p>
            <p className="brand-sub">
              {oturum.adSoyad} · {ROL_ETIKET[oturum.rol]}
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-ghost" onClick={cikisYap}>
          Çıkış
        </button>
      </header>

      <main className="page">
        <Outlet />
      </main>

      <nav className="bottom-nav" aria-label="Ana menü">
        {admin ? (
          <>
            <NavLink to="/" end className={navClass}>
              Pano
            </NavLink>
            <NavLink to="/is-emirleri" className={navClass}>
              İşler
            </NavLink>
            <NavLink to="/moduller" className={navClass}>
              Modül
            </NavLink>
            <NavLink to="/kullanicilar" className={navClass}>
              Kullanıcı
            </NavLink>
            <NavLink to="/yeni" className={navClass}>
              + Yeni
            </NavLink>
          </>
        ) : amir ? (
          <>
            <NavLink to="/moduller" end className={navClass}>
              Modül
            </NavLink>
            <NavLink to="/moduller/satin-alma" className={navClass}>
              Satın alma
            </NavLink>
            <NavLink to="/moduller/para-talebi" className={navClass}>
              Para
            </NavLink>
            <NavLink to="/moduller/crm" className={navClass}>
              CRM
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/saha" end className={navClass}>
              İşlerim
            </NavLink>
            <NavLink to="/moduller" className={navClass}>
              Modül
            </NavLink>
            <NavLink to="/saha/gecmis" className={navClass}>
              Geçmiş
            </NavLink>
          </>
        )}
      </nav>
    </div>
  )
}

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-item active' : 'nav-item'
}
