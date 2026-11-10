import { NavLink, Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export function Layout() {
  const { oturum, cikisYap } = useApp()
  if (!oturum) return null

  const admin = oturum.rol === 'admin'

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-mark" aria-hidden />
          <div>
            <p className="brand-name">Lojistik Operasyon</p>
            <p className="brand-sub">
              {oturum.adSoyad} · {admin ? 'Admin' : 'User'}
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
            <NavLink to="/kullanicilar" className={navClass}>
              Kullanıcı
            </NavLink>
            <NavLink to="/yeni" className={navClass}>
              + Yeni
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/saha" end className={navClass}>
              İşlerim
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
