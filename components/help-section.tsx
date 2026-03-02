"use client"

import { useState } from "react"
import { Copy, Check, Heart, HandHeart, Users, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

const PIX_KEY = "17.333.875/0001-08"

const helpWays = [
  {
    icon: Package,
    title: "Seja um Doador",
    description:
      "Aceitamos doações de alimentos não perecíveis, materiais esportivos (kimonos, luvas) e figurinos teatrais.",
  },
  {
    icon: Heart,
    title: "Doação Financeira",
    description:
      "Contribua para a manutenção da nossa sede no bairro Coronel Antonino e a continuidade dos nossos projetos.",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description:
      "Venha dar aulas, ajudar na cozinha ou se tornar um palhaço de hospital. Sua presença faz a diferença.",
  },
]

export function HelpSection() {
  const [copied, setCopied] = useState(false)

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
    }
  }

  return (
    <section id="como-ajudar" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Como Ajudar
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl text-balance">
            Sua ajuda transforma realidades
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Existem muitas formas de contribuir com o nosso trabalho. Escolha a que melhor combina
            com você.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {helpWays.map((way) => (
            <div
              key={way.title}
              className="text-center rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/50 text-secondary-foreground">
                <way.icon className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">{way.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{way.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-lg rounded-3xl border-2 border-secondary bg-card p-8 text-center shadow-lg md:p-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <HandHeart className="h-7 w-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-card-foreground">Doe via PIX</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Chave PIX (CNPJ)
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-muted p-4">
            <code className="text-lg font-mono font-bold tracking-wider text-foreground">
              {PIX_KEY}
            </code>
            <button
              onClick={copyPix}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              aria-label="Copiar chave PIX"
            >
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>
          {copied && (
            <p className="mt-3 text-sm font-medium text-green-600">
              Chave PIX copiada!
            </p>
          )}
          <p className="mt-6 text-xs text-muted-foreground">
            Toda doação é bem-vinda e faz a diferença na vida de crianças e famílias.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-6"
          >
            <a
              href="https://wa.me/5567991122580?text=Olá!%20Gostaria%20de%20ser%20voluntário(a)%20na%20Associação%20Um%20Lugar%20para%20Todos."
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero ser Voluntário
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
