"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Nossos Projetos", href: "#projetos" },
  { label: "Como Ajudar", href: "#como-ajudar" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Image src="/icon-light-32x32.png" alt="Associação Um Lugar para Todos" width={64} height={64} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-foreground">Um Lugar</span>
            <span className="text-xs tracking-wider text-muted-foreground uppercase">para Todos</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="#como-ajudar">Ser Voluntário</a>
          </Button>
          <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-accent">
            <a href="#como-ajudar">Doar Agora</a>
          </Button>
        </div>

        <button
          className="lg:hidden flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button asChild variant="outline" size="sm">
                <a href="#como-ajudar" onClick={() => setIsOpen(false)}>Ser Voluntário</a>
              </Button>
              <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-accent">
                <a href="#como-ajudar" onClick={() => setIsOpen(false)}>Doar Agora</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
