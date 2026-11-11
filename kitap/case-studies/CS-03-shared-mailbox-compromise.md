# CS-03 — Shared Mailbox Ele Geçirme (Detaylı)

## Zaman çizelgesi
- 09:10 Müşteri spam şikâyeti
- 09:25 Message trace: destek@ çıkış
- 09:40 Sign-in log: interactive login Nigeriya IP
- 10:00 Shared hesabın parolası var olduğu anlaşıldı

## Müdahale
1. Hesabı disable / parola rotate
2. Oturum revoke
3. Outbound spam blok geçici
4. Full Access modeline geçiş planı
5. MFA/CA gözden geçirme (bu hesap artık sign-in yok)

## Kök neden
Shared mailbox = ortak kimlik sanıldı. Operasyonel kolaylık güvenliği yendi.

## Kalıcı kontroller
- Shared’da sign-in yok denetim raporu (aylık)
- Naming: `smb-` öneki
- Mailbox audit zorunlu
