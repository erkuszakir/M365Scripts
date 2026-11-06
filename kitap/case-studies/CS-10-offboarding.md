# CS-10 — Offboarding Sızıntısı (Detaylı)

## Olay
İşten çıkan satışçı 3 hafta sonra hâlâ OneDrive linklerinden teklif dosyalarına erişiyor; mobil Outlook oturumu canlı.

## Kırılan adımlar
- Hesap disable gecikti (İK bildirimi geç)
- Session revoke yok
- OneDrive sahiplik transferi unutuldu
- Gruplardan çıkarma yarım
- Telefon App Protection selective wipe yok

## Hedef SLA runbook
| Dakika | İş |
|-------:|----|
| 0–15 | Disable + revoke |
| 15–60 | Grup/Teams temizliği |
| Aynı gün | OneDrive transfer |
| 24–72s | Mailbox kararı (shared/forward/legal) |
| 72s | Selective wipe / cihaz |

## Otomasyon
HR “terminated” → ticket + script iskeleti (Graph) + insan onayı kapısı hassas adımlarda.
