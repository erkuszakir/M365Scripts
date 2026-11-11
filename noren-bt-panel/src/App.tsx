import { useState } from "react"
import { tenant } from "./config/tenant"
import { reportDefinitions, sampleReportRuns } from "./catalog/reports"
import { services } from "./catalog/services"
import { panelMeta } from "./data/seed"
import { MonitorView } from "./views/MonitorView"
import { ReportsView } from "./views/ReportsView"
import { ServicesView } from "./views/ServicesView"

type Tab = "genel" | "servisler" | "raporlar" | "kontroller"

export default function App() {
  const [tab, setTab] = useState<Tab>("genel")
  const processCount = services.reduce((n, s) => n + s.processes.length, 0)
  const runCount = sampleReportRuns.length

  return (
    <div className="app">
      <header className="hero">
        <div className="brand-row">
          <div>
            <h1 className="brand">
              {tenant.panelName.split(" ")[0]} <span>BT</span> Yönetim
            </h1>
            <p className="tagline">
              {tenant.primaryDomain} · Microsoft 365 süreç takibi ve raporlama altyapısı
              (Exchange, SharePoint, OneDrive, Teams, Entra ID, Azure, Purview, yedekleme…)
            </p>
          </div>
          <div className="mode-pill" title="Canlı sistemlerde değişiklik yok">
            <i aria-hidden />
            Salt-okunur · {tenant.dataMode}
          </div>
        </div>

        <div className="meta-bar">
          <div className="meta-card">
            <p className="meta-label">Tenant</p>
            <p className="meta-value">{tenant.primaryDomain}</p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Servis</p>
            <p className="meta-value">{services.length}</p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Süreç</p>
            <p className="meta-value">{processCount}</p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Rapor tanımı / örnek koşu</p>
            <p className="meta-value">
              {reportDefinitions.length} / {runCount}
            </p>
          </div>
        </div>
      </header>

      <div className="banner">{panelMeta.sampleDataNotice}</div>

      <nav className="top-tabs" aria-label="Ana bölümler">
        {(
          [
            ["genel", "Genel bakış"],
            ["servisler", "Servisler"],
            ["raporlar", "Rapor merkezi"],
            ["kontroller", "Kontroller"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`tab${tab === id ? " active" : ""}`}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === "genel" && (
        <div className="view-body">
          <section className="report" aria-label="Altyapı özeti">
            <h2>Nasıl ilerleyeceğiz?</h2>
            <ul>
              <li>
                <strong>Servisler</strong> kataloğu tüm M365 alanlarını ve süreçlerini
                tanımlar (norenlojistik.com).
              </li>
              <li>
                <strong>Rapor merkezi</strong> her süreç için rapor şablonu + örnek/canlı
                koşu tutar; adım adım collector eklenir.
              </li>
              <li>
                <strong>Kontroller</strong> mevcut salt-okunur izleme kayıtlarını (uyarı,
                teyit, eski kontrol) gösterir.
              </li>
              <li>
                Canlı Graph / PowerShell bağlanana kadar veri <em>örnek</em> kalır; tenant’a
                yazma yok.
              </li>
            </ul>
          </section>

          <h2 className="section-title">Hızlı geçiş</h2>
          <div className="focus-grid">
            <button type="button" className="focus-card" onClick={() => setTab("servisler")}>
              <h3>Servis kataloğu</h3>
              <p>{services.length} servis · {processCount} süreç tanımı</p>
            </button>
            <button type="button" className="focus-card" onClick={() => setTab("raporlar")}>
              <h3>Rapor merkezi</h3>
              <p>
                {reportDefinitions.length} rapor · {runCount} örnek koşu
              </p>
            </button>
            <button type="button" className="focus-card" onClick={() => setTab("kontroller")}>
              <h3>Operasyon kontrolleri</h3>
              <p>Purview, yedek, mailbox, Teams odak kartları</p>
            </button>
          </div>
        </div>
      )}

      {tab === "servisler" && <ServicesView />}
      {tab === "raporlar" && <ReportsView />}
      {tab === "kontroller" && <MonitorView />}

      <p className="footer-note">
        {tenant.panelName} · {tenant.primaryDomain} · {tenant.timezone} · canlı tenant yazma
        yok · adım adım genişletilir
      </p>
    </div>
  )
}
