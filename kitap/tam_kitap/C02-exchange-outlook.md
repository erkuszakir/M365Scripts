# Cilt 2 — Exchange Online ve Outlook

Posta + takvim + yönetici paneli + güvenli mail operasyonu.

---

# Ünite 28. Outlook on the web — posta temelleri

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Outlook on the web — posta temelleri

**Outlook on the web — posta temelleri** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook on the web — posta temelleri için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook on the web — posta temelleri özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook on the web — posta temelleri yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook on the web — posta temelleri konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook on the web — posta temelleri konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook on the web — posta temelleri konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook on the web — posta temelleri konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook on the web — posta temelleri konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Outlook on the web — posta temelleri yapılandırma

**Outlook on the web — posta temelleri yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook on the web — posta temelleri yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook on the web — posta temelleri yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook on the web — posta temelleri yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook on the web — posta temelleri yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook on the web — posta temelleri yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook on the web — posta temelleri yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook on the web — posta temelleri yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook on the web — posta temelleri yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Outlook on the web — posta temelleri lab

**Outlook on the web — posta temelleri lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook on the web — posta temelleri lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook on the web — posta temelleri lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook on the web — posta temelleri lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook on the web — posta temelleri lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook on the web — posta temelleri lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook on the web — posta temelleri lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook on the web — posta temelleri lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook on the web — posta temelleri lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #1.
2. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #2.
3. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #3.
4. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #4.
5. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #5.
6. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #6.
7. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #7.
8. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #8.
9. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #9.
10. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #10.
11. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #11.
12. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #12.
13. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #13.
14. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #14.
15. Outlook on the web — posta temelleri ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Outlook on the web — posta temelleri: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 29. Outlook takvim, oda, toplantı

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Outlook takvim, oda, toplantı

**Outlook takvim, oda, toplantı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook takvim, oda, toplantı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook takvim, oda, toplantı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook takvim, oda, toplantı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook takvim, oda, toplantı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook takvim, oda, toplantı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook takvim, oda, toplantı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook takvim, oda, toplantı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook takvim, oda, toplantı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Outlook takvim, oda, toplantı yapılandırma

**Outlook takvim, oda, toplantı yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook takvim, oda, toplantı yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook takvim, oda, toplantı yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook takvim, oda, toplantı yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook takvim, oda, toplantı yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook takvim, oda, toplantı yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook takvim, oda, toplantı yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook takvim, oda, toplantı yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook takvim, oda, toplantı yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Outlook takvim, oda, toplantı lab

**Outlook takvim, oda, toplantı lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Outlook takvim, oda, toplantı lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Outlook takvim, oda, toplantı lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Outlook takvim, oda, toplantı lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Outlook takvim, oda, toplantı lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Outlook takvim, oda, toplantı lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Outlook takvim, oda, toplantı lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Outlook takvim, oda, toplantı lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Outlook takvim, oda, toplantı lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #1.
2. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #2.
3. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #3.
4. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #4.
5. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #5.
6. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #6.
7. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #7.
8. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #8.
9. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #9.
10. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #10.
11. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #11.
12. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #12.
13. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #13.
14. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #14.
15. Outlook takvim, oda, toplantı ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Outlook takvim, oda, toplantı: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 30. Paylaşılan posta kutusu (kullanıcı + yönetici)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Paylaşılan posta kutusu (kullanıcı + yönetici)

**Paylaşılan posta kutusu (kullanıcı + yönetici)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Paylaşılan posta kutusu (kullanıcı + yönetici) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Paylaşılan posta kutusu (kullanıcı + yönetici) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Paylaşılan posta kutusu (kullanıcı + yönetici) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Paylaşılan posta kutusu (kullanıcı + yönetici) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Paylaşılan posta kutusu (kullanıcı + yönetici) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Paylaşılan posta kutusu (kullanıcı + yönetici) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Paylaşılan posta kutusu (kullanıcı + yönetici) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Paylaşılan posta kutusu (kullanıcı + yönetici) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma

**Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Paylaşılan posta kutusu (kullanıcı + yönetici) yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Paylaşılan posta kutusu (kullanıcı + yönetici) lab

