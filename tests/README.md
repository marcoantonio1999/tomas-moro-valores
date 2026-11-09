# Verificación de la rúbrica

Ejecutar `node --test tests/values.test.mjs` y `npm run build`.

Para la prueba de interfaz, iniciar `npm run preview -- --host 127.0.0.1 --port 4189` después de compilar, y ejecutar `node tests/browser.mjs` con Playwright y Chrome instalados. Se puede indicar `PLAYWRIGHT_MODULE` con la ruta del módulo. La prueba usa un navegador aislado y solo datos ficticios: comprueba los cinco valores, guardar/recargar, controles de 44 px y ausencia de desbordamiento en 320/390/1440 px. Las capturas quedan en `test-results/`, fuera de Git.

La rúbrica solicitada sustituye los cinco criterios de la demostración anterior. Las evaluaciones nuevas se almacenan localmente bajo `tomas-moro-values-v3`. La clave anterior `tomas-moro-values-v2` no se elimina ni se convierte: asistencia o actitud no son equivalentes a fraternidad o sencillez, y no se reinterpretan sus calificaciones. Los ejemplos incluidos son ficticios y ya utilizan las claves nuevas.
