# Bölüm 9 — Mimari, Hibrit, Migrasyon ve Uzman Uygulamalar

## 9.1 Uzman neyi farklı yapar?

Uzman “ayar açmaz”; **gereksinim → kısıt → seçenek → karar → kanıt** zinciri kurar.

Mimari sorular:

1. Kimlik nerede authoritative? (bulut-only vs hibrit)
2. Veri nerede durmalı? (geo, retention, yasal)
3. Dış işbirliği ne kadar açık?
4. Hangi persona hangi lisansı alır?
5. Operasyon nasıl tekrarlanır? (runbook / IaC)
6. Krizde kim ne yapar? (break-glass, IR)

Diyagram: `diyagramlar/09-referans-mimari.svg`

## 9.2 Kimlik mimarisi seçenekleri

| Model | Artı | Eksi | Ne zaman |
|-------|------|------|----------|
| **Cloud-only** | Basit | On-prem app zor | Yeni / küçük org |
| **Hibrit sync (Entra Connect / Cloud Sync)** | Mevcut AD ile süreklilik | Karmaşıklık, sync hataları | Klasik kurum |
| **Federation (AD FS vb.)** | Özel auth | Operasyon maliyeti | Özel gereksinim; çoğu senaryoda artık az tercih |

**KuzeyLojistik kararı (örnek):** Başlangıç cloud-only; ileride on-prem ERP zorunlu kılarsa Cloud Sync ile hibrit.

## 9.3 Hibrit Exchange notları

Hibrit mail, “birkaç kullanıcı hâlâ on-prem Exchange’te” anlamına gelebilir.

Kritik kavramlar:

- Hybrid Configuration Wizard
- Mail flow (centralized vs decentralized)
- Free/busy paylaşımı
- SMTP namespace ortaklığı

**Uyarı:** Hibrit “geçici köprü” olarak planlanmalı; sonsuza uzayan hibrit operasyonel yük yaratır.

## 9.4 Migrasyon stratejileri

### Posta

| Yöntem | Not |
|--------|-----|
| Cutover | Küçük org, kısa kesinti |
| Staged | Orta |
| Hybrid / MRS | Büyük, uzun |
| IMAP / üçüncü parti | Kaynak çeşitliliği |

### Dosya

File share → SharePoint Migration Tool / Migration Manager  
Dikkat: izinler, path uzunluğu, “her şeyi root’a dökme”

### Teams / içerik

Üçüncü parti araçlar sık gerekir; kanal & private channel karmaşıklığı

Diyagram: `diyagramlar/09-migrasyon-dalgasi.svg`

## 9.5 Referans mimari — KuzeyLojistik 500 kullanıcı

Katmanlar:

1. **Kimlik:** Entra ID + CA tabanı + break-glass + PIM (mümkünse)
2. **Endpoint:** Intune uyumlu cihaz (ofis), saha için mobil App Protection
3. **İş yükleri:** EXO + SPO hub intranet + Teams naming/expiration
4. **Güvenlik:** Defender for O365 + anti-phish + DMARC reject
5. **Veri:** Label taksonomisi + DLP staging → enforce
6. **Operasyon:** Graph otomasyonu + onboarding/offboarding runbook
7. **Gözlem:** Secure Score (öncelikli), audit, haftalık lisans raporu

## 9.6 Kriz ve iş sürekliliği

Senaryolar:

- Global Admin kilitlenmesi → break-glass
- Toplu phishing → Threat Explorer + otomatik temizleme + parola/session revoke
- Tenant config drift → değişiklik kontrolü + periyodik export
- Bölgesel kesinti → Microsoft service health + iletişim planı

## 9.7 Case Study 9-A — Sonsuz hibrit

Şirket 4 yıldır hibrit; on-prem Exchange sadece 12 mailbox için ayakta. Bakım maliyeti lisans tasarrufundan yüksek.  
**Karar:** Son mailbox’ları taşı, hibriti kaldır, cloud-only’ye sadeleştir.

## 9.8 Case Study 9-B — Migrasyon “big bang” felaketi

Cuma gecesi 400 GB file share tek seferde taşındı; Pazartesi permission’lar kırık, arama çalışmıyor.  
**Ders:** Dalga (pilot → early adopter → genel), rollback planı, iletişim şablonu.

## 9.9 Laboratuvar 9

1. Kendi kurumunuz (veya KuzeyLojistik) için 1 sayfalık referans mimari çizin.
2. Cloud-only vs hibrit karar matrisini doldurun (5 kriter).
3. 3 dalgalı migrasyon planı yazın (kim / ne / başarı ölçütü).
4. Bir IR (olay müdahale) tek sayfalık runbook taslağı hazırlayın: “toplu phishing”.

## 9.10 Kontrol listesi

- [ ] Mimari kararları gerekçelendirebiliyorum
- [ ] Hibritin maliyetini saklamıyorum
- [ ] Migrasyonu dalgalarla planlıyorum
- [ ] Break-glass + IR köprüm var

> **Sonraki:** [Bölüm 10 — Case study derlemesi](10-case-studies.md)


## 9.11 Derinleşme: Karar kayıtları (ADR)

Her kritik mimari karar bir **Architecture Decision Record** olur:

```
Başlık: Cloud-only kimlik
Durum: Kabul
Bağlam: On-prem uygulama yok, 500 kullanıcı
Karar: Entra cloud-only
Sonuç: Connect maliyeti yok; ileride ERP gelirse Cloud Sync değerlendirilecek
Tarih / sahip
```

Bu, “neden böyle?” sorusunu 18 ay sonra kurtarır.

## 9.12 Landing zone checklist (M365)

- [ ] Break-glass ×2 test edildi
- [ ] Naming standards dokümanı
- [ ] CA baseline açık
- [ ] Legacy auth kapalı
- [ ] Sharing varsayılanı sıkı
- [ ] Audit açık
- [ ] DKIM/DMARC planı
- [ ] Backup/IR sahipleri belli
- [ ] Lisans/persona matrisi onaylı

## 9.13 Çalışılmış senaryo: 3 aylık migrasyon programı

Ay 1: kimlik + pilot mail  
Ay 2: early adopter dosya + Teams  
Ay 3: genel + eski sistem kapatma  
Her ay: başarı ölçütü, eğitim, rollback, iletişim şablonu
