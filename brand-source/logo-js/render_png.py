#!/usr/bin/env python3
"""Rasterizace SVG do PNG přes headless Chrome. SVG se vkládá do HTML wrapperu,
jinak Chrome renderuje SVG v jeho vlastní velikosti a zbytek plátna nechá prázdný."""

import base64, os, subprocess, sys, glob

HERE = os.path.dirname(os.path.abspath(__file__))
SVG_DIR = os.path.join(HERE, "svg")
PNG_DIR = os.path.join(HERE, "png")
TMP = os.path.join(HERE, ".render")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

os.makedirs(PNG_DIR, exist_ok=True)
os.makedirs(TMP, exist_ok=True)

# (soubor bez přípony, seznam velikostí)
JOBS = [(os.path.basename(p)[:-4], [1024]) for p in sorted(glob.glob(f"{SVG_DIR}/*.svg"))]
JOBS = [(n, [1024, 400] if n == "js-linkedin" else s) for n, s in JOBS]

for name, sizes in JOBS:
    b64 = base64.b64encode(open(f"{SVG_DIR}/{name}.svg", "rb").read()).decode()
    html = (
        '<!doctype html><meta charset="utf-8">'
        "<style>html,body{margin:0;padding:0;background:transparent}"
        "img{display:block;width:100vw;height:100vh}</style>"
        f'<img src="data:image/svg+xml;base64,{b64}">'
    )
    wrapper = f"{TMP}/{name}.html"
    open(wrapper, "w").write(html)
    for size in sizes:
        out = f"{PNG_DIR}/{name}.png" if len(sizes) == 1 else f"{PNG_DIR}/{name}-{size}.png"
        subprocess.run(
            [CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
             "--default-background-color=00000000",
             f"--screenshot={out}", f"--window-size={size},{size}",
             f"file://{wrapper}"],
            capture_output=True,
        )
        print(os.path.basename(out), f"{size}x{size}")
