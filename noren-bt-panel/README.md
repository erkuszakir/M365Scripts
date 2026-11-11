# NOREN BT Yönetim — norenlojistik.com

Microsoft 365 süreç takibi ve **raporlama altyapısı** (salt-okunur). Tenant: **norenlojistik.com**.

## Bölümler

1. **Genel bakış** — altyapı özeti  
2. **Servisler** — Exchange, SharePoint, OneDrive, Teams, Entra ID, Azure, Purview, Intune, Power Platform, yedekleme, güvenlik süreç kataloğu  
3. **Rapor merkezi** — her süreç için rapor tanımı + örnek/canlı koşu  
4. **Kontroller** — mevcut operasyon izleme kayıtları (uyarı, teyit, eski kontrol)

Adım adım genişletilir: önce şablon ve örnek veri, sonra Graph / PowerShell collector.

## Çalıştırma

```bash
npm install
npm run dev
```

## Veri

- `src/config/tenant.ts` — tenant kimliği  
- `src/catalog/services.ts` — servis / süreç kataloğu  
- `src/catalog/reports.ts` — rapor tanımları ve örnek koşular  
- `src/data/seed.ts` — kontrol kayıtları  

Canlı tenant’a yazma yok.
