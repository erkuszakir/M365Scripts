import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export function LoginPage() {
  const { oturum, hazir, girisYap } = useApp()
  const [kullaniciAdi, setKullaniciAdi] = useState('')
  const [sifre, setSifre] = useState('')
  const [hata, setHata] = useState<string | null>(null)
  const [bekliyor, setBekliyor] = useState(false)

  if (!hazir) {
    return (
      <div className="login-screen">
        <p className="loading-text">Yükleniyor…</p>
      </div>
    )
  }

  if (oturum) {
    return <Navigate to={oturum.rol === 'admin' ? '/' : '/saha'} replace />
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBekliyor(true)
    const err = await girisYap(kullaniciAdi, sifre)
    setHata(err)
    setBekliyor(false)
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
              placeholder="admin"
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
              required
            />
          </label>
          {hata && <p className="form-error">{hata}</p>}
          <button type="submit" className="btn btn-primary btn-block" disabled={bekliyor}>
            {bekliyor ? 'Giriş yapılıyor…' : 'Giriş yap'}
          </button>
        </form>

        <div className="login-hints">
          <p>
            Önce Cursor ile uygulamayı açın. Hesap e-postanız, kullanıcı kaydındaki e-posta ile aynı
            olmalı.
          </p>
          <p>
            İlk admin: kullanıcı <strong>admin</strong>, şifre{' '}
            <strong>SEED_ADMIN_PASSWORD</strong>, e-posta <strong>SEED_ADMIN_EMAIL</strong>{' '}
            (Cursor e-postanız).
          </p>
          <p>Diğer personeli Admin panelinden kendi e-posta + benzersiz şifre ile ekleyin.</p>
        </div>
      </div>
    </div>
  )
}
