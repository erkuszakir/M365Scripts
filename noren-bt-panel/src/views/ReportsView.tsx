import { useEffect, useMemo, useState } from "react"
import {
  latestRun,
  reportDefinitions,
  sampleReportRuns,
  type ReportStatus,
} from "../catalog/reports"
import { serviceById, services, type ServiceId } from "../catalog/services"
import { api, type LiveReport } from "../lib/api"
import { formatDateTime } from "../utils"

function statusClass(status: ReportStatus | "live" | "unavailable") {
  if (status === "hazir" || status === "ornek" || status === "live") return "badge status-ok"
  if (status === "gecikti" || status === "unavailable") return "badge status-error"
  return "badge status-pending-report"
}

function statusLabel(status: ReportStatus | "live" | "unavailable") {
  const map: Record<string, string> = {
    taslak: "Taslak",
    hazir: "Hazır",
    gecikti: "Gecikti",
    ornek: "Örnek",
    live: "Canlı",
    unavailable: "Bağlı değil",
  }
  return map[status] || status
}

type DisplayRun = {
  periodLabel: string
  generatedAt: string
  status: ReportStatus | "live" | "unavailable"
  summary: string
  metrics: { label: string; value: string; tone?: "ok" | "warn" | "danger" }[]
  findings: string[]
  nextActions: string[]
  sourceNote?: string
}

