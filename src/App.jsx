import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Users } from "lucide-react";
import { Header } from "./components/Header";
import { MetricCard } from "./components/MetricCard";
import { StudentList } from "./components/StudentList";
import { EvaluationForm } from "./components/EvaluationForm";
import { Leaderboard } from "./components/Leaderboard";
import { RadarValues } from "./components/RadarValues";
import { ValueTrend } from "./components/ValueTrend";
import { initialAssessments, students, valuesCatalog } from "./data/demoData";
import { average, buildLeaderboard, getLatestAssessment, getStudentAverage, trendForStudent, valueAverages } from "./utils/scoring";

const STORAGE_KEY = "tomas-moro-values-v2";

function readStorage() {
  try {
    return typeof window !== "undefined" && window.localStorage ? window.localStorage.getItem(STORAGE_KEY) : null;
  } catch {
    return null;
  }
}

function writeStorage(value) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  } catch {
    // Some embedded browsers disable localStorage; the app still works in memory.
  }
}

function loadAssessments() {
  const saved = readStorage();
  return saved ? JSON.parse(saved) : initialAssessments;
}

function createDefaultScores(studentId, assessments) {
  const latest = getLatestAssessment(studentId, assessments);
  const defaults = Object.fromEntries(valuesCatalog.map((value) => [value.key, 75]));
  if (!latest?.scores) return defaults;
  return Object.fromEntries(valuesCatalog.map((value) => [value.key, latest.scores[value.key] ?? defaults[value.key]]));
}

export default function App() {
  const [assessments, setAssessments] = useState(loadAssessments);
  const [selectedId, setSelectedId] = useState(students[0].id);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("Todos");
  const [notes, setNotes] = useState("");
  const [scores, setScores] = useState(() => createDefaultScores(students[0].id, loadAssessments()));

  const selectedStudent = students.find((student) => student.id === selectedId) || students[0];
  const leaderboard = useMemo(() => buildLeaderboard(students, assessments), [assessments]);
  const values = useMemo(() => valueAverages(assessments), [assessments]);
  const studentTrend = useMemo(() => trendForStudent(selectedId, assessments), [selectedId, assessments]);
  const globalAverage = Math.round(leaderboard.reduce((sum, student) => sum + student.score, 0) / leaderboard.length);
  const riskCount = leaderboard.filter((student) => student.score < 70).length;
  const topValue = values.sort((a, b) => b.score - a.score)[0];
  const selectedAverage = getStudentAverage(selectedId, assessments);

  useEffect(() => {
    writeStorage(assessments);
  }, [assessments]);

  useEffect(() => {
    setScores(createDefaultScores(selectedId, assessments));
    setNotes("");
  }, [selectedId]);

  function saveAssessment() {
    const newAssessment = {
      id: crypto.randomUUID(),
      studentId: selectedId,
      date: new Date().toISOString().slice(0, 10),
      evaluator: "Coach demo",
      notes,
      scores
    };
    setAssessments((current) => [...current, newAssessment]);
  }

  return (
    <div className="min-h-screen bg-[#f6faf7] soft-grid">
      <Header />
      <main className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[340px_1fr]">
        <StudentList
          students={students}
          assessments={assessments}
          selectedId={selectedId}
          onSelect={setSelectedId}
          query={query}
          onQueryChange={setQuery}
          group={group}
          onGroupChange={setGroup}
        />
        <section className="grid min-w-0 gap-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="Promedio general" value={`${globalAverage}/100`} detail="Ultima evaluacion por alumno" />
            <MetricCard label="Alumnos evaluados" value={students.length} detail="Demo local Tomas Moro" tone="slate" />
            <MetricCard label="Valor mas fuerte" value={topValue.label} detail={`${topValue.score}/100 promedio`} />
            <MetricCard label="En seguimiento" value={riskCount} detail="Menos de 70 puntos" tone={riskCount ? "amber" : "green"} />
          </div>
          <section className="rounded-3xl border border-moro-100 bg-moro-900 p-5 text-white shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-moro-200">Alumno seleccionado</p>
                <h2 className="mt-1 text-3xl font-black">{selectedStudent.name}</h2>
                <p className="mt-1 text-moro-100">{selectedStudent.group} - Responsable: {selectedStudent.guardian}</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black">
                  <Users className="h-4 w-4" />
                  {selectedStudent.grade}
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-moro-900">
                  {selectedAverage >= 70 ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  {selectedAverage}/100
                </span>
              </div>
            </div>
          </section>
          <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
            <Leaderboard rows={leaderboard} />
            <section className="rounded-3xl border border-moro-100 bg-white p-5 shadow-soft">
              <h2 className="text-xl font-black text-slate-950">Promedio por valor</h2>
              <p className="text-sm text-slate-500">Detecta fortalezas y areas formativas del grupo.</p>
              <div className="mt-5 grid gap-3">
                {values.map((value) => (
                  <div key={value.key}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className={`font-black text-slate-800 ${value.fontClass}`}>{value.label}</p>
                      <p className="text-sm font-black text-moro-800">{value.score}/100</p>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-moro-700 transition-all duration-700" style={{ width: `${value.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            <RadarValues scores={scores} />
            <ValueTrend trend={studentTrend} />
          </div>
          <section className="grid gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-moro-700">Captura mensual</p>
              <h2 className="text-2xl font-black text-slate-950">Nueva evaluación</h2>
              <p className="text-sm text-slate-500">
                Registra una evaluación nueva sólo cuando el coach cierre el seguimiento del alumno.
              </p>
            </div>
            <EvaluationForm
              student={selectedStudent}
              scores={scores}
              setScores={setScores}
              notes={notes}
              setNotes={setNotes}
              onSave={saveAssessment}
            />
          </section>
        </section>
      </main>
    </div>
  );
}
