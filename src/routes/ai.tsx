import { createFileRoute } from "@tanstack/react-router";
import { Bot, GitPullRequest, FlaskConical, Workflow, Search } from "lucide-react";
import { Page, PageHeader } from "@/components/Section";
import { Ada } from "@/components/ada/Ada";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "IA en Ingeniería — Camilú" },
      {
        name: "description",
        content:
          "Cómo Camilú integra IA en su trabajo de ingeniería: asistencia al escribir código, revisión, generación de tests, flujos agénticos e investigación.",
      },
      { property: "og:title", content: "IA en Ingeniería — Camilú" },
      {
        property: "og:description",
        content: "Una reflexión práctica sobre trabajar con IA sin delegarle el criterio.",
      },
    ],
  }),
  component: AiPage,
});

const practices = [
  {
    icon: Bot,
    title: "Código asistido",
    body: "Uso modelos para escribir el andamiaje: boilerplate, conversiones, migraciones mecánicas. La parte interesante —el modelo del dominio, las estructuras de datos, las decisiones de arquitectura— la sigo tomando yo, porque es donde se juega si el proyecto envejece bien.",
  },
  {
    icon: GitPullRequest,
    title: "Revisión de código",
    body: "Antes de pedir revisión humana, paso el diff por un modelo pidiéndole que busque casos borde, condiciones de carrera y supuestos no declarados. No reemplaza la revisión de un par: filtra el ruido para que la conversación humana sea sobre el diseño, no sobre un typo.",
  },
  {
    icon: FlaskConical,
    title: "Generación de tests",
    body: "Los modelos son buenos generando la matriz de casos que uno no quiere escribir a mano. Yo defino qué propiedad debe cumplirse; el modelo enumera las entradas. Luego reviso uno por uno: un test generado que pasa por la razón equivocada es peor que no tener test.",
  },
  {
    icon: Workflow,
    title: "Flujos agénticos",
    body: "Para tareas repetitivas con verificación clara —refactors amplios, actualizaciones de dependencias, migración de formatos— un agente con un criterio de éxito comprobable funciona muy bien. La regla que sigo: nunca le doy a un agente una tarea cuyo resultado no pueda validar automáticamente.",
  },
  {
    icon: Search,
    title: "Investigación",
    body: "Al explorar un área nueva —detección de pitch, cuantización de color, validación temporal en series de tiempo— uso modelos para mapear el terreno y nombrar los conceptos rápido. Después voy a las fuentes primarias. El modelo acorta el camino hasta el paper; no lo reemplaza.",
  },
];

function AiPage() {
  return (
    <Page className="max-w-4xl">
      <PageHeader
        eyebrow="Postura profesional"
        title="IA en Ingeniería"
        lead="No creo que la IA escriba el software por nosotras, ni que sea una moda pasajera. Es una herramienta poderosa con un filo evidente: acelera tanto el trabajo bueno como el malo."
        aside={<Ada pose="curious" className="h-28 w-28 float-soft" />}
      />

      <section className="mt-10 lab-card ruled p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">El criterio no se delega</h2>
        <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">
          <p>
            Trabajar con modelos cambió mi velocidad, no mi responsabilidad. Sigo siendo quien
            responde por lo que se despliega, y eso significa que no puedo aceptar código que no
            entiendo, aunque compile y pase los tests.
          </p>
          <p>
            Mi regla práctica es simple: la IA puede proponer, yo tengo que poder explicar. Si no
            soy capaz de defender por qué una solución es correcta frente a alguien que pregunta,
            todavía no está lista.
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {practices.map((p) => (
          <article key={p.title} className="lab-card p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-background/60 text-primary">
              <p.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold tracking-tight">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-primary/40 bg-primary/10 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold">Dónde pongo el límite</h2>
        <ul className="mt-4 space-y-2.5">
          {[
            "No pego secretos, datos personales ni código de terceros bajo acuerdo en un prompt.",
            "No acepto un cambio que no pueda leer de principio a fin.",
            "No uso un agente sin una forma automática de verificar que hizo lo correcto.",
            "No presento como propio un texto que no revisé y reescribí.",
          ].map((l) => (
            <li key={l} className="flex gap-2.5 text-sm text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {l}
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
