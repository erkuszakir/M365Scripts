# Lojistik Operasyon

30 kişilik lojistik firması için operasyon yönetim uygulaması.

Kapsam: **Nakliye**, **Depolama**, **Yol survey**. Muhasebe Logo’da kalır.

## Özellikler

- JWT oturum + SQLite backend
- Roller: **Admin** / **User**
- Admin: pano, iş emri CRUD/atama, kullanıcı yönetimi
- User: mobil saha ekranı (başla / tamamla / sorun bildir)
- Türkçe arayüz, mobil uyumlu

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

- Web: http://127.0.0.1:5173
- API: http://127.0.0.1:3001

Ayrı çalıştırma:

```bash
npm run dev:api
npm run dev:web
```

Üretim derlemesi (frontend):

```bash
npm run build
```

Veritabanı dosyası: `server/data/lojistik.sqlite` (gitignore’da).
