import { valuesCatalog } from "../data/demoData";

function pointFor(index, value, radius = 92, center = 110) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / valuesCatalog.length;
  const scaled = (radius * value) / 100;
  return [center + Math.cos(angle) * scaled, center + Math.sin(angle) * scaled];
}

export function RadarValues({ scores }) {
  const polygon = valuesCatalog.map((value, index) => pointFor(index, scores[value.key] || 0).join(",")).join(" ");
  const outer = valuesCatalog.map((_, index) => pointFor(index, 100).join(",")).join(" ");
  const mid = valuesCatalog.map((_, index) => pointFor(index, 70).join(",")).join(" ");

  return (
    <section className="rounded-3xl border border-moro-100 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-black text-slate-950">Radar de valores</h2>
      <p className="text-sm text-slate-500">Lectura rapida del equilibrio formativo.</p>
      <div className="mt-4 flex justify-center">
        <svg viewBox="0 0 220 220" className="h-64 w-full max-w-sm">
          <polygon points={outer} fill="#f8fafc" stroke="#d1fae5" strokeWidth="2" />
          <polygon points={mid} fill="none" stroke="#bbf7d0" strokeDasharray="4 4" />
          {valuesCatalog.map((value, index) => {
            const [x, y] = pointFor(index, 108);
            const [lineX, lineY] = pointFor(index, 100);
            return (
              <g key={value.key}>
                <line x1="110" y1="110" x2={lineX} y2={lineY} stroke="#dcfce7" />
                <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="fill-slate-600 text-[10px] font-black">
                  {value.short}
                </text>
              </g>
            );
          })}
          <polygon points={polygon} fill="rgba(20, 137, 84, 0.26)" stroke="#0f6f45" strokeWidth="3" />
          {valuesCatalog.map((value, index) => {
            const [x, y] = pointFor(index, scores[value.key] || 0);
            return <circle key={value.key} cx={x} cy={y} r="4" fill="#064b2e" />;
          })}
        </svg>
      </div>
    </section>
  );
}
