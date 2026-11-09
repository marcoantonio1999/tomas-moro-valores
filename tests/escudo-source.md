# Escudo independiente

- Original suministrado por el usuario: `public/canguro-colegio.png`.
- Recurso final: `public/escudo-colegio-transparente.png` (PNG RGBA; fondo transparente).
- Método: herramienta integrada de edición de imágenes, usando el original como referencia. Es una reproducción restaurada del emblema de la camiseta, no un archivo oficial vectorial del colegio.
- El canguro original se conserva sin cambios. La interfaz muestra el escudo completo mediante `img` y `object-fit: contain`, sin SVG de recorte ni `clip-path`.

## Prompt utilizado

Use case: background-extraction / faithful logo restoration. Input image is the edit target. Isolate ONLY the complete school shield on the adult kangaroo's chest (approximately x=217..313, y=213..325 of the 500x665 input). Output ONE centered standalone large, clean, flat, front-facing school crest on a genuinely transparent background with modest transparent padding. Remove every trace of the kangaroo, jersey, navy fabric surrounding the crest, folds, other logos and shadows. Preserve the actual shield design faithfully: peaked yellow upper section, small blue Marist floral mark, blue year '1906', narrow white horizontal school-name band with EXACT text 'COLEGIO FRANCO INGLÉS', blue/red/white heraldic lower section with French tricolor on viewer left and Union Jack on viewer right, complete white-and-blue outer border ending in a pointed base. Follow the supplied badge shape and proportions, not a generic shield. Carefully reconstruct crisp consistent edges where the low-resolution original needs refinement. Do not cut off any part of the outer border. No extra text, no invented ornamentation, no mockup, no clothing, no background rectangle, no glow, no drop shadow. This is a faithful clean reproduction of the supplied emblem, not a redesign.
