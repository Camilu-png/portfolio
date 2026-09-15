export type MilestoneKind = "Educación" | "Práctica" | "Hackathon" | "Publicación" | "Hito";

export interface Milestone {
  date: string;
  kind: MilestoneKind;
  title: string;
  place: string;
  description: string;
  placeholder?: boolean;
}

export const milestones: Milestone[] = [
  {
    date: "Marzo 2026",
    kind: "Educación",
    title: "Ingeniera Civil en Informática",
    place: "Universidad Técnica Federico Santa María",
    description:
      "Titulación. Seis años de fundamentos: algoritmos, sistemas, datos y la costumbre de abrir cosas para ver cómo funcionan por dentro.",
  },
  {
    date: "2025",
    kind: "Hito",
    title: "OCARI y PIXEL CROCHET en paralelo",
    place: "Proyectos personales",
    description:
      "Dos apps Flutter nacidas de hobbies: una ocarina de 12 agujeros y una aguja de crochet. La curiosidad como método de estudio.",
  },
  {
    date: "2025",
    kind: "Publicación",
    title: "Coautora de un libro",
    place: "Publicación colectiva",
    description:
      "Participación como coautora en un libro. Escribir obliga a entender de verdad lo que uno cree que ya sabe.",
  },
  {
    date: "2024",
    kind: "Hito",
    title: "Asigna tu Ayudantía en uso real",
    place: "UTFSM",
    description:
      "El sistema de asignación con optimización pasó de prototipo a resolver un problema concreto de un departamento.",
  },
  {
    date: "2024",
    kind: "Hackathon",
    title: "Hackathon — nombre por confirmar",
    place: "Por completar",
    description:
      "Marcador: reemplazar con el nombre del evento, el equipo, el desafío y el resultado.",
    placeholder: true,
  },
  {
    date: "2024",
    kind: "Práctica",
    title: "Práctica profesional — empresa por confirmar",
    place: "Por completar",
    description:
      "Marcador: reemplazar con la empresa, el rol, las tecnologías usadas y lo que construiste ahí.",
    placeholder: true,
  },
  {
    date: "2023",
    kind: "Práctica",
    title: "Primera práctica — empresa por confirmar",
    place: "Por completar",
    description: "Marcador: reemplazar con los detalles de la primera experiencia laboral.",
    placeholder: true,
  },
  {
    date: "2020",
    kind: "Educación",
    title: "Inicio de la carrera",
    place: "UTFSM",
    description:
      "El punto donde escribir código dejó de ser curiosidad suelta y empezó a ser oficio.",
  },
];
