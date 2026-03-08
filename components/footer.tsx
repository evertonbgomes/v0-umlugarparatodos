import { Heart, MapPin, Phone, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold">Um Lugar para Todos</span>
                <span className="text-xs tracking-wider text-primary-foreground/60 uppercase">
                  Associação
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70 max-w-md">
              Organização sem fins lucrativos dedicada ao desenvolvimento humano e social.
              Desde 2013 transformando vidas através da arte, esporte e cuidado social no
              coração de Campo Grande/MS.
            </p>
            <p className="mt-4 text-xs text-primary-foreground/50">
              CNPJ: 17.333.875/0001-08
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Rua Santo Ângelo, 212 — Bairro Coronel Antonino, Campo Grande/MS</span>
              </li>
              <li>
                <a
                  href="https://wa.me/556792026737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  <span>(67) 99202-6737</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                aria-label="Seguir no Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-serif text-base font-semibold mb-3">Navegação</h4>
              <nav className="flex flex-col gap-2">
                <a href="#inicio" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Início</a>
                <a href="#quem-somos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Quem Somos</a>
                <a href="#projetos" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Nossos Projetos</a>
                <a href="#como-ajudar" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Como Ajudar</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            {'© 2025 Associação Um Lugar para Todos. Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
