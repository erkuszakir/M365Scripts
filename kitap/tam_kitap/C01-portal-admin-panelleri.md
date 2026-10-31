# Cilt 1 — Microsoft 365 Portalı ve Tüm Admin Panelleri

Bu cilt, uygulamanın yanı sıra **yönetim düzlemini** öğretir. Hedef: hangi iş hangi panelde biter, hangi rol gerekir, nasıl güvenli değiştirilir.

---

# Ünite 1. Microsoft 365 Admin Center (admin.microsoft.com)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Microsoft 365 Admin Center (admin.microsoft.com)

**Microsoft 365 Admin Center (admin.microsoft.com)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft 365 Admin Center (admin.microsoft.com) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft 365 Admin Center (admin.microsoft.com) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft 365 Admin Center (admin.microsoft.com) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft 365 Admin Center (admin.microsoft.com) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft 365 Admin Center (admin.microsoft.com) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft 365 Admin Center (admin.microsoft.com) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft 365 Admin Center (admin.microsoft.com) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft 365 Admin Center (admin.microsoft.com) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu

**Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft 365 Admin Center (admin.microsoft.com) lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme

**Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft 365 Admin Center (admin.microsoft.com) sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #1.
2. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #2.
3. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #3.
4. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #4.
5. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #5.
6. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #6.
7. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #7.
8. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #8.
9. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #9.
10. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #10.
11. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #11.
12. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #12.
13. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #13.
14. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #14.
15. Microsoft 365 Admin Center (admin.microsoft.com) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Microsoft 365 Admin Center (admin.microsoft.com): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 2. Kullanıcı oluşturma / lisans atama / gruplar

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Kullanıcı oluşturma / lisans atama / gruplar

**Kullanıcı oluşturma / lisans atama / gruplar** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Kullanıcı oluşturma / lisans atama / gruplar için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Kullanıcı oluşturma / lisans atama / gruplar özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Kullanıcı oluşturma / lisans atama / gruplar yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Kullanıcı oluşturma / lisans atama / gruplar konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Kullanıcı oluşturma / lisans atama / gruplar konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Kullanıcı oluşturma / lisans atama / gruplar konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Kullanıcı oluşturma / lisans atama / gruplar konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Kullanıcı oluşturma / lisans atama / gruplar konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu

**Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Kullanıcı oluşturma / lisans atama / gruplar lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Kullanıcı oluşturma / lisans atama / gruplar sorun giderme

**Kullanıcı oluşturma / lisans atama / gruplar sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Kullanıcı oluşturma / lisans atama / gruplar sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Kullanıcı oluşturma / lisans atama / gruplar sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Kullanıcı oluşturma / lisans atama / gruplar sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Kullanıcı oluşturma / lisans atama / gruplar sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Kullanıcı oluşturma / lisans atama / gruplar sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Kullanıcı oluşturma / lisans atama / gruplar sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Kullanıcı oluşturma / lisans atama / gruplar sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Kullanıcı oluşturma / lisans atama / gruplar sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #1.
2. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #2.
3. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #3.
4. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #4.
5. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #5.
6. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #6.
7. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #7.
8. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #8.
9. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #9.
10. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #10.
11. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #11.
12. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #12.
13. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #13.
14. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #14.
15. Kullanıcı oluşturma / lisans atama / gruplar ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Kullanıcı oluşturma / lisans atama / gruplar: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 3. Roller (RBAC) ve en az yetki

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Roller (RBAC) ve en az yetki

**Roller (RBAC) ve en az yetki** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Roller (RBAC) ve en az yetki için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Roller (RBAC) ve en az yetki özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Roller (RBAC) ve en az yetki yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Roller (RBAC) ve en az yetki konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Roller (RBAC) ve en az yetki konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Roller (RBAC) ve en az yetki konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Roller (RBAC) ve en az yetki konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Roller (RBAC) ve en az yetki konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Roller (RBAC) ve en az yetki lab senaryosu

**Roller (RBAC) ve en az yetki lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Roller (RBAC) ve en az yetki lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Roller (RBAC) ve en az yetki lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Roller (RBAC) ve en az yetki lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Roller (RBAC) ve en az yetki lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Roller (RBAC) ve en az yetki lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Roller (RBAC) ve en az yetki lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Roller (RBAC) ve en az yetki lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Roller (RBAC) ve en az yetki lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Roller (RBAC) ve en az yetki sorun giderme

