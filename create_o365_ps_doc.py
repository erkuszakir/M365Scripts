#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Microsoft 365 PowerShell — Başlangıçtan İleri Seviyeye Eğitim Kitabı
Şirket kiracı yönetimi odaklı, ayrıntılı Word çıktısı.
"""

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUTPUT = "/workspace/Office365_PowerShell_Yonetim_Komutlari.docx"
C1 = RGBColor(0x0B, 0x5C, 0x8C)
C2 = RGBColor(0x16, 0x74, 0xA8)
C3 = RGBColor(0x2E, 0x86, 0xAB)
MUTED = RGBColor(0x55, 0x55, 0x55)
CODE_FG = RGBColor(0x1A, 0x1A, 0x2E)
ORANGE = RGBColor(0xB8, 0x5C, 0x00)
RED = RGBColor(0x8B, 0x00, 0x00)
GREEN = RGBColor(0x1B, 0x6B, 0x3A)


def f(run, name="Calibri", size=11, bold=False, italic=False, color=None):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    if color:
        run.font.color.rgb = color


def H(doc, text, level=1):
    h = doc.add_heading(text, level=level)
    col = {1: C1, 2: C2, 3: C3}.get(level, MUTED)
    for r in h.runs:
        r.font.color.rgb = col
    return h


def P(doc, text, size=10.5, bold=False, italic=False, color=None):
    p = doc.add_paragraph()
    r = p.add_run(text)
    f(r, size=size, bold=bold, italic=italic, color=color)
    p.paragraph_format.space_after = Pt(6)
    return p


def shade(p, fill="EEF2F7"):
    pPr = p._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    shd.set(qn("w:val"), "clear")
    pPr.append(shd)


def CODE(doc, code):
    for line in code.strip("\n").split("\n"):
        p = doc.add_paragraph()
        r = p.add_run(line if line else " ")
        f(r, name="Consolas", size=8, color=CODE_FG)
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.left_indent = Cm(0.15)
        shade(p)
    sp = doc.add_paragraph()
    sp.paragraph_format.space_after = Pt(5)


def BOX(doc, label, text, color):
    p = doc.add_paragraph()
    a = p.add_run(label + " ")
    f(a, size=9.5, bold=True, color=color)
    b = p.add_run(text)
    f(b, size=9.5)
    p.paragraph_format.space_after = Pt(7)


def NOTE(doc, t):
    BOX(doc, "Not:", t, ORANGE)


def WARN(doc, t):
    BOX(doc, "Uyarı:", t, RED)


def TIP(doc, t):
    BOX(doc, "İpucu:", t, GREEN)


def OBJ(doc, items):
    P(doc, "Bu bölümün öğrenme hedefleri", size=10, bold=True)
    for i in items:
        p = doc.add_paragraph(style="List Number")
        r = p.add_run(i)
        f(r, size=10)
        p.paragraph_format.space_after = Pt(1)


def EX(doc, title, tasks):
    H(doc, "Alıştırma — " + title, 3)
    for t in tasks:
        p = doc.add_paragraph(style="List Bullet")
        r = p.add_run(t)
        f(r, size=9.5)
        p.paragraph_format.space_after = Pt(1)
    P(doc, "", size=6)


def bullets(doc, items, size=10):
    for t in items:
        p = doc.add_paragraph(style="List Bullet")
        r = p.add_run(t)
        f(r, size=size)
        p.paragraph_format.space_after = Pt(1)


def page_break(doc):
    doc.add_page_break()


def build():
    doc = Document()
    for s in doc.sections:
        s.top_margin = Cm(1.6)
        s.bottom_margin = Cm(1.6)
        s.left_margin = Cm(1.8)
        s.right_margin = Cm(1.8)

    # ===================== KAPAK =====================
    for _ in range(2):
        doc.add_paragraph()
    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("EĞİTİM KİTABI")
    f(r, size=12, bold=True, color=C2)

    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("Microsoft 365")
    f(r, size=28, bold=True, color=C1)

    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("PowerShell ile Şirket Yönetimi")
    f(r, size=18, bold=True, color=C2)

    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("Başlangıçtan İleri Seviyeye — Ayrıntılı Uygulamalı Rehber")
    f(r, size=12, color=MUTED)

    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run(
        "\nKimlik • Lisans • Exchange Online • SharePoint / OneDrive\n"
        "Teams • Güvenlik • Denetim • Otomasyon • Runbook’lar"
    )
    f(r, size=10, color=MUTED)

    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run(
        "\nBu kitap, Microsoft 365 (Office 365) kullanan bir şirketin kiracısını\n"
        "PowerShell ile yönetmeyi sıfırdan ileri seviyeye kadar öğretir.\n"
        "Her bölüm: teori → komut → doğrulama → alıştırma."
    )
    f(r, size=10)

    WARN(
        doc,
        "Örnek domain: contoso.com — kendi kiracınızla değiştirin. Mümkünse Microsoft 365 "
        "Developer / trial kiracıda çalışın. Üretimde Global Admin ile deneme yapmayın; "
        "en az yetki ilkesine uyun. MSOnline ve AzureAD modülleri emeklidir; kitap Graph kullanır.",
    )

    page_break(doc)

    # ===================== İÇİNDEKİLER =====================
    H(doc, "İçindekiler", 1)
    toc = [
        "Kitabı nasıl kullanmalısınız?",
        "Kısım I — Temeller",
        "  Bölüm 1. Microsoft 365 mimarisi ve yönetici zihniyeti",
        "  Bölüm 2. PowerShell temelleri (M365 için yeterli doz)",
        "  Bölüm 3. Modüller, kurulum ve ilk bağlantı",
        "  Bölüm 4. Kimlik doğrulama, scope, RBAC",
        "Kısım II — Çekirdek yönetim",
        "  Bölüm 5. Kullanıcı yaşam döngüsü",
        "  Bölüm 6. Lisans ve servis planları",
        "  Bölüm 7. Gruplar ve yetki modeli",
        "Kısım III — İş yükleri",
        "  Bölüm 8. Exchange Online",
        "  Bölüm 9. SharePoint Online ve OneDrive",
        "  Bölüm 10. Microsoft Teams",
        "Kısım IV — Güvenlik ve görünürlük",
        "  Bölüm 11. Roller, misafirler, Conditional Access’e bakış",
        "  Bölüm 12. Denetim, izleme ve raporlama",
        "Kısım V — İleri seviye",
        "  Bölüm 13. Toplu işlem, CSV ve script disiplini",
        "  Bölüm 14. App-only otomasyon ve sertifika",
        "  Bölüm 15. Hibrit kimlik notları ve sınırlar",
        "Kısım VI — Ustalık",
        "  Bölüm 16. Onboarding / Offboarding runbook’ları",
        "  Bölüm 17. Operasyon checklist’i ve bitirme projesi",
        "Ekler — SkuPartNumber, cmdlet sözlüğü, hata sözlüğü",
    ]
    for line in toc:
        P(doc, line, size=10)

    page_break(doc)

    # ===================== NASIL =====================
    H(doc, "Kitabı nasıl kullanmalısınız?", 1)
    P(
        doc,
        "Bu bir referans kartı değil, eğitim kitabıdır. Amacınız: bir şirketin Microsoft 365 "
        "kiracısını güvenli, tekrarlanabilir ve ölçülebilir şekilde PowerShell ile yönetebilmek.",
    )
    H(doc, "Önerilen yol", 2)
    bullets(
        doc,
        [
            "Kısım I’i atlamayın. Bağlantı/scope/RBAC zayıfsa sonraki tüm komutlar ‘çalışmıyor’ gibi görünür.",
            "Her bölüm sonundaki alıştırmaları kendi lab kiracınızda yapın. Okumak ≠ öğrenmek.",
            "Kısım II bitmeden Exchange/Teams’e geçmeyin; kullanıcı+lisans omurgadır.",
            "İleri seviyede (Kısım V) secret’ları koda gömmeyin; önce lab’da, sonra otomasyonda.",
            "Bölüm 17’deki bitirme projesini tamamladığınızda ‘şirket yöneticisi’ seviyesindesiniz demektir.",
        ],
    )
    H(doc, "Laboratuvar gereksinimi", 2)
    bullets(
        doc,
        [
            "Windows 10/11 veya Windows Server; mümkünse PowerShell 7+",
            "Microsoft 365 E3/E5 trial veya Developer Program kiracısı",
            "En az iki test kullanıcısı ve bir test güvenlik grubu",
            "Yönetici hesabında MFA açık olsun (gerçek hayat böyle)",
        ],
    )
    TIP(
        doc,
        "Kitap boyunca aynı hayali şirket kullanılır: Contoso A.Ş., domain contoso.com, "
        "yönetici admin@contoso.com, örnek kullanıcı ayse.yilmaz@contoso.com.",
    )

    page_break(doc)

    # ##################################################################
    # KISIM I
    # ##################################################################
    H(doc, "KISIM I — Temeller", 1)
    P(
        doc,
        "Bu kısım bitmeden ‘komut ezberlemeyin’. Microsoft 365’te PowerShell, portalın yerine geçen "
        "sihirli bir kutu değil; aynı kontrol düzlemine programatik erişiminizdir.",
        italic=True,
    )

    # ----- BÖLÜM 1 -----
    H(doc, "Bölüm 1. Microsoft 365 mimarisi ve yönetici zihniyeti", 1)
    OBJ(
        doc,
        [
            "Kiracı (tenant), abonelik, domain ve UPN kavramlarını ayırt etmek",
            "Kimlik / lisans / iş yükü katmanlarını çizmek",
            "Portal ile PowerShell’in ne zaman tercih edileceğini bilmek",
            "En az yetki (RBAC) ilkesini operasyona bağlamak",
        ],
    )

    H(doc, "1.1 Kiracı nedir?", 2)
    P(
        doc,
        "Microsoft 365 kiracısı (tenant), şirketinizin buluttaki organizasyon sınırıdır. "
        "Genelde contoso.onmicrosoft.com şeklinde bir başlangıç domain’i vardır; üzerine "
        "contoso.com gibi özel domain eklenir. Kullanıcılar User Principal Name (UPN) ile "
        "oturum açar: ayse.yilmaz@contoso.com. Yönetici olarak sizin işiniz bu sınır içindeki "
        "kimlikleri, lisansları ve iş yüklerini (Exchange, SharePoint, Teams…) yaşam döngüsü "
        "boyunca kontrol etmektir.",
    )
    P(
        doc,
        "Önemli ayrım: Abonelik (subscription) lisansları satın aldığınız sözleşmedir; kiracı "
        "ise dizin ve yapılandırmanın yaşadığı yerdir. Bir kiracıda birden fazla abonelik/SKU olabilir.",
    )

    H(doc, "1.2 Katmanlı model (ezberleyin)", 2)
    CODE(
        doc,
        """┌─────────────────────────────────────────────────────────────┐
