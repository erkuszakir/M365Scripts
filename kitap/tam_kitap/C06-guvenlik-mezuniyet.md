# Cilt 6 — Kimlik, güvenlik panelleri ve mezuniyet

Entra, Purview, Defender, IR, capstone.

---

# Ünite 123. Entra ID kullanıcı/grup yönetimi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Entra ID kullanıcı/grup yönetimi

**Entra ID kullanıcı/grup yönetimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Entra ID kullanıcı/grup yönetimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Entra ID kullanıcı/grup yönetimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Entra ID kullanıcı/grup yönetimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Entra ID kullanıcı/grup yönetimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Entra ID kullanıcı/grup yönetimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Entra ID kullanıcı/grup yönetimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Entra ID kullanıcı/grup yönetimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Entra ID kullanıcı/grup yönetimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Entra ID kullanıcı/grup yönetimi lab

**Entra ID kullanıcı/grup yönetimi lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Entra ID kullanıcı/grup yönetimi lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Entra ID kullanıcı/grup yönetimi lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Entra ID kullanıcı/grup yönetimi lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Entra ID kullanıcı/grup yönetimi lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Entra ID kullanıcı/grup yönetimi lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Entra ID kullanıcı/grup yönetimi lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Entra ID kullanıcı/grup yönetimi lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Entra ID kullanıcı/grup yönetimi lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Entra ID kullanıcı/grup yönetimi brifing

**Entra ID kullanıcı/grup yönetimi brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Entra ID kullanıcı/grup yönetimi brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Entra ID kullanıcı/grup yönetimi brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Entra ID kullanıcı/grup yönetimi brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Entra ID kullanıcı/grup yönetimi brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Entra ID kullanıcı/grup yönetimi brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Entra ID kullanıcı/grup yönetimi brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Entra ID kullanıcı/grup yönetimi brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Entra ID kullanıcı/grup yönetimi brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Entra ID kullanıcı/grup yönetimi KPI

**Entra ID kullanıcı/grup yönetimi KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Entra ID kullanıcı/grup yönetimi KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Entra ID kullanıcı/grup yönetimi KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Entra ID kullanıcı/grup yönetimi KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Entra ID kullanıcı/grup yönetimi KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Entra ID kullanıcı/grup yönetimi KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Entra ID kullanıcı/grup yönetimi KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Entra ID kullanıcı/grup yönetimi KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Entra ID kullanıcı/grup yönetimi KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #1.
2. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #2.
3. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #3.
4. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #4.
5. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #5.
6. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #6.
7. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #7.
8. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #8.
9. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #9.
10. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #10.
11. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #11.
12. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #12.
13. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #13.
14. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #14.
15. Entra ID kullanıcı/grup yönetimi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Entra ID kullanıcı/grup yönetimi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 124. MFA ve Conditional Access (yönetici)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: MFA ve Conditional Access (yönetici)

**MFA ve Conditional Access (yönetici)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MFA ve Conditional Access (yönetici) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MFA ve Conditional Access (yönetici) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MFA ve Conditional Access (yönetici) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MFA ve Conditional Access (yönetici) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MFA ve Conditional Access (yönetici) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MFA ve Conditional Access (yönetici) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MFA ve Conditional Access (yönetici) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MFA ve Conditional Access (yönetici) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: MFA ve Conditional Access (yönetici) lab

**MFA ve Conditional Access (yönetici) lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MFA ve Conditional Access (yönetici) lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MFA ve Conditional Access (yönetici) lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MFA ve Conditional Access (yönetici) lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MFA ve Conditional Access (yönetici) lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MFA ve Conditional Access (yönetici) lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MFA ve Conditional Access (yönetici) lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MFA ve Conditional Access (yönetici) lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MFA ve Conditional Access (yönetici) lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: MFA ve Conditional Access (yönetici) brifing

**MFA ve Conditional Access (yönetici) brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MFA ve Conditional Access (yönetici) brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MFA ve Conditional Access (yönetici) brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MFA ve Conditional Access (yönetici) brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MFA ve Conditional Access (yönetici) brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MFA ve Conditional Access (yönetici) brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MFA ve Conditional Access (yönetici) brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MFA ve Conditional Access (yönetici) brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MFA ve Conditional Access (yönetici) brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: MFA ve Conditional Access (yönetici) KPI

