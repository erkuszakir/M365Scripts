# Cilt 4 — Microsoft Teams (kullanıcı + yönetici)

İşbirliği uygulaması ve Teams admin paneli.

---

# Ünite 75. Teams sohbet, kanal, dosya temelleri

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Teams sohbet, kanal, dosya temelleri

**Teams sohbet, kanal, dosya temelleri** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams sohbet, kanal, dosya temelleri için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams sohbet, kanal, dosya temelleri özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams sohbet, kanal, dosya temelleri yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams sohbet, kanal, dosya temelleri konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams sohbet, kanal, dosya temelleri konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams sohbet, kanal, dosya temelleri konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams sohbet, kanal, dosya temelleri konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams sohbet, kanal, dosya temelleri konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams sohbet, kanal, dosya temelleri politika

**Teams sohbet, kanal, dosya temelleri politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams sohbet, kanal, dosya temelleri politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams sohbet, kanal, dosya temelleri politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams sohbet, kanal, dosya temelleri politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams sohbet, kanal, dosya temelleri politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams sohbet, kanal, dosya temelleri politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams sohbet, kanal, dosya temelleri politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams sohbet, kanal, dosya temelleri politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams sohbet, kanal, dosya temelleri politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams sohbet, kanal, dosya temelleri lab

**Teams sohbet, kanal, dosya temelleri lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams sohbet, kanal, dosya temelleri lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams sohbet, kanal, dosya temelleri lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams sohbet, kanal, dosya temelleri lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams sohbet, kanal, dosya temelleri lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams sohbet, kanal, dosya temelleri lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams sohbet, kanal, dosya temelleri lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams sohbet, kanal, dosya temelleri lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams sohbet, kanal, dosya temelleri lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #1.
2. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #2.
3. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #3.
4. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #4.
5. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #5.
6. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #6.
7. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #7.
8. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #8.
9. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #9.
10. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #10.
11. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #11.
12. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #12.
13. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #13.
14. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #14.
15. Teams sohbet, kanal, dosya temelleri ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams sohbet, kanal, dosya temelleri: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 76. Toplantı, ekran paylaşımı, kayıt

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Toplantı, ekran paylaşımı, kayıt

**Toplantı, ekran paylaşımı, kayıt** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Toplantı, ekran paylaşımı, kayıt için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Toplantı, ekran paylaşımı, kayıt özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Toplantı, ekran paylaşımı, kayıt yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Toplantı, ekran paylaşımı, kayıt konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Toplantı, ekran paylaşımı, kayıt konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Toplantı, ekran paylaşımı, kayıt konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Toplantı, ekran paylaşımı, kayıt konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Toplantı, ekran paylaşımı, kayıt konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Toplantı, ekran paylaşımı, kayıt politika

**Toplantı, ekran paylaşımı, kayıt politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Toplantı, ekran paylaşımı, kayıt politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Toplantı, ekran paylaşımı, kayıt politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Toplantı, ekran paylaşımı, kayıt politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Toplantı, ekran paylaşımı, kayıt politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Toplantı, ekran paylaşımı, kayıt politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Toplantı, ekran paylaşımı, kayıt politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Toplantı, ekran paylaşımı, kayıt politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Toplantı, ekran paylaşımı, kayıt politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Toplantı, ekran paylaşımı, kayıt lab

**Toplantı, ekran paylaşımı, kayıt lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Toplantı, ekran paylaşımı, kayıt lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Toplantı, ekran paylaşımı, kayıt lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Toplantı, ekran paylaşımı, kayıt lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Toplantı, ekran paylaşımı, kayıt lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Toplantı, ekran paylaşımı, kayıt lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Toplantı, ekran paylaşımı, kayıt lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Toplantı, ekran paylaşımı, kayıt lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Toplantı, ekran paylaşımı, kayıt lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #1.
2. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #2.
3. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #3.
4. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #4.
5. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #5.
6. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #6.
7. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #7.
8. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #8.
9. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #9.
10. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #10.
11. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #11.
12. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #12.
13. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #13.
14. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #14.
15. Toplantı, ekran paylaşımı, kayıt ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Toplantı, ekran paylaşımı, kayıt: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 77. Private / shared kanal

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Private / shared kanal

