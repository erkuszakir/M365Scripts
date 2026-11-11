import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import {
  CRM_AKTIVITE_ETIKET,
  CRM_DURUM_ETIKET,
  type CrmAktivite,
  type CrmAktiviteTipi,
  type CrmDurum,
  type CrmMusteri,
} from '../types'

export function CrmPage() {
  const [kayitlar, setKayitlar] = useState<CrmMusteri[]>([])
  const [filtre, setFiltre] = useState<CrmDurum | 'hepsi'>('hepsi')
  const [seciliId, setSeciliId] = useState<string | null>(null)
  const [aktiviteler, setAktiviteler] = useState<CrmAktivite[]>([])
  const [hata, setHata] = useState<string | null>(null)
  const [formAcik, setFormAcik] = useState(false)

  const [firma, setFirma] = useState('')
  const [yetkili, setYetkili] = useState('')
  const [telefon, setTelefon] = useState('')
  const [email, setEmail] = useState('')
  const [durum, setDurum] = useState<CrmDurum>('lead')
  const [sektor, setSektor] = useState('')
  const [sehir, setSehir] = useState('')
  const [kaynak, setKaynak] = useState('')
  const [tahminiCiro, setTahminiCiro] = useState('')
  const [notlar, setNotlar] = useState('')
  const [kaydediliyor, setKaydediliyor] = useState(false)

  const [aktTip, setAktTip] = useState<CrmAktiviteTipi>('not')
  const [aktBaslik, setAktBaslik] = useState('')
  const [aktDetay, setAktDetay] = useState('')

  async function yukle() {
    try {
      const res = await api.crm()
      setKayitlar(res.kayitlar)
      setHata(null)
      if (!seciliId && res.kayitlar[0]) setSeciliId(res.kayitlar[0].id)
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Yüklenemedi.')
    }
  }

  async function detayYukle(id: string) {
    try {
      const res = await api.crmDetay(id)
      setAktiviteler(res.aktiviteler)
      setKayitlar((prev) => prev.map((k) => (k.id === id ? res.kayit : k)))
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Detay yüklenemedi.')
    }
  }

  useEffect(() => {
    void yukle()
  }, [])

  useEffect(() => {
    if (seciliId) void detayYukle(seciliId)
  }, [seciliId])

  const liste = useMemo(
    () => (filtre === 'hepsi' ? kayitlar : kayitlar.filter((k) => k.durum === filtre)),
    [kayitlar, filtre],
  )
  const secili = kayitlar.find((k) => k.id === seciliId) || null
  const ozet = {
    lead: kayitlar.filter((k) => k.durum === 'lead').length,
    aktif: kayitlar.filter((k) => k.durum === 'aktif').length,
    pasif: kayitlar.filter((k) => k.durum === 'pasif').length,
    ciro: kayitlar.reduce((s, k) => s + (k.tahminiCiro || 0), 0),
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setKaydediliyor(true)
    try {
      const res = await api.crmEkle({
        firma,
        yetkili,
        telefon,
        email,
        durum,
        notlar,
        sektor,
        sehir,
        kaynak,
        tahminiCiro: Number(tahminiCiro) || 0,
        sonGorusme: new Date().toISOString().slice(0, 10),
      })
      setFirma('')
      setYetkili('')
      setTelefon('')
      setEmail('')
      setDurum('lead')
      setSektor('')
      setSehir('')
      setKaynak('')
      setTahminiCiro('')
      setNotlar('')
      setFormAcik(false)
      await yukle()
      setSeciliId(res.kayit.id)
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Kaydedilemedi.')
    } finally {
      setKaydediliyor(false)
    }
  }

  async function durumDegistir(id: string, yeni: CrmDurum) {
    try {
      await api.crmGuncelle(id, { durum: yeni })
      await yukle()
      await detayYukle(id)
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Güncellenemedi.')
    }
  }

  async function aktiviteEkle(e: FormEvent) {
    e.preventDefault()
    if (!seciliId) return
    try {
      await api.crmAktiviteEkle(seciliId, {
        tip: aktTip,
        baslik: aktBaslik,
        detay: aktDetay,
      })
      setAktBaslik('')
      setAktDetay('')
      await detayYukle(seciliId)
      await yukle()
    } catch (err) {
      setHata(err instanceof Error ? err.message : 'Aktivite eklenemedi.')
    }
  }

  return (
    <div className="stack">
      <header className="page-header">
        <div>
          <Link to="/moduller" className="text-link">
            ← Modüller
          </Link>
          <h1>CRM</h1>
          <p className="muted">
            {kayitlar.length} firma · tahmini ciro {ozet.ciro.toLocaleString('tr-TR')} TL
          </p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setFormAcik((v) => !v)}>
          {formAcik ? 'Formu kapat' : 'Yeni firma'}
        </button>
      </header>

      {hata && <p className="form-error">{hata}</p>}

      <section className="stat-grid" aria-label="CRM özeti">
        <div className="stat-tile">
          <span className="stat-num">{ozet.lead}</span>
          <span className="muted">Aday</span>
        </div>
        <div className="stat-tile">
          <span className="stat-num">{ozet.aktif}</span>
          <span className="muted">Aktif</span>
        </div>
        <div className="stat-tile">
          <span className="stat-num">{ozet.pasif}</span>
          <span className="muted">Pasif</span>
        </div>
      </section>

      <div className="filter-row">
        {(['hepsi', 'lead', 'aktif', 'pasif'] as const).map((f) => (
          <button
            key={f}
            type="button"
            className={`btn ${filtre === f ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setFiltre(f)}
          >
            {f === 'hepsi' ? 'Hepsi' : CRM_DURUM_ETIKET[f]}
          </button>
        ))}
      </div>

      {formAcik && (
        <form className="form-panel" onSubmit={onSubmit}>
          <label>
            Firma
            <input value={firma} onChange={(e) => setFirma(e.target.value)} required />
          </label>
          <label>
            Yetkili
            <input value={yetkili} onChange={(e) => setYetkili(e.target.value)} />
          </label>
          <label>
            Telefon
            <input value={telefon} onChange={(e) => setTelefon(e.target.value)} />
          </label>
          <label>
            E-posta
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Sektör
            <input value={sektor} onChange={(e) => setSektor(e.target.value)} placeholder="Gıda, sanayi…" />
          </label>
          <label>
            Şehir
            <input value={sehir} onChange={(e) => setSehir(e.target.value)} />
          </label>
          <label>
            Kaynak
            <input value={kaynak} onChange={(e) => setKaynak(e.target.value)} placeholder="Fuar, referans…" />
          </label>
          <label>
            Tahmini ciro (TRY)
            <input
              type="number"
              min={0}
              value={tahminiCiro}
              onChange={(e) => setTahminiCiro(e.target.value)}
            />
          </label>
          <label>
            Durum
            <select value={durum} onChange={(e) => setDurum(e.target.value as CrmDurum)}>
              {(Object.keys(CRM_DURUM_ETIKET) as CrmDurum[]).map((d) => (
                <option key={d} value={d}>
                  {CRM_DURUM_ETIKET[d]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Notlar
            <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} rows={2} />
          </label>
          <button type="submit" className="btn btn-primary btn-block" disabled={kaydediliyor}>
            {kaydediliyor ? 'Kaydediliyor…' : 'Kaydet'}
          </button>
        </form>
      )}

      <ul className="job-list">
        {liste.length === 0 && <li className="empty">Bu filtrede kayıt yok.</li>}
        {liste.map((k) => (
          <li key={k.id}>
            <button
              type="button"
              className={`job-row ${seciliId === k.id ? 'job-row-active' : ''}`}
              onClick={() => setSeciliId(k.id)}
            >
              <div className="job-main">
                <div className="job-tags">
                  <span className="badge badge-tip">{CRM_DURUM_ETIKET[k.durum]}</span>
                  {k.sektor ? <span className="badge badge-tip">{k.sektor}</span> : null}
                </div>
                <strong>{k.firma}</strong>
                <span className="muted">
                  {[k.sehir, k.yetkili, k.telefon].filter(Boolean).join(' · ') || 'İletişim yok'}
                </span>
                {k.tahminiCiro > 0 && (
                  <span className="muted">
                    Tahmini ciro: {k.tahminiCiro.toLocaleString('tr-TR')} TL
                  </span>
                )}
              </div>
              <span className="chevron" aria-hidden>
                ›
              </span>
            </button>
          </li>
        ))}
      </ul>

      {secili && (
        <section className="panel">
          <div className="panel-head">
            <h2>{secili.firma}</h2>
            <div className="inline-actions">
              {secili.durum !== 'aktif' && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => void durumDegistir(secili.id, 'aktif')}
                >
                  Aktif
                </button>
              )}
              {secili.durum !== 'pasif' && (
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => void durumDegistir(secili.id, 'pasif')}
                >
                  Pasif
                </button>
              )}
            </div>
          </div>
          <div className="crm-detail">
            <p>
              <strong>Yetkili:</strong> {secili.yetkili || '—'}
            </p>
            <p>
              <strong>İletişim:</strong>{' '}
              {[secili.telefon, secili.email].filter(Boolean).join(' · ') || '—'}
            </p>
            <p>
              <strong>Sektör / şehir:</strong>{' '}
              {[secili.sektor, secili.sehir].filter(Boolean).join(' · ') || '—'}
            </p>
            <p>
              <strong>Kaynak:</strong> {secili.kaynak || '—'}
            </p>
            <p>
              <strong>Son görüşme:</strong> {secili.sonGorusme || '—'}
            </p>
            {secili.notlar ? <p className="muted">{secili.notlar}</p> : null}
          </div>

          <h2 style={{ marginTop: 16 }}>Aktiviteler</h2>
          <ul className="job-list">
            {aktiviteler.length === 0 && <li className="empty">Henüz aktivite yok.</li>}
            {aktiviteler.map((a) => (
              <li key={a.id} className="job-row static-row">
                <div className="job-main">
                  <div className="job-tags">
                    <span className="badge badge-tip">{CRM_AKTIVITE_ETIKET[a.tip]}</span>
                  </div>
                  <strong>{a.baslik}</strong>
                  {a.detay ? <span className="muted">{a.detay}</span> : null}
                  <span className="muted">{new Date(a.olusturmaZamani).toLocaleString('tr-TR')}</span>
                </div>
              </li>
            ))}
          </ul>

          <form className="form-panel" onSubmit={aktiviteEkle} style={{ marginTop: 12 }}>
            <label>
              Tip
              <select value={aktTip} onChange={(e) => setAktTip(e.target.value as CrmAktiviteTipi)}>
                {(Object.keys(CRM_AKTIVITE_ETIKET) as CrmAktiviteTipi[]).map((t) => (
                  <option key={t} value={t}>
                    {CRM_AKTIVITE_ETIKET[t]}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Başlık
              <input value={aktBaslik} onChange={(e) => setAktBaslik(e.target.value)} required />
            </label>
            <label>
              Detay
              <textarea value={aktDetay} onChange={(e) => setAktDetay(e.target.value)} rows={2} />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              Aktivite ekle
            </button>
          </form>
        </section>
      )}
    </div>
  )
}
