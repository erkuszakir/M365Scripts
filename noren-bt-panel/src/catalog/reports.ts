import type { ProcessCadence, ServiceId } from "./services"

export type ReportStatus = "taslak" | "hazir" | "gecikti" | "ornek"

export interface ReportDefinition {
  id: string
  serviceId: ServiceId
  processId: string
  title: string
  cadence: ProcessCadence
  description: string
  /** İleride: Graph endpoint veya script adı */
  collector: string
}

export interface ReportRun {
  id: string
  reportId: string
  generatedAt: string
  periodLabel: string
  status: ReportStatus
  summary: string
  metrics: { label: string; value: string; tone?: "ok" | "warn" | "danger" }[]
  findings: string[]
  nextActions: string[]
}

/** Rapor kataloğu — her süreç için bir rapor tanımı (adım adım doldurulur). */
export const reportDefinitions: ReportDefinition[] = [
  {
    id: "rpt-ex-mailflow",
    serviceId: "exchange",
    processId: "ex-mailflow",
    title: "Exchange mail akışı özeti",
    cadence: "gunluk",
    description: "Teslimat gecikmesi, connector ve message trace özeti.",
    collector: "ornek · Get-MessageTrace / EAC",
  },
  {
    id: "rpt-ex-forward",
    serviceId: "exchange",
    processId: "ex-forward",
    title: "Yönlendirme ve dış iletim",
    cadence: "haftalik",
    description: "Inbox rule / forwarding envanteri.",
    collector: "ornek · Exchange Online PowerShell",
  },
  {
    id: "rpt-spo-sharing",
    serviceId: "sharepoint",
    processId: "spo-sharing",
    title: "SharePoint dış paylaşım",
    cadence: "haftalik",
    description: "Anyone / guest link özeti.",
    collector: "ornek · Sharing reports",
  },
  {
    id: "rpt-spo-backup",
    serviceId: "sharepoint",
    processId: "spo-backup",
    title: "SharePoint operasyon yedek",
    cadence: "gunluk",
    description: "Kritik liste/site yedek izi.",
    collector: "ornek · yedek job log",
  },
  {
    id: "rpt-od-quota",
    serviceId: "onedrive",
    processId: "od-quota",
    title: "OneDrive kota",
    cadence: "haftalik",
    description: "Eşik üstü kullanıcı depolama.",
    collector: "ornek · OneDrive usage report",
  },
  {
    id: "rpt-teams-policy",
    serviceId: "teams",
    processId: "teams-policy",
    title: "Teams politika uyumu",
    cadence: "aylik",
    description: "Mesajlaşma / toplantı politikası sapmaları.",
    collector: "ornek · Teams admin",
  },
  {
    id: "rpt-entra-mfa",
    serviceId: "entra",
    processId: "entra-mfa",
    title: "MFA / CA uyum",
    cadence: "haftalik",
    description: "MFA’sız veya istisna hesaplar.",
    collector: "ornek · Entra sign-in + CA",
  },
  {
    id: "rpt-az-secure",
    serviceId: "azure",
    processId: "az-secure-score",
    title: "Azure güvenlik özeti",
    cadence: "haftalik",
    description: "Defender for Cloud önerileri.",
    collector: "ornek · Azure Portal",
  },
  {
    id: "rpt-prv-audit",
    serviceId: "purview",
    processId: "prv-audit",
    title: "Purview günlük audit",
    cadence: "gunluk",
    description: "Audit özeti / export geldi mi?",
    collector: "ornek · Purview Audit",
  },
  {
    id: "rpt-pa-flows",
    serviceId: "power-platform",
    processId: "pa-flows",
    title: "Power Automate kritik akışlar",
    cadence: "gunluk",
    description: "Başarı / hata oranı.",
    collector: "ornek · Power Automate",
  },
  {
    id: "rpt-bak-jobs",
    serviceId: "backup",
    processId: "bak-jobs",
    title: "Yedek job özeti",
    cadence: "gunluk",
    description: "Başarısız ve kaçırılan job’lar.",
    collector: "ornek · yedek konsolu",
  },
  {
    id: "rpt-sec-score",
    serviceId: "security",
    processId: "sec-score",
    title: "Secure Score haftalık",
    cadence: "haftalik",
    description: "Skor ve açık öneriler.",
    collector: "ornek · Microsoft 365 Defender",
  },
]

