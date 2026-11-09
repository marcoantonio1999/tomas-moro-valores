// Standalone transparent restoration of the supplied chest emblem.
// Do not crop it with CSS: the complete outline must remain visible.
export function SchoolShield({ className = '', decorative = false }) {
  return (
    <img
      className={`school-shield ${className}`}
      src={`${import.meta.env.BASE_URL}escudo-colegio-transparente.png`}
      alt={decorative ? '' : 'Escudo del Colegio Franco Inglés'}
      aria-hidden={decorative ? true : undefined}
      decoding="async"
    />
  );
}
