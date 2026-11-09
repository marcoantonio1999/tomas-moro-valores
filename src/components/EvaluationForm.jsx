import { Save } from "lucide-react";
import { valuesCatalog } from "../data/demoData";
import { SchoolShield } from "./SchoolShield";

export function EvaluationForm({ student, scores, setScores, notes, setNotes, onSave }) {
  return (
    <section className="rounded-3xl border border-moro-100 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="evaluation-identity">
            <SchoolShield decorative />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-moro-700">Nueva evaluacion</p>
              <h2 className="text-2xl font-black text-slate-950">{student.name}</h2>
              <p className="text-sm text-slate-500">{student.group} - {student.grade}</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-moro-800 px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-moro-700"
        >
          <Save className="h-4 w-4" />
          Guardar evaluacion
        </button>
      </div>
      <div className="mt-6 grid gap-4">
        {valuesCatalog.map((value) => (
          <div key={value.key} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className={`text-lg font-black text-slate-950 ${value.fontClass}`}>{value.label}</p>
                <p className="mt-1 max-w-2xl text-sm text-slate-500">{value.description}</p>
              </div>
              <span className="shrink-0 rounded-2xl bg-white px-3 py-2 text-lg font-black text-moro-800 shadow-sm">
                {scores[value.key]}
              </span>
            </div>
            <input
              aria-label={value.label}
              type="range"
              min="0"
              max="100"
              value={scores[value.key]}
              onChange={(event) => setScores((current) => ({ ...current, [value.key]: Number(event.target.value) }))}
              className="score-slider mt-4 min-h-11 w-full"
            />
          </div>
        ))}
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-bold text-slate-700">Notas del coach</span>
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows="3"
          placeholder="Ej. Mostro liderazgo al ayudar a ordenar el material."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-moro-500"
        />
      </label>
    </section>
  );
}