**Private / shared kanal** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Private / shared kanal için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Private / shared kanal özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Private / shared kanal yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Private / shared kanal konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Private / shared kanal konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Private / shared kanal konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Private / shared kanal konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Private / shared kanal konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Private / shared kanal politika

**Private / shared kanal politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Private / shared kanal politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Private / shared kanal politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Private / shared kanal politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Private / shared kanal politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Private / shared kanal politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Private / shared kanal politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Private / shared kanal politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Private / shared kanal politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Private / shared kanal lab

**Private / shared kanal lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Private / shared kanal lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Private / shared kanal lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Private / shared kanal lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Private / shared kanal lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Private / shared kanal lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Private / shared kanal lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Private / shared kanal lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Private / shared kanal lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #1.
2. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #2.
3. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #3.
4. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #4.
5. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #5.
6. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #6.
7. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #7.
8. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #8.
9. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #9.
10. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #10.
11. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #11.
12. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #12.
13. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #13.
14. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #14.
15. Private / shared kanal ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Private / shared kanal: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 78. Teams Admin Center turu

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Teams Admin Center turu

**Teams Admin Center turu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center turu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center turu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center turu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center turu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center turu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center turu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center turu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center turu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams Admin Center turu politika

**Teams Admin Center turu politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center turu politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center turu politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center turu politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center turu politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center turu politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center turu politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center turu politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center turu politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams Admin Center turu lab

**Teams Admin Center turu lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams Admin Center turu lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams Admin Center turu lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams Admin Center turu lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams Admin Center turu lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams Admin Center turu lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams Admin Center turu lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams Admin Center turu lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams Admin Center turu lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #1.
2. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #2.
3. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #3.
4. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #4.
5. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #5.
6. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #6.
7. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #7.
8. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #8.
9. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #9.
10. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #10.
11. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #11.
12. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #12.
13. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #13.
14. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #14.
15. Teams Admin Center turu ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams Admin Center turu: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 79. Messaging / meeting / app politikaları

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Messaging / meeting / app politikaları

**Messaging / meeting / app politikaları** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Messaging / meeting / app politikaları için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Messaging / meeting / app politikaları özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Messaging / meeting / app politikaları yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Messaging / meeting / app politikaları konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Messaging / meeting / app politikaları konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Messaging / meeting / app politikaları konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Messaging / meeting / app politikaları konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Messaging / meeting / app politikaları konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Messaging / meeting / app politikaları politika

**Messaging / meeting / app politikaları politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Messaging / meeting / app politikaları politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Messaging / meeting / app politikaları politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Messaging / meeting / app politikaları politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Messaging / meeting / app politikaları politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Messaging / meeting / app politikaları politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Messaging / meeting / app politikaları politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Messaging / meeting / app politikaları politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Messaging / meeting / app politikaları politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Messaging / meeting / app politikaları lab

**Messaging / meeting / app politikaları lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Messaging / meeting / app politikaları lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Messaging / meeting / app politikaları lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Messaging / meeting / app politikaları lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Messaging / meeting / app politikaları lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Messaging / meeting / app politikaları lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Messaging / meeting / app politikaları lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Messaging / meeting / app politikaları lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Messaging / meeting / app politikaları lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #1.
2. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #2.
3. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #3.
4. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #4.
5. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #5.
6. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #6.
7. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #7.
8. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #8.
9. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #9.
10. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #10.
11. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #11.
12. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #12.
13. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #13.
14. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #14.
15. Messaging / meeting / app politikaları ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Messaging / meeting / app politikaları: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 80. Naming, expiration, templates

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Naming, expiration, templates

**Naming, expiration, templates** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Naming, expiration, templates için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Naming, expiration, templates özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Naming, expiration, templates yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Naming, expiration, templates konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Naming, expiration, templates konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Naming, expiration, templates konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Naming, expiration, templates konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Naming, expiration, templates konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Naming, expiration, templates politika

**Naming, expiration, templates politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Naming, expiration, templates politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Naming, expiration, templates politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Naming, expiration, templates politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Naming, expiration, templates politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Naming, expiration, templates politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Naming, expiration, templates politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Naming, expiration, templates politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Naming, expiration, templates politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Naming, expiration, templates lab

