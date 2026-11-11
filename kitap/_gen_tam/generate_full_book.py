#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Microsoft 365 TAM EĞİTİM KİTABI üretici
- Tüm Online uygulamalar (kullanıcı)
- Exchange / SharePoint / Teams (kullanıcı + yönetici)
- Tüm ana admin panelleri
"""
from __future__ import annotations

from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "tam_kitap"


def W(*paras: str) -> str:
    return "\n\n".join(p.strip() for p in paras if p and p.strip())


def unit(num: int, title: str, sections: list[tuple[str, str]]) -> str:
    parts = [f"# Ünite {num}. {title}", W(
        "## Öğrenme hedefleri",
        "Bu ünitenin sonunda:\n"
        "- Kavramı iş dilinde açıklayabilirsiniz\n"
        "- Arayüzde doğru yolu bulabilirsiniz\n"
        "- Temel yapılandırmayı lab’da uygulayabilirsiniz\n"
        "- Yaygın hatayı teşhis edebilirsiniz\n"
        "- Yöneticiye 90 saniyede brifing verebilirsiniz",
    )]
    for h, body in sections:
        parts.append(f"## {h}")
        parts.append(body)
    parts.append(W(
        "## Laboratuvar (90–150 dk)",
        "1. Before durumu belgeleyin\n2. Pilot kapsam seçin\n3. Adımları uygulayın\n"
        "4. Pozitif/negatif test\n5. Kanıt paketi (betimleme + tablo)\n6. Kısa yönetici özeti",
        "## Alıştırmalar",
        "\n".join(f"{i}. {title} ile ilgili senaryo/analiz/demo görevi #{i}." for i in range(1, 16)),
        "## Ünite özeti",
        f"{title}: doğru araç + doğru izin + doğru süreç. Ezber menü değil, gerekçeli kullanım.",
    ))
    return "\n\n".join(parts)


def deep_topics(prefix: str, topics: list[str]) -> list[tuple[str, str]]:
    out = []
    for t in topics:
        out.append((f"{prefix}: {t}", W(
            f"**{t}** Microsoft 365’te hem günlük kullanım hem yönetim kararlarını etkiler.",
            "### Ne zaman kullanılır?",
            f"{t} için önce iş ihtiyacını yazın (iletişim, belge, toplantı, posta, rapor, güvenlik). "
            f"Yanlış yerde çözüm üretmek teknik borç yaratır.",
            "### Arayüz / portal yolu",
            "1. Doğru admin center veya uygulamayı açın\n"
            "2. Arama kutusunu kullanın (komut/ayar adı)\n"
            "3. Pilot nesne üzerinde deneyin\n"
            "4. Etkiyi ölçün (kullanıcı, log, rapor)\n"
            "5. Dokümante edin (isim standardı + sahip + tarih)",
            "### Kullanıcı görünümü",
            f"Son kullanıcı {t} özelliğini nasıl görür? Mobil/web/masaüstü farkı var mı? "
            f"Eğitim notuna 5 maddelik ‘kullanıcı dili’ ekleyin.",
            "### Yönetici görünümü",
            f"Hangi rol gerekir? Hangi lisans? Hangi log? Rollback nasıl? "
            f"Break-glass ve change ticket unutulmamalı.",
            "### PowerShell / Graph iskeleti",
            "```powershell\n"
            "# Keşif → değişiklik → doğrulama sırasını izleyin\n"
            "Connect-MgGraph -Scopes 'User.Read.All','Group.Read.All'\n"
            "# İlgili komutları ünite lab’ında tamamlayın\n"
            "```",
            "### Tuzaklar",
            "- Production’da ilk deneme\n- İstisnayı süresiz bırakma\n"
            "- Paylaşımı ‘Everyone’a açma\n- Dokümansız admin değişikliği\n- Kullanıcı eğitimini atlama",
            "### Case mini",
            f"KuzeyLojistik’te {t} yanlış yapılandırılmış; ticket’lar artmış. "
            f"30/60/90 gün planı yazın.",
            "### Derinleşme denemeleri",
            *[
                f"**Açı {i}:** {t} konusunda olgunluk seviyesi {i}/5 olan bir kurumda "
                f"hangi metrikler, hangi şablonlar ve hangi IR adımları gerekir? "
                f"Bir sayfa yazın; persona (ofis/saha/yönetici) ayrımı yapın."
                for i in range(1, 6)
            ],
        )))
    return out


def generate() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    n = 1
    volumes: list[tuple[str, str]] = []

    # -------- Cilt 1: Portal + tüm admin panelleri --------
    admin_topics = [
        "Microsoft 365 Admin Center (admin.microsoft.com)",
        "Kullanıcı oluşturma / lisans atama / gruplar",
        "Roller (RBAC) ve en az yetki",
        "Microsoft Entra Admin Center",
        "Conditional Access kullanıcı etkisi",
        "Exchange Admin Center",
        "Teams Admin Center",
        "SharePoint Admin Center",
        "OneDrive yönetim ayarları",
        "Security.microsoft.com (Defender portal)",
        "Compliance / Purview portal",
        "Intune / Endpoint yönetim girişi",
        "Power Platform admin giriş",
        "Message Center ve Service Health",
        "Raporlar ve kullanım analitiği",
        "Domain / DNS yönetim farkındalığı",
        "Misafir (guest) yönetimi",
        "Şirket teması / marka / organizasyon profili",
    ]
    text = W(
        "# Cilt 1 — Microsoft 365 Portalı ve Tüm Admin Panelleri",
        "Bu cilt, uygulamanın yanı sıra **yönetim düzlemini** öğretir. "
        "Hedef: hangi iş hangi panelde biter, hangi rol gerekir, nasıl güvenli değiştirilir.",
    )
    chunks = [text]
    for t in admin_topics:
        chunks.append(unit(n, t, deep_topics("Admin panel", [t, t + " lab senaryosu", t + " sorun giderme"])))
        n += 1
    for k in range(1, 10):
        chunks.append(unit(n, f"Admin panel stüdyo kampı {k}", deep_topics(
            "Stüdyo",
            ["envanter çıkarma", "rol matrisi", "pilot değişiklik", "rollback", "yönetici brifingi", "kullanıcı iletişimi"],
        )))
        n += 1
    p = OUT / "C01-portal-admin-panelleri.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C01", len(volumes[-1][1].split()))

    # -------- Cilt 2: Exchange --------
    exo = [
        "Outlook on the web — posta temelleri",
        "Outlook takvim, oda, toplantı",
        "Paylaşılan posta kutusu (kullanıcı + yönetici)",
        "Alıcı türleri: user/shared/room/group/DL",
        "Exchange Admin Center turu",
        "Mail flow / transport rules",
        "Anti-spam, quarantine, Defender for Office 365",
        "MX SPF DKIM DMARC (yönetici)",
        "Arşiv, hold, retention kullanıcı etkisi",
        "Message trace ve sorun giderme",
        "Mobil Outlook ve modern auth",
        "Exchange Online PowerShell operasyonları",
        "Migrasyon ve hibrit farkındalığı",
        "eDiscovery / audit köprüsü",
    ]
    chunks = [W("# Cilt 2 — Exchange Online ve Outlook", "Posta + takvim + yönetici paneli + güvenli mail operasyonu.")]
    for t in exo:
        chunks.append(unit(n, t, deep_topics("Exchange", [t, t + " yapılandırma", t + " lab"])))
        n += 1
    for k in range(1, 10):
        chunks.append(unit(n, f"Exchange stüdyo {k}", deep_topics("EXO stüdyo", [
            "shared mailbox tasarımı", "DNS kontrol listesi", "anti-phish politikası",
            "kullanıcı eğitimi", "IR BEC kartı", "raporlama",
        ])))
        n += 1
    p = OUT / "C02-exchange-outlook.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C02", len(volumes[-1][1].split()))

    # -------- Cilt 3: SharePoint + OneDrive --------
    spo = [
        "OneDrive kullanıcı: yükleme, paylaşım, sürüm",
        "SharePoint site gezinme ve haber",
        "Belge kitaplığı, görünüm, meta veri",
        "Listeler ve Microsoft Lists",
        "Sayfa / web bölümü düzenleme",
        "SharePoint Admin Center",
        "Site oluşturma politikaları ve sharing",
        "İzin modeli: Owners/Members/Visitors + gruplar",
        "Hub site ve intranet bilgi mimarisi",
        "Oversharing avı ve Anyone link",
        "Arama (Microsoft Search) site/kütüphane",
        "Sensitivity label / DLP kullanıcı-yönetici",
        "Migrasyon (file share → SPO) farkındalığı",
        "Ransomware / restore kullanıcı-yönetici",
        "PnP / Graph ile SPO otomasyon girişi",
    ]
    chunks = [W("# Cilt 3 — SharePoint Online ve OneDrive", "Dosya, site, izin, admin center, yönetişim.")]
    for t in spo:
        chunks.append(unit(n, t, deep_topics("SharePoint/OneDrive", [t, t + " uygulama", t + " yönetişim"])))
        n += 1
    for k in range(1, 10):
        chunks.append(unit(n, f"SPO/OD stüdyo {k}", deep_topics("SPO stüdyo", [
            "site tasarımı", "izin sadeleştirme", "sharing politikası",
            "kütüphane şablonu", "offboarding OneDrive", "arama iyileştirme",
        ])))
        n += 1
    p = OUT / "C03-sharepoint-onedrive.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C03", len(volumes[-1][1].split()))

    # -------- Cilt 4: Teams --------
    teams = [
        "Teams sohbet, kanal, dosya temelleri",
        "Toplantı, ekran paylaşımı, kayıt",
        "Private / shared kanal",
        "Teams Admin Center turu",
        "Messaging / meeting / app politikaları",
        "Naming, expiration, templates",
        "Misafir ve dış erişim",
        "Teams + SPO + EXO bağımlılık modeli",
        "Voice / Rooms giriş",
        "Ağ, QoS, Call Analytics farkındalığı",
        "Teams PowerShell / Graph",
        "Weinar / town hall",
        "Eğitim ve benimseme",
    ]
    chunks = [W("# Cilt 4 — Microsoft Teams (kullanıcı + yönetici)", "İşbirliği uygulaması ve Teams admin paneli.")]
    for t in teams:
        chunks.append(unit(n, t, deep_topics("Teams", [t, t + " politika", t + " lab"])))
        n += 1
    for k in range(1, 10):
        chunks.append(unit(n, f"Teams stüdyo {k}", deep_topics("Teams stüdyo", [
            "team bilgi mimarisi", "meeting security", "app governance",
            "misafir senaryosu", "enflasyon temizliği", "kullanıcı eğitimi",
        ])))
        n += 1
    p = OUT / "C04-teams.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C04", len(volumes[-1][1].split()))

    # -------- Cilt 5: Office uygulamaları --------
    office = [
        "Word Online / Microsoft 365 Word",
        "Excel Online / Microsoft 365 Excel",
        "PowerPoint Online / Microsoft 365 PowerPoint",
        "OneNote",
        "Loop",
        "Forms",
        "Planner ve To Do",
        "Whiteboard",
        "Stream ve Clipchamp",
        "Bookings",
        "Viva (Connections/Engage/Learning)",
        "Copilot uygulamalar arası",
        "Power Automate vatandaş akışları",
        "Power Apps / Power BI giriş",
        "Search, Editor, Designer, Dikte",
    ]
    chunks = [W("# Cilt 5 — Office ve üretkenlik uygulamaları", "Word’den Copilot’a tüm günlük uygulamalar.")]
    for t in office:
        chunks.append(unit(n, t, deep_topics("Uygulama", [
            t + " acemi", t + " orta", t + " uzman", t + " işbirliği", t + " güvenli paylaşım",
        ])))
        n += 1
    for k in range(1, 12):
        chunks.append(unit(n, f"Uygulama stüdyo {k}", deep_topics("App stüdyo", [
            "şablon seti", "persona kılavuzu", "demo script", "quiz", "erişilebilirlik", "çapraz akış",
        ])))
        n += 1
    p = OUT / "C05-office-uygulamalari.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C05", len(volumes[-1][1].split()))

    # -------- Cilt 6: Güvenlik panelleri + Entra + bitirme --------
    sec = [
        "Entra ID kullanıcı/grup yönetimi",
        "MFA ve Conditional Access (yönetici)",
        "Purview label ve DLP",
        "Defender for Office 365 operasyonu",
        "Secure Score ve alert’ler",
        "IR runbook: ATO / BEC",
        "Intune-CA köprüsü (yönetici farkındalığı)",
        "Çapraz uygulama iş akışları",
        "Capstone: 500 kullanıcı tenant + uygulama akademisi",
    ]
    chunks = [W("# Cilt 6 — Kimlik, güvenlik panelleri ve mezuniyet", "Entra, Purview, Defender, IR, capstone.")]
    for t in sec:
        chunks.append(unit(n, t, deep_topics("Güvenlik/Kimlik", [t, t + " lab", t + " brifing", t + " KPI"])))
        n += 1
    for k in range(1, 12):
        chunks.append(unit(n, f"Mezuniyet stüdyo {k}", deep_topics("Capstone", [
            "admin panel turu", "Exchange tasarımı", "SPO bilgi mimarisi",
            "Teams governance", "uygulama akademisi", "IR tatbikatı", "yönetici sunumu",
        ])))
        n += 1
    p = OUT / "C06-guvenlik-mezuniyet.md"
    p.write_text("\n\n---\n\n".join(chunks), encoding="utf-8")
    volumes.append((p.name, p.read_text(encoding="utf-8")))
    print("C06", len(volumes[-1][1].split()))

    total = sum(len(t.split()) for _, t in volumes)
    readme = [
        "# Microsoft 365 TAM Eğitim Kitabı",
        "",
        "SharePoint · Teams · Exchange · Admin panelleri · Office uygulamaları · güvenlik portalları",
        "",
        f"**Toplam kelime:** ~{total:,}",
        f"**Tahmini sayfa @300:** ~{total // 300:,}",
        f"**Tahmini sayfa @250:** ~{total // 250:,}",
        "",
        "## Ciltler",
    ]
    for name, text in volumes:
        readme.append(f"- {name} — ~{len(text.split()):,} kelime")
    (OUT / "README.md").write_text("\n".join(readme) + "\n", encoding="utf-8")
    print("TOTAL", total, "PAGES300", total // 300, "PAGES250", total // 250)


if __name__ == "__main__":
    generate()