**Roller (RBAC) ve en az yetki sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Roller (RBAC) ve en az yetki sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Roller (RBAC) ve en az yetki sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Roller (RBAC) ve en az yetki sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Roller (RBAC) ve en az yetki sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Roller (RBAC) ve en az yetki sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Roller (RBAC) ve en az yetki sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Roller (RBAC) ve en az yetki sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Roller (RBAC) ve en az yetki sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #1.
2. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #2.
3. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #3.
4. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #4.
5. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #5.
6. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #6.
7. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #7.
8. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #8.
9. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #9.
10. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #10.
11. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #11.
12. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #12.
13. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #13.
14. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #14.
15. Roller (RBAC) ve en az yetki ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Roller (RBAC) ve en az yetki: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 4. Microsoft Entra Admin Center

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Microsoft Entra Admin Center

**Microsoft Entra Admin Center** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft Entra Admin Center için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft Entra Admin Center özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft Entra Admin Center yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft Entra Admin Center konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft Entra Admin Center konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft Entra Admin Center konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft Entra Admin Center konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft Entra Admin Center konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Microsoft Entra Admin Center lab senaryosu

**Microsoft Entra Admin Center lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft Entra Admin Center lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft Entra Admin Center lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft Entra Admin Center lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft Entra Admin Center lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft Entra Admin Center lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft Entra Admin Center lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft Entra Admin Center lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft Entra Admin Center lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Microsoft Entra Admin Center sorun giderme

**Microsoft Entra Admin Center sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Microsoft Entra Admin Center sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Microsoft Entra Admin Center sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Microsoft Entra Admin Center sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Microsoft Entra Admin Center sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Microsoft Entra Admin Center sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Microsoft Entra Admin Center sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Microsoft Entra Admin Center sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Microsoft Entra Admin Center sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #1.
2. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #2.
3. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #3.
4. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #4.
5. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #5.
6. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #6.
7. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #7.
8. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #8.
9. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #9.
10. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #10.
11. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #11.
12. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #12.
13. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #13.
14. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #14.
15. Microsoft Entra Admin Center ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Microsoft Entra Admin Center: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5. Conditional Access kullanıcı etkisi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Conditional Access kullanıcı etkisi

**Conditional Access kullanıcı etkisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Conditional Access kullanıcı etkisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Conditional Access kullanıcı etkisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Conditional Access kullanıcı etkisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Conditional Access kullanıcı etkisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Conditional Access kullanıcı etkisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Conditional Access kullanıcı etkisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Conditional Access kullanıcı etkisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Conditional Access kullanıcı etkisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Conditional Access kullanıcı etkisi lab senaryosu

**Conditional Access kullanıcı etkisi lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Conditional Access kullanıcı etkisi lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Conditional Access kullanıcı etkisi lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Conditional Access kullanıcı etkisi lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Conditional Access kullanıcı etkisi lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Conditional Access kullanıcı etkisi lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Conditional Access kullanıcı etkisi lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Conditional Access kullanıcı etkisi lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Conditional Access kullanıcı etkisi lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Conditional Access kullanıcı etkisi sorun giderme

**Conditional Access kullanıcı etkisi sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Conditional Access kullanıcı etkisi sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Conditional Access kullanıcı etkisi sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Conditional Access kullanıcı etkisi sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Conditional Access kullanıcı etkisi sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Conditional Access kullanıcı etkisi sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Conditional Access kullanıcı etkisi sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Conditional Access kullanıcı etkisi sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Conditional Access kullanıcı etkisi sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #1.
2. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #2.
3. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #3.
4. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #4.
5. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #5.
6. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #6.
7. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #7.
8. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #8.
9. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #9.
10. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #10.
11. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #11.
12. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #12.
13. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #13.
14. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #14.
15. Conditional Access kullanıcı etkisi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Conditional Access kullanıcı etkisi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 6. Exchange Admin Center

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Exchange Admin Center

**Exchange Admin Center** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Exchange Admin Center lab senaryosu

**Exchange Admin Center lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Exchange Admin Center sorun giderme

