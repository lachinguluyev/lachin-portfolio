# -*- coding: utf-8 -*-
"""
SEO build:
  1. injects full meta / OG / Twitter / JSON-LD head block into the main pages
  2. generates one static, pre-rendered HTML page per project (crawler-readable)
  3. writes sitemap.xml, robots.txt, vercel.json
Re-runnable: existing SEO blocks are replaced, not duplicated.
"""
import io, os, re, json, subprocess

ROOT = r"C:\Users\user\Desktop\DESIGN\CODING\PROJECT1"
os.chdir(ROOT)

SITE = "https://lachinguluyev.com"
TODAY = "2026-09-06"

START = "  <!-- SEO:START -->"
END = "  <!-- SEO:END -->"

SOCIAL = [
    "https://www.instagram.com/lachinguluyev",
    "https://www.linkedin.com/in/lachinguluyev/",
    "https://www.behance.net/lachinguluyev",
    "https://www.youtube.com/@lachinguluyev",
]

CAT_LABEL = {
    "interiors":    "Interior Design & Visualization",
    "facade":       "Architectural Visualization",
    "interactive":  "Real-Time Interactive",
    "products":     "Product Visualization",
    "construction": "Design & Construction",
}

# ── read project data out of projects.js via node ──────────────
node_src = (
    'const fs=require("fs");'
    'const projects=new Function(fs.readFileSync("js/projects.js","utf8")+"; return projects;")();'
    'process.stdout.write(JSON.stringify(projects));'
)
PROJECTS = json.loads(subprocess.check_output(["node", "-e", node_src]).decode("utf-8"))
print("projects loaded:", len(PROJECTS))


def esc(s):
    return (s.replace("&", "&amp;").replace('"', "&quot;")
             .replace("<", "&lt;").replace(">", "&gt;"))


def url_enc(path):
    return SITE + "/" + path.replace(" ", "%20")


EMOJI = re.compile(
    u"[\U0001F000-\U0001FAFF\u2600-\u27BF\u2190-\u21FF\uFE0F\u2022\u25AA]+")


def make_desc(text, limit=158):
    t = EMOJI.sub("", text).replace("\n", " ")
    t = re.sub(r"\s+", " ", t).strip()
    t = re.sub(r"^[\-–—•\s]+", "", t)
    if len(t) <= limit:
        return t
    cut = t[:limit]
    if " " in cut:
        cut = cut[:cut.rfind(" ")]
    return cut.rstrip(" ,.;:–—-") + "…"


# ── shared JSON-LD graph (studio + person + website) ───────────
STUDIO_DESC = ("Architectural visualization, interior design and real-time Unreal Engine "
               "applications by Lachin Guluyev and the LACHIN ARCHITECTS team.")

def place(name, street, city, country, code=None):
    addr = {"@type": "PostalAddress", "streetAddress": street,
            "addressLocality": city, "addressCountry": country}
    if code:
        addr["postalCode"] = code
    return {"@type": "Place", "name": name, "address": addr}

