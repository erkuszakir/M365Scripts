# NOREN BT İzleme Paneli

Salt-okunur operasyon izleme ekranı. Microsoft 365, Exchange, Purview, Teams, SharePoint/OneDrive, yedekleme görevleri, Power Automate ve noren.com.tr güvenlik kontrollerini tek panelde takip eder.

## Özellikler

- Kayıt alanları: durum, son kontrol, son başarılı çalışma, hata/uyarı, sorumlu, son tarih, kaynak bağlantısı, sonraki adım
- Odak kartları: Purview günlük raporlar, zamanlanmış görevler, SharePoint Operasyon Takip yedek, File Server yedek, mailbox erişim/yönlendirme, Teams mesajlaşma politikası
- Kesinleşmemiş bulgular: **Teyit bekliyor**
- Önceki hafta karşılaştırması, filtreleme, önceliklendirme, geçmiş kayıtlar, haftalık özet
- Son kontrol zamanı ve bekleyen raporlar açıkça gösterilir (bilgisayar kapalı kalabilir)
- Canlı sistemlerde değişiklik yok — yalnızca planlama / salt-okunur kontrol desteği

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
npm run preview
```

## Veri

`src/data/seed.ts` örnek planlama verisi içerir. Canlı tenant’a bağlanmaz. Gerçek kontrolleri eklemek için aynı şemayla kayıtları güncelleyin; yazma/değiştirme adımları panele konmamalıdır.
