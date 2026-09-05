# -*- coding: utf-8 -*-
"""
Favicon set, built from the real brand logo.

The "LA" glyphs are cut straight out of assets/brand/logo-black.png (the
LACHIN ARCHITECTS mark) so the icon uses the brand typeface, not a lookalike.
A full wordmark is unreadable at 16px, which is the size Google and the browser
tab actually show — hence the monogram.

Run from the project root:  python tools/build-favicons.py
"""
import io, json, os
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

SRC = os.path.join("assets", "brand", "logo-black.png")

# ── isolate the LACHIN wordmark and cut out the L and A ────────
im = Image.open(SRC).convert("L")
mask = np.array(im) > 140

bands, start = [], None
for y in range(mask.shape[0]):
    has = mask[y].any()
    if has and start is None:
        start = y
    elif not has and start is not None:
        bands.append((start, y - 1))
        start = None
if start is not None:
    bands.append((start, mask.shape[0] - 1))
bands = [b for b in bands if b[1] - b[0] > 20]

y0, y1 = bands[0]                      # "LACHIN"
line = mask[y0:y1 + 1]
cols = np.where(line.any(axis=0))[0]

glyphs, start, gap = [], None, 0
for x in range(cols.min(), cols.max() + 2):
    has = line[:, x].any() if x < line.shape[1] else False
    if has:
        if start is None:
            start = x
        gap = 0
    else:
        if start is not None:
            gap += 1
            if gap > 8:
                glyphs.append((start, x - gap))
                start = None
if start is not None:
    glyphs.append((start, cols.max()))


def cut(gx0, gx1):
    sub = mask[y0:y1 + 1, gx0:gx1 + 1]
    ys = np.where(sub.any(axis=1))[0]
    return Image.fromarray((sub[ys.min():ys.max() + 1] * 255).astype("uint8"))


LETTERS = [cut(*glyphs[0]), cut(*glyphs[1])]   # L, A

BG = (10, 10, 10)
FG = (255, 255, 255)


def monogram(canvas=1024, height_ratio=0.48, gap_ratio=0.10):
    img = Image.new("RGB", (canvas, canvas), BG)
    th = int(canvas * height_ratio)
    scaled = [g.resize((int(g.width * th / float(g.height)), th), Image.LANCZOS)
              for g in LETTERS]
    gap = int(th * gap_ratio)
    total = sum(s.width for s in scaled) + gap * (len(scaled) - 1)
    x, y = (canvas - total) // 2, (canvas - th) // 2
    for s in scaled:
        img.paste(Image.new("RGB", s.size, FG), (x, y), s)
        x += s.width + gap
    return img


MASTER = monogram(1024)
MASTER.save(os.path.join("assets", "brand", "monogram-1024.png"))

# Google requires the favicon to be square and a multiple of 48px.
for size in (48, 96, 144, 192, 512):
    MASTER.resize((size, size), Image.LANCZOS).save("favicon-%d.png" % size)
MASTER.resize((32, 32), Image.LANCZOS).save("favicon-32.png")
MASTER.resize((180, 180), Image.LANCZOS).save("apple-touch-icon.png")
MASTER.resize((64, 64), Image.LANCZOS).save(
    "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("favicons written: ico, 32, 48, 96, 144, 192, 512, apple-touch-icon")

manifest = {
    "name": "Lachin Guluyev — LACHIN ARCHITECTS",
    "short_name": "LACHIN",
    "icons": [
        {"src": "/favicon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "/favicon-512.png", "sizes": "512x512", "type": "image/png"},
    ],
    "theme_color": "#0c0c0c",
    "background_color": "#0c0c0c",
    "display": "standalone",
    "start_url": "/",
}
io.open("site.webmanifest", "w", encoding="utf-8", newline="\n").write(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
print("site.webmanifest written")
