import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Crianças e adultos em atividades comunitárias na Associação Um Lugar para Todos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur-sm border border-primary-foreground/10">
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Desde 2013 transformando vidas</span>
          </div>

          <h1 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Transformando Vidas em Campo Grande
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 md:text-xl max-w-lg">
            Arte, Esporte e Cuidado Social no coração do bairro Coronel Antonino. Um lugar onde oportunidades mudam destinos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-accent text-base px-8 py-6"
            >
              <a href="#como-ajudar">
                Quero ser Voluntário
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-secondary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
            >
              <a href="#como-ajudar">
                <Heart className="mr-2 h-5 w-5" />
                Fazer uma Doação
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-8">
            <div>
              <p className="font-serif text-3xl font-bold text-secondary md:text-4xl">3</p>
              <p className="mt-1 text-sm text-primary-foreground/70">Eixos de Atuação</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-secondary md:text-4xl">10+</p>
              <p className="mt-1 text-sm text-primary-foreground/70">Anos de Atividade</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-secondary md:text-4xl">500+</p>
              <p className="mt-1 text-sm text-primary-foreground/70">Pessoas Impactadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