**Exchange Admin Center sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Exchange Admin Center sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Exchange Admin Center sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Exchange Admin Center sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Exchange Admin Center sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Exchange Admin Center sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Exchange Admin Center sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Exchange Admin Center sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Exchange Admin Center sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #1.
2. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #2.
3. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #3.
4. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #4.
5. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #5.
6. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #6.
7. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #7.
8. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #8.
9. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #9.
10. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #10.
11. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #11.
12. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #12.
13. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #13.
14. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #14.
15. Exchange Admin Center ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Exchange Admin Center: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 7. Teams Admin Center

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Teams Admin Center

**Teams Admin Center** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Teams Admin Center lab senaryosu

**Teams Admin Center lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Teams Admin Center sorun giderme

**Teams Admin Center sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #1.
2. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #2.
3. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #3.
4. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #4.
5. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #5.
6. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #6.
7. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #7.
8. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #8.
9. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #9.
10. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #10.
11. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #11.
12. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #12.
13. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #13.
14. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #14.
15. Teams Admin Center ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams Admin Center: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 8. SharePoint Admin Center

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: SharePoint Admin Center

**SharePoint Admin Center** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint Admin Center için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint Admin Center özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint Admin Center yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint Admin Center konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint Admin Center konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint Admin Center konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint Admin Center konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint Admin Center konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: SharePoint Admin Center lab senaryosu

**SharePoint Admin Center lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint Admin Center lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint Admin Center lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint Admin Center lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint Admin Center lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint Admin Center lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint Admin Center lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint Admin Center lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint Admin Center lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: SharePoint Admin Center sorun giderme

**SharePoint Admin Center sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint Admin Center sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint Admin Center sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint Admin Center sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint Admin Center sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint Admin Center sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint Admin Center sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint Admin Center sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint Admin Center sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #1.
2. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #2.
3. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #3.
4. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #4.
5. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #5.
6. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #6.
7. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #7.
8. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #8.
9. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #9.
10. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #10.
11. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #11.
12. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #12.
13. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #13.
14. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #14.
15. SharePoint Admin Center ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SharePoint Admin Center: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 9. OneDrive yönetim ayarları

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: OneDrive yönetim ayarları

**OneDrive yönetim ayarları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive yönetim ayarları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive yönetim ayarları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive yönetim ayarları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive yönetim ayarları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive yönetim ayarları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive yönetim ayarları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive yönetim ayarları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive yönetim ayarları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: OneDrive yönetim ayarları lab senaryosu

**OneDrive yönetim ayarları lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive yönetim ayarları lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive yönetim ayarları lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive yönetim ayarları lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive yönetim ayarları lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive yönetim ayarları lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive yönetim ayarları lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive yönetim ayarları lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive yönetim ayarları lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: OneDrive yönetim ayarları sorun giderme

**OneDrive yönetim ayarları sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive yönetim ayarları sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive yönetim ayarları sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive yönetim ayarları sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive yönetim ayarları sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive yönetim ayarları sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive yönetim ayarları sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive yönetim ayarları sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive yönetim ayarları sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #1.
2. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #2.
3. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #3.
4. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #4.
5. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #5.
6. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #6.
7. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #7.
8. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #8.
9. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #9.
10. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #10.
11. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #11.
12. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #12.
13. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #13.
14. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #14.
15. OneDrive yönetim ayarları ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

OneDrive yönetim ayarları: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 10. Security.microsoft.com (Defender portal)

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Security.microsoft.com (Defender portal)

**Security.microsoft.com (Defender portal)** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Security.microsoft.com (Defender portal) için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Security.microsoft.com (Defender portal) özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Security.microsoft.com (Defender portal) yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Security.microsoft.com (Defender portal) konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Security.microsoft.com (Defender portal) konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Security.microsoft.com (Defender portal) konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Security.microsoft.com (Defender portal) konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Security.microsoft.com (Defender portal) konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Security.microsoft.com (Defender portal) lab senaryosu

**Security.microsoft.com (Defender portal) lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Security.microsoft.com (Defender portal) lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Security.microsoft.com (Defender portal) lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Security.microsoft.com (Defender portal) lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Security.microsoft.com (Defender portal) lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Security.microsoft.com (Defender portal) lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Security.microsoft.com (Defender portal) lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Security.microsoft.com (Defender portal) lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Security.microsoft.com (Defender portal) lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Security.microsoft.com (Defender portal) sorun giderme

