import { RotateCcw, ShieldCheck } from "lucide-react";

export function Header({ onReset }) {
  return (
    <header className="sticky top-0 z-20 border-b border-moro-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-2xl border border-moro-100 bg-white p-1 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}logo-tomas-moro.png`}
              alt="Tomas Moro"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-moro-700">
              <ShieldCheck className="h-4 w-4" />
              Evaluacion formativa
            </p>
            <h1 className="text-2xl font-black text-slate-950">Valores Tomas Moro</h1>
          </div>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-moro-200 bg-white px-4 py-3 text-sm font-bold text-moro-800 shadow-sm transition hover:bg-moro-50"
        >
          <RotateCcw className="h-4 w-4" />
          Restaurar demo
        </button>
      </div>
    </header>
  );
}
