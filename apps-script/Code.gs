/**
 * Mari & Dana · RSVP → Google Sheet
 * Hoja: https://docs.google.com/spreadsheets/d/17Tl0Gi4UXNnRG4Dm13x0fSlgIyrzNuRa9Ut8EF6VeSc/edit
 *
 * Cómo publicarlo (una sola vez, con la cuenta dueña de la hoja):
 * 1. Abrir la hoja → Extensiones → Apps Script. Borrar lo que haya y pegar este archivo.
 * 2. Implementar → Nueva implementación → tipo "Aplicación web".
 *    - Ejecutar como: Yo.
 *    - Quién tiene acceso: Cualquier usuario.
 * 3. Autorizar cuando lo pida. Copiar la URL que termina en /exec
 *    y pegarla en web/js/main.js, en SHEET.URL.
 *
 * La primera respuesta crea los encabezados si la hoja está vacía.
 */
var HOJA = 'Respuestas';
var ENCABEZADOS = ['Fecha', 'Nombre y apellido', '¿Venís?', 'Restricción alimentaria', '¿Quién se mancha?', 'Idioma'];

function hoja_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(HOJA) || ss.getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.appendRow(ENCABEZADOS);
    sh.getRange(1, 1, 1, ENCABEZADOS.length).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

// POST: guarda una respuesta del formulario.
function doPost(e) {
  var p = (e && e.parameter) || {};
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    hoja_().appendRow([new Date(), p.nombre || '', p.asiste || '', p.restriccion || '', p.mancha || '', p.lang || '']);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

// GET ?q=votos : devuelve cuántos votaron Mari y cuántos Dana.
function doGet(e) {
  var q = (e && e.parameter && e.parameter.q) || 'votos';
  if (q !== 'votos') return json_({ error: 'consulta desconocida' });
  var sh = hoja_();
  var n = sh.getLastRow();
  var conteo = { Mari: 0, Dana: 0, total: Math.max(0, n - 1) };
  if (n > 1) {
    var col = ENCABEZADOS.indexOf('¿Quién se mancha?') + 1;
    sh.getRange(2, col, n - 1, 1).getValues().forEach(function (f) {
      var v = String(f[0]).trim();
      if (v in conteo) conteo[v] += 1;
    });
  }
  return json_(conteo);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
