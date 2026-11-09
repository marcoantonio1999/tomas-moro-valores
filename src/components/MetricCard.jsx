export function MetricCard({ label, value, detail, tone = "green" }) {
  const tones = {
    green: "border-moro-100 bg-white text-moro-800",
    amber: "border-amber-100 bg-amber-50 text-amber-800",
    slate: "border-slate-200 bg-white text-slate-800",
    red: "border-red-100 bg-red-50 text-red-800"
  };

  return (
    <section className={`min-w-0 rounded-3xl border p-5 shadow-soft ${tones[tone]}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">{label}</p>
      <p className="mt-3 break-words text-3xl font-black">{value}</p>
      {detail ? <p className="mt-2 text-sm opacity-70">{detail}</p> : null}
    </section>
  );
}
