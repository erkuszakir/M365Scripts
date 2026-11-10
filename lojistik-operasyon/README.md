# Lojistik Operasyon

30 kişilik lojistik firması için operasyon yönetim uygulaması.

Kapsam: **Nakliye**, **Depolama**, **Yol survey**. Muhasebe Logo’da kalır.

## Giriş (yayın)

| Kullanıcı | Rol | Şifre kaynağı |
|-----------|-----|----------------|
| `admin` | Admin | Cursor Secret `SEED_ADMIN_PASSWORD` |
| `ahmet` / `mehmet` / `ayse` | User | Cursor Secret `SEED_USER_PASSWORD` |

Şifreler en az 8 karakter olmalı ve harf + rakam içermelidir.

Zorunlu secret’lar: `JWT_SECRET` (≥32 karakter), `SEED_ADMIN_PASSWORD`.  
Opsiyonel: `SEED_USER_PASSWORD`, `CORS_ORIGIN`.

Secret eklendikten / değiştirildikten sonra uygulama yeniden başlayınca şifreler senkronlanır.

## Özellikler

- JWT + SQLite, Cursor kimlik kapısı (yayında)
- Admin / User rolleri, kullanıcı yönetimi
- Yerel fontlar (üçüncü taraf font CDN yok)
- Şifre politikası, giriş hız sınırı, kısıtlı CORS

## Yerel çalıştırma

```bash
cd lojistik-operasyon
npm install
npm run dev
```

`ALLOW_LOCAL_DEV=1` ile API ayağa kalkar. Secret yoksa yerel rastgele şifreler `server/data/ilk-giris.txt` dosyasına yazılır.

## Admin / User yetkisi

Admin → **Kullanıcı** → Yeni kullanıcı veya Düzenle → Rol seç → Kaydet.
