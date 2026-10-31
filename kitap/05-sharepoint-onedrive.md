# Bölüm 5 — SharePoint Online ve OneDrive

## 5.1 İki depo, iki niyet

| | **OneDrive** | **SharePoint** |
|---|--------------|----------------|
| Sahip | Kullanıcı | Ekip / iş birimi / kurum |
| Tipik içerik | Taslak, kişisel iş dosyası | Resmi kütüphane, sayfa, liste |
| Yaşam döngüsü | Offboarding’de sahiplik transferi | Site sahipleri ve governance |
| Paylaşım | Dikkatli ol — aşırı paylaşım yaygın | Site izinleri + gruplar |

**Zihinsel model:** OneDrive = “benim masam”, SharePoint = “şirketin dolabı”.

Diyagram: `diyagramlar/05-spo-onedrive-model.svg`

## 5.2 Site mimarisi

Modern SharePoint’te temel yapı taşları:

- **Site (team / communication)**
- **Document library**
- **List**
- **Page / news**
- **Hub site** (birden fazla siteyi bağlar)
- **Permissions** (Azure AD / Entra grupları üzerinden)

### Team site vs Communication site

| Team site | Communication site |
|-----------|-------------------|
| M365 grubuna bağlı | Genelde geniş yayın |
| Dar ekip işbirliği | Intranet, duyuru |
| Teams ile doğal eşleşme | Yönetici / iletişim ekibi |

## 5.3 İzin modeli (en kritik konu)

SharePoint izinleri **kalıtım** ile akar: Site → Library → Folder → Item.

Kötü pratik: her klasöre unique permission.  
İyi pratik: **Entra güvenlik grupları** ile site düzeyinde rol (Owners / Members / Visitors).

Rol özeti:

- **Owners** — tam kontrol
- **Members** — düzenleme
- **Visitors** — okuma

**Case Study 5-A — 400 unique permission**  
KuzeyLojistik İK klasöründe her alt klasöre özel izin. Bir kişi işten çıkınca erişim temizliği imkânsız.  
**Çözüm:** Yeniden tasarım — güvenlik grupları + sensitivity label + mümkün olduğunca kalıtım.

## 5.4 Paylaşım (sharing) politikası

Tenant seviyesinde kararlar:

1. Dış paylaşım açık mı? (Anyone / New and existing guests / Existing / Only organization)
2. Anyone link süresi ve parolası?
3. Varsayılan link türü: Specific people mi, organization mi?

**Öneri (KuzeyLojistik v1):**  
Kurumsal varsayılan = Existing guests + organization links. “Anyone” sadece belirli sitelerde, kısa TTL.

Diyagram: `diyagramlar/05-paylasim-karar-agaci.svg`

## 5.5 OneDrive yönetişimi

- Depolama kotası
- Dış paylaşım (tenant ile hizalı)
- **Offboarding:** Kullanıcı silinmeden önce OneDrive sahipliğini yöneticiye / yöneticiye transfer et
- Known Folder Move (Windows Desktop/Documents/Pictures → OneDrive) — endpoint ile birlikte düşünülür

## 5.6 Metadata, içerik türleri, arama

Dosya adıyla yönetim ölçeklenmez. Metadata (müşteri kodu, yıl, gizlilik) + content type + search schema = bulunabilirlik.

Purview sensitivity label’ları SharePoint/OneDrive dosyalarına işlenebilir — Bölüm 7 ile köprü.

## 5.7 Case Study 5-B — “Herkes herkese link”

Satış ekibi teklif PDF’lerini Anyone link ile müşteriye attı; linkler Google’a düştü.  
**Kontroller:** Anyone kapat veya watermark + expiry; DLP “dışarıya teklif şablonu” kuralı; eğitim.

## 5.8 Laboratuvar 5

1. Bir team site ve bir communication site oluşturun; farkı yazın.
2. Üç Entra grubu ile Owners/Members/Visitors bağlayın.
3. OneDrive’dan dışarıya bir dosya paylaşın; ardından tenant sharing raporuna bakın.
4. Offboarding için OneDrive access delegation adımlarını runbook’a yazın.

## 5.9 Kontrol listesi

- [ ] OneDrive vs SharePoint niyet farkını savundum
- [ ] Unique permission tuzağını anlattım
- [ ] Sharing politikası için karar ağacı çizdim
- [ ] Offboarding’de OneDrive transferini unutmam

> **Sonraki:** [Bölüm 6 — Microsoft Teams](06-microsoft-teams.md)

## 5.10 Derinleşme: Hub ve intranet bilgi mimarisi

KuzeyLojistik intranet önerisi:

- **Home hub** (communication) — duyuru
- **IK hub** — politikalar (yalnızca dahili)
- **Operasyon hub** — saha prosedürleri
- Her hub altında 3–7 site; daha fazlası arama ve sahiplik sorunudur

Navigation + search + news = intranet başarısı. Sadece “dosya dump” intranet değildir.

## 5.11 Versiyon geçmişi, geri dönüşüm ve dosya kurtarma

- Library versioning (major/minor)
- Recycle bin (site + site collection)
- OneDrive restore / SharePoint restore (ransomware senaryosu)
- Retention hold varsa kullanıcı “sildim” sanır ama durur — destek bunu bilmeli

## 5.12 Sync istemcisi ve Known Folder Move

Windows’ta Desktop/Documents OneDrive’a yönlendirme verimliliği artırır ama:

- Çok büyük PST / VM imajlarını OneDrive’a koymayın
- Instrumentasyon / mühendislik klasörleri için policy istisnası