**MFA ve Conditional Access (yönetici) KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MFA ve Conditional Access (yönetici) KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MFA ve Conditional Access (yönetici) KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MFA ve Conditional Access (yönetici) KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MFA ve Conditional Access (yönetici) KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MFA ve Conditional Access (yönetici) KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MFA ve Conditional Access (yönetici) KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MFA ve Conditional Access (yönetici) KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MFA ve Conditional Access (yönetici) KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #1.
2. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #2.
3. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #3.
4. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #4.
5. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #5.
6. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #6.
7. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #7.
8. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #8.
9. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #9.
10. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #10.
11. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #11.
12. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #12.
13. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #13.
14. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #14.
15. MFA ve Conditional Access (yönetici) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

MFA ve Conditional Access (yönetici): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 125. Purview label ve DLP

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Purview label ve DLP

**Purview label ve DLP** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Purview label ve DLP için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Purview label ve DLP özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Purview label ve DLP yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Purview label ve DLP konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Purview label ve DLP konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Purview label ve DLP konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Purview label ve DLP konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Purview label ve DLP konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Purview label ve DLP lab

**Purview label ve DLP lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Purview label ve DLP lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Purview label ve DLP lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Purview label ve DLP lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Purview label ve DLP lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Purview label ve DLP lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Purview label ve DLP lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Purview label ve DLP lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Purview label ve DLP lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Purview label ve DLP brifing

**Purview label ve DLP brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Purview label ve DLP brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Purview label ve DLP brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Purview label ve DLP brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Purview label ve DLP brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Purview label ve DLP brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Purview label ve DLP brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Purview label ve DLP brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Purview label ve DLP brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Purview label ve DLP KPI

**Purview label ve DLP KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Purview label ve DLP KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Purview label ve DLP KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Purview label ve DLP KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Purview label ve DLP KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Purview label ve DLP KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Purview label ve DLP KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Purview label ve DLP KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Purview label ve DLP KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #1.
2. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #2.
3. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #3.
4. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #4.
5. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #5.
6. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #6.
7. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #7.
8. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #8.
9. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #9.
10. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #10.
11. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #11.
12. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #12.
13. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #13.
14. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #14.
15. Purview label ve DLP ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Purview label ve DLP: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 126. Defender for Office 365 operasyonu

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Defender for Office 365 operasyonu

**Defender for Office 365 operasyonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Defender for Office 365 operasyonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Defender for Office 365 operasyonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Defender for Office 365 operasyonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Defender for Office 365 operasyonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Defender for Office 365 operasyonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Defender for Office 365 operasyonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Defender for Office 365 operasyonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Defender for Office 365 operasyonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Defender for Office 365 operasyonu lab

**Defender for Office 365 operasyonu lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Defender for Office 365 operasyonu lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Defender for Office 365 operasyonu lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Defender for Office 365 operasyonu lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Defender for Office 365 operasyonu lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Defender for Office 365 operasyonu lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Defender for Office 365 operasyonu lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Defender for Office 365 operasyonu lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Defender for Office 365 operasyonu lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Defender for Office 365 operasyonu brifing

**Defender for Office 365 operasyonu brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Defender for Office 365 operasyonu brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Defender for Office 365 operasyonu brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Defender for Office 365 operasyonu brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Defender for Office 365 operasyonu brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Defender for Office 365 operasyonu brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Defender for Office 365 operasyonu brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Defender for Office 365 operasyonu brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Defender for Office 365 operasyonu brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Defender for Office 365 operasyonu KPI

**Defender for Office 365 operasyonu KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Defender for Office 365 operasyonu KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Defender for Office 365 operasyonu KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Defender for Office 365 operasyonu KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Defender for Office 365 operasyonu KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Defender for Office 365 operasyonu KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Defender for Office 365 operasyonu KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Defender for Office 365 operasyonu KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Defender for Office 365 operasyonu KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #1.
2. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #2.
3. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #3.
4. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #4.
5. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #5.
6. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #6.
7. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #7.
8. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #8.
9. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #9.
10. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #10.
11. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #11.
12. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #12.
13. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #13.
14. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #14.
15. Defender for Office 365 operasyonu ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Defender for Office 365 operasyonu: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 127. Secure Score ve alert’ler

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Secure Score ve alert’ler

