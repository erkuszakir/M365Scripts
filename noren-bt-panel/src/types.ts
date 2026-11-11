export type Domain =
  | "Microsoft 365"
  | "Exchange"
  | "Purview"
  | "Teams"
  | "SharePoint / OneDrive"
  | "SharePoint"
  | "OneDrive"
  | "Entra ID"
  | "Azure"
  | "Intune"
  | "Yedekleme"
  | "Power Automate"
  | "Güvenlik"
  | "noren.com.tr Güvenlik"
  | "norenlojistik.com";

export type Status =
  | "Sağlıklı"
  | "Uyarı"
  | "Hata"
  | "Teyit bekliyor"
  | "Bekleyen rapor"
  | "Devre dışı";

export type Priority = "P1" | "P2" | "P3" | "P4";

export type FocusArea =
  | "purview-gunluk"
  | "zamanlanmis-gorev"
  | "spo-operasyon-yedek"
  | "file-server-yedek"
  | "mailbox-karar"
  | "teams-mesajlasma";

export interface HistoryEntry {
  at: string;
  status: Status;
  note: string;
}

export interface MonitorRecord {
  id: string;
  title: string;
  domain: Domain;
  focusArea?: FocusArea;
  status: Status;
  priority: Priority;
  lastCheck: string;
  lastSuccess: string | null;
  issue: string;
  owner: string;
  dueDate: string | null;
  sourceUrl: string;
  sourceLabel: string;
  nextStep: string;
  confirmed: boolean;
  pendingReport?: boolean;
  weekDelta: "yeni" | "kötüleşti" | "iyileşti" | "aynı";
  previousWeekStatus: Status;
  history: HistoryEntry[];
  notes?: string;
}

export interface PanelMeta {
  panelGeneratedAt: string;
  sampleDataNotice: string;
  checkHorizonHours: number;
  weekLabel: string;
  previousWeekLabel: string;
}