**Paylaşılan posta kutusu (kullanıcı + yönetici) lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Paylaşılan posta kutusu (kullanıcı + yönetici) lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Paylaşılan posta kutusu (kullanıcı + yönetici) lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Paylaşılan posta kutusu (kullanıcı + yönetici) lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Paylaşılan posta kutusu (kullanıcı + yönetici) lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Paylaşılan posta kutusu (kullanıcı + yönetici) lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Paylaşılan posta kutusu (kullanıcı + yönetici) lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Paylaşılan posta kutusu (kullanıcı + yönetici) lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Paylaşılan posta kutusu (kullanıcı + yönetici) lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #1.
2. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #2.
3. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #3.
4. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #4.
5. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #5.
6. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #6.
7. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #7.
8. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #8.
9. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #9.
10. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #10.
11. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #11.
12. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #12.
13. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #13.
14. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #14.
15. Paylaşılan posta kutusu (kullanıcı + yönetici) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Paylaşılan posta kutusu (kullanıcı + yönetici): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 31. Alıcı türleri: user/shared/room/group/DL

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Alıcı türleri: user/shared/room/group/DL

**Alıcı türleri: user/shared/room/group/DL** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Alıcı türleri: user/shared/room/group/DL için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Alıcı türleri: user/shared/room/group/DL özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Alıcı türleri: user/shared/room/group/DL yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Alıcı türleri: user/shared/room/group/DL konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Alıcı türleri: user/shared/room/group/DL konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Alıcı türleri: user/shared/room/group/DL konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Alıcı türleri: user/shared/room/group/DL konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Alıcı türleri: user/shared/room/group/DL konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Alıcı türleri: user/shared/room/group/DL yapılandırma

**Alıcı türleri: user/shared/room/group/DL yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Alıcı türleri: user/shared/room/group/DL yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Alıcı türleri: user/shared/room/group/DL yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Alıcı türleri: user/shared/room/group/DL yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Alıcı türleri: user/shared/room/group/DL yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Alıcı türleri: user/shared/room/group/DL yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Alıcı türleri: user/shared/room/group/DL yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Alıcı türleri: user/shared/room/group/DL yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Alıcı türleri: user/shared/room/group/DL yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Alıcı türleri: user/shared/room/group/DL lab

**Alıcı türleri: user/shared/room/group/DL lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Alıcı türleri: user/shared/room/group/DL lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Alıcı türleri: user/shared/room/group/DL lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Alıcı türleri: user/shared/room/group/DL lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Alıcı türleri: user/shared/room/group/DL lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Alıcı türleri: user/shared/room/group/DL lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Alıcı türleri: user/shared/room/group/DL lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Alıcı türleri: user/shared/room/group/DL lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Alıcı türleri: user/shared/room/group/DL lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #1.
2. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #2.
3. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #3.
4. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #4.
5. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #5.
6. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #6.
7. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #7.
8. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #8.
9. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #9.
10. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #10.
11. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #11.
12. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #12.
13. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #13.
14. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #14.
15. Alıcı türleri: user/shared/room/group/DL ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Alıcı türleri: user/shared/room/group/DL: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 32. Exchange Admin Center turu

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Exchange Admin Center turu

**Exchange Admin Center turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Exchange Admin Center turu yapılandırma

**Exchange Admin Center turu yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center turu yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center turu yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center turu yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center turu yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center turu yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center turu yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center turu yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center turu yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Exchange Admin Center turu lab

**Exchange Admin Center turu lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center turu lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center turu lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center turu lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center turu lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center turu lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center turu lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center turu lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center turu lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange Admin Center turu ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange Admin Center turu: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 33. Mail flow / transport rules

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Mail flow / transport rules

**Mail flow / transport rules** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mail flow / transport rules için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mail flow / transport rules özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mail flow / transport rules yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mail flow / transport rules konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mail flow / transport rules konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mail flow / transport rules konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mail flow / transport rules konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mail flow / transport rules konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Mail flow / transport rules yapılandırma

**Mail flow / transport rules yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mail flow / transport rules yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mail flow / transport rules yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mail flow / transport rules yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mail flow / transport rules yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mail flow / transport rules yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mail flow / transport rules yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mail flow / transport rules yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mail flow / transport rules yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Mail flow / transport rules lab

