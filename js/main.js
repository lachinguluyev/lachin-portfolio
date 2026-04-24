/* ─────────────────────────────────────────────────────────
   GALLERY DATA
   ─────────────────────────────────────────────────────────
   Add your files to assets/images/ and assets/videos/
   then list them here.

   type  : 'image' | 'video'
   src   : path to the media file
   poster: (video only) thumbnail image shown before play
   title : caption shown on hover
───────────────────────────────────────────────────────── */
const galleryItems = [
  // ── IMAGES ──
  // { type: 'image', src: 'assets/images/photo-01.jpg', title: 'Title' },

  // ── VIDEOS ──
  // { type: 'video', src: 'assets/videos/video-01.mp4', poster: 'assets/images/poster-01.jpg', title: 'Title' },
];

/* ─────────────────────────────────────────────────────────
   RENDER GALLERY
───────────────────────────────────────────────────────── */
const galleryEl = document.getElementById('gallery');

function buildGallery() {
  if (!galleryEl) return;

  galleryItems.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'g-item';
    div.dataset.index = i;

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

    div.addEventListener('click', () => openLightbox(i));
    galleryEl.appendChild(div);
  });
}

/* ─────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────── */
const lightbox   = document.getElementById('lightbox');
const lbContent  = document.getElementById('lbContent');
const lbClose    = document.getElementById('lbClose');
const lbPrev     = document.getElementById('lbPrev');
const lbNext     = document.getElementById('lbNext');

let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  renderLightboxItem();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lbContent.innerHTML = '';
  document.body.style.overflow = '';
}

function renderLightboxItem() {
  const item = galleryItems[currentIdx];
  lbContent.innerHTML = '';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    lbContent.appendChild(img);
  } else {
    const vid = document.createElement('video');
    vid.src = item.src;
    if (item.poster) vid.poster = item.poster;
    vid.controls = true;
    vid.autoplay = true;
    vid.playsinline = true;
    lbContent.appendChild(vid);
  }
}

function stepLightbox(dir) {
  currentIdx = (currentIdx + dir + galleryItems.length) % galleryItems.length;
  renderLightboxItem();
}

if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lbPrev)  lbPrev.addEventListener('click',  () => stepLightbox(-1));
if (lbNext)  lbNext.addEventListener('click',  () => stepLightbox(+1));

if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', e => {
  if (!lightbox?.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   stepLightbox(-1);
  if (e.key === 'ArrowRight')  stepLightbox(+1);
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
