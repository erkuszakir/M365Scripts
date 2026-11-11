# Lojistik Operasyon

Nakliye, depo ve yol survey operasyon yönetimi.

## İlk giriş (şifresiz)

1. Cursor Secrets’a **SEED_ADMIN_EMAIL** ekleyin (kendi Cursor e-postanız).
2. `SEED_ADMIN_PASSWORD` yokken şifre ekranı yoktur; Cursor ile otomatik giriş.
3. Yalnızca `SEED_ADMIN_EMAIL` ile eşleşen hesap ilk admin olur (davetli hesap admin olamaz).

Sonra ekleyin:
- `JWT_SECRET` (≥32 karakter)
- `SEED_ADMIN_PASSWORD` (min. 8, harf+rakam) → şifresiz giriş kapanır

## Yerel

```bash
cd lojistik-operasyon
npm install
SEED_ADMIN_EMAIL=siz@ornek.com npm run dev
```

## Üretim

```bash
npm run build
npm start
```