**Security.microsoft.com (Defender portal) sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Security.microsoft.com (Defender portal) sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Security.microsoft.com (Defender portal) sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Security.microsoft.com (Defender portal) sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Security.microsoft.com (Defender portal) sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Security.microsoft.com (Defender portal) sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Security.microsoft.com (Defender portal) sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Security.microsoft.com (Defender portal) sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Security.microsoft.com (Defender portal) sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #1.
2. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #2.
3. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #3.
4. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #4.
5. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #5.
6. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #6.
7. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #7.
8. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #8.
9. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #9.
10. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #10.
11. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #11.
12. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #12.
13. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #13.
14. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #14.
15. Security.microsoft.com (Defender portal) ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Security.microsoft.com (Defender portal): doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 11. Compliance / Purview portal

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Compliance / Purview portal

**Compliance / Purview portal** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Compliance / Purview portal için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Compliance / Purview portal özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Compliance / Purview portal yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Compliance / Purview portal konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Compliance / Purview portal konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Compliance / Purview portal konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Compliance / Purview portal konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Compliance / Purview portal konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Compliance / Purview portal lab senaryosu

**Compliance / Purview portal lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Compliance / Purview portal lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Compliance / Purview portal lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Compliance / Purview portal lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Compliance / Purview portal lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Compliance / Purview portal lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Compliance / Purview portal lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Compliance / Purview portal lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Compliance / Purview portal lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Compliance / Purview portal sorun giderme

**Compliance / Purview portal sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Compliance / Purview portal sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Compliance / Purview portal sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Compliance / Purview portal sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Compliance / Purview portal sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Compliance / Purview portal sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Compliance / Purview portal sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Compliance / Purview portal sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Compliance / Purview portal sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #1.
2. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #2.
3. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #3.
4. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #4.
5. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #5.
6. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #6.
7. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #7.
8. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #8.
9. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #9.
10. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #10.
11. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #11.
12. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #12.
13. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #13.
14. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #14.
15. Compliance / Purview portal ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Compliance / Purview portal: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 12. Intune / Endpoint yönetim girişi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Intune / Endpoint yönetim girişi

**Intune / Endpoint yönetim girişi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune / Endpoint yönetim girişi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune / Endpoint yönetim girişi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune / Endpoint yönetim girişi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune / Endpoint yönetim girişi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune / Endpoint yönetim girişi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune / Endpoint yönetim girişi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune / Endpoint yönetim girişi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune / Endpoint yönetim girişi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Intune / Endpoint yönetim girişi lab senaryosu

**Intune / Endpoint yönetim girişi lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune / Endpoint yönetim girişi lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune / Endpoint yönetim girişi lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune / Endpoint yönetim girişi lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune / Endpoint yönetim girişi lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune / Endpoint yönetim girişi lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune / Endpoint yönetim girişi lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune / Endpoint yönetim girişi lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune / Endpoint yönetim girişi lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Intune / Endpoint yönetim girişi sorun giderme

**Intune / Endpoint yönetim girişi sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Intune / Endpoint yönetim girişi sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Intune / Endpoint yönetim girişi sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Intune / Endpoint yönetim girişi sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Intune / Endpoint yönetim girişi sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Intune / Endpoint yönetim girişi sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Intune / Endpoint yönetim girişi sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Intune / Endpoint yönetim girişi sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Intune / Endpoint yönetim girişi sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #1.
2. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #2.
3. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #3.
4. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #4.
5. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #5.
6. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #6.
7. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #7.
8. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #8.
9. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #9.
10. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #10.
11. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #11.
12. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #12.
13. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #13.
14. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #14.
15. Intune / Endpoint yönetim girişi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Intune / Endpoint yönetim girişi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 13. Power Platform admin giriş

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Power Platform admin giriş

**Power Platform admin giriş** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Power Platform admin giriş için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Power Platform admin giriş özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Power Platform admin giriş yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Power Platform admin giriş konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Power Platform admin giriş konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Power Platform admin giriş konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Power Platform admin giriş konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Power Platform admin giriş konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Power Platform admin giriş lab senaryosu