│  Güvenlik & uyumluluk   CA, audit, hold, eDiscovery         │
├─────────────────────────────────────────────────────────────┤
│  İş yükleri             Exchange • SharePoint/OneDrive      │
│                         Teams • diğer servisler             │
├─────────────────────────────────────────────────────────────┤
│  Lisanslama             SKU / servis planı ataması          │
├─────────────────────────────────────────────────────────────┤
│  Kimlik (Entra ID)      Kullanıcı • grup • rol • MFA        │
└─────────────────────────────────────────────────────────────┘""",
    )
    P(
        doc,
        "Neden kritik? Çünkü ‘kullanıcıyı sildim’ demek bu dört katmanı birden etkiler. "
        "İyi bir yönetici her değişiklikte ‘hangi katman etkilenir?’ diye sorar. İşten ayrılmada "
        "sadece AccountEnabled=$false yetmez; oturum, grup, posta, OneDrive ve lisans ayrı adımlardır. "
        "Bu kitap ileride her katmanı ayrı bölümde işler; zihinsel modeliniz bu şema olsun.",
    )

    H(doc, "1.3 Portal mı PowerShell mi?", 2)
    bullets(
        doc,
        [
            "Portal: tekil değişiklik, görsel keşif, acil küçük müdahale, ilk kez bir özelliği anlama.",
            "PowerShell: 10+ nesne, rapor, standart prosedür (onboarding/offboarding), transport kuralları, "
            "hold/arşiv, tekrarlanabilirlik, değişiklik kanıtı (script + log).",
            "Olgun şirket: tasarım ve politika insan + portal; icra ve denetim script + pipeline.",
        ],
    )
    NOTE(
        doc,
        "PowerShell bilmek portali terk etmek demek değildir. İyi admin ikisini de kullanır; "
        "kararı ölçek, risk ve tekrar sayısı belirler.",
    )

    H(doc, "1.4 Yönetici rolleri (ilk bakış)", 2)
    P(
        doc,
        "Global Administrator her kapıyı açar; bu yüzden günlük iş hesabı olmamalıdır. "
        "Pratik ayrım: User Administrator (hesap), License Administrator (SKU), Exchange Admin "
        "(posta), SharePoint Admin (site), Teams Admin (ekip), Security/Compliance Reader (denetim). "
        "Privileged Identity Management (PIM) olan kiracıda ‘sürekli admin’ yerine ‘just-in-time’ "
        "yükseltme tercih edilir — ileri güvenlik kültürüdür, Bölüm 11’de tekrar değinilir.",
    )

    EX(
        doc,
        "Mimari",
        [
            "Kendi (veya lab) kiracınızın .onmicrosoft.com ve özel domain’lerini not edin.",
            "Bir A4’e kimlik → lisans → Exchange → OneDrive zincirini çizin; işten ayrılmada sırayı yazın.",
            "Portalda Roles’a bakıp Global Admin sayısını sayın. 3’ten fazlaysa risk notu düşün.",
        ],
    )

    # ----- BÖLÜM 2 -----
    H(doc, "Bölüm 2. PowerShell temelleri (M365 için yeterli doz)", 1)
    OBJ(
        doc,
        [
            "Cmdlet, parametre, pipeline ve nesne kavramını kullanmak",
            "Değişken, filtre, Select-Object ve Export-Csv ile rapor üretmek",
            "Hata ayıklamada $Error ve -ErrorAction kullanmak",
        ],
    )
    P(
        doc,
        "Microsoft 365 yönetimi için yazılım geliştirici olmanız gerekmez. Ama ‘string’ ile "
        "‘nesne’ farkını bilmezseniz Get-MgUser çıktısını yanlış işlersiniz. Bu bölüm kısa ve odaklıdır.",
    )

    H(doc, "2.1 Cmdlet anatomisi", 2)
    CODE(
        doc,
        """# Fiil-İsim  -Parametre  Değer
Get-MgUser -UserId "ayse.yilmaz@contoso.com"

# Yardım
Get-Help Get-MgUser -Full
Get-Command *Mailbox*          # isimde Mailbox geçen cmdlet'ler
Get-Member                     # bir nesnenin property/method'ları
Get-MgUser -Top 1 | Get-Member""",
    )
    P(
        doc,
        "Fiiller: Get (oku), New/Add (oluştur), Set/Update (değiştir), Remove (sil), "
        "Enable/Disable, Connect/Disconnect. M365’de aynı iş bazen Graph’ta Update-MgUser, "
        "Exchange’de Set-Mailbox’tır — çünkü farklı API yüzeyleridir.",
    )

    H(doc, "2.2 Pipeline ve filtre", 2)
    CODE(
        doc,
        """# Soldaki çıktı sağdakinin girdisi olur
Get-MgUser -All -Property "displayName,userPrincipalName,accountEnabled,department" |
  Where-Object { $_.AccountEnabled -and $_.Department -eq "Operasyon" } |
  Select-Object DisplayName, UserPrincipalName |
  Sort-Object DisplayName |
  Export-Csv "$env:TEMP\\operasyon_kullanicilar.csv" -NoTypeInformation -Encoding UTF8

# Kısa alias'lar (okunabilirlikte dikkat)
# % = ForEach-Object,  ? = Where-Object
Get-MgUser -Top 20 | ? AccountEnabled | % DisplayName""",
    )
    TIP(
        doc,
        "Where-Object istemci tarafında süzer (önce veriyi çeker). Mümkünse Graph/EXO’nun "
        "-Filter parametresiyle sunucu tarafında filtreleyin; büyük kiracıda fark dakikalarcadır.",
    )

    H(doc, "2.3 Değişkenler, hashtable, splatting", 2)
    CODE(
        doc,
        """$upn = "ayse.yilmaz@contoso.com"
$user = Get-MgUser -UserId $upn
$user.DisplayName

# Hashtable — PasswordProfile gibi iç içe özellikler
$PasswordProfile = @{
  Password                      = "GeciciSifre!123"
  ForceChangePasswordNextSignIn = $true
}

