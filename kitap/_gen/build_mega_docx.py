#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build Word documents from generated ciltler/*.md (fast path)."""
from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    from docx import Document
    from docx.shared import Pt, Inches, RGBColor
    from docx.enum.text import WD_ALIGN_PARAGRAPH
    from docx.oxml.ns import qn
except ImportError:
    print("pip install python-docx", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
CILT = ROOT / "ciltler"
OUT_DIR = ROOT
ARTIFACT = Path("/opt/cursor/artifacts")


def set_font(run, *, size=11, bold=False, italic=False, name="Calibri"):
    run.font.name = name
    run._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic


def add_md_file(doc: Document, path: Path, page_break: bool = True) -> None:
    if page_break and doc.paragraphs:
        doc.add_page_break()
    lines = path.read_text(encoding="utf-8").splitlines()
    i = 0
    in_code = False
    buf: list[str] = []
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            if in_code:
                p = doc.add_paragraph()
                r = p.add_run("\n".join(buf))
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
            level = min(len(m.group(1)), 3)
            doc.add_heading(m.group(2).strip()[:200], level=level)
            i += 1
            continue
        if line.strip().startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.match(r"^:?-+:?$", c.replace(" ", "")) for c in cells):
                    rows.append(cells)
                i += 1
            if rows:
                cols = max(len(r) for r in rows)
                # cap huge tables
                rows = rows[:40]
                table = doc.add_table(rows=len(rows), cols=cols)
                table.style = "Table Grid"
                for ri, row in enumerate(rows):
                    for ci in range(cols):
                        table.rows[ri].cells[ci].text = (row[ci] if ci < len(row) else "")[:500]
                doc.add_paragraph()
            continue
        # strip excessive length paragraphs slightly for Word stability
        text = line.strip()
        if text.startswith("> "):
            text = text[2:]
        text = re.sub(r"^(\d+)\.\s+", "", text)
        text = re.sub(r"^-\s+", "• ", text)
        text = text.replace("**", "").replace("`", "")
        p = doc.add_paragraph(text[:4000])
        for r in p.runs:
            set_font(r, size=10)
        i += 1


def cover(doc: Document, title: str, subtitle: str) -> None:
    for _ in range(2):
        doc.add_paragraph()
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(title)
    set_font(r, size=20, bold=True)
    p2 = doc.add_paragraph()
    p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r2 = p2.add_run(subtitle)
    set_font(r2, size=14, italic=True)
    p3 = doc.add_paragraph()
    p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r3 = p3.add_run(
        "Üniversite seviyesi · Sıfırdan uzmanlığa · v2.0\n"
        "KuzeyLojistik senaryosu · Lab · Case · ADR · IR\n"
        "Bu cilt özet değil; ders + uygulama ana metnidir."
    )
    set_font(r3, size=11)


def build_one(md_files: list[Path], out: Path, title: str) -> None:
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(0.7)
        s.bottom_margin = Inches(0.7)
        s.left_margin = Inches(0.85)
        s.right_margin = Inches(0.85)
    cover(doc, "Microsoft 365 Cloud Sistemleri", title)
    for f in md_files:
        print("  +", f.name, flush=True)
        add_md_file(doc, f, page_break=True)
    out.parent.mkdir(parents=True, exist_ok=True)
    doc.save(out)
    print("WROTE", out, out.stat().st_size, flush=True)


def main() -> None:
    ARTIFACT.mkdir(parents=True, exist_ok=True)
    files = sorted(CILT.glob("0*.md"))
    files = [f for f in files if f.name != "README.md"]
    if not files:
        print("No cilt files", file=sys.stderr)
        sys.exit(1)

    # Per-volume docx
    for f in files:
        out = OUT_DIR / f"Microsoft365_v2_{f.stem}.docx"
        build_one([f], out, f.stem)
        (ARTIFACT / out.name).write_bytes(out.read_bytes())

    # Combined mega book
    mega = OUT_DIR / "Microsoft365_Sifirdan_Uzmanliga_v2_TAM.docx"
    build_one(files, mega, "Sıfırdan Uzmanlığa — TAM METİN (v2)")
    (ARTIFACT / mega.name).write_bytes(mega.read_bytes())
    print("DONE mega", mega.stat().st_size)


if __name__ == "__main__":
    main()
