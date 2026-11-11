export type ServiceId =
  | "exchange"
  | "sharepoint"
  | "onedrive"
  | "teams"
  | "entra"
  | "azure"
  | "purview"
  | "intune"
  | "power-platform"
  | "backup"
  | "security"

export type ProcessCadence = "gunluk" | "haftalik" | "aylik" | "olay"

export interface ProcessItem {
  id: string
  title: string
  cadence: ProcessCadence
  description: string
  /** İleride Graph / PowerShell / portal URL */
  sourceHint: string
}

export interface ServiceDef {
  id: ServiceId
  name: string
  short: string
  color: string
  processes: ProcessItem[]
}

export const services: ServiceDef[] = [
  {
    id: "exchange",
    name: "Exchange Online",
    short: "Posta, yönlendirme, arşiv, kotalar",
    color: "#0078d4",
    processes: [
      {
        id: "ex-mailflow",
        title: "Mail akışı / kuyruk sağlığı",
        cadence: "gunluk",
        description: "Geciken/başarısız teslimatlar, connector durumu.",
        sourceHint: "Exchange admin center · Message trace",
      },
      {
        id: "ex-forward",
        title: "Otomatik yönlendirme ve dış iletim",
        cadence: "haftalik",
        description: "Inbox rule / forwarding denetimi.",
        sourceHint: "Exchange Online PowerShell · Get-InboxRule",
      },
      {
        id: "ex-archive",
        title: "In-Place / online arşiv",
        cadence: "aylik",
        description: "Arşiv etkinliği ve kota.",
        sourceHint: "Exchange admin · Mailbox",
      },
    ],
  },
  {
    id: "sharepoint",
    name: "SharePoint Online",
    short: "Siteler, izinler, paylaşım, yedek",
    color: "#038387",
    processes: [
      {
        id: "spo-sharing",
        title: "Dış paylaşım ve anonim linkler",
        cadence: "haftalik",
        description: "Guest / anyone link envanteri.",
        sourceHint: "SharePoint admin · Sharing reports",
      },
      {
        id: "spo-sites",
        title: "Site sağlığı ve depolama",
        cadence: "haftalik",
        description: "Kota, orphaned sites, kritik site erişimi.",
        sourceHint: "SharePoint admin · Active sites",
      },
      {
        id: "spo-backup",
        title: "Operasyon / kritik liste yedek kontrolü",
        cadence: "gunluk",
        description: "Operasyon Takip ve kritik listelerin yedek izi.",
        sourceHint: "Yedek job log + SPO",
      },
    ],
  },
  {
    id: "onedrive",
    name: "OneDrive",
    short: "Kullanıcı depolama, paylaşım, senkron",
    color: "#094ab2",
    processes: [
      {
        id: "od-quota",
        title: "Kota ve büyük hesaplar",
        cadence: "haftalik",
        description: "Eşik üstü kullanım listesi.",
        sourceHint: "OneDrive admin · Reports",
      },
      {
        id: "od-sharing",
        title: "Dış paylaşım",
        cadence: "haftalik",
        description: "Kurum dışı paylaşılan klasör/dosyalar.",
        sourceHint: "Sharing reports",
      },
    ],
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    short: "Politikalar, ekipler, mesajlaşma",
    color: "#6264a7",
    processes: [
      {
        id: "teams-policy",
        title: "Mesajlaşma / toplantı politikaları",
        cadence: "aylik",
        description: "Politika sapmaları ve yeni ekip sahipleri.",
        sourceHint: "Teams admin center",
      },
      {
        id: "teams-guest",
        title: "Guest erişim denetimi",
        cadence: "haftalik",
        description: "Guest kullanıcı ve dış erişim.",
        sourceHint: "Teams + Entra guest report",
      },
    ],
  },
  {
    id: "entra",
    name: "Entra ID (Azure AD)",
    short: "Kimlik, MFA, koşullu erişim, misafir",
    color: "#00bcf2",
    processes: [
      {
        id: "entra-mfa",
        title: "MFA / Conditional Access uyumu",
        cadence: "haftalik",
        description: "MFA’sız veya istisna hesaplar.",
        sourceHint: "Entra · Conditional Access + Sign-in logs",
      },
      {
        id: "entra-guests",
        title: "Misafir kullanıcı yaşam döngüsü",
        cadence: "aylik",
        description: "Atıl guest hesapları.",
        sourceHint: "Entra · Users · Guest",
      },
      {
        id: "entra-apps",
        title: "Uygulama kayıtları / consent",
        cadence: "aylik",
        description: "Yeni app consent ve yüksek izinler.",
        sourceHint: "Entra · Enterprise applications",
      },
    ],
  },
  {
    id: "azure",
    name: "Azure",
    short: "Abonelik, kaynak, maliyet, güvenlik",
    color: "#0072c6",
    processes: [
      {
        id: "az-secure-score",
        title: "Defender for Cloud / güvenlik skoru",
        cadence: "haftalik",
        description: "Öneriler ve kritik uyarılar.",
        sourceHint: "Azure Portal · Microsoft Defender for Cloud",
      },
      {
        id: "az-cost",
        title: "Maliyet ve anomali",
        cadence: "haftalik",
        description: "Beklenmeyen harcama artışı.",
        sourceHint: "Cost Management",
      },
    ],
  },
  {
    id: "purview",
    name: "Microsoft Purview",
    short: "Audit, DLP, uyumluluk",
    color: "#742774",
    processes: [
      {
        id: "prv-audit",
        title: "Günlük audit / uyumluluk özeti",
        cadence: "gunluk",
        description: "Audit export veya özet posta.",
        sourceHint: "compliance.microsoft.com",
      },
      {
        id: "prv-dlp",
        title: "DLP uyarı kuyruğu",
        cadence: "gunluk",
        description: "Yeni DLP olaylarının teyidi.",
        sourceHint: "Purview · Data loss prevention",
      },
    ],
  },
  {
    id: "intune",
    name: "Intune / Endpoint",
    short: "Cihaz uyumu, güncelleme, politikalar",
    color: "#1a73e8",
    processes: [
      {
        id: "int-compliance",
        title: "Cihaz uyumluluk özeti",
        cadence: "haftalik",
        description: "Non-compliant cihazlar.",
        sourceHint: "Intune admin center",
      },
    ],
  },
  {
    id: "power-platform",
    name: "Power Platform",
    short: "Power Automate, Apps, bağlayıcılar",
    color: "#742774",
    processes: [
      {
        id: "pa-flows",
        title: "Kritik akış başarı oranı",
        cadence: "gunluk",
        description: "Başarısız / askıda flow’lar.",
        sourceHint: "make.powerautomate.com",
      },
    ],
  },
  {
    id: "backup",
    name: "Yedekleme",
    short: "File server, M365, iş kritik job’lar",
    color: "#c19c00",
    processes: [
      {
        id: "bak-jobs",
        title: "Yedek job başarı kontrolü",
        cadence: "gunluk",
        description: "Başarısız / kaçırılan job’lar.",
        sourceHint: "Yedek konsolu + görev zamanlayıcı",
      },
    ],
  },
  {
    id: "security",
    name: "Güvenlik / Defender",
    short: "Threat, secure score, domain TLS",
    color: "#d83b01",
    processes: [
      {
        id: "sec-score",
        title: "Microsoft Secure Score değişimi",
        cadence: "haftalik",
        description: "Skor düşüşü ve açık öneriler.",
        sourceHint: "security.microsoft.com",
      },
      {
        id: "sec-domain",
        title: "norenlojistik.com TLS / DNS / e-posta auth",
        cadence: "aylik",
        description: "Sertifika, SPF/DKIM/DMARC.",
        sourceHint: "DNS + TLS denetimi",
      },
    ],
  },
]

export function serviceById(id: ServiceId) {
  return services.find((s) => s.id === id)
}