**Mail flow / transport rules lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mail flow / transport rules lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mail flow / transport rules lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mail flow / transport rules lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mail flow / transport rules lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mail flow / transport rules lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mail flow / transport rules lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mail flow / transport rules lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mail flow / transport rules lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #1.
2. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #2.
3. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #3.
4. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #4.
5. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #5.
6. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #6.
7. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #7.
8. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #8.
9. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #9.
10. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #10.
11. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #11.
12. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #12.
13. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #13.
14. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #14.
15. Mail flow / transport rules ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mail flow / transport rules: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 34. Anti-spam, quarantine, Defender for Office 365

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Anti-spam, quarantine, Defender for Office 365

**Anti-spam, quarantine, Defender for Office 365** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Anti-spam, quarantine, Defender for Office 365 için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Anti-spam, quarantine, Defender for Office 365 özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Anti-spam, quarantine, Defender for Office 365 yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Anti-spam, quarantine, Defender for Office 365 konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Anti-spam, quarantine, Defender for Office 365 konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Anti-spam, quarantine, Defender for Office 365 konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Anti-spam, quarantine, Defender for Office 365 konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Anti-spam, quarantine, Defender for Office 365 konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Anti-spam, quarantine, Defender for Office 365 yapılandırma

**Anti-spam, quarantine, Defender for Office 365 yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Anti-spam, quarantine, Defender for Office 365 yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Anti-spam, quarantine, Defender for Office 365 yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Anti-spam, quarantine, Defender for Office 365 yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Anti-spam, quarantine, Defender for Office 365 yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Anti-spam, quarantine, Defender for Office 365 yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Anti-spam, quarantine, Defender for Office 365 yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Anti-spam, quarantine, Defender for Office 365 yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Anti-spam, quarantine, Defender for Office 365 yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Anti-spam, quarantine, Defender for Office 365 lab

**Anti-spam, quarantine, Defender for Office 365 lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Anti-spam, quarantine, Defender for Office 365 lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Anti-spam, quarantine, Defender for Office 365 lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Anti-spam, quarantine, Defender for Office 365 lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Anti-spam, quarantine, Defender for Office 365 lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Anti-spam, quarantine, Defender for Office 365 lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Anti-spam, quarantine, Defender for Office 365 lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Anti-spam, quarantine, Defender for Office 365 lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Anti-spam, quarantine, Defender for Office 365 lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #1.
2. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #2.
3. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #3.
4. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #4.
5. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #5.
6. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #6.
7. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #7.
8. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #8.
9. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #9.
10. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #10.
11. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #11.
12. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #12.
13. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #13.
14. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #14.
15. Anti-spam, quarantine, Defender for Office 365 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Anti-spam, quarantine, Defender for Office 365: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 35. MX SPF DKIM DMARC (yönetici)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: MX SPF DKIM DMARC (yönetici)

**MX SPF DKIM DMARC (yönetici)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MX SPF DKIM DMARC (yönetici) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MX SPF DKIM DMARC (yönetici) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MX SPF DKIM DMARC (yönetici) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MX SPF DKIM DMARC (yönetici) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MX SPF DKIM DMARC (yönetici) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MX SPF DKIM DMARC (yönetici) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MX SPF DKIM DMARC (yönetici) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MX SPF DKIM DMARC (yönetici) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: MX SPF DKIM DMARC (yönetici) yapılandırma

**MX SPF DKIM DMARC (yönetici) yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MX SPF DKIM DMARC (yönetici) yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MX SPF DKIM DMARC (yönetici) yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MX SPF DKIM DMARC (yönetici) yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MX SPF DKIM DMARC (yönetici) yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MX SPF DKIM DMARC (yönetici) yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MX SPF DKIM DMARC (yönetici) yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MX SPF DKIM DMARC (yönetici) yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MX SPF DKIM DMARC (yönetici) yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: MX SPF DKIM DMARC (yönetici) lab

**MX SPF DKIM DMARC (yönetici) lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

MX SPF DKIM DMARC (yönetici) lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı MX SPF DKIM DMARC (yönetici) lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te MX SPF DKIM DMARC (yönetici) lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** MX SPF DKIM DMARC (yönetici) lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** MX SPF DKIM DMARC (yönetici) lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** MX SPF DKIM DMARC (yönetici) lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** MX SPF DKIM DMARC (yönetici) lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** MX SPF DKIM DMARC (yönetici) lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #1.
2. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #2.
3. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #3.
4. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #4.
5. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #5.
6. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #6.
7. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #7.
8. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #8.
9. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #9.
10. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #10.
11. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #11.
12. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #12.
13. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #13.
14. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #14.
15. MX SPF DKIM DMARC (yönetici) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

