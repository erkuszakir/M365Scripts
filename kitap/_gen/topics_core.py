# -*- coding: utf-8 -*-
"""Topic outlines and expandable knowledge blocks for the M365 mega-textbook."""

# Each topic: id, title, level, keywords, must_cover (list of teaching points)

CILT1_TEMELLER = [
    ("bulut-tanimi", "Bulut bilişimin tanımı, tarihi ve ekonomik modeli", [
        "NIST tanımı", "elasticity", "measured service", "capex vs opex",
        "utility computing tarihi", "hyperscaler rekabeti", "Türkiye’de veri merkezi gerçeği",
    ]),
    ("iaas-paas-saas", "IaaS, PaaS, SaaS ve paylaşılan sorumluluk", [
        "her katmanda kontrol", "yanlış model seçimi maliyetleri", "SaaS’ta config riski",
        "CIS shared responsibility", "örnek: VM vs App Service vs M365",
    ]),
    ("dijital-isyerleri", "Dijital işyeri mimarisi ve persona analizi", [
        "persona canvas", "journey map", "shadow IT", "employee experience",
        "hibrit çalışma", "masaüstü vs mobil öncelik",
    ]),
    ("m365-ekosistem", "Microsoft 365 ürün haritası ve bağımlılıklar", [
        "workload grafı", "Entra bağımlılığı", "lisans SKU matrisi derinlemesine",
        "E3 vs E5 özellik fark tablosu", "Business vs Enterprise",
    ]),
    ("tenant-yasam", "Tenant yaşam döngüsü: açılıştan kapanışa", [
        "trial tuzakları", "geo seçimi", "domain doğrulama", "break-glass",
        "tenant silme/birleştirme zorlukları", "GDAP partner erişimi",
    ]),
    ("dns-kimlik", "DNS, kimlik ad alanları ve e-posta omurgası girişi", [
        "MX SPF DKIM DMARC", "Autodiscover", "split DNS", "TTL stratejisi",
    ]),
    ("yonetim-duzlem", "Yönetim düzlemleri: portal, PowerShell, Graph, IaC", [
        "ne zaman hangisi", "drift", "change management", "audit",
    ]),
    ("kvkk-giris", "Kişisel veri, KVKK/GDPR ve bulut — giriş", [
        "işleyen/sorumlu", "aktarım", "aydınlatma", "teknik-organizasyonel tedbirler",
    ]),
]

CILT2_KIMLIK = [
    ("entra-nedir", "Microsoft Entra ID mimarisi ve dizin nesneleri", [
        "tenant directory", "objectId", "UPN", "proxyAddresses", "directory roles",
    ]),
    ("authn-authz", "Kimlik doğrulama ve yetkilendirme teorisi", [
        "OAuth2", "OIDC", "SAML", "WS-Fed", "token türleri", "refresh token riski",
    ]),
    ("mfa-passwordless", "MFA, passwordless ve phishing-resistant yöntemler", [
        "FIDO2", "WHfB", "TAP", "number matching", "SIM swap", "MFA fatigue",
    ]),
    ("conditional-access", "Conditional Access politika mühendisliği", [
        "sinyaller", "grant controls", "session controls", "report-only",
        "break-glass istisnası", "politik katalog tasarımı",
    ]),
    ("gruplar-rbac", "Grup türleri, dinamik üyelik ve RBAC", [
        "security vs M365", "nested groups", "PIM", "least privilege",
    ]),
    ("b2b-b2c", "B2B misafir, B2C ve dış kimlik", [
        "invitation flow", "cross-tenant access", "access reviews",
    ]),
    ("app-reg", "Uygulama kayıtları, consent ve enterprise apps", [
        "delegated vs app-only", "admin consent", "certificate credentials",
    ]),
    ("hibrit-kimlik", "Hibrit kimlik: Connect, Cloud Sync, PHS, PTA, federation", [
        "source of authority", "soft/hard match", "staging mode", "Tier 0",
    ]),
    ("kimlik-yasam", "Joiner-Mover-Leaver ve identity governance", [
        "HR entegrasyonu", "entitlement packages", "access reviews",
    ]),
    ("kimlik-log", "Kimlik günlükleri, risk ve Identity Protection", [
        "sign-in logs", "risky users", "Impossible travel", "investigation",
    ]),
]

CILT3_EXCHANGE = [
    ("exo-mimari", "Exchange Online mimarisi ve alıcı modeli", [
        "mailbox database abstraction", "recipient types", "address book",
    ]),
    ("mailbox-yonetim", "User, shared, room, equipment mailbox yönetimi", [
        "permissions", "Send As/Send on Behalf", "litigation hold", "archive",
    ]),
    ("mail-flow", "Mail flow, connectors, transport rules", [
        "accepted domains", "remote domains", "journal", "NDR analizi",
    ]),
    ("anti-phishing", "EOP, Defender for Office 365, anti-phish", [
        "Safe Links", "Safe Attachments", "spoof intelligence", "quarantine",
    ]),
    ("dns-email", "E-posta DNS güvenliği ileri seviye", [
        "DMARC rua/ruf", "BIMI", "ARC", "üçüncü parti gönderenler",
    ]),
    ("takvim-kaynak", "Takvim, oda posta kutuları ve rezervasyon politikaları", []),
    ("exo-hybrit", "Hibrit Exchange ve migrasyon yöntemleri", [
        "cutover", "staged", "MRS", "IMAP", "minimal hybrid",
    ]),
    ("exo-ps", "Exchange Online PowerShell operasyonları", []),
    ("exo-troubleshoot", "Posta sorun giderme ağaçları ve message trace", []),
    ("exo-compliance", "Mailbox audit, eDiscovery ve retention köprüsü", []),
]

