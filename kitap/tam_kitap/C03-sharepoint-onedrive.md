# Cilt 3 — SharePoint Online ve OneDrive

Dosya, site, izin, admin center, yönetişim.

---

# Ünite 51. OneDrive kullanıcı: yükleme, paylaşım, sürüm

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: OneDrive kullanıcı: yükleme, paylaşım, sürüm

**OneDrive kullanıcı: yükleme, paylaşım, sürüm** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive kullanıcı: yükleme, paylaşım, sürüm için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive kullanıcı: yükleme, paylaşım, sürüm özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive kullanıcı: yükleme, paylaşım, sürüm yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive kullanıcı: yükleme, paylaşım, sürüm konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive kullanıcı: yükleme, paylaşım, sürüm konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive kullanıcı: yükleme, paylaşım, sürüm konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive kullanıcı: yükleme, paylaşım, sürüm konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive kullanıcı: yükleme, paylaşım, sürüm konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama

**OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive kullanıcı: yükleme, paylaşım, sürüm uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim

**OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** OneDrive kullanıcı: yükleme, paylaşım, sürüm yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #1.
2. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #2.
3. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #3.
4. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #4.
5. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #5.
6. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #6.
7. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #7.
8. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #8.
9. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #9.
10. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #10.
11. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #11.
12. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #12.
13. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #13.
14. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #14.
15. OneDrive kullanıcı: yükleme, paylaşım, sürüm ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

OneDrive kullanıcı: yükleme, paylaşım, sürüm: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 52. SharePoint site gezinme ve haber

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: SharePoint site gezinme ve haber

**SharePoint site gezinme ve haber** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint site gezinme ve haber için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint site gezinme ve haber özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint site gezinme ve haber yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint site gezinme ve haber konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint site gezinme ve haber konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint site gezinme ve haber konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint site gezinme ve haber konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint site gezinme ve haber konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: SharePoint site gezinme ve haber uygulama

**SharePoint site gezinme ve haber uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint site gezinme ve haber uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint site gezinme ve haber uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint site gezinme ve haber uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint site gezinme ve haber uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint site gezinme ve haber uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint site gezinme ve haber uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint site gezinme ve haber uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint site gezinme ve haber uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: SharePoint site gezinme ve haber yönetişim

**SharePoint site gezinme ve haber yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint site gezinme ve haber yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint site gezinme ve haber yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint site gezinme ve haber yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint site gezinme ve haber yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint site gezinme ve haber yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint site gezinme ve haber yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint site gezinme ve haber yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint site gezinme ve haber yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #1.
2. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #2.
3. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #3.
4. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #4.
5. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #5.
6. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #6.
7. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #7.
8. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #8.
9. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #9.
10. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #10.
11. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #11.
12. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #12.
13. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #13.
14. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #14.
15. SharePoint site gezinme ve haber ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SharePoint site gezinme ve haber: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 53. Belge kitaplığı, görünüm, meta veri

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Belge kitaplığı, görünüm, meta veri

**Belge kitaplığı, görünüm, meta veri** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Belge kitaplığı, görünüm, meta veri için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Belge kitaplığı, görünüm, meta veri özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Belge kitaplığı, görünüm, meta veri yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Belge kitaplığı, görünüm, meta veri konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Belge kitaplığı, görünüm, meta veri konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Belge kitaplığı, görünüm, meta veri konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Belge kitaplığı, görünüm, meta veri konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Belge kitaplığı, görünüm, meta veri konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Belge kitaplığı, görünüm, meta veri uygulama

**Belge kitaplığı, görünüm, meta veri uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Belge kitaplığı, görünüm, meta veri uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Belge kitaplığı, görünüm, meta veri uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Belge kitaplığı, görünüm, meta veri uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Belge kitaplığı, görünüm, meta veri uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Belge kitaplığı, görünüm, meta veri uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Belge kitaplığı, görünüm, meta veri uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Belge kitaplığı, görünüm, meta veri uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Belge kitaplığı, görünüm, meta veri uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Belge kitaplığı, görünüm, meta veri yönetişim

