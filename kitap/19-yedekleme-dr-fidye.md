# Bölüm 19 — Yedekleme, Felaket Kurtarma ve Fidye Yazılımı

## 19.1 “Microsoft yedekliyor” miti

Microsoft **hizmet sürekliliği** ve kendi yedekleme/replicasyonu ile platformu korur. Bu, sizin:
- yanlışlıkla silmenizi,
- fidye yazılımının şifrelemesini,
- kötü niyetli admin’in toplu silmesini,
- uzun süreli hukuki arşiv ihtiyacınızı

otomatik çözmez. **Retention ≠ backup.** Hold ≠ full workload restore senaryosu her zaman.

Diyagram: `diyagramlar/19-yedek-katmanlari.svg`

## 19.2 Ne korunmalı?

| İş yükü | Risk | Tipik ek kontrol |
|---------|------|------------------|
| Exchange mailbox | Soft delete / purge | Retention, litig hold, 3rd party backup |
| OneDrive/SPO | Ransomware encrypt | Versioning, recycle, restore, backup ürünü |
| Teams | Chat/files karma | SPO/EXO alt katman + vendor |
| Entra config | Politikaların silinmesi | Config export / IaC |
| Intune politikaları | Yanlış deploy | Export / versiyon kontrol |

## 19.3 SharePoint / OneDrive fidye senaryosu

Belirtiler: toplu uzantı değişimi, mass modify.  
Cevap:
1. Kullanıcıyı izole et (hesap/cihaz)
2. Version history / library restore
3. File history restore pencereleri
4. Üçüncü parti backup’tan point-in-time
5. IR + root cause (token çalındı mı?)

## 19.4 Retention ve backup birlikte

- Retention: uyumluluk / düzen
- Backup: operasyonel geri dönüş (granüler, farklı tehdit modeli)
- İkisini karıştırmak maliyet veya boş güvenlik duygusu yaratır

## 19.5 Config as code / export disiplini

En azından düzenli export:
- CA politikaları
- Exchange transport rules
- Intune configuration profiles (mümkün olduğunca)
- Conditional Access JSON

Felaket: yanlış CA ile herkesi kilitlemek → break-glass + bilinen iyi config.

## 19.6 RPO / RTO konuşması (iş dili)

Yönetime sorun:
- Bir mailbox için kabul edilen veri kaybı (RPO)?
- Ne kadar sürede dönmeli (RTO)?
- Tüm SPO’nun geri gelmesi mi, tek site mi?

Cevapsız backup ihaleleri boşa gider.

## 19.7 Case Study 19-A — Crypto on OneDrive

Satış temsilcisinin PC’si ele geçti; OneDrive sync şifreledi. Versioning 30 gün kurtardı; 45 günlük dosyalar üçüncü parti backup’tan geldi.  
**Ders:** Versioning tek başına SLA yetmeyebilir.

## 19.8 Case Study 19-B — Admin yanlışlıkla site sildi

Site collection silindi; recycle pencereleri yetişti. Süreç belgesizdi; 6 saat panik.  
**Düzeltme:** Silme yetkisi kısıt + onay + backup + runbook.

## 19.9 Laboratuvar 19

1. KuzeyLojistik için RPO/RTO tablosu (mail, OD, SPO, Teams).
2. Retention vs backup farkını yöneticiye 5 cümlede anlatın.
3. Fidye için OneDrive/SPO müdahale kartı yazın.
4. Hangi config’leri haftalık export edeceğinizi listeleyin.

## 19.10 Kontrol listesi

- [ ] “Microsoft yedekliyor” mitini çürüttüm
- [ ] RPO/RTO sordum
- [ ] Versioning + recycle + backup katmanlarını ayırdım
- [ ] Config export disiplinim var

> **Sonraki:** [Bölüm 20 — Olay müdahale runbook’ları](20-olay-mudahale-runbook.md)
