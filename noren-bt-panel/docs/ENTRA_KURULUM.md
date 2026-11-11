# Entra ID — norenlojistik.com salt-okunur bağlantı

Panel Graph’ı **uygulama izni (app-only)** ile okur. Sohbete secret yazmayın.

## 1. Uygulama kaydı

1. [Entra admin center](https://entra.microsoft.com) → **Applications** → **App registrations** → **New registration**
2. Name: `NOREN BT Panel (read-only)`
3. Supported accounts: **This organizational directory only** (norenlojistik.com)
4. Register

Not alın:
- **Application (client) ID** → `AZURE_CLIENT_ID`
- **Directory (tenant) ID** → `AZURE_TENANT_ID`

## 2. Client secret

**Certificates & secrets** → **New client secret** → değer → `AZURE_CLIENT_SECRET`  
(Değer yalnızca oluştururken görünür.)

## 3. API permissions (Application)

**API permissions** → **Add a permission** → **Microsoft Graph** → **Application permissions**:

| İzin | Ne için |
|------|---------|
| `Organization.Read.All` | Tenant / domain doğrulama |
| `ServiceHealth.Read.All` | Exchange servis sağlığı |
| `User.Read.All` | Kullanıcı sayısı (isteğe bağlı) |
| `Reports.Read.All` | Sonraki adım: mail aktivite raporları |

**Grant admin consent** (norenlojistik.com admin).

## 4. Secret’ları panele verin

Cursor Apps / hosting secrets:

- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`

Yerel test (sohbete yapıştırmayın):

```bash
export AZURE_TENANT_ID=...
export AZURE_CLIENT_ID=...
export AZURE_CLIENT_SECRET=...
npm run dev
```

## 5. Doğrulama

- `GET /api/health` → `graph.configured: true`
- `GET /api/connection` → tenant adı / domain
- `GET /api/reports/exchange-mailflow` → canlı özet

## Güvenlik

- Yalnızca **okuma** izinleri
- Secret’ı Git’e koymayın
- İleride sertifika tabanlı kimlik doğrulama tercih edilebilir