**Belge kitaplığı, görünüm, meta veri yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Belge kitaplığı, görünüm, meta veri yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Belge kitaplığı, görünüm, meta veri yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Belge kitaplığı, görünüm, meta veri yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Belge kitaplığı, görünüm, meta veri yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Belge kitaplığı, görünüm, meta veri yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Belge kitaplığı, görünüm, meta veri yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Belge kitaplığı, görünüm, meta veri yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Belge kitaplığı, görünüm, meta veri yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #1.
2. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #2.
3. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #3.
4. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #4.
5. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #5.
6. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #6.
7. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #7.
8. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #8.
9. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #9.
10. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #10.
11. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #11.
12. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #12.
13. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #13.
14. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #14.
15. Belge kitaplığı, görünüm, meta veri ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Belge kitaplığı, görünüm, meta veri: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 54. Listeler ve Microsoft Lists

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Listeler ve Microsoft Lists

**Listeler ve Microsoft Lists** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Listeler ve Microsoft Lists için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Listeler ve Microsoft Lists özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Listeler ve Microsoft Lists yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Listeler ve Microsoft Lists konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Listeler ve Microsoft Lists konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Listeler ve Microsoft Lists konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Listeler ve Microsoft Lists konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Listeler ve Microsoft Lists konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Listeler ve Microsoft Lists uygulama

**Listeler ve Microsoft Lists uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Listeler ve Microsoft Lists uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Listeler ve Microsoft Lists uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Listeler ve Microsoft Lists uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Listeler ve Microsoft Lists uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Listeler ve Microsoft Lists uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Listeler ve Microsoft Lists uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Listeler ve Microsoft Lists uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Listeler ve Microsoft Lists uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Listeler ve Microsoft Lists yönetişim

**Listeler ve Microsoft Lists yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Listeler ve Microsoft Lists yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Listeler ve Microsoft Lists yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Listeler ve Microsoft Lists yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Listeler ve Microsoft Lists yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Listeler ve Microsoft Lists yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Listeler ve Microsoft Lists yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Listeler ve Microsoft Lists yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Listeler ve Microsoft Lists yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #1.
2. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #2.
3. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #3.
4. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #4.
5. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #5.
6. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #6.
7. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #7.
8. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #8.
9. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #9.
10. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #10.
11. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #11.
12. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #12.
13. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #13.
14. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #14.
15. Listeler ve Microsoft Lists ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Listeler ve Microsoft Lists: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 55. Sayfa / web bölümü düzenleme

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Sayfa / web bölümü düzenleme

**Sayfa / web bölümü düzenleme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sayfa / web bölümü düzenleme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sayfa / web bölümü düzenleme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sayfa / web bölümü düzenleme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sayfa / web bölümü düzenleme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sayfa / web bölümü düzenleme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sayfa / web bölümü düzenleme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sayfa / web bölümü düzenleme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sayfa / web bölümü düzenleme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Sayfa / web bölümü düzenleme uygulama

**Sayfa / web bölümü düzenleme uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sayfa / web bölümü düzenleme uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sayfa / web bölümü düzenleme uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sayfa / web bölümü düzenleme uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sayfa / web bölümü düzenleme uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sayfa / web bölümü düzenleme uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sayfa / web bölümü düzenleme uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sayfa / web bölümü düzenleme uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sayfa / web bölümü düzenleme uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Sayfa / web bölümü düzenleme yönetişim

**Sayfa / web bölümü düzenleme yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sayfa / web bölümü düzenleme yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sayfa / web bölümü düzenleme yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sayfa / web bölümü düzenleme yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sayfa / web bölümü düzenleme yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sayfa / web bölümü düzenleme yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sayfa / web bölümü düzenleme yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sayfa / web bölümü düzenleme yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sayfa / web bölümü düzenleme yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #1.
2. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #2.
3. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #3.
4. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #4.
5. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #5.
6. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #6.
7. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #7.
8. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #8.
9. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #9.
10. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #10.
11. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #11.
12. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #12.
13. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #13.
14. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #14.
15. Sayfa / web bölümü düzenleme ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Sayfa / web bölümü düzenleme: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 56. SharePoint Admin Center

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: SharePoint Admin Center

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

## SharePoint/OneDrive: SharePoint Admin Center uygulama

**SharePoint Admin Center uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint Admin Center uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint Admin Center uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint Admin Center uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint Admin Center uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint Admin Center uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint Admin Center uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint Admin Center uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint Admin Center uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: SharePoint Admin Center yönetişim

