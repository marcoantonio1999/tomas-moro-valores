export function ValueTrend({ trend }) {
  const width = 320;
  const height = 120;
  const points = trend.map((item, index) => {
    const x = trend.length === 1 ? width / 2 : (index / (trend.length - 1)) * width;
    const y = height - (item.score / 100) * height;
    return `${x},${y}`;
  });

  return (
    <section className="rounded-3xl border border-moro-100 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-black text-slate-950">Tendencia</h2>
      <p className="text-sm text-slate-500">Evolucion del promedio por evaluacion.</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="mt-5 h-32 w-full overflow-visible">
        <line x1="0" y1="96" x2={width} y2="96" stroke="#fee2e2" strokeDasharray="4 4" />
        <line x1="0" y1="30" x2={width} y2="30" stroke="#dcfce7" strokeDasharray="4 4" />
        {points.length > 1 ? <polyline points={points.join(" ")} fill="none" stroke="#0f6f45" strokeWidth="4" strokeLinecap="round" /> : null}
        {trend.map((item, index) => {
          const [x, y] = points[index].split(",").map(Number);
          return (
            <g key={`${item.date}-${index}`}>
              <circle cx={x} cy={y} r="6" fill="#064b2e" />
              <text x={x} y={y - 12} textAnchor="middle" className="fill-slate-600 text-[10px] font-black">
                {item.score}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {trend.map((item) => (
          <span key={item.date} className="rounded-full bg-moro-50 px-3 py-1 text-xs font-bold text-moro-800">
            {item.date}: {item.score}
          </span>
        ))}
      </div>
    </section>
  );
}
