# Bölüm 11 — Capstone: 500 Kişilik Şirketi Sıfırdan Kur

## Proje özeti

**Kurum:** KuzeyLojistik A.Ş. (büyüme senaryosu)  
**Kullanıcı:** 500 (300 ofis, 150 saha, 50 yönetici/ID)  
**Hedef:** 8 haftalık öğrenim sonunda **savunulabilir bir M365 tasarım paketi** teslim etmek.

Bu bir “tenant’ı gerçekten kur” projesi olabilir (developer tenant) veya **tasarım + lab kanıtı** projesi olabilir. İkisinde de teslimat aynıdır.

## Teslimat paketi (zorunlu)

1. **Tek sayfa referans mimari** (diyagram)
2. **Persona × lisans matrisi**
3. **Kimlik ve CA politikaları listesi** (en az 5 politika taslağı)
4. **Exchange DNS ve alıcı tasarımı** (shared, room, naming)
5. **SharePoint bilgi mimarisi** (hub + 5 site + izin modeli)
6. **Teams governance** (naming, expiration, meeting policy)
7. **Purview label taksonomisi + 2 DLP kuralı** (test modu planı)
8. **Onboarding ve offboarding runbook** (PowerShell/Graph adımlarıyla)
9. **Migrasyon / büyüme dalga planı** (eğer kaynak sistem varsayıyorsanız)
10. **Risk kaydı** (en az 8 risk: olasılık × etki × önlem)
11. **Yönetici özeti** (1 sayfa, işletme dili)

## Haftalık sprint önerisi

| Sprint | Çıktı |
|-------:|-------|
| 1 | Mimari + persona + lisans |
| 2 | Entra + CA taslakları + lab kanıtı |
| 3 | Exchange + DNS + shared/room lab |
| 4 | SPO/OneDrive bilgi mimarisi |
| 5 | Teams governance |
| 6 | Güvenlik & Purview |
| 7 | Otomasyon runbook’ları |
| 8 | Risk, özet, sözlü savunma |

## Sözlü savunma soruları (hoca / mentor)

- Neden herkese E5 demediniz?
- Break-glass’ı CA’dan neden muaf tuttunuz; nasıl izliyorsunuz?
- Saha çalışanının verisi OneDrive’da mı, Teams’te mi, neden?
- Misafir danışman bir proje kanalında neyi görmemeli?
- DLP false positive olursa iş nasıl devam eder?
- Offboarding’de oturumları nasıl düşürürsünüz?

## Başarı ölçütleri

| Ölçüt | Geçer |
|-------|-------|
| Tüm zorunlu teslimatlar | Eksiksiz |
| Lab kanıtı (ekran / log / script çıktısı) | ≥ 6 |
| Case study bağlantısı | ≥ 3 CS’ye atıf |
| Çelişkisiz kararlar | Lisans ↔ CA ↔ sharing hizalı |
| Güvenlik regresyonu yok | Anyone + legacy auth kapalı veya gerekçeli |

## Not

Capstone’u bitirdiğinizde yalnızca “M365 kullanan” değil, **M365’i tasarlayan** olursunuz. Kariyer ekleri için `EK-B-sertifika-kariyer.md` dosyasına bakın.


## Genişletilmiş rubrik (detaylı değerlendirme)

| Kriter | 0 | 1 | 2 |
|--------|---|---|---|
| Mimari bütünlük | Parçalı | Tutuyor | ADR’li savunulabilir |
| Kimlik/CA | Eksik | Temel | Katalog + istisna |
| İş yükleri | Yüzeysel | İyi | Governance’lı |
| Güvenlik/uyumluluk | Yok | DLP/label var | Test→enforce + IR |
| Otomasyon | Yok | Script | Runbook+idempotent |
| Benimseme | Yok | Eğitim notu | Şampiyon+kapanış |
| Anlatım | Teknik jargon | Anlaşılır | CFO+SOC dilinde |

**Minimum geçer:** toplam ≥ 10/14 ve hiçbir kritik kriterde 0 yok.