**SharePoint Admin Center yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

SharePoint Admin Center yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı SharePoint Admin Center yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te SharePoint Admin Center yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** SharePoint Admin Center yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** SharePoint Admin Center yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** SharePoint Admin Center yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** SharePoint Admin Center yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** SharePoint Admin Center yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

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

# Ünite 57. Site oluşturma politikaları ve sharing

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Site oluşturma politikaları ve sharing

**Site oluşturma politikaları ve sharing** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Site oluşturma politikaları ve sharing için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Site oluşturma politikaları ve sharing özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Site oluşturma politikaları ve sharing yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Site oluşturma politikaları ve sharing konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Site oluşturma politikaları ve sharing konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Site oluşturma politikaları ve sharing konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Site oluşturma politikaları ve sharing konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Site oluşturma politikaları ve sharing konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Site oluşturma politikaları ve sharing uygulama

**Site oluşturma politikaları ve sharing uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Site oluşturma politikaları ve sharing uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Site oluşturma politikaları ve sharing uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Site oluşturma politikaları ve sharing uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Site oluşturma politikaları ve sharing uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Site oluşturma politikaları ve sharing uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Site oluşturma politikaları ve sharing uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Site oluşturma politikaları ve sharing uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Site oluşturma politikaları ve sharing uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Site oluşturma politikaları ve sharing yönetişim

**Site oluşturma politikaları ve sharing yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Site oluşturma politikaları ve sharing yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Site oluşturma politikaları ve sharing yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Site oluşturma politikaları ve sharing yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Site oluşturma politikaları ve sharing yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Site oluşturma politikaları ve sharing yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Site oluşturma politikaları ve sharing yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Site oluşturma politikaları ve sharing yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Site oluşturma politikaları ve sharing yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #1.
2. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #2.
3. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #3.
4. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #4.
5. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #5.
6. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #6.
7. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #7.
8. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #8.
9. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #9.
10. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #10.
11. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #11.
12. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #12.
13. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #13.
14. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #14.
15. Site oluşturma politikaları ve sharing ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Site oluşturma politikaları ve sharing: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 58. İzin modeli: Owners/Members/Visitors + gruplar

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: İzin modeli: Owners/Members/Visitors + gruplar

**İzin modeli: Owners/Members/Visitors + gruplar** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

İzin modeli: Owners/Members/Visitors + gruplar için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı İzin modeli: Owners/Members/Visitors + gruplar özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te İzin modeli: Owners/Members/Visitors + gruplar yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** İzin modeli: Owners/Members/Visitors + gruplar konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** İzin modeli: Owners/Members/Visitors + gruplar konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** İzin modeli: Owners/Members/Visitors + gruplar konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** İzin modeli: Owners/Members/Visitors + gruplar konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** İzin modeli: Owners/Members/Visitors + gruplar konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: İzin modeli: Owners/Members/Visitors + gruplar uygulama

**İzin modeli: Owners/Members/Visitors + gruplar uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

İzin modeli: Owners/Members/Visitors + gruplar uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı İzin modeli: Owners/Members/Visitors + gruplar uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te İzin modeli: Owners/Members/Visitors + gruplar uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** İzin modeli: Owners/Members/Visitors + gruplar uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** İzin modeli: Owners/Members/Visitors + gruplar uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** İzin modeli: Owners/Members/Visitors + gruplar uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** İzin modeli: Owners/Members/Visitors + gruplar uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** İzin modeli: Owners/Members/Visitors + gruplar uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: İzin modeli: Owners/Members/Visitors + gruplar yönetişim

**İzin modeli: Owners/Members/Visitors + gruplar yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

İzin modeli: Owners/Members/Visitors + gruplar yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı İzin modeli: Owners/Members/Visitors + gruplar yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te İzin modeli: Owners/Members/Visitors + gruplar yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** İzin modeli: Owners/Members/Visitors + gruplar yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** İzin modeli: Owners/Members/Visitors + gruplar yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** İzin modeli: Owners/Members/Visitors + gruplar yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** İzin modeli: Owners/Members/Visitors + gruplar yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** İzin modeli: Owners/Members/Visitors + gruplar yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #1.
2. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #2.
3. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #3.
4. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #4.
5. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #5.
6. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #6.
7. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #7.
8. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #8.
9. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #9.
10. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #10.
11. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #11.
12. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #12.
13. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #13.
14. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #14.
15. İzin modeli: Owners/Members/Visitors + gruplar ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

