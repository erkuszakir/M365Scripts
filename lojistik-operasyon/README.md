# Lojistik Operasyon

## Şifresiz giriş

1. Cursor Secrets’a **SEED_ADMIN_EMAIL** = Cursor e-postanız
2. Uygulamayı açın → otomatik admin girişi (şifre yok)
3. İsterseniz sonra `SEED_ADMIN_PASSWORD` + `JWT_SECRET` ekleyin

## Yerel / üretim

```bash
npm install
SEED_ADMIN_EMAIL=siz@ornek.com npm run dev   # geliştirme
npm run build && npm start                   # üretim (API + arayüz aynı süreç)
```
