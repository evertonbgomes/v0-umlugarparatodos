import Image from "next/image"
import { Drama, Smile, GraduationCap, Swords, Dumbbell, ShieldCheck, HandHeart } from "lucide-react"

const projects = [
  {
    category: "Eixo Cultural: A Arte que Cura",
    categoryColor: "bg-chart-1 text-primary-foreground",
    items: [
      {
        icon: Smile,
        title: "Doutores do Reino",
        description:
          "Nosso braço de palhaçaria hospitalar. Voluntários treinados que levam o \"remédio da alegria\" a hospitais e asilos de Campo Grande, transformando o ambiente de dor em esperança.",
        image: "/images/doutores-do-reino.jpg",
        imageAlt: "Palhaços voluntários visitando pacientes em hospitais",
      },
      {
        icon: Drama,
        title: "Trupe do Reino",
        description:
          "Grupo de artes cênicas que utiliza o teatro como ferramenta de expressão, reflexão e evangelização.",
        image: "/images/teatro.jpg",
        imageAlt: "Apresentação teatral da Trupe do Reino",
      },
      {
        icon: GraduationCap,
        title: "Aulas de Teatro",
        description:
          "Oficinas gratuitas para crianças e jovens da comunidade, desenvolvendo desinibição, foco e criatividade.",
      },
    ],
  },
  {
    category: "Eixo Esportivo: Disciplina e Saúde",
    categoryColor: "bg-primary text-primary-foreground",
    items: [
      {
        icon: Swords,
        title: "Jiu-Jitsu Social",
        description:
          "Aulas focadas na autoconfiança e disciplina para crianças e adolescentes, tirando-os da ociosidade e ensinando valores de respeito.",
        image: "/images/jiu-jitsu.jpg",
        imageAlt: "Crianças praticando Jiu-Jitsu com kimonos brancos",
      },
      {
        icon: Dumbbell,
        title: "Boxe Executivo",
        description:
          "Modalidade voltada para a comunidade e apoiadores, unindo condicionamento físico de alto nível com o alívio do estresse diário.",
      },
    ],
  },
  {
    category: "Eixo Social e Comunitário",
    categoryColor: "bg-chart-4 text-accent-foreground",
    items: [
      {
        icon: ShieldCheck,
        title: "Apoio à Criança em Vulnerabilidade",
        description:
          "Oferecemos um ambiente seguro com atividades educativas e recreativas para crianças que enfrentam riscos sociais.",
        image: "/images/social.jpg",
        imageAlt: "Atividades de apoio comunitário com distribuição de alimentos",
      },
      {
        icon: HandHeart,
        title: "Serviços à Comunidade",
        description:
          "Atuamos como um ponto de apoio para famílias locais, oferecendo desde doações de alimentos até orientações básicas de cidadania e assistência.",
      },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Nossos Projetos
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            O coração de tudo que fazemos
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada projeto é uma porta aberta para quem precisa. Conheça os eixos de atuação que transformam
            a realidade da nossa comunidade.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((group) => (
            <div key={group.category}>
              <div className="mb-8 flex items-center gap-4">
                <span
                  className={`inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${group.categoryColor}`}
                >
                  {group.category}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
                  >
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || ""}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
