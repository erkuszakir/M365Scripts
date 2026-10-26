#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Microsoft 365 (Office 365) Online — şirket kiracı yönetimi
PowerShell öğrenme rehberi (detaylı / derinlemesine).
"""

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUTPUT = "/workspace/Office365_PowerShell_Yonetim_Komutlari.docx"


def font(run, name="Calibri", size=11, bold=False, italic=False, color=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color:
        run.font.color.rgb = color


def H(doc, text, level=1):
    h = doc.add_heading(text, level=level)
    colors = {
        1: RGBColor(0x0B, 0x5C, 0x8C),
        2: RGBColor(0x16, 0x74, 0xA8),
        3: RGBColor(0x2E, 0x86, 0xAB),
    }
    for r in h.runs:
        r.font.color.rgb = colors.get(level, RGBColor(0x33, 0x33, 0x33))
    return h


def P(doc, text, size=10.5, bold=False, italic=False, color=None):
    p = doc.add_paragraph()
    r = p.add_run(text)
    font(r, size=size, bold=bold, italic=italic, color=color)
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.space_before = Pt(0)
    return p


def shade(paragraph, fill="EEF2F7"):
    pPr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")
    pPr.append(shd)


def CODE(doc, code):
    for line in code.strip("\n").split("\n"):
        p = doc.add_paragraph()
        r = p.add_run(line if line else " ")
        font(r, name="Consolas", size=8.5, color=RGBColor(0x1A, 0x1A, 0x2E))
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.left_indent = Cm(0.2)
        shade(p)
    sp = doc.add_paragraph()
    sp.paragraph_format.space_after = Pt(6)


def NOTE(doc, text):
    p = doc.add_paragraph()
    a = p.add_run("Not: ")
    font(a, size=9.5, bold=True, color=RGBColor(0xB8, 0x5C, 0x00))
    b = p.add_run(text)
    font(b, size=9.5, color=RGBColor(0x5C, 0x4A, 0x32))
    p.paragraph_format.space_after = Pt(8)


def WARN(doc, text):
    p = doc.add_paragraph()
    a = p.add_run("Uyarı: ")
    font(a, size=9.5, bold=True, color=RGBColor(0x8B, 0x00, 0x00))
    b = p.add_run(text)
    font(b, size=9.5, color=RGBColor(0x6B, 0x20, 0x20))
    p.paragraph_format.space_after = Pt(8)


def WHY(doc, text):
    p = doc.add_paragraph()
    a = p.add_run("Neden önemli: ")
    font(a, size=9.5, bold=True, color=RGBColor(0x0B, 0x5C, 0x8C))
    b = p.add_run(text)
    font(b, size=9.5)
    p.paragraph_format.space_after = Pt(8)


def TOPIC(doc, title, ne, neden, once, adimlar_aciklama, code, dogrula=None, derin=None):
    """Learn tarzı konu: ne / neden / önce / komut / doğrula / derin bilgi."""
    H(doc, title, 2)
    if ne:
        P(doc, ne, size=10.5)
    if neden:
        WHY(doc, neden)
    if once:
        P(doc, "Başlamadan önce", size=10, bold=True)
        P(doc, once, size=9.5)
    if adimlar_aciklama:
        P(doc, adimlar_aciklama, size=10)
    if code:
        CODE(doc, code)
    if dogrula:
        P(doc, "Doğrulama", size=10, bold=True)
        CODE(doc, dogrula)
    if derin:
        P(doc, "Derinlemesine", size=10, bold=True)
        P(doc, derin, size=9.5)


def bullet(doc, items):
    for t in items:
        p = doc.add_paragraph(style="List Bullet")
        r = p.add_run(t)
        font(r, size=10)
        p.paragraph_format.space_after = Pt(2)


def build():
    doc = Document()
    for s in doc.sections:
        s.top_margin = Cm(1.7)
        s.bottom_margin = Cm(1.7)
        s.left_margin = Cm(1.9)
        s.right_margin = Cm(1.9)

    # ========== KAPAK ==========
    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("Microsoft 365 (Office 365) Online")
    font(r, size=24, bold=True, color=RGBColor(0x0B, 0x5C, 0x8C))

    t2 = doc.add_paragraph()
    t2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t2.add_run("Şirket Kiracı Yönetimi — PowerShell Öğrenme Rehberi")
    font(r, size=14, bold=True, color=RGBColor(0x16, 0x74, 0xA8))

    t3 = doc.add_paragraph()
    t3.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t3.add_run(
        "Bir şirketin bulut ofisini (kullanıcı, lisans, e-posta, dosya, ekipler, güvenlik)\n"
        "PowerShell ile nasıl yöneteceğinizi adım adım ve derinlemesine anlatır."
    )
    font(r, size=10, color=RGBColor(0x55, 0x55, 0x55))

    WARN(
        doc,
        "Örneklerde contoso.com kullanılır. Kendi kiracı domain’iniz, UPN’leriniz ve "
        "yollarınızla değiştirin. Mümkünse önce test kullanıcısı / pilot grupla deneyin. "
        "Eski MSOnline ve AzureAD modülleri emekliye ayrılmıştır; bu rehber Microsoft Graph kullanır.",
    )

    H(doc, "Bu rehberi nasıl okumalısınız?", 1)
    P(
        doc,
        "Bu belge bir komut listesi değil; şirket M365 yöneticisinin günlük ve dönemsel işlerini "
        "anlayarak yapması için yazılmıştır. Her konuda sırayla: ne işe yarar, neden önemli, "
        "hangi yetki gerekir, komut nasıl çalışır, nasıl doğrulanır ve arka planda ne olur "
        "anlatılır. İlk okumada bölüm 0–3’ü mutlaka bitirin; sonra işinize göre Exchange, "
        "SharePoint/Teams veya güvenlik bölümlerine geçin.",
    )
    bullet(
        doc,
        [
            "0 — Kavram haritası: şirket M365’te neyi yönetirsiniz?",
            "1 — Ortam kurulumu ve bağlanma (temel beceri)",
            "2 — Kullanıcı yaşam döngüsü (işe alım → değişiklik → işten ayrılma)",
            "3 — Lisanslar (paranın ve erişimin kalbi)",
            "4 — Gruplar ve yetki modeli",
            "5 — Exchange Online (kurumsal e-posta)",
            "6 — SharePoint / OneDrive (dosya ve siteler)",
            "7 — Microsoft Teams",
            "8 — Güvenlik, denetim, raporlama",
            "9 — Operasyon runbook’ları (hazır senaryolar)",
            "10 — Sorun giderme zihniyeti",
        ],
    )

    # ========== 0 ==========
    H(doc, "0. Kavram haritası — Şirkette neyi yönetiyorsunuz?", 1)
    P(
        doc,
        "Office 365 / Microsoft 365, şirketinizin buluttaki kimlik + üretkenlik platformudur. "
        "PowerShell ile yönetim demek: portalda tek tek tıkladığınız işleri tekrarlanabilir, "
        "raporlanabilir ve toplu hale getirmektir. Şirket ölçeğinde portal yetmez; 50+ kullanıcıda "
        "CSV/otomasyon ve standart prosedür şarttır.",
    )

    H(doc, "0.1 Katmanlar", 2)
    CODE(
        doc,
        """Katman              Ne yönetir?                         Ana PowerShell yüzeyi
