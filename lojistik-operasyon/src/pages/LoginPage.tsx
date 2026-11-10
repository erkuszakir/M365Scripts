import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export function LoginPage() {
  const { oturum, hazir, girisYap, sifresizGiris, sifresizIlkGiris, cursorEmail } = useApp()
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

  async function onBootstrap() {
    setBekliyor(true)
    const err = await sifresizGiris()
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

        {sifresizIlkGiris && (
          <div className="login-form">
            <p className="muted" style={{ marginBottom: 8 }}>
              İlk kurulum: şifre henüz yok. Cursor hesabınız admin olur.
              {cursorEmail ? ` (${cursorEmail})` : ''}
            </p>
            <button
              type="button"
              className="btn btn-primary btn-block btn-lg"
              disabled={bekliyor}
              onClick={() => void onBootstrap()}
            >
              {bekliyor ? 'Giriş yapılıyor…' : 'Şifresiz ilk giriş'}
            </button>
            <p className="muted" style={{ marginTop: 10, fontSize: '0.9rem' }}>
              Sonra Cursor Secrets’a SEED_ADMIN_PASSWORD (ve SEED_ADMIN_EMAIL) ekleyin; şifre
              zorunlu olur.
            </p>
            {hata && <p className="form-error">{hata}</p>}
          </div>
        )}

        {!sifresizIlkGiris && (
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
            <p className="login-hints">
              Cursor e-postanız hesap e-postasıyla aynı olmalı. Admin şifresi:{' '}
              SEED_ADMIN_PASSWORD.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
