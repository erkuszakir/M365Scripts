#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate university-depth Microsoft 365 Online APPS training volumes."""
from __future__ import annotations

from pathlib import Path
from app_catalog import APPS, CILTS

OUT = Path(__file__).resolve().parents[1] / "uygulamalar"
APP_MAP = {a[0]: a for a in APPS}


def w(parts: list[str]) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


def feature_chapter(app_title: str, level_name: str, features: list[str], unit: int) -> str:
    blocks = [
        f"# Ünite {unit} — {app_title}: {level_name} seviye",
        f"## Öğrenme hedefleri",
        "Bu ünitenin sonunda öğrenci:\n"
        + "\n".join(f"- {f} özelliğini bağımsız kullanabilir" for f in features)
        + "\n- İş senaryosuna uygun özelliği seçebilir\n- Yaygın hataları teşhis edebilir\n- Kısa bir eğitim demosu yapabilir",
        f"## {level_name} seviye — kavramsal giriş",
        f"{app_title} uygulamasında {level_name.lower()} seviye, ezber menü gezmek değil; "
        f"**iş sonucuna giden en kısa doğru yolu** öğrenmektir. Her özellik bir iş ihtiyacına yanıt vermelidir: "
        f"iletişim, karar, kayıt, işbirliği veya analiz.",
    ]
    for i, feat in enumerate(features, 1):
        blocks += [
            f"## {i}. Özellik laboratuvarı: {feat}",
            f"### Ne işe yarar?",
            f"**{feat}**, {app_title} içinde günlük işi hızlandıran temel bir yapı taşıdır. "
            f"Öğrenci önce ‘ne zaman kullanırım?’ sorusunu cevaplamalı, sonra tıklama sırasını ezberlemelidir.",
            f"### Arayüz yol haritası (metin senaryosu)",
            f"1. Microsoft 365’e girin → uygulama başlatıcıdan **{app_title.split('—')[0].strip()}** açın.\n"
            f"2. {feat} ile ilgili komutu şerit/menü/sağ tık/komut kutusunda bulun.\n"
            f"3. Küçük bir örnek dosya/öğe üzerinde deneyin (production verisi değil).\n"
            f"4. Sonucu bir meslektaşınızın göreceği gibi önizleyin (paylaşım/izin farkı).\n"
            f"5. Geri al / sürüm geçmişi varsa geri dönüşü deneyin.",
            f"### Adım adım uygulama (öğrenci föyü)",
            f"**Görev:** {feat} kullanarak 15 dakikalık mini çıktı üretin.\n\n"
            f"**Başarı ölçütü:** Başka bir öğrenci yönergesiz sonucu anlayabilsin.\n\n"
            f"**Kanıt:** 3 ekran betimlemesi (başlangıç / işlem / sonuç) + 5 cümlelik not.",
            f"### İyi pratikler",
            f"- Anlamlı ad/başlık kullanın\n"
            f"- Gereksiz herkese açık paylaşım yapmayın\n"
            f"- Mobil ve web farkını bir kez doğrulayın\n"
            f"- Klavye kısayolunu not edin\n"
            f"- Erişilebilirlik (başlık stili, alt metin, kontrast) unutmayın",
            f"### Kötü pratikler / tuzaklar",
            f"- ‘Herkese link’ ile tembel paylaşım\n"
            f"- Konu dışı sohbette kritik karar bırakmak\n"
            f"- Sürüm tarihini kontrol etmeden üzerine yazmak\n"
            f"- Kişisel OneDrive’a kurumsal resmi evrak gömmek (yanlış yer)",
            f"### Mini senaryo (KuzeyLojistik)",
            f"Ofis planlama ekibi {feat} ile haftalık operasyonu hızlandırmak istiyor. "
            f"Saha ekibi mobilde aynı sonuca ulaşabilmeli. Çözümünüzü persona bazlı yazın.",
            f"### Alıştırmalar",
            f"1. {feat} için 3 kullanım senaryosu yazın.\n"
            f"2. Bir ‘yanlış kullanım’ örneği bulun ve düzeltin.\n"
            f"3. 60 saniyelik akran öğretimi script’i hazırlayın.\n"
            f"4. Mobil kısıt varsa alternatif yol önerin.\n"
            f"5. Bu özelliği Copilot varsa nasıl hızlandırırdınız? (yoksa klasik yol)",
            f"### Öz-test",
            f"- [ ] Özelliği yardımsız bulabiliyorum\n"
            f"- [ ] Ne zaman kullanmayacağımı biliyorum\n"
            f"- [ ] Paylaşım/izin etkisini tahmin edebiliyorum",
        ]
    # depth essays
    essays = []
    for n, theme in enumerate([
        "işbirliği etiği", "dosya isimlendirme", "mobil verimlilik", "erişilebilirlik",
        "zaman yönetimi", "kalite kontrol", "güvenli paylaşım", "sürüm disiplini",
        "şablonlaştırma", "ölçülebilir çıktı",
    ], 1):
        essays.append(f"### Derinleşme {n}: {feat if False else theme} — {level_name}")
        essays.append(
            f"{app_title} öğrenirken **{theme}** boyutu, özelliğin teknik bilgisinden ayrılamaz. "
            f"Üniversite düzeyinde yeterlilik; menüyü tanımak + iş kalitesi + başkalarıyla sürtünmesiz çalışma demektir. "
            f"Her ödevde ‘ben yaptım’ yerine ‘ekip bunu tekrar üretebilir’ standardını hedefleyin. "
            f"KuzeyLojistik gibi dağıtık ekiplerde {theme}, yanlış uygulamada gizli maliyet üretir: kayıp dosya, "
            f"çift iş, yanlış karar, müşteriye giden hatalı ek."
        )
        essays.append(
            f"Karşılaştırma çalışması: {theme} açısından zayıf / orta / olgun kullanıcı davranışlarını tabloya dökün. "
            f"Olgun kullanıcı; şablon kullanır, adı standartlaştırır, paylaşımı sınırlar, geri bildirimi belgeler, "
            f"bilgiyi doğru uygulamaya koyar (Outlook’a yapıştırılabilecek her şey Teams’e veya Loop’a daha uygun olabilir)."
        )
        essays.append(
            f"Lab uzatması: 25 dakikada {theme} odaklı bir ‘önce/sonra’ iyileştirmesi yapın. "
            f"Önce kaos bir örnek oluşturun (bilerek), sonra standarda çekin, farkı yazın."
        )
    blocks += [f"## {level_name} seviye — akademik derinleşme", *essays]
    blocks += [
        f"## {level_name} seviye ünite sınavı (20 soru)",
        "\n".join(
            f"{i}. {app_title} / {level_name}: senaryo sorusu #{i} — doğru özelliği seçin ve gerekçelendirin (5–8 cümle)."
            for i in range(1, 21)
        ),
        f"## {level_name} seviye proje",
        f"Tek başına 90 dakika: gerçekçi bir iş paketi üretin ve akrana 5 dakikada sunun. Rubrik: doğruluk, netlik, paylaşım güvenliği, erişilebilirlik, yeniden kullanılabilirlik.",
    ]
    return w(blocks)


