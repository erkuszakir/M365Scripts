# Microsoft 365 Cloud Sistemleri — Sıfırdan Uzmanlığa

> **v2.0 ANA METİN (üniversite seviyesi, geniş hacim)**  
> Tek dosya Word (~1.5M kelime, tahmini **~5.000 sayfa** @300 kelime/sayfa):  
> [`Microsoft365_Sifirdan_Uzmanliga_v2_TAM.docx`](Microsoft365_Sifirdan_Uzmanliga_v2_TAM.docx)  
> Cilt cilt Word: `Microsoft365_v2_01-…` … `09-…`  
> Markdown ciltler: [`ciltler/`](ciltler/)

**Not:** Eski `Microsoft365_Sifirdan_Uzmanliga.docx` (v1.x) özet/kısa sürümdür; ders kitabı olarak **v2 TAM** kullanılmalıdır.

---


## v1 iskelet (kısa — arşiv)

# Microsoft 365 Cloud Sistemleri  
## Sıfırdan Uzmanlığa — Üniversite Başucu Kitabı

**Sürüm:** 1.2 · **Kapsam:** Geniş / detaylı · **Dil:** Türkçe · **Seviye:** Acemi → Uzman  
**Hedef kitle:** Bilgisayar, yazılım, bilişim sistemleri ve yönetim bilişim öğrencileri; junior M365 / Entra yöneticileri; operasyon ekipleri

**Tek dosya Word kitabı:** [`Microsoft365_Sifirdan_Uzmanliga.docx`](Microsoft365_Sifirdan_Uzmanliga.docx)  
**Tek dosya HTML:** [`Microsoft365_Sifirdan_Uzmanliga.html`](Microsoft365_Sifirdan_Uzmanliga.html)

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

### Kısım VIII — Operasyonel uzmanlık (genişletme)
17. [Ağ, bağlantı ve istemci performansı](17-ag-baglantilari-teams-exo.md)
18. [Hibrit kimlik: Entra Connect / Cloud Sync](18-hibrit-kimlik-entra-connect.md)
19. [Yedekleme, DR ve fidye yazılımı](19-yedekleme-dr-fidye.md)
20. [Olay müdahale runbook’ları](20-olay-mudahale-runbook.md)
21. [Benimseme, değişim ve Viva](21-viva-benimseme-degisim.md)

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
- [Operasyon el kitabı (günlük/haftalık/aylık)](EK-E-operasyon-el-kitabi.md)

---

## Öğrenme çıktıları (kitap bitince)

1. Bir Microsoft 365 tenant’ını uçtan uca tasarlayıp yönetebilirsiniz.
2. Entra ID ile kimlik, grup, Conditional Access ve RBAC uygularsınız.
3. Exchange, SharePoint/OneDrive ve Teams iş yüklerini güvenli şekilde yapılandırırsınız.
4. Defender / Purview ile tehdit ve veri koruma katmanlarını kurarsınız.
5. PowerShell ve Microsoft Graph ile tekrarlanabilir otomasyon yazarsınız.
6. Hibrit senaryoları, migrasyonu ve mimari trade-off’ları savunabilirsiniz.
7. Intune ile cihaz/uygulama korumasını CA’ya bağlarsınız.
8. Ağ/VPN kaynaklı M365 sorunlarını yapılandırma sorunundan ayırırsınız.
9. Yedekleme/IR/benimseme ile operasyonu uçtan uca kurarsınız.

---

## Lisans ve kullanım

Eğitim amaçlıdır. Ekran görüntüleri ve ürün adları Microsoft’a aittir; diyagramlar ve senaryolar bu kitap için özgün üretilmiştir. Üretim tenant’ında denemeden önce mutlaka test / developer tenant kullanın.

