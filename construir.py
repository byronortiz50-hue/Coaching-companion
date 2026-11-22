"""Genera coaching-companion.html: toda la herramienta en UN solo archivo.

Úsalo después de editar algo en datos/, js/ o css/:
    python construir.py
El resultado se puede enviar por correo o chat y abrir con doble clic.
"""
import re
from pathlib import Path

raiz = Path(__file__).parent
html = (raiz / "index.html").read_text(encoding="utf-8")

def css(m):
    return "<style>\n" + (raiz / m.group(1)).read_text(encoding="utf-8") + "\n</style>"

def js(m):
    codigo = (raiz / m.group(1)).read_text(encoding="utf-8").replace("</script", "<\\/script")
    return "<script>/* " + m.group(1) + " */\n" + codigo + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)
html = html.replace("<head>", "<head>\n  <!-- Archivo generado con construir.py. Para editar, cambia los archivos de datos/ y vuelve a generarlo. -->", 1)
(raiz / "coaching-companion.html").write_text(html, encoding="utf-8")
print("Listo: coaching-companion.html")
