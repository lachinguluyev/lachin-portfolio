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
  // ── IMAGES ──
  // { type: 'image', src: 'assets/images/photo-01.jpg', title: 'Title', category: 'interiors' },
  // { type: 'image', src: 'assets/images/photo-02.jpg', title: 'Title', category: 'facade' },
  // { type: 'image', src: 'assets/images/photo-03.jpg', title: 'Title', category: 'products' },

  // ── VIDEOS ──
  // { type: 'video', src: 'assets/videos/video-01.mp4', poster: 'assets/images/poster-01.jpg', title: 'Title', category: 'interiors' },
];

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
   SIDE PANEL
───────────────────────────────────────────────────────── */
const panel       = document.getElementById('sidePanel');
const overlay     = document.getElementById('spOverlay');
const spMedia     = document.getElementById('spMedia');
const spTitle     = document.getElementById('spTitle');
const spInfoTitle = document.getElementById('spInfoTitle');
const spClose     = document.getElementById('spClose');
const spPrev      = document.getElementById('spPrev');
const spNext      = document.getElementById('spNext');

let currentIdx      = 0;
let currentIndexSet = [];

function openPanel(idx, indexSet) {
  currentIdx      = idx;
  currentIndexSet = indexSet || galleryItems.map((_, i) => i);
  renderPanelItem();
  panel.classList.add('open');
  overlay.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  panel.classList.remove('open');
  overlay.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { if (spMedia) spMedia.innerHTML = ''; }, 450);
}

function renderPanelItem() {
  const item = galleryItems[currentIdx];
  if (!item || !spMedia) return;
  spMedia.innerHTML = '';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    spMedia.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = item.src;
    if (item.poster) vid.poster = item.poster;
    vid.controls = true;
    vid.autoplay = true;
    vid.playsinline = true;
    spMedia.appendChild(vid);
  }

  const pos = currentIndexSet.indexOf(currentIdx) + 1;
  if (spTitle)     spTitle.textContent     = `${pos} / ${currentIndexSet.length}`;
  if (spInfoTitle) spInfoTitle.textContent = item.title;
}

function stepPanel(dir) {
  const pos  = currentIndexSet.indexOf(currentIdx);
  const next = (pos + dir + currentIndexSet.length) % currentIndexSet.length;
  currentIdx = currentIndexSet[next];
  renderPanelItem();
}

if (spClose)  spClose.addEventListener('click', closePanel);
if (spPrev)   spPrev.addEventListener('click',  () => stepPanel(-1));
if (spNext)   spNext.addEventListener('click',  () => stepPanel(+1));
if (overlay)  overlay.addEventListener('click', closePanel);

document.addEventListener('keydown', e => {
  if (!panel?.classList.contains('open')) return;
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
   INIT
───────────────────────────────────────────────────────── */
buildGallery();