**Naming, expiration, templates lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Naming, expiration, templates lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Naming, expiration, templates lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Naming, expiration, templates lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Naming, expiration, templates lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Naming, expiration, templates lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Naming, expiration, templates lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Naming, expiration, templates lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Naming, expiration, templates lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #1.
2. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #2.
3. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #3.
4. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #4.
5. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #5.
6. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #6.
7. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #7.
8. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #8.
9. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #9.
10. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #10.
11. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #11.
12. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #12.
13. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #13.
14. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #14.
15. Naming, expiration, templates ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Naming, expiration, templates: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 81. Misafir ve dış erişim

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Misafir ve dış erişim

**Misafir ve dış erişim** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir ve dış erişim için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir ve dış erişim özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir ve dış erişim yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir ve dış erişim konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir ve dış erişim konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir ve dış erişim konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir ve dış erişim konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir ve dış erişim konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Misafir ve dış erişim politika

**Misafir ve dış erişim politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir ve dış erişim politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir ve dış erişim politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir ve dış erişim politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir ve dış erişim politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir ve dış erişim politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir ve dış erişim politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir ve dış erişim politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir ve dış erişim politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Misafir ve dış erişim lab

**Misafir ve dış erişim lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Misafir ve dış erişim lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Misafir ve dış erişim lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Misafir ve dış erişim lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Misafir ve dış erişim lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Misafir ve dış erişim lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Misafir ve dış erişim lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Misafir ve dış erişim lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Misafir ve dış erişim lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #1.
2. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #2.
3. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #3.
4. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #4.
5. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #5.
6. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #6.
7. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #7.
8. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #8.
9. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #9.
10. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #10.
11. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #11.
12. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #12.
13. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #13.
14. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #14.
15. Misafir ve dış erişim ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Misafir ve dış erişim: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 82. Teams + SPO + EXO bağımlılık modeli

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Teams + SPO + EXO bağımlılık modeli

**Teams + SPO + EXO bağımlılık modeli** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams + SPO + EXO bağımlılık modeli için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams + SPO + EXO bağımlılık modeli özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams + SPO + EXO bağımlılık modeli yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams + SPO + EXO bağımlılık modeli konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams + SPO + EXO bağımlılık modeli konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams + SPO + EXO bağımlılık modeli konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams + SPO + EXO bağımlılık modeli konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams + SPO + EXO bağımlılık modeli konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams + SPO + EXO bağımlılık modeli politika

**Teams + SPO + EXO bağımlılık modeli politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams + SPO + EXO bağımlılık modeli politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams + SPO + EXO bağımlılık modeli politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams + SPO + EXO bağımlılık modeli politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams + SPO + EXO bağımlılık modeli politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams + SPO + EXO bağımlılık modeli politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams + SPO + EXO bağımlılık modeli politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams + SPO + EXO bağımlılık modeli politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams + SPO + EXO bağımlılık modeli politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams + SPO + EXO bağımlılık modeli lab

**Teams + SPO + EXO bağımlılık modeli lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams + SPO + EXO bağımlılık modeli lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams + SPO + EXO bağımlılık modeli lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams + SPO + EXO bağımlılık modeli lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams + SPO + EXO bağımlılık modeli lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams + SPO + EXO bağımlılık modeli lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams + SPO + EXO bağımlılık modeli lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams + SPO + EXO bağımlılık modeli lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams + SPO + EXO bağımlılık modeli lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #1.
2. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #2.
3. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #3.
4. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #4.
5. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #5.
6. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #6.
7. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #7.
8. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #8.
9. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #9.
10. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #10.
11. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #11.
12. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #12.
13. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #13.
14. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #14.
15. Teams + SPO + EXO bağımlılık modeli ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams + SPO + EXO bağımlılık modeli: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 83. Voice / Rooms giriş

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Voice / Rooms giriş

**Voice / Rooms giriş** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Voice / Rooms giriş için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Voice / Rooms giriş özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Voice / Rooms giriş yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Voice / Rooms giriş konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Voice / Rooms giriş konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Voice / Rooms giriş konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Voice / Rooms giriş konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Voice / Rooms giriş konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Voice / Rooms giriş politika

