# Ek C — Portal ve Komut Hızlı Referans

## Portallar

| URL (kavramsal) | İş |
|-----------------|-----|
| admin.microsoft.com | Genel yönetim |
| entra.microsoft.com | Kimlik |
| admin.exchange.microsoft.com | Posta |
| admin.teams.microsoft.com | Teams |
| admin.sharepoint.com | SharePoint |
| security.microsoft.com | Defender |
| compliance.microsoft.com | Purview |
| intune.microsoft.com / endpoint.microsoft.com | Cihaz |
| developer.microsoft.com/graph/graph-explorer | API keşif |

## Sık PowerShell girişleri

```powershell
# Graph
Connect-MgGraph -Scopes "User.Read.All","Group.Read.All"
Get-MgUser -All | Select-Object DisplayName, UserPrincipalName

# Exchange Online
Connect-ExchangeOnline
Get-EXOMailbox -ResultSize 10
Enable-Mailbox -Identity user@contoso.com -Archive

# Takım / grup üyeliği raporları için bu repodaki örnekler:
# ExportM365GroupMembership/M365GrMembExp.ps1
# EnableInPlaceArchive/EnableInPlaceArchive.ps1
```

## Onboarding mini checklist

1. Hesap oluştur (doğru UPN)
2. Lisans ata (persona)
3. Gruplara ekle
4. MFA / CA kapsamını doğrula
5. Mailbox / OneDrive hazır mı bak
6. Hoş geldin iletişimi

## Offboarding mini checklist

1. Hesabı disable et / oturumları revoke et
2. Lisansları kaldır (veri işleri bitince)
3. OneDrive sahiplik transferi
4. Mailbox convert / forward / shared kararı
5. Grup ve Teams üyeliklerinden çıkar
6. Uygulama & cihaz erişimini gözden geçir
7. Audit kaydı tut
