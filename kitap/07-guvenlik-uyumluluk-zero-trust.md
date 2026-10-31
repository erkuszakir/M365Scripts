# Bölüm 7 — Güvenlik, Uyumluluk ve Zero Trust

## 7.1 Zero Trust tek cümle

> Asla güvenme, hep doğrula — kimlik, cihaz, oturum, uygulama ve veri sürekli değerlendirilir.

Microsoft 365’te Zero Trust pratikte şu motorlarla yürür:

1. **Entra ID + Conditional Access** — kim giriş yapıyor, nereden, hangi uygulamaya
2. **Intune / cihaz uyumu** — cihaz sağlıklı mı
3. **Defender for Office 365** — phishing, malware, spoof
4. **Purview** — veri sınıflandırma, DLP, retention, eDiscovery
5. **Defender / XDR sinyalleri** — tehdit avı

Diyagram: `diyagramlar/07-zero-trust-katmanlari.svg`

## 7.2 Kimlik güvenliği derinliği

### MFA’dan phishing-resistant’a

SMS MFA artık yeterli sayılmaz (SIM swap, prompt bombing). Hedef:

- Authenticator number matching
- FIDO2 / passkey / certificate (admin’ler için)
- CA ile risk tabanlı engelleme (Entra ID Protection — P2)

### Legacy authentication

Basic auth / eski protokoller MFA’yı baypas edebilir. **Kapatın** (CA veya security defaults / authentication policies).

## 7.3 Defender for Office 365 (özet uzman yolu)

| Katman | Ne yapar |
|--------|----------|
| Exchange Online Protection (EOP) | Spam, malware temel |
| Safe Links | Zararlı URL zamanında yeniden yazma/kontrol |
| Safe Attachments | Sandbox |
| Anti-phishing politikaları | Impersonation koruması |
| Quarantine / Threat Explorer | İnceleme |

**Case Study 7-A — CEO fraud**  
`ceo@kuzeynlojistik.com` (typosquat) muhasebeye EFT istedi. Safe Links + anti-impersonation + DMARC reject + finans süreci (sözlü teyit) birlikte engeller.

## 7.4 Purview: veri odaklı güvenlik

### Sensitivity labels

Örnek taksonomi (KuzeyLojistik):

| Etiket | Örnek | Koruma |
|--------|-------|--------|
| Genel | Broşür | Yok / watermark |
| Dahili | Prosedür | Org-only |
| Gizli | Müşteri sözleşmesi | Şifreleme + dışarı engel |
| Çok gizli | Maaş | Az kişi + DLP |

### DLP (Data Loss Prevention)

Koşul örnekleri:

- 5+ TC kimlik / kredi kartı dışarı mail → engelle + uyarı
- “maaş” etiketi Teams/SPO dış paylaşım → engelle

### Retention & eDiscovery

- Retention: ne kadar sakla / sil
- eDiscovery: hukuki hold + arama + dışa aktarım
- Audit log: kim ne yaptı (varsayılan süreleri bil; uzun tutmak lisans/ayar ister)

Diyagram: `diyagramlar/07-purview-veri-yasam.svg`

## 7.5 Secure Score ve ölçüm

Microsoft Secure Score bir **yıldız yarışı değil**, önceliklendirme listesidir. Her iyileştirmeyi iş etkisine göre seçin. “Score’u %100 yap” hedefi yanlış; “kritik kimlik boşluklarını kapat” doğrudur.

## 7.6 Case Study 7-B — DLP false positive felaketi

Muhasebe Excel’lerinde “IBAN” sütunu var diye DLP tüm dış maili kesti. İş durdu; DLP kapatıldı (daha kötü).  
**Doğru yaklaşım:** Policy’yi staging / tip modunda başlat, istisna yolları tanımla, kullanıcıya gerekçeli bildirim, sonra enforce.

## 7.7 Laboratuvar 7

1. Secure Score’da en yüksek etkili 5 eylemi listeleyin; 2’sini lab’da uygulayın.
2. Report-only bir CA ile “tüm kullanıcılar MFA” tasarlayın.
3. İki sensitivity label oluşturup bir Word dosyasına uygulayın.
4. Basit bir DLP kuralını **test mode** ile çalıştırın; eşleşmeleri okuyun.

## 7.8 Kontrol listesi

- [ ] Zero Trust’ı beş katmanda anlattım
- [ ] Legacy auth riskini biliyorum
- [ ] Label + DLP + retention farkını ayırıyorum
- [ ] DLP’yi önce test modunda açacağım

> **Sonraki:** [Bölüm 8 — Yönetim, PowerShell ve Graph](08-yonetim-powershell-graph.md)


## 7.9 Derinleşme: Saldırı zinciri ve M365 kontrolleri

Basitleştirilmiş BEC / hesap ele geçirme zinciri:

1. **Phishing mail** gelir → EOP / Defender / Safe Links
2. Kullanıcı kimlik bilgisi verir → MFA / passwordless / CA risk
3. Saldırgan oturum açar → Conditional Access (konum, cihaz) + Identity Protection
4. Inbox kuralı ile gizleme → Mailbox audit / anomaly
5. Finansal dolandırıcılık → süreç kontrolü (out-of-band teyit)

Her halkada bir kontrol yoksa zincir kırılmaz. “Sadece antivirus” yetmez.

## 7.10 Audit ve adli hazırlık

- Unified Audit Log’un açık olduğundan emin olun
- Kritik mailbox’larda audit / litigation ihtiyacını önceden konuşun
- Time-to-investigate: Threat Explorer + audit + sign-in logs birlikte okunur
- Olay sonrası: session revoke, parola/reset veya token invalidation, kural temizliği

## 7.11 Güvenlik işletim ritmi (önerilen)

| Ritim | İş |
|-------|-----|
| Günlük | Quarantine / high severity alerts |
| Haftalık | Secure Score deltas, sharing anomalies, guest review örnekleme |
| Aylık | CA report-only → enforce adayları, lisans+rol gözden geçirme |
| Çeyreklik | Access review, break-glass testi, IR masa tatbikatı |