# Splatting — uzun komutları okunur kılar
$params = @{
  UserId          = $upn
  JobTitle        = "Uzman"
  Department      = "Operasyon"
  OfficeLocation  = "İstanbul"
}
Update-MgUser @params""",
    )

    H(doc, "2.4 Hata yönetimi (operasyonel minimum)", 2)
    CODE(
        doc,
        """try {
  Get-MgUser -UserId "yok@contoso.com" -ErrorAction Stop
} catch {
  Write-Warning "Kullanıcı alınamadı: $($_.Exception.Message)"
}

# Son hata detayı
$Error[0] | Format-List * -Force""",
    )

    EX(
        doc,
        "PowerShell kasları",
        [
            "Get-Process | Get-Member çalıştırıp 5 property okuyun (yerel ısınma).",
            "1..5 | ForEach-Object { \"Satir $_\" } çıktısını anlayın.",
            "Bir diziyi Export-Csv ile kaydedip Import-Csv ile geri okuyun.",
        ],
    )

    # ----- BÖLÜM 3 -----
    H(doc, "Bölüm 3. Modüller, kurulum ve ilk bağlantı", 1)
    OBJ(
        doc,
        [
            "Doğru modern modülleri kurmak",
            "Graph, Exchange, Teams, PnP’ye bağlanmak",
            "Bağlantıyı doğrulayıp güvenli kapatmak",
        ],
    )

    H(doc, "3.1 Modül haritası", 2)
    CODE(
        doc,
        """İş                          Modül                            Bağlantı
-------------------------  -------------------------------  --------------------
Kullanıcı/grup/lisans/rol  Microsoft.Graph                  Connect-MgGraph
Exchange Online            ExchangeOnlineManagement         Connect-ExchangeOnline
Teams                      MicrosoftTeams                   Connect-MicrosoftTeams
SharePoint/OneDrive        PnP.PowerShell (veya SPO)        Connect-PnPOnline
Uyumluluk (ileri)          ExchangeOnlineManagement         Connect-IPPSSession

ESKİ (KULLANMAYIN)         MSOnline, AzureAD, AzureADPreview""",
    )

    H(doc, "3.2 Kurulum", 2)
    CODE(
        doc,
        """$PSVersionTable
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted

Install-Module Microsoft.Graph -Scope CurrentUser -Force -AllowClobber
Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force
Install-Module MicrosoftTeams -Scope CurrentUser -Force
Install-Module PnP.PowerShell -Scope CurrentUser -Force

Get-Module Microsoft.Graph*,ExchangeOnlineManagement,MicrosoftTeams,PnP.PowerShell -ListAvailable |
  Select-Object Name, Version | Sort-Object Name | Format-Table -AutoSize""",
    )
    NOTE(
        doc,
        "Microsoft.Graph büyüktür; ilk kurulum zaman alır. Sadece kullanıcı yönetecekseniz "
        "Microsoft.Graph.Authentication + Microsoft.Graph.Users ile başlayabilirsiniz.",
    )

    H(doc, "3.3 İlk Graph bağlantısı (bugün atacağınız en önemli adım)", 2)
    CODE(
        doc,
        """Connect-MgGraph -Scopes "User.Read.All","Organization.Read.All" -NoWelcome
Get-MgContext | Format-List
Get-MgOrganization | Select-Object DisplayName, Id
Get-MgUser -Top 5 | Select-Object DisplayName, UserPrincipalName
Disconnect-MgGraph""",
    )
    P(
        doc,
        "Tarayıcı açılır, MFA ile oturum açarsınız, istenen izinleri onaylarsınız. "
        "Get-MgContext size hangi hesap ve kiracıda olduğunuzu söyler — her oturum başında bakın. "
        "Yanlış kiracıya komut basmak kariyer değiştiren bir hatadır.",
    )

    H(doc, "3.4 Diğer iş yüklerine bağlantı", 2)
    CODE(
        doc,
        """Connect-ExchangeOnline -ShowBanner:$false
Get-EXOMailbox -ResultSize 5 | Select-Object DisplayName, PrimarySmtpAddress
Disconnect-ExchangeOnline -Confirm:$false

Connect-MicrosoftTeams
Get-Team | Select-Object -First 5 DisplayName, GroupId
Disconnect-MicrosoftTeams

Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive
Get-PnPTenantSite | Select-Object -First 5 Url, Title
Disconnect-PnPOnline""",
    )

    EX(
        doc,
        "Bağlantı",
        [
            "Dört modülü kurun; sürüm listesini bir metin dosyasına kaydedin.",
            "Graph’a bağlanıp organizasyon DisplayName’ini not edin.",
            "Bilinçli olarak Disconnect yapın; sonra Get-MgContext’in boş/ hata verdiğini görün.",
        ],
    )

    # ----- BÖLÜM 4 -----
    H(doc, "Bölüm 4. Kimlik doğrulama, scope ve RBAC", 1)
    OBJ(
        doc,
        [
            "Delegated scope ile Application permission farkını açıklamak",
            "Bir cmdlet için gereken izni bulmak",
            "‘Insufficient privileges’ hatasını doğru teşhis etmek",
        ],
    )

    H(doc, "4.1 Scope nedir?", 2)
    P(
        doc,
        "Connect-MgGraph -Scopes ... ile istediğiniz kapıları listelersiniz. Onaylanmayan kapıdan "
        "geçemezsiniz. Bu, Windows’ta ‘yönetici olarak çalıştır’ın daha ince versiyonudur. "
        "Okuma için User.Read.All, yazma için User.ReadWrite.All, lisans SKU listesi için "
        "Organization.Read.All gibi izinler gerekir.",
    )
    CODE(
        doc,
        """# Öğrenme / günlük admin için örnek set
$scopes = @(
  "User.Read.All","User.ReadWrite.All","User.Invite.All",
  "Group.ReadWrite.All","Directory.Read.All","Organization.Read.All",
  "AuditLog.Read.All","Reports.Read.All"
)
Connect-MgGraph -Scopes $scopes -NoWelcome
(Get-MgContext).Scopes

# Cmdlet → izin eşlemesi
Find-MgGraphCommand -Command Get-MgUser | Select-Object -First 1 -ExpandProperty Permissions
Find-MgGraphPermission -SearchString "User" | Select-Object -First 15 Name, PermissionType""",
    )

    H(doc, "4.2 Delegated vs App-only", 2)
    P(
        doc,
        "Delegated: sizin kullanıcınız + sizin rolleriniz + onayladığınız scope’lar. Etkileşimli yönetim. "
        "App-only: bir uygulama kimliği (App Registration) kendi Application permission’larıyla çalışır; "
        "MFA ekranı yoktur. Gece job’ları, CI, RPA için zorunludur. App-only’ye Bölüm 14’te geçersiniz; "
        "şimdilik bilin ki secret’ı scripte yazmak güvenlik olayıdır.",
    )

    H(doc, "4.3 RBAC ile PowerShell ilişkisi", 2)
    P(
        doc,
        "Exchange’de cmdlet görmemeniz çoğu zaman ‘modül bozuk’ değil, rol eksikliğidir. "
        "Graph’ta 403 Insufficient privileges çoğunlukla scope veya Entra rolü eksikliğidir. "
        "Teşhis sırası: (1) Get-MgContext / doğru kiracı mı? (2) Scope listesinde izin var mı? "
        "(3) Hesabın Entra rolü var mı? (4) Admin consent verilmiş mi?",
    )
    WARN(
        doc,
        "Eğitimde bile Global Admin’i günlük profil yapmayın. Ayrı bir ‘break-glass’ hesabı "
        "saklayın; günlük iş için daha dar roller kullanın.",
    )

    EX(
        doc,
        "İzin bilinci",
        [
            "Sadece User.Read.All ile bağlanıp Update-MgUser deneyin; hatayı okuyun.",
            "Find-MgGraphCommand -Command Set-MgUserLicense ile gereken izinleri listeleyin.",
            "Portalda kendi rollerinizi ekran görüntüsü / not olarak kaydedin.",
        ],
    )

    page_break(doc)

    # ##################################################################
    # KISIM II
    # ##################################################################
    H(doc, "KISIM II — Çekirdek yönetim", 1)
    P(
        doc,
        "Şirket yönetiminin omurgası: kullanıcı, lisans, grup. Bu üçü oturmadan iş yükü yönetmek "
        "pürüzlü ve tehlikelidir.",
        italic=True,
    )

    # ----- BÖLÜM 5 -----
    H(doc, "Bölüm 5. Kullanıcı yaşam döngüsü", 1)
    OBJ(
        doc,
        [
            "Kullanıcı envanteri ve güvenli hedefleme (UPN/Id)",
            "Oluşturma, güncelleme, parola, oturum düşürme",
            "Soft-delete / restore ve B2B davet",
            "MFA yöntemleri ve Temporary Access Pass",
        ],
    )

    H(doc, "5.1 Kullanıcıyı okumak", 2)
    P(
        doc,
        "Yazmadan önce okumayı ustalaştırın. Büyük kiracıda Get-MgUser -All ağırdır; "
        "-Property ile sadece ihtiyaç duyduğunuz alanları çekin. Hedefleme için DisplayName değil "
        "UPN veya Id kullanın.",
    )
    CODE(
        doc,
        """Connect-MgGraph -Scopes "User.Read.All" -NoWelcome

