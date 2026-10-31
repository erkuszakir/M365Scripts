# Bölüm 15 — İzleme, Raporlama ve Hizmet Sağlığı

## 15.1 Uzman kör noktası

Tenant’ı kurup izlememek, arabayı farları kapalı sürmektir. İzleme katmanları:

1. **Microsoft 365 Service Health** — platform kesintisi mi, sizin yapılandırmanız mı?
2. **Kullanım raporları** — lisans israfı, aktiflik
3. **Güvenlik sinyalleri** — Defender, Identity Protection, Secure Score
4. **Audit / bilgilendirme** — kim ne değiştirdi
5. **Özel Graph raporları** — sizin KPI’larınız

Diyagram: `diyagramlar/15-gozlem-dongusu.svg`

## 15.2 Service Health ve Message Center

- admin.microsoft.com → Health
- Kesintide önce Service Health bakın; gereksiz “DNS’i bozdum” paniğini önler
- Message Center: yaklaşan değişiklikler (retiring features)

**Ritim:** Haftalık Message Center tarama + kritik etkilenen iş yüklerini işaretleme.

## 15.3 Kullanım ve benimsenme

Rapor örnekleri:

- Email activity
- Teams active users / device usage
- OneDrive/SharePoint aktif dosyalar
- Yammer/Viva (varsa)

**Yorumlama:** Düşük Teams kullanımı = kötü ürün değil; eğitim / network / politika engeli olabilir.

## 15.4 Güvenlik gözlemi

| Kaynak | Ne ararsınız |
|--------|----------------|
| Sign-in logs | İmkânsız seyahat, legacy protocol |
| Risky users | Identity Protection |
| Threat Explorer | Phishing kampanyaları |
| Audit | Role / CA / sharing değişiklikleri |
| Secure Score | Trend (mutlak skor değil) |

## 15.5 Alert politikaları (başlangıç seti)

1. Anonymous link creation spike
2. Mass download / unusual file activity (lisansa göre)
3. New inbox rule on executive mailboxes
4. Elevation to privileged role
5. Antiphish / malware bursts

## 15.6 Case Study 15-A — Yanlış teşhis

Kullanıcılar Outlook’a giremiyor; IT DNS’i değiştiriyor. Aslında bölgesel EXO olayı.  
**Ders:** Service Health → kullanıcı etkisi → sonra config.

## 15.7 Case Study 15-B — Sessiz lisans sızıntısı

Ayda 40 lisans “atanmış ama hiç giriş yok”. Graph raporu olmadan kimse görmedi.  
**Kalıcı:** Aylık inactive license job + yönetici özeti.

## 15.8 Laboratuvar 15

1. Service Health’i açıp son 7 günü özetleyin.
2. 3 kullanım raporu ekranını yorumlayın.
3. 5 maddelik alert listesini tenant’ınıza uyarlayın.
4. Graph ile “30 gündür sign-in yok” kullanıcısı sorgusu tasarlayın.

## 15.9 Kontrol listesi

- [ ] Platform vs yapılandırma ayrımını yapabiliyorum
- [ ] Haftalık Message Center alışkanlığım var
- [ ] En az 5 güvenlik/operasyon alarmı tanımladım

> **Sonraki:** [Bölüm 16 — Sık sorulan mülakat / savunma soruları](16-mulakat-savunma.md)