-----------------  ----------------------------------  --------------------------------
Kimlik (Entra ID)  Kullanıcı, grup, rol, MFA, misafir  Microsoft.Graph
Lisans             Hangi uygulamaya kim erişir         Microsoft.Graph (SKU / Set-MgUserLicense)
E-posta            Posta kutusu, kural, dağıtım        ExchangeOnlineManagement
Dosya              Site, OneDrive, paylaşım            PnP.PowerShell / SPO
İşbirliği          Ekip, kanal, politika               MicrosoftTeams
Güvenlik/Uyumluluk Denetim, CA, arama, hold            Graph + EXO + IPPSSession""",
    )
    NOTE(
        doc,
        "Aynı ‘kullanıcı’ hem Entra’da bir kimlik nesnesidir, hem (lisanslıysa) Exchange’de "
        "posta kutusu, hem OneDrive sahibi, hem Teams üyesidir. Bu yüzden işten ayrılmada "
        "tek Disable yetmez; katman katman kapatırsınız.",
    )

    H(doc, "0.2 Portal mı, PowerShell mi?", 2)
    bullet(
        doc,
        [
            "Portal: tek kullanıcı, görsel kontrol, acil küçük değişiklik.",
            "PowerShell: toplu işlem, rapor, standart offboarding, transport kuralı, arşiv/hold, "
            "tekrarlanabilir runbook.",
            "İdeal model: politika ve tasarım portal/Mimari ile; icra ve denetim PowerShell ile.",
        ],
    )

    H(doc, "0.3 En az yetki (RBAC) bilinci", 2)
    P(
        doc,
        "Global Administrator her şeyi yapar ama günlük iş için yanlıştır. Yardım masası için "
        "User Administrator / Helpdesk Administrator; lisans için License Administrator; "
        "posta için Exchange Admin; site için SharePoint Admin yeterlidir. PowerShell oturumunuz "
        "hangi rolle açıldıysa o rolün görebileceği cmdlet’leri görürsünüz — ‘komut yok’ çoğu zaman "
        "yetki eksikliğidir.",
    )

    # ========== 1 ==========
    H(doc, "1. Ortam kurulumu ve kiracıya bağlanma", 1)
    P(
        doc,
        "Her yönetim oturumu aynı üç adımdan geçer: (1) doğru modül yüklü mü, (2) doğru kimlikle "
        "bağlandınız mı, (3) gereken izin/scope var mı. Bu bölümü ezbere bilmeden ileri konulara "
        "geçmeyin.",
    )

    TOPIC(
        doc,
        "1.1 PowerShell sürümü ve Execution Policy",
        "Komutları çalıştıracak kabuğu hazırlarsınız.",
        "Yanlış Execution Policy script’leri bloklar; eski Windows PowerShell 5.1 bazı Graph "
        "senaryolarında sorun çıkarır. Mümkünse PowerShell 7+ kullanın.",
        "Yerel makinede yönetici veya CurrentUser kurulum yetkisi.",
        "Önce sürümü ve politikayı kontrol edin, sonra güvenli bir politika seçin:",
        """$PSVersionTable                    # PSVersion 7.x ideal