**Power Platform admin giriş lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Power Platform admin giriş lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Power Platform admin giriş lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Power Platform admin giriş lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Power Platform admin giriş lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Power Platform admin giriş lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Power Platform admin giriş lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Power Platform admin giriş lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Power Platform admin giriş lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Power Platform admin giriş sorun giderme

**Power Platform admin giriş sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Power Platform admin giriş sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Power Platform admin giriş sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Power Platform admin giriş sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Power Platform admin giriş sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Power Platform admin giriş sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Power Platform admin giriş sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Power Platform admin giriş sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Power Platform admin giriş sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #1.
2. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #2.
3. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #3.
4. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #4.
5. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #5.
6. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #6.
7. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #7.
8. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #8.
9. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #9.
10. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #10.
11. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #11.
12. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #12.
13. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #13.
14. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #14.
15. Power Platform admin giriş ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Power Platform admin giriş: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 14. Message Center ve Service Health

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Message Center ve Service Health

**Message Center ve Service Health** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message Center ve Service Health için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message Center ve Service Health özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message Center ve Service Health yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message Center ve Service Health konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message Center ve Service Health konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message Center ve Service Health konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message Center ve Service Health konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message Center ve Service Health konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Message Center ve Service Health lab senaryosu

**Message Center ve Service Health lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message Center ve Service Health lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message Center ve Service Health lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message Center ve Service Health lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message Center ve Service Health lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message Center ve Service Health lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message Center ve Service Health lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message Center ve Service Health lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message Center ve Service Health lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Message Center ve Service Health sorun giderme

**Message Center ve Service Health sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Message Center ve Service Health sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Message Center ve Service Health sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Message Center ve Service Health sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Message Center ve Service Health sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Message Center ve Service Health sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Message Center ve Service Health sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Message Center ve Service Health sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Message Center ve Service Health sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #1.
2. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #2.
3. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #3.
4. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #4.
5. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #5.
6. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #6.
7. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #7.
8. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #8.
9. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #9.
10. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #10.
11. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #11.
12. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #12.
13. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #13.
14. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #14.
15. Message Center ve Service Health ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Message Center ve Service Health: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 15. Raporlar ve kullanım analitiği

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Raporlar ve kullanım analitiği

**Raporlar ve kullanım analitiği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Raporlar ve kullanım analitiği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Raporlar ve kullanım analitiği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Raporlar ve kullanım analitiği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Raporlar ve kullanım analitiği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Raporlar ve kullanım analitiği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Raporlar ve kullanım analitiği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Raporlar ve kullanım analitiği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Raporlar ve kullanım analitiği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Raporlar ve kullanım analitiği lab senaryosu

**Raporlar ve kullanım analitiği lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Raporlar ve kullanım analitiği lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Raporlar ve kullanım analitiği lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Raporlar ve kullanım analitiği lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Raporlar ve kullanım analitiği lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Raporlar ve kullanım analitiği lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Raporlar ve kullanım analitiği lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Raporlar ve kullanım analitiği lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Raporlar ve kullanım analitiği lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Raporlar ve kullanım analitiği sorun giderme

**Raporlar ve kullanım analitiği sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Raporlar ve kullanım analitiği sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Raporlar ve kullanım analitiği sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Raporlar ve kullanım analitiği sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Raporlar ve kullanım analitiği sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Raporlar ve kullanım analitiği sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Raporlar ve kullanım analitiği sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Raporlar ve kullanım analitiği sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Raporlar ve kullanım analitiği sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #1.
2. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #2.
3. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #3.
4. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #4.
5. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #5.
6. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #6.
7. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #7.
8. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #8.
9. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #9.
10. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #10.
11. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #11.
12. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #12.
13. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #13.
14. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #14.
15. Raporlar ve kullanım analitiği ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Raporlar ve kullanım analitiği: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 16. Domain / DNS yönetim farkındalığı

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Domain / DNS yönetim farkındalığı

**Domain / DNS yönetim farkındalığı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Domain / DNS yönetim farkındalığı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Domain / DNS yönetim farkındalığı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Domain / DNS yönetim farkındalığı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Domain / DNS yönetim farkındalığı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Domain / DNS yönetim farkındalığı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Domain / DNS yönetim farkındalığı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Domain / DNS yönetim farkındalığı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Domain / DNS yönetim farkındalığı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Domain / DNS yönetim farkındalığı lab senaryosu

