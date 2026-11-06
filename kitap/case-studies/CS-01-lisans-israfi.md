# CS-01 — Lisans İsrafı (Detaylı)

## Bağlam
KuzeyLojistik 180 kullanıcıya E5 verdi. CFO yıllık maliyeti sorguladı.

## Keşif adımları
1. Graph ile SKU dağılımı
2. 30/60/90 gün sign-in yok listesi
3. Teams/EXO kullanım raporları
4. Persona atölyesi (İK + IT + finans)

## Bulgular
- 95 kullanıcı yalnızca mail + Teams
- 40 kullanıcıda E5 güvenlik özellikleri hiç tetiklenmemiş
- 12 misafir için yanlışlıkla tam lisans

## Kalıcı tasarım
| Persona | SKU |
|---------|-----|
| Bilgi işçisi | E3 veya Business Premium |
| Saha | Basic + gerekli eklenti |
| Güvenlik/IT | E5 |
| VIP | E5 veya E3+Defender |

## KPI
- Atanmış ama 60 gündür inaktif lisans < %5
- Çeyreklik lisans review tutanağı
