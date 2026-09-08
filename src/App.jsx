import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Leaf, Users, TrendingUp, Check } from 'lucide-react';
import { StudentList } from './components/StudentList';
import { EvaluationForm } from './components/EvaluationForm';
import { Leaderboard } from './components/Leaderboard';
import { RadarValues } from './components/RadarValues';
import { ValueTrend } from './components/ValueTrend';
import { initialAssessments, students, valuesCatalog } from './data/demoData';
import { buildLeaderboard, getLatestAssessment, getStudentAverage, trendForStudent, valueAverages } from './utils/scoring';
const KEY = 'tomas-moro-values-v2';
function load() { try { const data = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(data) && data.every(a => a.studentId && a.scores && a.date) ? data : initialAssessments; } catch { return initialAssessments; } }
function defaults(id, assessments) { const latest = getLatestAssessment(id, assessments); return Object.fromEntries(valuesCatalog.map(v => [v.key, latest?.scores[v.key] ?? 75])); }
export default function App() {
  const [assessments,setAssessments] = useState(load);
  const [selectedId,setSelectedId] = useState(students[0].id);
  const [query,setQuery] = useState('');
  const [group,setGroup] = useState('Todos');
  const [tab,setTab] = useState('overview');
  const [notes,setNotes] = useState('');
  const [saved,setSaved] = useState(false);
  const [scores,setScores] = useState(() => defaults(students[0].id,assessments));
  const student = students.find(s => s.id === selectedId);
  const rows = useMemo(() => buildLeaderboard(students,assessments),[assessments]);
  const values = useMemo(() => valueAverages(assessments),[assessments]);
  const mean = Math.round(rows.reduce((a,s) => a+s.score,0)/rows.length);
  const score = getStudentAverage(selectedId,assessments);
  useEffect(() => { try {localStorage.setItem(KEY,JSON.stringify(assessments));} catch {} },[assessments]);
  function select(id) { setSelectedId(id);setScores(defaults(id,assessments));setNotes('');setSaved(false); }
  function save() { setAssessments(a => [...a,{id:crypto.randomUUID(),studentId:selectedId,date:new Date().toISOString().slice(0,10),evaluator:'Coach demo',scores:{...scores},notes}]);setSaved(true); }
  return <div className="moro-app">
    <header className="moro-header"><a className="moro-brand" href="#"><img src="./logo-tomas-moro.png" alt="Escudo Tomás Moro"/><span>Tomás Moro<small>FORMACIÓN EN VALORES</small></span></a><span className="header-caption">Crecer como equipo. Formarse como personas.</span><span className="demo-pill"><i/> Demo interactiva</span></header>
    <main className="moro-main">
      <section className="moro-intro"><div><p className="kicker">EL CRECIMIENTO QUE IMPORTA</p><h1>Cada valor <em>cuenta.</em></h1><p>Una mirada al desarrollo de cada alumno.<br/>Para acompañar hoy lo que será mañana.</p></div><div className="intro-seal" aria-hidden="true"><Leaf size={30} strokeWidth={1.3}/><span>FORMAR<br/>PARA LA VIDA</span></div></section>
      <div className="metrics-strip">
        <div><span><TrendingUp size={15}/> Promedio general</span><strong>{mean}<small>/100</small></strong><p>Última evaluación por alumno</p></div>
        <div><span><Users size={15}/> Alumnos</span><strong>{students.length.toString().padStart(2,'0')}</strong><p>Tres grupos, un mismo propósito</p></div>
        <div><span><Leaf size={15}/> Fortaleza del grupo</span><strong className="metric-word">{[...values].sort((a,b)=>b.score-a.score)[0].label}</strong><p>El valor con mayor promedio</p></div>
        <div><span><ArrowUpRight size={15}/> Acompañamiento</span><strong>{rows.filter(s=>s.score<70).length.toString().padStart(2,'0')}</strong><p>Alumnos con menos de 70 puntos</p></div>
      </div>
      <div className="dashboard-layout"><StudentList students={students} assessments={assessments} selectedId={selectedId} onSelect={select} query={query} onQueryChange={setQuery} group={group} onGroupChange={setGroup}/>
        <div className="student-workspace"><section className="student-hero"><div><p className="kicker">SU HISTORIA, EN PROGRESO</p><h2>{student.name}</h2><p>{student.group} <span>·</span> {student.grade}</p><small>Responsable de ejemplo: {student.guardian}</small></div><div className="score-ring" style={{'--score':score*3.6+'deg'}}><div><strong>{score}</strong><span>DE 100</span></div></div></section>
          <div className="workspace-nav" role="tablist" aria-label="Seguimiento del alumno"><button role="tab" aria-selected={tab==='overview'} onClick={()=>setTab('overview')}>Resumen del alumno</button><button role="tab" aria-selected={tab==='evaluation'} onClick={()=>setTab('evaluation')}>Nueva evaluación <span>+</span></button></div>
          {tab==='overview' ? <div role="tabpanel" aria-label="Resumen del alumno"><div className="charts-grid"><RadarValues scores={defaults(selectedId,assessments)}/><ValueTrend trend={trendForStudent(selectedId,assessments)}/></div><div className="group-grid"><section className="values-card"><p className="kicker">UNA VISIÓN COMPARTIDA</p><h2>El pulso del grupo.</h2><p className="muted-copy">Promedios de la última evaluación de cada alumno.</p><div className="value-bars">{values.map(v=><div key={v.key}><div><span>{v.label}</span><strong>{v.score}<small>/100</small></strong></div><div className="value-track"><i style={{width:v.score+'%'}}/></div></div>)}</div></section><Leaderboard rows={rows}/></div></div> : <div role="tabpanel" aria-label="Nueva evaluación">{saved&&<p className="save-feedback" role="status"><Check size={18}/> Evaluación guardada en este navegador. El resumen ya está actualizado.</p>}<EvaluationForm student={student} scores={scores} setScores={fn=>{setScores(fn);setSaved(false);}} notes={notes} setNotes={setNotes} onSave={save}/></div>}
        </div></div>
      <footer className="moro-footer"><span>Tomás Moro <b>·</b> El valor de acompañar.</span><span>Demo con datos ficticios. Los cambios se guardan en este navegador.</span><span>Diseño y tecnología por <strong>FTS</strong></span></footer>
    </main></div>;
}

