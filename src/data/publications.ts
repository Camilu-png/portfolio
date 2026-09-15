export interface Publication {
  title: string;
  kind: "Libro" | "Artículo" | "Paper";
  role: string;
  date: string;
  description: string;
  link?: string;
  placeholder?: boolean;
}

export const publications: Publication[] = [
  {
    title: "Coautora de un libro",
    kind: "Libro",
    role: "Coautora",
    date: "2025",
    description:
      "Participación como coautora en una publicación colectiva. Escribir junto a otras personas obliga a defender cada afirmación y a traducir lo técnico a un lenguaje que sobreviva fuera del contexto.",
    placeholder: true,
  },
  {
    title: "Artículo — título por confirmar",
    kind: "Artículo",
    role: "Autora",
    date: "Por completar",
    description:
      "Marcador: reemplazar con el título real, el medio de publicación, la fecha y un enlace.",
    placeholder: true,
  },
  {
    title: "Paper — título por confirmar",
    kind: "Paper",
    role: "Coautora",
    date: "Por completar",
    description:
      "Marcador: reemplazar con el título, la conferencia o revista, los coautores y el DOI o enlace.",
    placeholder: true,
  },
];
