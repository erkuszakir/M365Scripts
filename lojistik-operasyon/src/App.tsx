import type { ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useApp } from './context/AppContext'
import { CrmPage } from './views/CrmPage'
import { DemirbasPage } from './views/DemirbasPage'
import { IsEmriDetayPage } from './views/IsEmriDetayPage'
import { IsEmirleriPage } from './views/IsEmirleriPage'
import { KullanicilarPage } from './views/KullanicilarPage'
import { LoginPage } from './views/LoginPage'
import { ModullerPage } from './views/ModullerPage'
import { PanoPage } from './views/PanoPage'
import { ParaTalebiPage } from './views/ParaTalebiPage'
import { SahaDetayPage } from './views/SahaDetayPage'
import { SahaPage } from './views/SahaPage'
import { SatinAlmaPage } from './views/SatinAlmaPage'
import { YeniIsEmriPage } from './views/YeniIsEmriPage'
import type { Role } from './types'

function Protected({ rol, children }: { rol?: Role; children: ReactNode }) {
  const { oturum, hazir } = useApp()
  if (!hazir) return <div className="page"><p className="muted">Yükleniyor…</p></div>
  if (!oturum) return <Navigate to="/giris" replace />
  if (rol && oturum.rol !== rol) {
    return <Navigate to={oturum.rol === 'admin' ? '/' : '/saha'} replace />
  }
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/giris" element={<LoginPage />} />

      <Route
        element={
          <Protected>
            <Layout />
          </Protected>
        }
      >
        <Route
          path="/"
          element={
            <Protected rol="admin">
              <PanoPage />
            </Protected>
          }
        />
        <Route
          path="/is-emirleri"
          element={
            <Protected rol="admin">
              <IsEmirleriPage />
            </Protected>
          }
        />
        <Route
          path="/is-emirleri/:id"
          element={
            <Protected rol="admin">
              <IsEmriDetayPage />
            </Protected>
          }
        />
        <Route
          path="/yeni"
          element={
            <Protected rol="admin">
              <YeniIsEmriPage />
            </Protected>
          }
        />
        <Route
          path="/kullanicilar"
          element={
            <Protected rol="admin">
              <KullanicilarPage />
            </Protected>
          }
        />
        <Route path="/moduller" element={<ModullerPage />} />
        <Route
          path="/moduller/demirbas"
          element={
            <Protected rol="admin">
              <DemirbasPage />
            </Protected>
          }
        />
        <Route path="/moduller/satin-alma" element={<SatinAlmaPage />} />
        <Route path="/moduller/para-talebi" element={<ParaTalebiPage />} />
        <Route
          path="/moduller/crm"
          element={
            <Protected rol="admin">
              <CrmPage />
            </Protected>
          }
        />
        <Route
          path="/saha"
          element={
            <Protected rol="user">
              <SahaPage />
            </Protected>
          }
        />
        <Route
          path="/saha/gecmis"
          element={
            <Protected rol="user">
              <SahaPage gecmis />
            </Protected>
          }
        />
        <Route
          path="/saha/:id"
          element={
            <Protected rol="user">
              <SahaDetayPage />
            </Protected>
          }
        />
      </Route>

      <Route path="*" element={<RootRedirect />} />
    </Routes>
  )
}

function RootRedirect() {
  const { oturum, hazir } = useApp()
  if (!hazir) return <div className="page"><p className="muted">Yükleniyor…</p></div>
  if (!oturum) return <Navigate to="/giris" replace />
  return <Navigate to={oturum.rol === 'admin' ? '/' : '/saha'} replace />
}
