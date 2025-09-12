'use strict';

(function () {
  function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = 60 + Math.floor(Math.random() * 40); // 60–100%
    const l = 50; // 50%
    return `hsl(${h} ${s}% ${l}%)`;
  }

  function updateBg() {
    document.body.style.backgroundColor = randomColor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const btn = document.getElementById('changeBtn');
    if (!btn) return;
    btn.addEventListener('click', updateBg);
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') updateBg();
    });
  }
})();
