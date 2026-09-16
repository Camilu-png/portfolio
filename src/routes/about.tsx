import { createFileRoute } from "@tanstack/react-router";
import { BookMarked, Cat, Flower2, Music, Scissors, GraduationCap } from "lucide-react";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Camilú, más allá del código" },
      {
        name: "description",
        content:
          "Camilú: Ingeniera Civil en Informática UTFSM. Crochet, ocarina, libros, plantas, animales y Ada la gata calicó detrás del código.",
      },
      { property: "og:title", content: "Sobre mí — Camilú" },
      {
        property: "og:description",
        content: "Crochet, música, libros, plantas y una gata calicó llamada Ada.",
      },
    ],
  }),
  component: AboutPage,
});

const beyond = [
  {
    icon: Scissors,
    title: "Crochet",
    body: "El tapestry crochet es programar con hilo: cada punto es un píxel y cada fila cambia de dirección. De ahí salió PIXEL CROCHET, literalmente.",
  },
  {
    icon: Music,
    title: "Ocarina",
    body: "Instrumento pequeño, curva de aprendizaje empinada y casi ningún recurso digital decente. Buena combinación para terminar construyendo una app.",
  },
  {
    icon: BookMarked,
    title: "Libros",
    body: "Leo mucho y disperso: ficción, divulgación, ensayo técnico. La lectura es donde recargo el vocabulario para explicar cosas complejas.",
  },
  {
    icon: Flower2,
    title: "Plantas",
    body: "Un sistema con feedback lento y sin logs. Riegas, esperas una semana y recién ahí sabes si la hipótesis era correcta. Enseña paciencia.",
  },
  {
    icon: Cat,
    title: "Animales",
    body: "Compañía constante mientras programo, y la razón por la que este sitio tiene una mascota en vez de un banner corporativo.",
  },
];

function AboutPage() {
  return (
    <Page className="max-w-4xl">
      <PageHeader
        eyebrow="Beyond Code"
        title="Sobre mí"
        lead="Soy Camilú. Me titulo de Ingeniera Civil en Informática en la UTFSM en marzo de 2026, y casi todo lo que he construido empezó fuera del computador."
        aside={<Ada pose="yarn" className="h-32 w-32 float-soft" label="Ada jugando con lana" />}
      />

      <section className="mt-10 lab-card ruled p-6 sm:p-8">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-background/60 text-primary">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold">Formación y enfoque</h2>
        <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">
          <p>
            {site.role}, {site.school}, titulación en {site.graduation}. Seis años de fundamentos:
            algoritmos, sistemas, estructuras de datos, bases de datos, optimización y aprendizaje
            automático.
          </p>
          <p>
            No me identifico con una sola especialidad. He escrito apps móviles, servicios backend,
            modelos de predicción y solvers de asignación, y lo que se repite en todos no es el
            lenguaje: es el hábito de entender el problema antes de elegir la herramienta.
          </p>
          <p className="font-mono text-sm text-primary">{site.tagline}</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Más allá del código</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {beyond.map((b) => (
            <article key={b.title} className="lab-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background/60 text-secondary">
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid items-center gap-6 rounded-2xl border border-secondary/40 bg-secondary/10 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
        <Ada pose="peek" className="h-32 w-32 shrink-0 justify-self-center" label="Ada la gata" />
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-semibold">Ada</h2>
          <p className="mt-2 text-foreground/85">
            Gata calicó, parches negros y naranjos, pechera y patitas blancas, ojos verdes y una
            curiosidad absolutamente incompatible con cualquier teclado abierto. Aparece por todo
            este sitio porque le tocó supervisar cada uno de estos proyectos.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Su nombre también es un guiño a Ada Lovelace, lo cual es una coincidencia muy
            conveniente.
          </p>
        </div>
      </section>
    </Page>
  );
}
