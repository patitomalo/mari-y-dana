"""Genera /pt/ y /he/ a partir de las páginas en español, con sus metadatos
de preview (Open Graph) traducidos. Se corre antes de publicar (ver
.github/workflows/pages.yml). No editar las carpetas pt/ y he/ a mano."""
import os, re, shutil, html

D = 'https://mari-and-dana.com'
PAGINAS = ['index.html', 'travelguide/index.html', 'travelguide/comer/index.html']
OG = {
  'pt': {
    'index.html': ('Mari &amp; Dana · Vamos nos casar!', '13 de dezembro de 2026 · Toda Flor, Punta del Este, Uruguai. Confirme sua presença e veja todos os detalhes.', 'og-invitacion-pt.jpg'),
    'travelguide/index.html': ('Guia das noivas · Punta del Este', 'Tudo o que você precisa saber sobre Punta del Este, contado por Mari e Dana: como chegar, o que fazer e onde comer.', 'og-guia-pt.jpg'),
    'travelguide/comer/index.html': ('Onde comer · Guia das noivas', 'Os lugares de Mari e Dana por região: Punta del Este, La Barra, Manantiales e José Ignacio, com mapa.', 'og-comer-pt.jpg'),
    '_locale': 'pt_BR', '_lang': 'pt-BR',
  },
  'he': {
    'index.html': ('מרי ודנה · מתחתנות!', '13 בדצמבר 2026 · Toda Flor, פונטה דל אסטה, אורוגוואי. אשרו הגעה וראו את כל הפרטים.', 'og-invitacion-he.jpg'),
    'travelguide/index.html': ('המדריך של הכלות · פונטה דל אסטה', 'כל מה שצריך לדעת על פונטה דל אסטה, מפי מרי ודנה: איך מגיעים, מה עושים ואיפה אוכלים.', 'og-guia-he.jpg'),
    'travelguide/comer/index.html': ('איפה אוכלים · המדריך של הכלות', 'המקומות של מרי ודנה לפי אזור: פונטה דל אסטה, לה בארה, מננטיאלס וחוסה איגנסיו, עם מפה.', 'og-comer-he.jpg'),
    '_locale': 'he_IL', '_lang': 'he',
  },
}
ATTRS = r'(src|href|data-src-es|data-src-pt|data-src-he)'
ES_PAGINAS = {'travelguide/', 'comer/', '../', '../../', '#'}

def es_asset(v):
    """True si el valor es un recurso (css/js/img) que hay que subir un nivel."""
    if re.match(r'^(https?:|//|#|mailto:|data:)', v): return False
    if v.endswith('/') : return False          # link a otra página del sitio: queda dentro de /xx/
    return True

def generar(lang):
    cfg = OG[lang]
    for pag in PAGINAS:
        s = open(pag, encoding='utf-8').read()
        # recursos (css/js/img): misma ruta absoluta, relativa desde la página generada
        origen = os.path.dirname(pag); destino = os.path.join(lang, origen)
        def reubicar(m):
            v = m.group(2)
            if not es_asset(v): return m.group(0)
            objetivo = os.path.normpath(os.path.join(origen, v))
            return f'{m.group(1)}="{os.path.relpath(objetivo, destino or ".")}"'
        s = re.sub(ATTRS + r'="([^"]*)"', reubicar, s)
        # idioma por defecto
        s = s.replace('<html lang="es"', f'<html lang="{cfg["_lang"]}" data-lang-default="{lang}"', 1)
        # metadatos del preview
        t, d, img = cfg[pag]
        url = f'{D}/{lang}/' + pag.replace('index.html', '')
        imgurl = f'{D}/img/{img}'
        rep = {
          r'<meta name="description" content="[^"]*">': f'<meta name="description" content="{d}">',
          r'<meta property="og:url" content="[^"]*">': f'<meta property="og:url" content="{url}">',
          r'<meta property="og:title" content="[^"]*">': f'<meta property="og:title" content="{t}">',
          r'<meta property="og:description" content="[^"]*">': f'<meta property="og:description" content="{d}">',
          r'<meta property="og:image" content="[^"]*">': f'<meta property="og:image" content="{imgurl}">',
          r'<meta property="og:image:secure_url" content="[^"]*">': f'<meta property="og:image:secure_url" content="{imgurl}">',
          r'<meta property="og:image:alt" content="[^"]*">': f'<meta property="og:image:alt" content="{t}">',
          r'<meta property="og:locale" content="[^"]*">': f'<meta property="og:locale" content="{cfg["_locale"]}">',
          r'<meta name="twitter:title" content="[^"]*">': f'<meta name="twitter:title" content="{t}">',
          r'<meta name="twitter:description" content="[^"]*">': f'<meta name="twitter:description" content="{d}">',
          r'<meta name="twitter:image" content="[^"]*">': f'<meta name="twitter:image" content="{imgurl}">',
        }
        for pat, new in rep.items():
            s, n = re.subn(pat, new, s, count=1)
            assert n == 1, (lang, pag, pat)
        s = s.replace('<!doctype html>', '<!doctype html>\n<!-- Generado por build-idiomas.py a partir de ' + pag + '. No editar. -->', 1)
        out = os.path.join(lang, pag)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, 'w', encoding='utf-8').write(s)
        print('✓', out)

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    for lang in OG:
        if os.path.isdir(lang): shutil.rmtree(lang)
        generar(lang)
