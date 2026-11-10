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

## Admin / User yetkisi nasıl verilir?

Yetkiyi yalnızca **Admin** verir. `admin / 1234` ile giriş yapın.

### Yeni kişiye yetki
1. Alt menüden **Kullanıcı** sekmesine gidin.
2. **Yeni kullanıcı** butonuna basın.
3. Kullanıcı adı, ad soyad ve şifre girin.
4. **Rol** alanından seçin:
   - **Admin** → pano, iş emri, kullanıcı yönetimi (ofis)
   - **User** → sadece kendine atanan işler / saha ekranı
5. **Kaydet**.

### Mevcut kişinin yetkisini değiştirme
1. **Kullanıcı** listesinde ilgili kişinin **Düzenle** butonuna basın.
2. **Rol** alanını `Admin` veya `User` yapın.
3. İsterseniz yeni şifre de verin.
4. **Kaydet**.

### Pasifleştirme / silme
- **Pasifleştir**: giriş yapamaz, kayıt durur.
- **Sil**: kullanıcı silinir; atanmış işlerde atama kaldırılır.
- Kendi hesabınızı silemezsiniz. Son aktif admin pasifleştirilemez / silinemez.

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
