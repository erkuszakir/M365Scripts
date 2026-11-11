#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rebuild the single-file Word book from markdown chapters."""
from pathlib import Path
import re
import sys

try:
    from docx import Document
    from docx.shared import Pt, Inches
    from docx.enum.text import WD_ALIGN_PARAGRAPH
    from docx.oxml.ns import qn
except ImportError:
    print("pip install python-docx", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "Microsoft365_Sifirdan_Uzmanliga.docx"

ORDER = [
    "00-onsoz-ve-yol-haritasi.md", "01-bulut-ve-dijital-isyerleri.md",
    "02-m365-ekosistemi-tenant-lisans.md", "03-entra-id-kimlik-temelleri.md",
    "04-exchange-online.md", "05-sharepoint-onedrive.md", "06-microsoft-teams.md",
    "07-guvenlik-uyumluluk-zero-trust.md", "08-yonetim-powershell-graph.md",
    "09-mimari-hibrit-migrasyon-uzmanlik.md", "12-intune-endpoint.md",
    "13-power-platform-copilot.md", "14-kvkk-gdpr-uyumluluk.md", "15-izleme-raporlama.md",
    "17-ag-baglantilari-teams-exo.md", "18-hibrit-kimlik-entra-connect.md",
    "19-yedekleme-dr-fidye.md", "20-olay-mudahale-runbook.md", "21-viva-benimseme-degisim.md",
    "16-mulakat-savunma.md", "10-case-studies.md", "11-capstone-proje.md",
    "EK-A-sozluk.md", "EK-B-sertifika-kariyer.md", "EK-C-hizli-referans.md",
    "EK-D-tarif-defteri.md", "EK-E-operasyon-el-kitabi.md",
]

def set_run_font(run, size=None, bold=None, italic=None, code=False):
    run.font.name = "Consolas" if code else "Calibri"
    run._element.rPr.rFonts.set(qn("w:eastAsia"), "Consolas" if code else "Calibri")
    if size: run.font.size = Pt(size)
    if bold is not None: run.bold = bold
    if italic is not None: run.italic = italic
    if code: run.font.size = Pt(9)

def add_inline(doc, text, style=None):
    p = doc.add_paragraph(style=style)
    pattern = re.compile(r"(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*|\[[^\]]+\]\([^)]+\))")
    for part in pattern.split(text):
        if not part: continue
        if part.startswith("**") and part.endswith("**"):
            r = p.add_run(part[2:-2]); set_run_font(r, bold=True)
        elif part.startswith("`") and part.endswith("`"):
            r = p.add_run(part[1:-1]); set_run_font(r, code=True)
        elif part.startswith("*") and part.endswith("*"):
            r = p.add_run(part[1:-1]); set_run_font(r, italic=True)
        elif part.startswith("[") and "](" in part:
            m = re.match(r"\[([^\]]+)\]\(([^)]+)\)", part)
            r = p.add_run(f"{m.group(1)} ({m.group(2)})" if m else part); set_run_font(r)
        else:
            r = p.add_run(part); set_run_font(r)
    return p

def add_table(doc, rows):
    if not rows: return
    cols = max(len(r) for r in rows)
    table = doc.add_table(rows=len(rows), cols=cols)
    table.style = "Table Grid"
    for i, row in enumerate(rows):
        for j in range(cols):
            cell = table.rows[i].cells[j]
            cell.text = row[j] if j < len(row) else ""
            for paragraph in cell.paragraphs:
                for run in paragraph.runs:
                    set_run_font(run, size=9, bold=(i == 0))
    doc.add_paragraph()

def parse_table(lines, start):
    rows, i = [], start
    while i < len(lines) and lines[i].strip().startswith("|"):
        cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
        if not all(re.match(r"^:?-+:?$", c.replace(" ", "")) for c in cells):
            rows.append(cells)
        i += 1
    return rows, i

def process(doc, md_text):
    doc.add_page_break()
    lines = md_text.splitlines()
    i, in_code, buf = 0, False, []
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            if in_code:
                p = doc.add_paragraph(); r = p.add_run("\n".join(buf)); set_run_font(r, code=True); buf = []
            in_code = not in_code; i += 1; continue
        if in_code: buf.append(line); i += 1; continue
        if not line.strip() or line.strip() == "---": i += 1; continue
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            doc.add_heading(m.group(2).strip(), level=min(len(m.group(1)), 3)); i += 1; continue
        if line.strip().startswith("|"):
            rows, i = parse_table(lines, i); add_table(doc, rows); continue
        if line.strip().startswith("> "):
            p = add_inline(doc, line.strip()[2:]); p.paragraph_format.left_indent = Inches(0.25)
            for run in p.runs: run.italic = True; i += 1; continue
        if re.match(r"^(\d+)\.\s+", line.strip()) or line.strip().startswith("- "):
            text = re.sub(r"^(\d+)\.\s+|^-\s+", "", line.strip()).replace("[ ]", "☐").replace("[x]", "☑")
            style = "List Number" if re.match(r"^\d+\.\s+", line.strip()) else "List Bullet"
            try: add_inline(doc, text, style=style)
            except KeyError: add_inline(doc, text)
            i += 1; continue
        add_inline(doc, line.strip()); i += 1

def main():
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.9); s.bottom_margin = Inches(0.9)
        s.left_margin = Inches(1.0); s.right_margin = Inches(1.0)
    style = doc.styles["Normal"]; style.font.name = "Calibri"; style.font.size = Pt(11)
    for _ in range(2): doc.add_paragraph()
    t = doc.add_paragraph(); t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("MICROSOFT 365 CLOUD SİSTEMLERİ"); set_run_font(r, size=22, bold=True)
    st = doc.add_paragraph(); st.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = st.add_run("Sıfırdan Uzmanlığa"); set_run_font(r, size=18, bold=True)
    sub = doc.add_paragraph(); sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = sub.add_run("Üniversite Başucu Kitabı · Geniş Kapsamlı · v1.2"); set_run_font(r, size=12, italic=True)
    doc.add_page_break(); doc.add_heading("İçindekiler", 1)
    for name in ORDER:
        p = ROOT / name
        if p.exists():
            doc.add_paragraph(p.read_text(encoding="utf-8").splitlines()[0].lstrip("# ").strip(), style="List Number")
    for name in ORDER:
        p = ROOT / name
        if p.exists():
            process(doc, p.read_text(encoding="utf-8"))
    cases = sorted((ROOT / "case-studies").glob("CS-*.md"))
    if cases:
        doc.add_page_break(); doc.add_heading("Ek — Detaylı Case Study Paketleri", 1)
        for cf in cases:
            process(doc, cf.read_text(encoding="utf-8"))
    doc.save(OUT)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")

if __name__ == "__main__":
    main()
