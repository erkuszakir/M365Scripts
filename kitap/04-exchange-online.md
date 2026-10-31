# Bölüm 4 — Exchange Online: Posta, Takvim ve Alıcılar

## 4.1 Exchange Online ne işe yarar?

Exchange Online (EXO), Microsoft 365’in **posta, takvim, kişi ve ortak klasör** iş yüküdür. Outlook istemcisi sadece bir yüzdür; asıl motor buluttaki posta kutusu veritabanı ve transport pipeline’dır.

Diyagram: `diyagramlar/04-exchange-mimarisi.svg`

## 4.2 Alıcı (recipient) modeli

Exchange’te “her şey bir alıcıdır” zihinsel modeli işinizi kolaylaştırır:

| Alıcı türü | Ne zaman |
|------------|----------|
| **User mailbox** | Normal çalışan |
| **Shared mailbox** | info@, destek@ — giriş hesabı yok (doğru kullanımda) |
| **Room / equipment mailbox** | Toplantı odası, projektör |
| **Microsoft 365 group mailbox** | Grup konuşmaları |
| **Distribution list** | Dağıtım |
| **Mail contact / mail user** | Dış kişi / hibrit senaryolar |
| **Archive mailbox** | Uzun süreli arşiv (In-Place Archive) |

### Shared mailbox altın kuralları

1. Shared mailbox’a **doğrudan giriş (sign-in) açmayın** — güvenlik riski.
2. Yetki: Full Access + Send As (ihtiyaca göre).
3. Lisans: klasik senaryoda lisansı kullanıcıya verirsiniz; shared’ın kendisi çoğu plan’da lisanssızdır (boyut/özellik limitlerine dikkat).

## 4.3 DNS: Postanın omurgası

Alan adı doğrulandıktan sonra dış dünyanın sizi bulması için:

| Kayıt | İş |
|-------|-----|
| **MX** | Gelen posta nereye |
| **Autodiscover CNAME** | Outlook otomatik kurulum |
| **SPF (TXT)** | Hangi sunucular sizin adınıza mail atabilir |
| **DKIM** | İmza doğrulama |
| **DMARC** | SPF/DKIM başarısızsa ne olsun |

**Case Study 4-A — SPF unutuldu**  
KuzeyLojistik pazarlama aracı üçüncü parti relay kullanıyor; SPF’e eklenmemiş. Müşteri spam klasörü.  
**Ders:** Her gönderen sistem envantere + SPF/DKIM’e yazılır.

Diyagram: `diyagramlar/04-email-dns-akisi.svg`

## 4.4 Mail flow (transport)

Mesaj yolu (basitleştirilmiş):

```
Gönderen → Edge/Transport → Malware/Spam filtreleri → Mailbox
```

Yönetici araçları:

- **Accepted domains** — Hangi domain’ler bize ait
- **Connectors** — Hibrit / partner akışı
- **Transport rules (mail flow rules)** — “Konuda ‘gizli’ varsa yöneticiye BCC” gibi
- **Outbound spam policies**

**Dikkat:** Transport rule ile güvenlik politikası yazmak kolaydır ama debug’ı zordur. Az, belgelenmiş, isimli kurallar kullanın.

## 4.5 Takvim ve kaynak posta kutuları

Toplantı odası için:

1. Room mailbox oluştur
2. Booking policy ayarla (otomatik kabul / delege)
3. Capacity ve location alanlarını doldur
4. Teams / Outlook oda listesine ekle

## 4.6 Arşiv, lit hold, retention (kısa köprü)

- **In-Place Archive:** Kullanıcı posta kutusu şişmesin diye ikinci depo
- **Litigation Hold / eDiscovery hold:** Silinse bile sakla (hukuki)
- **Retention policies (Purview):** Organizasyon politikası

Repo’daki `EnableInPlaceArchive` betiği bu kitabın pratik eki gibidir: toplu arşiv açma otomasyonu.

## 4.7 Case Study 4-B — Shared mailbox kaosı

Destek ekibi shared mailbox’a 6 kişinin kendi Outlook profiliyle “ek hesap” olarak girmesini istedi; IT yanlışlıkla shared’a parola verdi. Hesap MFA’sız kaldı, phishing ile ele geçti.  
**Düzeltme:** Sign-in disable, Full Access ile ekle, CA + mailbox audit.

## 4.8 Laboratuvar 4

