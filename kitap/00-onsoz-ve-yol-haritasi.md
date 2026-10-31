# Bölüm 0 — Ön Söz, Öğrenme Sözleşmesi ve Yol Haritası

## 0.1 Bu kitap neden var?

Microsoft 365, “Outlook + Word + Teams” değildir. Bugün bir kurumun **kimliği, iletişimi, dosyası, işbirliği, güvenliği, uyumluluğu ve otomasyonu** aynı bulut platformunda buluşur. Öğrenci veya junior yönetici çoğu zaman şu tuzağa düşer:

> “Portalda butona bastım, çalıştı — konuyu öğrendim.”

Portal tıklaması **işletim**dir; uzmanlık **neden, ne zaman, hangi trade-off** bilgisidir. Bu kitap ikincisini öğretir.

## 0.2 Öğrenme sözleşmesi

Bu kitabı bitirmek için kendinize üç söz verin:

1. **Laboratuvar şart.** Salt okuma yetmez. Microsoft 365 Developer Program veya eğitim tenant’ı kullanın.
2. **Not defteri tutun.** Her bölümde “benim tenant’ımda şu karar şöyle olur” diye yazın.
3. **Case study’yi oynamayın, savunun.** “Neden Shared Mailbox, neden M365 Group?” sorusuna cevap verin.

## 0.3 Seviye haritası

```
[Acemi]          [Orta]              [İleri]               [Uzman]
 Temel kavram     İş yükleri          Güvenlik/otomasyon    Mimari & kriz
 Tenant nedir?    Mail/Teams/SPO      CA, DLP, Graph        Hibrit, migrasyon
 Kullanıcı ekle   Lisans atama        Runbook               Capstone
```

Aşağıdaki diyagrama bakın: `diyagramlar/00-yol-haritasi.svg`.

### Haftalık önerilen tempo (tek başına çalışan öğrenci)

| Hafta | Odak | Çıktı |
|------:|------|-------|
| 1 | Bölüm 1–2 | Tenant + lisans şeması çizebilir |
| 2 | Bölüm 3 | Kullanıcı/grup/CA lab’ı |
| 3 | Bölüm 4 | Exchange alıcı modeli |
| 4 | Bölüm 5–6 | Site + Teams mimarisi |
| 5 | Bölüm 7 | Zero Trust iskeleti |
| 6 | Bölüm 8 | PowerShell / Graph otomasyonu |
| 7 | Bölüm 9 | Hibrit & migrasyon planı |
| 8 | Case + Capstone | Savunulabilir mimari dokümanı |

## 0.4 Gerçek hayat: “Portal yığını” vakası

**Şirket:** 180 kişilik lojistik firması  
**Durum:** IT sorumlusu her isteği admin merkezinden tıklayarak çözüyor. İki hafta sonra aynı iş tekrar isteniyor; kimse hangi lisansı kimin aldığı bilmiyor.

**Teşhis:** Tekrarlanmayan iş = teknik borç.  
**Kitaptaki karşılık:** Bölüm 8 (otomasyon) + Capstone (onboarding runbook).

Bu kitap boyunca aynı firmayı (“**KuzeyLojistik A.Ş.**”) örnek kurum olarak kullanacağız. Sektör: lojistik + ofis + saha ekipleri. Kullanıcı sayısı: 180 → Capstone’da 500’e büyütülecek.

## 0.5 Araç çantanız

| Araç | Ne için |
|------|---------|
| Microsoft 365 admin center | Günlük yönetim |
| Entra admin center | Kimlik, CA, uygulamalar |
| Exchange / Teams / SharePoint admin | İş yükü ayarları |
| Microsoft Purview / Defender portalları | Uyumluluk & tehdit |
| PowerShell 7 + Exchange Online / Graph modülleri | Otomasyon |
| Graph Explorer | API keşfi |
| Visio / draw.io | Mimari çizim (kitap SVG’leri de yeter) |

## 0.6 Kontrol listesi

- [ ] Developer / deneme tenant’ım var veya erişimim planlandı
- [ ] KuzeyLojistik senaryosunu okudum
- [ ] Haftalık tempo tablosunu kendi takvimime işledim
- [ ] Sonraki bölüm: bulut ve dijital işyeri temelleri

> **Sonraki:** [Bölüm 1 — Bulut bilişim, SaaS ve dijital işyeri](01-bulut-ve-dijital-isyerleri.md)
