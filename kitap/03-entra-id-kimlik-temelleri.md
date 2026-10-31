# Bölüm 3 — Kimlik Temelleri: Microsoft Entra ID

## 3.1 Neden kimlik her şeyin merkezinde?

Microsoft 365’te neredeyse her kapı **kimlikle** açılır. Yanlış kimlik modeli = yanlış güvenlik, yanlış grup, yanlış Teams, yanlış lisans.

**Entra ID** (eski Azure Active Directory), bulut dizin hizmetidir. Şunları tutar:

- Kullanıcılar (members) ve misafirler (guests)
- Gruplar (security, Microsoft 365, dinamik)
- Uygulama kayıtları / kurumsal uygulamalar
- Cihaz nesneleri
- Roller ve Conditional Access politikaları

Diyagram: `diyagramlar/03-kimlik-merkezi.svg`

## 3.2 Kullanıcı nesnesi anatomisi

Kritik alanlar:

| Alan | Anlamı |
|------|--------|
| **UPN** | Giriş adı (`ali@kuzeylojistik.com`) |
| **mail** | SMTP adresi (Exchange ile hizalı olmalı) |
| **objectId** | Benzersiz GUID — otomasyonda buna güvenin |
| **onPremisesSyncEnabled** | Hibrit senkron mu? |
| **accountEnabled** | Hesap açık mı? |
| **assignedLicenses** | Hangi SKU’lar |

**Pratik kural:** Görünen ad değişebilir; otomasyonda `objectId` veya sabit bir employeeId kullanın.

## 3.3 Grup türleri — karıştırmayın

| Tür | Amaç | E-posta? | Teams? |
|-----|------|----------|--------|
| **Security group** | Erişim / lisans / CA ataması | Genelde hayır | Hayır |
| **Microsoft 365 group** | İşbirliği nesnesi | Evet | Evet (ekip bağlanabilir) |
| **Distribution list** | Sadece mail dağıtımı | Evet | Hayır |
| **Mail-enabled security** | Hem mail hem ACL | Evet | Hayır |
| **Dinamik grup** | Kurala göre üyelik | Türe bağlı | Türe bağlı |

Diyagram: `diyagramlar/03-grup-turleri.svg`

### Ne zaman hangisi?

- “Satış klasörüne erişim” → Security group
- “Proje ekibi + dosya + plan” → Microsoft 365 group (+ Teams)
- “Tüm şirkete duyuru” → Distribution list veya M365 group (moderasyonla)
- “İstanbul ofisindeki herkes” → Dinamik güvenlik grubu (`city -eq "Istanbul"`)

## 3.4 RBAC: En az yetki ilkesi

**Global Administrator** her şeyi yapar — bu yüzden günlük iş için kullanılmaz.

Önerilen yaklaşım:

1. **Break-glass** Global Admin (2 adet, MFA’lı, CA muaf ama izlenen)
2. Günlük iş için **granüler roller**: User Administrator, Exchange Administrator, Helpdesk Administrator, Privileged Role Administrator…
3. Mümkünse **Privileged Identity Management (PIM)** ile zaman sınırlı yükseltme (P2)

## 3.5 Kimlik doğrulama evrimi

```
Parola  →  MFA  →  Passwordless (FIDO2 / Authenticator passwordless)  →  Conditional Access ile bağlama
```

**Conditional Access (CA)** = “Eğer X ise, Y iste / engelle”.

Örnek politika iskeleti (KuzeyLojistik):

| İsim | Koşul | Denetim |
|------|-------|---------|
| CA-Base-MFA | Tüm kullanıcılar (break-glass hariç) | MFA zorunlu |
| CA-Block-Legacy | Exchange ActiveSync / basic auth | Engelle |
| CA-Admin-PhishingResistant | Admin rolleri | Phishing-resistant MFA |
| CA-Guest-Restrict | Misafirler | Belirli bulut uygulamaları |

Diyagram: `diyagramlar/03-conditional-access-akisi.svg`

## 3.6 Misafir erişimi (B2B)

Dış danışmanı “tam kullanıcı + lisans” yapmak pahalı ve risklidir. **B2B guest** ile kendi kimliğiyle gelir; sizin kaynaklarınıza sınırlı erişir.

Kontrol listesi:

- Misafir davetini kim yapabilir?
- Misafirler Teams’te ne görebilir? (org-wide ayarlar)
- Misafir erişim gözden geçirmesi (access review) var mı?

## 3.7 Case Study 3-A — “Herkes Global Admin”

**Olay:** 8 kişilik IT ekibinin hepsi Global Admin. Stajyer yanlışlıkla bir CA politikasını sildi; yarım gün kilit.  
**Kök neden:** Rol hijyeni yok.  
**Düzeltme:** Rolleri ayır, PIM aç, break-glass’ı CA dışında ama alarmla izle.

## 3.8 Case Study 3-B — Dinamik grup patlaması

HR “Department” alanını boş bıraktığı için dinamik grup 0 kişi döndü; lisans ataması durdu.  
**Ders:** Dinamik grup = veri kalitesi bağımlılığı. Attribute governance şart.

## 3.9 Laboratuvar 3

1. 5 test kullanıcısı oluşturun (farklı department).
2. Bir security group ve bir M365 group oluşturun; farkı Teams’te gözlemleyin.
3. Basit bir CA politikası tasarlayın (report-only modda başlatın!).
4. Bir misafir davet edin; hangi kaynaklara eriştiğini yazın.

## 3.10 Kontrol listesi

