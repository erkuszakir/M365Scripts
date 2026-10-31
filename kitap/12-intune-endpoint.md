# Bölüm 12 — Uç Nokta Yönetimi: Microsoft Intune

## 12.1 Neden M365 kitabı Intune içerir?

Modern Microsoft 365 güvenliği **kimlik + cihaz** ikilisidir. Conditional Access’te “uyumlu cihaz gerekli” derseniz, arkada Intune (veya eşdeğer MDM) olmadan politika havada kalır.

Intune: bulut tabanlı **Mobile Device Management (MDM)** ve **Mobile Application Management (MAM)**.

Diyagram: `diyagramlar/12-intune-ca-koprusu.svg`

## 12.2 İki büyük model

| Model | Ne kontrol eder | Tipik kullanıcı |
|-------|-----------------|-----------------|
| **MDM (cihaz yönetimi)** | Tüm cihaz: şifre, bitlocker, güncelleme, kısıt | Kurumsal dizüstü |
| **MAM (uygulama koruması)** | Sadece şirket uygulamaları / verisi | BYOD telefon |

**KuzeyLojistik:** Ofis bilgisayarları → Autopilot + MDM. Saha telefonları → çoğu BYOD → **App Protection Policies** (Outlook/Teams verisi kişisel fotoğraflara kopyalanmasın).

## 12.3 Windows Autopilot (kavram)

Fabrika / IT odası yerine cihazı kullanıcıya kutudan çıkarıp Azure/Entra’ya katılım + politika çekme modeli.

Akış (özet):

1. Donanım hash kaydı
2. Deployment profile
3. Kullanıcı giriş yapar (Entra)
4. Uygulamalar / politikalar iner
5. CA “compliant” sinyalini görür

## 12.4 Uyumluluk politikası örnekleri

| Ayar | Örnek hedef |
|------|-------------|
| BitLocker açık | Windows laptop |
| PIN / biometric | Mobil |
| OS sürüm minimum | Eski Android engeli |
| Jailbreak / root yok | Mobil |
| Güvenlik duvarı | Windows |

**CA köprüsü:** `Require device to be marked as compliant`

## 12.5 Uygulama dağıtımı

- Win32 uygulamaları (Intune win32 content prep)
- Microsoft 365 Apps deployment
- Store uygulamaları
- Gerekli vs kullanılabilir uygulamalar

## 12.6 Case Study 12-A — CA “compliant” ama Intune yok

IT, CA’da uyumlu cihaz istedi; Intune lisansı / kaydı yoktu. Kullanıcılar kilitlendi.  
**Ders:** CA koşulunu açmadan önce cihaz sinyali kaynağını doğrulayın; acil dışlama grubu hazır tutun.

## 12.7 Case Study 12-B — BYOD’da aşırı MDM

Saha çalışanına tam MDM dayatıldı; kişisel telefon reddedildi, gölge WhatsApp grupları patladı.  
**Düzeltme:** MAM + App Protection; şirket verisi silinebilir (selective wipe), kişisel fotoğraflar dokunulmaz.

## 12.8 Laboratuvar 12

1. Persona başına MDM vs MAM seçin (tablo).
2. “Compliant device” CA’sını yazın; Intune olmadan ne kırılır sorusunu cevaplayın.
3. Selective wipe senaryosunu offboarding runbook’una ekleyin.

## 12.9 Kontrol listesi

- [ ] MDM / MAM farkını senaryoyla anlattım
- [ ] CA–Intune köprüsünü çizdim
- [ ] BYOD için aşırı MDM tuzağını biliyorum

> **Sonraki:** [Bölüm 13 — Power Platform ve otomasyon ötesi](13-power-platform-copilot.md)