export function ReportsView() {
  const [serviceFilter, setServiceFilter] = useState<ServiceId | "all">("all")
  const [selectedId, setSelectedId] = useState<string | null>("rpt-ex-mailflow")
  const [liveEx, setLiveEx] = useState<LiveReport | null>(null)
  const [liveErr, setLiveErr] = useState<string | null>(null)
  const [loadingLive, setLoadingLive] = useState(false)

  const defs = useMemo(
    () =>
      reportDefinitions.filter(
        (d) => serviceFilter === "all" || d.serviceId === serviceFilter,
      ),
    [serviceFilter],
  )

  const selectedDef = reportDefinitions.find((d) => d.id === selectedId)
  const sample = selectedId ? latestRun(selectedId) : undefined
  const svc = selectedDef ? serviceById(selectedDef.serviceId) : undefined

  useEffect(() => {
    if (selectedId !== "rpt-ex-mailflow") {
      setLiveEx(null)
      setLiveErr(null)
      return
    }
    setLoadingLive(true)
    setLiveErr(null)
    void api
      .exchangeMailflow()
      .then((res) => setLiveEx(res.report))
      .catch((err) => {
        setLiveEx(null)
        setLiveErr(err instanceof Error ? err.message : "Canlı rapor alınamadı.")
      })
      .finally(() => setLoadingLive(false))
  }, [selectedId])

  const display: DisplayRun | null = (() => {
    if (selectedId === "rpt-ex-mailflow") {
      if (liveEx?.source === "live") {
        return {
          periodLabel: liveEx.periodLabel,
          generatedAt: liveEx.generatedAt,
          status: "live",
          summary: liveEx.summary,
          metrics: liveEx.metrics,
          findings: liveEx.findings,
          nextActions: liveEx.nextActions,
          sourceNote: liveEx.rawNote,
        }
      }
      if (liveEx || liveErr) {
        return {
          periodLabel: liveEx?.periodLabel || "Bağlantı yok",
          generatedAt: liveEx?.generatedAt || new Date().toISOString(),
          status: "unavailable",
          summary:
            liveEx?.summary ||
            liveErr ||
            "Tenant bağlı değil — örnek veriye düşülüyor.",
          metrics: liveEx?.metrics || [],
          findings: liveEx?.findings || [liveErr || "Secret / consent eksik."],
          nextActions: liveEx?.nextActions || ["docs/ENTRA_KURULUM.md adımlarını tamamlayın."],
          sourceNote: "Aşağıda örnek koşu da listelenir.",
        }
      }
    }
    if (!sample) return null
    return {
      periodLabel: sample.periodLabel,
      generatedAt: sample.generatedAt,
      status: sample.status,
      summary: sample.summary,
      metrics: sample.metrics,
      findings: sample.findings,
      nextActions: sample.nextActions,
    }
  })()

  const covered = new Set(sampleReportRuns.map((r) => r.reportId))
  const coverage = `${covered.size} / ${reportDefinitions.length} raporda örnek koşu · Exchange canlı denemesi açık`

  return (
    <div className="view-body">
      <p className="view-intro">
        Rapor merkezi — Graph bağlanınca canlı üretilir; yoksa örnek veri. {coverage}.
      </p>

      <div className="filter-row">
        <button
          type="button"
          className={`chip${serviceFilter === "all" ? " active" : ""}`}
          onClick={() => setServiceFilter("all")}
        >
          Tüm servisler
        </button>
        {services.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`chip${serviceFilter === s.id ? " active" : ""}`}
            onClick={() => setServiceFilter(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="report-layout">
        <ul className="report-list">
          {defs.map((d) => {
            const latest = latestRun(d.id)
            const isLiveEx = d.id === "rpt-ex-mailflow" && liveEx?.source === "live"
            return (
              <li key={d.id}>
                <button
                  type="button"
                  className={`report-item${selectedId === d.id ? " active" : ""}`}
                  onClick={() => setSelectedId(d.id)}
                >
                  <strong>{d.title}</strong>
                  <span className="muted-line">
                    {serviceById(d.serviceId)?.name} · {d.cadence}
                  </span>
                  {isLiveEx ? (
                    <span className={statusClass("live")}>Canlı Graph</span>
                  ) : latest ? (
                    <span className={statusClass(latest.status)}>
                      {statusLabel(latest.status)} · {latest.periodLabel}
                    </span>
                  ) : (
                    <span className="badge status-pending-report">Henüz koşu yok</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <section className="report-detail panel-like">
          {!selectedDef && <p className="empty">Rapor seçin.</p>}
          {selectedDef && (
            <>
              <header>
                <p className="eyebrow">{svc?.name}</p>
                <h2>{selectedDef.title}</h2>
                <p>{selectedDef.description}</p>
                <p className="process-hint">Collector: {selectedDef.collector}</p>
                {selectedId === "rpt-ex-mailflow" && loadingLive && (
                  <p className="muted-line">Canlı Graph deneniyor…</p>
                )}
              </header>

              {!display && !loadingLive && (
                <div className="empty">
                  Bu rapor için henüz örnek/canlı koşu yok — bir sonraki adımda
                  eklenecek.
                </div>
              )}

              {display && (
                <>
                  <div className="meta-bar tight">
                    <div className="meta-card">
                      <p className="meta-label">Dönem</p>
                      <p className="meta-value">{display.periodLabel}</p>
                    </div>
                    <div className="meta-card">
                      <p className="meta-label">Üretim</p>
                      <p className="meta-value mono">{formatDateTime(display.generatedAt)}</p>
                    </div>
                    <div className="meta-card">
                      <p className="meta-label">Durum</p>
                      <p className="meta-value">
                        <span className={statusClass(display.status)}>
                          {statusLabel(display.status)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="report-summary">{display.summary}</p>
                  {display.sourceNote ? (
                    <p className="process-hint">{display.sourceNote}</p>
                  ) : null}

                  {display.metrics.length > 0 && (
                    <div className="metric-grid">
                      {display.metrics.map((m) => (
                        <div key={m.label} className={`metric tone-${m.tone || "ok"}`}>
                          <span>{m.label}</span>
                          <strong>{m.value}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  <h3>Bulgular</h3>
                  <ul>
                    {display.findings.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <h3>Sonraki adımlar</h3>
                  <ul>
                    {display.nextActions.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>

                  {selectedId === "rpt-ex-mailflow" &&
                    display.status !== "live" &&
                    sample && (
                      <>
                        <h3>Örnek koşu (yedek)</h3>
                        <p className="report-summary">{sample.summary}</p>
                      </>
                    )}
                </>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  )
}
