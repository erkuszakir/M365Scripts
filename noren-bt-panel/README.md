# NOREN BT Yönetim — norenlojistik.com

Microsoft 365 süreç takibi ve raporlama. Salt-okunur Graph bağlantısı destekler.

## Tenant bağlama

Adımlar: [`docs/ENTRA_KURULUM.md`](docs/ENTRA_KURULUM.md)

Secret’lar (sohbete yapıştırmayın):

- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`

## Çalıştırma

```bash
npm install
# secret’ları ortamda ayarlayın
npm run dev
```

- Panel: http://127.0.0.1:3000  
- `GET /api/health` · `GET /api/connection` · `GET /api/reports/exchange-mailflow`

## Bölümler

Genel bakış · Servisler · Rapor merkezi · Kontroller

İlk canlı rapor: **Exchange mail akışı / tenant sağlık özeti**. Diğer servisler adım adım.