1. `info@` shared mailbox oluşturun; iki kullanıcıya Full Access verin.
2. Bir room mailbox ile toplantı rezerve edin.
3. SPF/DKIM/DMARC durumunu dokümante edin (tenant’ınıza göre).
4. Basit bir mail flow kuralı yazın: dışarı giden ve ek > 5 MB ise yöneticiye uyarı.

## 4.9 Kontrol listesi

- [ ] Alıcı türlerini senaryoya eşleyebiliyorum
- [ ] Shared mailbox güvenlik modelini anlattım
- [ ] DNS beşlisinin (MX/Autodiscover/SPF/DKIM/DMARC) rolünü biliyorum
- [ ] Transport rule’ları ölçülü kullanacağım

> **Sonraki:** [Bölüm 5 — SharePoint ve OneDrive](05-sharepoint-onedrive.md)

## 4.10 Derinleşme: Autodiscover ve istemci profili

Outlook’un doğru mailbox’ı bulması Autodiscover’a bağlıdır. Yaygın kırılmalar:

- Eski on-prem Autodiscover SCP kaydı (hibrit kalıntısı)
- Yanlış CNAME
- Split-brain DNS

Belirti: sürekli parola soruyor, yanlış sunucuya gidiyor, mobile’da kurulum başarısız.

## 4.11 Dağıtım grupları vs M365 grupları (posta açısından)

Duyuru listelerinde **moderasyon**, **gönderen kısıtı** ve **gizli üyelik** sık ihtiyaçtır. M365 grupları işbirliği yan etkisi getirir (SharePoint); sadece duyuru için DL daha temiz olabilir.

## 4.12 Journaling, transport ve üçüncü parti

Bazı sektörler journaling ister. Alternatif: journal rule / connector ile arşiv ürünü. SPF/DKIM’i üçüncü parti gönderenlerle bozmamaya dikkat.

## 4.13 Mobil cihaz posta politikaları

ActiveSync cihaz politikaları ve modern kimlik doğrulama. Legacy ActiveSync basic auth kapatılmalı; CA ile mobil Outlook zorunluluğu sık tercih.


## 4.14 Derinleşme: Anti-spam / anti-malware politika mimarisi

Katmanlar:

1. **Connection filtering** — IP allow/block, safe list tuzağı (allow list’i şişirmeyin)
2. **Anti-spam policy** — bulk threshold, spam action (MoveToJunky / Quarantine)
3. **Anti-malware** — common attachment filter (`.exe`, `.js` …)
4. **Anti-phishing** — mailbox intelligence, impersonation (user + domain)
5. **Safe Attachments / Safe Links** — Defender for Office 365
6. ** spoof intelligence / DMARC** — kimlik doğrulama

**Politika kapsamı:** Anti-phish’i önce VIP / finans grubuna uygulayın, sonra genişletin.

### Quarantine operasyonu

- Kullanıcı quarantine bildirimleri (çok gürültülü olabilir)
- Admin quarantine release yetkisi
- Yanlış pozitif süreci: ticket → release → allow/override dikkatli

## 4.15 Message trace ve Troubleshooting ağacı

Belirti: “Mail gitmedi / gelmedi”

1. Message trace (alıcı, zaman, subject)
2. Quarantine’te mi?
3. Transport rule düşürdü mü?
4. SPF/DKIM fail + DMARC reject mi?
5. Alıcı tarafı blokladı mı? (NDR kodu)
6. Connector / hibrit mi?

NDR kodlarını ezberlemeyin; yorumlamayı öğrenin (`5.7.1`, `4.4.7` timeout vb.).

## 4.16 Takvim paylaşımı ve cross-org

- Organization relationship / individual sharing
- Free/busy hibritte
- Rooms’un booking window / conflict yönetimi

## 4.17 Public Folder mirası

Hâlâ public folder kullanan org’lar var. Modern hedef: SharePoint + Teams. Migrasyon planı olmadan sonsuza taşımayın.

## 4.18 Çalışılmış senaryo: Destek@ dönüşümü

Önce: 4 kişi shared’a parola ile giriyor.  
Hedef:
1. Shared mailbox, sign-in disabled
2. Full Access + Send As
3. Microsoft 365 group + Teams “Destek” (iç tartışma) — mailbox ayrı kalabilir
4. SLA: gece nöbeti için Graph/Power Automate ile atama (ileride)
5. Audit ve CA ile koruma
