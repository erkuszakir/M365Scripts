#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build Word book for M365 Online Apps training curriculum."""
from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    from docx import Document
    from docx.shared import Pt, Inches
    from docx.enum.text import WD_ALIGN_PARAGRAPH
    from docx.oxml.ns import qn
except ImportError:
    print("pip install python-docx", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "uygulamalar"
OUT = ROOT / "Microsoft365_Online_Uygulamalar_Egitim_Kitabi_v3.docx"
ARTIFACT = Path("/opt/cursor/artifacts") / OUT.name


def set_font(run, size=10, bold=False, name="Calibri"):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold


def add_file(doc: Document, path: Path) -> None:
    doc.add_page_break()
    lines = path.read_text(encoding="utf-8").splitlines()
    i, in_code, buf = 0, False, []
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            if in_code:
                p = doc.add_paragraph()
                r = p.add_run("\n".join(buf[:200]))
                set_font(r, size=8, name="Consolas")
                buf = []
            in_code = not in_code
            i += 1
            continue
        if in_code:
            buf.append(line)
            i += 1
            continue
        if not line.strip() or line.strip() == "---":
            i += 1
            continue
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            doc.add_heading(m.group(2).strip()[:240], level=min(len(m.group(1)), 3))
            i += 1
            continue
        if line.strip().startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.match(r"^:?-+:?$", c.replace(" ", "")) for c in cells):
                    rows.append(cells)
                i += 1
            rows = rows[:30]
            if rows:
                cols = max(len(r) for r in rows)
                t = doc.add_table(rows=len(rows), cols=cols)
                t.style = "Table Grid"
                for ri, row in enumerate(rows):
                    for ci in range(cols):
                        t.rows[ri].cells[ci].text = (row[ci] if ci < len(row) else "")[:400]
                doc.add_paragraph()
            continue
        text = line.strip()
        if text.startswith("> "):
            text = text[2:]
        text = re.sub(r"^(\d+)\.\s+", "", text)
        text = re.sub(r"^-\s+", "• ", text).replace("**", "").replace("`", "")
        p = doc.add_paragraph(text[:3500])
        for r in p.runs:
            set_font(r)
        i += 1


def main() -> None:
    files = sorted(SRC.glob("U*.md"))
    if not files:
        print("No app volumes", file=sys.stderr)
        sys.exit(1)
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.7)
        s.bottom_margin = Inches(0.7)
        s.left_margin = Inches(0.85)
        s.right_margin = Inches(0.85)
    for _ in range(2):
        doc.add_paragraph()
    t = doc.add_paragraph()
    t.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = t.add_run("MICROSOFT 365 ONLINE UYGULAMALARI")
    set_font(r, size=20, bold=True)
    s = doc.add_paragraph()
    s.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = s.add_run("Sıfırdan Uzmanlığa — Uygulama Eğitim Kitabı")
    set_font(r, size=14, bold=True)
    n = doc.add_paragraph()
    n.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = n.add_run(
        "v3.0 · Üniversite seviyesi\n"
        "Outlook · Teams · Word · Excel · PowerPoint · OneDrive · SharePoint\n"
        "OneNote · Loop · Forms · Planner · To Do · Lists · Whiteboard\n"
        "Stream · Clipchamp · Bookings · Viva · Copilot · Power Platform\n"
        "Acemi → Orta → Uzman lab’ları · rol akademileri · bitirme stüdyoları"
    )
    set_font(r, size=11)
    for f in files:
        print("+", f.name, flush=True)
        add_file(doc, f)
    doc.save(OUT)
    ARTIFACT.parent.mkdir(parents=True, exist_ok=True)
    ARTIFACT.write_bytes(OUT.read_bytes())
    print("WROTE", OUT, OUT.stat().st_size)


if __name__ == "__main__":
    main()
