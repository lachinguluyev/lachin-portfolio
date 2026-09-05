# -*- coding: utf-8 -*-
"""Generate OG share images (1200x630) + favicon set."""
import io, os, re, json
from PIL import Image, ImageDraw, ImageFont

ROOT = r"C:\Users\user\Desktop\DESIGN\CODING\PROJECT1"
os.chdir(ROOT)

OG_DIR = os.path.join("assets", "og")
if not os.path.isdir(OG_DIR):
    os.makedirs(OG_DIR)

# ── read covers straight out of projects.js ───────────────────
src = io.open("js/projects.js", encoding="utf-8").read()
ids = re.findall(r"id:\s*'([^']+)'", src)
covers = re.findall(r"cover:\s*'([^']+)'", src)
pairs = list(zip(ids, covers))
print("projects found:", len(pairs))

OG_W, OG_H = 1200, 630

def make_og(src_path, out_path):
    im = Image.open(src_path).convert("RGB")
    w, h = im.size
    target = OG_W / float(OG_H)
    cur = w / float(h)
    if cur > target:                      # too wide -> crop sides
        new_w = int(h * target)
        left = (w - new_w) // 2
        im = im.crop((left, 0, left + new_w, h))
    else:                                 # too tall -> crop top/bottom (bias slightly up)
        new_h = int(w / target)
        top = int((h - new_h) * 0.42)
        im = im.crop((0, top, w, top + new_h))
    im = im.resize((OG_W, OG_H), Image.LANCZOS)
    im.save(out_path, "JPEG", quality=86, optimize=True, progressive=True)
    return os.path.getsize(out_path)

total = 0
for pid, cover in pairs:
    out = os.path.join(OG_DIR, pid + ".jpg")
    size = make_og(cover, out)
    total += size
    print("  %-26s %5.0f KB" % (pid, size / 1024.0))

# default share image for the non-project pages
DEFAULT_SRC = "assets/images/White City Apartment Baku/POST 1A.jpg"
size = make_og(DEFAULT_SRC, os.path.join(OG_DIR, "default.jpg"))
print("  %-26s %5.0f KB" % ("default", size / 1024.0))
print("OG total: %.1f MB" % ((total + size) / 1048576.0))

print("OG images done  (favicons: python tools/build-favicons.py)")