# Hafif envanter
Get-MgUser -All -Property "id,displayName,userPrincipalName,accountEnabled,department,jobTitle,userType,createdDateTime" |
  Select-Object DisplayName, UserPrincipalName, AccountEnabled, Department, JobTitle, UserType |
  Export-Csv "$env:TEMP\\users.csv" -NoTypeInformation -Encoding UTF8

# Tek kullanıcı
Get-MgUser -UserId "ayse.yilmaz@contoso.com" | Format-List *

# Sunucu tarafı filtre
Get-MgUser -All -Filter "accountEnabled eq true and department eq 'Operasyon'" `
  -Property "displayName,userPrincipalName,jobTitle"

# Misafirler
Get-MgUser -All -Filter "userType eq 'Guest'" |
  Select-Object DisplayName, Mail, ExternalUserState, UserPrincipalName

# Arama (eventual consistency)
Get-MgUser -ConsistencyLevel eventual -CountVariable c -Search '"displayName:Yılmaz"' -All
Write-Host "Toplam: $c" """,
    )

    H(doc, "5.2 Yeni bulut kullanıcısı", 2)
    P(
        doc,
        "New-MgUser Entra’da kimlik oluşturur. Posta kutusu, Teams ve OneDrive ancak uygun lisans "
        "atandıktan ve provision tamamlandıktan sonra hazır olur. UsageLocation (ör. TR) lisansın "
        "ön şartıdır — unutulan en sık hatadır.",
    )
    CODE(
        doc,
        """Connect-MgGraph -Scopes "User.ReadWrite.All" -NoWelcome

$PasswordProfile = @{
  Password = "GeciciSifre!ChangeMe1"
  ForceChangePasswordNextSignIn = $true
}

New-MgUser `
  -DisplayName "Ayşe Yılmaz" -GivenName "Ayşe" -Surname "Yılmaz" `
  -UserPrincipalName "ayse.yilmaz@contoso.com" -MailNickname "ayseyilmaz" `
  -AccountEnabled -PasswordProfile $PasswordProfile -UsageLocation "TR" `
  -Department "Operasyon" -JobTitle "Uzman" -OfficeLocation "İstanbul" `
  -CompanyName "Contoso A.Ş." -PreferredLanguage "tr-TR" `
  -MobilePhone "+905551112233" """,
    )
    NOTE(
        doc,
        "Hibrit (Entra Connect) ortamda bulut-sadece kullanıcı açmak yerine çoğu şirket "
        "on-prem AD’de açıp sync eder. Saf bulut kiracıda New-MgUser doğrudur. Bölüm 15’e bakın.",
    )

    H(doc, "5.3 Güncelleme, kilit, parola, oturum iptali", 2)
    CODE(
        doc,
        """Update-MgUser -UserId "ayse.yilmaz@contoso.com" `
  -JobTitle "Kıdemli Uzman" -Department "Operasyon" -OfficeLocation "Ankara"

Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$false
Update-MgUser -UserId "ayse.yilmaz@contoso.com" -AccountEnabled:$true

Update-MgUser -UserId "ayse.yilmaz@contoso.com" -PasswordProfile @{
  Password = "YeniGecici!789"
  ForceChangePasswordNextSignIn = $true
}

# Çalınmış oturum / işten ayrılma — kritik
Revoke-MgUserSignInSession -UserId "ayse.yilmaz@contoso.com"

# Yönetici (manager) ata
$mgr = Get-MgUser -UserId "mudur@contoso.com"
Set-MgUserManagerByRef -UserId "ayse.yilmaz@contoso.com" `
  -OdataId "https://graph.microsoft.com/v1.0/users/$($mgr.Id)"
Get-MgUserManager -UserId "ayse.yilmaz@contoso.com" """,
    )
    WHY = (
        "Sadece parola değiştirmek yetmez: modern oturumlar refresh token kullanır. "
        "Revoke-MgUserSignInSession token’ları düşürür."
    )
    BOX(doc, "Neden önemli:", WHY, C1)

    H(doc, "5.4 Silme ve geri yükleme", 2)
    CODE(
        doc,
        """Remove-MgUser -UserId "ayse.yilmaz@contoso.com" -Confirm:$false

Get-MgDirectoryDeletedItemAsUser -All |
  Select-Object Id, DisplayName, UserPrincipalName, DeletedDateTime

$d = Get-MgDirectoryDeletedItemAsUser -All |
  Where-Object UserPrincipalName -eq "ayse.yilmaz@contoso.com"
Restore-MgDirectoryDeletedItem -DirectoryObjectId $d.Id
# Kalıcı silme (geri alınamaz):
# Remove-MgDirectoryDeletedItem -DirectoryObjectId $d.Id""",
    )

    H(doc, "5.5 B2B misafir daveti", 2)
    CODE(
        doc,
        """Connect-MgGraph -Scopes "User.Invite.All","Group.ReadWrite.All" -NoWelcome
New-MgInvitation `
  -InvitedUserEmailAddress "kisi@partner.com" `
  -InvitedUserDisplayName "Partner Kişi" `
  -InviteRedirectUrl "https://myapps.microsoft.com" `
  -SendInvitationMessage

Get-MgUser -Filter "mail eq 'kisi@partner.com'" |
  Select-Object DisplayName, UserType, ExternalUserState""",
    )
    WARN(doc, "Misafirleri sınırsız bırakmayın: grup + Conditional Access + periyodik gözden geçirme.")

    H(doc, "5.6 MFA yöntemleri ve TAP", 2)
    CODE(
        doc,
        """$u = "ayse.yilmaz@contoso.com"
Get-MgUserAuthenticationMethod -UserId $u
Get-MgUserAuthenticationPhoneMethod -UserId $u
Get-MgUserAuthenticationMicrosoftAuthenticatorMethod -UserId $u

# Temporary Access Pass — yardım masası altını
New-MgUserAuthenticationTemporaryAccessPassMethod -UserId $u -BodyParameter @{
  LifetimeInMinutes = 60
  IsUsableOnce = $true
}

Get-MgReportAuthenticationMethodUserRegistrationDetail -All |
  Select-Object UserPrincipalName, IsMfaRegistered, MethodsRegistered |
  Export-Csv "$env:TEMP\\mfa.csv" -NoTypeInformation -Encoding UTF8""",
    )

    EX(
        doc,
        "Kullanıcı yaşam döngüsü",
        [
            "Lab’da test1@... oluşturun; UsageLocation verin; AccountEnabled false/true yapın.",
            "Revoke-MgUserSignInSession sonrası kullanıcıdan yeniden oturum açmasını isteyin.",
            "Kullanıcıyı silip recycle bin’den restore edin; Id’nin aynı kaldığını gözlemleyin.",
        ],
    )

    # ----- BÖLÜM 6 -----
    H(doc, "Bölüm 6. Lisans ve servis planları", 1)
    OBJ(
        doc,
        [
            "SKU envanteri ve boş kotayı okumak",
            "Lisans atayıp kaldırmak / yükseltmek",
            "Servis planı disable etmek",
            "Lisanssız aktif hesap raporu üretmek",
        ],
    )
    P(
        doc,
        "Lisans, kullanıcının hangi ürünleri göreceğini belirler. Maliyet ve güvenlik burada kesişir: "
        "ayrılan kişiye lisans bırakmak para yakar; yanlış SKU ise veri erişimini yanlış açar.",
    )

    H(doc, "6.1 SKU okuma", 2)
    CODE(
        doc,
        """Connect-MgGraph -Scopes "Organization.Read.All","User.Read.All" -NoWelcome

Get-MgSubscribedSku | ForEach-Object {
  [PSCustomObject]@{
    SkuPartNumber = $_.SkuPartNumber
    SkuId         = $_.SkuId
    Enabled       = $_.PrepaidUnits.Enabled
    Consumed      = $_.ConsumedUnits
    Available     = $_.PrepaidUnits.Enabled - $_.ConsumedUnits
  }
} | Format-Table -AutoSize

$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
$sku.ServicePlans | Select-Object ServicePlanName, ServicePlanId, ProvisioningStatus |
  Sort-Object ServicePlanName""",
    )
    P(
        doc,
        "Sık SkuPartNumber: SPE_E3, SPE_E5, ENTERPRISEPACK, O365_BUSINESS_PREMIUM, SPB, "
        "POWER_BI_PRO, EXCHANGEENTERPRISE, VISIOCLIENT. İsim benzer; SkuId ile çalışın.",
    )

    H(doc, "6.2 Atama / kaldırma / upgrade", 2)
    CODE(
        doc,
        """$user = "ayse.yilmaz@contoso.com"
Update-MgUser -UserId $user -UsageLocation "TR"
$e3 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3").SkuId
$e5 = (Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E5").SkuId

Set-MgUserLicense -UserId $user -AddLicenses @{SkuId=$e3} -RemoveLicenses @()
# Upgrade
Set-MgUserLicense -UserId $user -AddLicenses @{SkuId=$e5} -RemoveLicenses @($e3)
# Hepsini kaldır
$all = (Get-MgUserLicenseDetail -UserId $user).SkuId
if ($all) { Set-MgUserLicense -UserId $user -AddLicenses @() -RemoveLicenses $all }
Get-MgUserLicenseDetail -UserId $user | Select-Object SkuPartNumber""",
    )

    H(doc, "6.3 Servis planı kapatarak atama", 2)
    CODE(
        doc,
        """$sku = Get-MgSubscribedSku | Where-Object SkuPartNumber -eq "SPE_E3"
$disableNames = @("YAMMER_ENTERPRISE")  # kendi tenant çıktınızdan doğrulayın
$disabled = $sku.ServicePlans |
  Where-Object ServicePlanName -in $disableNames |
  Select-Object -ExpandProperty ServicePlanId

Set-MgUserLicense -UserId $user -AddLicenses @{
  SkuId = $sku.SkuId; DisabledPlans = $disabled
} -RemoveLicenses @()""",
    )

    H(doc, "6.4 Maliyet raporu — lisanssız aktifler", 2)
    CODE(
        doc,
        """Get-MgUser -All -Property "displayName,userPrincipalName,accountEnabled,assignedLicenses,userType" |
  Where-Object { $_.AccountEnabled -and $_.UserType -eq "Member" -and $_.AssignedLicenses.Count -eq 0 } |
  Select-Object DisplayName, UserPrincipalName |
  Export-Csv "$env:TEMP\\lisanssiz.csv" -NoTypeInformation -Encoding UTF8""",
    )

    EX(
        doc,
        "Lisans",
        [
            "Available kotası 0 olan SKU var mı bakın.",
            "Test kullanıcıya lisans atayıp 5 dk sonra Get-EXOMailbox ile kutuyu kontrol edin.",
            "Lisanssız aktif Member CSV’si üretin.",
        ],
    )

    # ----- BÖLÜM 7 -----
    H(doc, "Bölüm 7. Gruplar ve yetki modeli", 1)
    OBJ(
        doc,
        [
            "Security / M365 / Distribution / Dynamic ayrımını yapmak",
            "Graph ile grup ve üyelik yönetmek",
            "Exchange DG oluşturmak",
        ],
    )
    CODE(
        doc,
        """Tür                  Mail   Team/Site   Kullanım
Security             Hayır  Hayır       İzin, CA, RBAC hedefi
Microsoft 365 Group  Evet   Evet        İşbirliği paketi
Distribution (EXO)   Evet   Hayır       Sadece e-posta listesi
Dynamic              Ops.   Ops.        Kural ile otomatik üyelik""",
    )
    CODE(
        doc,
        """Connect-MgGraph -Scopes "Group.ReadWrite.All","User.Read.All" -NoWelcome

New-MgGroup -DisplayName "SG-Operasyon" -MailEnabled:$false `
  -MailNickname "sg-operasyon" -SecurityEnabled