İzin modeli: Owners/Members/Visitors + gruplar: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 59. Hub site ve intranet bilgi mimarisi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Hub site ve intranet bilgi mimarisi

**Hub site ve intranet bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Hub site ve intranet bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Hub site ve intranet bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Hub site ve intranet bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Hub site ve intranet bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Hub site ve intranet bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Hub site ve intranet bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Hub site ve intranet bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Hub site ve intranet bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Hub site ve intranet bilgi mimarisi uygulama

**Hub site ve intranet bilgi mimarisi uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Hub site ve intranet bilgi mimarisi uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Hub site ve intranet bilgi mimarisi uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Hub site ve intranet bilgi mimarisi uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Hub site ve intranet bilgi mimarisi uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Hub site ve intranet bilgi mimarisi uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Hub site ve intranet bilgi mimarisi uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Hub site ve intranet bilgi mimarisi uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Hub site ve intranet bilgi mimarisi uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Hub site ve intranet bilgi mimarisi yönetişim

**Hub site ve intranet bilgi mimarisi yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Hub site ve intranet bilgi mimarisi yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Hub site ve intranet bilgi mimarisi yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Hub site ve intranet bilgi mimarisi yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Hub site ve intranet bilgi mimarisi yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Hub site ve intranet bilgi mimarisi yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Hub site ve intranet bilgi mimarisi yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Hub site ve intranet bilgi mimarisi yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Hub site ve intranet bilgi mimarisi yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #1.
2. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #2.
3. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #3.
4. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #4.
5. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #5.
6. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #6.
7. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #7.
8. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #8.
9. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #9.
10. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #10.
11. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #11.
12. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #12.
13. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #13.
14. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #14.
15. Hub site ve intranet bilgi mimarisi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Hub site ve intranet bilgi mimarisi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 60. Oversharing avı ve Anyone link

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Oversharing avı ve Anyone link

**Oversharing avı ve Anyone link** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Oversharing avı ve Anyone link için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Oversharing avı ve Anyone link özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Oversharing avı ve Anyone link yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Oversharing avı ve Anyone link konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Oversharing avı ve Anyone link konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Oversharing avı ve Anyone link konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Oversharing avı ve Anyone link konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Oversharing avı ve Anyone link konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Oversharing avı ve Anyone link uygulama

**Oversharing avı ve Anyone link uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Oversharing avı ve Anyone link uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Oversharing avı ve Anyone link uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Oversharing avı ve Anyone link uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Oversharing avı ve Anyone link uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Oversharing avı ve Anyone link uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Oversharing avı ve Anyone link uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Oversharing avı ve Anyone link uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Oversharing avı ve Anyone link uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Oversharing avı ve Anyone link yönetişim

**Oversharing avı ve Anyone link yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Oversharing avı ve Anyone link yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Oversharing avı ve Anyone link yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Oversharing avı ve Anyone link yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Oversharing avı ve Anyone link yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Oversharing avı ve Anyone link yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Oversharing avı ve Anyone link yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Oversharing avı ve Anyone link yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Oversharing avı ve Anyone link yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #1.
2. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #2.
3. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #3.
4. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #4.
5. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #5.
6. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #6.
7. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #7.
8. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #8.
9. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #9.
10. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #10.
11. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #11.
12. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #12.
13. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #13.
14. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #14.
15. Oversharing avı ve Anyone link ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Oversharing avı ve Anyone link: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 61. Arama (Microsoft Search) site/kütüphane

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Arama (Microsoft Search) site/kütüphane

**Arama (Microsoft Search) site/kütüphane** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arama (Microsoft Search) site/kütüphane için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arama (Microsoft Search) site/kütüphane özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arama (Microsoft Search) site/kütüphane yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arama (Microsoft Search) site/kütüphane konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arama (Microsoft Search) site/kütüphane konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arama (Microsoft Search) site/kütüphane konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arama (Microsoft Search) site/kütüphane konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arama (Microsoft Search) site/kütüphane konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Arama (Microsoft Search) site/kütüphane uygulama

