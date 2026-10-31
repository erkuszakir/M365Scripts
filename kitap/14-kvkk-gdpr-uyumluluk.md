# Bölüm 14 — KVKK, GDPR ve Uyumluluk Tasarımı (M365’te)

## 14.1 Uyarı (hukuki değil, teknik çerçeve)

Bu bölüm avukatlık değildir. Amacınız: **teknik kontrolleri** yasal gereksinimlerle konuşturabilecek dil kazanmak. Kurumsal kararlar hukuk + KVKK ekibiyle birlikte alınır.

## 14.2 Temel kavramlar → M365 karşılıkları

| Kavram | Teknik karşılık (örnek) |
|--------|-------------------------|
| Kişisel veri envanteri | Nerede PII var? (EXO, SPO, Teams, Forms…) |
| Hukuka uygunluk / amaç | Etiket + erişim gerekçesi |
| Veri minimizasyonu | Retention / silme politikaları |
| Erişim hakkı | eDiscovery / export süreçleri (dikkatli) |
| Unutulma / silme | Retention vs hold çatışmasını yönet |
| İhlal bildirimi | Audit + IR + Defender sinyalleri |
| İşleyen / aktarım | Misafir B2B, üçüncü parti uygulamalar, geo |

Diyagram: `diyagramlar/14-uyumluluk-kontrolleri.svg`

## 14.3 Veri konumu (geo)

- Tenant oluşturulurken seçilen coğrafya
- Multi-Geo (büyük kurumlar)
- Yedek / üçüncü parti yedekleme araçlarının konumu
- Graph uygulama loglarının nereye gittiği

**Soru:** “Verimiz Avrupa’da mı?” cevabı sadece marketing cümlesi olmamalı; workload + yedek + ISV üçlüsü yazılmalı.

## 14.4 Retention vs silme hakkı gerilimi

Hukuki hold / mali saklama süreleri ile “silinmesini istiyorum” talebi çatışabilir.  
**Operasyon kuralı:** Hold varsa silme talebi otomatik yerine getirilmez; süreç hukukla yürür.

## 14.5 eDiscovery pratik notları

- Content Search vs eDiscovery (Standard/Premium) farkını bilin
- Custodian (velayet) modeli
- Hold’un kullanıcı deneyimine etkisi (silinemeyen öğeler)
- Dışa aktarım zinciri ve kimlerin erişeceği

## 14.6 Case Study 14-A — Forms’ta TC kimlik

Açık Forms ile TC toplandı; bağlantı şirket dışı paylaşıldı.  
**Kontroller:** Forms dış paylaşım politikası, DLP, bilgilendirme metni, minimum veri.

## 14.7 Case Study 14-B — “Hepsini 10 yıl sakla”

IT her şeyi sınırsız sakladı; maliyet + ihlal yüzeyi büyüdü.  
**Düzeltme:** İş + hukuk ile saklama matrisi (mail 7 yıl, sohbet 1 yıl, vb. — örnek rakamlar kurumunuza göre değişir).

## 14.8 Laboratuvar 14

1. KuzeyLojistik için 6 veri türü × sistem × saklama süresi tablosu yapın.
2. Bir silme talebi geldiğinde teknik adımları yazın (hold kontrolü dahil).
3. Misafir ve ISV uygulamalarını “aktarım” riski diye listeleyin.

## 14.9 Kontrol listesi

- [ ] PII’nin M365’te nerelerde yaşadığını haritaladım
- [ ] Retention / hold gerilimini açıklayabiliyorum
- [ ] Geo cevabını üç parçalı (workload/yedek/ISV) veriyorum

> **Sonraki:** [Bölüm 15 — İzleme, raporlama ve hizmet sağlığı](15-izleme-raporlama.md)
