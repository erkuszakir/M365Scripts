# Lojistik Operasyon

Nakliye, depo ve yol survey operasyon yönetimi.

## İlk giriş (şifresiz)

`SEED_ADMIN_PASSWORD` **tanımlı değilse** şifre ekranı yoktur:
1. Cursor ile uygulamayı açın
2. Cursor hesabınız otomatik admin olur (ilk açan)

Sonra Secrets’a ekleyin:
- `JWT_SECRET` (≥32 karakter)
- `SEED_ADMIN_EMAIL` (Cursor e-postanız)
- `SEED_ADMIN_PASSWORD` (min. 8, harf+rakam)

Secret eklenince şifresiz giriş kapanır; bundan sonra şifre zorunludur.

## Sonraki kullanıcılar

Admin panelinden kişiye özel **e-posta + benzersiz şifre** ile ekleyin.
Şifresiz moddayken kayıtlı e-posta = Cursor e-postası olan kullanıcı da otomatik girer.

## Yerel

```bash
cd lojistik-operasyon
npm install
npm run dev
```