MX SPF DKIM DMARC (yönetici): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 36. Arşiv, hold, retention kullanıcı etkisi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Arşiv, hold, retention kullanıcı etkisi

**Arşiv, hold, retention kullanıcı etkisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arşiv, hold, retention kullanıcı etkisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arşiv, hold, retention kullanıcı etkisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arşiv, hold, retention kullanıcı etkisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arşiv, hold, retention kullanıcı etkisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arşiv, hold, retention kullanıcı etkisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arşiv, hold, retention kullanıcı etkisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arşiv, hold, retention kullanıcı etkisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arşiv, hold, retention kullanıcı etkisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Arşiv, hold, retention kullanıcı etkisi yapılandırma

**Arşiv, hold, retention kullanıcı etkisi yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arşiv, hold, retention kullanıcı etkisi yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arşiv, hold, retention kullanıcı etkisi yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arşiv, hold, retention kullanıcı etkisi yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arşiv, hold, retention kullanıcı etkisi yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arşiv, hold, retention kullanıcı etkisi yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arşiv, hold, retention kullanıcı etkisi yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arşiv, hold, retention kullanıcı etkisi yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arşiv, hold, retention kullanıcı etkisi yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Arşiv, hold, retention kullanıcı etkisi lab

**Arşiv, hold, retention kullanıcı etkisi lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arşiv, hold, retention kullanıcı etkisi lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arşiv, hold, retention kullanıcı etkisi lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arşiv, hold, retention kullanıcı etkisi lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arşiv, hold, retention kullanıcı etkisi lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arşiv, hold, retention kullanıcı etkisi lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arşiv, hold, retention kullanıcı etkisi lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arşiv, hold, retention kullanıcı etkisi lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arşiv, hold, retention kullanıcı etkisi lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #1.
2. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #2.
3. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #3.
4. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #4.
5. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #5.
6. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #6.
7. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #7.
8. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #8.
9. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #9.
10. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #10.
11. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #11.
12. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #12.
13. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #13.
14. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #14.
15. Arşiv, hold, retention kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Arşiv, hold, retention kullanıcı etkisi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 37. Message trace ve sorun giderme

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Message trace ve sorun giderme

**Message trace ve sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message trace ve sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message trace ve sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message trace ve sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message trace ve sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message trace ve sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message trace ve sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message trace ve sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message trace ve sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Message trace ve sorun giderme yapılandırma

**Message trace ve sorun giderme yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message trace ve sorun giderme yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message trace ve sorun giderme yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message trace ve sorun giderme yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message trace ve sorun giderme yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message trace ve sorun giderme yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message trace ve sorun giderme yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message trace ve sorun giderme yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message trace ve sorun giderme yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Message trace ve sorun giderme lab

**Message trace ve sorun giderme lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message trace ve sorun giderme lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message trace ve sorun giderme lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message trace ve sorun giderme lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message trace ve sorun giderme lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message trace ve sorun giderme lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message trace ve sorun giderme lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message trace ve sorun giderme lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message trace ve sorun giderme lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #1.
2. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #2.
3. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #3.
4. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #4.
5. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #5.
6. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #6.
7. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #7.
8. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #8.
9. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #9.
10. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #10.
11. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #11.
12. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #12.
13. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #13.
14. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #14.
15. Message trace ve sorun giderme ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Message trace ve sorun giderme: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 38. Mobil Outlook ve modern auth

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Mobil Outlook ve modern auth

**Mobil Outlook ve modern auth** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mobil Outlook ve modern auth için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mobil Outlook ve modern auth özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mobil Outlook ve modern auth yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mobil Outlook ve modern auth konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mobil Outlook ve modern auth konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mobil Outlook ve modern auth konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mobil Outlook ve modern auth konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mobil Outlook ve modern auth konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Mobil Outlook ve modern auth yapılandırma

**Mobil Outlook ve modern auth yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mobil Outlook ve modern auth yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mobil Outlook ve modern auth yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mobil Outlook ve modern auth yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mobil Outlook ve modern auth yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mobil Outlook ve modern auth yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mobil Outlook ve modern auth yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mobil Outlook ve modern auth yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mobil Outlook ve modern auth yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Mobil Outlook ve modern auth lab

