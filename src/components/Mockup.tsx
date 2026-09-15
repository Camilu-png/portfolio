import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

/** Stylized, code-drawn mock visuals — no stock photography. */
export function Mockup({ kind, className }: { kind: Project["mockup"]; className?: string }) {
  return (
    <div
      className={cn(
        "notebook relative overflow-hidden rounded-xl border border-border bg-surface-strong p-5",
        className,
      )}
      aria-hidden="true"
    >
      {kind === "phone" ? <PhoneMock /> : null}
      {kind === "grid" ? <GridMock /> : null}
      {kind === "chart" ? <ChartMock /> : null}
      {kind === "board" ? <BoardMock /> : null}
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-40 rounded-2xl border border-border bg-background p-2.5">
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-muted" />
      <div className="rounded-xl bg-surface p-3">
        <div className="mx-auto h-16 w-24 rounded-[50%] border-2 border-primary/70 bg-primary/10" />
        <div className="mt-3 grid grid-cols-6 gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2.5 rounded-full",
                i % 3 === 0 ? "bg-primary" : "bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
        <div className="mt-3 h-1.5 w-full rounded bg-muted-foreground/25" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded bg-muted-foreground/25" />
      </div>
    </div>
  );
}

function GridMock() {
  const palette = ["bg-primary", "bg-secondary", "bg-muted-foreground/40", "bg-background"];
  return (
    <div className="mx-auto grid w-44 grid-cols-10 gap-[3px]">
      {Array.from({ length: 80 }).map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const inHeart = (row + col) % 4;
        return <span key={i} className={cn("aspect-square rounded-[2px]", palette[inHeart])} />;
      })}
    </div>
  );
}

function ChartMock() {
  const bars = [30, 52, 74, 88, 96, 84, 61, 40, 26, 44, 70, 58];
  return (
    <div className="flex h-36 items-end gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className={cn("flex-1 rounded-t-sm", i % 2 ? "bg-secondary/70" : "bg-primary/80")}
        />
      ))}
    </div>
  );
}

function BoardMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-border bg-background/60 p-2">
          <div
            className={cn("h-1.5 w-2/3 rounded", i % 3 === 0 ? "bg-primary" : "bg-secondary/70")}
          />
          <div className="mt-1.5 h-1.5 w-full rounded bg-muted-foreground/25" />
          <div className="mt-1 h-1.5 w-1/2 rounded bg-muted-foreground/25" />
        </div>
      ))}
    </div>
  );
}