**Voice / Rooms giriş politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Voice / Rooms giriş politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Voice / Rooms giriş politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Voice / Rooms giriş politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Voice / Rooms giriş politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Voice / Rooms giriş politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Voice / Rooms giriş politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Voice / Rooms giriş politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Voice / Rooms giriş politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Voice / Rooms giriş lab

**Voice / Rooms giriş lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Voice / Rooms giriş lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Voice / Rooms giriş lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Voice / Rooms giriş lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Voice / Rooms giriş lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Voice / Rooms giriş lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Voice / Rooms giriş lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Voice / Rooms giriş lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Voice / Rooms giriş lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #1.
2. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #2.
3. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #3.
4. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #4.
5. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #5.
6. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #6.
7. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #7.
8. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #8.
9. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #9.
10. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #10.
11. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #11.
12. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #12.
13. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #13.
14. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #14.
15. Voice / Rooms giriş ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Voice / Rooms giriş: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 84. Ağ, QoS, Call Analytics farkındalığı

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Ağ, QoS, Call Analytics farkındalığı

**Ağ, QoS, Call Analytics farkındalığı** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ağ, QoS, Call Analytics farkındalığı için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ağ, QoS, Call Analytics farkındalığı özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ağ, QoS, Call Analytics farkındalığı yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ağ, QoS, Call Analytics farkındalığı konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ağ, QoS, Call Analytics farkındalığı konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ağ, QoS, Call Analytics farkındalığı konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ağ, QoS, Call Analytics farkındalığı konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ağ, QoS, Call Analytics farkındalığı konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Ağ, QoS, Call Analytics farkındalığı politika

**Ağ, QoS, Call Analytics farkındalığı politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ağ, QoS, Call Analytics farkındalığı politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ağ, QoS, Call Analytics farkındalığı politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ağ, QoS, Call Analytics farkındalığı politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ağ, QoS, Call Analytics farkındalığı politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ağ, QoS, Call Analytics farkındalığı politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ağ, QoS, Call Analytics farkındalığı politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ağ, QoS, Call Analytics farkındalığı politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ağ, QoS, Call Analytics farkındalığı politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Ağ, QoS, Call Analytics farkındalığı lab

**Ağ, QoS, Call Analytics farkındalığı lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Ağ, QoS, Call Analytics farkındalığı lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Ağ, QoS, Call Analytics farkındalığı lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Ağ, QoS, Call Analytics farkındalığı lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Ağ, QoS, Call Analytics farkındalığı lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Ağ, QoS, Call Analytics farkındalığı lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Ağ, QoS, Call Analytics farkındalığı lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Ağ, QoS, Call Analytics farkındalığı lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Ağ, QoS, Call Analytics farkındalığı lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #1.
2. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #2.
3. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #3.
4. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #4.
5. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #5.
6. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #6.
7. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #7.
8. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #8.
9. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #9.
10. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #10.
11. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #11.
12. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #12.
13. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #13.
14. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #14.
15. Ağ, QoS, Call Analytics farkındalığı ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Ağ, QoS, Call Analytics farkındalığı: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 85. Teams PowerShell / Graph

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Teams PowerShell / Graph

**Teams PowerShell / Graph** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams PowerShell / Graph için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams PowerShell / Graph özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams PowerShell / Graph yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams PowerShell / Graph konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams PowerShell / Graph konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams PowerShell / Graph konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams PowerShell / Graph konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams PowerShell / Graph konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams PowerShell / Graph politika

**Teams PowerShell / Graph politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams PowerShell / Graph politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams PowerShell / Graph politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams PowerShell / Graph politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams PowerShell / Graph politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams PowerShell / Graph politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams PowerShell / Graph politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams PowerShell / Graph politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams PowerShell / Graph politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Teams PowerShell / Graph lab

