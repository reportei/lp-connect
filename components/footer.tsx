import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/reportei-connect-logo.png"
                alt="Reportei Connect"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A ponte que conecta múltiplas redes em seu sistema. Integre dados de marketing sem desenvolvimento
              complexo.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                connect@reportei.com
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is" className="text-muted-foreground hover:text-foreground transition-colors">
                  O que é
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="/documentacao" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://reportei.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre o Reportei
                </a>
              </li>
              <li>
                <a href="#case-study" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@reportei.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Desenvolvedores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/documentacao" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Reportei Connect. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LGPD
              </a>
            </div>
            <div>Powered by Reportei - Líder em relatórios de marketing digital</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
