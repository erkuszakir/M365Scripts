# Lojistik Operasyon

Cursor Apps üzerinde **Next.js App Router** (`app/api/...`) + Postgres.

## Şifresiz giriş

Secret gerekmez. Uygulamayı Cursor hesabınızla açın → ilk giriş sizi admin yapar.

İsteğe bağlı:
- `SEED_ADMIN_EMAIL` — yalnızca bu e-posta ilk admin olabilir
- `SEED_ADMIN_PASSWORD` — tanımlıysa şifre formu açılır
- `JWT_SECRET` — yoksa uygulama kendi üretir

## Yerel

```bash
npm install
npm run dev
```

Build: `npm run build` · Prod: `npm start`
