import { useMemo, useState } from "react"
import {
  latestRun,
  reportDefinitions,
  sampleReportRuns,
  type ReportStatus,
} from "../catalog/reports"
import { serviceById, services, type ServiceId } from "../catalog/services"
import { formatDateTime } from "../utils"

function statusClass(status: ReportStatus) {
  if (status === "hazir" || status === "ornek") return "badge status-ok"
  if (status === "gecikti") return "badge status-error"
  return "badge status-pending-report"
}

function statusLabel(status: ReportStatus) {
  const map: Record<ReportStatus, string> = {
    taslak: "Taslak",
    hazir: "Hazır",
    gecikti: "Gecikti",
    ornek: "Örnek",
  }
  return map[status]
}

export function ReportsView() {
  const [serviceFilter, setServiceFilter] = useState<ServiceId | "all">("all")
  const [selectedId, setSelectedId] = useState<string | null>(
    sampleReportRuns[0]?.reportId ?? null,
  )

  const defs = useMemo(
    () =>
      reportDefinitions.filter(
        (d) => serviceFilter === "all" || d.serviceId === serviceFilter,
      ),
    [serviceFilter],
  )

  const selectedDef = reportDefinitions.find((d) => d.id === selectedId)
  const run = selectedId ? latestRun(selectedId) : undefined
  const svc = selectedDef ? serviceById(selectedDef.serviceId) : undefined

  const covered = new Set(sampleReportRuns.map((r) => r.reportId))
  const coverage = `${covered.size} / ${reportDefinitions.length} raporda örnek koşu var`

  return (
    <div className="view-body">
      <p className="view-intro">
        Rapor merkezi — her M365 süreci için tanımlı rapor. Önce iskelet ve örnek çıktı;
        canlı collector (Graph / PowerShell) sonra eklenir. {coverage}.
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
                  {latest ? (
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
              </header>

              {!run && (
                <div className="empty">
                  Bu rapor için henüz örnek/canlı koşu yok — bir sonraki adımda
                  eklenecek.
                </div>
              )}

              {run && (
                <>
                  <div className="meta-bar tight">
                    <div className="meta-card">
                      <p className="meta-label">Dönem</p>
                      <p className="meta-value">{run.periodLabel}</p>
                    </div>
                    <div className="meta-card">
                      <p className="meta-label">Üretim</p>
                      <p className="meta-value mono">{formatDateTime(run.generatedAt)}</p>
                    </div>
                    <div className="meta-card">
                      <p className="meta-label">Durum</p>
                      <p className="meta-value">
                        <span className={statusClass(run.status)}>{statusLabel(run.status)}</span>
                      </p>
                    </div>
                  </div>

                  <p className="report-summary">{run.summary}</p>

                  <div className="metric-grid">
                    {run.metrics.map((m) => (
                      <div key={m.label} className={`metric tone-${m.tone || "ok"}`}>
                        <span>{m.label}</span>
                        <strong>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  <h3>Bulgular</h3>
                  <ul>
                    {run.findings.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <h3>Sonraki adımlar</h3>
                  <ul>
                    {run.nextActions.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  )
}
