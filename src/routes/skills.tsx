import { createFileRoute, Link } from "@tanstack/react-router";
import { allTags, projects } from "@/data/projects";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tags — Camilú" },
      {
        name: "description",
        content:
          "Tecnologías de Camilú derivadas de sus proyectos reales: Flutter, Dart, Python, PyTorch, FastAPI, optimización y más.",
      },
      { property: "og:title", content: "Skills & Tags — Camilú" },
      {
        property: "og:description",
        content:
          "Un mapa de tecnologías generado desde los proyectos, no desde una lista de deseos.",
      },
    ],
    links: [{ rel: "canonical", href: "https://Camilu-png.github.io/portfolio/skills" }],
  }),
  component: SkillsPage,
});

const groups: { name: string; tags: string[] }[] = [
  { name: "Móvil & Producto", tags: ["Flutter", "Dart", "Mobile", "UX", "Pixel Art", "Audio"] },
  { name: "Backend & Datos", tags: ["Python", "FastAPI", "Docker", "Data", "React"] },
  { name: "Modelos & Algoritmos", tags: ["Machine Learning", "PyTorch", "Optimization"] },
];

function SkillsPage() {
  const tags = allTags();
  const max = Math.max(...tags.map((t) => t.count));

  return (
    <Page>
      <PageHeader
        eyebrow="Inventario del laboratorio"
        title="Skills & Tags"
        lead="Esta lista no se escribió a mano: se genera desde los tags de los proyectos. Si algo aparece aquí, existe código detrás."
        aside={<Ada pose="peek" className="h-28 w-28 float-soft" />}
      />

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Frecuencia por tecnología</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {tags.map((t) => (
            <li key={t.tag}>
              <Link
                to="/projects"
                search={{ tag: t.tag }}
                className="lab-card flex items-center gap-4 p-4"
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-mono text-sm text-foreground">{t.tag}</span>
                  <span className="mt-2 block h-1.5 rounded-full bg-background/70">
                    <span
                      className="block h-1.5 rounded-full bg-primary"
                      style={{ width: `${(t.count / max) * 100}%` }}
                    />
                  </span>
                </span>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-1 font-mono text-xs text-secondary">
                  {t.count} {t.count === 1 ? "proyecto" : "proyectos"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold">Por dónde se agrupa</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          No estoy casada con una especialidad. Estas son las tres zonas donde más he construido.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.name} className="lab-card p-5">
              <h3 className="font-display text-lg font-semibold">{g.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.tags
                  .filter((t) => tags.some((x) => x.tag === t))
                  .map((t) => (
                    <li key={t}>
                      <Link
                        to="/projects"
                        search={{ tag: t }}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {tags.length} tecnologías · {projects.length} proyectos documentados
      </p>
    </Page>
  );
}
