export interface Publication {
  title: string;
  kind: "Libro" | "Artículo" | "Paper";
  role: string;
  date: string;
  description: string;
  url?: string;
  placeholder?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Tesis — Un algoritmo para la planificación de horarios de ayudantía",
    kind: "Paper",
    role: "Autora",
    date: "2026",
    url: "https://repositorio.usm.cl/handle/123456789/78182",
    description:
      "Analiza el problema de asisgnación de horarios de ayudantías en la universidad. Estudia la carrera de Ingeniería Civil Informática buscando maximizar la cantidad de estudiantes que pueden asistir a un bloque definido, priorizando aquellos que optimicen la distribución horaria de los estudiantes a través de penalizaciones centradas en la preferencia estudiantil.",
  },
  {
    title:
      "Humanidades digitales: Reflexiones en torno a la sociedad de la información y desarrollo",
    kind: "Libro",
    role: "Coautora",
    date: "2022",
    url: "https://vinculacion.usm.cl/noticias/editorial-usm-lanza-libro-que-compila-ensayos-de-estudiantes-de-ingenieria-civil-informatica/",
    description:
      'Participación como coautora de un libro. Mi ensayo, "Consideraciones en torno a la política nacional de inteligencia artificial" es resultados del Taller de Humanidades Digitales.',
  },
];
