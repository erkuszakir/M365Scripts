# Bölüm 17 — Ağ, Bağlantı ve İstemci Performansı

## 17.1 Neden ağ, M365 kitabında?

“Outlook yavaş”, “Teams ses kesiliyor”, “OneDrive sync takılıyor” ticket’larının önemli kısmı **tenant ayarı değil, ağ yoludur**. Uzman, Service Health ile proxy/firewall/DNS ayrımını yapar.

Diyagram: `diyagramlar/17-m365-ag-yolu.svg`

## 17.2 Temel ilkeler

1. **Microsoft 365 trafiğini kırıp SSL inspection ile boğmayın** (özellikle Teams media / bazı uçlar).
2. **Optimize / allow list** URL ve IP’leri kategorize edin (Microsoft’un yayınladığı endpoint listeleri).
3. **DNS çözümlemesi doğru coğrafyaya** gitsin (lokal DNS, yanlış forwarder).
4. **UDP** ses/görüntü için kritik; sadece TCP’ye düşmek kaliteyi öldürür.
5. **Split tunneling** VPN senaryolarında M365 için sık önerilir (kurum politikasına göre).

## 17.3 Endpoint kategorileri (kavramsal)

| Kategori | Örnek etki |
|----------|------------|
| Optimize | Teams media — en hassas |
| Allow | Auth, Exchange, SPO |
| Default | Daha az kritik |

Firewall ekibi “hepsini proxy’ye” derse işbirliği bozulur. M365 admin olarak endpoint gerekçesini anlatabilmelisiniz.

## 17.4 Teams medya yolu

```
İstemci → UDP (SRTP) → Microsoft edge → karşı uç
```

Semptomlar:
- Robot ses / tek yönlü ses → UDP / NAT / QoS
- Toplantıya giremiyor ama sohbet çalışıyor → media vs signaling ayrımı
- VPN açıkken bozuk, kapalıyken iyi → split tunnel adayı

**Araçlar:** Teams çağrı kalitesi / Call Analytics, Experience Insights (lisansa göre), `netstat`/packet capture (ileri).

## 17.5 Exchange / Outlook bağlantısı

- Modern Authentication zorunlu
- MAPI over HTTP
- Autodiscover sorunları (Bölüm 4)
- Conditional Access seçici → eski Outlook istemcileri kırılabilir (sürüm politikası)

## 17.6 Proxy, PAC ve SSL inspection tuzakları

- PAC dosyası M365’i yanlışlıkla proxy’ye gönderir
- SSL inspection sertifika pin kırar / gecikme ekler
- Çift NAT + uzun path → timeout’lar

## 17.7 IPv6, MTU, QoS

- MTU/fragment sorunları nadir ama inatçı
- QoS DSCP işaretleme (Wi-Fi/kablolu) ses için değerli
- Ev kullanıcılarında Wi-Fi kanal kalitesi “bulut sorunu” sanılır

## 17.8 Case Study 17-A — Proxy her şeyi yutuyor

KuzeyLojistik tüm HTTPS’i proxy’den geçirdi; Teams toplantıları çöktü.  
**Çözüm:** Optimize kategorisini bypass; ölçümle doğrula; güvenlik istisnasını belgele.

## 17.9 Case Study 17-B — VPN split tunnel yok

Uzaktan çalışanlar VPN’e zorunlu; EXO gecikmesi 400ms+.  
**Çözüm:** M365 split tunnel + CA ile cihaz uyumu devam.

## 17.10 Laboratuvar 17

1. Tenant’ınız için (veya örnek) 10 kritik URL/IP kategorisini tabloya dökün.
2. “Teams ses kesik” için 6 adımlık teşhis ağacı yazın.
3. VPN senaryosunda split tunnel artı/eksi listesi çıkarın.
4. Service Health vs ağ ayrımı için karar tablosu yapın.

## 17.11 Kontrol listesi

- [ ] Optimize/Allow ayrımını açıklayabiliyorum
- [ ] UDP’nin Teams için neden kritik olduğunu savundum
- [ ] SSL inspection istisna gerekçemi yazdım
- [ ] VPN + CA birlikte düşünülüyor

> **Sonraki:** [Bölüm 18 — Hibrit kimlik derinlemesine](18-hibrit-kimlik-entra-connect.md)
