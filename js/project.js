/* ─── PROJECT DETAIL PAGE ─── */

(function () {
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id || typeof projects === 'undefined') return;

  const project = projects.find(p => p.id === id);
  if (!project) return;

  /* title */
  document.title = project.title + ' — LACHIN GULUYEV';
  const titleEl = document.querySelector('.project-title');
  if (titleEl) titleEl.textContent = project.title;

  /* hero */
  const heroEl  = document.querySelector('.project-hero');
  const heroImg = document.querySelector('.project-hero img');
  if (project.noHero) {
    if (heroEl) heroEl.style.display = 'none';
  } else if (heroImg) {
    heroImg.src = project.hero || project.cover;
    heroImg.alt = project.title;
  }

  /* meta */
  const metaEl = document.querySelector('.project-meta');
  if (metaEl && project.meta) {
    metaEl.innerHTML = project.meta.map(m => `
      <div class="project-meta-item">
        <span class="project-meta-label">${m.label}</span>
        <span class="project-meta-value">${m.value}</span>
      </div>
    `).join('');
  }

  /* description */
  const descEl = document.querySelector('.project-desc');
  if (descEl && project.description) {
    descEl.innerHTML = project.description.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  }

  /* side video layout — wraps project-body and places video beside it */
  if (project.sideVideo) {
    const bodyEl = document.querySelector('.project-body');
    if (bodyEl) {
      const wrap = document.createElement('div');
      wrap.className = 'project-text-media';
      bodyEl.parentNode.insertBefore(wrap, bodyEl);
      wrap.appendChild(bodyEl);
      const mediaEl = document.createElement('div');
      mediaEl.className = 'project-side-media';
      mediaEl.innerHTML = `<video src="${project.sideVideo}" class="project-webp-anim" autoplay loop muted playsinline></video>`;
      wrap.appendChild(mediaEl);
    }
  }

  /* youtube embed */
  const ytEl = document.querySelector('.project-youtube');
  if (ytEl && project.youtube) {
    const m = project.youtube.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
    if (m) {
      ytEl.innerHTML = `
        <div class="project-yt-wrap">
          <iframe src="https://www.youtube.com/embed/${m[1]}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>`;
    }
  }

  /* photo grid — all images including cover */
  const photosEl = document.querySelector('.project-photos');
  if (photosEl) {
    project.images.forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'project-photo';
      div.innerHTML = `<img src="${src}" alt="${project.title} ${i + 1}" loading="lazy">`;
      div.addEventListener('click', () => openLb(i));
      photosEl.appendChild(div);
    });
  }

  /* lightbox */
  let lbIdx = 0;
  const lb      = document.getElementById('projectLb');
  const lbImg   = document.getElementById('projectLbImg');
  const lbClose = document.getElementById('projectLbClose');
  const lbPrev  = document.getElementById('projectLbPrev');
  const lbNext  = document.getElementById('projectLbNext');
  const lbMedia = lb ? lb.querySelector('.lb-media') : null;

  function openLb(i) {
    lbIdx = i;
    if (lbImg) { lbImg.src = project.images[lbIdx]; lbImg.alt = project.title; }
    if (lb) { lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    if (lb) { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); }
    document.body.style.overflow = '';
  }

  function step(dir) {
    lbIdx = (lbIdx + dir + project.images.length) % project.images.length;
    if (lbImg) { lbImg.src = project.images[lbIdx]; lbImg.alt = project.title; }
  }

  if (lb)      lb.addEventListener('click', closeLb);
  if (lbMedia) lbMedia.addEventListener('click', e => e.stopPropagation());
  if (lbClose) lbClose.addEventListener('click', e => { e.stopPropagation(); closeLb(); });
  if (lbPrev)  lbPrev.addEventListener('click',  e => { e.stopPropagation(); step(-1); });
  if (lbNext)  lbNext.addEventListener('click',  e => { e.stopPropagation(); step(+1); });

  document.addEventListener('keydown', e => {
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(+1);
  });
})();
