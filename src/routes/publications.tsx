import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ExternalLink, FileText, Newspaper } from "lucide-react";
import { publications, type Publication } from "@/data/publications";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publicaciones — Camilú" },
      {
        name: "description",
        content:
          "Publicaciones de Camilú: coautoría de un libro, artículos y papers, con rol, fecha y descripción.",
      },
      { property: "og:title", content: "Publicaciones — Camilú" },
      {
        property: "og:description",
        content: "Libro en coautoría, artículos y papers escritos durante la carrera.",
      },
    ],
  }),
  component: PublicationsPage,
});

const icon: Record<Publication["kind"], typeof BookOpen> = {
  Libro: BookOpen,
  Artículo: Newspaper,
  Paper: FileText,
};

function PublicationsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Escribir también es ingeniería"
        title="Publicaciones"
        lead="Escribir obliga a ordenar lo que uno cree que entiende. Aquí está lo que ha salido de ese ejercicio."
        aside={<Ada pose="sleepy" className="h-28 w-28 float-soft" />}
      />

      <div className="mt-10 grid gap-5">
        {publications.map((p) => {
          const Icon = icon[p.kind];
          return (
            <article key={p.title} className="lab-card grid gap-4 p-6 sm:grid-cols-[auto_1fr]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-background/60 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-secondary/60 px-2.5 py-0.5 font-mono text-[11px] text-secondary">
                    {p.kind}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{p.date}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">· {p.role}</span>
                  {p.placeholder ? (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      por completar
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    Ver publicación <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Page>
  );
}
