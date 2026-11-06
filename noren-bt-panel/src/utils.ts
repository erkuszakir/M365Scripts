import type { MonitorRecord, Priority, Status } from "./types";
import { panelMeta } from "./data/seed";

const priorityRank: Record<Priority, number> = {
  P1: 1,
  P2: 2,
  P3: 3,
  P4: 4,
};

const statusRank: Record<Status, number> = {
  Hata: 0,
  "Devre dışı": 1,
  "Bekleyen rapor": 2,
  "Teyit bekliyor": 3,
  Uyarı: 4,
  Sağlıklı: 5,
};

export function parseDate(value: string): Date {
  return new Date(value);
}

export function formatDateTime(value: string | null): string {
  if (!value) return "—";
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parseDate(value));
}

export function formatDate(value: string | null): string {
  if (!value) return "—";
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    dateStyle: "medium",
  }).format(parseDate(value));
}

export function hoursSince(value: string, now = parseDate(panelMeta.panelGeneratedAt)): number {
  return (now.getTime() - parseDate(value).getTime()) / 3_600_000;
}

export function isStale(record: MonitorRecord): boolean {
  return hoursSince(record.lastCheck) > panelMeta.checkHorizonHours;
}

export function sortByPriority(a: MonitorRecord, b: MonitorRecord): number {
  const p = priorityRank[a.priority] - priorityRank[b.priority];
  if (p !== 0) return p;
  return statusRank[a.status] - statusRank[b.status];
}

export function weeklySummary(records: MonitorRecord[]) {
  const counts = {
    total: records.length,
    healthy: 0,
    warn: 0,
    error: 0,
    pendingConfirm: 0,
    pendingReport: 0,
    disabled: 0,
    stale: 0,
    worsened: 0,
    improved: 0,
    newItems: 0,
  };

  for (const r of records) {
    if (r.status === "Sağlıklı") counts.healthy += 1;
    if (r.status === "Uyarı") counts.warn += 1;
    if (r.status === "Hata") counts.error += 1;
    if (r.status === "Teyit bekliyor") counts.pendingConfirm += 1;
    if (r.status === "Bekleyen rapor" || r.pendingReport) counts.pendingReport += 1;
    if (r.status === "Devre dışı") counts.disabled += 1;
    if (isStale(r)) counts.stale += 1;
    if (r.weekDelta === "kötüleşti") counts.worsened += 1;
    if (r.weekDelta === "iyileşti") counts.improved += 1;
    if (r.weekDelta === "yeni") counts.newItems += 1;
  }

  const lines = [
    `${panelMeta.weekLabel}: ${counts.error} hata, ${counts.disabled} devre dışı görev, ${counts.pendingReport} bekleyen rapor, ${counts.pendingConfirm} teyit bekleyen bulgu.`,
    `Önceki haftaya göre ${counts.worsened} kayıt kötüleşti, ${counts.improved} iyileşti, ${counts.newItems} yeni.`,
    `${counts.stale} kayıt ${panelMeta.checkHorizonHours} saatten eski kontrol zamanına sahip — bilgisayar kapalıysa önce bu kontrolleri yenile.`,
    "Mod: salt-okunur planlama. Canlı sistemlerde değişiklik yok.",
  ];

  return { counts, lines };
}

export function domainList(records: MonitorRecord[]): string[] {
  return [...new Set(records.map((r) => r.domain))];
}
