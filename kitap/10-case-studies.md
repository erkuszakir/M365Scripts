# Bölüm 10 — Gerçek Hayat Case Study Derlemesi

Bu bölüm, kitaptaki vakaları **çözüm çerçevesiyle** bir araya getirir. Her case için aynı şablonu kullanın:

1. Bağlam  
2. Belirti  
3. Kök neden  
4. Kısa vadeli tespit  
5. Kalıcı düzeltme  
6. Ölçüt (KPI)  
7. Kitaptaki bölüm bağlantısı  

---

## CS-01 — Lisans israfı ve görünmezlik

**Bağlam:** 180 kişi, herkese E5.  
**Belirti:** Maliyet / kullanıcı oranı sektörün 2 katı.  
**Kök neden:** Persona analizi yok.  
**Tespit:** Graph ile lisans kullanım raporu; son 30 gün Teams/EXO aktivitesi.  
**Kalıcı:** Persona matrisi + aylık lisans review.  
**KPI:** Kullanılmayan lisans < %5.  
**Bölüm:** 2, 8

---

## CS-02 — Global Admin kalabalığı

**Bağlam:** 8 Global Admin.  
**Belirti:** Yanlışlıkla CA silindi.  
**Kök neden:** Rol hijyeni yok.  
**Tespit:** Directory role atamaları envanteri.  
**Kalıcı:** Granüler roller + PIM + 2 break-glass.  
**KPI:** Sürekli Global Admin = 2 (break-glass).  
**Bölüm:** 3, 7

---

## CS-03 — Shared mailbox ele geçirme

**Bağlam:** Destek@ hesabına parola verilmiş.  
**Belirti:** Spam çıkışı, müşteri şikâyeti.  
**Kök neden:** Shared mailbox’a sign-in.  
**Tespit:** Sign-in logs + mailbox audit.  
**Kalıcı:** Sign-in disable, Full Access, CA, audit.  
**KPI:** Shared hesaplarda interactive sign-in = 0.  
**Bölüm:** 4, 7

---

## CS-04 — Anyone link sızıntısı

**Bağlam:** Teklif PDF’leri public link.  
**Belirti:** Arama motorunda içerik.  
**Kök neden:** Sharing politikası gevşek + eğitim yok.  
**Tespit:** Sharing raporları, Cloud App / audit.  
**Kalıcı:** Anyone kısıtı, expiry, label, DLP.  
**KPI:** Anyone link sayısı haftalık düşüş.  
**Bölüm:** 5, 7

---

## CS-05 — Teams enflasyonu

**Bağlam:** 800 team, %60 inaktif.  
**Belirti:** Dosya bulunamıyor, misafir karmaşası.  
**Kök neden:** Self-service limitsiz.  
**Tespit:** Last activity raporu.  
**Kalıcı:** Naming, expiration, archive, template.  
**KPI:** Aktif team oranı > %70.  
**Bölüm:** 6

---

## CS-06 — CEO fraud (BEC)

**Bağlam:** Typosquat domain ile EFT talebi.  
**Belirti:** Muhasebe şüpheli mail.  
**Kök neden:** DMARC yok + süreç kontrolü yok + anti-phish zayıf.  
**Tespit:** Header analizi, Threat Explorer.  
**Kalıcı:** DMARC reject, impersonation koruması, sözlü teyit süreci.  
**KPI:** BEC’nin finans sürecini aşma oranı = 0.  
**Bölüm:** 4, 7

---

## CS-07 — DLP’nin işi kilitlemesi

**Bağlam:** Enforce DLP false positive.  
**Belirti:** Dış mail durdu.  
**Kök neden:** Test modu atlandı.  
**Tespit:** DLP match raporları.  
**Kalıcı:** Staging → tune → enforce; istisna yolu.  
**KPI:** False positive < kabul eşiği.  
**Bölüm:** 7

---

## CS-08 — CSV migrasyon / provision hatası

**Bağlam:** Toplu kullanıcı açılışı.  
**Belirti:** Yanlış UPN domain.  
**Kök neden:** Doğrulama yok, pilot yok.  
**Tespit:** Örnekleme + Get-MgUser.  
**Kalıcı:** Schema validator + pilot dalga.  
**KPI:** Provision hata oranı < %1.  
**Bölüm:** 8, 9

---

## CS-09 — Sonsuz hibrit

**Bağlam:** 12 mailbox için on-prem Exchange.  
**Belirti:** Yüksek bakım.  
**Kök neden:** Migrasyon yarım kaldı.  
**Kalıcı:** Son dalga + hibrit kaldırma.  
**KPI:** On-prem mailbox = 0.  
**Bölüm:** 9

---

## CS-10 — Offboarding sızıntısı

**Bağlam:** İşten çıkan satışçı.  
**Belirti:** Eski OneDrive linkleri hâlâ açık; mobil oturum canlı.  
**Kök neden:** Offboarding runbook eksik.  
**Kalıcı:** Disable → session revoke → lisans → OneDrive transfer → grup/Teams → mailbox forward → audit.  
**KPI:** Offboarding SLA < 4 saat.  
**Bölüm:** 3, 5, 8, Capstone

---

## Nasıl pratik yapılır?

Her CS için bir sayfalık “yönetici brifingi” yazın: yönetime 3 dakikada anlatılacak dilde. Teknik jargon yerine **risk → etki → öneri**.


## Detaylı dosyalar

Bazı case’ler ayrıntılı paket olarak genişletildi:

- [CS-01 Lisans israfı](case-studies/CS-01-lisans-israfi.md)
- [CS-03 Shared mailbox compromise](case-studies/CS-03-shared-mailbox-compromise.md)
- [CS-06 BEC CEO fraud](case-studies/CS-06-bec-ceo-fraud.md)
- [CS-10 Offboarding](case-studies/CS-10-offboarding.md)

Ödev: Kalan 6 case için aynı şablonla detay dosyası üretin.
