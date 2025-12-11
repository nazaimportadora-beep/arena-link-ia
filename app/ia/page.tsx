import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, BarChart3, Target, TrendingUp, Sparkles, Zap, Radar, ChevronRight } from "lucide-react"

export default function IAPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Powered by AI
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Inteligência Artificial
                </span>{" "}
                & Análise Avançada
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Tecnologia de ponta para identificar, analisar e conectar talentos esportivos
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Nossas Ferramentas de IA</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Algoritmos avançados que transformam dados em oportunidades
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* MatchScore IA */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Destaque</Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">MatchScore IA</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso algoritmo exclusivo analisa múltiplos fatores para calcular um score de 0 a 100 que representa
                    seu potencial e compatibilidade com clubes e posições.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Análise de desempenho técnico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Avaliação de consistência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Potencial de crescimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Comparação com peers</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Exemplo de Score</span>
                    <span className="text-2xl font-bold text-primary">87/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                      style={{ width: "87%" }}
                    />
                  </div>
                </div>
              </Card>

              {/* Compatibilidade */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                    Premium
                  </Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Compatibilidade Atleta/Clubes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa IA cruza dados do seu perfil com requisitos de clubes e scouts para identificar matches
                    perfeitos e aumentar suas chances de contratação.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Matching inteligente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Análise de fit cultural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Requisitos técnicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Localização geográfica</span>
                  </li>
                </ul>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5">
                    <span className="text-sm font-medium">Clube São Paulo FC</span>
                    <Badge className="bg-accent text-accent-foreground">92% match</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5">
                    <span className="text-sm font-medium">Clube Santos FC</span>
                    <Badge className="bg-accent text-accent-foreground">88% match</Badge>
                  </div>
                </div>
              </Card>

              {/* Projeção de Performance */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Projeção de Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Algoritmos preditivos que analisam seu histórico e tendências para projetar seu desenvolvimento
                    futuro e identificar áreas de crescimento.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Análise de tendências</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Previsão de crescimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Identificação de pontos de melhoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Comparação temporal</span>
                  </li>
                </ul>
              </Card>

              {/* Radar de Habilidades */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <Radar className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Radar de Habilidades</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Visualização multidimensional das suas habilidades técnicas, físicas, táticas e mentais em um
                    gráfico radar interativo e detalhado.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Análise técnica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Capacidade física</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Inteligência tática</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Aspectos mentais</span>
                  </li>
                </ul>
              </Card>

              {/* Recomendações Automáticas */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Recomendações Automáticas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistema de recomendação que sugere clubes, posições alternativas, treinos e oportunidades
                    personalizadas baseadas no seu perfil único.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Sugestões de clubes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Posições alternativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Planos de desenvolvimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Oportunidades emergentes</span>
                  </li>
                </ul>
              </Card>

              {/* Gráficos Avançados */}
              <Card className="p-8 space-y-6 bg-card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                    <BarChart3 className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Gráficos Avançados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dashboard completo com visualizações interativas de dados: evolução temporal, comparações,
                    distribuições e análises multivariadas.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Gráficos de linha temporal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Gráficos de barras comparativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Heat maps de performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Exportação de relatórios</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* How AI Works */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Como Nossa IA Funciona</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 space-y-8 bg-card">
                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Coleta de Dados</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Coletamos informações abrangentes sobre seu desempenho, histórico, estatísticas e preferências
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Processamento Inteligente</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Algoritmos de machine learning processam e normalizam os dados, identificando padrões e insights
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Análise Preditiva</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Modelos preditivos avaliam seu potencial, projetam seu crescimento e identificam oportunidades
                      ideais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Matching & Recomendações</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conectamos você automaticamente com clubes e oportunidades que melhor se encaixam no seu perfil
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 max-w-4xl mx-auto">
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                  Experimente o poder da IA
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Crie sua conta e descubra como nossa inteligência artificial pode transformar sua carreira esportiva
                </p>
                <Link href="/dashboard/atleta">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                    Começar Gratuitamente
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
