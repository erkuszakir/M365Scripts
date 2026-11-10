# Lojistik Operasyon

Nakliye, depo ve yol survey operasyon yönetimi.

## İlk giriş (şifresiz)

`SEED_ADMIN_PASSWORD` **tanımlı değilse** şifre ekranı yoktur:
1. Cursor ile uygulamayı açın
2. Cursor hesabınız otomatik admin olur

Şifresiz modda oturum Cursor kimliğine bağlıdır (cookie şart değil).

Sonra Secrets’a ekleyin:
- `JWT_SECRET` (≥32 karakter)
- `SEED_ADMIN_EMAIL` (Cursor e-postanız)
- `SEED_ADMIN_PASSWORD` (min. 8, harf+rakam)

Secret eklenince şifresiz giriş kapanır; bundan sonra şifre zorunludur.

## Yerel

```bash
cd lojistik-operasyon
npm install
npm run dev
```

## Üretim

```bash
npm run build
npm start
```
