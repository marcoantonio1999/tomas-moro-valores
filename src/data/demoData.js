export const valuesCatalog = [
  {
    key: "respeto",
    label: "Respeto",
    short: "RES",
    fontClass: "font-respect",
    description: "Escucha, cuida el lenguaje y trata bien a companeros, coaches y rivales."
  },
  {
    key: "disciplina",
    label: "Disciplina",
    short: "DIS",
    fontClass: "font-discipline",
    description: "Llega preparado, sigue instrucciones y sostiene habitos dentro y fuera de cancha."
  },
  {
    key: "responsabilidad",
    label: "Responsabilidad",
    short: "RSP",
    fontClass: "font-responsibility",
    description: "Cumple acuerdos, cuida su material y asume consecuencias sin excusas."
  },
  {
    key: "companierismo",
    label: "Companerismo",
    short: "COM",
    fontClass: "font-fellowship",
    description: "Ayuda al equipo, anima a otros y entiende que ganar tambien es colaborar."
  },
  {
    key: "honestidad",
    label: "Honestidad",
    short: "HON",
    fontClass: "font-honesty",
    description: "Dice la verdad, reconoce faltas y juega limpio aun cuando nadie mira."
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
    scores: { respeto: 92, disciplina: 86, responsabilidad: 88, companierismo: 94, honestidad: 90 }
  },
  {
    id: "a2",
    studentId: "s2",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Necesita controlar frustracion cuando pierde el balon.",
    scores: { respeto: 72, disciplina: 68, responsabilidad: 74, companierismo: 70, honestidad: 82 }
  },
  {
    id: "a3",
    studentId: "s3",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Gran actitud de apoyo con ninas nuevas.",
    scores: { respeto: 89, disciplina: 84, responsabilidad: 87, companierismo: 96, honestidad: 91 }
  },
  {
    id: "a4",
    studentId: "s4",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Se distrae en ejercicios largos, pero responde bien al seguimiento.",
    scores: { respeto: 78, disciplina: 71, responsabilidad: 76, companierismo: 82, honestidad: 80 }
  },
  {
    id: "a5",
    studentId: "s5",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Lider positivo en calentamiento y orden del grupo.",
    scores: { respeto: 90, disciplina: 93, responsabilidad: 91, companierismo: 87, honestidad: 88 }
  },
  {
    id: "a6",
    studentId: "s6",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Debe mejorar puntualidad y cuidado de material.",
    scores: { respeto: 81, disciplina: 66, responsabilidad: 63, companierismo: 79, honestidad: 84 }
  },
  {
    id: "a7",
    studentId: "s7",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Competitivo y honesto, puede mejorar trato al rival.",
    scores: { respeto: 69, disciplina: 84, responsabilidad: 86, companierismo: 72, honestidad: 90 }
  },
  {
    id: "a8",
    studentId: "s8",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Muy constante, ayuda a ordenar al equipo.",
    scores: { respeto: 94, disciplina: 90, responsabilidad: 92, companierismo: 91, honestidad: 95 }
  },
  {
    id: "a9",
    studentId: "s2",
    date: "2026-05-10",
    evaluator: "Coach Adrian",
    notes: "Seguimiento inicial por disciplina.",
    scores: { respeto: 68, disciplina: 61, responsabilidad: 70, companierismo: 66, honestidad: 78 }
  },
  {
    id: "a10",
    studentId: "s6",
    date: "2026-05-12",
    evaluator: "Coach Daniela",
    notes: "Primera evaluacion del grupo.",
    scores: { respeto: 78, disciplina: 62, responsabilidad: 60, companierismo: 75, honestidad: 80 }
  }
];
