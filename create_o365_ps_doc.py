#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Office 365 / Microsoft 365 PowerShell yönetim komutları Word belgesi."""

from docx import Document
from docx.shared import Pt, RGBColor, Cm, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
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
    return h


def add_para(doc, text, bold=False, italic=False, size=11):
    p = doc.add_paragraph()
    run = p.add_run(text)
    set_run_font(run, size=size, bold=bold)
    run.italic = italic
    p.paragraph_format.space_after = Pt(6)
    return p


def shade_paragraph(paragraph, fill="F3F6F9"):
    """Açık gri arka plan (komut blokları için)."""
    pPr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")
    pPr.append(shd)


def add_code(doc, code):
    """PowerShell komut bloğu."""
    for i, line in enumerate(code.strip("\n").split("\n")):
        p = doc.add_paragraph()
        run = p.add_run(line if line else " ")
        set_run_font(run, name="Consolas", size=9)
        run.font.color.rgb = RGBColor(0x1A, 0x1A, 0x2E)
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.left_indent = Cm(0.3)
        shade_paragraph(p, "EEF2F7")
    # Boşluk
    spacer = doc.add_paragraph()
    spacer.paragraph_format.space_before = Pt(2)
    spacer.paragraph_format.space_after = Pt(8)


def add_note(doc, text):
    p = doc.add_paragraph()
    run = p.add_run("Not: ")
    set_run_font(run, size=10, bold=True, color=RGBColor(0xB8, 0x5C, 0x00))
    run2 = p.add_run(text)
    set_run_font(run2, size=10, color=RGBColor(0x5C, 0x4A, 0x32))
    p.paragraph_format.space_after = Pt(10)


def add_cmd(doc, title, description, code):
    add_heading_styled(doc, title, level=2)
    if description:
        add_para(doc, description, size=10)
    add_code(doc, code)


