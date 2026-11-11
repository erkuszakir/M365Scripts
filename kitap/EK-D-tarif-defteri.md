# Ek D — PowerShell / Graph Reçete Defteri

> Uyarı: Örnekler eğitim amaçlıdır. Production’da scope, WhatIf, pilot ve change window kullanın.

## D.1 Bağlantılar

```powershell
# Microsoft Graph (etkileşimli)
Connect-MgGraph -Scopes "User.Read.All","Group.Read.All","Directory.Read.All","Organization.Read.All"

# Exchange Online
Connect-ExchangeOnline

# Teams (gerekiyorsa)
Connect-MicrosoftTeams
```

## D.2 Lisans özeti CSV

```powershell
Connect-MgGraph -Scopes "User.Read.All","Organization.Read.All"
$sku = Get-MgSubscribedSku
Get-MgUser -All -Property DisplayName,UserPrincipalName,AssignedLicenses,AccountEnabled |
  Select-Object DisplayName, UserPrincipalName, AccountEnabled,
    @{n='Skus';e={
      ($_.AssignedLicenses | ForEach-Object {
        ($sku | Where-Object {$_.SkuId -eq $_.SkuId}).SkuPartNumber
      }) -join ';'
    }} |
  Export-Csv ./license-report.csv -NoTypeInformation -Encoding UTF8
```

## D.3 30 gündür giriş yok (yaklaşık)

```powershell
# Sign-in activity için ek izin / rapor API gerekebilir (ortama göre).
# Alternatif: admin center kullanım raporları + Graph get coğrafi/aktivite raporları.
# Pratik öğrenci yolu: Usage reports CSV indir + PowerShell ile filtrele.
```

## D.4 Shared mailbox + yetki

```powershell
Connect-ExchangeOnline
New-Mailbox -Shared -Name "Info" -DisplayName "Info" -Alias "info"
Add-MailboxPermission -Identity info@contoso.com -User ali@contoso.com -AccessRights FullAccess -InheritanceType All
Add-RecipientPermission -Identity info@contoso.com -Trustee ali@contoso.com -AccessRights SendAs -Confirm:$false
# Sign-in hesabı oluşturulmamalı / varsa disable edin (Entra)
```

## D.5 In-Place Archive (toplu fikir)

Repo betiği: `EnableInPlaceArchive/EnableInPlaceArchive.ps1`

```powershell
# Tek kullanıcı örneği
Enable-Mailbox -Identity user@contoso.com -Archive
```

## D.6 Grup üyeliği export

Repo betiği: `ExportM365GroupMembership/M365GrMembExp.ps1`

```powershell
Connect-MgGraph -Scopes "Group.Read.All","User.Read.All"
$gid = (Get-MgGroup -Filter "displayName eq 'Satis-Team'").Id
Get-MgGroupMember -GroupId $gid -All |
  ForEach-Object { Get-MgUser -UserId $_.Id -Property DisplayName,UserPrincipalName } |
  Select-Object DisplayName, UserPrincipalName
```

## D.7 Misafir listesi

```powershell
Get-MgUser -All -Filter "userType eq 'Guest'" -Property DisplayName,Mail,UserPrincipalName,AccountEnabled,CreatedDateTime |
  Select-Object DisplayName, Mail, AccountEnabled, CreatedDateTime |
  Export-Csv ./guests.csv -NoTypeInformation -Encoding UTF8
```

## D.8 Offboarding iskeleti (manuel sırayı otomatize etme fikri)

1. `Update-MgUser -UserId $id -AccountEnabled:$false`
2. Oturum revoke (Graph `revokeSignInSessions`)
3. Grup üyeliklerini kaldır
4. Lisansları kaldır (OneDrive/mailbox kararından sonra veya politika gereği)
5. OneDrive erişim delegasyonu (admin merkez / Graph)
6. Mailbox: shared’a çevir / forward / litigation kararı
7. Audit notu + ticket kapat

## D.9 Transport rule iskeleti (Exchange)

```powershell
New-TransportRule -Name "External-Disclaimer" `
  -FromScope InOrganization -SentToScope NotInOrganization `
  -ApplyHtmlDisclaimerText "<p>Bu ileti kurum dışına çıkmıştır.</p>" `
  -ApplyHtmlDisclaimerLocation Append -ApplyHtmlDisclaimerFallbackAction Wrap
```

## D.10 Güvenli otomasyon kontrol listesi

- [ ] Least privilege scope
- [ ] Sertifika / gizli dizi yönetimi
- [ ] Dry-run / CSV validate
- [ ] Pilot kullanıcı seti
- [ ] Log + ticket bağlantısı
- [ ] Rollback notu