def app_volume_section(app_id: str, start_unit: int) -> tuple[str, int]:
    _id, title, beg, mid, exp = APP_MAP[app_id]
    u = start_unit
    parts = [
        f"# Uygulama monografı: {title}",
        w([
            "## Uygulamaya genel bakış",
            f"**{title}**, Microsoft 365 Online ekosisteminin bir parçasıdır. "
            f"Web deneyimi (tarayıcı) ile masaüstü istemci arasında özellik farkları olabilir; bu kitap önce **Online/web** yolunu, "
            f"sonra masaüstüyle farkları öğretir.",
            "### Ne zaman bu uygulama?",
            "Karar kuralı: İletişim mi, içerik üretimi mi, dosya mı, görev mi, veri toplama mı, toplantı mı? "
            f"Yanlış uygulama seçmek verimliliği düşürür (ör. uzun proje planını yalnızca e-posta zincirinde yürütmek).",
            "### Öğrenme yolu",
            "Acemi → Orta → Uzman üniteleri sırayla. Her seviyenin lab’ı tamamlanmadan bir sonrakine geçmeyin.",
            "### KuzeyLojistik bağlama notu",
            "Ofis, saha ve yönetici personae’si için aynı özelliğin farklı değeri vardır. Her ünitede en az iki persona düşünün.",
        ]),
    ]
    for level_name, feats in [("Acemi", beg), ("Orta", mid), ("Uzman", exp)]:
        parts.append(feature_chapter(title, level_name, feats, u))
        u += 1
    # Capstone per app
    parts.append(w([
        f"# Ünite {u} — {title}: uygulama bitirme stüdyosu",
        "## Bitirme projesi (4 saatlik paket)",
        f"1. {title} ile kurumsal bir şablon seti tasarlayın.\n"
        f"2. 3 persona için kullanım kılavuzu (tek sayfa × 3).\n"
        f"3. 10 soruluk mini quiz yazın ve cevap anahtarı ekleyin.\n"
        f"4. Yanlış paylaşım senaryosu ve düzeltmesi.\n"
        f"5. Teams/Outlook/OneDrive ile çapraz bağlantı diyagramı (metin).\n"
        f"6. 5 dakikalık demo script’i.",
        "## Değerlendirme rubriği",
        "| Ölçüt | 0 | 1 | 2 |\n|---|---|---|---|\n| Özellik doğruluğu | | | |\n| Senaryo gerçekçiliği | | | |\n| Güvenli paylaşım | | | |\n| Anlatım netliği | | | |\n| Yeniden kullanılabilirlik | | | |",
        "## Portföy kanıt listesi",
        "Ekran betimleri, şablon dosya adları, quiz, demo script, akran geri bildirimi.",
    ]))
    u += 1
    return "\n\n---\n\n".join(parts), u


