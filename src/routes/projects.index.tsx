import { createFileRoute, Link } from "@tanstack/react-router";
import { allTags, sortedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  validateSearch: (search: Record<string, unknown>) => ({
    tag: typeof search["tag"] === "string" ? (search["tag"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Proyectos — Camilú, Ingeniera Civil en Informática" },
      {
        name: "description",
        content:
          "Catálogo de proyectos de Camilú: apps Flutter, optimización, machine learning y experimentos. Filtra por tecnología.",
      },
      { property: "og:title", content: "Proyectos — Camilú" },
      {
        property: "og:description",
        content: "Apps Flutter, optimización, machine learning y experimentos, filtrables por tag.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { tag } = Route.useSearch();
  const tags = allTags();
  const all = sortedProjects();
  const filtered = tag ? all.filter((p) => p.tags.includes(tag)) : all;

  return (
    <Page>
      <PageHeader
        eyebrow="Archivo de proyectos"
        title="Proyectos"
        lead="Cada proyecto empezó como una pregunta. Filtra por tecnología para ver por dónde ha andado la curiosidad."
        aside={<Ada pose="curious" className="h-28 w-28 float-soft" label="Ada revisando filtros" />}
      />

      <div className="mt-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Filtrar por tag
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          <li>
            <Link
              to="/projects"
              search={{ tag: undefined }}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                !tag
                  ? "border-primary bg-primary font-semibold text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              Todos <span className="font-mono text-xs opacity-70">{all.length}</span>
            </Link>
          </li>
          {tags.map((t) => {
            const active = tag === t.tag;
            return (
              <li key={t.tag}>
                <Link
                  to="/projects"
                  search={{ tag: active ? undefined : t.tag }}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    active
                      ? "border-primary bg-primary font-semibold text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
                  )}
                >
                  {t.tag} <span className="font-mono text-xs opacity-70">{t.count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-6 font-mono text-xs text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "proyecto" : "proyectos"}
        {tag ? ` con ${tag}` : ""}
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Page>
  );
}
