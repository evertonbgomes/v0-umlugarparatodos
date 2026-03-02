import { Heart, Users, Shield } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Assistência Social",
    description: "Apoio integral às famílias em vulnerabilidade com atividades educativas e recreativas.",
  },
  {
    icon: Users,
    title: "Cultura & Teatro",
    description: "O poder da arte cênica como ferramenta de expressão, reflexão e transformação social.",
  },
  {
    icon: Shield,
    title: "Esporte",
    description: "Disciplina, saúde e autoconfiança por meio do Jiu-Jitsu e Boxe para crianças e adultos.",
  },
]

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">
              Quem Somos
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
              Uma organização dedicada ao desenvolvimento humano e social
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Associação Um Lugar para Todos</strong>{" "}
                (CNPJ: 17.333.875/0001-08) é uma organização sem fins lucrativos localizada na
                Rua Santo Ângelo, 212 — no coração do bairro Coronel Antonino, em Campo Grande/MS.
              </p>
              <p>
                Acreditamos que a vulnerabilidade social se combate com oportunidades. Por isso, atuamos
                em três pilares principais que se complementam e fortalecem nossa comunidade todos os dias.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
