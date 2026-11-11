# Lojistik Operasyon

Cursor Apps üzerinde **Next.js App Router** (`app/api/...`) + Postgres.

## Şifresiz giriş

1. Secrets: **SEED_ADMIN_EMAIL** = Cursor e-postanız  
2. Uygulamayı açın → otomatik giriş  
3. (İsteğe bağlı) `JWT_SECRET` (≥32 karakter)

## Yerel

```bash
npm install
SEED_ADMIN_EMAIL=siz@ornek.com npm run dev
```

Build: `npm run build` · Prod: `npm start`
