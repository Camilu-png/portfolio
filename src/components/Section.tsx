import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:py-16", className)}>{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  aside,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
}) {
  return (
    <header className="grid gap-6 border-b border-border/70 pb-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
      <div className="min-w-0">
        <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lead ? <p className="mt-4 max-w-2xl text-muted-foreground">{lead}</p> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </header>
  );
}

export function SectionTitle({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>
      {note ? <p className="font-mono text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
}