New-MgGroup -DisplayName "Operasyon Ekibi" -MailEnabled -SecurityEnabled `
  -MailNickname "operasyon-ekibi" -GroupTypes @("Unified") -Visibility "Private"

New-MgGroup -DisplayName "DG-Operasyon" -MailEnabled:$false `
  -MailNickname "dg-operasyon" -SecurityEnabled `
  -GroupTypes @("DynamicMembership") `
  -MembershipRule '(user.department -eq "Operasyon")' `
  -MembershipRuleProcessingState "On"

$g = (Get-MgGroup -Filter "displayName eq 'SG-Operasyon'").Id
$u = (Get-MgUser -UserId "ayse.yilmaz@contoso.com").Id
New-MgGroupMember -GroupId $g -DirectoryObjectId $u
Get-MgGroupMember -GroupId $g -All
Remove-MgGroupMemberByRef -GroupId $g -DirectoryObjectId $u

# Exchange DG
Connect-ExchangeOnline -ShowBanner:$false
New-DistributionGroup -Name "Satis-DG" -PrimarySmtpAddress "satis@contoso.com" -Type Distribution
Add-DistributionGroupMember -Identity "Satis-DG" -Member "ayse.yilmaz@contoso.com" """,
    )
    EX(
        doc,
        "Gruplar",
        [
            "Bir SG ve bir Unified grup oluşturup test kullanıcıyı ekleyin/çıkarın.",
            "Departman kuralı olan dinamik grup tasarlayıp MembershipRule’u yazın (lab’da uygulayın).",
            "Bir DG’ye dışarıdan mail açmanın riskini not edin (RequireSenderAuthenticationEnabled).",
        ],
    )

    page_break(doc)

    # ##################################################################
    # KISIM III
    # ##################################################################
    H(doc, "KISIM III — İş yükleri", 1)

    # ----- BÖLÜM 8 -----
    H(doc, "Bölüm 8. Exchange Online", 1)
    OBJ(
        doc,
        [
            "Posta kutusu türlerini ayırt etmek",
            "Shared mailbox ve izinleri yönetmek",
            "Yönlendirme, OOF, alias, kota",
            "Arşiv, litigation hold",
            "Transport kuralı ve message trace",
        ],
    )

    H(doc, "8.1 Bağlan ve envanter çıkar", 2)
    CODE(
        doc,
        """Connect-ExchangeOnline -ShowBanner:$false
Get-EXOMailbox -ResultSize Unlimited |
  Group-Object RecipientTypeDetails | Select-Object Name, Count
Get-EXOMailbox -Identity "ayse.yilmaz@contoso.com" -Properties ArchiveStatus,LitigationHoldEnabled |
  Format-List DisplayName, PrimarySmtpAddress, RecipientTypeDetails, ArchiveStatus, LitigationHoldEnabled
Get-EXOMailboxStatistics -Identity "ayse.yilmaz@contoso.com" |
  Select-Object DisplayName, ItemCount, TotalItemSize, LastLogonTime""",
    )

    H(doc, "8.2 Shared mailbox ve izin modeli", 2)
    P(
        doc,
        "Full Access: kutuyu açar. Send As: gönderen satırında ortak adres görünür. "
        "Send on Behalf: ‘X on behalf of Y’ görünür. Üçünü birbirine karıştırmayın.",
    )
    CODE(
        doc,
        """New-Mailbox -Shared -Name "Destek" -DisplayName "Destek Ortak" `
  -PrimarySmtpAddress "destek@contoso.com"

Add-MailboxPermission -Identity "destek@contoso.com" `
  -User "ayse.yilmaz@contoso.com" -AccessRights FullAccess -InheritanceType All

Add-RecipientPermission -Identity "destek@contoso.com" `
  -Trustee "ayse.yilmaz@contoso.com" -AccessRights SendAs -Confirm:$false

Set-Mailbox -Identity "destek@contoso.com" `
  -GrantSendOnBehalfTo @{Add="mudur@contoso.com"}

Get-MailboxPermission -Identity "destek@contoso.com" |
  Where-Object { -not $_.IsInherited -and $_.User -notlike "NT AUTHORITY*" }""",
    )

    H(doc, "8.3 Yönlendirme, alias, OOF, kota", 2)
    CODE(
        doc,
        """Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress "arsiv@contoso.com" -DeliverToMailboxAndForward:$true
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -ForwardingSmtpAddress $null -DeliverToMailboxAndForward:$false

Set-Mailbox -Identity "ayse.yilmaz@contoso.com" `
  -EmailAddresses @{Add="smtp:ayse@contoso.com.tr"}

