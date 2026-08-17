#!/usr/bin/env python3
"""Vloží vygenerovaná SVG přímo do preview.html (data URI), aby náhled fungoval i z file://."""
import base64, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, "preview.html")).read()


def to_data_uri(m):
    name = m.group(1)
    path = os.path.join(HERE, name)
    if not os.path.exists(path):
        return m.group(0)
    b64 = base64.b64encode(open(path, "rb").read()).decode()
    return f'src="data:image/svg+xml;base64,{b64}"'


out = re.sub(r'src="(svg/[^"]+)"', to_data_uri, src)
dest = os.path.join(HERE, "preview-inline.html")
open(dest, "w").write(out)
print(dest)
