/* ─────────────────────────────────────────────────────────
   WORKS GRID  (index.html)
───────────────────────────────────────────────────────── */
let activeWorksFilter = 'all';

function buildWorks() {
  const grid = document.getElementById('worksGrid');
  if (!grid || typeof projects === 'undefined') return;

  grid.innerHTML = '';

  const visible = activeWorksFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeWorksFilter);

  visible.forEach(project => {
    const a = document.createElement('a');
    a.href      = 'project.html?id=' + project.id;
    a.className = 'work-card';
    a.innerHTML = `
      <div class="work-card-img">
        <img src="${project.cover}" alt="${project.title}" loading="lazy">
      </div>
      <div class="work-card-info">
        <span class="work-card-title">${project.title}</span>
      </div>
    `;
    grid.appendChild(a);
  });
}

const worksNavItem = document.getElementById('worksNavItem');
const worksNavBtn  = document.getElementById('worksNavBtn');
const worksSubMenu = document.getElementById('worksSubMenu');

if (worksNavBtn && worksSubMenu) {
  worksNavBtn.addEventListener('click', e => {
    e.preventDefault();
    worksNavItem.classList.toggle('sub-open');
  });

  worksSubMenu.querySelectorAll('a[data-filter]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      activeWorksFilter = a.dataset.filter;
      worksSubMenu.querySelectorAll('a').forEach(x => x.classList.remove('sub-active'));
      a.classList.add('sub-active');
      worksNavItem.classList.remove('sub-open');
      if (navLinks) { navLinks.classList.remove('open'); }
      if (toggleTxt) { toggleTxt.textContent = 'Menu'; }
      buildWorks();
    });
  });

  document.addEventListener('click', e => {
    if (worksNavItem && !worksNavItem.contains(e.target)) {
      worksNavItem.classList.remove('sub-open');
    }
  });
}

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

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
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

  document.querySelectorAll('a, button, .work-card, .project-photo, .rta-card, .award-thumb, .map-tab').forEach(el => {
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
buildWorks();

document.querySelectorAll('.toolkit-logos img').forEach(img => {
  img.addEventListener('contextmenu', e => e.preventDefault());
  img.addEventListener('dragstart',   e => e.preventDefault());
});

/* ─────────────────────────────────────────────────────────
   CUSTOM SCROLL INDICATOR
───────────────────────────────────────────────────────── */
(function () {
  const bar   = document.createElement('div');
  bar.className = 'scroll-bar';
  const thumb = document.createElement('div');
  thumb.className = 'scroll-thumb';
  bar.appendChild(thumb);
  document.body.appendChild(bar);

  function update() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) { thumb.style.display = 'none'; return; }
    thumb.style.display = '';
    const ratio  = window.scrollY / maxScroll;
    const thumbH = Math.max(48, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
    thumb.style.height = thumbH + 'px';
    thumb.style.top    = (ratio * (window.innerHeight - thumbH)) + 'px';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  document.addEventListener('mousemove', e => {
    bar.classList.toggle('hovered', e.clientX > window.innerWidth - 40);
  });
  document.addEventListener('mouseleave', () => bar.classList.remove('hovered'));
})();
