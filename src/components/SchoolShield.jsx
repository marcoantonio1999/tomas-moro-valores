// Display the actual chest emblem from the supplied artwork, not an AI redraw.
// Keep the source intact: this viewport and clip only affect its presentation.
export function SchoolShield({ className = '', decorative = false }) {
  return (
    <svg
      className={`school-shield ${className}`}
      viewBox="216 212 98 116"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : 'Escudo del Colegio Franco Inglés'}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <image href={`${import.meta.env.BASE_URL}canguro-colegio.png`} x="0" y="0" width="500" height="665" />
    </svg>
  );
}
