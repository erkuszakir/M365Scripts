# Lojistik Operasyon

30 kişilik lojistik firması için operasyon yönetim uygulaması.

Kapsam: **Nakliye**, **Depolama**, **Yol survey**. Muhasebe Logo’da kalır.

## Özellikler

- JWT oturum + SQLite backend
- Roller: **Admin** / **User**
- Admin: pano, iş emri CRUD/atama, kullanıcı yönetimi
- User: mobil saha ekranı (başla / tamamla / sorun bildir)
- Türkçe arayüz, mobil uyumlu
- Şifre politikası (min. 8, harf+rakam), giriş hız sınırı, kısıtlı CORS

## Güvenlik / ortam

| Değişken | Açıklama |
|----------|---------|
| `JWT_SECRET` | Oturum imza anahtarı (en az 32 karakter). Yayında zorunlu. |
| `SEED_ADMIN_PASSWORD` | İlk kurulum admin şifresi (opsiyonel) |
| `SEED_USER_PASSWORD` | İlk kurulum saha kullanıcı şifresi (opsiyonel) |
| `CORS_ORIGIN` | İzinli kökenler, virgülle ayrılmış (ör. `https://ornek.com`) |
| `REQUIRE_JWT_SECRET=1` | Ortamda JWT_SECRET yoksa süreci durdur |

Yerelde `JWT_SECRET` yoksa rastgele anahtar `server/data/jwt.secret` içine yazılır (git’e girmez).

İlk seed şifreleri arayüzde gösterilmez; `server/data/ilk-giris.txt` dosyasına yazılır (gitignore).

## Admin / User yetkisi nasıl verilir?

Yetkiyi yalnızca **Admin** verir.

### Yeni kişiye yetki
1. Alt menüden **Kullanıcı** sekmesine gidin.
2. **Yeni kullanıcı** butonuna basın.
3. Kullanıcı adı, ad soyad ve şifre girin (min. 8 karakter, harf + rakam).
4. **Rol** alanından **Admin** veya **User** seçin.
5. **Kaydet**.

### Mevcut kişinin yetkisini değiştirme
1. Listede **Düzenle** → Rol’ü değiştirin → **Kaydet**.

## Çalıştırma

```bash
cd lojistik-operasyon
npm install
npm run dev
```

- Web: http://127.0.0.1:5173
- API: http://127.0.0.1:3001

İlk giriş bilgileri: `server/data/ilk-giris.txt`

Üretim derlemesi (frontend):

```bash
npm run build
```
