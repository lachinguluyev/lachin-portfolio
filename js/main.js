/* ─────────────────────────────────────────────────────────
   GALLERY DATA
   Add your files to assets/images/ and assets/videos/
   then list them here.

   type    : 'image' | 'video'
   src     : path to the media file
   poster  : (video only) thumbnail shown before play
   title   : caption shown on hover & in side panel
   category: 'interiors' | 'facade' | 'products'
───────────────────────────────────────────────────────── */
const galleryItems = [
  // ── 12 rounds of: interior → facade → product ──
  { type: 'image', src: 'assets/images/1-SB-VILLA.jpg',               title: '1-SB-VILLA',               category: 'interiors' },
  { type: 'image', src: 'assets/images/SEA-BREEZE-RIVIERA-3.jpg',     title: 'SEA-BREEZE-RIVIERA-3',     category: 'facade'    },
  { type: 'image', src: 'assets/images/SANTA-FE-3.jpg',               title: 'SANTA-FE-3',               category: 'products'  },

  { type: 'image', src: 'assets/images/Sumgayit-apt-1.jpg',           title: 'Sumgayit-apt-1',           category: 'interiors' },
  { type: 'image', src: 'assets/images/CHICAGO.jpg',                  title: 'CHICAGO',                  category: 'facade'    },
  { type: 'image', src: 'assets/images/SANTA-FE.jpg',                 title: 'SANTA-FE',                 category: 'products'  },

  { type: 'image', src: 'assets/images/Dream-Land-Interior.jpg',      title: 'Dream-Land-Interior',      category: 'interiors' },
  { type: 'image', src: 'assets/images/Sweden-House-family.jpg',      title: 'Sweden-House-family',      category: 'facade'    },
  { type: 'image', src: 'assets/images/SANTA-FE-1.jpg',               title: 'SANTA-FE-1',               category: 'products'  },

  { type: 'image', src: 'assets/images/Dream-Land-Interior-2.jpg',    title: 'Dream-Land-Interior-2',    category: 'interiors' },
  { type: 'image', src: 'assets/images/Badamdar-villa.jpg',           title: 'Badamdar-villa',           category: 'facade'    },
  { type: 'image', src: 'assets/images/SANTA-FE-2.jpg',               title: 'SANTA-FE-2',               category: 'products'  },

  { type: 'image', src: 'assets/images/Dream-Land-Interior-3.jpg',    title: 'Dream-Land-Interior-3',    category: 'interiors' },
  { type: 'image', src: 'assets/images/Germany-Nurnberg.jpg',         title: 'Germany-Nurnberg',         category: 'facade'    },
  { type: 'image', src: 'assets/images/SANTA-FE-4.jpg',               title: 'SANTA-FE-4',               category: 'products'  },

  { type: 'image', src: 'assets/images/Fatmayi-Interior-1.jpg',       title: 'Fatmayi-Interior-1',       category: 'interiors' },
  { type: 'image', src: 'assets/images/PORT-BAKU.jpg',                title: 'PORT-BAKU',                category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS.jpg',              title: 'PRODUCT-VIS',              category: 'products'  },

  { type: 'image', src: 'assets/images/Fatmayi-Interior-2.jpg',       title: 'Fatmayi-Interior-2',       category: 'interiors' },
  { type: 'image', src: 'assets/images/SEA-BREEZE-RIVIERA.jpg',       title: 'SEA-BREEZE-RIVIERA',       category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-1.jpg',            title: 'PRODUCT-VIS-1',            category: 'products'  },

  { type: 'image', src: 'assets/images/Fatmayi-Interior-3.jpg',       title: 'Fatmayi-Interior-3',       category: 'interiors' },
  { type: 'image', src: 'assets/images/SEA-BREEZE-RIVIERA-2.jpg',     title: 'SEA-BREEZE-RIVIERA-2',     category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-2.jpg',            title: 'PRODUCT-VIS-2',            category: 'products'  },

  { type: 'image', src: 'assets/images/Ganjlik-Apartment.jpg',        title: 'Ganjlik-Apartment',        category: 'interiors' },
  { type: 'image', src: 'assets/images/SHUVELAN.jpg',                 title: 'SHUVELAN',                 category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-BATHROOM.jpg',     title: 'PRODUCT-VIS-BATHROOM',     category: 'products'  },

  { type: 'image', src: 'assets/images/Ganjlik-Apartment-1.jpg',      title: 'Ganjlik-Apartment-1',      category: 'interiors' },
  { type: 'image', src: 'assets/images/SHUVELAN-1.jpg',               title: 'SHUVELAN-1',               category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-3.jpg',            title: 'PRODUCT-VIS-3',            category: 'products'  },

  { type: 'image', src: 'assets/images/Knightsbridge1.jpg',           title: 'Knightsbridge1',           category: 'interiors' },
  { type: 'image', src: 'assets/images/SHAMAKHI.jpg',                 title: 'SHAMAKHI',                 category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-ARMCHAIR.jpg',     title: 'PRODUCT-VIS-ARMCHAIR',     category: 'products'  },

  { type: 'image', src: 'assets/images/Knightsbridge2.jpg',           title: 'Knightsbridge2',           category: 'interiors' },
  { type: 'image', src: 'assets/images/SHAMAKHI-1.jpg',               title: 'SHAMAKHI-1',               category: 'facade'    },
  { type: 'image', src: 'assets/images/PRODUCT-VIS-ARMCHAIR-1.jpg',   title: 'PRODUCT-VIS-ARMCHAIR-1',   category: 'products'  },

  // ── remaining (after products run out) ──
  { type: 'image', src: 'assets/images/Knightsbridge3.jpg',           title: 'Knightsbridge3',           category: 'interiors' },
  { type: 'image', src: 'assets/images/CALIFORNIA.jpg',               title: 'CALIFORNIA',               category: 'facade'    },
  { type: 'image', src: 'assets/images/Knightsbridge4.jpg',           title: 'Knightsbridge4',           category: 'interiors' },
  { type: 'image', src: 'assets/images/Germany-Munich.jpg',           title: 'Germany-Munich',           category: 'facade'    },
  { type: 'image', src: 'assets/images/Knightsbridge-apartment-1.jpg',title: 'Knightsbridge-apartment-1',category: 'interiors' },
  { type: 'image', src: 'assets/images/Knightsbridge-apartment-2.jpg',title: 'Knightsbridge-apartment-2',category: 'interiors' },
  { type: 'image', src: 'assets/images/Knightsbridge-apartment-3.jpg',title: 'Knightsbridge-apartment-3',category: 'interiors' },
  { type: 'image', src: 'assets/images/Knightsbridge-apartment-4.jpg',title: 'Knightsbridge-apartment-4',category: 'interiors' },
  { type: 'image', src: 'assets/images/Badamdar.jpg',                 title: 'Badamdar',                 category: 'interiors' },
  { type: 'image', src: 'assets/images/Sumgayit-apt-2.jpg',           title: 'Sumgayit-apt-2',           category: 'interiors' },
  { type: 'image', src: 'assets/images/Sumgayit-apt-3.jpg',           title: 'Sumgayit-apt-3',           category: 'interiors' },
  { type: 'image', src: 'assets/images/Sumgayit-apt-4.jpg',           title: 'Sumgayit-apt-4',           category: 'interiors' },
  { type: 'image', src: 'assets/images/Novkhani-Villa-1.jpg',         title: 'Novkhani-Villa-1',         category: 'interiors' },
  { type: 'image', src: 'assets/images/Novkhani-Villa-2.jpg',         title: 'Novkhani-Villa-2',         category: 'interiors' },
  { type: 'image', src: 'assets/images/Novkhani-Villa-3.jpg',         title: 'Novkhani-Villa-3',         category: 'interiors' },
  { type: 'image', src: 'assets/images/Novkhani-Villa-4.jpg',         title: 'Novkhani-Villa-4',         category: 'interiors' },
  { type: 'image', src: 'assets/images/Novkhani-Villa-5.jpg',         title: 'Novkhani-Villa-5',         category: 'interiors' },
  { type: 'image', src: 'assets/images/1-SB-VILLA-1.jpg',             title: '1-SB-VILLA-1',             category: 'interiors' },
  { type: 'image', src: 'assets/images/1-SB-VILLA-2.jpg',             title: '1-SB-VILLA-2',             category: 'interiors' },
  { type: 'image', src: 'assets/images/1-SB-VILLA-3.jpg',             title: '1-SB-VILLA-3',             category: 'interiors' },
  { type: 'image', src: 'assets/images/1-SB-VILLA-4.jpg',             title: '1-SB-VILLA-4',             category: 'interiors' },
  { type: 'image', src: 'assets/images/Sea-BREEZE-VILLA.jpg',         title: 'Sea-BREEZE-VILLA',         category: 'interiors' },
  { type: 'image', src: 'assets/images/Sea-BREEZE-VILLA-2.jpg',       title: 'Sea-BREEZE-VILLA-2',       category: 'interiors' },
  { type: 'image', src: 'assets/images/Sea-BREEZE-VILLA-3.jpg',       title: 'Sea-BREEZE-VILLA-3',       category: 'interiors' },
  { type: 'image', src: 'assets/images/Sea-BREEZE-VILLA-4.jpg',       title: 'Sea-BREEZE-VILLA-4',       category: 'interiors' },
  { type: 'image', src: 'assets/images/Sea-BREEZE-VILLA-5.jpg',       title: 'Sea-BREEZE-VILLA-5',       category: 'interiors' },
];

// Shuffle everything after the first 3 (fixed first column)
(function () {
  const tail = galleryItems.slice(3);
  for (let i = tail.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tail[i], tail[j]] = [tail[j], tail[i]];
  }
  galleryItems.splice(3, tail.length, ...tail);
})();

/* ─────────────────────────────────────────────────────────
   GALLERY RENDER + FILTER
───────────────────────────────────────────────────────── */
const galleryEl  = document.getElementById('gallery');
const filterBar  = document.getElementById('filterBar');
let activeFilter = 'all';

function buildGallery() {
  if (!galleryEl) return;
  galleryEl.innerHTML = '';

  const visible = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  visible.forEach((item, i) => {
    const originalIndex = galleryItems.indexOf(item);
    const div = document.createElement('div');
    div.className = 'g-item';
    div.dataset.index = originalIndex;

    if (item.type === 'image') {
      div.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="g-overlay"><span class="g-title">${item.title}</span></div>
      `;
    } else {
      div.innerHTML = `
        <video src="${item.src}"
               ${item.poster ? `poster="${item.poster}"` : ''}
               muted loop playsinline preload="none"></video>
        <div class="g-overlay"><span class="g-title">${item.title}</span></div>
        <span class="g-badge">Video</span>
      `;
      const vid = div.querySelector('video');
      div.addEventListener('mouseenter', () => vid.play().catch(() => {}));
      div.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }

    div.addEventListener('click', () => openPanel(originalIndex, visible.map(v => galleryItems.indexOf(v))));
    galleryEl.appendChild(div);
  });
}

/* ─── FILTER BAR BUTTONS ─────────────────────────────── */
if (filterBar) {
  filterBar.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterBar.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      syncSubActive(activeFilter);
      buildGallery();
    });
  });
}

/* ─────────────────────────────────────────────────────────
   NAV DROPDOWN (Gallery sub-menu)
───────────────────────────────────────────────────────── */
const galleryNavItem = document.querySelector('.nav-has-sub');
const galleryNavLink = document.getElementById('galleryNavLink');

if (galleryNavLink) {
  galleryNavLink.addEventListener('click', e => {
    if (window.location.pathname.includes('index') || window.location.pathname.endsWith('/') || window.location.pathname === '') {
      e.preventDefault();
    }
    galleryNavItem.classList.toggle('sub-open');
  });
}

// close dropdown on outside click
document.addEventListener('click', e => {
  if (galleryNavItem && !galleryNavItem.contains(e.target)) {
    galleryNavItem.classList.remove('sub-open');
  }
});

// nav sub-links trigger filter
document.querySelectorAll('.nav-sub a[data-filter]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.dataset.filter;
    activeFilter = filter;

    // sync filter bar
    if (filterBar) {
      filterBar.querySelectorAll('.f-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === filter);
      });
      filterBar.classList.add('visible');
    }

    syncSubActive(filter);
    buildGallery();
    galleryNavItem.classList.remove('sub-open');
  });
});

function syncSubActive(filter) {
  document.querySelectorAll('.nav-sub a[data-filter]').forEach(a => {
    a.classList.toggle('sub-active', a.dataset.filter === filter);
  });
}

/* ─────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lbMedia  = document.getElementById('lbMedia');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');

let currentIdx      = 0;
let currentIndexSet = [];

function openPanel(idx, indexSet) {
  currentIdx      = idx;
  currentIndexSet = indexSet || galleryItems.map((_, i) => i);
  renderPanelItem();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { if (lbMedia) lbMedia.innerHTML = ''; }, 380);
}

function renderPanelItem() {
  const item = galleryItems[currentIdx];
  if (!item || !lbMedia) return;
  lbMedia.innerHTML = '';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart',   e => e.preventDefault());
    lbMedia.appendChild(img);

    const cap = document.createElement('div');
    cap.className   = 'lb-caption';
    cap.textContent = item.title;
    lbMedia.appendChild(cap);
  } else {
    const vid = document.createElement('video');
    vid.src = item.src;
    if (item.poster) vid.poster = item.poster;
    vid.controls    = true;
    vid.autoplay    = true;
    vid.playsinline = true;
    lbMedia.appendChild(vid);
  }
}

function stepPanel(dir) {
  const pos  = currentIndexSet.indexOf(currentIdx);
  const next = (pos + dir + currentIndexSet.length) % currentIndexSet.length;
  currentIdx = currentIndexSet[next];
  renderPanelItem();
}

if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closePanel(); });
if (lbClose)  lbClose.addEventListener('click',  closePanel);
if (lbPrev)   lbPrev.addEventListener('click',   e => { e.stopPropagation(); stepPanel(-1); });
if (lbNext)   lbNext.addEventListener('click',   e => { e.stopPropagation(); stepPanel(+1); });

document.addEventListener('keydown', e => {
  if (!lightbox?.classList.contains('open')) return;
  if (e.key === 'Escape')     closePanel();
  if (e.key === 'ArrowLeft')  stepPanel(-1);
  if (e.key === 'ArrowRight') stepPanel(+1);
});

/* ─────────────────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
const toggleTxt = navToggle?.querySelector('.toggle-text');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    if (toggleTxt) toggleTxt.textContent = open ? 'Close' : 'Menu';
  });
}

/* ─────────────────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
const savedTheme  = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', savedTheme);
if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? 'on' : 'off';

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? 'on' : 'off';
  });
}

/* ─────────────────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────────────────── */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const dot  = document.createElement('div'); dot.className  = 'c-dot';
  const ring = document.createElement('div'); ring.className = 'c-ring';
  document.body.append(dot, ring);

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function lagRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lagRing);
  })();

  document.querySelectorAll('a, button, .g-item, .rta-card, .award-thumb, .map-tab').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = ''; ring.style.opacity = ''; });
}

/* ─────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────── */
buildGallery();
