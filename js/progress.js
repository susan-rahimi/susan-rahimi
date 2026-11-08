(() => {
  const bar = document.querySelector('.progress span');
  if (!bar) return;
  const update = () => {
    const d = document.documentElement;
    bar.style.transform = 'scaleX(' + Math.min(1, scrollY / Math.max(1, d.scrollHeight - innerHeight)) + ')';
  };
  addEventListener('scroll', update, { passive: true });
  update();
})();
