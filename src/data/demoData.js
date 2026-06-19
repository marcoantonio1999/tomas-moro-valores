export const valuesCatalog = [
  {
    key: "asistencia",
    label: "Asistencia",
    short: "ASI",
    fontClass: "font-respect",
    description: "Constancia para llegar, participar y mantenerse presente en las actividades del colegio."
  },
  {
    key: "companierismo",
    label: "Compañerismo",
    short: "COM",
    fontClass: "font-fellowship",
    description: "Ayuda al grupo, integra a otros y entiende que crecer tambien es colaborar."
  },
  {
    key: "esfuerzo",
    label: "Esfuerzo",
    short: "ESF",
    fontClass: "font-responsibility",
    description: "Da lo mejor de si, intenta mejorar y sostiene el trabajo aunque el reto sea dificil."
  },
  {
    key: "actitud",
    label: "Actitud",
    short: "ACT",
    fontClass: "font-discipline",
    description: "Muestra disposicion positiva, apertura a corregir y energia constructiva."
  },
  {
    key: "respeto",
    label: "Respeto",
    short: "RES",
    fontClass: "font-honesty",
    description: "Escucha, cuida el lenguaje y trata bien a compañeros, maestros y rivales."
  }
];

export const students = [
  { id: "s1", name: "Isabella Ramirez", group: "Sub-10 A", grade: "5 Primaria", guardian: "Paola Ramirez", initials: "IR", color: "bg-moro-700" },
  { id: "s2", name: "Mateo Lopez", group: "Sub-10 A", grade: "5 Primaria", guardian: "Sergio Lopez", initials: "ML", color: "bg-emerald-600" },
  { id: "s3", name: "Sofia Hernandez", group: "Sub-10 A", grade: "4 Primaria", guardian: "Laura Hernandez", initials: "SH", color: "bg-lime-700" },
  { id: "s4", name: "Carlos Ruiz", group: "Sub-12 B", grade: "6 Primaria", guardian: "Daniela Ruiz", initials: "CR", color: "bg-teal-700" },
  { id: "s5", name: "Leonardo Salas", group: "Sub-12 B", grade: "1 Secundaria", guardian: "Miguel Salas", initials: "LS", color: "bg-moro-800" },
  { id: "s6", name: "Valentina Vega", group: "Sub-12 B", grade: "6 Primaria", guardian: "Andrea Vega", initials: "VV", color: "bg-green-700" },
  { id: "s7", name: "Emiliano Cruz", group: "Sub-14 A", grade: "2 Secundaria", guardian: "Roberto Cruz", initials: "EC", color: "bg-emerald-800" },
  { id: "s8", name: "Regina Torres", group: "Sub-14 A", grade: "2 Secundaria", guardian: "Mariana Torres", initials: "RT", color: "bg-moro-600" }
];

export const initialAssessments = [
  {
    id: "a1",
    studentId: "s1",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Buena disposicion para escuchar y corregir.",
    scores: { asistencia: 92, companierismo: 94, esfuerzo: 88, actitud: 86, respeto: 90 }
  },
  {
    id: "a2",
    studentId: "s2",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Necesita controlar frustracion cuando pierde el balon.",
    scores: { asistencia: 72, companierismo: 70, esfuerzo: 74, actitud: 68, respeto: 82 }
  },
  {
    id: "a3",
    studentId: "s3",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Gran actitud de apoyo con ninas nuevas.",
    scores: { asistencia: 89, companierismo: 96, esfuerzo: 87, actitud: 84, respeto: 91 }
  },
  {
    id: "a4",
    studentId: "s4",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Se distrae en ejercicios largos, pero responde bien al seguimiento.",
    scores: { asistencia: 78, companierismo: 82, esfuerzo: 76, actitud: 71, respeto: 80 }
  },
  {
    id: "a5",
    studentId: "s5",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Lider positivo en calentamiento y orden del grupo.",
    scores: { asistencia: 90, companierismo: 87, esfuerzo: 91, actitud: 93, respeto: 88 }
  },
  {
    id: "a6",
    studentId: "s6",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Debe mejorar puntualidad y cuidado de material.",
    scores: { asistencia: 81, companierismo: 79, esfuerzo: 63, actitud: 66, respeto: 84 }
  },
  {
    id: "a7",
    studentId: "s7",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Competitivo y honesto, puede mejorar trato al rival.",
    scores: { asistencia: 69, companierismo: 72, esfuerzo: 86, actitud: 84, respeto: 90 }
  },
  {
    id: "a8",
    studentId: "s8",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Muy constante, ayuda a ordenar al equipo.",
    scores: { asistencia: 94, companierismo: 91, esfuerzo: 92, actitud: 90, respeto: 95 }
  },
  {
    id: "a9",
    studentId: "s2",
    date: "2026-05-10",
    evaluator: "Coach Adrian",
    notes: "Seguimiento inicial por disciplina.",
    scores: { asistencia: 68, companierismo: 66, esfuerzo: 70, actitud: 61, respeto: 78 }
  },
  {
    id: "a10",
    studentId: "s6",
    date: "2026-05-12",
    evaluator: "Coach Daniela",
    notes: "Primera evaluacion del grupo.",
    scores: { asistencia: 78, companierismo: 75, esfuerzo: 60, actitud: 62, respeto: 80 }
  }
];
