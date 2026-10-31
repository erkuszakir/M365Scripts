# Microsoft 365 Cloud Sistemleri  
## Sıfırdan Uzmanlığa — Üniversite Başucu Kitabı

**Sürüm:** 1.0 · **Dil:** Türkçe · **Seviye:** Acemi → Uzman  
**Hedef kitle:** Bilgisayar, yazılım, bilişim sistemleri ve yönetim bilişim öğrencileri; junior M365 / Entra yöneticileri; operasyon ekipleri

Bu kitap, Microsoft 365 Cloud ekosistemini **en temel kavramlardan** başlayarak **mimari tasarım, güvenlik mimarisi, otomasyon ve gerçek hayat senaryolarına** kadar sistematik olarak öğretir. Her bölümde:

- kavramsal anlatım,
- “neden böyle?” açıklaması,
- orijinal diyagram,
- laboratuvar / pratik adımlar,
- gerçek hayat **case study**

bulunur.

---

## Nasıl okunmalı?

| Okuyucu profili | Önerilen yol |
|---|---|
| Hiç bulut görmemiş öğrenci | 00 → 01 → 02 → 03, sonra iş yükleri |
| Exchange / mail deneyimli | 00, 02, sonra 04 ve 07 |
| Güvenlik / SOC odaklı | 03 → 07 → 09 (Zero Trust derinliği) |
| Otomasyon / DevOps | 08 → 09 → lablar |
| Mezuniyet / staj projesi | Case studies + Capstone |

**Altın kural:** Her bölümün sonundaki *Kontrol listesi*ni geçmeden bir sonraki bölüme geçmeyin. Kavramlar üst üste biner.

---

## İçindekiler

### Kısım 0 — Yol haritası
0. [Ön söz, öğrenme sözleşmesi ve yol haritası](00-onsoz-ve-yol-haritasi.md)

### Kısım I — Temeller (Acemi)
1. [Bulut bilişim, SaaS ve dijital işyeri](01-bulut-ve-dijital-isyerleri.md)
2. [Microsoft 365 ekosistemi, tenant ve lisanslama](02-m365-ekosistemi-tenant-lisans.md)
3. [Kimlik temelleri: Microsoft Entra ID](03-entra-id-kimlik-temelleri.md)

### Kısım II — İş yükleri (Orta)
4. [Exchange Online: posta, takvim, alıcılar](04-exchange-online.md)
5. [SharePoint Online ve OneDrive](05-sharepoint-onedrive.md)
6. [Microsoft Teams ve işbirliği mimarisi](06-microsoft-teams.md)

### Kısım III — Güvenlik & uyumluluk (İleri)
7. [Güvenlik, uyumluluk ve Zero Trust](07-guvenlik-uyumluluk-zero-trust.md)

### Kısım IV — Yönetim & otomasyon (İleri)
8. [Yönetim, PowerShell, Microsoft Graph](08-yonetim-powershell-graph.md)

### Kısım V — Uzmanlık (Uzman)
9. [Mimari, hibrit, migrasyon ve uzman uygulamalar](09-mimari-hibrit-migrasyon-uzmanlik.md)

### Kısım VI — Uçtan uca genişletmeler
12. [Intune ve uç nokta yönetimi](12-intune-endpoint.md)
13. [Power Platform ve Copilot](13-power-platform-copilot.md)
14. [KVKK, GDPR ve uyumluluk tasarımı](14-kvkk-gdpr-uyumluluk.md)
15. [İzleme, raporlama ve hizmet sağlığı](15-izleme-raporlama.md)
16. [Mülakat ve savunma soruları](16-mulakat-savunma.md)

### Kısım VII — Case studies & proje

10. [Gerçek hayat case study derlemesi](10-case-studies.md)
11. [Capstone: 500 kişilik şirketi sıfırdan kur](11-capstone-proje.md)

### Ekler
- [Diyagramlar](diyagramlar/)
- [Laboratuvarlar](lablar/)
- [Sözlük](EK-A-sozluk.md)
- [Sertifika ve kariyer haritası](EK-B-sertifika-kariyer.md)
- [Komut ve portal hızlı referans](EK-C-hizli-referans.md)
- [PowerShell/Graph tarif defteri](EK-D-tarif-defteri.md)

---

## Öğrenme çıktıları (kitap bitince)

1. Bir Microsoft 365 tenant’ını uçtan uca tasarlayıp yönetebilirsiniz.
2. Entra ID ile kimlik, grup, Conditional Access ve RBAC uygularsınız.
3. Exchange, SharePoint/OneDrive ve Teams iş yüklerini güvenli şekilde yapılandırırsınız.
4. Defender / Purview ile tehdit ve veri koruma katmanlarını kurarsınız.
5. PowerShell ve Microsoft Graph ile tekrarlanabilir otomasyon yazarsınız.
6. Hibrit senaryoları, migrasyonu ve mimari trade-off’ları savunabilirsiniz.

---

## Lisans ve kullanım

Eğitim amaçlıdır. Ekran görüntüleri ve ürün adları Microsoft’a aittir; diyagramlar ve senaryolar bu kitap için özgün üretilmiştir. Üretim tenant’ında denemeden önce mutlaka test / developer tenant kullanın.
