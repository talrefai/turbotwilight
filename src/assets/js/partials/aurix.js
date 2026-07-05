/**
 * TurboTwilight — Aurix motion layer.
 * Adds staggered reveal-on-scroll to home blocks and product cards.
 */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.s-block, .product-entry');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('ax-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (el, i) {
    el.classList.add('ax-reveal');
    el.style.transitionDelay = Math.min((i % 4) * 60, 240) + 'ms';
    io.observe(el);
  });
})();