def build():
    doc = Document()

    # Sayfa kenar boşlukları
    for section in doc.sections:
        section.top_margin = Cm(2)
        section.bottom_margin = Cm(2)
        section.left_margin = Cm(2.2)
        section.right_margin = Cm(2.2)

    # --- Kapak ---
    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = title.add_run("Microsoft 365 / Office 365")
    set_run_font(r, name="Calibri", size=26, bold=True, color=RGBColor(0x0B, 0x5C, 0x8C))

    subtitle = doc.add_paragraph()
    subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = subtitle.add_run("Online Yönetim — PowerShell Komut Referansı")
    set_run_font(r, name="Calibri", size=16, bold=True, color=RGBColor(0x16, 0x74, 0xA8))

    meta = doc.add_paragraph()
    meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = meta.add_run(
        "Exchange Online • Microsoft Graph • Entra ID (Azure AD)\n"
        "SharePoint Online • Microsoft Teams • Lisans & Kullanıcı Yönetimi"
    )
    set_run_font(r, size=10, color=RGBColor(0x55, 0x55, 0x55))

    warn = doc.add_paragraph()
    warn.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = warn.add_run(
        "Önemli: Komutları üretim ortamında çalıştırmadan önce test kiracısında deneyin. "
        "Global Admin / ilgili rol yetkisi gerekir. MSOnline ve AzureAD modülleri kullanımdan kaldırılıyor; "
        "yeni senaryolar için Microsoft Graph PowerShell tercih edin."
    )
    set_run_font(r, size=9, color=RGBColor(0x8B, 0x00, 0x00))

    doc.add_paragraph()

    # ========== 1. KURULUM ==========
    add_heading_styled(doc, "1. Modül Kurulumu", level=1)
    add_para(
        doc,
        "Microsoft 365 yönetiminde güncel yaklaşım Microsoft Graph PowerShell ve servis özel modülleridir "
        "(ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell).",
    )

    add_cmd(
        doc,
        "Gerekli modülleri yükleme",
        "Yönetici PowerShell oturumunda çalıştırın.",
        """# PowerShell Galerisi güvenilir kaynak
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted

# Microsoft Graph (kullanıcı, grup, lisans, Entra ID)
Install-Module Microsoft.Graph -Scope CurrentUser -Force

# Exchange Online
Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force

# Microsoft Teams
Install-Module MicrosoftTeams -Scope CurrentUser -Force

# SharePoint / OneDrive (PnP)
Install-Module PnP.PowerShell -Scope CurrentUser -Force

# (Eski) MSOnline — yeni projelerde kullanmayın
# Install-Module MSOnline""",
    )

    add_cmd(
        doc,
        "Yüklü modül sürümlerini kontrol",
        None,
        """Get-Module Microsoft.Graph*, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell -ListAvailable |
  Select-Object Name, Version | Sort-Object Name""",
    )

    # ========== 2. BAĞLANTI ==========
    add_heading_styled(doc, "2. Bağlantı (Connect)", level=1)

    add_cmd(
        doc,
        "Microsoft Graph bağlantısı",
        "İhtiyaca göre izin (scope) seçin. Etkileşimli oturum açma örneği:",
        """# Temel okuma + kullanıcı/grup yönetimi
Connect-MgGraph -Scopes @(
  "User.Read.All",
  "User.ReadWrite.All",
  "Group.ReadWrite.All",
  "Directory.Read.All",
  "Organization.Read.All"
)

# Bağlı kiracı / hesap bilgisi
Get-MgContext
Disconnect-MgGraph""",
    )

    add_cmd(
        doc,
        "Exchange Online bağlantısı",
        None,
        """Connect-ExchangeOnline
# veya belirli hesapla:
# Connect-ExchangeOnline -UserPrincipalName admin@contoso.com

Get-ConnectionInformation
Disconnect-ExchangeOnline -Confirm:$false""",
    )

    add_cmd(
        doc,
        "Teams ve SharePoint bağlantısı",
        None,
        """# Teams
Connect-MicrosoftTeams

# SharePoint (PnP) — kiracı yönetici sitesi
Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive

Disconnect-MicrosoftTeams
Disconnect-PnPOnline""",
    )

    add_note(
        doc,
        "Uygulama (app-only) veya sertifika ile bağlantı için ilgili Connect-* cmdlet’lerinin "
        "-ClientId / -CertificateThumbprint parametrelerini kullanın. MFA zorunlu kiracılarda "
        "etkileşimli veya sertifika tabanlı kimlik doğrulama tercih edin.",
    )

    # ========== 3. KULLANICI ==========
    add_heading_styled(doc, "3. Kullanıcı Yönetimi (Microsoft Graph)", level=1)

    add_cmd(
        doc,
        "Kullanıcıları listeleme",
        None,
        """# Tüm kullanıcılar (özet)
Get-MgUser -All | Select-Object DisplayName, UserPrincipalName, AccountEnabled, Id

# Belirli kullanıcı
Get-MgUser -UserId "ali.veli@contoso.com" |
  Select-Object DisplayName, Mail, JobTitle, Department, AccountEnabled

# Filtre: aktif ve belirli domain
Get-MgUser -All -Filter "accountEnabled eq true" |
  Where-Object { $_.UserPrincipalName -like "*@contoso.com" } |
  Select-Object DisplayName, UserPrincipalName""",
    )

    add_cmd(
        doc,
        "Yeni kullanıcı oluşturma",
        None,
        """$PasswordProfile = @{
  Password                      = "GeciciSifre!123"
  ForceChangePasswordNextSignIn = $true
}

New-MgUser -DisplayName "Ayşe Yılmaz" `
  -UserPrincipalName "ayse.yilmaz@contoso.com" `
  -MailNickname "ayseyilmaz" `
  -AccountEnabled `
  -PasswordProfile $PasswordProfile `
  -UsageLocation "TR" """,
    )

    add_cmd(
        doc,
        "Kullanıcı güncelleme / pasifleştirme / silme",
        None,
        """# Özellik güncelle
Update-MgUser -UserId "ayse.yilmaz@contoso.com" `
  -JobTitle "Operasyon Uzmanı" `
  -Department "Operasyon" `
  -OfficeLocation "İstanbul"

# Hesabı kapat
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$false

# Soft-delete (geri dönüşüm)
Remove-MgUser -UserId "ayse.yilmaz@contoso.com"

# Silinen kullanıcıları listele / geri yükle
Get-MgDirectoryDeletedItemAsUser -All
Restore-MgDirectoryDeletedItem -DirectoryObjectId "<ObjectId>" """,
    )

    add_cmd(
        doc,
        "Parola sıfırlama",
        None,
        """$params = @{
  Password                      = "YeniGecici!456"
  ForceChangePasswordNextSignIn = $true
}
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -PasswordProfile $params""",
    )

    # ========== 4. LİSANS ==========
    add_heading_styled(doc, "4. Lisans Yönetimi", level=1)

    add_cmd(
        doc,
        "SKU / lisans stokunu görme",
        None,
        """# Kiracıdaki lisanslar
Get-MgSubscribedSku | Select-Object SkuPartNumber, ConsumedUnits,
  @{N="Enabled";E={$_.PrepaidUnits.Enabled}},
  @{N="SkuId";E={$_.SkuId}}

# Yaygın SkuPartNumber örnekleri:
# SPE_E3, SPE_E5, ENTERPRISEPACK (E3), ENTERPRISEPREMIUM (E5),
# POWER_BI_PRO, PROJECTPREMIUM, VISIOCLIENT""",
    )

    add_cmd(
        doc,
        "Kullanıcıya lisans atama / kaldırma",
        "UsageLocation (ülke kodu) lisans atamadan önce tanımlı olmalıdır.",
        """$user = "ayse.yilmaz@contoso.com"
Update-MgUser -UserId $user -UsageLocation "TR"

$sku = Get-MgSubscribedSku | Where-Object { $_.SkuPartNumber -eq "SPE_E3" }

# Lisans ata
Set-MgUserLicense -UserId $user `
  -AddLicenses @{SkuId = $sku.SkuId} `
  -RemoveLicenses @()

# Lisansı kaldır
Set-MgUserLicense -UserId $user `
  -AddLicenses @() `
  -RemoveLicenses @($sku.SkuId)

# Kullanıcının lisansları
Get-MgUserLicenseDetail -UserId $user |
  Select-Object SkuPartNumber, SkuId""",
    )

    add_cmd(
        doc,
        "Belirli servis planını kapatarak lisans atama",
        "Örnek: Exchange dışındaki planları açık bırakıp Yammer’ı kapatmak gibi senaryolar.",
        """$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
# Kapatılacak ServicePlanId listesi (örnek — kendi tenant’ınızda doğrulayın)
$disabled = @("<ServicePlanGuid>")

Set-MgUserLicense -UserId $user -AddLicenses @{
  SkuId         = $sku.SkuId
  DisabledPlans = $disabled
} -RemoveLicenses @()""",
    )

    # ========== 5. GRUPLAR ==========
    add_heading_styled(doc, "5. Grup Yönetimi", level=1)

    add_cmd(
        doc,
        "Grup listeleme ve üyelik",
        None,
        """# Tüm gruplar
Get-MgGroup -All | Select-Object DisplayName, GroupTypes, MailEnabled, SecurityEnabled, Id

# Microsoft 365 grupları
Get-MgGroup -All -Filter "groupTypes/any(c:c eq 'Unified')" |
  Select-Object DisplayName, Mail

# Üyeler
Get-MgGroupMember -GroupId "<GroupId>" -All |
  ForEach-Object { Get-MgUser -UserId $_.Id -ErrorAction SilentlyContinue } |
  Select-Object DisplayName, UserPrincipalName

# Kullanıcının üye olduğu gruplar
Get-MgUserMemberOf -UserId "ayse.yilmaz@contoso.com" -All""",
    )

    add_cmd(
        doc,
        "Güvenlik grubu / M365 grubu oluşturma ve üye ekleme",
        None,
        """# Güvenlik grubu
$sg = New-MgGroup -DisplayName "Operasyon-Sec" `
  -MailEnabled:$false `
  -MailNickname "operasyon-sec" `
  -SecurityEnabled `
  -Description "Operasyon güvenlik grubu"

# Microsoft 365 grubu
$m365 = New-MgGroup -DisplayName "Operasyon Ekibi" `
  -Description "Operasyon M365 grubu" `
  -MailEnabled `
  -MailNickname "operasyon-ekibi" `
  -SecurityEnabled `
  -GroupTypes @("Unified")

# Üye ekle / çıkar
$user = Get-MgUser -UserId "ayse.yilmaz@contoso.com"
New-MgGroupMember -GroupId $sg.Id -DirectoryObjectId $user.Id
Remove-MgGroupMemberByRef -GroupId $sg.Id -DirectoryObjectId $user.Id""",
    )

    # ========== 6. EXCHANGE ==========
    add_heading_styled(doc, "6. Exchange Online", level=1)

    add_cmd(
        doc,
        "Posta kutusu listeleme ve türleri",
        None,
        """Connect-ExchangeOnline

# Kullanıcı posta kutuları
Get-EXOMailbox -ResultSize Unlimited |
  Select-Object DisplayName, PrimarySmtpAddress, RecipientTypeDetails

# Paylaşılan posta kutuları
Get-EXOMailbox -RecipientTypeDetails SharedMailbox -ResultSize Unlimited |
  Select-Object DisplayName, PrimarySmtpAddress

# Kaynak (oda / ekipman)
Get-EXOMailbox -RecipientTypeDetails RoomMailbox,EquipmentMailbox""",
    )

    add_cmd(
        doc,
        "Paylaşılan posta kutusu oluşturma ve izin",
        None,
        """New-Mailbox -Shared -Name "Destek" -DisplayName "Destek Ortak" `
  -PrimarySmtpAddress "destek@contoso.com"

# Tam erişim + Send As
Add-MailboxPermission -Identity "destek@contoso.com" `
  -User "ayse.yilmaz@contoso.com" -AccessRights FullAccess -InheritanceType All

Add-RecipientPermission -Identity "destek@contoso.com" `
  -Trustee "ayse.yilmaz@contoso.com" -AccessRights SendAs -Confirm:$false

# İzinleri görüntüle
Get-MailboxPermission -Identity "destek@contoso.com" |
  Where-Object { -not $_.IsInherited -and $_.User -notlike "NT AUTHORITY*" }""",
    )

    add_cmd(
        doc,
        "Dağıtım grubu ve dinamik dağıtım",
        None,
        """New-DistributionGroup -Name "Satis-DG" -PrimarySmtpAddress "satis@contoso.com" `
  -Type Distribution

Add-DistributionGroupMember -Identity "Satis-DG" -Member "ayse.yilmaz@contoso.com"
Get-DistributionGroupMember -Identity "Satis-DG"

# Dinamik dağıtım grubu (örnek: Departman = Satış)
New-DynamicDistributionGroup -Name "Satis-Dynamic" `
  -RecipientFilter "(RecipientTypeDetails -eq 'UserMailbox') -and (Department -eq 'Satış')" """,
    )

    add_cmd(
        doc,
        "Posta yönlendirme, otomatik yanıt, kota",
        None,
        """# Yönlendirme
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress "arsiv@contoso.com" `
  -DeliverToMailboxAndForward $true

# Otomatik yanıt (OOF)
Set-MailboxAutoReplyConfiguration -Identity "ayse.yilmaz@contoso.com" `
  -AutoReplyState Enabled `
  -InternalMessage "İzinliyim, dönüşümde size dönüş yapacağım." `
  -ExternalMessage "I am currently out of office."

# Kota / boyut
Get-EXOMailboxStatistics -Identity "ayse.yilmaz@contoso.com" |
  Select-Object DisplayName, ItemCount, TotalItemSize

Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -ProhibitSendQuota 49GB `
  -ProhibitSendReceiveQuota 50GB -IssueWarningQuota 45GB""",
    )

    add_cmd(
        doc,
        "Transport kuralı (mail flow) örneği",
        None,
        """New-TransportRule -Name "Dis-Uyari-Banner" `
  -FromScope NotInOrganization `
  -ApplyHtmlDisclaimerLocation Prepend `
  -ApplyHtmlDisclaimerText "<p><strong>DİKKAT:</strong> Bu e-posta kurum dışından geldi.</p>" `
  -ApplyHtmlDisclaimerFallbackAction Wrap

Get-TransportRule | Select-Object Name, State, Priority""",
    )

    add_cmd(
        doc,
        "Mesaj izleme (Message Trace)",
        None,
        """Get-MessageTrace -StartDate (Get-Date).AddDays(-2) -EndDate (Get-Date) `
  -SenderAddress "disari@ornek.com" |
  Select-Object Received, SenderAddress, RecipientAddress, Subject, Status""",
    )

    # ========== 7. SHAREPOINT ==========
    add_heading_styled(doc, "7. SharePoint Online / OneDrive (PnP)", level=1)

    add_cmd(
        doc,
        "Site koleksiyonları ve OneDrive",
        None,
        """Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive

# Site listesi
Get-PnPTenantSite | Select-Object Url, Title, Template, StorageUsageCurrent

# Belirli siteye bağlan
Connect-PnPOnline -Url "https://contoso.sharepoint.com/sites/Operasyon" -Interactive
Get-PnPWeb
Get-PnPList | Select-Object Title, ItemCount

# OneDrive URL (kullanıcı)
# Get-PnPUserProfileProperty -Account "ayse.yilmaz@contoso.com" """,
    )

    add_cmd(
        doc,
        "Site oluşturma ve dış paylaşım ayarı (yüksek seviye)",
        None,
        """# Modern iletişim sitesi
New-PnPSite -Type CommunicationSite `
  -Title "Operasyon Portal" `
  -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -Owner "admin@contoso.com"

# Kiracı dış paylaşım (dikkatli kullanın)
# Set-PnPTenant -SharingCapability ExternalUserSharingOnly""",
    )

    # ========== 8. TEAMS ==========
    add_heading_styled(doc, "8. Microsoft Teams", level=1)

    add_cmd(
        doc,
        "Ekip listeleme, oluşturma, üye ekleme",
        None,
        """Connect-MicrosoftTeams

Get-Team | Select-Object DisplayName, GroupId, Visibility, MailNickName

# Yeni ekip
$team = New-Team -DisplayName "Operasyon Teams" `
  -MailNickName "operasyon-teams" `
  -Visibility Private `
  -Description "Operasyon ekip kanalı"

Add-TeamUser -GroupId $team.GroupId -User "ayse.yilmaz@contoso.com" -Role Member
# Owner için: -Role Owner

Get-TeamUser -GroupId $team.GroupId
New-TeamChannel -GroupId $team.GroupId -DisplayName "Günlük-Operasyon"

# Ekibi arşivle
Set-TeamArchivedState -GroupId $team.GroupId -Archived $true""",
    )

    # ========== 9. GÜVENLİK ==========
    add_heading_styled(doc, "9. Güvenlik ve Uyumluluk (Seçilmiş)", level=1)

    add_cmd(
        doc,
        "Koşullu erişim / roller (Graph — okuma)",
        "Koşullu erişim yazma işlemleri dikkat ve ayrı roller gerektirir.",
        """# Dizin rolleri (kim Global Admin vb.)
Get-MgDirectoryRole -All | ForEach-Object {
  $role = $_
  Get-MgDirectoryRoleMember -DirectoryRoleId $role.Id -All | ForEach-Object {
    [PSCustomObject]@{ Role = $role.DisplayName; MemberId = $_.Id }
  }
}

# Kullanıcı oturum / risk için Entra portalı veya Graph güvenlik API’leri kullanılır.
# MFA kayıt durumu (beta / raporlama senaryolarına göre değişebilir):
# Get-MgReportAuthenticationMethodUserRegistrationDetail -All""",
    )

    add_cmd(
        doc,
        "Exchange: Audit log arama (yüksek seviye)",
        None,
        """Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-7) -EndDate (Get-Date) `
  -Operations "FileAccessed","FileDownloaded","UserLoggedIn" `
  -ResultSize 1000 |
  Select-Object CreationDate, UserIds, Operations, ObjectId""",
    )

    # ========== 10. TOPLU İŞ ==========
    add_heading_styled(doc, "10. Toplu İşlem Örnekleri", level=1)

    add_cmd(
        doc,
        "CSV’den kullanıcı oluşturma",
        "CSV sütunları örneği: DisplayName, UserPrincipalName, Department, JobTitle",
        """$csv = Import-Csv "C:\\Temp\\yeni_kullanicilar.csv"
$PasswordProfile = @{
  Password = "GeciciSifre!123"
  ForceChangePasswordNextSignIn = $true
}

foreach ($row in $csv) {
  $nick = ($row.UserPrincipalName -split "@")[0]
  try {
    New-MgUser -DisplayName $row.DisplayName `
      -UserPrincipalName $row.UserPrincipalName `
      -MailNickname $nick `
      -AccountEnabled `
      -PasswordProfile $PasswordProfile `
      -UsageLocation "TR" `
      -Department $row.Department `
      -JobTitle $row.JobTitle
    Write-Host "OK: $($row.UserPrincipalName)" -ForegroundColor Green
  } catch {
    Write-Warning "HATA: $($row.UserPrincipalName) — $_"
  }
}""",
    )

    add_cmd(
        doc,
        "Lisansı olmayan aktif kullanıcıları raporlama",
        None,
        """Get-MgUser -All -Property "DisplayName,UserPrincipalName,AccountEnabled,AssignedLicenses" |
  Where-Object { $_.AccountEnabled -and ($_.AssignedLicenses.Count -eq 0) } |
  Select-Object DisplayName, UserPrincipalName |
  Export-Csv "C:\\Temp\\lisanssiz_kullanicilar.csv" -NoTypeInformation -Encoding UTF8""",
    )

    # ========== 11. SORUN GİDERME ==========
    add_heading_styled(doc, "11. Sık Karşılaşılan Kontroller", level=1)

    add_cmd(
        doc,
        "Bağlantı, yetki ve modül sağlığı",
        None,
        """Get-MgContext
Get-ConnectionInformation          # Exchange
Get-CsTenant                       # Teams (bağlıysa)

# Graph hata ayıklama
$Error[0] | Format-List * -Force

# Modül güncelle
Update-Module Microsoft.Graph, ExchangeOnlineManagement, MicrosoftTeams, PnP.PowerShell""",
    )

    # ========== EK ==========
    add_heading_styled(doc, "12. Hızlı Referans — Sık Kullanılan Cmdlet’ler", level=1)

    table = doc.add_table(rows=1, cols=3)
    table.style = "Table Grid"
    hdr = table.rows[0].cells
    headers = ("Alan", "Cmdlet", "Amaç")
    for i, t in enumerate(headers):
        hdr[i].text = t
        for p in hdr[i].paragraphs:
            for run in p.runs:
                run.bold = True
                run.font.size = Pt(9)

    rows = [
        ("Graph", "Connect-MgGraph", "Kiracıya Graph ile bağlan"),
        ("Graph", "Get-MgUser / New-MgUser", "Kullanıcı oku / oluştur"),
        ("Graph", "Set-MgUserLicense", "Lisans ata / kaldır"),
        ("Graph", "Get-MgGroup / New-MgGroup", "Grup yönetimi"),
        ("Exchange", "Connect-ExchangeOnline", "EXO oturumu"),
        ("Exchange", "Get-EXOMailbox", "Posta kutusu listesi"),
        ("Exchange", "New-Mailbox -Shared", "Paylaşılan PK"),
        ("Exchange", "New-TransportRule", "Mail flow kuralı"),
        ("Exchange", "Get-MessageTrace", "İleti izleme"),
        ("Teams", "New-Team / Add-TeamUser", "Ekip ve üye"),
        ("SharePoint", "Connect-PnPOnline", "SPO bağlantısı"),
        ("SharePoint", "Get-PnPTenantSite", "Site listesi"),
        ("Genel", "Disconnect-*", "Oturumu kapat"),
    ]
    for alan, cmd, amac in rows:
        cells = table.add_row().cells
        cells[0].text = alan
        cells[1].text = cmd
        cells[2].text = amac
        for c in cells:
            for p in c.paragraphs:
                for run in p.runs:
                    run.font.size = Pt(8)
                    run.font.name = "Calibri"

    doc.add_paragraph()
    add_heading_styled(doc, "Kaynaklar", level=1)
    add_para(
        doc,
        "• Microsoft Graph PowerShell: https://learn.microsoft.com/powershell/microsoftgraph/\n"
        "• Exchange Online PowerShell: https://learn.microsoft.com/powershell/exchange/exchange-online-powershell\n"
        "• Teams PowerShell: https://learn.microsoft.com/microsoftteams/teams-powershell-overview\n"
        "• PnP PowerShell: https://pnp.github.io/powershell/\n"
        "• MSOnline / AzureAD geçiş rehberi: Microsoft Graph’a geçiş (legacy modüller retired)",
        size=10,
    )

    footer = doc.add_paragraph()
    r = footer.add_run(
        "\nBu belge operasyon ekipleri için pratik bir komut özetidir. "
        "Cmdlet parametreleri ve Graph izinleri zamanla değişebilir; "
        "üretim öncesi resmi Microsoft Learn dokümantasyonunu doğrulayın. "
        "Örnek domain (contoso.com) ve yolları kendi kiracınıza göre değiştirin."
    )
    set_run_font(r, size=9, color=RGBColor(0x66, 0x66, 0x66))
    r.italic = True

    doc.save(OUTPUT)
    print(f"Saved: {OUTPUT}")


if __name__ == "__main__":
    build()
