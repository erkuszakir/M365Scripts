# Lojistik Operasyon (MVP)

30 kişilik lojistik firması için operasyon yönetim prototipi.

Kapsam: **Nakliye**, **Depolama**, **Yol survey** iş emirleri. Muhasebe Logo’da kalır; bu uygulama operasyonu yönetir.

## Özellikler

- Giriş: **Admin** / **User**
- Admin: operasyon panosu, iş emri listesi, oluşturma, atama, durum yönetimi
- User (saha): atanmış işler, büyük butonlarla durum güncelleme (başla / tamamla / sorun)
- Türkçe arayüz, mobil uyumlu
- Veri tarayıcı `localStorage` içinde (demo)

## Demo hesaplar

| Rol   | Kullanıcı | Şifre |
|-------|-----------|-------|
| Admin | `admin`   | `1234` |
| User  | `ahmet`   | `1234` |
| User  | `mehmet`  | `1234` |
| User  | `ayse`    | `1234` |

## Çalıştırma

```bash
cd lojistik-operasyon
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
npm run preview
```