def generate() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    index = [
        "# Microsoft 365 Online Uygulamaları — Sıfırdan Uzmanlığa",
        "## Üniversite seviyesi uygulama eğitim kitabı (v3.0 — UYGULAMA ODAKLI)",
        "",
        "Bu eser, M365 **admin/mimari** özetinden farklıdır. Odak: **Online üzerinde kullanılan uygulamaların** eğitimi.",
        "",
        "## Kapsanan uygulamalar",
    ]
    for a in APPS:
        index.append(f"- {a[1]}")
    index += ["", "## Ciltler", ""]

    total_words = 0
    unit = 1
    all_for_mega: list[Path] = []

    for cid, ctitle, app_ids in CILTS:
        chunks = [
            w([
                f"# {ctitle}",
                "Bu cilt Microsoft 365 Online uygulama eğitim müfredatının parçasıdır.",
                "Yöntem: Acemi → Orta → Uzman → Bitirme stüdyosu. Her özellik için lab, senaryo, tuzaklar, sınav.",
            ])
        ]
        for aid in app_ids:
            section, unit = app_volume_section(aid, unit)
            chunks.append(section)
        # Extra studio packs for page volume / depth
        for n in range(1, 12):
            chunks.append(feature_chapter(
                ctitle + " — stüdyo pekiştirme",
                f"Pekiştirme-{n}",
                [
                    "senaryo tasarımı",
                    "şablon üretimi",
                    "akrana öğretme",
                    "mobil doğrulama",
                    "paylaşım güvenliği",
                    "erişilebilirlik kontrolü",
                    "sürüm/geri alma",
                    "çapraz uygulama bağlantısı",
                ],
                unit,
            ))
            unit += 1
        text = "\n\n".join(chunks)
        words = len(text.split())
        total_words += words
        path = OUT / f"{cid}.md"
        path.write_text(text, encoding="utf-8")
        all_for_mega.append(path)
        index.append(f"- [{ctitle}]({path.name}) — ~{words:,} kelime")
        print("WROTE", path.name, words)

    # Final mastery volume
    mastery = [w([
        "# Cilt U10 — Ustalık sınavları, rol bazlı kariyer senaryoları ve mezuniyet",
        "Bu cilt tüm uygulamaları birleştirir.",
    ])]
    roles = [
        "Öğrenci asistanı", "İdari personel", "Satış", "İK", "Muhasebe",
        "Öğretim elemanı", "Proje yöneticisi", "Müşteri destek", "Saha operasyon", "Yönetici asistanı",
    ]
    for i, role in enumerate(roles, 1):
        mastery.append(feature_chapter(
            f"Rol akademisi: {role}",
            "Ustalık",
            [
                "Outlook iletişimi",
                "Teams koordinasyonu",
                "OneDrive/SPO belge",
                "Word/Excel/PPT çıktı",
                "Forms/Planner görev",
                "Copilot ile hızlandırma",
                "güvenli paylaşım",
                "haftalık ritim",
            ],
            unit,
        ))
        unit += 1
        mastery.append(w([
            f"## {role} — 2 günlük bootcamp planı",
            "Gün 1: temel üretim uygulamaları + dosya hijyeni\n"
            "Gün 2: Teams + görev + Forms + sunum + akran demo\n"
            "Bitirme: rolün gerçek bir haftasını M365 ile yeniden tasarla.",
        ]))
    mtext = "\n\n".join(mastery)
    mw = len(mtext.split())
    total_words += mw
    mpath = OUT / "U10-ustalik-mezuniyet.md"
    mpath.write_text(mtext, encoding="utf-8")
    all_for_mega.append(mpath)
    index.append(f"- [Ustalık]({mpath.name}) — ~{mw:,} kelime")

    index += [
        "",
        f"**Toplam kelime (yaklaşık):** {total_words:,}",
        f"**Tahmini sayfa @300 kelime:** {total_words // 300:,}",
        f"**Tahmini sayfa @250 kelime:** {total_words // 250:,}",
        "",
        "Word üretimi: `python3 kitap/_gen_apps/build_apps_docx.py`",
    ]
    (OUT / "README.md").write_text("\n".join(index) + "\n", encoding="utf-8")
    print("TOTAL_WORDS", total_words)
    print("PAGES300", total_words // 300)


if __name__ == "__main__":
    generate()
