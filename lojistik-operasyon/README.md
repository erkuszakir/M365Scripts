# Lojistik Operasyon

Nakliye, depo ve yol survey operasyon yönetimi.

## Giriş (yayın)

1. Cursor ile private uygulamayı açın (oturum zorunlu).
2. Kullanıcı adı + şifre girin.
3. Hesap **e-postası**, açık Cursor hesabının e-postası ile **aynı** olmalı.

| Secret | Açıklama |
|--------|----------|
| `JWT_SECRET` | ≥32 karakter oturum anahtarı (zorunlu) |
| `SEED_ADMIN_EMAIL` | Admin’in Cursor e-postası (zorunlu) |
| `SEED_ADMIN_PASSWORD` | Admin şifresi, min. 8, harf+rakam (zorunlu) |
| `CORS_ORIGIN` | Opsiyonel izinli kökenler |

**Not:** Paylaşılan `SEED_USER_PASSWORD` yok. Saha kullanıcıları Admin panelinden **kişiye özel e-posta + şifre** ile eklenir. Seed yalnızca `admin` oluşturur.

## Çalıştırma (yerel)

```bash
cd lojistik-operasyon
npm install
npm run dev
```

Yerelde `ALLOW_LOCAL_DEV=1` kullanılır; admin `dev@example.com` ile seed edilir (`cursor/identity.dev.ts` ile uyumlu).