**Domain / DNS yönetim farkındalığı lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Domain / DNS yönetim farkındalığı lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Domain / DNS yönetim farkındalığı lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Domain / DNS yönetim farkındalığı lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Domain / DNS yönetim farkındalığı lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Domain / DNS yönetim farkındalığı lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Domain / DNS yönetim farkındalığı lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Domain / DNS yönetim farkındalığı lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Domain / DNS yönetim farkındalığı lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Domain / DNS yönetim farkındalığı sorun giderme

**Domain / DNS yönetim farkındalığı sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Domain / DNS yönetim farkındalığı sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Domain / DNS yönetim farkındalığı sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Domain / DNS yönetim farkındalığı sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Domain / DNS yönetim farkındalığı sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Domain / DNS yönetim farkındalığı sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Domain / DNS yönetim farkındalığı sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Domain / DNS yönetim farkındalığı sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Domain / DNS yönetim farkındalığı sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #1.
2. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #2.
3. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #3.
4. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #4.
5. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #5.
6. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #6.
7. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #7.
8. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #8.
9. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #9.
10. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #10.
11. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #11.
12. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #12.
13. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #13.
14. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #14.
15. Domain / DNS yönetim farkındalığı ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Domain / DNS yönetim farkındalığı: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 17. Misafir (guest) yönetimi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Misafir (guest) yönetimi

**Misafir (guest) yönetimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir (guest) yönetimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir (guest) yönetimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir (guest) yönetimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir (guest) yönetimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir (guest) yönetimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir (guest) yönetimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir (guest) yönetimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir (guest) yönetimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Misafir (guest) yönetimi lab senaryosu

**Misafir (guest) yönetimi lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir (guest) yönetimi lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir (guest) yönetimi lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir (guest) yönetimi lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir (guest) yönetimi lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir (guest) yönetimi lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir (guest) yönetimi lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir (guest) yönetimi lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir (guest) yönetimi lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Misafir (guest) yönetimi sorun giderme

**Misafir (guest) yönetimi sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir (guest) yönetimi sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir (guest) yönetimi sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir (guest) yönetimi sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir (guest) yönetimi sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir (guest) yönetimi sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir (guest) yönetimi sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir (guest) yönetimi sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir (guest) yönetimi sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #1.
2. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #2.
3. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #3.
4. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #4.
5. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #5.
6. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #6.
7. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #7.
8. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #8.
9. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #9.
10. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #10.
11. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #11.
12. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #12.
13. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #13.
14. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #14.
15. Misafir (guest) yönetimi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Misafir (guest) yönetimi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 18. Şirket teması / marka / organizasyon profili

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Admin panel: Şirket teması / marka / organizasyon profili

**Şirket teması / marka / organizasyon profili** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Şirket teması / marka / organizasyon profili için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Şirket teması / marka / organizasyon profili özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Şirket teması / marka / organizasyon profili yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Şirket teması / marka / organizasyon profili konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Şirket teması / marka / organizasyon profili konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Şirket teması / marka / organizasyon profili konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Şirket teması / marka / organizasyon profili konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Şirket teması / marka / organizasyon profili konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Şirket teması / marka / organizasyon profili lab senaryosu

**Şirket teması / marka / organizasyon profili lab senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Şirket teması / marka / organizasyon profili lab senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Şirket teması / marka / organizasyon profili lab senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Şirket teması / marka / organizasyon profili lab senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Şirket teması / marka / organizasyon profili lab senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Şirket teması / marka / organizasyon profili lab senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Şirket teması / marka / organizasyon profili lab senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Şirket teması / marka / organizasyon profili lab senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Şirket teması / marka / organizasyon profili lab senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Admin panel: Şirket teması / marka / organizasyon profili sorun giderme

