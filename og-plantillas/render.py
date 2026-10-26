"""Renderiza og-plantillas/*.html a img/og-*.jpg (1200x630) con Chrome headless."""
import glob, os, subprocess, tempfile
from PIL import Image
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
aqui = os.path.dirname(os.path.abspath(__file__)); web = os.path.dirname(aqui)
for html in sorted(glob.glob(os.path.join(aqui, 'og-*.html'))):
    nombre = os.path.splitext(os.path.basename(html))[0]
    png = os.path.join(tempfile.gettempdir(), nombre + '.png')
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
                    '--window-size=1200,630', '--virtual-time-budget=8000', f'--screenshot={png}', 'file://' + html],
                   capture_output=True)
    Image.open(png).convert('RGB').save(os.path.join(web, 'img', nombre + '.jpg'), quality=86, optimize=True, progressive=True)
    print('✓', nombre)
