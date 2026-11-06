# Bölüm 6 — Microsoft Teams ve İşbirliği Mimarisi

## 6.1 Teams nedir? (Sadece sohbet değil)

Teams; **sohbet + kanal + toplantı + dosya + uygulama + telefon** yüzeyidir. Altında çoğu zaman:

- Microsoft 365 Group
- SharePoint site (Files sekmesi)
- Exchange (grup mailbox / takvim)
- OneDrive (özel sohbet dosyaları)

vardır. Bu yüzden Teams’i “ayrı ürün” sanmak yönetim hatalarına yol açar.

Diyagram: `diyagramlar/06-teams-arkitektur.svg`

## 6.2 Team bilgi mimarisi

```
Team
 ├─ Kanallar (Standard / Private / Shared)
 │   ├─ Posts
 │   ├─ Files → SharePoint klasörü
 │   └─ Sekmeler (Wiki değil; modern Apps / Pages)
 ├─ Üyelik → M365 Group
 └─ Politikalar → Teams admin center
```

### Kanal türleri

| Tür | Görünürlük | Ne zaman |
|-----|------------|----------|
| Standard | Tüm ekip | Varsayılan iş |
| Private | Seçili üyeler | Hassas alt proje |
| Shared | Başka team / dış | Çok-ekipli iş |

**Governance uyarısı:** Private/Shared kanal çoğalması SharePoint izin karmaşıklığını artırır. Bilinçli kullanın.

## 6.3 Politikalar (Teams admin)

Önemli politika aileleri:

- **Messaging policies** — kim kimle sohbet eder, GIF, edit…
- **Meeting policies** — kayıt, dışarıdan katılım, lobby
- **App permission / setup policies** — hangi uygulamalar
- **Calling policies** — PSTN / Teams Phone
- **Live events / Town hall** politikaları
- **Teams templates** — standart ekip iskeleti

KuzeyLojistik örneği:

| Persona | Meeting | Messaging |
|---------|---------|-----------|
| Genel çalışan | Kayıt açık, dışarı lobby | Standart |
| Saha | Mobil optimize | GIF kapalı (bant genişliği) |
| Yönetim | Webinar özellikleri | — |

## 6.4 Yaşam döngüsü: Team enflasyonu

Her proje için yeni team = 2 yıl sonra 800 ölü team.

Çözüm seti:

1. **Naming policy** (`Dept-Project-...`)
2. **Expiration / renewal** (Group expiration — Entra)
3. **Archiving**
4. **Templates + onaylı oluşturma** (request form + otomasyon)
5. **Owners minimum 2 kişi**

## 6.5 Toplantılar ve uyumluluk

- Toplantı kaydı OneDrive / SharePoint’e düşer — retention burada geçerli
- Dış katılımcı + anonim lobby politikası güvenlik olayıdır
- Sensitivity label ile toplantı şifreleme / lobby zorunluluğu (lisansa bağlı)

## 6.6 Case Study 6-A — “Gölge IT Teams’i”

Pazarlama, IT’ye sormadan 40 team açtı; müşteri verisi dış misafirlere açık kanallarda.  
**Müdahale:** Dış erişimi kısıtla, naming + expiration aç, mevcut team’leri sınıflandır (keep / merge / archive), DLP eğitimi.

## 6.7 Case Study 6-B — Dosya nerede?

Kullanıcı “Teams’te kayboldu” dedi. Aslında private kanalın ayrı SharePoint sitesi vardı.  
**Ders:** Destek ekibi Teams = SharePoint eşlemesini bilmeli. Graph/PowerShell ile site URL’sini bulun.

## 6.8 Laboratuvar 6

1. Template’siz bir team açın; Files’ın SharePoint URL’sini bulun.
2. Private kanal ekleyin; ayrı site oluştuğunu doğrulayın.
3. Meeting policy’de dışarıdan katılımı kısıtlayın; test edin.
4. Naming policy taslağı yazın (3 kural).

## 6.9 Kontrol listesi

- [ ] Teams’in altındaki Group/SPO/EXO ilişkisini çizdim
- [ ] Kanal türü trade-off’unu biliyorum
- [ ] Team enflasyonuna karşı 3 kontrol saydım
- [ ] Destek için “dosya hangi sitede?” yolunu biliyorum

> **Sonraki:** [Bölüm 7 — Güvenlik, uyumluluk ve Zero Trust](07-guvenlik-uyumluluk-zero-trust.md)

## 6.10 Derinleşme: Voice / Teams Phone

Kurumlar klasik santrali Teams’e taşır:

- Calling Plan / Operator Connect / Direct Routing seçenekleri
- Acil arama (emergency calling) lokasyon bilgisi
- Auto attendant & call queue

Bu konu başlı başına uzmanlık alanıdır; M365 admin’i en azından **seçenek farklarını** ve lisans etkisini bilmelidir.

## 6.11 Rooms ve paneller

Teams Rooms cihazları, hesap modeli (resource account), çevre birimleri ve meeting policy istisnaları. Oda hesabı kullanıcı gibi lisanslanır (Rooms lisansları).

## 6.12 Dış erişim vs misafir erişimi

- **External access:** federasyonla diğer Skype/Teams org (presence/chat)
- **Guest access:** Azure B2B ile team’e üye

İkisini karıştırmak destek ticket’larının klasik kaynağıdır.


## 6.13 Derinleşme: Bilgi mimarisi karar ağacı

Yeni iş ihtiyacı geldiğinde:

1. **Kalıcı departman mı?** → Departman team (uzun ömür)
2. **Geçici proje mi?** → Project team + expiration
3. **Sadece duyuru mu?** → Teams yerine communication site / org-wide (dikkat)
4. **Hassas alt grup mu?** → Private channel veya ayrı team (trade-off bilinerek)
5. **Çok şirketli mi?** → Shared channel / B2B guest net kurallarla

## 6.14 Toplantı güvenliği checklist

- Lobisiz anonim katılım?
- Dış kullanıcı sunum yapabilir mi?
- Kayıt otomatik mi, nereye düşer, retention?
- Watermark / end-to-end encryption gereken toplantılar?
- VIP toplantılarda sensitivity label

## 6.15 Uygulama yönetişimi

- Global app permission policy: hangi apps
- Blocked apps list
- Setup policy ile pin’lenen apps (yardım masası)
- Üçüncü parti chatbot / connector riski

## 6.16 Network anahtar noktaları (önizleme)

Teams ses/görüntü UDP ve belirli URL/IP aralıklarına bağımlıdır. Split tunneling ve proxy hataları “Teams bozuk” ticket’larının yarısıdır. Ayrıntı: Bölüm 17 (Ağ).

## 6.17 Çalışılmış senaryo: 800 team temizliği

1. Last activity < 90 gün → aday
2. Owner yok → IT sahipliği geçici
3. Keep / Merge / Archive karar matrisi
4. Naming policy + expiration aç
5. Yeni team için talep formu (Power Automate onay)