**Mobil Outlook ve modern auth lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Mobil Outlook ve modern auth lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Mobil Outlook ve modern auth lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Mobil Outlook ve modern auth lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Mobil Outlook ve modern auth lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Mobil Outlook ve modern auth lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Mobil Outlook ve modern auth lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Mobil Outlook ve modern auth lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Mobil Outlook ve modern auth lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #1.
2. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #2.
3. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #3.
4. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #4.
5. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #5.
6. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #6.
7. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #7.
8. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #8.
9. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #9.
10. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #10.
11. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #11.
12. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #12.
13. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #13.
14. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #14.
15. Mobil Outlook ve modern auth ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Mobil Outlook ve modern auth: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 39. Exchange Online PowerShell operasyonları

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Exchange Online PowerShell operasyonları

**Exchange Online PowerShell operasyonları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Online PowerShell operasyonları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Online PowerShell operasyonları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Online PowerShell operasyonları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Online PowerShell operasyonları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Online PowerShell operasyonları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Online PowerShell operasyonları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Online PowerShell operasyonları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Online PowerShell operasyonları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Exchange Online PowerShell operasyonları yapılandırma

**Exchange Online PowerShell operasyonları yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Online PowerShell operasyonları yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Online PowerShell operasyonları yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Online PowerShell operasyonları yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Online PowerShell operasyonları yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Online PowerShell operasyonları yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Online PowerShell operasyonları yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Online PowerShell operasyonları yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Online PowerShell operasyonları yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Exchange Online PowerShell operasyonları lab

**Exchange Online PowerShell operasyonları lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Online PowerShell operasyonları lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Online PowerShell operasyonları lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Online PowerShell operasyonları lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Online PowerShell operasyonları lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Online PowerShell operasyonları lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Online PowerShell operasyonları lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Online PowerShell operasyonları lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Online PowerShell operasyonları lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange Online PowerShell operasyonları ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange Online PowerShell operasyonları: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 40. Migrasyon ve hibrit farkındalığı

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: Migrasyon ve hibrit farkındalığı

**Migrasyon ve hibrit farkındalığı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon ve hibrit farkındalığı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon ve hibrit farkındalığı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon ve hibrit farkındalığı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon ve hibrit farkındalığı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon ve hibrit farkındalığı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon ve hibrit farkındalığı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon ve hibrit farkındalığı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon ve hibrit farkındalığı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Migrasyon ve hibrit farkındalığı yapılandırma

**Migrasyon ve hibrit farkındalığı yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon ve hibrit farkındalığı yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon ve hibrit farkındalığı yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon ve hibrit farkındalığı yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon ve hibrit farkındalığı yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon ve hibrit farkındalığı yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon ve hibrit farkındalığı yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon ve hibrit farkındalığı yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon ve hibrit farkındalığı yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: Migrasyon ve hibrit farkındalığı lab

**Migrasyon ve hibrit farkındalığı lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon ve hibrit farkındalığı lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon ve hibrit farkındalığı lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon ve hibrit farkındalığı lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon ve hibrit farkındalığı lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon ve hibrit farkındalığı lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon ve hibrit farkındalığı lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon ve hibrit farkındalığı lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon ve hibrit farkındalığı lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #1.
2. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #2.
3. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #3.
4. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #4.
5. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #5.
6. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #6.
7. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #7.
8. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #8.
9. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #9.
10. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #10.
11. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #11.
12. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #12.
13. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #13.
14. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #14.
15. Migrasyon ve hibrit farkındalığı ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Migrasyon ve hibrit farkındalığı: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 41. eDiscovery / audit köprüsü

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Exchange: eDiscovery / audit köprüsü

**eDiscovery / audit köprüsü** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

eDiscovery / audit köprüsü için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı eDiscovery / audit köprüsü özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te eDiscovery / audit köprüsü yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** eDiscovery / audit köprüsü konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** eDiscovery / audit köprüsü konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** eDiscovery / audit köprüsü konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** eDiscovery / audit köprüsü konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** eDiscovery / audit köprüsü konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: eDiscovery / audit köprüsü yapılandırma

