# Bölüm 16 — Mülakat ve Capstone Savunma Soruları

Her soruya **kısa cevap + derinleşme + tuzak** formatında bakın.

---

### S1. Microsoft 365 nedir?
**Kısa:** Kimlik odaklı bulut üretkenlik ve işbirliği platformu (SaaS + güvenlik/uyumluluk).  
**Tuzak:** “Sadece Office uygulamaları” demeyin.

### S2. Tenant ile domain farkı?
**Kısa:** Tenant mantıksal kiracıdır; domain onun kimlik/mail ad alanıdır. Bir tenant’ta birden fazla domain olabilir.

### S3. Neden herkese Global Admin vermeyiz?
**Kısa:** Blast radius. En az yetki + PIM + break-glass.

### S4. Security group ile M365 group farkı?
**Kısa:** İlki erişim nesnesi; ikincisi işbirliği (mail/site/Teams) nesnesi.

### S5. Shared mailbox’a neden parola vermeyiz?
**Kısa:** Etkileşimli giriş yüzeyi açılır; MFA/CA zayıf kalabilir. Full Access ile eklenir.

### S6. Conditional Access nedir?
**Kısa:** Sinyallere göre oturum için MFA / engel / oturum kontrolü uygulayan politika motoru.

### S7. Zero Trust’ı bir cümleyle?
**Kısa:** Asla güvenme, sürekli doğrula — kimlik, cihaz, oturum, veri.

### S8. Anyone link riski?
**Kısa:** Bağlantıyı bilen herkes; indekslenme / sızıntı. TTL + disable / DLP.

### S9. Teams dosyası nerede durur?
**Kısa:** Kanal dosyaları SharePoint’te; 1:1 sohbet OneDrive’da. Private kanal ayrı site olabilir.

### S10. DLP’yi neden hemen enforce etmeyiz?
**Kısa:** False positive işi durdurur; staging ile ayarlanır.

### S11. Graph app-only ne zaman?
**Kısa:** Kullanıcısız zamanlanmış işler; admin consent + en az yetki + sertifika.

### S12. Hibrit neden “sonsuz” olmamalı?
**Kısa:** Operasyon maliyeti; köprü için çıkış tarihi koyun.

### S13. Copilot güvenliği nerede başlar?
**Kısa:** İzin ve oversharing hijyeninde; model sihirli duvar değildir.

### S14. Offboarding’de ilk 3 iş?
**Kısa:** Disable / revoke sessions → veri sahipliği (OneDrive/mailbox) → erişim temizliği.

### S15. Secure Score %100 hedef mi?
**Kısa:** Hayır; önceliklendirme listesi. İş etkisine göre seçin.

---

## Capstone jüri simülasyonu (10 dk)

1. Mimarinizi 90 saniyede anlatın.  
2. En pahalı kararınız hangisi, neden?  
3. En büyük riskiniz ve telafiniz?  
4. Lab’da kırdığınız bir şeyi ve nasıl geri aldığınızı anlatın.

> **Sonraki:** [Ek D — PowerShell / Graph reçete defteri](EK-D-tarif-defteri.md)
