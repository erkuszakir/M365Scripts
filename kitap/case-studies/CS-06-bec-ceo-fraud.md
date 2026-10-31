# CS-06 — BEC / CEO Fraud (Detaylı)

## Atak
Typosquat: `ceo@kuzeynlojistik.com` → muhasebeye “acil EFT”.

## Neden geçti?
- DMARC yok / p=none
- Anti-impersonation VIP listesinde CEO yok
- Finans “mail ile ödeme” kültürü
- Safe Links URL yoktu; düz metin IBAN

## Teknik + süreç düzeltmesi
1. DMARC p=quarantine → p=reject yolu
2. User impersonation protection
3. External mail banner
4. EFT için ikinci kanal teyit zorunluluğu (telefon)
5. Attack simulation ile muhasebe eğitimi

## Yöneticiye cümle
“Bu bir mail filtresi sorunu değil; ödeme kontrolü + kimlik doğrulama boşluğu.”