- [ ] UPN / objectId / lisans ilişkisini biliyorum
- [ ] Grup türlerini senaryoya göre seçebiliyorum
- [ ] Global Admin’i günlük işte kullanmama gerekçemi savundum
- [ ] CA’nın “koşul → denetim” modelini çizdim

> **Sonraki:** [Bölüm 4 — Exchange Online](04-exchange-online.md)


## 3.11 Derinleşme: Kimlik yaşam döngüsü (Joiner–Mover–Leaver)

Kurumsal kimlik yönetimi üç fiille özetlenir:

| Aşama | Tetikleyici | M365 etkisi |
|-------|-------------|-------------|
| **Joiner** | İşe alım | Hesap, lisans, grup, MFA kaydı, mailbox |
| **Mover** | Departman / rol değişimi | Dinamik grup, lisans, SPO/Teams erişimi |
| **Leaver** | İşten ayrılma | Disable, oturum revoke, transfer, hold kararı |

**Anti-pattern:** HR “Excel’den haber verir”, IT üç gün sonra bakar.  
**İyi pratik:** HR sistemi → (mümkünse) otomatik provision; olmazsa aynı gün SLA’li runbook.

### Attribute sözleşmesi

Dinamik grup ve lisans otomasyonu şu alanlara bağımlıdır:

- `department`, `jobTitle`, `companyName`, `officeLocation` / `city`
- `employeeId` (sabit anahtar)
- `usageLocation` (lisans için kritik!)

`usageLocation` boşsa lisans ataması sessizce başarısız olabilir. Joiner checklist’ine yazın.

## 3.12 Uygulama kimlikleri ve consent

Kullanıcılar “bu uygulama posta kutunuza erişmek istiyor” diye consent verebilir. Tenant’ta:

- Kullanıcı consent’i kısıtlayın (admin consent workflow)
- Publisher verification olmayan uygulamaları gözden geçirin
- Düzenli olarak **Enterprise applications** envanteri çıkarın

Bu, Bölüm 8’deki app-only otomasyonun güvenlik kardeşidir.


## 3.13 Derinleşme: Kimlik doğrulama yöntemleri karşılaştırması

| Yöntem | Güç | Kullanılabilirlik | Tipik kullanım |
|--------|-----|-------------------|----------------|
| Parola + SMS MFA | Zayıf-orta | Yüksek | Miras / geçiş dönemi |
| Authenticator push (number matching) | Orta-iyi | Yüksek | Genel çalışan |
| TOTP (Authenticator) | Orta-iyi | Yüksek | Alternatif |
| FIDO2 güvenlik anahtarı | Çok iyi | Orta | Admin / VIP |
| Windows Hello for Business | Çok iyi | Yüksek (kurumsal PC) | Ofis cihazları |
| Sertifika tabanlı | İyi | Orta | Özel senaryolar |
| Temporary Access Pass | Orta | Geçici | Onboarding / kayıp cihaz |

**KuzeyLojistik politikası (örnek):**
- Tüm kullanıcılar: Authenticator number matching zorunlu
- Admin rolleri: FIDO2 veya WHfB + phishing-resistant CA
- SMS yalnızca istisna listesinde (ve süreli)

## 3.14 Password protection ve smart lockout

Entra Password Protection:
- Global banned password list
- Custom banned list (şirket adı, lokasyon, sezon)
- On-prem agent ile hibrit senaryoda AD’ye de uygulanabilir

Smart lockout: Brute-force’a karşı kilitleme; gerçek kullanıcının meşru denemelerini ayırt etmeye çalışır. CA ile birlikte düşünün — “sadece lockout yeter” değildir.

## 3.15 Access reviews ve entitlement (ileri)

Büyük org’da kalıcı grup üyeliği çürür. Access review:
- Misafirleri 90 günde bir gözden geçir
- VIP güvenlik gruplarını 30/60 günde bir
- Teams/M365 group sahiplerine “hâlâ lazım mı?”

Entitlement Management (lisansa bağlı): paket (access package) → onay → süreli erişim → otomatik kaldırma.

## 3.16 Uygulama proxy ve eski uygulamalar

On-prem HTTP uygulamalarını Entra Application Proxy ile yayımlama:
- Modern kimlik + CA cihaz koşulları eski app’e taşınır
- VPN’siz erişim senaryoları
- Connector makinesi yüksek erişilebilir olmalı

## 3.17 Loglar: neyi nereye bakarsınız?

| Soru | Log |
|------|-----|
| Kim, nereden giriş yaptı? | Sign-in logs |
| Hangi uygulama consent aldı? | Audit + enterprise apps |
| Rol ataması ne zaman? | Directory audit |
| Riskli oturum? | Identity Protection / risky sign-ins |
| CA hangi politikayı uyguladı? | Sign-in → Conditional Access sekmesi |

**Pratik:** Bir kullanıcı “giremiyorum” dediğinde önce sign-in log’daki **Failure reason** ve **CA** satırını okuyun; tahmin etmeyin.

## 3.18 Çalışılmış senaryo: Joiner otomasyon tasarımı

Girdiler (HR): employeeId, ad, soyad, department, title, manager, location, startDate  
Çıktılar:
1. UPN üretimi kuralı (`ad.soyad@` + çakışma çözümü)
2. usageLocation = TR
3. Dinamik gruplarla lisans + güvenlik grubu
4. Manager alanı (onay akışları için)
5. TAP veya geçici parola + ilk girişte değişim
6. Welcome mail (Teams/Exchange hazır olduktan sonra)

Hata yolları: HR attribute boş → kuyruk; lisans tükenmiş → alert; UPN çakışması → -2 suffix.