**Secure Score ve alert’ler** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Secure Score ve alert’ler için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Secure Score ve alert’ler özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Secure Score ve alert’ler yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Secure Score ve alert’ler konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Secure Score ve alert’ler konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Secure Score ve alert’ler konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Secure Score ve alert’ler konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Secure Score ve alert’ler konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Secure Score ve alert’ler lab

**Secure Score ve alert’ler lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Secure Score ve alert’ler lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Secure Score ve alert’ler lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Secure Score ve alert’ler lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Secure Score ve alert’ler lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Secure Score ve alert’ler lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Secure Score ve alert’ler lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Secure Score ve alert’ler lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Secure Score ve alert’ler lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Secure Score ve alert’ler brifing

**Secure Score ve alert’ler brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Secure Score ve alert’ler brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Secure Score ve alert’ler brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Secure Score ve alert’ler brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Secure Score ve alert’ler brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Secure Score ve alert’ler brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Secure Score ve alert’ler brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Secure Score ve alert’ler brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Secure Score ve alert’ler brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Secure Score ve alert’ler KPI

**Secure Score ve alert’ler KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Secure Score ve alert’ler KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Secure Score ve alert’ler KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Secure Score ve alert’ler KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Secure Score ve alert’ler KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Secure Score ve alert’ler KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Secure Score ve alert’ler KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Secure Score ve alert’ler KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Secure Score ve alert’ler KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #1.
2. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #2.
3. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #3.
4. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #4.
5. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #5.
6. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #6.
7. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #7.
8. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #8.
9. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #9.
10. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #10.
11. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #11.
12. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #12.
13. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #13.
14. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #14.
15. Secure Score ve alert’ler ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Secure Score ve alert’ler: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 128. IR runbook: ATO / BEC

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: IR runbook: ATO / BEC

**IR runbook: ATO / BEC** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR runbook: ATO / BEC için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR runbook: ATO / BEC özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR runbook: ATO / BEC yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR runbook: ATO / BEC konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR runbook: ATO / BEC konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR runbook: ATO / BEC konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR runbook: ATO / BEC konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR runbook: ATO / BEC konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: IR runbook: ATO / BEC lab

**IR runbook: ATO / BEC lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR runbook: ATO / BEC lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR runbook: ATO / BEC lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR runbook: ATO / BEC lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR runbook: ATO / BEC lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR runbook: ATO / BEC lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR runbook: ATO / BEC lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR runbook: ATO / BEC lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR runbook: ATO / BEC lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: IR runbook: ATO / BEC brifing

**IR runbook: ATO / BEC brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR runbook: ATO / BEC brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR runbook: ATO / BEC brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR runbook: ATO / BEC brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR runbook: ATO / BEC brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR runbook: ATO / BEC brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR runbook: ATO / BEC brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR runbook: ATO / BEC brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR runbook: ATO / BEC brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: IR runbook: ATO / BEC KPI

**IR runbook: ATO / BEC KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR runbook: ATO / BEC KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR runbook: ATO / BEC KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR runbook: ATO / BEC KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR runbook: ATO / BEC KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR runbook: ATO / BEC KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR runbook: ATO / BEC KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR runbook: ATO / BEC KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR runbook: ATO / BEC KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #1.
2. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #2.
3. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #3.
4. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #4.
5. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #5.
6. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #6.
7. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #7.
8. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #8.
9. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #9.
10. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #10.
11. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #11.
12. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #12.
13. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #13.
14. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #14.
15. IR runbook: ATO / BEC ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

IR runbook: ATO / BEC: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 129. Intune-CA köprüsü (yönetici farkındalığı)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Intune-CA köprüsü (yönetici farkındalığı)

**Intune-CA köprüsü (yönetici farkındalığı)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune-CA köprüsü (yönetici farkındalığı) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune-CA köprüsü (yönetici farkındalığı) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune-CA köprüsü (yönetici farkındalığı) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune-CA köprüsü (yönetici farkındalığı) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune-CA köprüsü (yönetici farkındalığı) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune-CA köprüsü (yönetici farkındalığı) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune-CA köprüsü (yönetici farkındalığı) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune-CA köprüsü (yönetici farkındalığı) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Intune-CA köprüsü (yönetici farkındalığı) lab