Set-MailboxAutoReplyConfiguration -Identity "ayse.yilmaz@contoso.com" `
  -AutoReplyState Enabled `
  -InternalMessage "İzinliyim." -ExternalMessage "Out of office." -ExternalAudience All

Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -UseDatabaseQuotaDefaults:$false `
  -IssueWarningQuota 45GB -ProhibitSendQuota 49GB -ProhibitSendReceiveQuota 50GB""",
    )
    WARN(doc, "Dış SMTP yönlendirme veri sızıntısı yoludur; politika ile kısıtlayın ve audit edin.")

    H(doc, "8.4 Arşiv ve hold", 2)
    CODE(
        doc,
        """Enable-Mailbox -Identity "ayse.yilmaz@contoso.com" -Archive
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -LitigationHoldEnabled:$true
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -SingleItemRecoveryEnabled:$true
Set-Mailbox -Identity "ayse.yilmaz@contoso.com" -RetainDeletedItemsFor 30""",
    )

    H(doc, "8.5 Transport kuralları ve izleme", 2)
    CODE(
        doc,
        """New-TransportRule -Name "Dis-Kaynak-Uyari" -FromScope NotInOrganization `
  -ApplyHtmlDisclaimerLocation Prepend `
  -ApplyHtmlDisclaimerText "<b>DİKKAT:</b> Kurum dışı e-posta." `
  -ApplyHtmlDisclaimerFallbackAction Wrap

New-TransportRule -Name "Block-Risky-Ext" `
  -AttachmentExtensionMatchesWords "exe","bat","cmd","js","vbs" `
  -RejectMessageReasonText "Ek türüne izin yok." -RejectMessageEnhancedStatusCode "5.7.1"

Get-TransportRule | Select-Object Name, State, Priority | Sort-Object Priority

Get-MessageTrace -RecipientAddress "ayse.yilmaz@contoso.com" `
  -StartDate (Get-Date).AddDays(-2) -EndDate (Get-Date) |
  Select-Object Received, SenderAddress, Subject, Status""",
    )
    TIP(doc, "Yeni kuralı önce kısıtlı şartlarla veya Audit modunda düşünün; şirket genelini kesmeyin.")

    H(doc, "8.6 Oda posta kutusu", 2)
    CODE(
        doc,
        """New-Mailbox -Room -Name "A101" -PrimarySmtpAddress "a101@contoso.com"
Set-CalendarProcessing -Identity "a101@contoso.com" `
  -AutomateProcessing AutoAccept -BookingWindowInDays 180 -MaximumDurationInMinutes 480""",
    )

    EX(
        doc,
        "Exchange",
        [
            "Shared kutu açıp bir kullanıcıya Full Access + Send As verin; Outlook’tan doğrulayın.",
            "Test kullanıcıda OOF aç/kapatın.",
            "Kendi adresinize test mail atıp MessageTrace’te Status izleyin.",
        ],
    )

    # ----- BÖLÜM 9 -----
    H(doc, "Bölüm 9. SharePoint Online ve OneDrive", 1)
    OBJ(
        doc,
        [
            "Site envanteri ve kota",
            "Site oluşturma ve paylaşım seviyesi",
            "İşten ayrılmada OneDrive erişimi açma",
        ],
    )
    CODE(
        doc,
        """Connect-PnPOnline -Url "https://contoso-admin.sharepoint.com" -Interactive

Get-PnPTenantSite -Detailed |
  Select-Object Url, Title, Template, StorageUsageCurrent, StorageQuota |
  Sort-Object StorageUsageCurrent -Descending |
  Export-Csv "$env:TEMP\\spo.csv" -NoTypeInformation -Encoding UTF8

New-PnPSite -Type CommunicationSite -Title "Operasyon Portal" `
  -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -Owner "admin@contoso.com" -Lcid 1055

Set-PnPTenantSite -Url "https://contoso.sharepoint.com/sites/OperasyonPortal" `
  -StorageQuota 102400 -SharingCapability ExternalUserSharingOnly

# OneDrive — ayrılan kişi
Request-PnPPersonalSite -UserEmails "ayrilacak@contoso.com"
$od = "https://contoso-my.sharepoint.com/personal/ayrilacak_contoso_com"
Set-PnPTenantSite -Url $od -Owners "mudur@contoso.com","admin@contoso.com" """,
    )
    EX(
        doc,
        "SharePoint/OneDrive",
        [
            "Tenant site CSV’si alın; en çok depolama kullanan 5 siteyi not edin.",
            "Lab iletişim sitesi oluşturun; SharingCapability’yi bilinçli seçin.",
            "Test kullanıcının OneDrive URL kalıbını yazın.",
        ],
    )

    # ----- BÖLÜM 10 -----
    H(doc, "Bölüm 10. Microsoft Teams", 1)
    OBJ(
        doc,
        [
            "Ekip oluşturup üye/kanal yönetmek",
            "Ekibin aslında M365 grubu olduğunu bilmek",
            "Arşivleme",
        ],
    )
    CODE(
        doc,
        """Connect-MicrosoftTeams
$team = New-Team -DisplayName "Operasyon" -MailNickName "operasyon-teams" `
  -Visibility Private -Owner "admin@contoso.com"
Add-TeamUser -GroupId $team.GroupId -User "ayse.yilmaz@contoso.com" -Role Member
Add-TeamUser -GroupId $team.GroupId -User "mudur@contoso.com" -Role Owner
New-TeamChannel -GroupId $team.GroupId -DisplayName "Gunluk"
Get-TeamUser -GroupId $team.GroupId
Set-Team -GroupId $team.GroupId -AllowGiphy:$false
Set-TeamArchivedState -GroupId $team.GroupId -Archived:$true""",
    )
    NOTE(
        doc,
        "GroupId hem Teams hem Entra grubudur. Üyeliği Graph veya Teams cmdlet’leriyle "
        "yönetebilirsiniz; çift kaynaktan rastgele karıştırmayın, sürecinizi sabitleyin.",
    )
    EX(
        doc,
        "Teams",
        [
            "Private bir team açıp Member ve Owner ekleyin.",
            "Standart kanal oluşturun; Get-TeamChannel ile listeleyin.",
            "Team’i arşivleyip istemci deneyimini gözlemleyin.",
        ],
    )

    page_break(doc)

    # ##################################################################
    # KISIM IV
    # ##################################################################
    H(doc, "KISIM IV — Güvenlik ve görünürlük", 1)

    H(doc, "Bölüm 11. Roller, misafirler, Conditional Access’e bakış", 1)
    OBJ(
        doc,
        [
            "Dizin rolleri envanteri çıkarmak",
            "Role atama/kaldırmanın riskini bilmek",
            "CA politikalarını okumak (yazmadan önce okuma disiplini)",
        ],
    )
    CODE(
        doc,
        """Connect-MgGraph -Scopes "RoleManagement.Read.Directory","Directory.Read.All","Policy.Read.All" -NoWelcome

Get-MgDirectoryRole -All | ForEach-Object {
  $role = $_
  Get-MgDirectoryRoleMember -DirectoryRoleId $role.Id -All | ForEach-Object {
    $upn = $null
    try { $upn = (Get-MgUser -UserId $_.Id -EA Stop).UserPrincipalName } catch {}
    [PSCustomObject]@{ Role = $role.DisplayName; UPN = $upn }
  }
} | Sort-Object Role, UPN

# Role ata (dikkat!)
$template = Get-MgDirectoryRoleTemplate -All | Where-Object DisplayName -eq "User Administrator"
$role = Get-MgDirectoryRole -All | Where-Object RoleTemplateId -eq $template.Id
if (-not $role) { $role = New-MgDirectoryRole -RoleTemplateId $template.Id }
$user = Get-MgUser -UserId "helpdesk@contoso.com"
New-MgDirectoryRoleMemberByRef -DirectoryRoleId $role.Id `
  -OdataId "https://graph.microsoft.com/v1.0/directoryObjects/$($user.Id)"

# CA — önce oku
Get-MgIdentityConditionalAccessPolicy -All |
  Select-Object DisplayName, State, Id | Format-Table -AutoSize""",
    )
    WARN(doc, "CA yazmak kilitleme riski taşır. Break-glass hesapları CA dışında tutun; değişiklikleri lab’da prova edin.")

    H(doc, "Bölüm 12. Denetim, izleme ve raporlama", 1)
    OBJ(
        doc,
        [
            "Sign-in ve directory audit okumak",
            "Unified Audit Log aramak",
            "Kullanım raporlarını CSV almak",
        ],
    )
    CODE(
        doc,
        """Connect-MgGraph -Scopes "AuditLog.Read.All","Reports.Read.All" -NoWelcome

