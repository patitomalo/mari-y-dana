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
  var GOOGLE_FORM = {
    FORM_ID: '',                 // ej. '1FAIpQLSd...'
    ENTRY: {
      nombre: '',                // ej. 'entry.1234567890'
      asiste: '',
      restriccion: '',
      bebida: ''
    }
  };

  var form = document.getElementById('rsvp');
  if (form) {
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
        bebida: form.bebida.value.trim()
      };

      if (!GOOGLE_FORM.FORM_ID) {
        // Todavía no está conectado el Google Form: avisamos y no perdemos la respuesta.
        console.warn('Google Form sin configurar. Respuesta:', datos);
        ok.textContent = 'Formulario en preparación. ¡Gracias por la paciencia!';
        ok.hidden = false;
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