**Arama (Microsoft Search) site/kütüphane uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arama (Microsoft Search) site/kütüphane uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arama (Microsoft Search) site/kütüphane uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arama (Microsoft Search) site/kütüphane uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arama (Microsoft Search) site/kütüphane uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arama (Microsoft Search) site/kütüphane uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arama (Microsoft Search) site/kütüphane uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arama (Microsoft Search) site/kütüphane uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arama (Microsoft Search) site/kütüphane uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Arama (Microsoft Search) site/kütüphane yönetişim

**Arama (Microsoft Search) site/kütüphane yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Arama (Microsoft Search) site/kütüphane yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Arama (Microsoft Search) site/kütüphane yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Arama (Microsoft Search) site/kütüphane yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Arama (Microsoft Search) site/kütüphane yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Arama (Microsoft Search) site/kütüphane yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Arama (Microsoft Search) site/kütüphane yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Arama (Microsoft Search) site/kütüphane yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Arama (Microsoft Search) site/kütüphane yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #1.
2. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #2.
3. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #3.
4. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #4.
5. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #5.
6. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #6.
7. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #7.
8. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #8.
9. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #9.
10. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #10.
11. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #11.
12. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #12.
13. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #13.
14. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #14.
15. Arama (Microsoft Search) site/kütüphane ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Arama (Microsoft Search) site/kütüphane: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 62. Sensitivity label / DLP kullanıcı-yönetici

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Sensitivity label / DLP kullanıcı-yönetici

**Sensitivity label / DLP kullanıcı-yönetici** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sensitivity label / DLP kullanıcı-yönetici için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sensitivity label / DLP kullanıcı-yönetici özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sensitivity label / DLP kullanıcı-yönetici yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sensitivity label / DLP kullanıcı-yönetici konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sensitivity label / DLP kullanıcı-yönetici konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sensitivity label / DLP kullanıcı-yönetici konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sensitivity label / DLP kullanıcı-yönetici konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sensitivity label / DLP kullanıcı-yönetici konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Sensitivity label / DLP kullanıcı-yönetici uygulama

**Sensitivity label / DLP kullanıcı-yönetici uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sensitivity label / DLP kullanıcı-yönetici uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sensitivity label / DLP kullanıcı-yönetici uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sensitivity label / DLP kullanıcı-yönetici uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sensitivity label / DLP kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sensitivity label / DLP kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sensitivity label / DLP kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sensitivity label / DLP kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sensitivity label / DLP kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Sensitivity label / DLP kullanıcı-yönetici yönetişim

**Sensitivity label / DLP kullanıcı-yönetici yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Sensitivity label / DLP kullanıcı-yönetici yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Sensitivity label / DLP kullanıcı-yönetici yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Sensitivity label / DLP kullanıcı-yönetici yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Sensitivity label / DLP kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Sensitivity label / DLP kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Sensitivity label / DLP kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Sensitivity label / DLP kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Sensitivity label / DLP kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #1.
2. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #2.
3. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #3.
4. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #4.
5. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #5.
6. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #6.
7. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #7.
8. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #8.
9. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #9.
10. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #10.
11. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #11.
12. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #12.
13. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #13.
14. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #14.
15. Sensitivity label / DLP kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Sensitivity label / DLP kullanıcı-yönetici: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 63. Migrasyon (file share → SPO) farkındalığı

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Migrasyon (file share → SPO) farkındalığı

**Migrasyon (file share → SPO) farkındalığı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon (file share → SPO) farkındalığı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon (file share → SPO) farkındalığı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon (file share → SPO) farkındalığı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon (file share → SPO) farkındalığı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon (file share → SPO) farkındalığı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon (file share → SPO) farkındalığı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon (file share → SPO) farkındalığı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon (file share → SPO) farkındalığı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Migrasyon (file share → SPO) farkındalığı uygulama

**Migrasyon (file share → SPO) farkındalığı uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon (file share → SPO) farkındalığı uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon (file share → SPO) farkındalığı uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon (file share → SPO) farkındalığı uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon (file share → SPO) farkındalığı uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon (file share → SPO) farkındalığı uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon (file share → SPO) farkındalığı uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon (file share → SPO) farkındalığı uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon (file share → SPO) farkındalığı uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Migrasyon (file share → SPO) farkındalığı yönetişim

