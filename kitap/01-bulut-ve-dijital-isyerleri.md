# Bölüm 1 — Bulut Bilişim, SaaS ve Dijital İşyeri

## 1.1 Bulut nedir? (Gerçekten)

Bulut, “başkasının bilgisayarı” sloganından ibaret değildir. Bir **hizmet modeli**dir: bilgi işlem, depolama, kimlik ve uygulama kaynakları **ağ üzerinden, talep üzerine, ölçülebilir** şekilde sunulur.

Üç klasik model:

| Model | Siz yönetirsiniz | Sağlayıcı yönetir | Örnek |
|-------|------------------|-------------------|-------|
| **IaaS** | OS, runtime, uygulama, veri | Donanım, sanallaştırma | Azure VM |
| **PaaS** | Uygulama, veri | OS + runtime | Azure App Service |
| **SaaS** | Veri + yapılandırma | Hemen her şey | Microsoft 365 |

**Microsoft 365 = ağırlıklı olarak SaaS**, ama arkasında Azure kimliği (Entra ID), depolama ve güvenlik servisleri vardır. Bu yüzden M365 uzmanı bir miktar Azure/Entra bilmek zorundadır.

Diyagram: `diyagramlar/01-iaas-paas-saas.svg`

## 1.2 Neden kurumlar Microsoft 365’e geçiyor?

1. **Kimlik tekilleşmesi** — Bir hesapla mail, dosya, toplantı, CRM eklentisi.
2. **Ölçek** — 10 kullanıcı da 10.000 kullanıcı da aynı kontrol düzlemi.
3. **Güvenlik yatırımı** — Microsoft’un tehdit istihbaratı bireysel IT ekibinin yapamayacağı ölçekte.
4. **İşbirliği** — E-posta + sohbet + dosya + toplantı aynı grafikte.

**Trade-off:** Veri egemenliği, bağımlılık (vendor lock-in), yanlış yapılandırılmış tenant’ta risk yüzeyi büyür. Uzman bu trade-off’u gizlemez; yönetir.

## 1.3 Dijital işyeri (Digital Workplace)

Dijital işyeri = insanların işini yaptığı **uygulama + kimlik + içerik + süreç** bütünü.

KuzeyLojistik örneği:

| Persona | İhtiyaç | M365 karşılığı |
|---------|---------|----------------|
| Ofis planlama | Mail, Excel, toplantı | Exchange + Excel + Teams |
| Saha sürücüsü | Mobil ekip sohbeti, PDF | Teams mobil + OneDrive |
| Muhasebe | Gizli faturalar | SharePoint + DLP + sensitivity label |
| IT | Kullanıcı yaşam döngüsü | Entra + PowerShell + runbook |

## 1.4 Paylaşılan sorumluluk modeli

SaaS’ta Microsoft altyapıyı korur; **sizin yapılandırmanız sizin sorumluluğunuzdadır.**

| Sorumluluk | Microsoft | Müşteri (siz) |
|------------|-----------|---------------|
| Fiziksel DC güvenliği | ✓ | |
| Hizmet uptime | ✓ | |
| Tenant yapılandırması | | ✓ |
| Kullanıcıya doğru lisans | | ✓ |
| Conditional Access politikası | | ✓ |
| Veri sınıflandırma / DLP | | ✓ |
| Offboarding | | ✓ |

**Case Study 1-A — “Bizim verimiz Microsoft’ta güvende” yanılgısı**

KuzeyLojistik, tüm dosyaları “Everyone except external” paylaşımına açmış. Microsoft platformu ayakta; veri sızıntısı yine müşteri hatası.  
**Ders:** SaaS güvenliği = platform güvenliği × yapılandırma hijyeni.

## 1.5 Temel bulut terimleri (ezber değil, bağlantı)

- **Tenant:** Kurumun M365’daki yalıtılmış alanı (kiracı).
- **Directory / Entra ID:** Kullanıcı, grup, uygulama kimliklerinin deposu.
- **Workload:** Exchange, SharePoint, Teams gibi iş yükü hizmetleri.
- **Identity plane / data plane:** Kimlik kontrolü vs. içeriğin kendisi.
- **Region / geo:** Verinin fiziksel olarak durduğu coğrafya (Compliance!).

Diyagram: `diyagramlar/01-dijital-isyerleri-katmanlari.svg`

## 1.6 Laboratuvar 1 — Kavram haritası

1. Kendi (veya hayali) üniversite kulübünüz için 5 persona yazın.
2. Her persona için bir SaaS ihtiyacı eşleştirin.
3. Hangi ihtiyaçların **kimlik**, hangilerinin **içerik**, hangilerinin **işbirliği** katmanına düştüğünü işaretleyin.

## 1.7 Kontrol listesi

- [ ] IaaS / PaaS / SaaS farkını bir cümleyle anlatabiliyorum
- [ ] Paylaşılan sorumluluk modelini örnekle açıkladım
- [ ] KuzeyLojistik personae’sini okudum
- [ ] Sonraki: tenant, lisans, portal haritası

> **Sonraki:** [Bölüm 2 — M365 ekosistemi, tenant ve lisanslama](02-m365-ekosistemi-tenant-lisans.md)

## 1.8 Derinleşme: Çoklu bulut ve M365

Birçok kurum AWS/GCP + M365 birlikte kullanır. Kimlik köprüsü (Entra) ve veri çıkış yolları (Power Platform bağlayıcıları, e-posta ile AWS ticket vb.) mimari risk olur.

**Soru listesi:** Hangi sistem authoritative HR? Dosya master’ı nerede? Yedek kimin sorumluluğu?

## 1.9 Değişime direnç ve benimsenme

Teknik göç başarılı, kullanıcı hâlâ eski file share kullanıyor olabilir. Adoption: şampiyon kullanıcılar, kısa eğitim, eski sistemin kapanış tarihi.