Get-ExecutionPolicy -List
# Sadece bu oturum (en güvenli geçici çözüm)
Set-ExecutionPolicy Bypass -Scope Process -Force
# Kullanıcı kapsamı (kalıcı, makine genelini bozmaz)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force""",
        derin="RemoteSigned: yerel script’ler çalışır, internetten inenler imza ister. "
        "Unrestricted şirkette önerilmez. Scope Process sadece açık pencereyi etkiler; "
        "eğitim / tek seferlik iş için idealdir.",
    )

    TOPIC(
        doc,
        "1.2 Hangi modül ne işe yarar? (kurulum)",
        "Her bulut hizmetinin kendi PowerShell modülü vardır; hepsi tek ‘Office365’ modülü değildir.",
        "Yanlış/eski modül (MSOnline, AzureAD) artık güvenilir değildir. Şirket standardınızı Graph + EXO + Teams + PnP yapın.",
        "İnternet erişimi ve PSGallery.",
        None,
        """Set-PSRepository -Name PSGallery -InstallationPolicy Trusted

Install-Module Microsoft.Graph -Scope CurrentUser -Force -AllowClobber
Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force
Install-Module MicrosoftTeams -Scope CurrentUser -Force
Install-Module PnP.PowerShell -Scope CurrentUser -Force

Get-Module Microsoft.Graph*, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell -ListAvailable |
  Select-Object Name, Version | Sort-Object Name, Version -Descending

Update-Module Microsoft.Graph, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell -Force""",
        derin="Microsoft.Graph aslında onlarca alt pakettir (Users, Groups, Reports…). "
        "Install-Module Microsoft.Graph hepsini çeker; disk ve süre pahalıdır. Sadece kullanıcı "
        "yönetecekseniz Microsoft.Graph.Authentication + Microsoft.Graph.Users yeterli olabilir. "
        "ExchangeOnlineManagement V3, Get-EXOMailbox gibi REST tabanlı hızlı cmdlet’ler getirir. "
        "PnP.PowerShell topluluk desteklidir ama şirketlerde fiili standarttır; resmi klasik modül "
        "Microsoft.Online.SharePoint.PowerShell’dir.",
    )

    TOPIC(
        doc,
        "1.3 Microsoft Graph’a bağlanma — scope (izin) kavramı",
        "Graph, Entra ID / kullanıcı / grup / lisans / rapor için ana kapıdır. Connect-MgGraph "
        "sırasında istediğiniz permission scope’lar MFA sonrası onaylanır (veya uygulama izniyle gelir).",
        "Scope bilmeden bağlanırsanız Get-MgUser ‘Insufficient privileges’ verir. Bu bir hata değil, "
        "güvenlik modelidir: her oturum sadece istediği kapıları açar.",
        "En az User Administrator veya Global Reader (okuma) / ilgili yazma rolleri.",
        "İlk öğrenme oturumu için geniş ama bilinçli bir scope seti:",
        """$scopes = @(
  "User.Read.All",              # kullanıcı oku
  "User.ReadWrite.All",         # kullanıcı yaz
  "Group.ReadWrite.All",        # grup yaz
  "Directory.Read.All",         # dizin oku
  "Organization.Read.All",      # lisans SKU oku
  "AuditLog.Read.All",          # oturum / dizin audit
  "Reports.Read.All"            # kullanım raporları
)
Connect-MgGraph -Scopes $scopes -NoWelcome
Get-MgContext | Format-List          # kim, hangi tenant, hangi scope
Get-MgOrganization | Select-Object DisplayName, Id
# İş bitince
# Disconnect-MgGraph""",
        dogrula="""(Get-MgContext).Scopes
Get-MgUser -Top 3 | Select-Object DisplayName, UserPrincipalName""",
        derin="Delegated (sizin kullanıcı token’ınız) vs Application (app-only): "
        "Günlük admin işi delegated’dır. Gece çalışan runbook app-only + sertifika ister; "
        "Entra’da App Registration, Application permission ve Admin consent gerekir. "
        "Secret’ı scripte gömmeyin — Key Vault veya sertifika thumbprint kullanın. "
        "Find-MgGraphCommand -Command Get-MgUser ile bir cmdlet’in hangi izni istediğini bulursunuz.",
    )

    TOPIC(
        doc,
        "1.4 Exchange, Teams, SharePoint oturumları",
        "E-posta, ekip ve site işleri ayrı bağlantı ister; Graph her şeyi kapsamaz.",
        "Örn. paylaşılan posta kutusu izni veya transport kuralı yalnızca Exchange Online PowerShell’dedir.",
        "İlgili admin rolleri (Exchange Admin, Teams Admin, SharePoint Admin).",
        None,
        """# Exchange Online
Connect-ExchangeOnline -ShowBanner:$false
Get-ConnectionInformation | Format-List
# Disconnect-ExchangeOnline -Confirm:$false

# Teams
Connect-MicrosoftTeams
Get-CsTenant | Select-Object DisplayName, TenantId
# Disconnect-MicrosoftTeams

# SharePoint yönetim merkezi (PnP)
Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive
# Disconnect-PnPOnline""",
        derin="Aynı pencerede üç bağlantıyı birden açabilirsiniz. Offboarding gibi çapraz "
        "senaryolarda Graph + Exchange birlikte şarttır. Unattended EXO için "
        "Connect-ExchangeOnline -AppId -CertificateThumbprint -Organization kullanılır.",
    )

    # ========== 2 ==========
    H(doc, "2. Kullanıcı yaşam döngüsü (şirketin omurgası)", 1)
    P(
        doc,
        "Şirket yönetiminin yüzde yetmişi kullanıcıdır: işe alım, unvan/departman değişimi, "
        "parola/MFA yardımı, işten ayrılma. Bu bölümü master edin.",
    )

    TOPIC(
        doc,
        "2.1 Kullanıcıyı anlamak — UPN, mail, Id",
        "Get-MgUser ile kiracıdaki kimlikleri okursunuz.",
        "Yanlış kullanıcıya işlem yapmak (benzer isimler) felakettir. Her zaman UserPrincipalName "
        "veya Object Id ile hedefleyin; sadece DisplayName ile yazma işlemi yapmayın.",
        "User.Read.All",
        "Önce envanter ve güvenli filtrelemeyi öğrenin:",
        """# Özet envanter (özellik seçerek daha hızlı)
Get-MgUser -All -Property "id,displayName,userPrincipalName,accountEnabled,department,jobTitle,userType,createdDateTime" |
  Select-Object DisplayName, UserPrincipalName, AccountEnabled, Department, JobTitle, UserType |
  Out-GridView   # veya Export-Csv

# Tek kullanıcı — tüm profil
Get-MgUser -UserId "ayse.yilmaz@contoso.com" | Format-List *

# Aktif + belirli departman
Get-MgUser -All -Filter "accountEnabled eq true and department eq 'Operasyon'" `
  -Property "displayName,userPrincipalName,jobTitle"

# Misafirler (B2B)
Get-MgUser -All -Filter "userType eq 'Guest'" |
  Select-Object DisplayName, Mail, UserPrincipalName, ExternalUserState""",
        derin="UPN: oturum açma adıdır (çoğu şirkette birincil e-posta ile aynı). "
        "Mail: proxy adresi senkron/Exchange’ten gelebilir. Id: GUID; silme/geri yüklemede "
        "en güvenilir anahtardır. Filter OData dilidir: eq, and, startswith. "
        "Türkçe karakter / karmaşık arama için -Search ve -ConsistencyLevel eventual gerekir. "
        "UserType Member = şirket hesabı, Guest = dış davetli.",
    )

    TOPIC(
        doc,
        "2.2 Yeni çalışan oluşturma (cloud user)",
        "New-MgUser ile Entra’da hesap açarsınız. Bu, posta kutusu demek değildir — lisans "
        "(Exchange planı) gelince posta kutusu provision olur.",
        "UsageLocation (ülke) vermezseniz lisans atayamazsınız. ForceChangePasswordNextSignIn "
        "olmadan geçici şifre ile kullanıcı sonsuza dek aynı şifrede kalabilir.",
        "User.ReadWrite.All + User Administrator",
        None,
        """$PasswordProfile = @{
  Password                      = "GeciciSifre!ChangeMe1"
  ForceChangePasswordNextSignIn = $true
}

New-MgUser `
  -DisplayName "Ayşe Yılmaz" `
  -GivenName "Ayşe" -Surname "Yılmaz" `
  -UserPrincipalName "ayse.yilmaz@contoso.com" `
  -MailNickname "ayseyilmaz" `
  -AccountEnabled `
  -PasswordProfile $PasswordProfile `
  -UsageLocation "TR" `
  -Department "Operasyon" `
  -JobTitle "Uzman" `
  -OfficeLocation "İstanbul" `
  -CompanyName "Contoso A.Ş." `
  -PreferredLanguage "tr-TR" `
  -MobilePhone "+905551112233" """,
        dogrula="""Get-MgUser -UserId "ayse.yilmaz@contoso.com" |
  Select-Object DisplayName, UserPrincipalName, UsageLocation, AccountEnabled""",
        derin="Hibrit şirkette (AD + Entra Connect) bulut-sadece New-MgUser yerine on-prem AD’de "
        "kullanıcı açıp sync edersiniz; aksi halde ‘mastering’ çakışır. Saf bulut kiracıda "
        "New-MgUser doğrudur. MailNickname SMTP/takma ad üretiminde kullanılır; UPN local-part "
        "ile uyumlu tutun. OtherMails kişisel yedek e-postadır, birincil SMTP değildir.",
    )

    TOPIC(
        doc,
        "2.3 Güncelleme, hesap kilidi, parola, oturum düşürme",
        "HR değişiklikleri ve güvenlik olaylarında ilk müdahale araçlarınız.",
        "İşten ayrılma veya şüpheli hesapta sıra: Revoke-MgUserSignInSession → AccountEnabled "
        "$false → (sonra lisans/posta). Sadece şifre değiştirmek çalınmış refresh token’ı düşürmez.",
        "User.ReadWrite.All",
        None,
        """# HR alanları
Update-MgUser -UserId "ayse.yilmaz@contoso.com" `
  -JobTitle "Kıdemli Uzman" -Department "Operasyon" -OfficeLocation "Ankara"

# Hesap kilidi / aç
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$false
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$true

# Parola sıfırla
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -PasswordProfile @{
  Password = "YeniGecici!789"
  ForceChangePasswordNextSignIn = $true
}

# Tüm oturumları düşür (kritik)
Revoke-MgUserSignInSession -UserId "ayse.yilmaz@contoso.com" """,
        derin="Revoke-MgUserSignInSession refresh token’ları geçersiz kılar; açık tarayıcı oturumları "
        "kısa sürede düşer. Conditional Access / compliant device politikaları varsa kullanıcı "
        "yeniden MFA ve cihaz kontrolünden geçer. Yönetici (manager) atamak için "
        "Set-MgUserManagerByRef kullanılır; onay akışları ve OO otomatik yanıt yönlendirmesi "
        "için önemlidir.",
    )

    TOPIC(
        doc,
        "2.4 Silme, geri dönüşüm, kalıcı silme",
        "Remove-MgUser soft-delete yapar (~30 gün).",
        "Yanlış silinen hesabı Restore-MgDirectoryDeletedItem ile kurtarırsınız. Kalıcı silme "
        "sonrası Object Id değişir; Exchange verisi retention/hold yoksa risk altındadır.",
        "User.ReadWrite.All",
        None,
        """Remove-MgUser -UserId "ayse.yilmaz@contoso.com" -Confirm:$false

Get-MgDirectoryDeletedItemAsUser -All |
  Select-Object Id, DisplayName, UserPrincipalName, DeletedDateTime

$d = Get-MgDirectoryDeletedItemAsUser -All |
  Where-Object UserPrincipalName -eq "ayse.yilmaz@contoso.com"
Restore-MgDirectoryDeletedItem -DirectoryObjectId $d.Id
# Kalıcı: Remove-MgDirectoryDeletedItem -DirectoryObjectId $d.Id""",
    )
    WARN(doc, "Üretimde kalıcı silmeden önce litigation hold / legal gereksinimi sorun.")

    TOPIC(
        doc,
        "2.5 Dış kullanıcı (B2B Guest) daveti",
        "Partner / tedarikçiye şirket kaynaklarını açmak için New-MgInvitation.",
        "Misafirler şirketin Member kullanıcılarından farklıdır; grup ve Conditional Access ile "
        "sıkı sınırlandırılmalıdır. ‘Herkese Guest verip unutmak’ veri sızıntısı yoludur.",
        "User.Invite.All",
        None,
        """New-MgInvitation `
  -InvitedUserEmailAddress "kisi@partner.com" `
  -InvitedUserDisplayName "Partner Kişi" `
  -InviteRedirectUrl "https://myapps.microsoft.com" `
  -SendInvitationMessage `
  -InvitedUserMessageInfo @{ CustomizedMessageBody = "Contoso kiracısına davet." }

Get-MgUser -Filter "mail eq 'kisi@partner.com'" |
  Select-Object DisplayName, UserType, ExternalUserState, UserPrincipalName""",
    )

    TOPIC(
        doc,
        "2.6 MFA yöntemleri ve yardım masası (TAP)",
        "Kullanıcı telefonunu kaybettiğinde authentication method silme / Temporary Access Pass.",
        "MFA kaydı olmayan hesaplar phishing’e açıktır. Şirket politikası: tüm Member’larda MFA. "
        "TAP, kontrollü süreli giriştir; ‘MFA’yı kapat’tan daha güvenlidir.",
        "Authentication Administrator veya User Authentication Administrator",
        None,
        """$u = "ayse.yilmaz@contoso.com"
Get-MgUserAuthenticationMethod -UserId $u
Get-MgUserAuthenticationPhoneMethod -UserId $u
Get-MgUserAuthenticationMicrosoftAuthenticatorMethod -UserId $u

# Geçici Access Pass (ör. 1 saat, tek kullanım)
New-MgUserAuthenticationTemporaryAccessPassMethod -UserId $u -BodyParameter @{
  LifetimeInMinutes = 60
  IsUsableOnce      = $true
}

# MFA kayıt raporu
Get-MgReportAuthenticationMethodUserRegistrationDetail -All |
  Select-Object UserPrincipalName, IsMfaRegistered, IsMfaCapable, MethodsRegistered |
  Export-Csv "$env:TEMP\\mfa_kayit.csv" -NoTypeInformation -Encoding UTF8""",
    )

    # ========== 3 ==========
    H(doc, "3. Lisans yönetimi — erişim ve maliyet", 1)
    P(
        doc,
        "Lisans (SKU), kullanıcıya hangi hizmetlerin (Exchange, Teams, SharePoint, Office uygulamaları…) "
        "açılacağını belirler. Şirkette en pahalı operasyon hatalarından biri: lisanssız aktif hesap "
        "veya ayrılan kişiye lisans bırakmak.",
    )

    TOPIC(
        doc,
        "3.1 SKU envanteri ve boş kota",
        "Get-MgSubscribedSku kiracınızda satın alınmış planları ve tüketimi gösterir.",
        "Available = Enabled - Consumed. Sıfırken yeni kullanıcıya atama hata verir; satın alma "
        "veya geri toplama gerekir.",
        "Organization.Read.All",
        None,
        """Get-MgSubscribedSku | ForEach-Object {
  [PSCustomObject]@{
    SkuPartNumber = $_.SkuPartNumber
    SkuId         = $_.SkuId
    Enabled       = $_.PrepaidUnits.Enabled
    Consumed      = $_.ConsumedUnits
    Available     = $_.PrepaidUnits.Enabled - $_.ConsumedUnits
  }
} | Sort-Object SkuPartNumber | Format-Table -AutoSize

# Bir SKU içindeki servis planları (Exchange, Teams, Yammer…)
$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
$sku.ServicePlans | Select-Object ServicePlanName, ServicePlanId, ProvisioningStatus |
  Sort-Object ServicePlanName""",
        derin="SkuPartNumber örnekleri: SPE_E3 / SPE_E5 (M365 E3/E5), ENTERPRISEPACK (O365 E3), "
        "O365_BUSINESS_PREMIUM, SPB (Business Premium), POWER_BI_PRO, VISIOCLIENT, "
        "EXCHANGEENTERPRISE. Aynı ‘E3’ hissi veren birden fazla SKU olabilir — SkuId ile çalışın. "
        "Service plan disable ederek ‘E3 ama Yammer kapalı’ gibi ince ayar yapılır.",
    )

    TOPIC(
        doc,
        "3.2 Lisans atama, kaldırma, yükseltme",
        "Set-MgUserLicense tek cmdlet ile ekler ve çıkarır.",
        "Önce UsageLocation. Add ve Remove aynı çağrıda yapılabilir (E3→E5 upgrade).",
        "License Administrator veya User Administrator",
        None,
        """$user = "ayse.yilmaz@contoso.com"
Update-MgUser -UserId $user -UsageLocation "TR"

$e3 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3").SkuId
$e5 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E5").SkuId

# Ata
Set-MgUserLicense -UserId $user -AddLicenses @{ SkuId = $e3 } -RemoveLicenses @()

# E3 kaldır + E5 ekle
Set-MgUserLicense -UserId $user -AddLicenses @{ SkuId = $e5 } -RemoveLicenses @($e3)

# Tümünü kaldır
$all = (Get-MgUserLicenseDetail -UserId $user).SkuId
if ($all) { Set-MgUserLicense -UserId $user -AddLicenses @() -RemoveLicenses $all }

Get-MgUserLicenseDetail -UserId $user | Select-Object SkuPartNumber, SkuId""",
        derin="Lisans sonrası Exchange/Teams provision birkaç dakika sürebilir. "
        "Group-based licensing varsa kullanıcıda atama ‘inherited’ görünür; doğrudan "
        "Set-MgUserLicense ile çakışma yaşamamak için grubu yönetin. DisabledPlans ile "
        "belirli ServicePlanId’leri kapatarak maliyet/uyumluluk ince ayarı yapılır.",
    )

    TOPIC(
        doc,
        "3.3 Lisanssız aktif kullanıcı raporu (maliyet kontrolü)",
        "Aktif Member olup lisansı olmayanlar; ya unutulmuş hesap ya da henüz provision edilmemiş.",
        "Aylık operasyon rutini yapın; CFO ve güvenlik bunu sever.",
        "User.Read.All, Organization.Read.All",
        None,
        """Get-MgUser -All -Property "displayName,userPrincipalName,accountEnabled,assignedLicenses,userType" |
  Where-Object { $_.AccountEnabled -and $_.UserType -eq "Member" -and $_.AssignedLicenses.Count -eq 0 } |
  Select-Object DisplayName, UserPrincipalName |
  Export-Csv "$env:TEMP\\lisanssiz_aktif.csv" -NoTypeInformation -Encoding UTF8""",
    )

    # ========== 4 ==========
    H(doc, "4. Gruplar — yetki ve dağıtım modeli", 1)
    P(
        doc,
        "Şirkette kullanıcılara tek tek izin vermek ölçeklenmez. Güvenlik grubu, Microsoft 365 grubu, "
        "dağıtım listesi ve dinamik grup doğru seçilmezse hem güvenlik hem mail kaosu doğar.",
    )

    H(doc, "4.1 Grup türleri (karar tablosu)", 2)
    CODE(
        doc,
        """Tür                 Mail?    Takım/Site?   Tipik kullanım
------------------  -------  -----------  ----------------------------------
Security Group      Hayır    Hayır        RBAC, SharePoint izin, CA hedefi
Microsoft 365 Group Evet     Evet         Ekip + SharePoint + Planner
Distribution (EXO)  Evet     Hayır        Sadece toplu e-posta
Dynamic (Entra)     Opsiyon  Opsiyon      Departman/ülke kuralı ile otomatik üyelik""",
    )

    TOPIC(
        doc,
        "4.2 Graph ile güvenlik / M365 / dinamik grup",
        None,
        "Dinamik grupta MembershipRule yanlışsa ya kimse girmez ya herkes girer — kuralı test edin.",
        "Group.ReadWrite.All",
        None,
        """# Güvenlik
New-MgGroup -DisplayName "SG-Operasyon" -MailEnabled:$false `
  -MailNickname "sg-operasyon" -SecurityEnabled -Description "Operasyon SG"

# Microsoft 365 (Unified)
New-MgGroup -DisplayName "Operasyon Ekibi" -MailEnabled -SecurityEnabled `
  -MailNickname "operasyon-ekibi" -GroupTypes @("Unified") -Visibility "Private"

# Dinamik: departman = Operasyon
New-MgGroup -DisplayName "DG-Operasyon" -MailEnabled:$false `
  -MailNickname "dg-operasyon" -SecurityEnabled `
  -GroupTypes @("DynamicMembership") `
  -MembershipRule '(user.department -eq "Operasyon")' `
  -MembershipRuleProcessingState "On"

# Üye ekle / çıkar
$g = (Get-MgGroup -Filter "displayName eq 'SG-Operasyon'").Id
$u = (Get-MgUser -UserId "ayse.yilmaz@contoso.com").Id
New-MgGroupMember -GroupId $g -DirectoryObjectId $u
Remove-MgGroupMemberByRef -GroupId $g -DirectoryObjectId $u

# Üye CSV
Get-MgGroupMember -GroupId $g -All | ForEach-Object {
  Get-MgUser -UserId $_.Id -ErrorAction SilentlyContinue
} | Select-Object DisplayName, UserPrincipalName |
  Export-Csv "$env:TEMP\\sg-operasyon.csv" -NoTypeInformation -Encoding UTF8""",
    )

    TOPIC(
        doc,
        "4.3 Exchange dağıtım grupları",
        "Klasik ‘satis@contoso.com’ listeleri New-DistributionGroup ile yönetilir.",
        "RequireSenderAuthenticationEnabled $false dışarıdan mail kabul ettirir — spam riski; "
        "bilinçli açın.",
        "Exchange Admin + Connect-ExchangeOnline",
        None,
        """New-DistributionGroup -Name "Satis-DG" -PrimarySmtpAddress "satis@contoso.com" `
  -Type Distribution -ManagedBy "admin@contoso.com"

Add-DistributionGroupMember -Identity "Satis-DG" -Member "ayse.yilmaz@contoso.com"
Get-DistributionGroupMember -Identity "Satis-DG"

New-DynamicDistributionGroup -Name "Operasyon-DynDG" `
  -PrimarySmtpAddress "operasyon-dyn@contoso.com" `
  -RecipientFilter "((RecipientTypeDetails -eq 'UserMailbox') -and (Department -eq 'Operasyon'))" """,
    )

    # ========== 5 ==========
    H(doc, "5. Exchange Online — kurumsal e-posta yönetimi", 1)
    P(
        doc,
        "Şirket e-postası hâlâ en kritik sistemdir. Paylaşılan kutular, yönlendirme, kurallar, "
        "arşiv ve hold bilmeden ‘e-posta adminliği’ yapılamaz.",
    )

    TOPIC(
        doc,
        "5.1 Posta kutusu envanteri ve kota",
        "Get-EXOMailbox / Get-EXOMailboxStatistics",
        "Kota dolunca kullanıcı mail gönderemez; proaktif izleyin.",
        "Exchange Admin",
        None,
        """Connect-ExchangeOnline -ShowBanner:$false

Get-EXOMailbox -ResultSize Unlimited |
  Group-Object RecipientTypeDetails | Select-Object Name, Count

Get-EXOMailbox -Identity "ayse.yilmaz@contoso.com" -Properties ArchiveStatus,LitigationHoldEnabled |
  Format-List DisplayName, PrimarySmtpAddress, RecipientTypeDetails, ArchiveStatus, LitigationHoldEnabled

Get-EXOMailboxStatistics -Identity "ayse.yilmaz@contoso.com" |
  Select-Object DisplayName, ItemCount, TotalItemSize, LastLogonTime

Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -UseDatabaseQuotaDefaults:$false `
  -IssueWarningQuota 45GB -ProhibitSendQuota 49GB -ProhibitSendReceiveQuota 50GB""",
    )

    TOPIC(
        doc,
        "5.2 Paylaşılan posta kutusu (shared) ve izinler",
        "destek@, info@, ik@ gibi ortak adresler. Shared kutuya genelde lisans gerekmez "
        "(boyut limitleri sürümle değişebilir; büyük kutularda lisansı kontrol edin).",
        "Full Access ≠ Send As. İkisini de bilerek verin. AutoMapping Outlook’a otomatik ekler.",
        None,
        None,
        """New-Mailbox -Shared -Name "Destek" -DisplayName "Destek Ortak" `
  -PrimarySmtpAddress "destek@contoso.com"

Add-MailboxPermission -Identity "destek@contoso.com" `
  -User "ayse.yilmaz@contoso.com" -AccessRights FullAccess -InheritanceType All -AutoMapping:$true

Add-RecipientPermission -Identity "destek@contoso.com" `
  -Trustee "ayse.yilmaz@contoso.com" -AccessRights SendAs -Confirm:$false

Set-Mailbox -Identity "destek@contoso.com" -GrantSendOnBehalfTo @{Add="mudur@contoso.com"}

Get-MailboxPermission -Identity "destek@contoso.com" |
  Where-Object { -not $_.IsInherited -and $_.User -notlike "NT AUTHORITY*" }""",
        derin="İşten ayrılan kişinin kutusunu Set-Mailbox -Type Shared yapıp yöneticisine Full Access "
        "vermek yaygın bir runbook adımıdır; ardından kullanıcı lisansını kaldırırsınız. "
        "Dönüştürme öncesi yasal hold var mı bakın.",
    )

    TOPIC(
        doc,
        "5.3 Yönlendirme, alias, otomatik yanıt",
        None,
        "Dış SMTP yönlendirme veri sızıntısı vektörüdür; şirket politikası çoğu zaman kısıtlar. "
        "Remote domain / transport kurallarıyla kontrol edin.",
        None,
        None,
        """# Yönlendir + kutuda kopya bırak
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress "arsiv@contoso.com" -DeliverToMailboxAndForward:$true

# Kaldır
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress $null -ForwardingAddress $null -DeliverToMailboxAndForward:$false

# Alias
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -EmailAddresses @{Add="smtp:ayse@contoso.com.tr"}

# OOF
Set-MailboxAutoReplyConfiguration -Identity "ayse.yilmaz@contoso.com" `
  -AutoReplyState Enabled `
  -InternalMessage "İzinliyim; acil için mudur@contoso.com." `
  -ExternalMessage "I am out of office." -ExternalAudience All""",
    )

    TOPIC(
        doc,
        "5.4 Arşiv ve Litigation Hold",
        "Enable-Mailbox -Archive online arşivi açar. Litigation Hold silinen/değişen içeriği "
        "yasal süre boyunca korur.",
        "Hold olmadan ‘silinen mail’ kurtarma penceresi sınırlıdır. Hukuk/uyumluluk taleplerinde hold şarttır.",
        None,
        None,
        """Enable-Mailbox -Identity "ayse.yilmaz@contoso.com" -Archive
Get-EXOMailbox -Identity "ayse.yilmaz@contoso.com" -Properties ArchiveStatus,ArchiveGuid

Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -LitigationHoldEnabled:$true
# Süre (gün); Unlimited da verilebilir
# Set-Mailbox ... -LitigationHoldDuration 2555
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -SingleItemRecoveryEnabled:$true
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -RetainDeletedItemsFor 30""",
    )

    TOPIC(
        doc,
        "5.5 Transport kuralları (mail flow) ve message trace",
        "Kurumsal politika: dış mail uyarısı, ek engeli, BCC denetim.",
        "Yanlış kural tüm şirketin mailini kesebilir. Önce Mode: Audit, sonra Enforce.",
        None,
        None,
        """New-TransportRule -Name "Dis-Kaynak-Uyari" -FromScope NotInOrganization `
  -ApplyHtmlDisclaimerLocation Prepend `
  -ApplyHtmlDisclaimerText "<b>DİKKAT:</b> Kurum dışından geldi." `
  -ApplyHtmlDisclaimerFallbackAction Wrap

New-TransportRule -Name "Block-Exe" `
  -AttachmentExtensionMatchesWords "exe","bat","cmd","js","vbs" `
  -RejectMessageReasonText "Bu ek türüne izin yok." -RejectMessageEnhancedStatusCode "5.7.1"

Get-TransportRule | Select-Object Name, State, Priority | Sort-Object Priority

# İleti izleme (son ~10 gün)
Get-MessageTrace -RecipientAddress "ayse.yilmaz@contoso.com" `
  -StartDate (Get-Date).AddDays(-2) -EndDate (Get-Date) |
  Select-Object Received, SenderAddress, Subject, Status""",
    )

    TOPIC(
        doc,
        "5.6 Oda / ekipman kutuları",
        "Toplantı odası takvimi AutoAccept ile yönetilir.",
        None,
        None,
        None,
        """New-Mailbox -Room -Name "A101" -PrimarySmtpAddress "a101@contoso.com"
Set-CalendarProcessing -Identity "a101@contoso.com" `
  -AutomateProcessing AutoAccept -AddOrganizerToSubject:$false `
  -DeleteSubject:$false -BookingWindowInDays 180 -MaximumDurationInMinutes 480""",
    )

    # ========== 6 ==========
    H(doc, "6. SharePoint Online ve OneDrive", 1)

    TOPIC(
        doc,
        "6.1 Site envanteri, kota, oluşturma",
        "Dosya evreninin haritası Get-PnPTenantSite ile çıkar.",
        "Dış paylaşım (SharingCapability) şirket veri sınıflandırmasına göre kısıtlanmalıdır.",
        "SharePoint Admin",
        None,
        """Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive

Get-PnPTenantSite -Detailed |
  Select-Object Url, Title, Template, StorageUsageCurrent, StorageQuota |
  Sort-Object StorageUsageCurrent -Descending |
  Export-Csv "$env:TEMP\\spo_siteler.csv" -NoTypeInformation -Encoding UTF8

New-PnPSite -Type CommunicationSite -Title "Operasyon Portal" `
  -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -Owner "admin@contoso.com" -Lcid 1055

Set-PnPTenantSite -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -StorageQuota 102400 -SharingCapability ExternalUserSharingOnly""",
    )

    TOPIC(
        doc,
        "6.2 OneDrive erişimi (işten ayrılma için kritik)",
        "Ayrılan kişinin dosyalarını yöneticiye açmak için site owner eklenir.",
        "OneDrive URL kişiselleşmiştir; provision edilmemişse önce personal site tetiklenir.",
        None,
        None,
        """Request-PnPPersonalSite -UserEmails "ayrilacak@contoso.com"
# Tipik URL kalıbı:
$od = "https://contoso-my.sharepoint.com/personal/ayrilacak_contoso_com"
Set-PnPTenantSite -Url $od -Owners "mudur@contoso.com","admin@contoso.com" """,
    )

    # ========== 7 ==========
    H(doc, "7. Microsoft Teams", 1)

    TOPIC(
        doc,
        "7.1 Ekip, üye, kanal yaşam döngüsü",
        "Teams ekibi aslında bir M365 grubudur; GroupId ortaktır.",
        "Gereksiz private team şişmesi yönetim yüküdür. Naming policy ve expiration policy "
        "şirket standardı olmalıdır (portal/Graph ile).",
        "Teams Admin",
        None,
        """Connect-MicrosoftTeams
$team = New-Team -DisplayName "Operasyon" -MailNickName "operasyon-teams" `
  -Visibility Private -Owner "admin@contoso.com"
Add-TeamUser -GroupId $team.GroupId -User "ayse.yilmaz@contoso.com" -Role Member
Add-TeamUser -GroupId $team.GroupId -User "mudur@contoso.com" -Role Owner
New-TeamChannel -GroupId $team.GroupId -DisplayName "Gunluk"
Get-TeamUser -GroupId $team.GroupId
Set-TeamArchivedState -GroupId $team.GroupId -Archived:$true""",
    )

    # ========== 8 ==========
    H(doc, "8. Güvenlik, denetim, raporlama", 1)

    TOPIC(
        doc,
        "8.1 Kimde hangi admin rolü var?",
        "Get-MgDirectoryRoleMember ile ayrıcalıklı hesap envanteri.",
        "Ayda bir gözden geçirin. Unused admin = risk.",
        "RoleManagement.Read.Directory / Global Reader",
        None,
        """Get-MgDirectoryRole -All | ForEach-Object {
  $role = $_
  Get-MgDirectoryRoleMember -DirectoryRoleId $role.Id -All | ForEach-Object {
    $upn = $null
    try { $upn = (Get-MgUser -UserId $_.Id -EA Stop).UserPrincipalName } catch {}
    [PSCustomObject]@{ Role = $role.DisplayName; UPN = $upn; Id = $_.Id }
  }
} | Sort-Object Role, UPN""",
    )

    TOPIC(
        doc,
        "8.2 Oturum açma ve birleşik denetim kaydı",
        "Şüpheli giriş, dosya indirme, grup üyeliği değişimi.",
        "Audit log kapalı kiracıda soruşturma yapılamaz — Unified Audit Log’un açık olduğundan emin olun.",
        "AuditLog.Read.All / View-Only Audit Logs",
        None,
        """# Graph sign-in (son 24s örnek)
Get-MgAuditLogSignIn -Top 50 `
  -Filter "createdDateTime ge $((Get-Date).AddDays(-1).ToString('yyyy-MM-ddTHH:mm:ssZ'))" |
  Select-Object CreatedDateTime, UserPrincipalName, AppDisplayName, IpAddress,
    @{N="Error";E={$_.Status.ErrorCode}}

# Unified audit (Exchange oturumu)
Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-3) -EndDate (Get-Date) `
  -Operations UserLoggedIn,FileDownloaded,AddMemberToGroup -ResultSize 1000 |
  Select-Object CreationDate, UserIds, Operations, ObjectId |
  Export-Csv "$env:TEMP\\audit.csv" -NoTypeInformation -Encoding UTF8""",
    )

    TOPIC(
        doc,
        "8.3 Kullanım raporları (yönetim kurulu / operasyon)",
        "Get-MgReport* CSV üretir: kim aktif, mailbox boyutu, Teams aktivitesi.",
        "Lisans yenileme ve eğitim ihtiyacı için ayda bir alın.",
        "Reports.Read.All",
        None,
        """Get-MgReportOffice365ActiveUserDetail -Period D30 -OutFile "$env:TEMP\\o365_active.csv"
Get-MgReportMailboxUsageDetail -Period D30 -OutFile "$env:TEMP\\mailbox_usage.csv"
Get-MgReportOneDriveUsageAccountDetail -Period D30 -OutFile "$env:TEMP\\onedrive_usage.csv"
Get-MgReportTeamsUserActivityUserDetail -Period D30 -OutFile "$env:TEMP\\teams_activity.csv" """,
    )

    # ========== 9 ==========
    H(doc, "9. Operasyon runbook’ları (şirkette gerçek iş)", 1)
    P(
        doc,
        "Aşağıdakiler ezberlenecek komut değil; şirketin standart prosedürleridir. "
        "Kendi domain’inize göre scriptleştirip saklayın.",
    )

    TOPIC(
        doc,
        "9.1 İşe alım (onboarding) — minimum paket",
        "Hesap + konum + lisans + grup + (opsiyonel) Teams.",
        "Sıra önemlidir: kullanıcı → UsageLocation → lisans → grup. Tersi hata üretir.",
        None,
        None,
        """# --- Onboarding örneği ---
$upn = "yeni@contoso.com"; $skuName = "SPE_E3"; $groupName = "SG-Operasyon"
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Organization.Read.All" -NoWelcome

New-MgUser -DisplayName "Yeni Çalışan" -UserPrincipalName $upn -MailNickname "yeni" `
  -AccountEnabled -UsageLocation "TR" -Department "Operasyon" `
  -PasswordProfile @{ Password="GeciciSifre!123"; ForceChangePasswordNextSignIn=$true }

$sku = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq $skuName).SkuId
Set-MgUserLicense -UserId $upn -AddLicenses @{SkuId=$sku} -RemoveLicenses @()

$g = (Get-MgGroup -Filter "displayName eq '$groupName'").Id
New-MgGroupMember -GroupId $g -DirectoryObjectId (Get-MgUser -UserId $upn).Id
Write-Host "Onboarding OK: $upn" """,
    )

    TOPIC(
        doc,
        "9.2 İşten ayrılma (offboarding) — güvenli sıra",
        "Oturum düşür → hesabı kapat → gruplardan çıkar → PK’yı shared yap / erişim ver → "
        "OneDrive owner → lisans kaldır → (opsiyonel) sil / bekle.",
        "Önce lisans kaldırırsanız posta kutusuna erişim ve arama senaryoları zorlaşır. "
        "Önce erişimi güvenceye alın, maliyeti sonra kesin.",
        None,
        None,
        """$upn = "ayrilacak@contoso.com"
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Organization.Read.All" -NoWelcome
Connect-ExchangeOnline -ShowBanner:$false

Revoke-MgUserSignInSession -UserId $upn
Update-MgUser -UserId $upn -AccountEnabled:$false

$uid = (Get-MgUser -UserId $upn).Id
Get-MgUserMemberOf -UserId $upn -All | ForEach-Object {
  if ($_.AdditionalProperties["@odata.type"] -eq "#microsoft.graph.group") {
    try { Remove-MgGroupMemberByRef -GroupId $_.Id -DirectoryObjectId $uid } catch {}
  }
}

Set-Mailbox -Identity $upn -Type Shared
# Yoneticiye Full Access — UPN'yi bilerek yazın
Add-MailboxPermission -Identity $upn -User "mudur@contoso.com" -AccessRights FullAccess -InheritanceType All

$lic = (Get-MgUserLicenseDetail -UserId $upn).SkuId
if ($lic) { Set-MgUserLicense -UserId $upn -AddLicenses @() -RemoveLicenses $lic }
Write-Host "Offboarding çekirdeği tamam. OneDrive owner ve legal hold'u elle doğrula." """,
    )

    TOPIC(
        doc,
        "9.3 CSV ile toplu kullanıcı açma",
        "İşe alım dönemi / şirket göçü.",
        "Önce 2 satırlık pilot CSV ile deneyin. Hataları satır satır loglayın.",
        "CSV sütunları: DisplayName,UserPrincipalName,Department,JobTitle,SkuPartNumber",
        None,
        """Connect-MgGraph -Scopes "User.ReadWrite.All","Organization.Read.All" -NoWelcome
$skus = Get-MgSubscribedSku
Import-Csv "C:\\Temp\\yeni_kullanicilar.csv" | ForEach-Object {
  $row = $_; $nick = ($row.UserPrincipalName -split "@")[0] -replace "[^a-zA-Z0-9]"
  try {
    $u = New-MgUser -DisplayName $row.DisplayName -UserPrincipalName $row.UserPrincipalName `
      -MailNickname $nick -AccountEnabled -UsageLocation "TR" `
      -Department $row.Department -JobTitle $row.JobTitle `
      -PasswordProfile @{Password="GeciciSifre!123"; ForceChangePasswordNextSignIn=$true}
    $id = ($skus | Where-Object SkuPartNumber -eq $row.SkuPartNumber).SkuId
    if ($id) { Set-MgUserLicense -UserId $u.Id -AddLicenses @{SkuId=$id} -RemoveLicenses @() }
    "OK $($row.UserPrincipalName)"
  } catch { Write-Warning "HATA $($row.UserPrincipalName): $_" }
}""",
    )

    # ========== 10 ==========
    H(doc, "10. Sorun giderme zihniyeti", 1)
    bullet(
        doc,
        [
            "Insufficient privileges → scope veya Entra rolü eksik. Get-MgContext / Find-MgGraphCommand.",
            "Kullanıcı var ama mail yok → lisans/Exchange planı veya provision gecikmesi.",
            "Cmdlet yok → yanlış modül veya EXO yerine Graph arıyorsunuz (veya tersi).",
            "Filter hata → OData tırnak/boşluk; startswith(userPrincipalName,'ayse') formatı.",
            "MessageTrace boş → zaman aralığı veya gecikme; 10 günden eski için historical search.",
            "Değişiklik görünmüyor → Teams/EXO cache; 5–15 dk bekle veya yeni oturum.",
        ],
    )
    CODE(
        doc,
        """Get-MgContext
(Get-MgContext).Scopes
Find-MgGraphCommand -Command Set-MgUserLicense | Select-Object -ExpandProperty Permissions
$Error[0] | Format-List * -Force
Get-ConnectionInformation
Update-Module Microsoft.Graph, ExchangeOnlineManagement -Force""",
    )

    # ========== EK ==========
    H(doc, "Ek A — Günlük / haftalık / aylık checklist", 1)
    CODE(
        doc,
        """Günlük
  - Kritik servis: Get-MessageTrace ile failed bakış (isteğe bağlı)
  - Yardım masası: parola/TAP/MFA
Haftalık
  - Lisanssız aktif Member raporu
  - Silinen kullanıcılar (recycle) gözden geçirme
  - Yeni admin rol atamaları
Aylık
  - SKU kota (Available)
  - Get-MgReportOffice365ActiveUserDetail
  - Dış paylaşım / Guest envanteri
  - Transport rule listesi ve sahipleri
  - Privileged rol gözden geçirme""",
    )

    H(doc, "Ek B — Hızlı cmdlet sözlüğü", 1)
    table = doc.add_table(rows=1, cols=3)
    table.style = "Table Grid"
    hdr = table.rows[0].cells
    for i, x in enumerate(("Alan", "Cmdlet", "Ne zaman")):
        hdr[i].text = x
        for p in hdr[i].paragraphs:
            for r in p.runs:
                r.bold = True
                r.font.size = Pt(8)
    for a, c, n in [
        ("Graph", "Connect-MgGraph", "Her kimlik/lisans oturumu"),
        ("Graph", "Get/New/Update/Remove-MgUser", "Kullanıcı yaşam döngüsü"),
        ("Graph", "Revoke-MgUserSignInSession", "İşten ayrılma / şüphe"),
        ("Graph", "Set-MgUserLicense", "Lisans ata/al"),
        ("Graph", "Get-MgSubscribedSku", "Kota / SKU"),
        ("Graph", "New-MgGroup / New-MgGroupMember", "Grup modeli"),
        ("Graph", "New-MgInvitation", "B2B misafir"),
        ("Graph", "Get-MgReport*", "Aylık kullanım CSV"),
        ("EXO", "Connect-ExchangeOnline", "Posta yönetimi"),
        ("EXO", "Get-EXOMailbox / Set-Mailbox", "PK ayar"),
        ("EXO", "New-Mailbox -Shared", "Ortak kutu"),
        ("EXO", "Add-MailboxPermission", "Full Access"),
        ("EXO", "New-TransportRule", "Mail politikası"),
        ("EXO", "Get-MessageTrace", "Mail soruşturma"),
        ("EXO", "Enable-Mailbox -Archive", "Arşiv"),
        ("EXO", "Search-UnifiedAuditLog", "Denetim"),
        ("Teams", "New-Team / Add-TeamUser", "Ekip yönetimi"),
        ("SPO", "Connect-PnPOnline", "Site/OneDrive"),
        ("SPO", "Get-PnPTenantSite / Set-PnPTenantSite", "Envanter / owner / kota"),
    ]:
        cells = table.add_row().cells
        cells[0].text, cells[1].text, cells[2].text = a, c, n
        for c_ in cells:
            for p in c_.paragraphs:
                for r in p.runs:
                    r.font.size = Pt(7.5)

    doc.add_paragraph()
    H(doc, "Ek C — Öğrenme sırası (öneri)", 1)
    P(
        doc,
        "1) Bağlanmayı ve Get-MgUser/Get-EXOMailbox okumayı ustalaştırın. "
        "2) Test kullanıcıda New/Update/License/Group uygulayın. "
        "3) Shared mailbox + permission. "
        "4) Bir transport kuralını lab’da deneyin. "
        "5) Offboarding runbook’unu test kiracıda prova edin. "
        "6) Raporları CSV’ye alıp Excel’de okumayı alışkanlık yapın. "
        "7) App-only (sertifika) otomasyona geçin.",
        size=10,
    )

    P(
        doc,
        "Resmi kaynaklar: learn.microsoft.com (Microsoft Graph PowerShell, Exchange Online PowerShell, "
        "Teams PowerShell, PnP). Bu rehber şirket operasyonu için öğretici derlemedir; üretim öncesi "
        "güncel cmdlet ve izinleri Learn’den doğrulayın.",
        size=9,
        italic=True,
        color=RGBColor(0x66, 0x66, 0x66),
    )

    doc.save(OUTPUT)
    print("Saved", OUTPUT)


if __name__ == "__main__":
    build()
