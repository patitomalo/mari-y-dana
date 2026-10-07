/* Menú flotante: aparece después de la primera sección */
(function () {
  var nav = document.getElementById('flotante');
  var hero = document.querySelector('.guia-hero');
  if (!nav || !hero) return;
  nav.hidden = false;
  function revisar() {
    var limite = hero.offsetTop + hero.offsetHeight - 40;
    nav.classList.toggle('is-visible', window.scrollY > limite);
  }
  window.addEventListener('scroll', revisar, { passive: true });
  window.addEventListener('resize', revisar);
  revisar();
  nav.querySelector('[data-accion="inicio"]').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
