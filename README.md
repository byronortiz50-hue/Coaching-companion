# Coaching Companion

Herramienta para que los supervisores den sesiones de coaching más efectivas a los representantes de servicio al cliente.

## Por qué así

Los computadores corporativos tienen restricciones (no se pueden instalar programas ni usar servidores), así que la herramienta es **HTML autónomo**: archivos que se abren directamente en el navegador, sin instalación y sin conexión a internet.

Está dividida en **varias secciones pequeñas** para que sea fácil de mantener, revisar y compartir.

## Métricas que cubrirá

- **NPS**: Net Promoter Score.
- **7D FCR**: resolución en el primer contacto (el cliente no vuelve a llamar antes de 7 días).
- **Stay Connected**: cobro a clientes con saldo vencido (past due).
- **CRT**: tiempo de resolución del cliente (Customer Resolution Time).
- **HSE**: cambios de garantía.
- **C&A/100**: créditos o ajustes por cada 100 llamadas.

## Cómo usarla

1. Descarga o copia la carpeta completa (con `css/`, `datos/` y `js/`).
2. Abre `index.html` con doble clic. No necesita internet, servidor ni instalación.

El asistente guía la sesión en 5 pasos:

1. **Behavior**: elegir el behavior a trabajar (filtrable por métrica).
2. **Preguntas GROW**: preguntas de autodescubrimiento sugeridas para Goal, Reality, Options y Way forward, propias del behavior y generales. En Reality hay preguntas para descubrir la causa raíz. Se marcan las preguntas hechas y se anotan las respuestas.
3. **Causa raíz**: marcar señales observadas; la herramienta sugiere la causa más probable (Knowledge, Skill, Will, Confidence) y el supervisor la confirma.
4. **Opciones de ayuda**: según la causa raíz y el estilo de aprendizaje (visual, auditivo, lectura/escritura, kinestésico).
5. **Plan SMART**: borrador automático, revisión rápida de cada criterio y resumen para copiar o imprimir.

El progreso se guarda como borrador en el navegador del supervisor. **No es un sistema de registro**: el resumen final se copia a la herramienta donde ya registran las sesiones.

## Estructura

```
index.html                 Página principal (solo carga las piezas)
css/estilos.css            Estilos
datos/behaviors.js         ← Behaviors y sus preguntas (EDITAR AQUÍ)
datos/preguntas-grow.js    Preguntas generales por etapa GROW
datos/causas-raiz.js       Señales, preguntas y opciones de ayuda por causa raíz
datos/estilos-aprendizaje.js  Estilos de aprendizaje (VARK)
js/app.js                  Estado, guardado y navegación
js/pasos/1-…5-*.js         Una sección por paso
js/inicio.js               Arranque
```

## Cómo editar el contenido

Todo el contenido está en `datos/`. Se puede abrir con el Bloc de notas: cada archivo explica sus campos al inicio. Para agregar un behavior, copia un bloque `{ ... }` en `datos/behaviors.js` y cambia el texto.

## Estado

Primera versión. Los behaviors son **de ejemplo** (marcados como EJEMPLO) hasta tener la lista oficial.