**Teams PowerShell / Graph lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Teams PowerShell / Graph lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Teams PowerShell / Graph lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Teams PowerShell / Graph lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Teams PowerShell / Graph lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Teams PowerShell / Graph lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Teams PowerShell / Graph lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Teams PowerShell / Graph lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Teams PowerShell / Graph lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #1.
2. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #2.
3. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #3.
4. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #4.
5. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #5.
6. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #6.
7. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #7.
8. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #8.
9. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #9.
10. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #10.
11. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #11.
12. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #12.
13. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #13.
14. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #14.
15. Teams PowerShell / Graph ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams PowerShell / Graph: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 86. Weinar / town hall

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Weinar / town hall

**Weinar / town hall** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Weinar / town hall için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Weinar / town hall özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Weinar / town hall yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Weinar / town hall konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Weinar / town hall konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Weinar / town hall konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Weinar / town hall konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Weinar / town hall konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Weinar / town hall politika

**Weinar / town hall politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Weinar / town hall politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Weinar / town hall politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Weinar / town hall politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Weinar / town hall politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Weinar / town hall politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Weinar / town hall politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Weinar / town hall politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Weinar / town hall politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Weinar / town hall lab

**Weinar / town hall lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Weinar / town hall lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Weinar / town hall lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Weinar / town hall lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Weinar / town hall lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Weinar / town hall lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Weinar / town hall lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Weinar / town hall lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Weinar / town hall lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #1.
2. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #2.
3. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #3.
4. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #4.
5. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #5.
6. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #6.
7. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #7.
8. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #8.
9. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #9.
10. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #10.
11. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #11.
12. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #12.
13. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #13.
14. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #14.
15. Weinar / town hall ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Weinar / town hall: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 87. Eğitim ve benimseme

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams: Eğitim ve benimseme

**Eğitim ve benimseme** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Eğitim ve benimseme için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Eğitim ve benimseme özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Eğitim ve benimseme yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Eğitim ve benimseme konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Eğitim ve benimseme konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Eğitim ve benimseme konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Eğitim ve benimseme konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Eğitim ve benimseme konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Eğitim ve benimseme politika

**Eğitim ve benimseme politika** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Eğitim ve benimseme politika için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Eğitim ve benimseme politika özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Eğitim ve benimseme politika yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Eğitim ve benimseme politika konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Eğitim ve benimseme politika konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Eğitim ve benimseme politika konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Eğitim ve benimseme politika konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Eğitim ve benimseme politika konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams: Eğitim ve benimseme lab

**Eğitim ve benimseme lab** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

Eğitim ve benimseme lab için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı Eğitim ve benimseme lab özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te Eğitim ve benimseme lab yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** Eğitim ve benimseme lab konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** Eğitim ve benimseme lab konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** Eğitim ve benimseme lab konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** Eğitim ve benimseme lab konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** Eğitim ve benimseme lab konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #1.
2. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #2.
3. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #3.
4. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #4.
5. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #5.
6. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #6.
7. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #7.
8. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #8.
9. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #9.
10. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #10.
11. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #11.
12. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #12.
13. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #13.
14. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #14.
15. Eğitim ve benimseme ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Eğitim ve benimseme: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 88. Teams stüdyo 1

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 89. Teams stüdyo 2

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 90. Teams stüdyo 3

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 91. Teams stüdyo 4

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 92. Teams stüdyo 5

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 93. Teams stüdyo 6

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 94. Teams stüdyo 7

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 95. Teams stüdyo 8

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 96. Teams stüdyo 9

## Öğrenme hedefleri

Bu ünitenin sonunda:
- Kavramı iş dilinde açıklayabilirsiniz
- Arayüzde doğru yolu bulabilirsiniz
- Temel yapılandırmayı lab’da uygulayabilirsiniz
- Yaygın hatayı teşhis edebilirsiniz
- Yöneticiye 90 saniyede brifing verebilirsiniz

## Teams stüdyo: team bilgi mimarisi

**team bilgi mimarisi** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

team bilgi mimarisi için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı team bilgi mimarisi özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te team bilgi mimarisi yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** team bilgi mimarisi konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** team bilgi mimarisi konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** team bilgi mimarisi konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** team bilgi mimarisi konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** team bilgi mimarisi konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: meeting security

**meeting security** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

meeting security için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı meeting security özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te meeting security yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** meeting security konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** meeting security konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** meeting security konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** meeting security konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** meeting security konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: app governance

**app governance** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

app governance için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı app governance özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te app governance yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** app governance konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** app governance konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** app governance konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** app governance konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** app governance konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: misafir senaryosu

