import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Sparkles, Globe, TrendingUp, ChevronRight, BarChart3, Zap, Shield, Brain, CheckCircle2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-orange-500/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Powered by IA
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Conectando Atletas Amadores ao{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mundo com IA
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                Transforme seu talento em oportunidades reais. Nossa inteligência artificial conecta você a clubes,
                scouts e oportunidades globais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 px-8">
                    Criar Conta Grátis
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button size="lg" variant="outline" className="px-8 bg-transparent">
                    Como Funciona
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>100% Grátis para começar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>IA Avançada</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Oportunidades Globais</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Confiança e Resultados</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Junte-se a milhares de atletas que já transformaram suas carreiras
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Atletas Cadastrados</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Clubes Parceiros</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-accent">18+</p>
                <p className="text-sm text-muted-foreground">Modalidades</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-accent">95%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why ArenaLinkIA Exists */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                  Nossa Missão
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-balance">Por que ArenaLinkIA existe?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acreditamos que todo atleta amador merece uma chance de ser visto e reconhecido. Milhares de talentos
                  são perdidos pela falta de visibilidade e conexões.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa plataforma usa Inteligência Artificial para democratizar o acesso a oportunidades esportivas,
                  conectando atletas de todos os esportes e gêneros com clubes, scouts e competições ao redor do mundo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Democratizar oportunidades esportivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Dar visibilidade a talentos amadores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Conectar atletas com o mundo inteiro</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Globe className="h-24 w-24 mx-auto text-primary" />
                    <p className="text-2xl font-bold">Oportunidades Globais</p>
                    <p className="text-muted-foreground">Para todos os atletas amadores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Por que escolher ArenaLinkIA?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A plataforma mais completa para atletas amadores
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">IA Avançada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Algoritmos de IA analisam seu desempenho e conectam você às melhores oportunidades
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">MatchScore IA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sistema exclusivo que calcula sua compatibilidade com clubes e posições
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Alcance Global</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conecte-se com clubes e scouts de todo o mundo em diversos esportes
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Análise de Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dashboards completos com gráficos e projeções de crescimento
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Recomendações Inteligentes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receba sugestões personalizadas de clubes baseadas no seu perfil
                </p>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">100% Grátis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comece gratuitamente e tenha acesso a todos os recursos essenciais
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16">
              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                  Pronto para começar sua jornada?
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Crie seu perfil gratuitamente e conecte-se com oportunidades em todo o mundo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                      Criar Conta Grátis
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/modalidades">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-primary-foreground hover:bg-white/10 px-8 bg-transparent"
                    >
                      Ver Modalidades
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