/** İlk örnek koşular — gerçek collector bağlanınca değiştirilir. */
export const sampleReportRuns: ReportRun[] = [
  {
    id: "run-ex-mailflow-1",
    reportId: "rpt-ex-mailflow",
    generatedAt: "2026-11-11T08:30:00+03:00",
    periodLabel: "11 Kas 2026",
    status: "ornek",
    summary:
      "norenlojistik.com mail akışında anormal kuyruk yok. 2 gecikmeli teslimat incelendi, connector sağlıklı.",
    metrics: [
      { label: "Başarılı teslimat", value: "99.4%", tone: "ok" },
      { label: "Geciken", value: "2", tone: "warn" },
      { label: "Başarısız", value: "0", tone: "ok" },
    ],
    findings: ["Dış connector’da kısa süreli retry görüldü (09:12)."],
    nextActions: ["Message trace ile 2 gecikmeli iletiyi teyit et."],
  },
  {
    id: "run-spo-sharing-1",
    reportId: "rpt-spo-sharing",
    generatedAt: "2026-11-10T17:00:00+03:00",
    periodLabel: "3–10 Kas 2026",
    status: "ornek",
    summary: "3 yeni anyone link; 1’i Operasyon sitesinde hâlâ açık.",
    metrics: [
      { label: "Anyone link", value: "3", tone: "warn" },
      { label: "Guest kullanıcı", value: "12", tone: "ok" },
    ],
    findings: ["Operasyon/Takip listesinde süresi dolmamış anonim link var."],
    nextActions: ["Linki site sahibiyle teyit et veya kapat."],
  },
  {
    id: "run-entra-mfa-1",
    reportId: "rpt-entra-mfa",
    generatedAt: "2026-11-11T09:00:00+03:00",
    periodLabel: "Hafta 45 · 2026",
    status: "ornek",
    summary: "2 hesap MFA muafiyetinde; CA politikası genel olarak uygulanıyor.",
    metrics: [
      { label: "MFA kayıtlı", value: "96%", tone: "ok" },
      { label: "İstisna hesap", value: "2", tone: "warn" },
    ],
    findings: ["service-mailbox@norenlojistik.com için MFA istisnası devam ediyor."],
    nextActions: ["İstisna gerekçesini gözden geçir."],
  },
  {
    id: "run-prv-audit-1",
    reportId: "rpt-prv-audit",
    generatedAt: "2026-11-11T08:00:00+03:00",
    periodLabel: "11 Kas 2026",
    status: "gecikti",
    summary: "Günlük audit özeti bekleniyor; son başarılı çekim 9 Kas.",
    metrics: [
      { label: "Son başarılı", value: "9 Kas", tone: "danger" },
      { label: "Kaçırılan gün", value: "2", tone: "danger" },
    ],
    findings: ["Zamanlanmış çekim bilgisayarı kapalı kalmış olabilir."],
    nextActions: ["Salt-okunur Audit Search ile 48 saati doğrula; paneli güncelle."],
  },
  {
    id: "run-bak-jobs-1",
    reportId: "rpt-bak-jobs",
    generatedAt: "2026-11-11T07:15:00+03:00",
    periodLabel: "11 Kas 2026",
    status: "ornek",
    summary: "File server yedek OK; SPO Operasyon yedek uyarılı tamamlandı.",
    metrics: [
      { label: "Başarılı job", value: "4", tone: "ok" },
      { label: "Uyarı", value: "1", tone: "warn" },
      { label: "Hata", value: "0", tone: "ok" },
    ],
    findings: ["SPO Operasyon Takip yedeğinde 1 dosya atlandı."],
    nextActions: ["Atlanan öğeyi yedek logundan doğrula."],
  },
]

export function runsForReport(reportId: string) {
  return sampleReportRuns.filter((r) => r.reportId === reportId)
}

export function latestRun(reportId: string) {
  return runsForReport(reportId).sort((a, b) =>
    b.generatedAt.localeCompare(a.generatedAt),
  )[0]
}
