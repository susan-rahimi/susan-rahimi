(() => {
  const imgs = document.querySelectorAll('.cover img, .figure img, .shot img, .phones img');
  if (!imgs.length) return;
  const dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(dlg);
  const big = dlg.querySelector('img');
  dlg.addEventListener('click', e => { if (e.target !== big) dlg.close(); });
  imgs.forEach(img => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom-btn';
    btn.setAttribute('aria-label', 'Enlarge image: ' + img.alt);
    img.parentNode.insertBefore(btn, img);
    btn.appendChild(img);
    btn.addEventListener('click', () => {
      const tall = !img.closest('.phones') && img.naturalHeight / img.naturalWidth > 1.5;
      big.classList.toggle('tall', tall);
      dlg.classList.toggle('is-tall', tall);
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      dlg.showModal();
      dlg.scrollTop = 0;
    });
  });
})();
