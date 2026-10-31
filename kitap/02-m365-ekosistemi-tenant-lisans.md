# Bölüm 2 — Microsoft 365 Ekosistemi, Tenant ve Lisanslama

## 2.1 Büyük resim: ekosistem haritası

Microsoft 365 bir ürün değil, **ürün ailesi + kimlik + güvenlik + uyumluluk** katmanıdır.

Ana parçalar:

1. **Productivity apps** — Word, Excel, PowerPoint, Outlook, OneNote, Loop…
2. **İş yükleri** — Exchange Online, SharePoint Online, OneDrive, Teams, Viva…
3. **Kimlik** — Microsoft Entra ID (eski adıyla Azure AD)
4. **Güvenlik** — Defender for Office 365, Entra ID Protection, Conditional Access
5. **Uyumluluk** — Purview (DLP, retention, eDiscovery, labels)
6. **Yönetim düzlemi** — Admin centers + PowerShell + Graph API

Diyagram: `diyagramlar/02-m365-ekosistem.svg`

## 2.2 Tenant nedir?

**Tenant**, kurumunuzun Microsoft bulutundaki **mantıksal evi**dir. Genelde bir şirket = bir tenant.

Tenant’a bağlı kritik gerçekler:

- Bir **birincil doğrulanmış alan adı** (ör. `kuzeylojistik.com`) olur; başlangıçta `*.onmicrosoft.com` da vardır.
- Kullanıcılar `UPN` (User Principal Name) ile giriş yapar: `ayse@kuzeylojistik.com`.
- Çoğu güvenlik ve lisans politikası **tenant kapsamında**dır.
- Tenant silmek / birleştirmek zordur — tasarımı baştan doğru yapın.

### Tenant türleri (öğrenci için)

| Tür | Ne zaman |
|-----|----------|
| Microsoft 365 Developer | Öğrenme, Graph, sandbox |
| Trial / demolar | Kısa süreli deneme |
| Production | Gerçek şirket |
| Education | Üniversite / okul |

**Uyarı:** Öğrenci laboratuvarını production ile karıştırmayın. Asla gerçek müşteri verisini developer tenant’a taşımayın.

## 2.3 Admin center labirenti

Yeni gelenler portallar arasında kaybolur. Harita:

| Portal | Odak |
|--------|------|
| admin.microsoft.com | Genel M365 yönetimi, kullanıcı, lisans |
| entra.microsoft.com | Kimlik, CA, uygulamalar, roller |
| admin.exchange.microsoft.com | Posta kutusu, akış, alıcılar |
| admin.teams.microsoft.com | Teams politikaları |
| admin.sharepoint.com | Site, paylaşım, depolama |
| security.microsoft.com | Defender / tehdit |
| compliance.microsoft.com (Purview) | DLP, retention, eDiscovery |
| endpoint.microsoft.com | Intune cihaz yönetimi |

Diyagram: `diyagramlar/02-admin-portallari.svg`

## 2.4 Lisanslama — uzmanların en çok yanlış yaptığı yer

Lisans = kullanıcının **hangi özelliği açabileceğinin anahtarı**.

Temel aileler (öğrenme için sadeleştirilmiş):

| SKU ailesi | Tipik içerik |
|------------|--------------|
| Microsoft 365 Business Basic/Standard/Premium | KOBİ |
| Microsoft 365 E3 | Kurumsal üretkenlik + uyumluluk temeli |
| Microsoft 365 E5 | E3 + gelişmiş güvenlik / telefon / analytics |
| Office 365 E1/E3/E5 | Uygulama odaklı (kimlik/cihaz katmanı daha sınırlı) |
| Exchange Online Plan 1/2 | Sadece posta |
| EMS / Entra ID P1/P2 | Kimlik & Conditional Access özellikleri |

**Kural:** “Herkese E5” nadiren doğru çözümdür. Risk profiline göre **katmanlı lisans** tasarlayın.

### KuzeyLojistik lisans tasarımı (v1)