**Şirket teması / marka / organizasyon profili sorun giderme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Şirket teması / marka / organizasyon profili sorun giderme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Şirket teması / marka / organizasyon profili sorun giderme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Şirket teması / marka / organizasyon profili sorun giderme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Şirket teması / marka / organizasyon profili sorun giderme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Şirket teması / marka / organizasyon profili sorun giderme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Şirket teması / marka / organizasyon profili sorun giderme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Şirket teması / marka / organizasyon profili sorun giderme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Şirket teması / marka / organizasyon profili sorun giderme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #1.
2. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #2.
3. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #3.
4. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #4.
5. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #5.
6. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #6.
7. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #7.
8. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #8.
9. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #9.
10. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #10.
11. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #11.
12. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #12.
13. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #13.
14. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #14.
15. Şirket teması / marka / organizasyon profili ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Şirket teması / marka / organizasyon profili: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 19. Admin panel stüdyo kampı 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 20. Admin panel stüdyo kampı 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 21. Admin panel stüdyo kampı 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 22. Admin panel stüdyo kampı 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 23. Admin panel stüdyo kampı 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 24. Admin panel stüdyo kampı 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 25. Admin panel stüdyo kampı 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 26. Admin panel stüdyo kampı 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 27. Admin panel stüdyo kampı 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Stüdyo: envanter çıkarma

**envanter çıkarma** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

envanter çıkarma için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı envanter çıkarma özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te envanter çıkarma yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** envanter çıkarma konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** envanter çıkarma konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** envanter çıkarma konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** envanter çıkarma konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** envanter çıkarma konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rol matrisi

**rol matrisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

rol matrisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı rol matrisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te rol matrisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** rol matrisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** rol matrisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** rol matrisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** rol matrisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** rol matrisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: pilot değişiklik

**pilot değişiklik** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

pilot değişiklik için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı pilot değişiklik özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te pilot değişiklik yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** pilot değişiklik konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** pilot değişiklik konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** pilot değişiklik konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** pilot değişiklik konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** pilot değişiklik konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: rollback

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

## Stüdyo: yönetici brifingi

**yönetici brifingi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

yönetici brifingi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı yönetici brifingi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te yönetici brifingi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** yönetici brifingi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** yönetici brifingi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** yönetici brifingi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** yönetici brifingi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** yönetici brifingi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Stüdyo: kullanıcı iletişimi

**kullanıcı iletişimi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kullanıcı iletişimi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kullanıcı iletişimi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kullanıcı iletişimi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kullanıcı iletişimi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kullanıcı iletişimi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kullanıcı iletişimi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kullanıcı iletişimi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kullanıcı iletişimi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #1.
2. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #2.
3. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #3.
4. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #4.
5. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #5.
6. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #6.
7. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #7.
8. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #8.
9. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #9.
10. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #10.
11. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #11.
12. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #12.
13. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #13.
14. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #14.
15. Admin panel stüdyo kampı 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Admin panel stüdyo kampı 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

# İleri kamp blokları

# Ünite 5000. C01-portal-admin-panelleri ileri kamp 1

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

1. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5001. C01-portal-admin-panelleri ileri kamp 2

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

1. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5002. C01-portal-admin-panelleri ileri kamp 3

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

1. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5003. C01-portal-admin-panelleri ileri kamp 4

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

1. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5004. C01-portal-admin-panelleri ileri kamp 5

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

1. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5005. C01-portal-admin-panelleri ileri kamp 6

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

1. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5006. C01-portal-admin-panelleri ileri kamp 7

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

1. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5007. C01-portal-admin-panelleri ileri kamp 8

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

1. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5008. C01-portal-admin-panelleri ileri kamp 9

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

1. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5009. C01-portal-admin-panelleri ileri kamp 10

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

1. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5010. C01-portal-admin-panelleri ileri kamp 11

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

1. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5011. C01-portal-admin-panelleri ileri kamp 12

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

1. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 12: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5012. C01-portal-admin-panelleri ileri kamp 13

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

1. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 13: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5013. C01-portal-admin-panelleri ileri kamp 14

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

1. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 14: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5014. C01-portal-admin-panelleri ileri kamp 15

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

1. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #1.
2. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #2.
3. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #3.
4. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #4.
5. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #5.
6. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #6.
7. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #7.
8. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #8.
9. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #9.
10. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #10.
11. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #11.
12. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #12.
13. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #13.
14. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #14.
15. C01-portal-admin-panelleri ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C01-portal-admin-panelleri ileri kamp 15: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.