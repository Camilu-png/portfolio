import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { milestones, type MilestoneKind } from "@/data/timeline";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Trayectoria — Camilú" },
      {
        name: "description",
        content:
          "Línea de tiempo de Camilú: UTFSM 2026, prácticas, hackathons, publicaciones y los hitos que fueron formando el oficio.",
      },
      { property: "og:title", content: "Trayectoria — Camilú" },
      {
        property: "og:description",
        content:
          "Educación, prácticas, hackathons y publicaciones, contadas sin lenguaje corporativo.",
      },
    ],
    links: [{ rel: "canonical", href: "https://Camilu-png.github.io/portfolio/timeline" }],
  }),
  component: TimelinePage,
});

const kindStyle: Record<MilestoneKind, string> = {
  Educación: "border-primary/60 text-primary",
  Práctica: "border-secondary/60 text-secondary",
  Hackathon: "border-primary/60 text-primary",
  Publicación: "border-secondary/60 text-secondary",
  Hito: "border-border text-muted-foreground",
};

function TimelinePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Cuaderno de bitácora"
        title="Trayectoria"
        lead="Momentos importantes en mi desarrollo profesional."
        aside={<Ada pose="curious" className="h-28 w-28 float-soft" />}
      />

      <ol className="relative mt-12 ml-3 space-y-8 border-l border-border pl-8 sm:ml-6">
        {milestones.map((m) => {
          const inner = (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{m.date}</span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                    kindStyle[m.kind],
                  )}
                >
                  {m.kind}
                </span>
                {m.placeholder ? (
                  <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                    por completar
                  </span>
                ) : null}
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">{m.title}</h2>
              <p className="text-sm text-secondary">{m.place}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
              {m.url ? (
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-primary">
                  Ver más <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              ) : null}
            </>
          );

          return (
            <li key={m.title} className="relative">
              <span
                className={cn(
                  "absolute -left-[41px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background",
                  m.placeholder ? "bg-muted-foreground" : "bg-primary",
                )}
              />
              {m.url ? (
                <a
                  href={m.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lab-card flex flex-col p-5 transition-colors hover:border-secondary/60 hover:bg-surface-strong"
                >
                  {inner}
                </a>
              ) : (
                <div className="lab-card p-5">{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
    </Page>
  );
}
