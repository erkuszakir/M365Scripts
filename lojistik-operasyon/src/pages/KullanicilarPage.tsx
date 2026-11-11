import { useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import type { Kullanici, Role } from '../types'

export function KullanicilarPage() {
  const { kullanicilar, kullaniciEkle, kullaniciGuncelle, kullaniciSil, oturum } = useApp()
  const [formAcik, setFormAcik] = useState(false)
  const [kullaniciAdi, setKullaniciAdi] = useState('')
  const [adSoyad, setAdSoyad] = useState('')
  const [email, setEmail] = useState('')
  const [sifre, setSifre] = useState('')
  const [rol, setRol] = useState<Role>('user')
  const [hata, setHata] = useState<string | null>(null)
  const [duzenlenen, setDuzenlenen] = useState<Kullanici | null>(null)
  const [editAd, setEditAd] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [editRol, setEditRol] = useState<Role>('user')
  const [editSifre, setEditSifre] = useState('')
  const [editHata, setEditHata] = useState<string | null>(null)

  async function onEkle(e: FormEvent) {
    e.preventDefault()
    const err = await kullaniciEkle({ kullaniciAdi, adSoyad, email, sifre, rol })
    if (err) {
      setHata(err)
      return
    }
    setHata(null)
    setKullaniciAdi('')
    setAdSoyad('')
    setEmail('')
    setSifre('')
    setRol('user')
    setFormAcik(false)
  }

  function duzenleAc(k: Kullanici) {
    setDuzenlenen(k)
    setEditAd(k.adSoyad)
    setEditEmail(k.email)
    setEditRol(k.rol)
    setEditSifre('')
    setEditHata(null)
  }

  async function onKaydet(e: FormEvent) {
    e.preventDefault()
    if (!duzenlenen) return
    const err = await kullaniciGuncelle(duzenlenen.id, {
      adSoyad: editAd,
      email: editEmail,
      rol: editRol,
      ...(editSifre ? { sifre: editSifre } : {}),
    })
    if (err) {
      setEditHata(err)
      return
    }
    setDuzenlenen(null)
  }

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <h1>Kullanıcılar</h1>
          <p className="muted">{kullanicilar.length} kişi · herkese ayrı e-posta ve şifre</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setFormAcik((v) => !v)}>
          {formAcik ? 'Kapat' : 'Yeni kullanıcı'}
        </button>
      </header>

      <section className="panel detail-block yetki-box">
        <h2>Yetki nasıl verilir?</h2>
        <ul className="yetki-list">
          <li>
            Her kullanıcıya <strong>kendi Cursor e-postası</strong> ve <strong>benzersiz şifre</strong>{' '}
            verin; paylaşılan saha şifresi yok.
          </li>
          <li>
            Giriş: Cursor oturumu + uygulama kullanıcısı (e-posta eşleşmeli) + şifre.
          </li>
          <li>
            <strong>Admin</strong> pano/iş/kullanıcı yönetir; <strong>User</strong> yalnızca atanan
            işleri görür.
          </li>
        </ul>
      </section>

      {formAcik && (
        <form className="form-panel" onSubmit={onEkle}>
          <h2>Yeni kullanıcı</h2>
          <label>
            Kullanıcı adı
            <input value={kullaniciAdi} onChange={(e) => setKullaniciAdi(e.target.value)} required />
          </label>
          <label>
            Ad soyad
            <input value={adSoyad} onChange={(e) => setAdSoyad(e.target.value)} required />
          </label>
          <label>
            Cursor e-posta
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="kisi@sirket.com"
            />
          </label>
          <label>
            Şifre (kişiye özel)
            <input
              type="password"
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              required
              minLength={8}
              placeholder="En az 8 karakter, harf + rakam"
            />
          </label>
          <label>
            Rol (yetki)
            <select value={rol} onChange={(e) => setRol(e.target.value as Role)}>
              <option value="user">User — saha / atanmış işler</option>
              <option value="admin">Admin — pano, iş emri, kullanıcı yönetimi</option>
            </select>
          </label>
          {hata && <p className="form-error">{hata}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Kaydet
          </button>
        </form>
      )}

      <ul className="job-list panel">
        {kullanicilar.map((k) => (
          <li key={k.id} className="user-row">
            <div className="job-main">
              <div className="job-tags">
                <span className={`badge ${k.rol === 'admin' ? 'badge-tip-nakliye' : 'badge-tip'}`}>
                  {k.rol === 'admin' ? 'Admin' : 'User'}
                </span>
                {!k.aktif && <span className="badge badge-sorunlu">Pasif</span>}
              </div>
              <strong>{k.adSoyad}</strong>
              <span className="muted">
                @{k.kullaniciAdi} · {k.email || 'e-posta yok'}
              </span>
            </div>
            <div className="user-actions">
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => duzenleAc(k)}>
                Düzenle
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={async () => {
                  const err = await kullaniciGuncelle(k.id, { aktif: !k.aktif })
                  if (err) alert(err)
                }}
              >
                {k.aktif ? 'Pasifleştir' : 'Aktifleştir'}
              </button>
              {oturum?.id !== k.id && (
                <button
                  type="button"
                  className="btn btn-ghost btn-sm danger-text"
                  onClick={async () => {
                    if (!confirm(`${k.adSoyad} silinsin mi?`)) return
                    const err = await kullaniciSil(k.id)
                    if (err) alert(err)
                  }}
                >
                  Sil
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {duzenlenen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setDuzenlenen(null)}>
          <form
            className="form-panel modal-panel"
            onClick={(e) => e.stopPropagation()}
            onSubmit={onKaydet}
          >
            <h2>{duzenlenen.kullaniciAdi} düzenle</h2>
            <label>
              Ad soyad
              <input value={editAd} onChange={(e) => setEditAd(e.target.value)} required />
            </label>
            <label>
              Cursor e-posta
              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Rol (yetki)
              <select value={editRol} onChange={(e) => setEditRol(e.target.value as Role)}>
                <option value="user">User — saha / atanmış işler</option>
                <option value="admin">Admin — pano, iş emri, kullanıcı yönetimi</option>
              </select>
            </label>
            <label>
              Yeni şifre (opsiyonel)
              <input
                type="password"
                value={editSifre}
                onChange={(e) => setEditSifre(e.target.value)}
                minLength={8}
                placeholder="Boş bırakırsanız değişmez"
              />
            </label>
            {editHata && <p className="form-error">{editHata}</p>}
            <div className="filter-row">
              <button type="button" className="btn btn-ghost" onClick={() => setDuzenlenen(null)}>
                Vazgeç
              </button>
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