Get-MgAuditLogSignIn -Top 50 `
  -Filter "createdDateTime ge $((Get-Date).AddDays(-1).ToString('yyyy-MM-ddTHH:mm:ssZ'))" |
  Select-Object CreatedDateTime, UserPrincipalName, AppDisplayName, IpAddress,
    @{N="Error";E={$_.Status.ErrorCode}}

Connect-ExchangeOnline -ShowBanner:$false
Search-UnifiedAuditLog -StartDate (Get-Date).AddDays(-3) -EndDate (Get-Date) `
  -Operations UserLoggedIn,FileDownloaded,AddMemberToGroup -ResultSize 1000 |
  Select-Object CreationDate, UserIds, Operations, ObjectId |
  Export-Csv "$env:TEMP\\audit.csv" -NoTypeInformation -Encoding UTF8

Get-MgReportOffice365ActiveUserDetail -Period D30 -OutFile "$env:TEMP\\o365_active.csv"
Get-MgReportMailboxUsageDetail -Period D30 -OutFile "$env:TEMP\\mailbox_usage.csv"
Get-MgReportOneDriveUsageAccountDetail -Period D30 -OutFile "$env:TEMP\\onedrive.csv"
Get-MgReportTeamsUserActivityUserDetail -Period D30 -OutFile "$env:TEMP\\teams.csv" """,
    )
    EX(
        doc,
        "Görünürlük",
        [
            "Son 24 saatin sign-in’lerinden ErrorCode -ne 0 olanları filtreleyin.",
            "Kendi UPN’iniz için Unified Audit’te UserLoggedIn arayın.",
            "D30 aktif kullanıcı CSV’sini Excel’de açıp lisanslı ama inaktif hesapları düşünün.",
        ],
    )

    page_break(doc)

    # ##################################################################
    # KISIM V
    # ##################################################################
    H(doc, "KISIM V — İleri seviye", 1)

    H(doc, "Bölüm 13. Toplu işlem, CSV ve script disiplini", 1)
    OBJ(
        doc,
        [
            "CSV ile güvenli toplu kullanıcı açmak",
            "try/catch ve loglama alışkanlığı",
            "Pilot → üretim disiplinini uygulamak",
        ],
    )
    P(
        doc,
        "Toplu işlem gücüdür; aynı zamanda toplu hatadır. Kural: önce 2 satır pilot, sonra tam dosya. "
        "Her satır try/catch içinde; başarı/hata ayrı log.",
    )
    CODE(
        doc,
        """# CSV: DisplayName,UserPrincipalName,Department,JobTitle,SkuPartNumber
Connect-MgGraph -Scopes "User.ReadWrite.All","Organization.Read.All" -NoWelcome
$skus = Get-MgSubscribedSku
$logOk = @(); $logFail = @()

Import-Csv "C:\\Temp\\yeni_kullanicilar.csv" | ForEach-Object {
  $row = $_
  $nick = ($row.UserPrincipalName -split "@")[0] -replace "[^a-zA-Z0-9]"
  try {
    $u = New-MgUser -DisplayName $row.DisplayName -UserPrincipalName $row.UserPrincipalName `
      -MailNickname $nick -AccountEnabled -UsageLocation "TR" `
      -Department $row.Department -JobTitle $row.JobTitle `
      -PasswordProfile @{Password="GeciciSifre!123"; ForceChangePasswordNextSignIn=$true} `
      -ErrorAction Stop
    $sid = ($skus | Where-Object SkuPartNumber -eq $row.SkuPartNumber).SkuId
    if ($sid) { Set-MgUserLicense -UserId $u.Id -AddLicenses @{SkuId=$sid} -RemoveLicenses @() }
    $logOk += $row.UserPrincipalName
  } catch {
    $logFail += "$($row.UserPrincipalName) :: $($_.Exception.Message)"
  }
}
$logOk   | Set-Content "$env:TEMP\\bulk_ok.txt"
$logFail | Set-Content "$env:TEMP\\bulk_fail.txt"
Write-Host "OK: $($logOk.Count)  FAIL: $($logFail.Count)" """,
    )

    H(doc, "Bölüm 14. App-only otomasyon ve sertifika", 1)
    OBJ(
        doc,
        [
            "App-only bağlantının ne zaman gerektiğini bilmek",
            "Sertifika ile Graph/EXO bağlantı iskeletini kurmak",
            "Secret’ı koda gömme hatasından kaçınmak",
        ],
    )
    P(
        doc,
        "Entra ID → App registrations → New registration. API permissions’da Application tipinde "
        "User.Read.Write.All vb. ekleyip Grant admin consent. Certificates & secrets altında "
        "sertifika yükleyin (secret yerine tercih edin). App’e rol atamak için "
        "bazen Entra rol assignment gerekir.",
    )
    CODE(
        doc,
        """$tenantId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$clientId = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
$thumb    = "ABCDEF1234567890ABCDEF1234567890ABCDEF12"

Connect-MgGraph -TenantId $tenantId -ClientId $clientId `
  -CertificateThumbprint $thumb -NoWelcome

Connect-ExchangeOnline -AppId $clientId -CertificateThumbprint $thumb `
  -Organization "contoso.onmicrosoft.com" -ShowBanner:$false""",
    )
    WARN(doc, "Client secret’ı Git’e commit etmeyin. Certificate + Key Vault / secure pipeline kullanın.")

    H(doc, "Bölüm 15. Hibrit kimlik notları ve sınırlar", 1)
    P(
        doc,
        "Birçok şirket hâlâ on-prem Active Directory + Entra Connect kullanır. Bu durumda:",
    )
    bullets(
        doc,
        [
            "Kaynak gerçeklik (source of authority) çoğu kullanıcı özelliği için on-prem’dir.",
            "UPN, displayName gibi alanları bulutta Update-MgUser ile değiştirmeye çalışmak hata verebilir.",
            "Lisans, bulut grupları, çoğu MFA ve CA ayarı bulutta kalır.",
            "Offboarding hem AD hesabını (disable) hem bulut oturumunu (revoke) hem Exchange/OneDrive’ı kapsar.",
            "PowerShell tarafında AD modülü + Graph + EXO birlikte düşünülür.",
        ],
    )
    TIP(doc, "Kiracınız hibrit mi? Get-MgUser’da OnPremisesSyncEnabled $true olanlara bakın.")
    CODE(
        doc,
        """Get-MgUser -All -Property "displayName,userPrincipalName,onPremisesSyncEnabled" |
  Group-Object OnPremisesSyncEnabled | Select-Object Name, Count""",
    )

    page_break(doc)

    # ##################################################################
    # KISIM VI
    # ##################################################################
    H(doc, "KISIM VI — Ustalık", 1)

    H(doc, "Bölüm 16. Onboarding ve Offboarding runbook’ları", 1)
    P(
        doc,
        "Olgun operasyon, komut ezberinden runbook’a geçer. Aşağıdakiler şablondur; "
        "şirket politikanıza göre onay kapıları (ITSM ticket, yönetici onayı) ekleyin.",
    )

    H(doc, "16.1 Onboarding sırası (neden bu sıra?)", 2)
    bullets(
        doc,
        [
            "1) Kimlik oluştur (New-MgUser) — henüz lisans yok",
            "2) UsageLocation — lisansın ön şartı",
            "3) Lisans ata — Exchange/Teams/OneDrive provision tetiklenir",
            "4) Gruplar — erişim ve lisans grubu",
            "5) Teams / shared mailbox / ek izinler",
            "6) Doğrulama checklist (oturum, mail, MFA kayıt)",
        ],
    )
    CODE(
        doc,
        """$upn="yeni@contoso.com"; $skuName="SPE_E3"; $groupName="SG-Operasyon"
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Organization.Read.All" -NoWelcome
New-MgUser -DisplayName "Yeni Calisan" -UserPrincipalName $upn -MailNickname "yeni" `
  -AccountEnabled -UsageLocation "TR" -Department "Operasyon" `
  -PasswordProfile @{Password="GeciciSifre!123"; ForceChangePasswordNextSignIn=$true}
$sku=(Get-MgSubscribedSku | Where-Object SkuPartNumber -eq $skuName).SkuId
Set-MgUserLicense -UserId $upn -AddLicenses @{SkuId=$sku} -RemoveLicenses @()
$g=(Get-MgGroup -Filter "displayName eq '$groupName'").Id
New-MgGroupMember -GroupId $g -DirectoryObjectId (Get-MgUser -UserId $upn).Id
Write-Host "Onboarding OK: $upn — MFA ve mailbox provision'ı doğrula" """,
    )

    H(doc, "16.2 Offboarding sırası (güvenlik önce, maliyet sonra)", 2)
    bullets(
        doc,
        [
            "1) Revoke-MgUserSignInSession — token düşür",
            "2) AccountEnabled $false — yeni oturum engel",
            "3) Grup üyeliklerini temizle (dinamikler kurala bırakılır)",
            "4) Exchange: gerekirse hold; shared’a çevir; yöneticiye Full Access",
            "5) OneDrive: yöneticiyi owner yap",
            "6) Lisansları kaldır",
            "7) Politika süresi sonra sil / inactive mailbox",
        ],
    )
    CODE(
        doc,
        """$upn="ayrilacak@contoso.com"; $manager="mudur@contoso.com"
