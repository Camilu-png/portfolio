export type MilestoneKind = "Educación" | "Práctica" | "Hackathon" | "Publicación" | "Hito";

export interface Milestone {
  date: string;
  kind: MilestoneKind;
  title: string;
  place: string;
  description: string;
  url?: string;
  placeholder?: boolean;
}

export const milestones: Milestone[] = [
  {
    date: "Octubre - 2026",
    kind: "Hackathon",
    title: "Aura — CS Girlies Annual Hackathon - Technology For Wellness",
    place: "Devpost - Computer Science Girlies",
    url: "https://devpost.com/software/aura-w3myvu",
    description:
      "Aura es un sistema de alerta temprana de carga emocional. Aprende tu baseline personal analizando voz, patrones de escritura y carga de calendario. Predice el agotamiento antes de que llegue, sugiriendo acciones concretas para recalibrarte. Mi misión fue encargarme del backend y todo este proyecto se desarrolló en menos de 48 horas a través de un equipo completamente femenino e internacional.",
  },
  {
    date: "Marzo 2026",
    kind: "Educación",
    title: "Ingeniera Civil en Informática",
    place: "Universidad Técnica Federico Santa María",
    description:
      "Examen de título. Por fin termino la carrera con varios años de fundamentos: algoritmos, sistemas, datos y la costumbre de que algo sería más sencillo si existiera una app para hacerlo.",
  },
  {
    date: "Marzo 2026",
    kind: "Publicación",
    title: "Un algoritmo para la planificación de horarios de ayudantía",
    place: "Repositorio USM",
    url: "https://repositorio.usm.cl/handle/123456789/78182",
    description:
      "Mi memoria analiza el problema de asisgnación de horarios de ayudantías en la universidad. Estudia la carrera de Ingeniería Civil Informática buscando maximizar la cantidad de estudiantes que pueden asistir a un bloque definido, priorizando aquellos que optimicen la distribución horaria de los estudiantes a través de penalizaciones centradas en la preferencia estudiantil.",
  },
  {
    date: "2024",
    kind: "Hito",
    title: "Ayudante de Programación",
    place: "Universidad Técnica Federico Santa María, Casa Central",
    description:
      "Fui ayudante de programación durante dos semestres, donde fui un apoyo docente para estudiantes de primer año, guiándolos en estructuras de datos, algoritmos y resolución de problemas.",
  },
  {
    date: "2023",
    kind: "Hito",
    title: "Feria de software — NoiseTrack",
    place: "USM Campus San Joaquín",
    url: "https://usm.cl/noticias/sansanos-crean-software-para-la-proteccion-auditiva-en-ambientes-laborales-ruidosos/",
    description:
      "Proyecto realizado en la feria de software que detecta visualmente a través de cámaras e inteligencia artificial potenciales casos de riesgo auditivo, fijándose en situaciones en las que existan problemas con el equipo de protección auditivo, se acceda a un espacio de altos niveles sonoros o se exceda el tiempo límite de exposición a ruido continuo.",
  },
  {
    date: "2022 - 2023",
    kind: "Hito",
    title: "Voluntaria – Technovation Girls Chile",
    place: "Universidad Técnica Federico Santa María, Casa Central",
    description:
      "Estuve liderando dos equipos de niñas con el fin de que pudieran desarrollar una aplicación que apoyara a una ODS. Trabajé con un equipo de Seniors y otro de Beginners en semestres diferentes.",
  },
  {
    date: "2022 - 2023",
    kind: "Práctica",
    title: "Práctica profesional — IBM",
    place: "Online",
    description:
      "Desarrollo de interfaces con Angular en entornos productivos y gestión de infraestructura en Azure, configurando workbooks para visualización de métricas. Trabajo en equipo bajo metodología Scrum.",
  },
  {
    date: "S1 - 2022",
    kind: "Publicación",
    title:
      "Humanidades digitales: Reflexiones en torno a la sociedad de la información y desarrollo",
    place: "Editorial USM",
    url: "https://vinculacion.usm.cl/noticias/editorial-usm-lanza-libro-que-compila-ensayos-de-estudiantes-de-ingenieria-civil-informatica/",
    description:
      'Participación como coautora de un libro. Mi ensayo, "Consideraciones en torno a la política nacional de inteligencia artificial" es resultados del Taller de Humanidades Digitales.',
  },
];
