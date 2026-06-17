import { Trophy } from "lucide-react";
import { statusForScore } from "../utils/scoring";

export function Leaderboard({ rows }) {
  return (
    <section className="rounded-3xl border border-moro-100 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-950">Leaderboard de valores</h2>
          <p className="text-sm text-slate-500">Ordenado por promedio de la evaluacion mas reciente.</p>
        </div>
        <Trophy className="h-6 w-6 text-amber-500" />
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
        {rows.map((row, index) => {
          const status = statusForScore(row.score);
          return (
            <div key={row.id} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b border-slate-100 p-3 last:border-b-0">
              <span className="text-center text-lg font-black text-moro-800">{index + 1}</span>
              <div className="min-w-0">
                <p className="truncate font-bold text-slate-950">{row.name}</p>
                <p className="truncate text-sm text-slate-500">{row.group}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-sm font-black ${status.className}`}>{row.score}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
