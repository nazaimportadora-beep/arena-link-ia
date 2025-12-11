import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, User, Sparkles, Award, Globe, Users } from "lucide-react"

export default function EmpresaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                Sobre Nós
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Transformando o futuro do{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  esporte amador
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nossa missão é democratizar oportunidades esportivas através da Inteligência Artificial
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 text-center bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conectar atletas amadores de todo o mundo a oportunidades reais através de tecnologia de ponta e
                  inteligência artificial, democratizando o acesso ao esporte profissional.
                </p>
              </Card>

              <Card className="p-8 space-y-4 text-center bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mx-auto">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a maior plataforma global de conexão entre atletas amadores e oportunidades esportivas, onde
                  nenhum talento seja perdido por falta de visibilidade.
                </p>
              </Card>

              <Card className="p-8 space-y-4 text-center bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inclusão, inovação, transparência e paixão pelo esporte. Acreditamos que todo atleta merece uma chance
                  justa de mostrar seu talento.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* About Founder */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                    Fundador
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">A história por trás da ArenaLinkIA</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ArenaLinkIA nasceu da experiência pessoal de ver atletas talentosos perdidos pela falta de
                    visibilidade e conexões. Nosso fundador, ex-atleta amador, vivenciou as dificuldades de ser
                    descoberto no cenário esportivo.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Combinando expertise em tecnologia e paixão pelo esporte, criamos uma plataforma que usa
                    Inteligência Artificial para nivelar o campo de jogo e dar a todos os atletas a chance que merecem.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">João Silva</p>
                      <p className="text-muted-foreground">CEO & Fundador</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Sparkles className="h-24 w-24 mx-auto text-primary" />
                      <p className="text-xl font-bold">Inovação em IA</p>
                      <p className="text-muted-foreground">Para o esporte amador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Nosso Impacto Social</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transformando vidas através do esporte e da tecnologia
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center space-y-4 bg-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10k+</p>
                  <p className="text-sm text-muted-foreground mt-1">Atletas Conectados</p>
                </div>
              </Card>

              <Card className="p-6 text-center space-y-4 bg-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mx-auto">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Países Alcançados</p>
                </div>
              </Card>

              <Card className="p-6 text-center space-y-4 bg-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">2.5k+</p>
                  <p className="text-sm text-muted-foreground mt-1">Contratos Facilitados</p>
                </div>
              </Card>

              <Card className="p-6 text-center space-y-4 bg-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mx-auto">
                  <Sparkles className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">18+</p>
                  <p className="text-sm text-muted-foreground mt-1">Modalidades Esportivas</p>
                </div>
              </Card>
            </div>

            <div className="mt-16 max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-center">Democratizando Oportunidades</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Acreditamos que o acesso a oportunidades esportivas não deve depender de conexões pessoais ou recursos
                financeiros. Nossa plataforma usa IA para identificar e promover talentos baseados exclusivamente em
                mérito e desempenho.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center">
                Trabalhamos com atletas de todas as origens, gêneros e localidades, criando um ecossistema global e
                inclusivo onde o talento é reconhecido independentemente de barreiras geográficas ou sociais.
              </p>
            </div>
          </div>
        </section>

        {/* Values in Action */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Nossos Compromissos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-primary">✓</span> Inclusão Total
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os esportes, todos os gêneros, todas as idades. Nossa plataforma é para todos os atletas
                  amadores que sonham em ir mais longe.
                </p>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-primary">✓</span> Transparência Total
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos algoritmos são transparentes e baseados em mérito. Você sempre saberá como seu MatchScore é
                  calculado.
                </p>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-accent">✓</span> Inovação Constante
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estamos sempre melhorando nossa IA e adicionando novas funcionalidades para servir melhor nossos
                  atletas.
                </p>
              </Card>

              <Card className="p-6 space-y-4 bg-card">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-accent">✓</span> Comunidade em Primeiro Lugar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ouvimos nossos atletas e construímos recursos baseados em suas necessidades reais e feedback
                  constante.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
