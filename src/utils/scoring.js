import { valuesCatalog } from "../data/demoData.js";

export function average(values) {
  const nums = Object.values(values || {}).map(Number);
  if (!nums.length) return 0;
  return Math.round(nums.reduce((total, value) => total + value, 0) / nums.length);
}

export function getLatestAssessment(studentId, assessments) {
  return assessments
    .filter((assessment) => assessment.studentId === studentId)
    .reverse()
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
}

export function getStudentAverage(studentId, assessments) {
  const latest = getLatestAssessment(studentId, assessments);
  return latest ? average(latest.scores) : 0;
}

export function statusForScore(score) {
  if (score >= 88) return { label: "Excelente", className: "bg-moro-100 text-moro-800" };
  if (score >= 75) return { label: "Estable", className: "bg-lime-100 text-lime-800" };
  if (score >= 65) return { label: "Seguimiento", className: "bg-amber-100 text-amber-800" };
  return { label: "Riesgo", className: "bg-red-100 text-red-800" };
}

export function buildLeaderboard(students, assessments) {
  return students
    .map((student) => {
      const latest = getLatestAssessment(student.id, assessments);
      const score = latest ? average(latest.scores) : 0;
      return { ...student, score, latest };
    })
    .sort((a, b) => b.score - a.score);
}

export function valueAverages(assessments) {
  const latest = [...new Set(assessments.map(a => a.studentId))].map(id => getLatestAssessment(id, assessments));
  return valuesCatalog.map((value) => {
    const scores = latest.filter(a => a.scores[value.key] != null).map(a => Number(a.scores[value.key])).filter(Number.isFinite);
    const score = scores.length ? Math.round(scores.reduce((sum, item) => sum + item, 0) / scores.length) : 0;
    return { ...value, score };
  });
}

export function trendForStudent(studentId, assessments) {
  return assessments
    .filter((assessment) => assessment.studentId === studentId)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((assessment) => ({
      date: assessment.date,
      score: average(assessment.scores)
    }));
}
