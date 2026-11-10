# Lojistik Operasyon

Nakliye, depo ve yol survey operasyon yönetimi.

## İlk giriş (şifresiz bootstrap)

`SEED_ADMIN_PASSWORD` **tanımlı değilse**:
1. Cursor ile uygulamayı açın
2. **Şifresiz ilk giriş** butonuna basın
3. Cursor e-postanız admin olur

Sonra Secrets’a ekleyin:
- `JWT_SECRET` (≥32 karakter)
- `SEED_ADMIN_EMAIL` (Cursor e-postanız)
- `SEED_ADMIN_PASSWORD` (min. 8, harf+rakam)

Secret eklenince şifresiz giriş kapanır; bundan sonra şifre zorunludur.

## Sonraki kullanıcılar

Admin panelinden kişiye özel **e-posta + benzersiz şifre** ile ekleyin (paylaşılan saha şifresi yok).

## Yerel

```bash
cd lojistik-operasyon
npm install
npm run dev
```