**Intune-CA köprüsü (yönetici farkındalığı) lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune-CA köprüsü (yönetici farkındalığı) lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune-CA köprüsü (yönetici farkındalığı) lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune-CA köprüsü (yönetici farkındalığı) lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune-CA köprüsü (yönetici farkındalığı) lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune-CA köprüsü (yönetici farkındalığı) lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune-CA köprüsü (yönetici farkındalığı) lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune-CA köprüsü (yönetici farkındalığı) lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune-CA köprüsü (yönetici farkındalığı) lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Intune-CA köprüsü (yönetici farkındalığı) brifing

**Intune-CA köprüsü (yönetici farkındalığı) brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune-CA köprüsü (yönetici farkındalığı) brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune-CA köprüsü (yönetici farkındalığı) brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune-CA köprüsü (yönetici farkındalığı) brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune-CA köprüsü (yönetici farkındalığı) brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune-CA köprüsü (yönetici farkındalığı) brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune-CA köprüsü (yönetici farkındalığı) brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune-CA köprüsü (yönetici farkındalığı) brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune-CA köprüsü (yönetici farkındalığı) brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Intune-CA köprüsü (yönetici farkındalığı) KPI

**Intune-CA köprüsü (yönetici farkındalığı) KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune-CA köprüsü (yönetici farkındalığı) KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune-CA köprüsü (yönetici farkındalığı) KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune-CA köprüsü (yönetici farkındalığı) KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune-CA köprüsü (yönetici farkındalığı) KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune-CA köprüsü (yönetici farkındalığı) KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune-CA köprüsü (yönetici farkındalığı) KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune-CA köprüsü (yönetici farkındalığı) KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune-CA köprüsü (yönetici farkındalığı) KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #1.
2. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #2.
3. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #3.
4. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #4.
5. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #5.
6. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #6.
7. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #7.
8. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #8.
9. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #9.
10. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #10.
11. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #11.
12. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #12.
13. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #13.
14. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #14.
15. Intune-CA köprüsü (yönetici farkındalığı) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Intune-CA köprüsü (yönetici farkındalığı): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 130. Çapraz uygulama iş akışları

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Çapraz uygulama iş akışları

**Çapraz uygulama iş akışları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Çapraz uygulama iş akışları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Çapraz uygulama iş akışları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Çapraz uygulama iş akışları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Çapraz uygulama iş akışları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Çapraz uygulama iş akışları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Çapraz uygulama iş akışları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Çapraz uygulama iş akışları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Çapraz uygulama iş akışları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Çapraz uygulama iş akışları lab

**Çapraz uygulama iş akışları lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Çapraz uygulama iş akışları lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Çapraz uygulama iş akışları lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Çapraz uygulama iş akışları lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Çapraz uygulama iş akışları lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Çapraz uygulama iş akışları lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Çapraz uygulama iş akışları lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Çapraz uygulama iş akışları lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Çapraz uygulama iş akışları lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Çapraz uygulama iş akışları brifing

**Çapraz uygulama iş akışları brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Çapraz uygulama iş akışları brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Çapraz uygulama iş akışları brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Çapraz uygulama iş akışları brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Çapraz uygulama iş akışları brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Çapraz uygulama iş akışları brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Çapraz uygulama iş akışları brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Çapraz uygulama iş akışları brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Çapraz uygulama iş akışları brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Çapraz uygulama iş akışları KPI

**Çapraz uygulama iş akışları KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Çapraz uygulama iş akışları KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Çapraz uygulama iş akışları KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Çapraz uygulama iş akışları KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Çapraz uygulama iş akışları KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Çapraz uygulama iş akışları KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Çapraz uygulama iş akışları KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Çapraz uygulama iş akışları KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Çapraz uygulama iş akışları KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #1.
2. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #2.
3. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #3.
4. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #4.
5. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #5.
6. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #6.
7. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #7.
8. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #8.
9. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #9.
10. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #10.
11. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #11.
12. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #12.
13. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #13.
14. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #14.
15. Çapraz uygulama iş akışları ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Çapraz uygulama iş akışları: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 131. Capstone: 500 kullanıcı tenant + uygulama akademisi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Güvenlik/Kimlik: Capstone: 500 kullanıcı tenant + uygulama akademisi