| Persona | Öneri | Neden |
|---------|-------|-------|
| Ofis çalışanı | M365 Business Premium veya E3 | CA + Intune ihtiyacı |
| Saha sürücüsü | Business Basic + Teams | Maliyet / mobil |
| IT / güvenlik | E5 veya E3+ güvenlik eklentileri | Gelişmiş tehdit & eDiscovery |
| Misafir danışman | Misafir erişimi (B2B) | Lisans tüketmeden işbirliği |

## 2.5 Domain, DNS ve ilk gün

Yeni tenant kurulumunun klasik sırası:

1. Tenant oluştur / ülke / dil
2. Özel alan adını ekle ve **DNS TXT** ile doğrula
3. MX, Autodiscover, SPF, DKIM, DMARC kayıtlarını planla (Bölüm 4)
4. Global Admin’i acil durum hesabı olarak ayır (break-glass)
5. Lisansları satın al / dene
6. İlk kullanıcıları oluştur (henüz toplu migrasyon yok)

Diyagram: `diyagramlar/02-tenant-ilk-gun.svg`

## 2.6 Case Study 2-A — Yanlış tenant ülkesi

**Olay:** IT stajyeri trial tenant’ı yanlış “data location” ile açtı. Sonra production’a “taşırız” sandılar.  
**Gerçek:** Tenant coğrafyası sonradan kolay değişmez.  
**Ders:** İlk gün kararları geri dönüşü pahalıdır. Checklist kullanın.

## 2.7 Case Study 2-B — Lisans israfı

KuzeyLojistik 180 E5 aldı; 120 kişi yalnızca mail + Teams kullanıyor. Yıllık maliyet şişti.  
**Çözüm:** Persona bazlı lisans matrisi + aylık lisans kullanım raporu (Graph / admin reports).

## 2.8 Laboratuvar 2

1. Developer tenant’ta özel bir alan adı eklemeyi (veya `*.onmicrosoft.com` ile devamı) belgeleyin.
2. Admin rollerinden **Global Reader** ile dolaşın — neyi görebiliyorsunuz?
3. 3 persona için lisans matrisi çizin (Excel yeter).

## 2.9 Kontrol listesi

- [ ] Tenant / domain / UPN ilişkisini anlattım
- [ ] Hangi portalın ne işe yaradığını ezbere bilmeden haritadan bulabiliyorum
- [ ] Katmanlı lisans mantığını savundum
- [ ] Break-glass hesabı fikrini not ettim

> **Sonraki:** [Bölüm 3 — Entra ID kimlik temelleri](03-entra-id-kimlik-temelleri.md)

## 2.10 Derinleşme: SKU karar ağacı

Sorular sırayla:

1. **Kaç kullanıcı / hangi sektör?** (KOBİ Business ailesi vs Enterprise E3/E5)
2. **Cihaz yönetimi şart mı?** (Intune → Business Premium veya EMS/Intune eklentili plan)
3. **Gelişmiş tehdit koruması?** (Defender for Office P2 özellikleri → E5 veya eklenti)
4. **eDiscovery Premium / advanced audit?** (E5 Compliance / ilgili eklentiler)
5. **Saha çalışanı sadece mail+Teams mi?** (düşük SKU + mobil)

Karar çıktısı bir Excel olmalı: Persona | SKU | Aylık maliyet tahmini | Gerekçe | Risk if not.

## 2.11 Yönetim rolleri — ilk gün atama önerisi

| Rol | Kim |
|-----|-----|
| Global Administrator | 2 break-glass + nadiren kullanılan PIM |
| Global Reader | SOC / denetçi gözlem |
| User Administrator | Helpdesk kıdemli |
| Helpdesk Administrator | L1 |
| Exchange Administrator | Mail ekibi |
| SharePoint Administrator | İşbirliği ekibi |
| Teams Administrator | İşbirliği ekibi |
| Security / Compliance Administrator | Güvenlik ekibi (ayrı kişiler tercih) |

## 2.12 Self-service ve varsayılan riskler

Yeni tenant’larda sık gevşek kalanlar:

- Users can register apps
- Guest invite unrestricted
- Anyone links
- Legacy auth
- Teams team creation by everyone

İlk hafta “varsayılan sıkılaştırma” checklist’i çalıştırın (Bölüm 7 ile birlikte).
