# Bölüm 20 — Olay Müdahale (IR) Runbook’ları

## 20.1 IR’nin M365’teki yeri

Güvenlik ürünü almak ≠ müdahale edebilmek. Runbook; panik anında **sırayı** verir.

Diyagram: `diyagramlar/20-ir-dongusu.svg`

Genel döngü: Hazırlık → Tespit → Kontrol altına alma → Yok etme → Kurtarma → Ders çıkarma

## 20.2 Roller

| Rol | Görev |
|-----|-------|
| Incident Commander | Karar ve iletişim |
| Identity lead | Hesap/revoke/CA |
| Messaging lead | Mail purge / rule |
| Endpoint lead | Intune izolasyon |
| Comms | Yönetim / kullanıcı mesajı |
| Legal/HR | Gerektiğinde |

Küçük ekipte bir kişi birden fazla şapka takar; yine de şapkaları isimlendirin.

## 20.3 Runbook A — Hesap ele geçirme (account takeover)

**Tetik:** Impossible travel, atypical token, kullanıcı bildirimi, MFA fatigue.

Adımlar:
1. Sign-in log + risky sign-in kanıtı al (ekran/CSV)
2. `revokeSignInSessions` + refresh token düşürme
3. Parola reset / TAP + MFA yöntemlerini gözden geçir (agresör Authenticator eklemiş olabilir!)
4. Inbox rules / forwarding kontrol (EXO)
5. MFA fraud / authentication methods temizliği
6. OAuth uygulama consent gözden geçir
7. Cihaz uyumu / Intune mark as noncompliant gerekirse
8. İletişim: kullanıcıya kontrollü bilgi
9. Post-incident: CA güçlendir, legacy kapat

## 20.4 Runbook B — BEC / CEO fraud

1. Mesajı Threat Explorer’da bul
2. Benzerleri seç + purge/ZAP
3. Hedef mailbox kuralları
4. Finans sürecini durdur (iş kontrolü)
5. DMARC/anti-phish boşluk analizi
6. Typosquat domain takibi (dış)

## 20.5 Runbook C — Toplu dosya şifreleme / silme

1. Kullanıcı/cihaz izole
2. SPO/OD restore seçenekleri değerlendir
3. Audit: kim, hangi app, hangi IP
4. Token/app abuse?
5. Backup’a geçiş kriteri

## 20.6 Runbook D — Yanlış CA ile kilitlenme

1. Break-glass ile gir
2. Politika report-only / disable
3. Etkilenen seti doğrula
4. Değişiklik kaydı + iletişim
5. Neden review kaçtı? (change window yok)

## 20.7 Kanıt ve zincir

- Zaman dilimi (UTC vs local) notu
- Export’ların hash/integrity ihtiyacı (ileri adli)
- Ticket numarası ile runbook adımı eşle

## 20.8 Masa tatbikatı (tabletop)

Çeyrekte bir: “CFO’ya phishing, EFT istedi” senaryosunu saatsiz konuşun. Boşlukları runbook’a yazın.

## 20.9 Case Study 20-A — MFA yöntemini saldırgan ekledi

Revoke yapıldı ama Authenticator’da saldırgan device kaldı; tekrar girdi.  
**Ders:** Authentication methods temizliği unutulmamalı.

## 20.10 Laboratuvar 20

1. Runbook A’yı tek sayfalık “acil kart”a indirgeyin.
2. Break-glass testini planlayın (ne sıklıkla, nasıl alarm).
3. BEC için finans ekibiyle 5 maddelik süreç kontrolü yazın.
4. Tabletop daveti taslağı hazırlayın.

## 20.11 Kontrol listesi

- [ ] 4 temel runbook taslağım var
- [ ] Revoke + auth methods birlikte düşünülüyor
- [ ] Break-glass tatbikatı planlandı
- [ ] İş kontrolleri (finans) IR’nin parçası

> **Sonraki:** [Bölüm 21 — Viva, benimseme ve değişim](21-viva-benimseme-degisim.md)