**misafir senaryosu** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

misafir senaryosu için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı misafir senaryosu özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te misafir senaryosu yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** misafir senaryosu konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** misafir senaryosu konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** misafir senaryosu konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** misafir senaryosu konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** misafir senaryosu konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: enflasyon temizliği

**enflasyon temizliği** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.

### Ne zaman kullanılır?

enflasyon temizliği için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). Yanlış yerde çözüm üretmek teknik borç yaratır.

### Arayüz / portal yolu

1. Doğru admin center veya uygulamayı açın
2. Arama kutusunu kullanın (komut/ayar adı)
3. Pilot nesne üzerinde deneyin
4. Etkiyi ölçün (kullanıcı, log, rapor)
5. Dokümante edin (isim standardı + sahip + tarih)

### Kullanıcı görünümü

Son kullanıcı enflasyon temizliği özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.

### Yönetici görünümü

Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? Break-glass ve change ticket unutulmamalı.

### PowerShell / Graph iskeleti

```powershell
# Keşif → değişiklik → doğrulama sırasını izleyin
Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'
# İlgili komutları ünite lab’ında tamamlayın
```

### Tuzaklar

- Production’da ilk deneme
- İstisnayı süresiz bırakma
- Paylaşımı ‘Everyone’a açma
- Dokümansız admin değişikliği
- Kullanıcı eğitimini atlama

### Case mini

KuzeyLojistik’te enflasyon temizliği yanlış yapılandırılmış; ticket’lar artmış. 30/60/90 gün planı yazın.

### Derinleşme denemeleri

**Açı 1:** enflasyon temizliği konusunda olgunluk seviyesi 1/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 2:** enflasyon temizliği konusunda olgunluk seviyesi 2/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 3:** enflasyon temizliği konusunda olgunluk seviyesi 3/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 4:** enflasyon temizliği konusunda olgunluk seviyesi 4/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

**Açı 5:** enflasyon temizliği konusunda olgunluk seviyesi 5/5 olan bir kurumda hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın.

## Teams stüdyo: kullanıcı eğitimi

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

## Laboratuvar (90–150 dk)

1. Before durumu belgeleyin
2. Pilot kapsam seçin
3. Adımları uygulayın
4. Pozitif/negatif test
5. Kanıt paketi (betimleme + tablo)
6. Kısa yönetici özeti

## Alıştırmalar

1. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #1.
2. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #2.
3. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #3.
4. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #4.
5. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #5.
6. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #6.
7. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #7.
8. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #8.
9. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #9.
10. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #10.
11. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #11.
12. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #12.
13. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #13.
14. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #14.
15. Teams stüdyo 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

Teams stüdyo 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

# İleri kamp blokları

# Ünite 5045. C04-teams ileri kamp 1

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

1. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 1 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 1: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5046. C04-teams ileri kamp 2

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

1. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 2 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 2: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5047. C04-teams ileri kamp 3

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

1. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 3 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 3: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5048. C04-teams ileri kamp 4

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

1. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 4 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 4: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5049. C04-teams ileri kamp 5

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

1. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 5 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 5: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5050. C04-teams ileri kamp 6

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

1. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 6 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 6: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5051. C04-teams ileri kamp 7

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

1. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 7 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 7: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5052. C04-teams ileri kamp 8

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

1. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 8 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 8: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5053. C04-teams ileri kamp 9

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

1. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 9 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 9: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5054. C04-teams ileri kamp 10

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

1. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 10 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 10: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5055. C04-teams ileri kamp 11

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

1. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 11 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 11: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5056. C04-teams ileri kamp 12

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

1. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 12 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 12: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5057. C04-teams ileri kamp 13

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

1. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 13 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 13: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5058. C04-teams ileri kamp 14

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

1. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 14 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 14: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.

---

# Ünite 5059. C04-teams ileri kamp 15

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

1. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #1.
2. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #2.
3. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #3.
4. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #4.
5. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #5.
6. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #6.
7. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #7.
8. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #8.
9. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #9.
10. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #10.
11. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #11.
12. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #12.
13. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #13.
14. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #14.
15. C04-teams ileri kamp 15 ile ilgili senaryo/analiz/demo görevi #15.

## Ünite özeti

C04-teams ileri kamp 15: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.