STUDIO_LD = {
    "@type": "ProfessionalService",
    "@id": SITE + "/#studio",
    "name": "LACHIN ARCHITECTS",
    "alternateName": "Lachin Guluyev",
    "url": SITE + "/",
    "image": SITE + "/assets/og/default.jpg",
    "logo": SITE + "/favicon-512.png",
    "email": "studio@lachinguluyev.com",
    "telephone": "+994516096023",
    "priceRange": "$$",
    "description": STUDIO_DESC,
    "founder": {"@id": SITE + "/#lachin"},
    "areaServed": ["Azerbaijan", "Germany", "Worldwide"],
    "knowsAbout": ["Architectural visualization", "Interior design", "3D rendering",
                   "Unreal Engine", "Corona Renderer", "3ds Max", "Real-time applications",
                   "360 virtual tours"],
    "sameAs": SOCIAL,
    "address": {"@type": "PostalAddress", "streetAddress": "Khagani Street, Nasimi",
                "addressLocality": "Baku", "addressCountry": "AZ"},
    "location": [
        place("Baku Studio", "Khagani Street, Nasimi", "Baku", "AZ"),
        place("Sumqayit Studio", "Bulvar Street 67A", "Sumqayit", "AZ", "AZ5000"),
        place("Munich Office", "Allach-Untermenzing", u"M\u00fcnchen", "DE", "80999"),
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
}

PERSON_LD = {
    "@type": "Person",
    "@id": SITE + "/#lachin",
    "name": "Lachin Guluyev",
    "jobTitle": "Interior Designer & 3D Visualization Artist",
    "url": SITE + "/about",
    "image": url_enc("assets/images/LACHIN GULUYEV ABOUT.JPG"),
    "sameAs": SOCIAL,
    "worksFor": {"@id": SITE + "/#studio"},
    "knowsLanguage": ["az", "en", "de"],
    "award": [
        "Azerbaijan Design Award 2025 — 1st Place, Visualization",
        "Renderize — Artist of the Month, November 2020",
        "Corona Renderer — Official Feature",
        "Black Mamba Magazine — Published, 2019",
    ],
}

WEBSITE_LD = {
    "@type": "WebSite",
    "@id": SITE + "/#website",
    "url": SITE + "/",
    "name": "Lachin Guluyev — LACHIN ARCHITECTS",
    "publisher": {"@id": SITE + "/#studio"},
    "inLanguage": ["en", "de", "az"],
}


def ld_script(graph):
    payload = {"@context": "https://schema.org", "@graph": graph}
    return ('  <script type="application/ld+json">\n'
            + json.dumps(payload, indent=2, ensure_ascii=False)
            + "\n  </script>\n")


def head_block(title, desc, canonical, og_image, og_alt, og_type="website",
               graph=None, noindex=False):
    robots = ("noindex, follow" if noindex
              else "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")
    b = [START]
    b.append('  <meta name="description" content="%s" />' % esc(desc))
    b.append('  <link rel="canonical" href="%s" />' % canonical)
    b.append('  <meta name="robots" content="%s" />' % robots)
    b.append('  <meta name="author" content="Lachin Guluyev" />')
    b.append('  <meta name="theme-color" content="#0c0c0c" />')
    b.append("")
    b.append('  <meta property="og:type" content="%s" />' % og_type)
    b.append('  <meta property="og:site_name" content="Lachin Guluyev — LACHIN ARCHITECTS" />')
    b.append('  <meta property="og:title" content="%s" />' % esc(title))
    b.append('  <meta property="og:description" content="%s" />' % esc(desc))
    b.append('  <meta property="og:url" content="%s" />' % canonical)
    b.append('  <meta property="og:image" content="%s" />' % og_image)
    b.append('  <meta property="og:image:secure_url" content="%s" />' % og_image)
    b.append('  <meta property="og:image:type" content="image/jpeg" />')
    b.append('  <meta property="og:image:width" content="1200" />')
    b.append('  <meta property="og:image:height" content="630" />')
    b.append('  <meta property="og:image:alt" content="%s" />' % esc(og_alt))
    b.append('  <meta property="og:locale" content="en_US" />')
    b.append('  <meta property="og:locale:alternate" content="de_DE" />')
    b.append('  <meta property="og:locale:alternate" content="az_AZ" />')
    b.append("")
    b.append('  <meta name="twitter:card" content="summary_large_image" />')
    b.append('  <meta name="twitter:title" content="%s" />' % esc(title))
    b.append('  <meta name="twitter:description" content="%s" />' % esc(desc))
    b.append('  <meta name="twitter:image" content="%s" />' % og_image)
    b.append('  <meta name="twitter:image:alt" content="%s" />' % esc(og_alt))
    b.append("")
    # Google wants a square favicon whose size is a multiple of 48px
    b.append('  <link rel="icon" href="/favicon.ico" sizes="48x48" />')
    b.append('  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />')
    b.append('  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />')
    b.append('  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />')
    b.append('  <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />')
    b.append('  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />')
    b.append('  <link rel="manifest" href="/site.webmanifest" />')
    out = "\n".join(b) + "\n"
    if graph:
        out += ld_script(graph)
    out += END + "\n"
    return out


# ── page configs ───────────────────────────────────────────────
DEFAULT_OG = SITE + "/assets/og/default.jpg"
DEFAULT_OG_ALT = "Interior visualization by Lachin Guluyev — White City Apartment, Baku"

PAGES = {
"index.html": dict(
    title="Lachin Guluyev — Architectural Visualization & Interior Design | Baku",
    desc="Photorealistic architectural visualization, interior design and real-time Unreal Engine experiences by Lachin Guluyev — LACHIN ARCHITECTS, Baku.",
    canonical=SITE + "/",
    graph=[STUDIO_LD, PERSON_LD, WEBSITE_LD]),

"about.html": dict(
    title="About — Lachin Guluyev | 3D Artist & Interior Designer",
    desc="3D artist and interior designer working since 2016. Award-winning visualization with 3ds Max, Corona Renderer and Unreal Engine — 200+ projects delivered.",
    canonical=SITE + "/about",
    og_image=url_enc("assets/images/LACHIN GULUYEV ABOUT.JPG"),
    og_alt="Lachin Guluyev — interior designer and 3D visualization artist",
    og_type="profile",
    graph=[PERSON_LD, STUDIO_LD]),

"services.html": dict(
    title="Services — Architectural & Interior Visualization | Lachin Guluyev",
    desc="Architectural visualization, interior design, real-time Unreal Engine applications and product CGI for architects, developers and brands.",
    canonical=SITE + "/services",
    graph=[STUDIO_LD]),

"contact.html": dict(
    title="Contact — Lachin Guluyev | Baku · Sumqayit · Munich",
    desc="Start an architectural visualization or interior design project. Studios in Baku and Sumqayit, Azerbaijan, and Munich, Germany. Remote, hybrid or on-site.",
    canonical=SITE + "/contact",
    graph=[STUDIO_LD]),

"real-time-app.html": dict(
    title="Real-Time Interactive — Unreal Engine Architectural Applications | Lachin Guluyev",
    desc="Interactive architectural applications built in Unreal Engine — walkthroughs, drone views, 360° virtual tours and animation for real estate presentations.",
    canonical=SITE + "/real-time-app",
    og_image=SITE + "/assets/og/interactive-application.jpg",
    og_alt="Real-time interactive architectural application in Unreal Engine",
    graph=[STUDIO_LD]),

"course.html": dict(
    title="Course — Lachin Guluyev",
    desc="Courses by Lachin Guluyev — architectural visualization and interior design training.",
    canonical=SITE + "/course",
    noindex=True),
}


def inject_head(path, cfg):
    s = io.open(path, encoding="utf-8").read()

    block = head_block(
        cfg["title"], cfg["desc"], cfg["canonical"],
        cfg.get("og_image", DEFAULT_OG),
        cfg.get("og_alt", DEFAULT_OG_ALT),
        cfg.get("og_type", "website"),
        cfg.get("graph"),
        cfg.get("noindex", False))

    # title
    s = re.sub(r"<title>.*?</title>", "<title>%s</title>" % esc(cfg["title"]), s, count=1, flags=re.S)

    # replace previous block if present, else insert before </head>
    if START in s:
        s = re.sub(re.escape(START) + r".*?" + re.escape(END) + r"\n", block, s, count=1, flags=re.S)
    else:
        s = s.replace("</head>", block + "</head>", 1)

    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("head -> " + path)


for page, cfg in PAGES.items():
    inject_head(page, cfg)


# ── static project pages ───────────────────────────────────────
TPL = io.open("project.html", encoding="utf-8").read()

NAV_START = TPL.index("  <header")
NAV_END = TPL.index("  </header>") + len("  </header>\n")
HEADER = TPL[NAV_START:NAV_END]

FOOT_START = TPL.index("  <footer")
FOOT_END = TPL.index("  </footer>") + len("  </footer>\n")
FOOTER = TPL[FOOT_START:FOOT_END]

LB_START = TPL.index("  <!-- Lightbox -->")
LB_END = TPL.index("</div>", TPL.index('id="projectLbClose"')) + len("</div>\n")
LIGHTBOX = TPL[LB_START:LB_END]

THEME_SCRIPT = """  <script>
    /* set theme before first paint — dark is the default for new visitors */
    (function () {
      var t = "dark";
      try { t = localStorage.getItem("theme") || "dark"; } catch (e) {}
      document.documentElement.setAttribute("data-theme", t);
    })();
  </script>
"""

PAGE_TPL = u"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
{theme}{seo}</head>
<body data-project="{pid}">

{header}
  <main class="main">
    <div class="project-wrap">

      <a href="index.html" class="project-back" data-i18n="project.back">&#8592; Works</a>

      <h1 class="project-title">{h1}</h1>

{hero}
      <div class="project-body">
        <div class="project-meta">{meta}</div>
        <div class="project-desc">{desc}</div>
      </div>

      <div class="project-youtube"></div>

      <div class="project-photos">{photos}</div>

    </div>
  </main>

{footer}
{lightbox}
  <script src="js/projects.js"></script>
  <script src="js/i18n.js"></script>
  <script src="js/main.js"></script>
  <script src="js/project.js"></script>
</body>
</html>
"""

sitemap_urls = [
    (SITE + "/", "1.0"),
    (SITE + "/services", "0.8"),
    (SITE + "/real-time-app", "0.8"),
    (SITE + "/about", "0.7"),
    (SITE + "/contact", "0.7"),
]

for p in PROJECTS:
    pid = p["id"]
    cat = CAT_LABEL.get(p.get("category", ""), "Architectural Visualization")
    title = "%s — %s | Lachin Guluyev" % (p["title"], cat)
    desc = make_desc(p["description"])
    canonical = "%s/%s" % (SITE, pid)
    og_image = "%s/assets/og/%s.jpg" % (SITE, pid)
    og_alt = "%s — %s by Lachin Guluyev" % (p["title"], cat.lower())

    year = ""
    for m in p.get("meta", []):
        if m["label"].lower().startswith("year"):
            year = m["value"]
    work_ld = {
        "@type": "CreativeWork",
        "@id": canonical + "#work",
        "name": p["title"],
        "headline": p["title"],
        "description": make_desc(p["description"], 300),
        "url": canonical,
        "image": [url_enc(src) for src in p["images"]],
        "thumbnailUrl": og_image,
        "genre": cat,
        "inLanguage": "en",
        "creator": {"@id": SITE + "/#lachin"},
        "publisher": {"@id": SITE + "/#studio"},
        "isPartOf": {"@id": SITE + "/#website"},
    }
    if year:
        work_ld["dateCreated"] = year.split(u"\u2013")[0].strip()
    crumbs = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Works", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": p["title"], "item": canonical},
        ],
    }

    seo = head_block(title, desc, canonical, og_image, og_alt, "article",
                     [work_ld, crumbs, PERSON_LD, STUDIO_LD])

    # hero
    if p.get("noHero"):
        hero = ""
    else:
        hsrc = p.get("hero") or p["cover"]
        hero = ('      <div class="project-hero">\n'
                '        <img src="%s" alt="%s — %s" fetchpriority="high" />\n'
                '      </div>\n\n' % (esc(hsrc), esc(p["title"]), esc(cat.lower())))

    meta_html = "".join(
        '\n          <div class="project-meta-item">'
        '\n            <span class="project-meta-label">%s</span>'
        '\n            <span class="project-meta-value">%s</span>'
        '\n          </div>' % (esc(m["label"]), esc(m["value"]))
        for m in p.get("meta", []))
    if meta_html:
        meta_html += "\n        "

    desc_html = "".join(
        "\n          <p>%s</p>" % esc(par).replace("\n", "<br>")
        for par in p["description"].split("\n\n"))
    if desc_html:
        desc_html += "\n        "

    photo_html = ""
    for i, src in enumerate(p["images"]):
        lazy = "" if i == 0 else ' loading="lazy"'
        photo_html += ('\n        <div class="project-photo">'
                       '<img src="%s" alt="%s — %s, image %d"%s></div>'
                       % (esc(src), esc(p["title"]), esc(cat.lower()), i + 1, lazy))
    photo_html += "\n      "

    html = PAGE_TPL.format(
        title=esc(title), theme=THEME_SCRIPT, seo=seo, pid=pid,
        header=HEADER, footer=FOOTER, lightbox=LIGHTBOX,
        h1=esc(p["title"]), hero=hero, meta=meta_html,
        desc=desc_html, photos=photo_html)

    io.open(pid + ".html", "w", encoding="utf-8", newline="\n").write(html)
    print("page -> %s.html" % pid)
    sitemap_urls.append((canonical, "0.9"))


# ── sitemap.xml ────────────────────────────────────────────────
sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">'.replace("sitemap.org", "sitemaps.org")]
for loc, prio in sitemap_urls:
    sm.append("  <url>")
    sm.append("    <loc>%s</loc>" % loc)
    sm.append("    <lastmod>%s</lastmod>" % TODAY)
    sm.append("    <changefreq>monthly</changefreq>")
    sm.append("    <priority>%s</priority>" % prio)
    sm.append("  </url>")
sm.append("</urlset>")
io.open("sitemap.xml", "w", encoding="utf-8", newline="\n").write("\n".join(sm) + "\n")
print("sitemap.xml — %d urls" % len(sitemap_urls))

# ── robots.txt ─────────────────────────────────────────────────
robots = """User-agent: *
Allow: /

# project.html and course.html carry a noindex tag — they stay crawlable
# on purpose so search engines can read that tag and drop them.

Sitemap: %s/sitemap.xml
""" % SITE
io.open("robots.txt", "w", encoding="utf-8", newline="\n").write(robots)
print("robots.txt")

# ── vercel.json ────────────────────────────────────────────────
vercel = {
    "cleanUrls": True,
    "trailingSlash": False,
    "headers": [
        {"source": "/assets/(.*)",
         "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]},
        {"source": "/(css|js)/(.*)",
         "headers": [{"key": "Cache-Control", "value": "public, max-age=3600, must-revalidate"}]},
    ],
}
io.open("vercel.json", "w", encoding="utf-8", newline="\n").write(
    json.dumps(vercel, indent=2) + "\n")
print("vercel.json")
print("done")