**Capstone: 500 kullanıcı tenant + uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Capstone: 500 kullanıcı tenant + uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Capstone: 500 kullanıcı tenant + uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Capstone: 500 kullanıcı tenant + uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Capstone: 500 kullanıcı tenant + uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Capstone: 500 kullanıcı tenant + uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Capstone: 500 kullanıcı tenant + uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Capstone: 500 kullanıcı tenant + uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Capstone: 500 kullanıcı tenant + uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Capstone: 500 kullanıcı tenant + uygulama akademisi lab

**Capstone: 500 kullanıcı tenant + uygulama akademisi lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Capstone: 500 kullanıcı tenant + uygulama akademisi lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Capstone: 500 kullanıcı tenant + uygulama akademisi lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Capstone: 500 kullanıcı tenant + uygulama akademisi lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Capstone: 500 kullanıcı tenant + uygulama akademisi lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Capstone: 500 kullanıcı tenant + uygulama akademisi lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Capstone: 500 kullanıcı tenant + uygulama akademisi lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Capstone: 500 kullanıcı tenant + uygulama akademisi lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Capstone: 500 kullanıcı tenant + uygulama akademisi lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Capstone: 500 kullanıcı tenant + uygulama akademisi brifing

**Capstone: 500 kullanıcı tenant + uygulama akademisi brifing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Capstone: 500 kullanıcı tenant + uygulama akademisi brifing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Capstone: 500 kullanıcı tenant + uygulama akademisi brifing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Capstone: 500 kullanıcı tenant + uygulama akademisi brifing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Capstone: 500 kullanıcı tenant + uygulama akademisi brifing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Capstone: 500 kullanıcı tenant + uygulama akademisi brifing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Capstone: 500 kullanıcı tenant + uygulama akademisi brifing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Capstone: 500 kullanıcı tenant + uygulama akademisi brifing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Capstone: 500 kullanıcı tenant + uygulama akademisi brifing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Güvenlik/Kimlik: Capstone: 500 kullanıcı tenant + uygulama akademisi KPI

**Capstone: 500 kullanıcı tenant + uygulama akademisi KPI** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Capstone: 500 kullanıcı tenant + uygulama akademisi KPI için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Capstone: 500 kullanıcı tenant + uygulama akademisi KPI özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Capstone: 500 kullanıcı tenant + uygulama akademisi KPI yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Capstone: 500 kullanıcı tenant + uygulama akademisi KPI konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Capstone: 500 kullanıcı tenant + uygulama akademisi KPI konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Capstone: 500 kullanıcı tenant + uygulama akademisi KPI konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Capstone: 500 kullanıcı tenant + uygulama akademisi KPI konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Capstone: 500 kullanıcı tenant + uygulama akademisi KPI konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #1.
2. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #2.
3. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #3.
4. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #4.
5. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #5.
6. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #6.
7. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #7.
8. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #8.
9. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #9.
10. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #10.
11. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #11.
12. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #12.
13. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #13.
14. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #14.
15. Capstone: 500 kullanıcı tenant + uygulama akademisi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Capstone: 500 kullanıcı tenant + uygulama akademisi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 132. Mezuniyet stüdyo 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 133. Mezuniyet stüdyo 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 134. Mezuniyet stüdyo 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 135. Mezuniyet stüdyo 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 136. Mezuniyet stüdyo 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 137. Mezuniyet stüdyo 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 138. Mezuniyet stüdyo 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 139. Mezuniyet stüdyo 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 140. Mezuniyet stüdyo 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 141. Mezuniyet stüdyo 10

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 142. Mezuniyet stüdyo 11

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Capstone: admin panel turu

**admin panel turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Exchange tasarımı

**Exchange tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: SPO bilgi mimarisi

**SPO bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SPO bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SPO bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SPO bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SPO bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SPO bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SPO bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SPO bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SPO bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: Teams governance

**Teams governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: uygulama akademisi

**uygulama akademisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uygulama akademisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uygulama akademisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uygulama akademisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uygulama akademisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uygulama akademisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uygulama akademisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uygulama akademisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uygulama akademisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: IR tatbikatı

