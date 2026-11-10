import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export function LoginPage() {
  const { oturum, girisYap } = useApp()
  const [kullaniciAdi, setKullaniciAdi] = useState('')
  const [sifre, setSifre] = useState('')
  const [hata, setHata] = useState<string | null>(null)

  if (oturum) {
    return <Navigate to={oturum.rol === 'admin' ? '/' : '/saha'} replace />
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const err = girisYap(kullaniciAdi, sifre)
    setHata(err)
  }

  return (
    <div className="login-screen">
      <div className="login-panel">
        <div className="login-hero">
          <span className="brand-mark lg" aria-hidden />
          <h1>Lojistik Operasyon</h1>
          <p>Nakliye, depo ve yol survey işlerini tek yerden yönetin.</p>
        </div>

        <form className="login-form" onSubmit={onSubmit}>
          <label>
            Kullanıcı adı
            <input
              autoComplete="username"
              value={kullaniciAdi}
              onChange={(e) => setKullaniciAdi(e.target.value)}
              placeholder="admin veya ahmet"
              required
            />
          </label>
          <label>
            Şifre
            <input
              type="password"
              autoComplete="current-password"
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              placeholder="1234"
              required
            />
          </label>
          {hata && <p className="form-error">{hata}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Giriş yap
          </button>
        </form>

        <div className="login-hints">
          <p>
            <strong>Admin:</strong> admin / 1234
          </p>
          <p>
            <strong>User (saha):</strong> ahmet / 1234 · mehmet / 1234 · ayse / 1234
          </p>
        </div>
      </div>
    </div>
  )
}