**Migrasyon (file share → SPO) farkındalığı yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Migrasyon (file share → SPO) farkındalığı yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Migrasyon (file share → SPO) farkındalığı yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Migrasyon (file share → SPO) farkındalığı yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Migrasyon (file share → SPO) farkındalığı yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Migrasyon (file share → SPO) farkındalığı yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Migrasyon (file share → SPO) farkındalığı yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Migrasyon (file share → SPO) farkındalığı yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Migrasyon (file share → SPO) farkındalığı yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #1.
2. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #2.
3. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #3.
4. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #4.
5. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #5.
6. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #6.
7. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #7.
8. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #8.
9. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #9.
10. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #10.
11. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #11.
12. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #12.
13. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #13.
14. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #14.
15. Migrasyon (file share → SPO) farkındalığı ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Migrasyon (file share → SPO) farkındalığı: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 64. Ransomware / restore kullanıcı-yönetici

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: Ransomware / restore kullanıcı-yönetici

**Ransomware / restore kullanıcı-yönetici** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ransomware / restore kullanıcı-yönetici için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ransomware / restore kullanıcı-yönetici özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ransomware / restore kullanıcı-yönetici yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ransomware / restore kullanıcı-yönetici konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ransomware / restore kullanıcı-yönetici konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ransomware / restore kullanıcı-yönetici konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ransomware / restore kullanıcı-yönetici konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ransomware / restore kullanıcı-yönetici konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Ransomware / restore kullanıcı-yönetici uygulama

**Ransomware / restore kullanıcı-yönetici uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ransomware / restore kullanıcı-yönetici uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ransomware / restore kullanıcı-yönetici uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ransomware / restore kullanıcı-yönetici uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ransomware / restore kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ransomware / restore kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ransomware / restore kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ransomware / restore kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ransomware / restore kullanıcı-yönetici uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: Ransomware / restore kullanıcı-yönetici yönetişim

**Ransomware / restore kullanıcı-yönetici yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ransomware / restore kullanıcı-yönetici yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ransomware / restore kullanıcı-yönetici yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ransomware / restore kullanıcı-yönetici yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ransomware / restore kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ransomware / restore kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ransomware / restore kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ransomware / restore kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ransomware / restore kullanıcı-yönetici yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #1.
2. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #2.
3. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #3.
4. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #4.
5. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #5.
6. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #6.
7. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #7.
8. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #8.
9. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #9.
10. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #10.
11. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #11.
12. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #12.
13. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #13.
14. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #14.
15. Ransomware / restore kullanıcı-yönetici ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Ransomware / restore kullanıcı-yönetici: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 65. PnP / Graph ile SPO otomasyon girişi

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SharePoint/OneDrive: PnP / Graph ile SPO otomasyon girişi

**PnP / Graph ile SPO otomasyon girişi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PnP / Graph ile SPO otomasyon girişi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PnP / Graph ile SPO otomasyon girişi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PnP / Graph ile SPO otomasyon girişi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PnP / Graph ile SPO otomasyon girişi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PnP / Graph ile SPO otomasyon girişi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PnP / Graph ile SPO otomasyon girişi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PnP / Graph ile SPO otomasyon girişi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PnP / Graph ile SPO otomasyon girişi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: PnP / Graph ile SPO otomasyon girişi uygulama

**PnP / Graph ile SPO otomasyon girişi uygulama** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PnP / Graph ile SPO otomasyon girişi uygulama için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PnP / Graph ile SPO otomasyon girişi uygulama özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PnP / Graph ile SPO otomasyon girişi uygulama yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PnP / Graph ile SPO otomasyon girişi uygulama konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PnP / Graph ile SPO otomasyon girişi uygulama konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PnP / Graph ile SPO otomasyon girişi uygulama konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PnP / Graph ile SPO otomasyon girişi uygulama konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PnP / Graph ile SPO otomasyon girişi uygulama konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SharePoint/OneDrive: PnP / Graph ile SPO otomasyon girişi yönetişim

**PnP / Graph ile SPO otomasyon girişi yönetişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

