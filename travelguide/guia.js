/* Guía de las novias · arma las listas desde piques.js */
(function () {
  var zonas = window.PIQUES || [];
  var colores = ['', 'section--khaki', '', 'section--clay', ''];

  function maps(q) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + ', Uruguay');
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  var salirSet = {}; (window.PIQUES_SALIR || []).forEach(function (n) { salirSet[n] = true; });
  function lugarHTML(l) {
    var ig = l.ig ? '<a class="pique__ig" href="https://instagram.com/' + esc(l.ig) + '" target="_blank" rel="noopener">@' + esc(l.ig) + '</a>' : '';
    var tag = salirSet[l.n] ? '<span class="pique__tag">tomar algo</span>' : '';
    var nota = l.t ? '<p class="pique__nota">' + esc(l.t) + '</p>' : '';
    return '<li class="pique">' +
      '<p class="pique__nombre"><a class="pique__link" href="' + maps(l.q) + '" target="_blank" rel="noopener">' + esc(l.n) + '</a>' + ig + tag + '</p>' + nota +
      '</li>';
  }

  // chips
  var chips = document.getElementById('chips');
  var cont = document.getElementById('zonas');
  var todos = [];
  zonas.forEach(function (z, i) {
    chips.insertAdjacentHTML('beforeend', '<a href="#' + z.id + '">' + esc(z.zona) + '</a>');
    var sec = document.createElement('section');
    sec.className = 'section zona ' + (colores[i % colores.length] || '');
    sec.id = z.id;
    sec.innerHTML = '<h2 class="script">' + esc(z.zona) + '</h2>' +
      '<p class="zona__sub">' + esc(z.sub) + '</p>' +
      '<ul class="lista">' + z.lugares.map(lugarHTML).join('') + '</ul>';
    cont.appendChild(sec);
    z.lugares.forEach(function (l) { todos.push(l); });
  });

  // "Ver en mapa": mapa compartido de Google My Maps con todos los lugares.
  // Si se deja vacío, el botón queda oculto.
  var LISTA_GOOGLE_MAPS = 'https://www.google.com/maps/d/viewer?mid=1IElQ0j61CTQfa-oFV-4VLtgs3JVgeUo';
  var btn = document.getElementById('btn-mapa-todos');
  if (btn && LISTA_GOOGLE_MAPS) { btn.href = LISTA_GOOGLE_MAPS; btn.hidden = false; }
})();
