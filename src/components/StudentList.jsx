import { Search } from "lucide-react";
import { getStudentAverage, statusForScore } from "../utils/scoring";

export function StudentList({ students, assessments, selectedId, onSelect, query, onQueryChange, group, onGroupChange }) {
  const groups = ["Todos", ...Array.from(new Set(students.map((student) => student.group)))];
  const visibleStudents = students.filter((student) => {
    const text = `${student.name} ${student.group} ${student.guardian}`.toLowerCase();
    const matchesSearch = text.includes(query.toLowerCase());
    const matchesGroup = group === "Todos" || student.group === group;
    return matchesSearch && matchesGroup;
  });

  return (
    <aside className="rounded-3xl border border-moro-100 bg-white p-4 shadow-soft">
      <div>
        <h2 className="text-lg font-black text-slate-950">Alumnos</h2>
        <p className="text-sm text-slate-500">Selecciona un alumno para evaluar valores.</p>
      </div>
      <label className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input aria-label="Buscar alumno"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar alumno"
          className="w-full bg-transparent text-sm outline-none"
        />
      </label>
      <select aria-label="Filtrar por grupo"
        value={group}
        onChange={(event) => onGroupChange(event.target.value)}
        className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold outline-none focus:border-moro-500"
      >
        {groups.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <div className="mt-4 space-y-2">
        {visibleStudents.length === 0 && <p className="text-sm text-slate-500 p-3">No hay alumnos que coincidan con la búsqueda.</p>}{visibleStudents.map((student) => {
          const score = getStudentAverage(student.id, assessments);
          const status = statusForScore(score);
          const active = student.id === selectedId;
          return (
            <button
              key={student.id}
              type="button" aria-pressed={active}
              onClick={() => onSelect(student.id)}
              className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                active ? "border-moro-600 bg-moro-50" : "border-transparent hover:border-moro-100 hover:bg-slate-50"
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white ${student.color}`}>
                {student.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-bold text-slate-950">{student.name}</span>
                <span className="block truncate text-sm text-slate-500">{student.group}</span>
              </span>
              <span className={`rounded-full px-2 py-1 text-xs font-black ${status.className}`}>{score}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

