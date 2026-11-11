# Bölüm 8 — Yönetim, PowerShell ve Microsoft Graph

## 8.1 Neden portal yetmez?

Portal:

- tıklanır, unutulur, belgelenmez,
- 200 kullanıcıda ölçeklenmez,
- denetimde “kim yaptı?” sorusuna zayıf cevap verir.

**Otomasyon** = tekrarlanabilirlik + denetlenebilirlik + hız.

Diyagram: `diyagramlar/08-yonetim-duzlemleri.svg`

## 8.2 Yönetim düzlemleri

| Düzlem | Araç | Ne zaman |
|--------|------|----------|
| Portal | Admin centers | Keşif, tekil iş, acil |
| PowerShell | EXO, Teams, Graph SDK | Toplu iş, rapor, runbook |
| Microsoft Graph | REST / SDK | Platformlar arası, app-only |
| Infrastructure as Code | Arm/Bicep/Terraform (kısmi) | Tekrarlanabilir tenant iskeleti |

Bu repodaki örnek betikler (`EnableInPlaceArchive`, `ExportM365GroupMembership`) otomasyonun küçük ama gerçek parçalarıdır.

## 8.3 PowerShell’e güvenli giriş

### Temel ilkeler

1. **PowerShell 7** tercih edin.
2. Modülleri bilinçli yükleyin: `Microsoft.Graph`, `ExchangeOnlineManagement`, vb.
3. **Interactive admin** ile öğrenin; production’da **app-only** (sertifika) düşünün.
4. Sırları koda gömmeyin (Secret Store / Key Vault / ortam değişkeni).
5. Önce `-WhatIf` / report-only / CSV dry-run.

### Örnek: kullanıcı lisans özeti (öğretici iskelet)

```powershell
# Öğretici — production'a körlemesine çalıştırmayın
Connect-MgGraph -Scopes "User.Read.All","Organization.Read.All"
Get-MgUser -All -Property DisplayName,UserPrincipalName,AssignedLicenses |
  Select-Object DisplayName, UserPrincipalName,
    @{n='LicenseCount';e={$_.AssignedLicenses.Count}}
```

### Örnek: M365 grup üyeliği dışa aktarma

Repo: `ExportM365GroupMembership/M365GrMembExp.ps1` — grup üyeliğini raporlamak için pratik başlangıç.

## 8.4 Microsoft Graph zihinsel modeli

Graph = Microsoft 365’in **birleşik API’si**.

```
https://graph.microsoft.com/v1.0/users
https://graph.microsoft.com/v1.0/groups/{id}/members
```

İki auth modeli:

| Model | Kullanım |
|-------|----------|
| Delegated | Kullanıcı adına, interaktif |
| Application (app-only) | Daemon / otomasyon — admin consent |

**En az yetki:** `Directory.Read.All` her yere yapıştırmayın. İhtiyacınız olan scope’u seçin.

Diyagram: `diyagramlar/08-graph-auth.svg`

## 8.5 RBAC + otomasyon güvenliği

- Otomasyon hesabı / app registration için ayrı kimlik
- Sertifika tabanlı kimlik (client secret uzun ömürlü tuzak)
- PIM ile insan admin yükseltmesi
- Değişiklikleri ticket / change log ile bağla

## 8.6 Runbook kültürü

Her tekrarlayan iş bir runbook olur:

1. Amaç
2. Önkoşullar (roller, modüller)
3. Dry-run adımı
4. Uygulama adımları
5. Doğrulama
6. Geri alma (rollback)
7. Kayıt / audit

Örnek runbook başlıkları: Yeni çalışan onboarding, Offboarding, Shared mailbox açma, Teams arşivleme.

## 8.7 Case Study 8-A — CSV ile toplu kullanıcı

Stajyer 150 kullanıcıyı CSV ile açtı; UPN domain’i yanlıştı (`@kuzeylojistik.onmicrosoft.com`). Mail migrasyonu bozuldu.  
**Önlem:** CSV şema doğrulama script’i + 5 kişilik pilot + WhatIf.

## 8.8 Case Study 8-B — App secret sızıntısı

Client secret GitHub’a gitti.  
**Önlem:** Secret scanning, sertifikaya geçiş, hemen credential rotate, Graph sign-in log incelemesi.

## 8.9 Laboratuvar 8

1. Graph Explorer ile `/me` ve `/users?$top=5` çağırın.
2. `Connect-MgGraph` ile lisans raporu üretin.
3. Offboarding için 8 adımlık runbook yazın (hesap disable → lisans al → OneDrive transfer → Exchange forward → gruplardan çıkar → CA …).
4. Repo’daki iki PowerShell örneğini okuyup ne yaptıklarını yorumlayın.

## 8.10 Kontrol listesi

- [ ] Portal / PS / Graph ne zaman diye ayırıyorum
- [ ] App-only vs delegated farkını anlattım
- [ ] Runbook şablonum var
- [ ] Sırrı koda gömmeyeceğim

> **Sonraki:** [Bölüm 9 — Mimari, hibrit, migrasyon](09-mimari-hibrit-migrasyon-uzmanlik.md)


## 8.11 Derinleşme: İdempotent otomasyon

İyi otomasyon iki kez çalışınca kırılmaz.

- Kullanıcı var mı? Yoksa oluştur, varsa güncelle.
- Grup üyeliği zaten var mı? Eklemeyi atla.
- Lisans zaten atanmış mı? Tekrar atama.

CSV tabanlı işlerde:

1. Validate (şema, domain, usageLocation)
2. Diff (hedef durum vs mevcut)
3. Apply
4. Verify (rapor)

## 8.12 Değişiklik yönetimi

Production tenant’ta:

- Değişiklik penceresi (özellikle CA, mail flow, sharing)
- Rollback notu (eski politika JSON/export)
- İletişim (helpdesk hazır mı?)

Report-only / pilot / enforce üçlüsü sadece CA için değil; DLP ve birçok Teams politikası için de geçerlidir.


## 8.13 Derinleşme: Graph sorgu kalıpları

```
GET /users?$select=displayName,userPrincipalName,accountEnabled&$filter=accountEnabled eq true&$top=999
GET /groups/{id}/members
GET /users/{id}/memberOf
GET /auditLogs/signIns?$filter=userPrincipalName eq 'ali@contoso.com'
```

**Throttling:** 429 alırsanız `Retry-After` saygısı. Toplu işlerde batch (`$batch`) ve sayfalama (`@odata.nextLink`) zorunlu.

## 8.14 PnP / Exchange / Teams modül sınırları

| İhtiyaç | Araç |
|---------|------|
| Kullanıcı/grup/lisans | Graph |
| Mailbox/retention/EXO özel | Exchange Online PS |
| Team politika derinliği | Teams PS / admin center |
| SPO site/provision | PnP.PowerShell / Graph |

“Her şeyi Graph ile yaparım” henüz her senaryoda doğru değil; ama yön Graph’a doğrudur.

## 8.15 CI ile otomasyon

Örnek boru hattı:
1. PR → syntax / PSScriptAnalyzer
2. Onay kapısı
3. App-only ile test tenant
4. Manuel onay
5. Prod

## 8.16 Çalışılmış senaryo: Aylık lisans savurganlık raporu

Job her ayın 1’i:
1. Assigned vs sign-in 30/60/90 gün
2. SKU bazlı maliyet tahmini
3. Yöneticilere CSV + 5 maddelik özet
4. “Kaldırılabilir aday” listesi (insan onayı olmadan kaldırma!)