PnP / Graph ile SPO otomasyon girişi yönetişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı PnP / Graph ile SPO otomasyon girişi yönetişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te PnP / Graph ile SPO otomasyon girişi yönetişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** PnP / Graph ile SPO otomasyon girişi yönetişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** PnP / Graph ile SPO otomasyon girişi yönetişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** PnP / Graph ile SPO otomasyon girişi yönetişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** PnP / Graph ile SPO otomasyon girişi yönetişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** PnP / Graph ile SPO otomasyon girişi yönetişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #1.
2. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #2.
3. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #3.
4. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #4.
5. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #5.
6. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #6.
7. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #7.
8. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #8.
9. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #9.
10. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #10.
11. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #11.
12. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #12.
13. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #13.
14. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #14.
15. PnP / Graph ile SPO otomasyon girişi ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

PnP / Graph ile SPO otomasyon girişi: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 66. SPO/OD stüdyo 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 67. SPO/OD stüdyo 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 68. SPO/OD stüdyo 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 69. SPO/OD stüdyo 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 70. SPO/OD stüdyo 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 71. SPO/OD stüdyo 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 72. SPO/OD stüdyo 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 73. SPO/OD stüdyo 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 74. SPO/OD stüdyo 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## SPO stüdyo: site tasarımı

**site tasarımı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

site tasarımı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı site tasarımı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te site tasarımı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** site tasarımı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** site tasarımı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** site tasarımı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** site tasarımı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** site tasarımı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: izin sadeleştirme

**izin sadeleştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

izin sadeleştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı izin sadeleştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te izin sadeleştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** izin sadeleştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** izin sadeleştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** izin sadeleştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** izin sadeleştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** izin sadeleştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: sharing politikası

**sharing politikası** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

sharing politikası için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı sharing politikası özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te sharing politikası yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** sharing politikası konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** sharing politikası konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** sharing politikası konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** sharing politikası konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** sharing politikası konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: kütüphane şablonu

**kütüphane şablonu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

kütüphane şablonu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı kütüphane şablonu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te kütüphane şablonu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** kütüphane şablonu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** kütüphane şablonu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** kütüphane şablonu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** kütüphane şablonu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** kütüphane şablonu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: offboarding OneDrive

**offboarding OneDrive** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

offboarding OneDrive için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı offboarding OneDrive özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te offboarding OneDrive yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** offboarding OneDrive konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** offboarding OneDrive konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** offboarding OneDrive konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** offboarding OneDrive konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** offboarding OneDrive konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## SPO stüdyo: arama iyileştirme

**arama iyileştirme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

arama iyileştirme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı arama iyileştirme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te arama iyileştirme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** arama iyileştirme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** arama iyileştirme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** arama iyileştirme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** arama iyileştirme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** arama iyileştirme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #1.
2. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #2.
3. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #3.
4. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #4.
5. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #5.
6. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #6.
7. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #7.
8. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #8.
9. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #9.
10. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #10.
11. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #11.
12. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #12.
13. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #13.
14. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #14.
15. SPO/OD stüdyo 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

SPO/OD stüdyo 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

# İleri kamp blokları

# Ünite 5030. C03-sharepoint-onedrive ileri kamp 1

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

1. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5031. C03-sharepoint-onedrive ileri kamp 2

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

1. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5032. C03-sharepoint-onedrive ileri kamp 3

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

1. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5033. C03-sharepoint-onedrive ileri kamp 4

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

1. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5034. C03-sharepoint-onedrive ileri kamp 5

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

1. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5035. C03-sharepoint-onedrive ileri kamp 6

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

1. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5036. C03-sharepoint-onedrive ileri kamp 7

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

1. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5037. C03-sharepoint-onedrive ileri kamp 8

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

1. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5038. C03-sharepoint-onedrive ileri kamp 9

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

1. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5039. C03-sharepoint-onedrive ileri kamp 10

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

1. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5040. C03-sharepoint-onedrive ileri kamp 11

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

1. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5041. C03-sharepoint-onedrive ileri kamp 12

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

1. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 12: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5042. C03-sharepoint-onedrive ileri kamp 13

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

1. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 13: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5043. C03-sharepoint-onedrive ileri kamp 14

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

1. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 14: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5044. C03-sharepoint-onedrive ileri kamp 15

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

1. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #1.
2. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #2.
3. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #3.
4. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #4.
5. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #5.
6. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #6.
7. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #7.
8. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #8.
9. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #9.
10. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #10.
11. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #11.
12. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #12.
13. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #13.
14. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #14.
15. C03-sharepoint-onedrive ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C03-sharepoint-onedrive ileri kamp 15: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.