**eDiscovery / audit köprüsü yapılandırma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

eDiscovery / audit köprüsü yapılandırma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı eDiscovery / audit köprüsü yapılandırma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te eDiscovery / audit köprüsü yapılandırma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** eDiscovery / audit köprüsü yapılandırma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** eDiscovery / audit köprüsü yapılandırma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** eDiscovery / audit köprüsü yapılandırma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** eDiscovery / audit köprüsü yapılandırma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** eDiscovery / audit köprüsü yapılandırma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Exchange: eDiscovery / audit köprüsü lab

**eDiscovery / audit köprüsü lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

eDiscovery / audit köprüsü lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı eDiscovery / audit köprüsü lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te eDiscovery / audit köprüsü lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** eDiscovery / audit köprüsü lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** eDiscovery / audit köprüsü lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** eDiscovery / audit köprüsü lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** eDiscovery / audit köprüsü lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** eDiscovery / audit köprüsü lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #1.
2. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #2.
3. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #3.
4. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #4.
5. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #5.
6. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #6.
7. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #7.
8. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #8.
9. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #9.
10. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #10.
11. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #11.
12. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #12.
13. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #13.
14. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #14.
15. eDiscovery / audit köprüsü ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

eDiscovery / audit köprüsü: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 42. Exchange stüdyo 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 43. Exchange stüdyo 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 44. Exchange stüdyo 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 45. Exchange stüdyo 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 46. Exchange stüdyo 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 47. Exchange stüdyo 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 48. Exchange stüdyo 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 49. Exchange stüdyo 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 50. Exchange stüdyo 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## EXO stüdyo: shared mailbox tasarımı

**shared mailbox tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

shared mailbox tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı shared mailbox tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te shared mailbox tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** shared mailbox tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** shared mailbox tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** shared mailbox tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** shared mailbox tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** shared mailbox tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: DNS kontrol listesi

**DNS kontrol listesi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

DNS kontrol listesi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı DNS kontrol listesi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te DNS kontrol listesi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** DNS kontrol listesi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** DNS kontrol listesi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** DNS kontrol listesi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** DNS kontrol listesi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** DNS kontrol listesi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: anti-phish politikası

**anti-phish politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

anti-phish politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı anti-phish politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te anti-phish politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** anti-phish politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** anti-phish politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** anti-phish politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** anti-phish politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** anti-phish politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: kullanıcı eğitimi

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

## EXO stüdyo: IR BEC kartı

**IR BEC kartı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

IR BEC kartı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı IR BEC kartı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te IR BEC kartı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** IR BEC kartı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** IR BEC kartı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** IR BEC kartı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** IR BEC kartı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** IR BEC kartı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## EXO stüdyo: raporlama

**raporlama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

raporlama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı raporlama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te raporlama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** raporlama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** raporlama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** raporlama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** raporlama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** raporlama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange stüdyo 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange stüdyo 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

# İleri kamp blokları

# Ünite 5015. C02-exchange-outlook ileri kamp 1

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

1. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5016. C02-exchange-outlook ileri kamp 2

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

1. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5017. C02-exchange-outlook ileri kamp 3

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

1. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5018. C02-exchange-outlook ileri kamp 4

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

1. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5019. C02-exchange-outlook ileri kamp 5

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

1. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5020. C02-exchange-outlook ileri kamp 6

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

1. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5021. C02-exchange-outlook ileri kamp 7

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

1. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5022. C02-exchange-outlook ileri kamp 8

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

1. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5023. C02-exchange-outlook ileri kamp 9

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

1. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5024. C02-exchange-outlook ileri kamp 10

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

1. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5025. C02-exchange-outlook ileri kamp 11

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

1. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5026. C02-exchange-outlook ileri kamp 12

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

1. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 12: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5027. C02-exchange-outlook ileri kamp 13

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

1. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 13: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5028. C02-exchange-outlook ileri kamp 14

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

1. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 14: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5029. C02-exchange-outlook ileri kamp 15

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

1. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #1.
2. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #2.
3. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #3.
4. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #4.
5. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #5.
6. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #6.
7. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #7.
8. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #8.
9. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #9.
10. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #10.
11. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #11.
12. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #12.
13. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #13.
14. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #14.
15. C02-exchange-outlook ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C02-exchange-outlook ileri kamp 15: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.