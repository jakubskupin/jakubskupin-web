#!/usr/bin/env python3
"""Vygeneruje čtvercovou značku JS z fontu Syne 700 (font z jakubskupin.cz).
Písmena jsou převedená na křivky, výsledná SVG nepotřebují font."""

import os
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.misc.transform import Transform

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "svg")
os.makedirs(OUT, exist_ok=True)

SIZE = 512                 # canvas
RADIUS_RATIO = 0.22        # zaoblení čtverce (favicon webu: 14/64)
TRACKING = -0.04           # letter-spacing z webu (-0.04em)
TARGET_WIDTH_RATIO = 0.60  # šířka lockupu JS vůči hraně čtverce

BLACK = "#1A1A18"          # --text z webu
CREAM = "#FAFAF8"          # --bg z webu

font = TTFont(os.path.join(HERE, "fonts", "Syne-var.ttf"))
font = instantiateVariableFont(font, {"wght": 700})
upem = font["head"].unitsPerEm
glyphset = font.getGlyphSet()
cmap = font.getBestCmap()

# --- poskládat "JS" do jedné cesty v souřadnicích fontu ---
combined = RecordingPen()
x = 0
for ch in "JS":
    gname = cmap[ord(ch)]
    glyph = glyphset[gname]
    tp = TransformPen(combined, Transform(1, 0, 0, 1, x, 0))
    glyph.draw(tp)
    x += glyph.width + TRACKING * upem

bp = BoundsPen(glyphset)
combined.replay(bp)
xmin, ymin, xmax, ymax = bp.bounds
w, h = xmax - xmin, ymax - ymin

# --- škála a centrování v canvasu (opticky, podle skutečného bboxu) ---
scale = (SIZE * TARGET_WIDTH_RATIO) / w
tx = (SIZE - w * scale) / 2 - xmin * scale
ty = (SIZE + h * scale) / 2 + ymin * scale  # SVG y roste dolů

pen = SVGPathPen(glyphset, ntos=lambda v: f"{v:.1f}".rstrip("0").rstrip("."))
combined.replay(TransformPen(pen, Transform(scale, 0, 0, -scale, tx, ty)))
letters_path = pen.getCommands()

R = SIZE * RADIUS_RATIO
HEAD = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}" width="{SIZE}" height="{SIZE}">'


def write(name, body, title):
    svg = f"{HEAD}\n  <title>{title}</title>\n{body}\n</svg>\n"
    with open(os.path.join(OUT, name), "w") as f:
        f.write(svg)
    print(name)


def knockout(color):
    """Plný čtverec, písmena vyříznutá (průhledná) přes fill-rule evenodd."""
    square = f"M0 {R}A{R} {R} 0 0 1 {R} 0H{SIZE-R}A{R} {R} 0 0 1 {SIZE} {R}V{SIZE-R}A{R} {R} 0 0 1 {SIZE-R} {SIZE}H{R}A{R} {R} 0 0 1 0 {SIZE-R}Z"
    return f'  <path fill="{color}" fill-rule="evenodd" d="{square}{letters_path}"/>'


def filled(bg, fg):
    return (
        f'  <rect width="{SIZE}" height="{SIZE}" rx="{R:g}" ry="{R:g}" fill="{bg}"/>\n'
        f'  <path fill="{fg}" d="{letters_path}"/>'
    )


write("js-square-black.svg", knockout(BLACK), "Jakub Skupin — JS mark, black")
write("js-square-white.svg", knockout("#FFFFFF"), "Jakub Skupin — JS mark, white")
write("js-square-black-filled.svg", filled(BLACK, CREAM), "Jakub Skupin — JS mark, black filled")
write("js-square-white-filled.svg", filled("#FFFFFF", BLACK), "Jakub Skupin — JS mark, white filled")
write("js-linkedin.svg", filled(BLACK, "#FFFFFF"), "Jakub Skupin — JS mark, black square / white letters")
write("js-letters-black.svg", f'  <path fill="{BLACK}" d="{letters_path}"/>', "Jakub Skupin — JS letters, black")
write("js-letters-white.svg", f'  <path fill="#FFFFFF" d="{letters_path}"/>', "Jakub Skupin — JS letters, white")

print(f"\nbbox JS: {w:.0f}x{h:.0f} units, scale {scale:.4f}, path {len(letters_path)} znaků")
