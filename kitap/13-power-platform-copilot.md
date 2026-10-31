# Bölüm 13 — Power Platform, Bağlayıcılar ve Copilot (M365 Bağlamı)

## 13.1 Neden bu bölüm var?

M365 uzmanı yalnızca “kullanıcı açmak”la bitmez. İş birimleri **Power Automate / Power Apps / Copilot** ile kendi çözümlerini üretir. Siz yönetmezseniz: veri sızıntısı, shadow IT, lisans şoku.

## 13.2 Power Platform parçaları

| Ürün | İş |
|------|-----|
| **Power Automate** | Akış / onay / bildirim |
| **Power Apps** | Az kodlu uygulamalar |
| **Power BI** | Raporlama (ayrı lisans/kapasite sık) |
| **Dataverse** | Veri platformu |
| **Copilot Studio / M365 Copilot** | Yapay zekâ asistanları (lisans + veri sınırı kritik) |

Diyagram: `diyagramlar/13-power-platform-risk.svg`

## 13.3 Bağlayıcı ve DLP (ortam)

Power Platform’un kendi **ortam (environment)** ve **DLP politikaları** vardır:

- Business vs Non-business bağlayıcıları ayırma
- “Twitter + SharePoint” gibi tehlikeli kombinasyonları engelleme
- Default environment’ı sıkı tutma

**KuzeyLojistik kuralı:** Üretim akışları ayrı environment; maker’lar için geliştirme ortamı; bağlayıcı DLP zorunlu.

## 13.4 Microsoft 365 Copilot — yönetici gözü

Copilot, kullanıcının **erişebildiği** M365 verisi üzerinde çalışır. Yani:

- Yanlış paylaşılmış dosya → Copilot da görebilir (kullanıcı görebiliyorsa)
- Oversharing sorunu, AI ile büyür
- Sensitivity label + least privilege + sharing hijyeni = Copilot hazırlığının temeli

**Hazırlık kontrol listesi:**

1. Oversharing taraması
2. Etiket / DLP olgunluğu
3. Misafir erişim gözden geçirmesi
4. Yüksek ayrıcalıklı hesaplarda Copilot kullanımı politikası
5. Prompt / veri sızıntısı farkındalık eğitimi

## 13.5 Case Study 13-A — “Zararsız” akış

İK, kişisel TC kimliklerini Forms → Excel (kişisel OneDrive) → mail ile yöneticilere gönderen bir akış kurdu.  
**Risk:** KVKK + yanlış konumlandırılmış PII.  
**Düzeltme:** Dataverse / kısıtlı SPO kütüphanesi, etiket, Platform DLP, environment ayrımı.

## 13.6 Case Study 13-B — Copilot ve gizli maaş dosyası

Maaş Excel’i “Everyone” ile paylaşılmıştı. Copilot soruya maaş aralığı döndü.  
**Kök neden:** AI değil, izin.  
**Ders:** Copilot projesi = aslında governance projesi.

## 13.7 Laboratuvar 13

1. Tenant’ta (veya varsayımsal) Power Platform environment stratejisi yazın.
2. 5 bağlayıcıyı Business / Non-business diye sınıflandırın.
3. Copilot öncesi 8 maddelik hazırlık listesi çıkarın.

## 13.8 Kontrol listesi

- [ ] Shadow automation riskini görüyorum
- [ ] Environment + bağlayıcı DLP fikrini savundum
- [ ] Copilot = izinlerin aynası olduğunu anlattım

> **Sonraki:** [Bölüm 14 — KVKK, GDPR ve uyumluluk tasarımı](14-kvkk-gdpr-uyumluluk.md)


## 13.9 Derinleşme: Copilot veri sınırları

Anlatılacak doğru model:

> Copilot, kullanıcının zaten erişebildiği içerikte yardımcı olur; yeni bir izin kapısı açmaz. Ama kötü paylaşımı ölçekler.

Hazırlık programı 6 hafta:
1. Oversharing avı
2. Label yaygınlaştırma
3. Misafir review
4. Yüksek ayrıcalıklı hesap politikası
5. Eğitim
6. Pilot grup ölçümü

