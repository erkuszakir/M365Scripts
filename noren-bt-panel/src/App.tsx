import { useMemo, useState } from "react";
import { focusLabels, panelMeta, records as seedRecords } from "./data/seed";
import type { FocusArea, MonitorRecord, Priority, Status } from "./types";
import {
  domainList,
  formatDate,
  formatDateTime,
  isStale,
  sortByPriority,
  weeklySummary,
} from "./utils";

type SortMode = "priority" | "lastCheck" | "dueDate";

const focusOrder: FocusArea[] = [
  "purview-gunluk",
  "zamanlanmis-gorev",
  "spo-operasyon-yedek",
  "file-server-yedek",
  "mailbox-karar",
  "teams-mesajlasma",
];

function statusSlug(status: Status): string {
  const map: Record<Status, string> = {
    Sağlıklı: "ok",
    Uyarı: "warn",
    Hata: "error",
    "Devre dışı": "disabled",
    "Bekleyen rapor": "pending-report",
    "Teyit bekliyor": "pending-confirm",
  };
  return map[status];
}

function statusClass(status: Status): string {
  return `badge status-${statusSlug(status)}`;
}

function FocusCards({
  records,
  active,
  onSelect,
}: {
  records: MonitorRecord[];
  active: FocusArea | "all";
  onSelect: (area: FocusArea | "all") => void;
}) {
  return (
    <div className="focus-grid">
      {focusOrder.map((area) => {
        const items = records.filter((r) => r.focusArea === area);
        const worst =
          items.find((r) => r.status === "Hata") ||
          items.find((r) => r.status === "Devre dışı") ||
          items.find((r) => r.status === "Bekleyen rapor") ||
          items.find((r) => r.status === "Teyit bekliyor") ||
          items.find((r) => r.status === "Uyarı") ||
          items[0];
        const staleCount = items.filter(isStale).length;
        const pending = items.filter(
          (r) => r.status === "Teyit bekliyor" || !r.confirmed,
        ).length;

        return (
          <button
            key={area}
            type="button"
            className={`focus-card${active === area ? " active" : ""}`}
            onClick={() => onSelect(active === area ? "all" : area)}
          >
            <h3>{focusLabels[area]}</h3>
            <p>
              {worst
                ? worst.issue.slice(0, 120) + (worst.issue.length > 120 ? "…" : "")
                : "Kayıt yok"}
            </p>
            <div className="focus-meta">
              {worst && <span className={statusClass(worst.status)}>{worst.status}</span>}
              <span className="badge priority">{items.length} kayıt</span>
              {pending > 0 && (
                <span className={statusClass("Teyit bekliyor")}>{pending} teyit</span>
              )}
              {staleCount > 0 && (
                <span className="badge stale">{staleCount} eski kontrol</span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function RecordCard({
  record,
  open,
  onToggle,
}: {
  record: MonitorRecord;
  open: boolean;
  onToggle: () => void;
}) {
  const stale = isStale(record);

  return (
    <article className="record">
      <button type="button" className="record-head" onClick={onToggle} aria-expanded={open}>
        <div>
          <p className="record-title">{record.title}</p>
          <p className="record-sub">
            {record.domain}
            {record.focusArea ? ` · ${focusLabels[record.focusArea]}` : ""}
          </p>
          <p className="record-meta-line">
            <span>Son kontrol: {formatDateTime(record.lastCheck)}</span>
            <span>Sorumlu: {record.owner}</span>
            <span>Son tarih: {formatDate(record.dueDate)}</span>
          </p>
        </div>
        <div />
        <div className="badges">
          <span className={statusClass(record.status)}>{record.status}</span>
          <span className="badge priority">{record.priority}</span>
          <span
            className={`badge delta-${
              record.weekDelta === "kötüleşti"
                ? "worse"
                : record.weekDelta === "iyileşti"
                  ? "better"
                  : record.weekDelta === "yeni"
                    ? "new"
                    : "same"
            }`}
          >
            {record.weekDelta === "aynı"
              ? "önceki haftayla aynı"
              : record.weekDelta === "yeni"
                ? "yeni"
                : record.weekDelta}
          </span>
          {stale && <span className="badge stale">kontrol gecikti</span>}
          {record.pendingReport && (
            <span className={statusClass("Bekleyen rapor")}>bekleyen rapor</span>
          )}
          {!record.confirmed && (
            <span className={statusClass("Teyit bekliyor")}>Teyit bekliyor</span>
          )}
        </div>
      </button>

      {open && (
        <div className="record-body">
          <dl className="grid-fields">
            <div className="kv">
              <dt>Durum</dt>
              <dd>{record.status}</dd>
            </div>
            <div className="kv">
              <dt>Son kontrol</dt>
              <dd className="mono">{formatDateTime(record.lastCheck)}</dd>
            </div>
            <div className="kv">
              <dt>Son başarılı çalışma</dt>
              <dd className="mono">{formatDateTime(record.lastSuccess)}</dd>
            </div>
            <div className="kv">
              <dt>Hata / uyarı</dt>
              <dd>{record.issue ? "Var — aşağıda" : "Yok"}</dd>
            </div>
            <div className="kv">
              <dt>Sorumlu</dt>
              <dd>{record.owner}</dd>
            </div>
            <div className="kv">
              <dt>Son tarih</dt>
              <dd className="mono">{formatDate(record.dueDate)}</dd>
            </div>
            <div className="kv">
              <dt>Kaynak bağlantısı</dt>
              <dd>
                {record.sourceUrl.startsWith("http") ? (
                  <a href={record.sourceUrl} target="_blank" rel="noreferrer">
                    {record.sourceLabel}
                  </a>
                ) : (
                  <>
                    {record.sourceLabel} <span className="mono">({record.sourceUrl})</span>
                  </>
                )}
              </dd>
            </div>
            <div className="kv">
              <dt>Önceki hafta durumu</dt>
              <dd>{record.previousWeekStatus}</dd>
            </div>
          </dl>

          <div className="issue-box">
            <strong>Hata / uyarı ayrıntısı</strong>
            {record.issue}
          </div>

          <div className="next-box">
            <strong>Sonraki adım</strong>
            {record.nextStep}
          </div>

          <div className="history">
            <h4>Geçmiş kayıtlar</h4>
            <ol>
              {record.history.map((h) => (
                <li key={`${record.id}-${h.at}-${h.note}`}>
                  <time dateTime={h.at}>{formatDateTime(h.at)}</time>
                  <span className={statusClass(h.status)}>{h.status}</span>
                  <span>{h.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </article>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
  const [priority, setPriority] = useState<string>("all");
  const [focus, setFocus] = useState<FocusArea | "all">("all");
  const [onlyActionable, setOnlyActionable] = useState(true);
  const [onlyStale, setOnlyStale] = useState(false);
  const [onlyUnconfirmed, setOnlyUnconfirmed] = useState(false);
  const [weekDelta, setWeekDelta] = useState<string>("all");
  const [sortMode, setSortMode] = useState<SortMode>("priority");
  const [openId, setOpenId] = useState<string | null>(null);

  const summary = useMemo(() => weeklySummary(seedRecords), []);
  const domains = useMemo(() => domainList(seedRecords), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = seedRecords.filter((r) => {
      if (domain !== "all" && r.domain !== domain) return false;
      if (status !== "all" && r.status !== status) return false;
      if (priority !== "all" && r.priority !== priority) return false;
      if (focus !== "all" && r.focusArea !== focus) return false;
      if (weekDelta !== "all" && r.weekDelta !== weekDelta) return false;
      if (onlyStale && !isStale(r)) return false;
      if (onlyUnconfirmed && r.confirmed && r.status !== "Teyit bekliyor") return false;
      if (
        onlyActionable &&
        r.status === "Sağlıklı" &&
        r.confirmed &&
        !r.pendingReport &&
        !isStale(r)
      ) {
        return false;
      }
      if (!q) return true;
      const hay = [
        r.title,
        r.domain,
        r.issue,
        r.owner,
        r.nextStep,
        r.sourceLabel,
        r.focusArea ? focusLabels[r.focusArea] : "",
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    list = [...list];
    if (sortMode === "priority") list.sort(sortByPriority);
    if (sortMode === "lastCheck") {
      list.sort(
        (a, b) =>
          new Date(a.lastCheck).getTime() - new Date(b.lastCheck).getTime(),
      );
    }
    if (sortMode === "dueDate") {
      list.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return sortByPriority(a, b);
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.localeCompare(b.dueDate) || sortByPriority(a, b);
      });
    }
    return list;
  }, [
    query,
    domain,
    status,
    priority,
    focus,
    weekDelta,
    onlyActionable,
    onlyStale,
    onlyUnconfirmed,
    sortMode,
  ]);

  return (
    <div className="app">
      <header className="hero">
        <div className="brand-row">
          <div>
            <h1 className="brand">
              NOREN <span>BT</span> İzleme
            </h1>
            <p className="tagline">
              Microsoft 365, Exchange, Purview, Teams, SharePoint/OneDrive, yedekleme,
              Power Automate ve noren.com.tr güvenlik kontrolleri — tek etkileşimli ekran.
            </p>
          </div>
          <div className="mode-pill" title="Canlı sistemlerde değişiklik yok">
            <i aria-hidden />
            Salt-okunur · planlama
          </div>
        </div>

        <div className="meta-bar">
          <div className="meta-card">
            <p className="meta-label">Panel anlık görüntüsü</p>
            <p className="meta-value mono">{formatDateTime(panelMeta.panelGeneratedAt)}</p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Bekleyen rapor</p>
            <p className={`meta-value ${summary.counts.pendingReport ? "warn" : "ok"}`}>
              {summary.counts.pendingReport}
            </p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Teyit bekliyor</p>
            <p className={`meta-value ${summary.counts.pendingConfirm ? "warn" : "ok"}`}>
              {summary.counts.pendingConfirm}
            </p>
          </div>
          <div className="meta-card">
            <p className="meta-label">Eski kontrol (&gt;{panelMeta.checkHorizonHours}s)</p>
            <p className={`meta-value ${summary.counts.stale ? "danger" : "ok"}`}>
              {summary.counts.stale}
            </p>
          </div>
        </div>
      </header>

      <div className="banner">{panelMeta.sampleDataNotice}</div>

      <h2 className="section-title">Öncelikli izleme kartları</h2>
      <FocusCards records={seedRecords} active={focus} onSelect={setFocus} />

      <h2 className="section-title">Haftalık özet</h2>
      <section className="report" aria-label="Haftalık rapor özeti">
        <h2>
          {panelMeta.weekLabel} · karşılaştırma: {panelMeta.previousWeekLabel}
        </h2>
        <ul>
          {summary.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <div className="toolbar">
        <div className="field">
          <label htmlFor="q">Ara</label>
          <input
            id="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="başlık, sorumlu, bulgu…"
          />
        </div>
        <div className="field">
          <label htmlFor="domain">Alan</label>
          <select id="domain" value={domain} onChange={(e) => setDomain(e.target.value)}>
            <option value="all">Tümü</option>
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="status">Durum</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">Tümü</option>
            {(
              [
                "Hata",
                "Devre dışı",
                "Bekleyen rapor",
                "Teyit bekliyor",
                "Uyarı",
                "Sağlıklı",
              ] as Status[]
            ).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="priority">Öncelik</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="all">Tümü</option>
            {(["P1", "P2", "P3", "P4"] as Priority[]).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="delta">Haftalık değişim</label>
          <select id="delta" value={weekDelta} onChange={(e) => setWeekDelta(e.target.value)}>
            <option value="all">Tümü</option>
            <option value="kötüleşti">Kötüleşti</option>
            <option value="iyileşti">İyileşti</option>
            <option value="yeni">Yeni</option>
            <option value="aynı">Aynı</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="sort">Sırala</label>
          <select
            id="sort"
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as SortMode)}
          >
            <option value="priority">Öncelik</option>
            <option value="dueDate">Son tarih</option>
            <option value="lastCheck">En eski kontrol</option>
          </select>
        </div>
        <div className="toggle-row">
          <button
            type="button"
            className={`chip${onlyActionable ? " active" : ""}`}
            onClick={() => setOnlyActionable((v) => !v)}
          >
            Aksiyon gerekenler
          </button>
          <button
            type="button"
            className={`chip${onlyUnconfirmed ? " active" : ""}`}
            onClick={() => setOnlyUnconfirmed((v) => !v)}
          >
            Teyit bekleyenler
          </button>
          <button
            type="button"
            className={`chip${onlyStale ? " active" : ""}`}
            onClick={() => setOnlyStale((v) => !v)}
          >
            Eski kontroller
          </button>
          {focus !== "all" && (
            <button type="button" className="chip active" onClick={() => setFocus("all")}>
              Kart filtresi kapat: {focusLabels[focus]}
            </button>
          )}
        </div>
      </div>

      <p className="record-sub" style={{ marginBottom: "0.75rem" }}>
        Gösterilen {filtered.length} / {seedRecords.length} kayıt
      </p>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty">Filtreye uyan kayıt yok. Filtreleri gevşetin.</div>
        ) : (
          filtered.map((record) => (
            <RecordCard
              key={record.id}
              record={record}
              open={openId === record.id}
              onToggle={() => setOpenId((id) => (id === record.id ? null : record.id))}
            />
          ))
        )}
      </div>

      <p className="footer-note">
        NOREN BT yönetim paneli · örnek izleme verisi · Europe/Istanbul zaman dilimi · canlı
        tenant yazma işlemi yok.
      </p>
    </div>
  );
}
