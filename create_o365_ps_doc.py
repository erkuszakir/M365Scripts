#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Office 365 / Microsoft 365 PowerShell — detaylı yönetim komut referansı."""

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUTPUT = "/workspace/Office365_PowerShell_Yonetim_Komutlari.docx"


def set_run_font(run, name="Calibri", size=11, bold=False, color=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    if color:
        run.font.color.rgb = color


def add_heading_styled(doc, text, level=1):
    h = doc.add_heading(text, level=level)
    for run in h.runs:
        if level == 1:
            run.font.color.rgb = RGBColor(0x0B, 0x5C, 0x8C)
        elif level == 2:
            run.font.color.rgb = RGBColor(0x16, 0x74, 0xA8)
        elif level == 3:
            run.font.color.rgb = RGBColor(0x2E, 0x86, 0xAB)
    return h


def add_para(doc, text, bold=False, italic=False, size=11):
    p = doc.add_paragraph()
    run = p.add_run(text)
    set_run_font(run, size=size, bold=bold)
    run.italic = italic
    p.paragraph_format.space_after = Pt(6)
    return p


def shade_paragraph(paragraph, fill="EEF2F7"):
    pPr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")
    pPr.append(shd)


def add_code(doc, code):
    for line in code.strip("\n").split("\n"):
        p = doc.add_paragraph()
        run = p.add_run(line if line else " ")
        set_run_font(run, name="Consolas", size=8.5)
        run.font.color.rgb = RGBColor(0x1A, 0x1A, 0x2E)
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.left_indent = Cm(0.25)
        shade_paragraph(p)
    spacer = doc.add_paragraph()
    spacer.paragraph_format.space_before = Pt(2)
    spacer.paragraph_format.space_after = Pt(6)


def add_note(doc, text):
    p = doc.add_paragraph()
    run = p.add_run("Not: ")
    set_run_font(run, size=9.5, bold=True, color=RGBColor(0xB8, 0x5C, 0x00))
    run2 = p.add_run(text)
    set_run_font(run2, size=9.5, color=RGBColor(0x5C, 0x4A, 0x32))
    p.paragraph_format.space_after = Pt(8)


def add_warn(doc, text):
    p = doc.add_paragraph()
    run = p.add_run("Uyarı: ")
    set_run_font(run, size=9.5, bold=True, color=RGBColor(0x8B, 0x00, 0x00))
    run2 = p.add_run(text)
    set_run_font(run2, size=9.5, color=RGBColor(0x6B, 0x20, 0x20))
    p.paragraph_format.space_after = Pt(8)


def add_cmd(doc, title, description, code, level=2):
    add_heading_styled(doc, title, level=level)
    if description:
        add_para(doc, description, size=10)
    add_code(doc, code)


def add_toc_item(doc, text):
    p = doc.add_paragraph()
    run = p.add_run(text)
    set_run_font(run, size=10)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.left_indent = Cm(0.4)


def build():
    doc = Document()
    for section in doc.sections:
        section.top_margin = Cm(1.8)
        section.bottom_margin = Cm(1.8)
        section.left_margin = Cm(2.0)
        section.right_margin = Cm(2.0)

    # ---- Kapak ----
    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = title.add_run("Microsoft 365 / Office 365")
    set_run_font(r, size=26, bold=True, color=RGBColor(0x0B, 0x5C, 0x8C))

    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = subtitle.add_run("PowerShell Yönetim Komutları — Detaylı Referans")
    set_run_font(r, size=15, bold=True, color=RGBColor(0x16, 0x74, 0xA8))

    meta = doc.add_paragraph()
    meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = meta.add_run(
        "Microsoft Graph • Entra ID • Exchange Online • SharePoint / OneDrive\n"
        "Microsoft Teams • Lisans • Güvenlik • Raporlama • Toplu İşlemler"
    )
    set_run_font(r, size=10, color=RGBColor(0x55, 0x55, 0x55))

    warn = doc.add_paragraph()
    warn.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = warn.add_run(
        "Üretim öncesi test kiracısında deneyin. MSOnline / AzureAD yerine Microsoft Graph kullanın. "
        "Örnek domain: contoso.com — kendi kiracınızla değiştirin."
    )
    set_run_font(r, size=9, color=RGBColor(0x8B, 0x00, 0x00))

    add_heading_styled(doc, "İçindekiler", level=1)
    for item in [
        "1. Ortam ve modül kurulumu",
        "2. Bağlantı yöntemleri (etkileşimli, app-only, sertifika)",
        "3. Kullanıcı yaşam döngüsü (oluşturma → güncelleme → silme → geri yükleme)",
        "4. Kimlik doğrulama yöntemleri ve MFA",
        "5. Lisans ve servis planı yönetimi",
        "6. Gruplar (güvenlik, M365, dinamik, dağıtım)",
        "7. Exchange Online — posta kutusu, izin, kural, izleme",
        "8. SharePoint Online ve OneDrive",
        "9. Microsoft Teams",
        "10. Entra ID rolleri ve yönetim birimleri",
        "11. Güvenlik, denetim ve uyumluluk",
        "12. Raporlama ve dışa aktarma",
        "13. Toplu / CSV otomasyon senaryoları",
        "14. Sorun giderme ve sık hatalar",
        "15. Hızlı cmdlet sözlüğü",
    ]:
        add_toc_item(doc, item)

    # =====================================================================
    # 1. KURULUM
    # =====================================================================
    add_heading_styled(doc, "1. Ortam ve Modül Kurulumu", level=1)

    add_cmd(
        doc,
        "1.1 PowerShell sürümü ve Execution Policy",
        "Windows PowerShell 5.1 veya PowerShell 7+ önerilir. Graph için PS7 tercih edilir.",
        """$PSVersionTable
Get-ExecutionPolicy -List
# Geçici (oturum)
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
# Kullanıcı kapsamı
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force""",
    )

    add_cmd(
        doc,
        "1.2 Modül kurulumu (tam set)",
        None,
        """Set-PSRepository -Name PSGallery -InstallationPolicy Trusted

# Temel yönetim seti
Install-Module Microsoft.Graph -Scope CurrentUser -Force -AllowClobber
Install-Module Microsoft.Graph.Beta -Scope CurrentUser -Force -AllowClobber  # beta cmdlet'ler
Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force
Install-Module MicrosoftTeams -Scope CurrentUser -Force
Install-Module PnP.PowerShell -Scope CurrentUser -Force

# İsteğe bağlı
Install-Module Microsoft.Online.SharePoint.PowerShell -Scope CurrentUser -Force  # klasik SPO
# Install-Module MSOnline   # ESKİ — kullanmayın
# Install-Module AzureAD    # ESKİ — kullanmayın

# Kurulu sürümler
Get-Module Microsoft.Graph*, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell -ListAvailable |
  Select-Object Name, Version | Sort-Object Name, Version -Descending |
  Format-Table -AutoSize

# Güncelleme
Update-Module Microsoft.Graph, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell -Force""",
    )

    add_cmd(
        doc,
        "1.3 Graph alt modüllerini seçici yükleme (daha hafif)",
        "Tüm Graph yerine sadece ihtiyaç duyulan alt paketler:",
        """Install-Module Microsoft.Graph.Authentication -Scope CurrentUser
Install-Module Microsoft.Graph.Users -Scope CurrentUser
Install-Module Microsoft.Graph.Users.Actions -Scope CurrentUser
Install-Module Microsoft.Graph.Groups -Scope CurrentUser
Install-Module Microsoft.Graph.Identity.DirectoryManagement -Scope CurrentUser
Install-Module Microsoft.Graph.Identity.SignIns -Scope CurrentUser
Install-Module Microsoft.Graph.Reports -Scope CurrentUser""",
    )

    # =====================================================================
    # 2. BAĞLANTI
    # =====================================================================
    add_heading_styled(doc, "2. Bağlantı Yöntemleri", level=1)

    add_cmd(
        doc,
        "2.1 Microsoft Graph — etkileşimli (delegated)",
        "Günlük admin işleri için. Tarayıcıda MFA ile oturum açılır.",
        """$scopes = @(
  "User.Read.All","User.ReadWrite.All","User.Invite.All",
  "Group.ReadWrite.All","GroupMember.ReadWrite.All",
  "Directory.Read.All","Directory.ReadWrite.All",
  "Organization.Read.All","RoleManagement.ReadWrite.Directory",
  "AuditLog.Read.All","Reports.Read.All",
  "Policy.Read.All","Application.Read.All"
)
Connect-MgGraph -Scopes $scopes -NoWelcome
Get-MgContext | Format-List
Get-MgOrganization | Select-Object DisplayName, Id, VerifiedDomains
# Oturumu kapat
Disconnect-MgGraph""",
    )

    add_cmd(
        doc,
        "2.2 Graph — uygulama (client secret) ile app-only",
        "Otomasyon / runbook için. Entra’da App Registration + Application permission + Admin consent gerekir.",
        """$tenantId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$clientId = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
$secret   = "YOUR_CLIENT_SECRET"   # Secret'ı koda gömmeyin; Key Vault kullanın

$secure = ConvertTo-SecureString $secret -AsPlainText -Force
$cred   = New-Object System.Management.Automation.PSCredential($clientId, $secure)
Connect-MgGraph -TenantId $tenantId -ClientSecretCredential $cred -NoWelcome""",
    )

    add_cmd(
        doc,
        "2.3 Graph — sertifika ile app-only (önerilen otomasyon)",
        None,
        """$tenantId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$clientId = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
$thumb    = "ABCDEF1234567890ABCDEF1234567890ABCDEF12"

Connect-MgGraph -TenantId $tenantId -ClientId $clientId `
  -CertificateThumbprint $thumb -NoWelcome""",
    )

    add_cmd(
        doc,
        "2.4 Exchange Online bağlantı çeşitleri",
        None,
        """# Etkileşimli
Connect-ExchangeOnline -ShowBanner:$false

# Belirli UPN
Connect-ExchangeOnline -UserPrincipalName "admin@contoso.com" -ShowBanner:$false

# Sertifika (unattended)
Connect-ExchangeOnline -AppId $clientId -CertificateThumbprint $thumb `
  -Organization "contoso.onmicrosoft.com" -ShowBanner:$false

# Bağlantı durumu / kapat
Get-ConnectionInformation | Format-List
Disconnect-ExchangeOnline -Confirm:$false""",
    )

    add_cmd(
        doc,
        "2.5 Teams ve SharePoint bağlantısı",
        None,
        """# Teams
Connect-MicrosoftTeams
# App-only Teams (sertifika)
# Connect-MicrosoftTeams -TenantId $tenantId -CertificateThumbprint $thumb -ApplicationId $clientId
Get-CsTenant | Select-Object DisplayName, TenantId
Disconnect-MicrosoftTeams

# PnP SharePoint — admin merkezi
Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive
# veya ClientId + sertifika
# Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -ClientId $clientId `
#   -Thumbprint $thumb -Tenant "contoso.onmicrosoft.com"
Disconnect-PnPOnline

# Klasik SPO modülü
# Connect-SPOService -Url "https://contoso-admin.sharepoint.com"
# Disconnect-SPOService""",
    )

    add_note(
        doc,
        "Aynı oturumda Graph + Exchange + Teams açabilirsiniz. Bitince her servisi Disconnect ile kapatın. "
        "App-only izinlerde bazı cmdlet’ler (özellikle kullanıcı etkileşimli olanlar) çalışmaz.",
    )

    # =====================================================================
    # 3. KULLANICI
    # =====================================================================
    add_heading_styled(doc, "3. Kullanıcı Yaşam Döngüsü", level=1)

    add_cmd(
        doc,
        "3.1 Kullanıcı listeleme — filtre, arama, sayfalama",
        None,
        """# Tüm kullanıcılar (özellik seçerek — daha hızlı)
Get-MgUser -All -Property "id,displayName,userPrincipalName,accountEnabled,mail,department,jobTitle,createdDateTime" |
  Select-Object DisplayName, UserPrincipalName, AccountEnabled, Department, JobTitle, CreatedDateTime

# UPN ile tek kullanıcı
Get-MgUser -UserId "ayse.yilmaz@contoso.com" | Format-List *

# DisplayName içeren arama (ConsistencyLevel: eventual gerekir)
Get-MgUser -ConsistencyLevel eventual -CountVariable c -Search '"displayName:Yılmaz"' -All |
  Select-Object DisplayName, UserPrincipalName

# OData filtre
Get-MgUser -All -Filter "startswith(userPrincipalName,'ayse')" `
  -Property "displayName,userPrincipalName,accountEnabled"

Get-MgUser -All -Filter "accountEnabled eq true and department eq 'Operasyon'" `
  -Property "displayName,userPrincipalName,department,jobTitle"

# Misafir (Guest) kullanıcılar
Get-MgUser -All -Filter "userType eq 'Guest'" |
  Select-Object DisplayName, Mail, UserPrincipalName, ExternalUserState, CreatedDateTime

# Son 7 günde oluşturulanlar
$since = (Get-Date).AddDays(-7).ToString("yyyy-MM-ddTHH:mm:ssZ")
Get-MgUser -All -Filter "createdDateTime ge $since" `
  -Property "displayName,userPrincipalName,createdDateTime" |
  Sort-Object CreatedDateTime -Descending""",
    )

    add_cmd(
        doc,
        "3.2 Yeni bulut kullanıcısı — tam özellikli",
        None,
        """$PasswordProfile = @{
  Password                      = "GeciciSifre!ChangeMe1"
  ForceChangePasswordNextSignIn = $true
  # ForceChangePasswordNextSignInWithMfa = $true   # MFA zorunlu ilk giriş
}

$params = @{
  DisplayName       = "Ayşe Yılmaz"
  UserPrincipalName = "ayse.yilmaz@contoso.com"
  MailNickname      = "ayseyilmaz"
  AccountEnabled    = $true
  PasswordProfile   = $PasswordProfile
  UsageLocation     = "TR"          # Lisans için zorunlu
  GivenName         = "Ayşe"
  Surname           = "Yılmaz"
  JobTitle          = "Operasyon Uzmanı"
  Department        = "Operasyon"
  OfficeLocation    = "İstanbul"
  CompanyName       = "Contoso A.Ş."
  MobilePhone       = "+905551112233"
  BusinessPhones    = @("+902121112233")
  PreferredLanguage = "tr-TR"
  OtherMails        = @("ayse.yilmaz.kisisel@ornek.com")
}

$user = New-MgUser @params
$user | Select-Object Id, UserPrincipalName, DisplayName""",
    )

    add_cmd(
        doc,
        "3.3 Kullanıcı güncelleme (tekil ve toplu alan)",
        None,
        """# Tek alan
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -JobTitle "Operasyon Kıdemli Uzmanı"

# Birden fazla alan
Update-MgUser -UserId "ayse.yilmaz@contoso.com" `
  -Department "Operasyon" `
  -OfficeLocation "Ankara" `
  -JobTitle "Operasyon Müdürü" `
  -MobilePhone "+905559998877"

# Hesabı kilitle / aç
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$false
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$true

# UPN değiştirme (domain değişimi dikkat)
Update-MgUser -UserId "ayse.yilmaz@contoso.com" `
  -UserPrincipalName "ayse.yilmaz@contoso.com.tr"

# Proxy / ek e-posta (Exchange tarafında da yapılabilir)
# Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -EmailAddresses @{add="ayse@contoso.com"}""",
    )

    add_cmd(
        doc,
        "3.4 Parola sıfırlama ve oturum iptali",
        None,
        """# Parola sıfırla
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -PasswordProfile @{
  Password                      = "YeniGecici!789"
  ForceChangePasswordNextSignIn = $true
}

# Tüm refresh token / oturumları iptal et (çalınma / işten ayrılma)
Revoke-MgUserSignInSession -UserId "ayse.yilmaz@contoso.com"

# Kullanıcının authentication method özeti (Graph)
Get-MgUserAuthenticationMethod -UserId "ayse.yilmaz@contoso.com" |
  Select-Object Id, AdditionalProperties""",
    )

    add_cmd(
        doc,
        "3.5 Kullanıcı silme, soft-delete ve geri yükleme",
        "Silinen nesneler varsayılan ~30 gün geri dönüşümde kalır.",
        """# Soft-delete
Remove-MgUser -UserId "ayse.yilmaz@contoso.com" -Confirm:$false

# Silinen kullanıcıları listele
Get-MgDirectoryDeletedItemAsUser -All |
  Select-Object Id, DisplayName, UserPrincipalName, DeletedDateTime

# Geri yükle
$deleted = Get-MgDirectoryDeletedItemAsUser -All |
  Where-Object { $_.UserPrincipalName -eq "ayse.yilmaz@contoso.com" }
Restore-MgDirectoryDeletedItem -DirectoryObjectId $deleted.Id

# Kalıcı sil (dikkat!)
# Remove-MgDirectoryDeletedItem -DirectoryObjectId $deleted.Id""",
    )
    add_warn(doc, "Kalıcı silme geri alınamaz. Lisans ve Exchange verisi etkilenir.")

    add_cmd(
        doc,
        "3.6 Misafir (B2B) kullanıcı daveti",
        None,
        """$invitation = @{
  InvitedUserEmailAddress = "disari.kisi@partner.com"
  InvitedUserDisplayName  = "Dışarı Kişi"
  InviteRedirectUrl       = "https://myapps.microsoft.com"
  SendInvitationMessage   = $true
  InvitedUserMessageInfo  = @{
    CustomizedMessageBody = "Contoso kiracısına davet edildiniz."
  }
}
New-MgInvitation @invitation |
  Select-Object InviteRedeemUrl, Status, InvitedUserDisplayName

# Misafiri gruba ekle
$guest = Get-MgUser -Filter "mail eq 'disari.kisi@partner.com'"
New-MgGroupMember -GroupId "<GroupId>" -DirectoryObjectId $guest.Id""",
    )

    add_cmd(
        doc,
        "3.7 Yönetici / yönetici olmayan fotoğraf ve yönetici ilişkisi",
        None,
        """# Yönetici (manager) ata
$mgr = Get-MgUser -UserId "mudur@contoso.com"
Set-MgUserManagerByRef -UserId "ayse.yilmaz@contoso.com" `
  -OdataId "https://graph.microsoft.com/v1.0/users/$($mgr.Id)"

Get-MgUserManager -UserId "ayse.yilmaz@contoso.com" |
  Select-Object Id, AdditionalProperties

# Direkt raporlar
Get-MgUserDirectReport -UserId "mudur@contoso.com" -All

# Profil fotoğrafı yükle
Set-MgUserPhotoContent -UserId "ayse.yilmaz@contoso.com" `
  -InFile "C:\\Temp\\ayse.jpg" """,
    )

    # =====================================================================
    # 4. MFA / AUTH
    # =====================================================================
    add_heading_styled(doc, "4. Kimlik Doğrulama Yöntemleri ve MFA", level=1)

    add_cmd(
        doc,
        "4.1 Kayıtlı yöntemleri görme ve telefon/e-posta silme",
        None,
        """$uid = "ayse.yilmaz@contoso.com"
Get-MgUserAuthenticationMethod -UserId $uid

# Telefon yöntemleri
Get-MgUserAuthenticationPhoneMethod -UserId $uid
# Remove-MgUserAuthenticationPhoneMethod -UserId $uid -PhoneAuthenticationMethodId "<Id>"

# E-posta yöntemleri
Get-MgUserAuthenticationEmailMethod -UserId $uid

# Microsoft Authenticator
Get-MgUserAuthenticationMicrosoftAuthenticatorMethod -UserId $uid
# Remove-MgUserAuthenticationMicrosoftAuthenticatorMethod -UserId $uid -MicrosoftAuthenticatorAuthenticationMethodId "<Id>"

# Geçici Access Pass (TAP) oluştur — yardım masası senaryosu
$tap = @{
  LifetimeInMinutes     = 60
  IsUsableOnce          = $true
  StartDateTime         = (Get-Date).ToUniversalTime().ToString("o")
}
New-MgUserAuthenticationTemporaryAccessPassMethod -UserId $uid -BodyParameter $tap""",
    )

    add_cmd(
        doc,
        "4.2 MFA kayıt raporu",
        None,
        """# Kullanıcı kayıt durumu raporu
Get-MgReportAuthenticationMethodUserRegistrationDetail -All |
  Select-Object UserPrincipalName, IsMfaRegistered, IsMfaCapable,
                MethodsRegistered, DefaultMfaMethod |
  Export-Csv "C:\\Temp\\mfa_kayit.csv" -NoTypeInformation -Encoding UTF8""",
    )

    # =====================================================================
    # 5. LİSANS
    # =====================================================================
    add_heading_styled(doc, "5. Lisans ve Servis Planı Yönetimi", level=1)

    add_cmd(
        doc,
        "5.1 SKU envanteri ve boş kota",
        None,
        """Get-MgSubscribedSku | ForEach-Object {
  [PSCustomObject]@{
    SkuPartNumber = $_.SkuPartNumber
    SkuId         = $_.SkuId
    Enabled       = $_.PrepaidUnits.Enabled
    Suspended     = $_.PrepaidUnits.Suspended
    Warning       = $_.PrepaidUnits.Warning
    Consumed      = $_.ConsumedUnits
    Available     = ($_.PrepaidUnits.Enabled - $_.ConsumedUnits)
  }
} | Sort-Object SkuPartNumber | Format-Table -AutoSize

# Belirli SKU servis planları
$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
$sku.ServicePlans | Select-Object ServicePlanName, ServicePlanId, ProvisioningStatus |
  Sort-Object ServicePlanName""",
    )

    add_cmd(
        doc,
        "5.2 Lisans atama, kaldırma, taşıma",
        None,
        """$user = "ayse.yilmaz@contoso.com"
Update-MgUser -UserId $user -UsageLocation "TR"

$e3 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3").SkuId
$e5 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E5").SkuId

# E3 ata
Set-MgUserLicense -UserId $user `
  -AddLicenses @{ SkuId = $e3 } `
  -RemoveLicenses @()

# E3 kaldır, E5 ekle (upgrade)
Set-MgUserLicense -UserId $user `
  -AddLicenses @{ SkuId = $e5 } `
  -RemoveLicenses @($e3)

# Tüm lisansları kaldır
$current = (Get-MgUserLicenseDetail -UserId $user).SkuId
if ($current) {
  Set-MgUserLicense -UserId $user -AddLicenses @() -RemoveLicenses $current
}

Get-MgUserLicenseDetail -UserId $user |
  Select-Object SkuPartNumber, SkuId, ServicePlans""",
    )

    add_cmd(
        doc,
        "5.3 Belirli servis planını kapatarak atama",
        "Örnek: Yammer veya Bookings kapalı E3.",
        """$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
# Kapatılacak plan adlarını kendi tenant çıktınızdan doğrulayın
$disableNames = @("YAMMER_ENTERPRISE", "MICROSOFTBOOKINGS")
$disabledIds = $sku.ServicePlans |
  Where-Object { $_.ServicePlanName -in $disableNames } |
  Select-Object -ExpandProperty ServicePlanId

Set-MgUserLicense -UserId $user -AddLicenses @{
  SkuId         = $sku.SkuId
  DisabledPlans = $disabledIds
} -RemoveLicenses @()""",
    )

    add_cmd(
        doc,
        "5.4 Grup tabanlı lisanslama (Group-based licensing) kontrol",
        "Atama genelde portal/Graph üzerinden gruba yapılır; kullanıcıda Inherited işaretli görünür.",
        """# Kullanıcıdaki lisansların kaynağını görmek için portal veya:
Get-MgUser -UserId $user -Property "assignedLicenses,licenseAssignmentStates" |
  Select-Object -ExpandProperty LicenseAssignmentStates |
  Format-List

# Lisansı olan / olmayan aktif kullanıcı özeti
Get-MgUser -All -Property "displayName,userPrincipalName,accountEnabled,assignedLicenses" |
  Where-Object AccountEnabled |
  Group-Object { if ($_.AssignedLicenses.Count -gt 0) { "Licensed" } else { "Unlicensed" } } |
  Select-Object Name, Count""",
    )

    # =====================================================================
    # 6. GRUPLAR
    # =====================================================================
    add_heading_styled(doc, "6. Grup Yönetimi", level=1)

    add_cmd(
        doc,
        "6.1 Grup listeleme ve tür ayırma",
        None,
        """Get-MgGroup -All -Property "id,displayName,mail,groupTypes,mailEnabled,securityEnabled,membershipRule" |
  Select-Object DisplayName, Mail,
    @{N="Type";E={
      if ($_.GroupTypes -contains "Unified") { "M365" }
      elseif ($_.GroupTypes -contains "DynamicMembership") { "Dynamic" }
      elseif ($_.SecurityEnabled -and -not $_.MailEnabled) { "Security" }
      elseif ($_.MailEnabled -and -not $_.SecurityEnabled) { "Distribution*" }
      else { "Other" }
    }},
    MembershipRule

# Ada göre ara
Get-MgGroup -ConsistencyLevel eventual -Search '"displayName:Operasyon"' -All""",
    )

    add_cmd(
        doc,
        "6.2 Güvenlik ve Microsoft 365 grubu oluşturma",
        None,
        """# Güvenlik grubu
$sg = New-MgGroup -DisplayName "SG-Operasyon" `
  -MailEnabled:$false -MailNickname "sg-operasyon" -SecurityEnabled `
  -Description "Operasyon güvenlik grubu"

# M365 grubu (Unified)
$m365 = New-MgGroup -DisplayName "Operasyon Ekibi" `
  -Description "Operasyon Microsoft 365 grubu" `
  -MailEnabled -MailNickname "operasyon-ekibi" -SecurityEnabled `
  -GroupTypes @("Unified") `
  -Visibility "Private"

# Dinamik güvenlik grubu (departman = Operasyon)
$rule = '(user.department -eq "Operasyon")'
New-MgGroup -DisplayName "DG-Operasyon-Dyn" `
  -MailEnabled:$false -MailNickname "dg-operasyon-dyn" -SecurityEnabled `
  -GroupTypes @("DynamicMembership") `
  -MembershipRule $rule `
  -MembershipRuleProcessingState "On" """,
    )

    add_cmd(
        doc,
        "6.3 Üye / sahip ekleme, çıkarma, dışa aktarma",
        None,
        """$gid = (Get-MgGroup -Filter "displayName eq 'SG-Operasyon'").Id
$uid = (Get-MgUser -UserId "ayse.yilmaz@contoso.com").Id

# Üye
New-MgGroupMember -GroupId $gid -DirectoryObjectId $uid
Remove-MgGroupMemberByRef -GroupId $gid -DirectoryObjectId $uid

# Sahip
New-MgGroupOwner -GroupId $gid -DirectoryObjectId $uid
Get-MgGroupOwner -GroupId $gid -All
Remove-MgGroupOwnerByRef -GroupId $gid -DirectoryObjectId $uid

# Tüm üyeleri CSV
Get-MgGroupMember -GroupId $gid -All | ForEach-Object {
  try {
    $u = Get-MgUser -UserId $_.Id -Property "displayName,userPrincipalName,mail,department"
    [PSCustomObject]@{
      DisplayName = $u.DisplayName
      UPN         = $u.UserPrincipalName
      Mail        = $u.Mail
      Department  = $u.Department
    }
  } catch {}
} | Export-Csv "C:\\Temp\\sg-operasyon-uyeler.csv" -NoTypeInformation -Encoding UTF8

# Kullanıcının tüm grup üyelikleri
Get-MgUserMemberOf -UserId "ayse.yilmaz@contoso.com" -All |
  Where-Object { $_.AdditionalProperties["@odata.type"] -eq "#microsoft.graph.group" } |
  ForEach-Object { Get-MgGroup -GroupId $_.Id } |
  Select-Object DisplayName, Mail, Id""",
    )

    add_cmd(
        doc,
        "6.4 Exchange dağıtım ve dinamik dağıtım grupları",
        "Klasik mail-enabled DG’ler için Exchange Online PowerShell kullanın.",
        """Connect-ExchangeOnline -ShowBanner:$false

New-DistributionGroup -Name "Satis-DG" -DisplayName "Satış Dağıtım" `
  -PrimarySmtpAddress "satis@contoso.com" -Type Distribution `
  -ManagedBy "admin@contoso.com" -Members "ayse.yilmaz@contoso.com"

Set-DistributionGroup -Identity "Satis-DG" -RequireSenderAuthenticationEnabled $false  # dışarıdan mail
Add-DistributionGroupMember -Identity "Satis-DG" -Member "ali.veli@contoso.com"
Remove-DistributionGroupMember -Identity "Satis-DG" -Member "ali.veli@contoso.com" -Confirm:$false
Get-DistributionGroupMember -Identity "Satis-DG" | Select-Object Name, PrimarySmtpAddress

# Dinamik DG
New-DynamicDistributionGroup -Name "Operasyon-DynDG" `
  -DisplayName "Operasyon Dinamik" `
  -PrimarySmtpAddress "operasyon-dyn@contoso.com" `
  -RecipientFilter "((RecipientTypeDetails -eq 'UserMailbox') -and (Department -eq 'Operasyon'))"

# Üye önizleme
$ddg = Get-DynamicDistributionGroup "Operasyon-DynDG"
Get-Recipient -RecipientPreviewFilter $ddg.RecipientFilter | Select-Object Name, PrimarySmtpAddress""",
    )

    # =====================================================================
    # 7. EXCHANGE
    # =====================================================================
    add_heading_styled(doc, "7. Exchange Online", level=1)

    add_cmd(
        doc,
        "7.1 Posta kutusu envanteri",
        None,
        """Connect-ExchangeOnline -ShowBanner:$false

Get-EXOMailbox -ResultSize Unlimited -Properties DisplayName,PrimarySmtpAddress,RecipientTypeDetails,WhenCreatedUTC |
  Group-Object RecipientTypeDetails | Select-Object Name, Count

Get-EXOMailbox -Identity "ayse.yilmaz@contoso.com" -Properties * |
  Select-Object DisplayName, PrimarySmtpAddress, RecipientTypeDetails,
                ArchiveStatus, LitigationHoldEnabled, RetainDeletedItemsFor

# İstatistik
Get-EXOMailboxStatistics -Identity "ayse.yilmaz@contoso.com" |
  Select-Object DisplayName, ItemCount, TotalItemSize, LastLogonTime

# Kota ayarı
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -IssueWarningQuota 45GB -ProhibitSendQuota 49GB -ProhibitSendReceiveQuota 50GB `
  -UseDatabaseQuotaDefaults $false""",
    )

    add_cmd(
        doc,
        "7.2 Paylaşılan posta kutusu — oluşturma, izin, dönüştürme",
        None,
        """New-Mailbox -Shared -Name "Destek" -DisplayName "Destek Ortak PK" `
  -PrimarySmtpAddress "destek@contoso.com"

# Full Access (+ AutoMapping kapalı örnek)
Add-MailboxPermission -Identity "destek@contoso.com" `
  -User "ayse.yilmaz@contoso.com" -AccessRights FullAccess `
  -InheritanceType All -AutoMapping:$false

# Send As
Add-RecipientPermission -Identity "destek@contoso.com" `
  -Trustee "ayse.yilmaz@contoso.com" -AccessRights SendAs -Confirm:$false

# Send on Behalf
Set-Mailbox -Identity "destek@contoso.com" `
  -GrantSendOnBehalfTo @{Add="ayse.yilmaz@contoso.com"}

# İzinleri listele
Get-MailboxPermission -Identity "destek@contoso.com" |
  Where-Object { -not $_.IsInherited -and $_.User -notlike "NT AUTHORITY*" -and $_.User -notlike "S-1-*" } |
  Format-Table User, AccessRights, IsInherited

Get-RecipientPermission -Identity "destek@contoso.com" |
  Where-Object Trustee -notlike "NT AUTHORITY*"

# Kullanıcı PK → Shared dönüştür (işten ayrılma)
# Set-Mailbox -Identity "eski.calisan@contoso.com" -Type Shared
# Set-MgUserLicense ... lisansları kaldır""",
    )

    add_cmd(
        doc,
        "7.3 Oda / ekipman posta kutusu",
        None,
        """New-Mailbox -Room -Name "Toplanti-A101" -DisplayName "Toplantı Odası A101" `
  -PrimarySmtpAddress "a101@contoso.com"

Set-CalendarProcessing -Identity "a101@contoso.com" `
  -AutomateProcessing AutoAccept `
  -AddOrganizerToSubject $false `
  -DeleteComments $false `
  -DeleteSubject $false `
  -RemovePrivateProperty $false `
  -MaximumDurationInMinutes 480 `
  -BookingWindowInDays 180

New-Mailbox -Equipment -Name "Projektor-1" -PrimarySmtpAddress "projektor1@contoso.com" """,
    )

    add_cmd(
        doc,
        "7.4 Yönlendirme, otomatik yanıt, takma ad (alias)",
        None,
        """# SMTP yönlendirme
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress "arsiv@contoso.com" `
  -DeliverToMailboxAndForward $true

# Yönlendirmeyi kaldır
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress $null -ForwardingAddress $null `
  -DeliverToMailboxAndForward $false

# OOF
Set-MailboxAutoReplyConfiguration -Identity "ayse.yilmaz@contoso.com" `
  -AutoReplyState Scheduled `
  -StartTime "2026-10-27 09:00:00" `
  -EndTime   "2026-11-03 18:00:00" `
  -InternalMessage "İzinliyim; acil için mudur@contoso.com." `
  -ExternalMessage "I am out of office until Nov 3." `
  -ExternalAudience All

Get-MailboxAutoReplyConfiguration -Identity "ayse.yilmaz@contoso.com"

# Alias ekle / kaldır
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -EmailAddresses @{
    Add="smtp:ayse@contoso.com.tr"
    # Remove="smtp:eski@contoso.com"
  }
Get-Mailbox -Identity "ayse.yilmaz@contoso.com" | Select-Object -ExpandProperty EmailAddresses""",
    )

    add_cmd(
        doc,
        "7.5 Arşiv, litigation hold, retention",
        None,
        """# In-Place Archive aç
Enable-Mailbox -Identity "ayse.yilmaz@contoso.com" -Archive
Get-EXOMailbox -Identity "ayse.yilmaz@contoso.com" -Properties ArchiveStatus,ArchiveGuid

# Litigation Hold
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -LitigationHoldEnabled $true `
  -LitigationHoldDuration 2555   # gün (~7 yıl); sınırsız için Unlimited
# Set-Mailbox ... -LitigationHoldEnabled $false

# Soft-deleted item tutma
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -RetainDeletedItemsFor 30

# Tek öğe kurtarma
Get-Mailbox -Identity "ayse.yilmaz@contoso.com" | Select-Object SingleItemRecoveryEnabled
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -SingleItemRecoveryEnabled $true""",
    )

    add_cmd(
        doc,
        "7.6 Transport / mail flow kuralları",
        None,
        """# Dışarıdan gelenlere uyarı bandı
New-TransportRule -Name "Dis-Kaynak-Uyari" `
  -FromScope NotInOrganization `
  -ApplyHtmlDisclaimerLocation Prepend `
  -ApplyHtmlDisclaimerText "<div style='background:#fff3cd;padding:8px'><b>DİKKAT:</b> Kurum dışı e-posta.</div>" `
  -ApplyHtmlDisclaimerFallbackAction Wrap

# Belirli domain'e ek BCC (denetim)
New-TransportRule -Name "Finance-BCC-Audit" `
  -SentToScope InOrganization `
  -RecipientAddressContainsWords "muhasebe" `
  -BlindCopyTo "audit-muhasebe@contoso.com"

# Ek boyutu / uzantı engeli örneği
New-TransportRule -Name "Block-Exe-Attachment" `
  -AttachmentExtensionMatchesWords "exe","bat","cmd","js","vbs" `
  -RejectMessageReasonText "Bu ek türüne izin verilmiyor." `
  -RejectMessageEnhancedStatusCode "5.7.1"

Get-TransportRule | Select-Object Name, State, Priority, Mode | Sort-Object Priority
Enable-TransportRule  -Identity "Dis-Kaynak-Uyari"
Disable-TransportRule -Identity "Dis-Kaynak-Uyari"
# Remove-TransportRule -Identity "Dis-Kaynak-Uyari" -Confirm:$false""",
    )

    add_cmd(
        doc,
        "7.7 Message Trace ve kuyruk",
        None,
        """# Son 48 saat — alıcıya göre
Get-MessageTrace -RecipientAddress "ayse.yilmaz@contoso.com" `
  -StartDate (Get-Date).AddHours(-48) -EndDate (Get-Date) |
  Select-Object Received, SenderAddress, Subject, Status, ToIP |
  Sort-Object Received -Descending

# Başarısız iletiler
Get-MessageTrace -StartDate (Get-Date).AddDays(-1) -EndDate (Get-Date) `
  -Status Failed |
  Select-Object Received, SenderAddress, RecipientAddress, Subject, Status

# Detay (MessageTraceId ile)
# Get-MessageTraceDetail -MessageTraceId "<guid>" -RecipientAddress "..." -MessageId "..." -StartDate ... -EndDate ...

# Tarihsel arama (10 güne kadar Get-MessageTrace; daha eski için Historical Search / portal)""",
    )

    add_cmd(
        doc,
        "7.8 Gelen / giden bağlayıcı, accepted domain, mailbox CAS",
        None,
        """Get-AcceptedDomain | Select-Object Name, DomainName, DomainType, Default
Get-InboundConnector  | Select-Object Name, Enabled, SenderDomains, ConnectorType
Get-OutboundConnector | Select-Object Name, Enabled, SmartHosts, UseMXRecord

# Outlook mobil / ActiveSync / OWA ayarları (CASMailbox)
Get-CASMailbox -Identity "ayse.yilmaz@contoso.com" |
  Select-Object OWAEnabled, ActiveSyncEnabled, PopEnabled, ImapEnabled, MAPIEnabled
Set-CASMailbox -Identity "ayse.yilmaz@contoso.com" -PopEnabled $false -ImapEnabled $false""",
    )

    add_cmd(
        doc,
        "7.9 Posta kutusu içeriği arama / eDiscovery (yüksek seviye)",
        "Compliance PowerShell veya Microsoft Purview kullanın; yetki gerekir.",
        """# Exchange Online'da Content Search genelde Security & Compliance PowerShell ile:
# Connect-IPPSSession
# New-ComplianceSearch -Name "Ara-Fatura" -ExchangeLocation "ayse.yilmaz@contoso.com" `
#   -ContentMatchQuery "subject:fatura AND received>=2026-01-01"
# Start-ComplianceSearch -Identity "Ara-Fatura"
# Get-ComplianceSearch -Identity "Ara-Fatura"

# Kullanıcı tarafı: Search-Mailbox eski; yerine Compliance Search tercih edin.""",
    )

    # =====================================================================
    # 8. SHAREPOINT / ONEDRIVE
    # =====================================================================
    add_heading_styled(doc, "8. SharePoint Online ve OneDrive", level=1)

    add_cmd(
        doc,
        "8.1 Kiracı site listesi ve depolama",
        None,
        """Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive

Get-PnPTenantSite -Detailed | Select-Object Url, Title, Template, Owner,
  StorageUsageCurrent, StorageQuota, LastContentModifiedDate |
  Sort-Object StorageUsageCurrent -Descending |
  Export-Csv "C:\\Temp\\spo_siteler.csv" -NoTypeInformation -Encoding UTF8

# Belirli site
Get-PnPTenantSite -Url "https://contoso.sharepoint.com/sites/Operasyon"

# Site kotası (MB)
Set-PnPTenantSite -Url "https://contoso.sharepoint.com/sites/Operasyon" -StorageQuota 102400""",
    )

    add_cmd(
        doc,
        "8.2 Site oluşturma, üye, dış paylaşım",
        None,
        """# İletişim sitesi
New-PnPSite -Type CommunicationSite -Title "Operasyon Portal" `
  -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -Owner "admin@contoso.com" -Lcid 1055

# Takım sitesi (Group bağlı)
New-PnPSite -Type TeamSite -Title "Proje X" -Alias "projex" -Owners "admin@contoso.com"

Connect-PnPOnline -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" -Interactive
Get-PnPWeb
Get-PnPList | Select-Object Title, BaseTemplate, ItemCount, Hidden

# Site üyeliği
Add-PnPGroupMember -LoginName "ayse.yilmaz@contoso.com" -Group "Operasyon Portal Members"
Get-PnPGroupMembers -Identity "Operasyon Portal Members"

# Site düzeyinde paylaşım
Set-PnPSite -Identity "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -SharingCapability ExternalUserSharingOnly

# Kiracı paylaşım (dikkat)
# Set-PnPTenant -SharingCapability ExistingExternalUserSharingOnly""",
    )

    add_cmd(
        doc,
        "8.3 OneDrive — URL, erişim, paylaşılan dosya denetimi",
        None,
        """# Kullanıcı OneDrive URL
Request-PnPPersonalSite -UserEmails "ayse.yilmaz@contoso.com"   # provision tetikle
Get-PnPUserProfileProperty -Account "ayse.yilmaz@contoso.com" |
  Select-Object -ExpandProperty UserProfileProperties |
  Where-Object Key -match "PersonalSpace|OneDrive"

# Admin olarak OneDrive'a erişim (site collection admin ekle)
$odUrl = "https://contoso-my.sharepoint.com/personal/ayse_yilmaz_contoso_com"
Set-PnPTenantSite -Url $odUrl -Owners "admin@contoso.com"

# OneDrive depolama kotası (MB) — klasik SPO:
# Set-SPOSite -Identity $odUrl -StorageQuota 1048576""",
    )

    add_cmd(
        doc,
        "8.4 Liste / kütüphane ve izin kırılması (özet)",
        None,
        """Connect-PnPOnline -Url "https://contoso.sharepoint.com/sites/Operasyon" -Interactive

New-PnPList -Title "Operasyon Kayitlari" -Template GenericList
Add-PnPField -List "Operasyon Kayitlari" -DisplayName "Durum" -InternalName "Durum" `
  -Type Choice -Choices "Acik","Kapali","Beklemede" -AddToDefaultView

# Klasör / öğe izni — mirası kır
$list = Get-PnPList -Identity "Documents"
# Set-PnPList -Identity $list -BreakRoleInheritance -CopyRoleAssignments
# Set-PnPGroupPermissions -Identity "Operasyon Members" -List "Documents" -AddRole "Contribute" """,
    )

    # =====================================================================
    # 9. TEAMS
    # =====================================================================
    add_heading_styled(doc, "9. Microsoft Teams", level=1)

    add_cmd(
        doc,
        "9.1 Ekip CRUD, kanal, üye rolleri",
        None,
        """Connect-MicrosoftTeams

Get-Team | Select-Object DisplayName, GroupId, Visibility, MailNickName, Description

$team = New-Team -DisplayName "Operasyon Teams" -MailNickName "operasyon-teams" `
  -Visibility Private -Description "Operasyon ekibi" -Owner "admin@contoso.com"

Add-TeamUser -GroupId $team.GroupId -User "ayse.yilmaz@contoso.com" -Role Member
Add-TeamUser -GroupId $team.GroupId -User "mudur@contoso.com" -Role Owner
Remove-TeamUser -GroupId $team.GroupId -User "ayse.yilmaz@contoso.com"

Get-TeamUser -GroupId $team.GroupId | Select-Object User, Role

New-TeamChannel -GroupId $team.GroupId -DisplayName "Gunluk" -MembershipType Standard
New-TeamChannel -GroupId $team.GroupId -DisplayName "Yonetim" -MembershipType Private
Get-TeamChannel -GroupId $team.GroupId

Set-Team -GroupId $team.GroupId -AllowGiphy $false -AllowStickersAndMemes $false
Set-TeamArchivedState -GroupId $team.GroupId -Archived $true
# Remove-Team -GroupId $team.GroupId""",
    )

    add_cmd(
        doc,
        "9.2 Teams politika atama (özet)",
        None,
        """Get-CsTeamsMessagingPolicy | Select-Object Identity, Description
Grant-CsTeamsMessagingPolicy -Identity "ayse.yilmaz@contoso.com" -PolicyName "Default"
Get-CsOnlineUser -Identity "ayse.yilmaz@contoso.com" |
  Select-Object UserPrincipalName, TeamsMessagingPolicy, TeamsMeetingPolicy""",
    )

    # =====================================================================
    # 10. ROLLER
    # =====================================================================
    add_heading_styled(doc, "10. Entra ID Rolleri ve Yönetim Birimleri", level=1)

    add_cmd(
        doc,
        "10.1 Dizin rolleri — kimde hangi rol var",
        None,
        """# Aktif (atanmış) roller
Get-MgDirectoryRole -All | ForEach-Object {
  $role = $_
  Get-MgDirectoryRoleMember -DirectoryRoleId $role.Id -All | ForEach-Object {
    $m = $_
    $upn = $null
    try { $upn = (Get-MgUser -UserId $m.Id -ErrorAction Stop).UserPrincipalName } catch {}
    [PSCustomObject]@{ Role = $role.DisplayName; MemberId = $m.Id; UPN = $upn }
  }
} | Sort-Object Role, UPN | Format-Table -AutoSize

# Role template listesi (Global Administrator vb.)
Get-MgDirectoryRoleTemplate -All | Select-Object DisplayName, Id, Description |
  Sort-Object DisplayName""",
    )

    add_cmd(
        doc,
        "10.2 Role atama / kaldırma",
        None,
        """# Önce role’ü kiracıda etkinleştir (activate)
$template = Get-MgDirectoryRoleTemplate -All |
  Where-Object DisplayName -eq "User Administrator"
$role = Get-MgDirectoryRole -All | Where-Object RoleTemplateId -eq $template.Id
if (-not $role) {
  $role = New-MgDirectoryRole -RoleTemplateId $template.Id
}

$user = Get-MgUser -UserId "helpdesk@contoso.com"
New-MgDirectoryRoleMemberByRef -DirectoryRoleId $role.Id `
  -OdataId "https://graph.microsoft.com/v1.0/directoryObjects/$($user.Id)"

# Kaldır
Remove-MgDirectoryRoleMemberByRef -DirectoryRoleId $role.Id -DirectoryObjectId $user.Id""",
    )
    add_warn(
        doc,
        "Global Administrator ataması yüksek risklidir. En az yetki ilkesine uyun; mümkünse Privileged Identity Management (PIM) kullanın.",
    )

    add_cmd(
        doc,
        "10.3 Administrative Unit (yönetim birimi)",
        None,
        """# AU oluştur
$au = New-MgDirectoryAdministrativeUnit -DisplayName "AU-Operasyon" `
  -Description "Operasyon kullanıcıları"

# Kullanıcıyı AU'ya ekle
New-MgDirectoryAdministrativeUnitMemberByRef -AdministrativeUnitId $au.Id `
  -OdataId "https://graph.microsoft.com/v1.0/users/ayse.yilmaz@contoso.com"

Get-MgDirectoryAdministrativeUnitMember -AdministrativeUnitId $au.Id -All""",
    )

    # =====================================================================
    # 11. GÜVENLİK
    # =====================================================================
    add_heading_styled(doc, "11. Güvenlik, Denetim ve Uyumluluk", level=1)

    add_cmd(
        doc,
        "11.1 Oturum açma ve denetim logları (Graph)",
        "AuditLog.Read.All ve Directory.Read.All gerekir. Büyük kiracılarda filtre kullanın.",
        """# Son oturum açmalar (örnek filtre)
Get-MgAuditLogSignIn -Filter "createdDateTime ge $((Get-Date).AddDays(-1).ToString('yyyy-MM-ddTHH:mm:ssZ'))" `
  -Top 50 |
  Select-Object CreatedDateTime, UserPrincipalName, AppDisplayName, IpAddress,
                @{N="Status";E={$_.Status.ErrorCode}},
                @{N="City";E={$_.Location.City}}

# Dizin denetim
Get-MgAuditLogDirectoryAudit -Filter "activityDateTime ge $((Get-Date).AddDays(-1).ToString('yyyy-MM-ddTHH:mm:ssZ'))" `
  -Top 50 |
  Select-Object ActivityDateTime, ActivityDisplayName, OperationType,
                @{N="InitiatedBy";E={$_.InitiatedBy.User.UserPrincipalName}}""",
    )

    add_cmd(
        doc,
        "11.2 Unified Audit Log (Exchange / Purview)",
        None,
        """Connect-ExchangeOnline -ShowBanner:$false

Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-3) -EndDate (Get-Date) `
  -Operations UserLoggedIn,FileDownloaded,FileAccessed,AddMemberToGroup `
  -ResultSize 1000 |
  Select-Object CreationDate, UserIds, Operations, ObjectId, ResultStatus |
  Export-Csv "C:\\Temp\\audit.csv" -NoTypeInformation -Encoding UTF8

# Belirli kullanıcı
Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date) `
  -UserIds "ayse.yilmaz@contoso.com" -ResultSize 500""",
    )

    add_cmd(
        doc,
        "11.3 Koşullu erişim politikalarını okuma",
        None,
        """Connect-MgGraph -Scopes "Policy.Read.All"
Get-MgIdentityConditionalAccessPolicy -All |
  Select-Object Id, DisplayName, State, CreatedDateTime, ModifiedDateTime |
  Format-Table -AutoSize

# Detay
# Get-MgIdentityConditionalAccessPolicy -ConditionalAccessPolicyId "<Id>" | ConvertTo-Json -Depth 6""",
    )

    # =====================================================================
    # 12. RAPORLAR
    # =====================================================================
    add_heading_styled(doc, "12. Raporlama ve Dışa Aktarma", level=1)

    add_cmd(
        doc,
        "12.1 Kullanım ve aktivite raporları",
        "Get-MgReport* cmdlet’leri genelde CSV stream döner.",
        """# Office 365 aktif kullanıcı (period: D7, D30, D90, D180)
Get-MgReportOffice365ActiveUserDetail -Period D30 -OutFile "C:\\Temp\\o365_active_users.csv"

Get-MgReportMailboxUsageDetail -Period D30 -OutFile "C:\\Temp\\mailbox_usage.csv"
Get-MgReportOneDriveUsageAccountDetail -Period D30 -OutFile "C:\\Temp\\onedrive_usage.csv"
Get-MgReportSharePointSiteUsageDetail -Period D30 -OutFile "C:\\Temp\\spo_usage.csv"
Get-MgReportTeamsUserActivityUserDetail -Period D30 -OutFile "C:\\Temp\\teams_activity.csv"

# Lisanssız aktif hesaplar
Get-MgUser -All -Property "displayName,userPrincipalName,accountEnabled,assignedLicenses,userType" |
  Where-Object { $_.AccountEnabled -and $_.UserType -eq "Member" -and $_.AssignedLicenses.Count -eq 0 } |
  Select-Object DisplayName, UserPrincipalName |
  Export-Csv "C:\\Temp\\lisanssiz.csv" -NoTypeInformation -Encoding UTF8""",
    )

    # =====================================================================
    # 13. TOPLU
    # =====================================================================
    add_heading_styled(doc, "13. Toplu / CSV Otomasyon Senaryoları", level=1)

    add_cmd(
        doc,
        "13.1 CSV’den kullanıcı + lisans",
        "CSV: DisplayName,UserPrincipalName,Department,JobTitle,SkuPartNumber",
        """Connect-MgGraph -Scopes "User.ReadWrite.All","Organization.Read.All" -NoWelcome
$csv = Import-Csv "C:\\Temp\\yeni_kullanicilar.csv"
$skus = Get-MgSubscribedSku

foreach ($row in $csv) {
  $nick = ($row.UserPrincipalName -split "@")[0] -replace "[^a-zA-Z0-9]", ""
  try {
    $u = New-MgUser -DisplayName $row.DisplayName `
      -UserPrincipalName $row.UserPrincipalName `
      -MailNickname $nick -AccountEnabled `
      -PasswordProfile @{ Password = "GeciciSifre!123"; ForceChangePasswordNextSignIn = $true } `
      -UsageLocation "TR" -Department $row.Department -JobTitle $row.JobTitle

    $skuId = ($skus | Where-Object SkuPartNumber -eq $row.SkuPartNumber).SkuId
    if ($skuId) {
      Set-MgUserLicense -UserId $u.Id -AddLicenses @{ SkuId = $skuId } -RemoveLicenses @()
    }
    Write-Host "OK $($row.UserPrincipalName)" -ForegroundColor Green
  } catch {
    Write-Warning "HATA $($row.UserPrincipalName): $_"
  }
}""",
    )

    add_cmd(
        doc,
        "13.2 CSV’den gruba üye ekleme",
        "CSV: GroupDisplayName,UserPrincipalName",
        """$rows = Import-Csv "C:\\Temp\\grup_uyelik.csv"
foreach ($r in $rows) {
  $g = Get-MgGroup -Filter "displayName eq '$($r.GroupDisplayName)'" | Select-Object -First 1
  $u = Get-MgUser -UserId $r.UserPrincipalName
  if ($g -and $u) {
    try {
      New-MgGroupMember -GroupId $g.Id -DirectoryObjectId $u.Id -ErrorAction Stop
      "Added $($u.UserPrincipalName) -> $($g.DisplayName)"
    } catch { Write-Warning $_ }
  }
}""",
    )

    add_cmd(
        doc,
        "13.3 İşten ayrılma prosedürü (özet script)",
        "Hesabı kapat → oturum iptal → lisans kaldır → PK’yı shared yap → yönlendir → gruplardan çıkar.",
        """$upn = "ayrilacak@contoso.com"
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Organization.Read.All" -NoWelcome
Connect-ExchangeOnline -ShowBanner:$false

# 1) Oturum + hesap
Revoke-MgUserSignInSession -UserId $upn
Update-MgUser -UserId $upn -AccountEnabled:$false

# 2) Grup üyeliklerinden çıkar (dinamik gruplar hariç — kural ile yönetilir)
Get-MgUserMemberOf -UserId $upn -All | ForEach-Object {
  if ($_.AdditionalProperties["@odata.type"] -eq "#microsoft.graph.group") {
    try { Remove-MgGroupMemberByRef -GroupId $_.Id -DirectoryObjectId (Get-MgUser -UserId $upn).Id } catch {}
  }
}

# 3) Lisansları kaldır
$lic = (Get-MgUserLicenseDetail -UserId $upn).SkuId
if ($lic) { Set-MgUserLicense -UserId $upn -AddLicenses @() -RemoveLicenses $lic }

# 4) Exchange: shared + yöneticisine Full Access + yönlendirme
Set-Mailbox -Identity $upn -Type Shared
$mgr = (Get-MgUserManager -UserId $upn -ErrorAction SilentlyContinue)
if ($mgr) {
  $mgrUpn = (Get-MgUser -UserId $mgr.Id).UserPrincipalName
  Add-MailboxPermission -Identity $upn -User $mgrUpn -AccessRights FullAccess -InheritanceType All
  Set-Mailbox -Identity $upn -ForwardingAddress $mgrUpn -DeliverToMailboxAndForward $true
}

Write-Host "Offboarding tamamlandı (gözden geçirin): $upn" """,
    )

    # =====================================================================
    # 14. TROUBLESHOOTING
    # =====================================================================
    add_heading_styled(doc, "14. Sorun Giderme ve Sık Hatalar", level=1)

    add_cmd(
        doc,
        "14.1 Yetki, token ve modül kontrolleri",
        None,
        """Get-MgContext
(Get-MgContext).Scopes
Get-ConnectionInformation
Get-Module Microsoft.Graph* | Select-Object Name, Version

# Son hatayı detaylı gör
$Error[0] | Format-List * -Force
$Error[0].Exception.Response

# Graph 403 Insufficient privileges → eksik scope veya admin consent
# Disconnect + Connect-MgGraph -Scopes ... yeniden

# Exchange: "object currently in use" → Disconnect-ExchangeOnline; yeni oturum
# "A window handle..." MFA/SSO → -Device veya tarayıcı profilini temizle

# Find-MgGraphCommand ile cmdlet → permission eşle
Find-MgGraphCommand -Command Get-MgUser | Select-Object -First 1 -ExpandProperty Permissions
Find-MgGraphPermission User -ExactMatch:$false | Select-Object -First 20""",
    )

    add_cmd(
        doc,
        "14.2 Sık Graph filtre hataları",
        None,
        """# YANLIŞ: boşluk / tırnak sorunları
# Get-MgUser -Filter "displayName eq Ayşe"

# DOĞRU
Get-MgUser -Filter "displayName eq 'Ayşe Yılmaz'"

# startswith / endswith / contains
Get-MgUser -Filter "startswith(userPrincipalName,'ayse')"
# contains çoğu property'de desteklenmez → Search + ConsistencyLevel eventual

Get-MgUser -ConsistencyLevel eventual -CountVariable cnt -Search '"mail:ayse"' -All
Write-Host "Count: $cnt" """,
    )

    # =====================================================================
    # 15. SÖZLÜK
    # =====================================================================
    add_heading_styled(doc, "15. Hızlı Cmdlet Sözlüğü", level=1)

    table = doc.add_table(rows=1, cols=3)
    table.style = "Table Grid"
    hdr = table.rows[0].cells
    for i, t in enumerate(("Alan", "Cmdlet", "Amaç")):
        hdr[i].text = t
        for p in hdr[i].paragraphs:
            for run in p.runs:
                run.bold = True
                run.font.size = Pt(8)

    rows = [
        ("Graph", "Connect-MgGraph / Disconnect-MgGraph", "Oturum aç/kapa"),
        ("Graph", "Get/New/Update/Remove-MgUser", "Kullanıcı CRUD"),
        ("Graph", "Revoke-MgUserSignInSession", "Oturumları düşür"),
        ("Graph", "Set-MgUserLicense", "Lisans ekle/kaldır"),
        ("Graph", "Get-MgSubscribedSku", "SKU / kota"),
        ("Graph", "Get/New-MgGroup, New-MgGroupMember", "Grup / üyelik"),
        ("Graph", "New-MgInvitation", "B2B misafir davet"),
        ("Graph", "Get-MgAuditLogSignIn", "Oturum açma logu"),
        ("Graph", "Get-MgReport*", "Kullanım CSV raporları"),
        ("Graph", "Find-MgGraphCommand", "Cmdlet→izin bul"),
        ("Exchange", "Connect-ExchangeOnline", "EXO oturumu"),
        ("Exchange", "Get-EXOMailbox / Set-Mailbox", "PK oku/ayarla"),
        ("Exchange", "New-Mailbox -Shared/-Room", "Shared / oda PK"),
        ("Exchange", "Add-MailboxPermission", "Full Access"),
        ("Exchange", "Add-RecipientPermission", "Send As"),
        ("Exchange", "New/Get-TransportRule", "Mail flow"),
        ("Exchange", "Get-MessageTrace", "İleti izleme"),
        ("Exchange", "Search-UnifiedAuditLog", "Birleşik denetim"),
        ("Exchange", "Enable-Mailbox -Archive", "Arşiv aç"),
        ("Teams", "New-Team / Add-TeamUser", "Ekip / üye"),
        ("Teams", "New-TeamChannel", "Kanal"),
        ("Teams", "Set-TeamArchivedState", "Arşivle"),
        ("SharePoint", "Connect-PnPOnline", "PnP bağlantı"),
        ("SharePoint", "Get-PnPTenantSite / New-PnPSite", "Site listesi/oluştur"),
        ("SharePoint", "Set-PnPTenantSite", "Kota / owner / sharing"),
        ("Entra", "Get-MgDirectoryRole", "Dizin rolleri"),
        ("Entra", "New-MgDirectoryAdministrativeUnit", "AU oluştur"),
    ]
    for alan, cmd, amac in rows:
        cells = table.add_row().cells
        cells[0].text = alan
        cells[1].text = cmd
        cells[2].text = amac
        for c in cells:
            for p in c.paragraphs:
                for run in p.runs:
                    run.font.size = Pt(7.5)
                    run.font.name = "Calibri"

    doc.add_paragraph()
    add_heading_styled(doc, "Yaygın SkuPartNumber Değerleri", level=1)
    add_code(
        doc,
        """SPE_E3 / SPE_E5          Microsoft 365 E3 / E5
ENTERPRISEPACK           Office 365 E3
ENTERPRISEPREMIUM        Office 365 E5
O365_BUSINESS_PREMIUM    Microsoft 365 Business Standard
SPB                      Microsoft 365 Business Premium
POWER_BI_PRO             Power BI Pro
PROJECTPREMIUM           Project Plan 5
VISIOCLIENT              Visio Plan 2
EXCHANGESTANDARD         Exchange Online Plan 1
EXCHANGEENTERPRISE       Exchange Online Plan 2""",
    )

    add_heading_styled(doc, "Kaynaklar", level=1)
    add_para(
        doc,
        "• Graph PowerShell: https://learn.microsoft.com/powershell/microsoftgraph/\n"
        "• Exchange Online: https://learn.microsoft.com/powershell/exchange/exchange-online-powershell\n"
        "• Teams: https://learn.microsoft.com/microsoftteams/teams-powershell-overview\n"
        "• PnP PowerShell: https://pnp.github.io/powershell/\n"
        "• Graph Permissions: https://learn.microsoft.com/graph/permissions-reference\n"
        "• Legacy geçiş (MSOnline/AzureAD → Graph): Microsoft Learn migration guides",
        size=9.5,
    )

    footer = doc.add_paragraph()
    r = footer.add_run(
        "Bu belge operasyon ekipleri için detaylı bir komut referansıdır. "
        "Cmdlet’ler, Graph scope’ları ve ürün adları zamanla değişebilir; "
        "üretim öncesi resmi dokümantasyonu doğrulayın. "
        "contoso.com ve C:\\Temp yollarını kendi ortamınıza göre değiştirin."
    )
    set_run_font(r, size=9, color=RGBColor(0x66, 0x66, 0x66))
    r.italic = True

    doc.save(OUTPUT)
    print(f"Saved: {OUTPUT}")


if __name__ == "__main__":
    build()
