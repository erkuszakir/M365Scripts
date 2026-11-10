import { useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import type { Kullanici, Role } from '../types'

export function KullanicilarPage() {
  const { kullanicilar, kullaniciEkle, kullaniciGuncelle, kullaniciSil, oturum } = useApp()
  const [formAcik, setFormAcik] = useState(false)
  const [kullaniciAdi, setKullaniciAdi] = useState('')
  const [adSoyad, setAdSoyad] = useState('')
  const [sifre, setSifre] = useState('')
  const [rol, setRol] = useState<Role>('user')
  const [hata, setHata] = useState<string | null>(null)
  const [duzenlenen, setDuzenlenen] = useState<Kullanici | null>(null)
  const [editAd, setEditAd] = useState('')
  const [editRol, setEditRol] = useState<Role>('user')
  const [editSifre, setEditSifre] = useState('')
  const [editHata, setEditHata] = useState<string | null>(null)

  async function onEkle(e: FormEvent) {
    e.preventDefault()
    const err = await kullaniciEkle({ kullaniciAdi, adSoyad, sifre, rol })
    if (err) {
      setHata(err)
      return
    }
    setHata(null)
    setKullaniciAdi('')
    setAdSoyad('')
    setSifre('')
    setRol('user')
    setFormAcik(false)
  }

  function duzenleAc(k: Kullanici) {
    setDuzenlenen(k)
    setEditAd(k.adSoyad)
    setEditRol(k.rol)
    setEditSifre('')
    setEditHata(null)
  }

  async function onKaydet(e: FormEvent) {
    e.preventDefault()
    if (!duzenlenen) return
    const err = await kullaniciGuncelle(duzenlenen.id, {
      adSoyad: editAd,
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
          <p className="muted">{kullanicilar.length} kişi · Admin / User</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setFormAcik((v) => !v)}>
          {formAcik ? 'Kapat' : 'Yeni kullanıcı'}
        </button>
      </header>

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
            Şifre
            <input
              type="password"
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
              required
              minLength={4}
            />
          </label>
          <label>
            Rol
            <select value={rol} onChange={(e) => setRol(e.target.value as Role)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
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
              <span className="muted">@{k.kullaniciAdi}</span>
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
              Rol
              <select value={editRol} onChange={(e) => setEditRol(e.target.value as Role)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <label>
              Yeni şifre (opsiyonel)
              <input
                type="password"
                value={editSifre}
                onChange={(e) => setEditSifre(e.target.value)}
                minLength={4}
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
