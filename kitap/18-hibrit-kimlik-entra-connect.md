# Bölüm 18 — Hibrit Kimlik: Entra Connect / Cloud Sync

## 18.1 Ne zaman hibrit?

On-prem Active Directory hâlâ authoritative ise (eski uygulamalar, GPO, dosya sunucusu ACL) kimlikler çoğu zaman **senkron** edilir.

| Araç | Ne zaman |
|------|----------|
| **Entra Connect Sync** | Klasik, zengin özellik, sunucu tabanlı |
| **Entra Cloud Sync** | Hafif agent, bazı senaryolar için daha modern/basit |
| **Federation (AD FS)** | Özel gereksinim; çoğu yeni tasarımda kaçınılır |

Diyagram: `diyagramlar/18-hibrit-kimlik.svg`

## 18.2 Sync motorunun zihinsel modeli

```
AD DS → (Connect) → Entra ID → M365 iş yükleri
```

- **Source of authority:** Buluta doğrudan değiştiremeyeceğiniz alanlar vardır (synced user’da UPN vs.).
- Soft delete / recycle bin davranışları
- OU filtering: hangi OU’lar sync edilecek
- Attribute filtering / transformations

## 18.3 Kimlik doğrulama yöntemleri (hibrit)

| Yöntem | Açıklama |
|--------|----------|
| **Password Hash Sync (PHS)** | Hash sync; önerilen varsayılan birçok senaryoda |
| **Pass-through Auth (PTA)** | On-prem agent ile anlık doğrulama |
| **Federation** | Token AD FS vb. üzerinden |

**PHS + Seamless SSO** sık tercih. PTA’da agent yüksek erişilebilir olmalı.

## 18.4 Seamless SSO ve hybrid join

- Hybrid Azure AD Join / Entra hybrid join: cihaz hem AD hem Entra’da
- SSO deneyimi intranet’te
- CA compliant cihaz sinyali Intune ile birleşir

## 18.5 Yaygın kırılmalar

1. Senkron hesabı parola değişti, sync durdu
2. UPN suffix domain Entra’da doğrulanmamış
- Duplicate proxyAddresses → sync error
3. OU filter yanlış → kullanıcılar gelmedi
4. Soft match / hard match hataları (mail nickname)
5. Connect sunucusu yama sonrası SQL/LocalDB sorunu

**Teşhis:** Synchronization Service Manager, Connect Health, Entra provisioning logs.

## 18.6 Güvenlik

- Connect sunucusu **Tier 0** gibi korunur
- PHS ile buluta giden hash’ler hakkında yönetime doğru anlatım (mitosları düzeltin)
- Cloud-only break-glass hesapları sync dışı
- Admin hesaplarını mümkünse bulut tarafında ayrı düşünün (synced admin riski)

## 18.7 Staging mode ve yükseltme

- İkinci Connect sunucusu staging mode’da hazır
- Felaket / yükseltmede hızlı kesiş
- Cloud Sync’e geçiş değerlendirmesi: özellik matrisi okunmadan “yenisi iyi” demeyin

## 18.8 Case Study 18-A — Sync durdu, kimse fark etmedi

3 gün sync kapalı; yeni işe girenler M365’e gelmedi.  
**Düzeltme:** Connect Health alert + NOC runbook + günlük “last success” metriği.

## 18.9 Case Study 18-B — Soft match ile yanlış kullanıcı birleşti

Aynı SMTP yüzünden cloud trial kullanıcısı on-prem ile birleşti; izinler karıştı.  
**Ders:** Migrasyon öncesi identity matching planı; hard match (ImmutableId) bilinçli.

## 18.10 Laboratuvar 18

1. Cloud-only vs PHS vs PTA karar matrisi (5 kriter puanlayın).
2. Sync hata senaryosu için 8 adımlık IR yazın.
3. Break-glass’ın sync dışında kalmasını nasıl garanti edersiniz?
4. OU filter değişikliğinin risklerini listeleyin.

## 18.11 Kontrol listesi

- [ ] Source of authority’yi açıklayabiliyorum
- [ ] PHS/PTA/Federation farkını savundum
- [ ] Connect sunucusunu Tier 0 gibi koruyacağım
- [ ] Alert olmadan sync ölümünü kabul etmiyorum

> **Sonraki:** [Bölüm 19 — Yedekleme, DR ve fidye yazılımı](19-yedekleme-dr-fidye.md)
