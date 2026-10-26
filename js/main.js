/* Mari & Dana · cuenta regresiva y formulario */
(function () {
  // ---------- Cuenta regresiva ----------
  var box = document.querySelector('.countdown');
  if (box) {
    var target = new Date(box.getAttribute('data-target')).getTime();
    var els = {
      d: box.querySelector('[data-unit="d"]'),
      h: box.querySelector('[data-unit="h"]'),
      m: box.querySelector('[data-unit="m"]'),
      s: box.querySelector('[data-unit="s"]')
    };
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var diff = Math.max(0, target - Date.now());
      var s = Math.floor(diff / 1000);
      els.d.textContent = pad(Math.floor(s / 86400));
      els.h.textContent = pad(Math.floor((s % 86400) / 3600));
      els.m.textContent = pad(Math.floor((s % 3600) / 60));
      els.s.textContent = pad(s % 60);
    };
    tick();
    setInterval(tick, 1000);
  }

  // ---------- Formulario: envía las respuestas a un Google Form ----------
  //
  // Cómo conectar el Google Form (una sola vez):
  // 1. En el formulario de Google, tocar "Vista previa" y abrir el código fuente.
  // 2. Copiar el ID del formulario (la parte larga de la URL .../d/e/<ID>/viewform)
  //    y pegarlo en FORM_ID.
  // 3. Buscar en el código fuente cada "entry.XXXXXXX" y pegarlo en el campo
  //    correspondiente de ENTRY, respetando el orden de las preguntas.
  //
  // Hoja de cálculo de Mari y Dana: las respuestas se guardan ahí a través de un
  // Apps Script publicado como aplicación web (ver web/apps-script/Code.gs).
  // Pegar en URL la dirección que termina en /exec.
  var SHEET = {
    URL: 'https://script.google.com/macros/s/AKfycbzQRUxnL_fsJFbF3fIRtslTVNJmPmo7Fmr-f8EAUvZZCK5vchNnF3fHk4A4PkFEmLAfOA/exec'
  };

  var GOOGLE_FORM = {
    FORM_ID: '',                 // ej. '1FAIpQLSd...'
    ENTRY: {
      nombre: '',                // ej. 'entry.1234567890'
      asiste: '',
      restriccion: '',
      mancha: ''
    }
  };

  var form = document.getElementById('rsvp');
  if (form) {
  // ---------- ¿Quién se mancha?: pie chart con los votos hasta ahora ----------
  //
  // Los votos salen de la hoja de respuestas del Google Form, publicada en la web
  // como CSV (Archivo > Compartir > Publicar en la web > la hoja de respuestas > CSV).
  // Pegar esa URL en VOTOS_CSV_URL y poner en VOTOS_COLUMNA el encabezado exacto de
  // la pregunta. Mientras no esté configurado, el gráfico muestra solo el voto actual.
  //
  var VOTOS = {
    CSV_URL: '',
    COLUMNA: 'mancha',
    cache: null
  };
  var pie = document.getElementById('pie-mancha');
  if (pie && form) {
    var CIRC = 2 * Math.PI * 44;   // perímetro del círculo del SVG
    var pintar = function (conteo) {
      var mari = conteo.Mari || 0, dana = conteo.Dana || 0, total = mari + dana || 1;
      var pm = mari / total, pd = dana / total;
      var sMari = pie.querySelector('.pie__slice--mari');
      var sDana = pie.querySelector('.pie__slice--dana');
      sMari.style.strokeDasharray = (pm * CIRC) + ' ' + CIRC;
      sDana.style.strokeDasharray = (pd * CIRC) + ' ' + CIRC;
      sDana.style.strokeDashoffset = -(pm * CIRC);
      pie.querySelector('[data-pie="Mari"]').textContent = Math.round(pm * 100) + '%';
      pie.querySelector('[data-pie="Dana"]').textContent = Math.round(pd * 100) + '%';
      pie.hidden = false;
    };
    var leerVotos = function () {
      if (VOTOS.cache) return Promise.resolve(VOTOS.cache);
      if (SHEET.URL) {
        return fetch(SHEET.URL + '?q=votos', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (c) {
          VOTOS.cache = { Mari: c.Mari || 0, Dana: c.Dana || 0 };
          return VOTOS.cache;
        }).catch(function () { return {}; });
      }
      if (!VOTOS.CSV_URL) return Promise.resolve({});
      return fetch(VOTOS.CSV_URL, { cache: 'no-store' }).then(function (r) { return r.text(); }).then(function (txt) {
        var filas = txt.split(/\r?\n/).map(function (l) {
          return l.split(',').map(function (c) { return c.replace(/^"|"$/g, '').trim(); });
        });
        var col = filas[0].indexOf(VOTOS.COLUMNA);
        var conteo = {};
        if (col >= 0) filas.slice(1).forEach(function (f) { if (f[col]) conteo[f[col]] = (conteo[f[col]] || 0) + 1; });
        VOTOS.cache = conteo;
        return conteo;
      }).catch(function () { return {}; });
    };
    // El gráfico aparece recién después de "Enviar", con los votos de todos (incluido el nuevo).
    var mostrarVotos = function (voto) {
      if (!voto) return;
      // Primero con lo que ya sabíamos más el voto propio (sale al instante);
      // después se corrige con el conteo real de la hoja, que puede tardar unos segundos.
      var base = VOTOS.cache || {};
      var c = { Mari: base.Mari || 0, Dana: base.Dana || 0 };
      c[voto] += 1;
      pintar(c);
      VOTOS.cache = null;
      leerVotos().then(function (conteo) {
        if ((conteo.Mari || 0) + (conteo.Dana || 0) > 0) pintar(conteo);
      });
    };
    leerVotos();   // calienta el conteo al cargar la página
  }

  // ---------- Pantalla de gracias: reemplaza al formulario después de enviar ----------
  var gracias = document.getElementById('gracias');
  var ultimaRespuesta = null;
  var tr = function (k) { return (window.I18N[window.LANG] || window.I18N.es)[k] || ''; };
  var pintarGracias = function () {
    if (!gracias || !ultimaRespuesta) return;
    var d = ultimaRespuesta;
    document.getElementById('gracias-titulo').textContent = tr('gracias_titulo');
    document.getElementById('gracias-saludo').textContent = tr('gracias_saludo').replace('{nombre}', d.nombre.trim().split(/\s+/)[0]);
    var texto = d.mancha ? tr('gracias_voto').replace('{voto}', d.mancha) : tr('gracias_sin_voto');
    if (d.pendiente) texto = tr('gracias_pendiente') + ' ' + texto;
    document.getElementById('gracias-texto').textContent = texto;
    document.getElementById('gracias-pie').textContent = d.mancha ? tr('gracias_pie') : '';
  };
  var mostrarGracias = function (d) {
    ultimaRespuesta = d;
    pintarGracias();
    if (form) form.hidden = true;
    gracias.hidden = false;
    if (typeof mostrarVotos === 'function') mostrarVotos(d.mancha);
    gracias.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  document.addEventListener('langchange', pintarGracias);

    var ok = form.querySelector('.form__ok');
    var error = form.querySelector('.form__error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      ok.hidden = true; error.hidden = true;

      var nombre = form.nombre.value.trim();
      var nombreField = form.nombre.closest('.field');
      if (!nombre) {
        nombreField.classList.add('is-invalid');
        form.nombre.focus();
        return;
      }
      nombreField.classList.remove('is-invalid');

      var datos = {
        nombre: nombre,
        asiste: form.querySelector('input[name="asiste"]:checked').value,
        restriccion: form.restriccion.value,
        mancha: form.mancha.value
      };

      if (SHEET.URL) {
        var cuerpo = new URLSearchParams(datos);
        cuerpo.append('lang', window.LANG || 'es');
        form.classList.add('is-sending');
        fetch(SHEET.URL, { method: 'POST', mode: 'no-cors', body: cuerpo }).then(function () {
          form.classList.remove('is-sending');
          form.reset();
          setTimeout(function () { mostrarGracias(datos); }, 400);
        }).catch(function () {
          form.classList.remove('is-sending');
          error.hidden = false;
        });
        return;
      }

      if (!GOOGLE_FORM.FORM_ID) {
        // Todavía no está conectado el Google Form: avisamos y no perdemos la respuesta.
        console.warn('Google Form sin configurar. Respuesta:', datos);
        datos.pendiente = true;
        mostrarGracias(datos);
        return;
      }

      var body = new URLSearchParams();
      Object.keys(datos).forEach(function (k) {
        if (GOOGLE_FORM.ENTRY[k]) body.append(GOOGLE_FORM.ENTRY[k], datos[k]);
      });

      form.classList.add('is-sending');
      fetch('https://docs.google.com/forms/d/e/' + GOOGLE_FORM.FORM_ID + '/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      }).then(function () {
        form.classList.remove('is-sending');
        form.reset();
        ok.hidden = false;
      }).catch(function () {
        form.classList.remove('is-sending');
        error.hidden = false;
      });
    });
  }
})();

// ---------- Regalos: tocar un número lo copia ----------
(function () {
  document.querySelectorAll('[data-copiar]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-copiar');
      var listo = function () {
        if (b.classList.contains('is-copiado')) return;
        var t = (window.I18N[window.LANG] || window.I18N.es).copiado || 'Copiado';
        var original = b.textContent;
        b.textContent = t + ' ✓'; b.classList.add('is-copiado');
        setTimeout(function () { b.textContent = original; b.classList.remove('is-copiado'); }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(listo, listo);
      else {
        var r = document.createRange(); r.selectNodeContents(b);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        try { document.execCommand('copy'); } catch (e) {}
        listo();
      }
    });
  });
})();
