/* ─── PROJECT DETAIL PAGE ─── */

(function () {
  /* id comes from the static page (data-project) or from ?id= on the legacy URL */
  const id = document.body.dataset.project
          || new URLSearchParams(window.location.search).get('id');
  if (!id || typeof projects === 'undefined') return;

  const project = projects.find(p => p.id === id);
  if (!project) return;

  /* localized copy — falls back to the English fields */
  function loc(field) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    return (project.i18n && project.i18n[lang] && project.i18n[lang][field]) || project[field];
  }

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

  /* meta + description (re-rendered when the language changes) */
  const metaEl = document.querySelector('.project-meta');
  const descEl = document.querySelector('.project-desc');

  function renderText() {
    const meta = loc('meta');
    if (metaEl && meta) {
      metaEl.innerHTML = meta.map(m => `
        <div class="project-meta-item">
          <span class="project-meta-label">${m.label}</span>
          <span class="project-meta-value">${m.value}</span>
        </div>
      `).join('');
    }

    const desc = loc('description');
    if (descEl && desc) {
      descEl.innerHTML = desc.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    }
  }

  renderText();
  document.addEventListener('langchange', renderText);

  /* media row — video with the photo beside it, below the text */
  if (project.sideVideo && project.sideImage) {
    const bodyEl = document.querySelector('.project-body');
    if (bodyEl) {
      const row = document.createElement('div');
      row.className = 'project-media-row';
      row.innerHTML = `
        <div class="project-side-media"><video src="${project.sideVideo}" class="project-webp-anim" autoplay loop muted playsinline></video></div>
        <div class="project-photo"><img src="${project.sideImage}" alt="${project.title}"></div>`;
      bodyEl.parentNode.insertBefore(row, bodyEl.nextSibling);
      const idx = project.images.indexOf(project.sideImage);
      if (idx > -1) row.querySelector('.project-photo').addEventListener('click', () => openLb(idx));
    }
  }
  /* side video layout — wraps project-body and places video beside it */
  else if (project.sideVideo) {
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
    photosEl.innerHTML = '';   /* clear the pre-rendered markup on static pages */
    project.images.forEach((src, i) => {
      if (src === project.sideImage) return;   /* already shown in the media row */
      const div = document.createElement('div');
      div.className = 'project-photo';
      div.innerHTML = `<img src="${src}" alt="${project.title} — ${project.category} visualization, image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
      div.addEventListener('click', () => openLb(i));
      photosEl.appendChild(div);
    });
  }

  /* full-width shots right below the photo grid (lightbox continues after project.images) */
  const gallery = project.images.slice();
  const wideEl = document.querySelector('.project-wide');
  if (wideEl) {
    wideEl.innerHTML = '';
    (project.wideImages || []).forEach(src => {
      const idx = gallery.push(src) - 1;
      const div = document.createElement('div');
      div.className = 'project-photo-wide';
      div.innerHTML = `<img src="${src}" alt="${project.title} — ${project.category} visualization" loading="lazy">`;
      div.addEventListener('click', () => openLb(idx));
      wideEl.appendChild(div);
    });
  }

  /* extra sections — heading + text + their own images, below the photo grid.
     Section images continue the lightbox sequence after the images above. */
  const sections = project.sections || [];
  const sectionsEl = document.querySelector('.project-sections');
  if (sectionsEl) {
    sectionsEl.innerHTML = '';
    sections.forEach((sec, si) => {
      const wrap = document.createElement('div');
      wrap.className = 'project-section';
      wrap.innerHTML = `
        <div class="project-section-text">
          <h2 class="project-section-heading"></h2>
          <p class="project-section-body"></p>
        </div>
        <div class="project-photos project-section-photos"></div>
        <div class="project-section-wide"></div>`;
      const grid = wrap.querySelector('.project-section-photos');
      const wide = wrap.querySelector('.project-section-wide');
      (sec.images || []).forEach(src => {
        const idx = gallery.push(src) - 1;
        const div = document.createElement('div');
        div.className = 'project-photo';
        div.innerHTML = `<img src="${src}" alt="${project.title} — ${sec.heading}" loading="lazy">`;
        div.addEventListener('click', () => openLb(idx));
        grid.appendChild(div);
      });
      (sec.wideImages || []).forEach(src => {
        const idx = gallery.push(src) - 1;
        const div = document.createElement('div');
        div.className = 'project-photo-wide';
        div.innerHTML = `<img src="${src}" alt="${project.title} — ${sec.heading}" loading="lazy">`;
        div.addEventListener('click', () => openLb(idx));
        wide.appendChild(div);
      });
      if (!grid.children.length) grid.remove();
      if (!wide.children.length) wide.remove();
      sectionsEl.appendChild(wrap);
    });
  }

  function renderSectionText() {
    if (!sectionsEl) return;
    const locSecs = loc('sections') || [];
    sectionsEl.querySelectorAll('.project-section').forEach((el, si) => {
      const sec = Object.assign({}, sections[si], locSecs[si] || {});
      el.querySelector('.project-section-heading').textContent = sec.heading || '';
      el.querySelector('.project-section-body').innerHTML = (sec.text || '').replace(/\n/g, '<br>');
    });
  }
  renderSectionText();
  document.addEventListener('langchange', renderSectionText);

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
    if (lbImg) { lbImg.src = gallery[lbIdx]; lbImg.alt = project.title; }
    if (lb) { lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    if (lb) { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); }
    document.body.style.overflow = '';
  }

  function step(dir) {
    lbIdx = (lbIdx + dir + gallery.length) % gallery.length;
    if (lbImg) { lbImg.src = gallery[lbIdx]; lbImg.alt = project.title; }
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