CILT4_SPO = [
    ("spo-mimari", "SharePoint Online bilgi mimarisi", [
        "site", "hub", "library", "list", "content type", "columns",
    ]),
    ("izin-modeli", "İzin modeli, kalıtım ve grup tasarımı", []),
    ("paylasim", "Sharing politikaları ve oversharing avı", []),
    ("onedrive", "OneDrive for Business yönetişimi ve Known Folder Move", []),
    ("arama", "Microsoft Search ve metadata stratejisi", []),
    ("migrasyon-dosya", "Dosya paylaşımlarından SPO’ya migrasyon", []),
    ("spo-ps-pnp", "PnP PowerShell ve Graph ile SPO otomasyonu", []),
    ("spo-guvenlik", "Sensitivity label, DLP ve ransomware restore", []),
]

CILT5_TEAMS = [
    ("teams-mimari", "Teams mimarisi: Group, SPO, EXO bağımlılıkları", []),
    ("kanal-yasam", "Kanal türleri, private/shared ve yaşam döngüsü", []),
    ("teams-policy", "Messaging, meeting, calling, app politikaları", []),
    ("teams-governance", "Naming, expiration, templates, talep süreçleri", []),
    ("teams-meetings", "Toplantı güvenliği, kayıt, webinar, town hall", []),
    ("teams-voice", "Teams Phone, Operator Connect, Direct Routing girişi", []),
    ("teams-network", "Ağ, QoS, split tunnel, Call Analytics", []),
    ("teams-ps", "Teams PowerShell ve Graph ile yönetim", []),
]

CILT6_GUVENLIK = [
    ("zero-trust", "Zero Trust mimarisi ve Microsoft uygulama modeli", []),
    ("defender-o365", "Defender for Office 365 derinlemesine", []),
    ("purview-labels", "Purview sensitivity labels ve auto-labeling", []),
    ("purview-dlp", "DLP politika mühendisliği ve false positive yönetimi", []),
    ("purview-retention", "Retention, records management, eDiscovery", []),
    ("secure-score", "Secure Score, uyumluluk skorları ve önceliklendirme", []),
    ("xdr-soc", "XDR sinyalleri ve SOC işletim modeli", []),
    ("ir-playbooks", "IR playbook’ları: ATO, BEC, ransomware, CA lockout", []),
]

CILT7_OTOMASYON = [
    ("ps-temeller", "PowerShell 7 temelleri M365 admin için", []),
    ("graph-temeller", "Microsoft Graph: kaynaklar, query, throttle", []),
    ("graph-auth", "Auth modelleri, app registration, sertifika", []),
    ("runbooklar", "Onboarding/offboarding/lisans runbook mühendisliği", []),
    ("idempotent", "İdempotent otomasyon ve CI kapıları", []),
    ("power-platform", "Power Platform yönetişimi ve connector DLP", []),
    ("copilot-gov", "M365 Copilot hazırlık ve yönetişim", []),
]

CILT8_UZMAN = [
    ("referans-mimari", "Referans mimariler ve ADR disiplini", []),
    ("intune", "Intune MDM/MAM, Autopilot, CA köprüsü", []),
    ("yedek-dr", "Backup, retention farkı, ransomware kurtarma", []),
    ("izleme", "Service Health, KPI, alert tasarımı", []),
    ("benimseme", "Değişim yönetimi ve Viva", []),
    ("cok-tenant", "Birleşme, çok domain, partner GDAP", []),
    ("capstone", "Capstone: 500–5000 kullanıcı tasarım stüdyosu", []),
]

ALL_CILTS = [
    ("01-temeller", "Cilt 1 — Bulut ve Microsoft 365 Temelleri", CILT1_TEMELLER),
    ("02-kimlik", "Cilt 2 — Kimlik ve Microsoft Entra ID", CILT2_KIMLIK),
    ("03-exchange", "Cilt 3 — Exchange Online", CILT3_EXCHANGE),
    ("04-sharepoint", "Cilt 4 — SharePoint ve OneDrive", CILT4_SPO),
    ("05-teams", "Cilt 5 — Microsoft Teams", CILT5_TEAMS),
    ("06-guvenlik", "Cilt 6 — Güvenlik, Uyumluluk ve IR", CILT6_GUVENLIK),
    ("07-otomasyon", "Cilt 7 — Otomasyon, Graph ve Platform", CILT7_OTOMASYON),
    ("08-uzman", "Cilt 8 — Mimari, Intune, DR ve Capstone", CILT8_UZMAN),
]
