/** norenlojistik.com Microsoft 365 tenant — izleme / raporlama bağlamı. */
export const tenant = {
  displayName: "NOREN Lojistik",
  primaryDomain: "norenlojistik.com",
  panelName: "NOREN BT Yönetim",
  timezone: "Europe/Istanbul",
  mode: "salt-okunur" as const,
  /** Canlı Graph / PowerShell bağlanana kadar örnek veri. */
  dataMode: "ornek" as const,
  notes:
    "Tüm M365 süreçleri (Exchange, SharePoint, OneDrive, Teams, Entra ID / Azure, Purview, yedekleme vb.) bu panel üzerinden adım adım izlenir ve raporlanır. Canlı tenant’a yazma yok.",
}