**IR tatbikatı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR tatbikatı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR tatbikatı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR tatbikatı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR tatbikatı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR tatbikatı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR tatbikatı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR tatbikatı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR tatbikatı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Capstone: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #1.
2. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #2.
3. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #3.
4. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #4.
5. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #5.
6. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #6.
7. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #7.
8. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #8.
9. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #9.
10. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #10.
11. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #11.
12. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #12.
13. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #13.
14. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #14.
15. Mezuniyet stüdyo 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mezuniyet stüdyo 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

# İleri kamp blokları

# Ünite 5075. C06-guvenlik-mezuniyet ileri kamp 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5076. C06-guvenlik-mezuniyet ileri kamp 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5077. C06-guvenlik-mezuniyet ileri kamp 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5078. C06-guvenlik-mezuniyet ileri kamp 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5079. C06-guvenlik-mezuniyet ileri kamp 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5080. C06-guvenlik-mezuniyet ileri kamp 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5081. C06-guvenlik-mezuniyet ileri kamp 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5082. C06-guvenlik-mezuniyet ileri kamp 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5083. C06-guvenlik-mezuniyet ileri kamp 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5084. C06-guvenlik-mezuniyet ileri kamp 10

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5085. C06-guvenlik-mezuniyet ileri kamp 11

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5086. C06-guvenlik-mezuniyet ileri kamp 12

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 12: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5087. C06-guvenlik-mezuniyet ileri kamp 13

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 13: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5088. C06-guvenlik-mezuniyet ileri kamp 14

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 14: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5089. C06-guvenlik-mezuniyet ileri kamp 15

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## İleri kamp: uçtan uca senaryo

**uçtan uca senaryo** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

uçtan uca senaryo için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı uçtan uca senaryo özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te uçtan uca senaryo yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** uçtan uca senaryo konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** uçtan uca senaryo konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** uçtan uca senaryo konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** uçtan uca senaryo konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** uçtan uca senaryo konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: admin panel adımları

**admin panel adımları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

admin panel adımları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı admin panel adımları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te admin panel adımları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** admin panel adımları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** admin panel adımları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** admin panel adımları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** admin panel adımları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** admin panel adımları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: kullanıcı eğitimi

**kullanıcı eğitimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı eğitimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı eğitimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı eğitimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı eğitimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı eğitimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı eğitimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı eğitimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı eğitimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: PowerShell/Graph

**PowerShell/Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PowerShell/Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PowerShell/Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PowerShell/Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PowerShell/Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PowerShell/Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PowerShell/Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PowerShell/Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PowerShell/Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: sorun giderme ağacı

**sorun giderme ağacı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sorun giderme ağacı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sorun giderme ağacı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sorun giderme ağacı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sorun giderme ağacı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sorun giderme ağacı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sorun giderme ağacı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sorun giderme ağacı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sorun giderme ağacı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: güvenlik kontrolü

**güvenlik kontrolü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

güvenlik kontrolü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı güvenlik kontrolü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te güvenlik kontrolü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** güvenlik kontrolü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** güvenlik kontrolü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** güvenlik kontrolü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** güvenlik kontrolü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** güvenlik kontrolü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: KPI ve rapor

**KPI ve rapor** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

KPI ve rapor için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı KPI ve rapor özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te KPI ve rapor yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** KPI ve rapor konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** KPI ve rapor konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** KPI ve rapor konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** KPI ve rapor konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** KPI ve rapor konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: rollback

**rollback** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rollback için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rollback özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rollback yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rollback konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rollback konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rollback konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rollback konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rollback konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: yönetici sunumu

**yönetici sunumu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici sunumu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici sunumu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici sunumu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici sunumu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici sunumu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici sunumu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici sunumu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici sunumu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## İleri kamp: capstone parçası

**capstone parçası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

capstone parçası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı capstone parçası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te capstone parçası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** capstone parçası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** capstone parçası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** capstone parçası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** capstone parçası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** capstone parçası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #1.
2. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #2.
3. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #3.
4. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #4.
5. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #5.
6. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #6.
7. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #7.
8. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #8.
9. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #9.
10. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #10.
11. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #11.
12. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #12.
13. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #13.
14. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #14.
15. C06-guvenlik-mezuniyet ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C06-guvenlik-mezuniyet ileri kamp 15: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.