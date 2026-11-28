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

# Versión para publicar como artifact de Claude (el visor agrega doctype/head/body
# y no permite imprimir).
import sys
if "--artifact" in sys.argv:
    destino = Path(sys.argv[sys.argv.index("--artifact") + 1])
    cuerpo = html
    cuerpo = re.sub(r"<!doctype html>\s*<html[^>]*>\s*<head>", "", cuerpo, count=1, flags=re.I)
    cuerpo = re.sub(r'<meta charset="utf-8">\s*<meta name="viewport"[^>]*>', "", cuerpo, count=1)
    cuerpo = cuerpo.replace("</head>\n<body>", "", 1)
    cuerpo = re.sub(r"</body>\s*</html>\s*$", "", cuerpo)
    cuerpo = cuerpo.replace("<script>/* datos/metricas.js */", "<script>window.CC = window.CC || {}; CC.sinImprimir = true;</script>\n  <script>/* datos/metricas.js */", 1)
    destino.write_text(cuerpo, encoding="utf-8")
    print("Listo:", destino)