Connect-MgGraph -Scopes "User.ReadWrite.All","Group.ReadWrite.All","Organization.Read.All" -NoWelcome
Connect-ExchangeOnline -ShowBanner:$false
Revoke-MgUserSignInSession -UserId $upn
Update-MgUser -UserId $upn -AccountEnabled:$false
$uid=(Get-MgUser -UserId $upn).Id
Get-MgUserMemberOf -UserId $upn -All | ForEach-Object {
  if ($_.AdditionalProperties["@odata.type"] -eq "#microsoft.graph.group") {
    try { Remove-MgGroupMemberByRef -GroupId $_.Id -DirectoryObjectId $uid } catch {}
  }
}
Set-Mailbox -Identity $upn -Type Shared
Add-MailboxPermission -Identity $upn -User $manager -AccessRights FullAccess -InheritanceType All
$lic=(Get-MgUserLicenseDetail -UserId $upn).SkuId
if ($lic) { Set-MgUserLicense -UserId $upn -AddLicenses @() -RemoveLicenses $lic }
Write-Host "Offboarding cekirdegi tamam — OneDrive owner + legal hold dogrula" """,
    )

    H(doc, "Bölüm 17. Operasyon checklist’i ve bitirme projesi", 1)
    H(doc, "17.1 Ritim", 2)
    CODE(
        doc,
        """Günlük   Yardım masası (parola/TAP/MFA), kritik mail kesintisi izi
Haftalık Lisanssız aktifler, silinen kullanıcılar, yeni rol atamaları
Aylık    SKU kota, D30 kullanım raporları, Guest gözden geçirme,
         transport rule sahipleri, privileged role review
Çeyrek   CA politika review, naming/expiration policy, break-glass testi""",
    )

    H(doc, "17.2 Bitirme projesi (mezuniyet)", 2)
    P(doc, "Lab kiracıda uçtan uca şunları yapıp bir runbook.md / Word’e belgele yin:", size=10)
    bullets(
        doc,
        [
            "3 kullanıcıyı CSV ile oluştur + lisansla + SG’ye ekle",
            "Bir shared mailbox + Full Access/Send As",
            "Bir transport kuralı (lab uyarısı) + MessageTrace kanıtı",
            "Bir team + kanal",
            "Bir kullanıcıyı offboarding runbook’u ile kapat",
            "Admin rol envanteri CSV + lisanssız aktif CSV + D30 aktif kullanıcı CSV",
            "Tüm adımları hangi scope/rol ile yaptığınızı yazın",
        ],
    )
    P(
        doc,
        "Bunu tamamladıysanız: Microsoft 365 kullanan bir şirketi PowerShell ile yönetmek için "
        "başlangıçtan ileri seviyeye giden omurgaya sahipsiniz. Bundan sonrası şirket politikanıza "
        "göre derinleşme (Defender, Purview eDiscovery, otomasyon pipeline, hibrit)dır.",
        bold=True,
        size=10.5,
    )

    page_break(doc)

    # ===================== EKLER =====================
    H(doc, "Ek A — Sık SkuPartNumber", 1)
    CODE(
        doc,
        """SPE_E3 / SPE_E5           Microsoft 365 E3 / E5
ENTERPRISEPACK            Office 365 E3
ENTERPRISEPREMIUM         Office 365 E5
O365_BUSINESS_PREMIUM     Microsoft 365 Business Standard
SPB                       Microsoft 365 Business Premium
POWER_BI_PRO              Power BI Pro
PROJECTPREMIUM            Project Plan 5
VISIOCLIENT               Visio Plan 2
EXCHANGESTANDARD          Exchange Online Plan 1
EXCHANGEENTERPRISE        Exchange Online Plan 2""",
    )

    H(doc, "Ek B — Cmdlet sözlüğü", 1)
    table = doc.add_table(rows=1, cols=3)
    table.style = "Table Grid"
    hdr = table.rows[0].cells
    for i, x in enumerate(("Alan", "Cmdlet", "Ne zaman")):
        hdr[i].text = x
        for p in hdr[i].paragraphs:
            for r in p.runs:
                r.bold = True
                r.font.size = Pt(8)
    rows = [
        ("Graph", "Connect-MgGraph", "Kimlik oturumu"),
        ("Graph", "Get/New/Update/Remove-MgUser", "Kullanıcı CRUD"),
        ("Graph", "Revoke-MgUserSignInSession", "Oturum düşür"),
        ("Graph", "Set-MgUserLicense", "Lisans"),
        ("Graph", "Get-MgSubscribedSku", "SKU kota"),
        ("Graph", "New-MgGroup / New-MgGroupMember", "Grup"),
        ("Graph", "New-MgInvitation", "B2B"),
        ("Graph", "Get-MgAuditLogSignIn", "Sign-in"),
        ("Graph", "Get-MgReport*", "Kullanım CSV"),
        ("Graph", "Find-MgGraphCommand", "İzin keşfi"),
        ("EXO", "Connect-ExchangeOnline", "Posta oturumu"),
        ("EXO", "Get-EXOMailbox / Set-Mailbox", "PK"),
        ("EXO", "New-Mailbox -Shared", "Ortak kutu"),
        ("EXO", "Add-MailboxPermission", "Full Access"),
        ("EXO", "Add-RecipientPermission", "Send As"),
        ("EXO", "New-TransportRule", "Mail kuralı"),
        ("EXO", "Get-MessageTrace", "İleti izi"),
        ("EXO", "Enable-Mailbox -Archive", "Arşiv"),
        ("EXO", "Search-UnifiedAuditLog", "Denetim"),
        ("Teams", "New-Team / Add-TeamUser", "Ekip"),
        ("SPO", "Connect-PnPOnline", "Site oturumu"),
        ("SPO", "Get/Set-PnPTenantSite", "Site/OneDrive"),
    ]
    for a, c, n in rows:
        cells = table.add_row().cells
        cells[0].text, cells[1].text, cells[2].text = a, c, n
        for c_ in cells:
            for p in c_.paragraphs:
                for r in p.runs:
                    r.font.size = Pt(7.5)

    doc.add_paragraph()
    H(doc, "Ek C — Hata sözlüğü", 1)
    CODE(
        doc,
        """Belirti                              İlk bakılacaklar
----------------------------------  ----------------------------------------------
Insufficient privileges (403)       Scope? Entra rolü? Admin consent?
Cmdlet bulunamadı                   Modül import? Doğru yüzey (Graph vs EXO)?
UsageLocation / license error       Update-MgUser -UsageLocation "TR"
Mailbox yok                         Lisans + provision gecikmesi (5-15 dk)
Filter parse error                  OData tırnak: "displayName eq 'Ayşe'"
MessageTrace boş                    Zaman penceresi / gecikme / 10 gün sınırı
Değişiklik görünmüyor               Cache; yeni oturum; Teams client restart
On-prem attribute update fail       Hibrit source of authority (Bölüm 15)""",
    )

    H(doc, "Ek D — Resmi öğrenme kaynakları", 1)
    bullets(
        doc,
        [
            "Microsoft Graph PowerShell SDK — learn.microsoft.com/powershell/microsoftgraph",
            "Exchange Online PowerShell — learn.microsoft.com/powershell/exchange",
            "Teams PowerShell — learn.microsoft.com/microsoftteams/teams-powershell-overview",
            "PnP PowerShell — pnp.github.io/powershell",
            "Graph permissions reference — learn.microsoft.com/graph/permissions-reference",
        ],
        size=9.5,
    )

    P(
        doc,
        "\n— Son —\nBu eğitim kitabı Contoso örnekleriyle şirket kiracı yönetimini baştan ileri seviyeye "
        "taşır. Üretimde her komutu kendi değişim yönetiminizden geçirin; cmdlet ve izinler zamanla "
        "güncellenir. İyi operasyonlar.",
        size=10,
        italic=True,
        color=MUTED,
    )

    doc.save(OUTPUT)
    print("Saved", OUTPUT, "paragraphs~", len(doc.paragraphs))


if __name__ == "__main__":
    build()
