export const valuesCatalog = [
  {
    key: "fraternidad",
    label: "Fraternidad",
    short: "FRA",
    fontClass: "font-respect",
    description: "Acoge e incluye a sus compañeros, ofrece ayuda y colabora por el bien del grupo."
  },
  {
    key: "alegria",
    label: "Alegría",
    short: "ALE",
    fontClass: "font-fellowship",
    description: "Participa con entusiasmo y comparte una actitud positiva, sin burlarse ni excluir a otros."
  },
  {
    key: "esfuerzo_perseverancia_superacion",
    label: "Esfuerzo, perseverancia y superación",
    short: "EPS",
    fontClass: "font-responsibility",
    description: "Da lo mejor de sí, persevera ante las dificultades y aprende de sus errores para superarse."
  },
  {
    key: "sencillez",
    label: "Sencillez",
    short: "SEN",
    fontClass: "font-discipline",
    description: "Reconoce sus logros sin presumir, acepta orientación y valora las aportaciones de los demás."
  },
  {
    key: "respeto_juego_limpio",
    label: "Respeto y juego limpio",
    short: "RJL",
    fontClass: "font-honesty",
    description: "Trata con respeto a compañeros, maestros y rivales; cumple las reglas y actúa con honestidad al ganar o perder."
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
scores: { fraternidad: 92, alegria: 94, esfuerzo_perseverancia_superacion: 88, sencillez: 86, respeto_juego_limpio: 90 }
  },
  {
    id: "a2",
    studentId: "s2",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Necesita controlar frustracion cuando pierde el balon.",
    scores: { fraternidad: 72, alegria: 70, esfuerzo_perseverancia_superacion: 74, sencillez: 68, respeto_juego_limpio: 82 }
  },
  {
    id: "a3",
    studentId: "s3",
    date: "2026-06-03",
    evaluator: "Coach Adrian",
    notes: "Gran actitud de apoyo con ninas nuevas.",
    scores: { fraternidad: 89, alegria: 96, esfuerzo_perseverancia_superacion: 87, sencillez: 84, respeto_juego_limpio: 91 }
  },
  {
    id: "a4",
    studentId: "s4",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Se distrae en ejercicios largos, pero responde bien al seguimiento.",
    scores: { fraternidad: 78, alegria: 82, esfuerzo_perseverancia_superacion: 76, sencillez: 71, respeto_juego_limpio: 80 }
  },
  {
    id: "a5",
    studentId: "s5",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Lider positivo en calentamiento y orden del grupo.",
    scores: { fraternidad: 90, alegria: 87, esfuerzo_perseverancia_superacion: 91, sencillez: 93, respeto_juego_limpio: 88 }
  },
  {
    id: "a6",
    studentId: "s6",
    date: "2026-06-05",
    evaluator: "Coach Daniela",
    notes: "Debe mejorar puntualidad y cuidado de material.",
    scores: { fraternidad: 81, alegria: 79, esfuerzo_perseverancia_superacion: 63, sencillez: 66, respeto_juego_limpio: 84 }
  },
  {
    id: "a7",
    studentId: "s7",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Competitivo y honesto, puede mejorar trato al rival.",
    scores: { fraternidad: 69, alegria: 72, esfuerzo_perseverancia_superacion: 86, sencillez: 84, respeto_juego_limpio: 90 }
  },
  {
    id: "a8",
    studentId: "s8",
    date: "2026-06-07",
    evaluator: "Coach Raul",
    notes: "Muy constante, ayuda a ordenar al equipo.",
    scores: { fraternidad: 94, alegria: 91, esfuerzo_perseverancia_superacion: 92, sencillez: 90, respeto_juego_limpio: 95 }
  },
  {
    id: "a9",
    studentId: "s2",
    date: "2026-05-10",
    evaluator: "Coach Adrian",
    notes: "Seguimiento inicial por disciplina.",
    scores: { fraternidad: 68, alegria: 66, esfuerzo_perseverancia_superacion: 70, sencillez: 61, respeto_juego_limpio: 78 }
  },
  {
    id: "a10",
    studentId: "s6",
    date: "2026-05-12",
    evaluator: "Coach Daniela",
    notes: "Primera evaluacion del grupo.",
    scores: { fraternidad: 78, alegria: 75, esfuerzo_perseverancia_superacion: 60, sencillez: 62, respeto_juego_limpio: 80 }
  }
];
