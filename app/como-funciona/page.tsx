import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserPlus, BarChart3, Sparkles, Target, TrendingUp, Globe, ChevronRight } from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                Passo a Passo
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Como a{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ArenaLinkIA
                </span>{" "}
                funciona?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Em poucos passos, nossa IA conecta você às melhores oportunidades esportivas
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Primeiro Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Criação de Perfil</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crie sua conta gratuitamente e preencha seu perfil completo. Adicione informações básicas como idade,
                  posição, modalidade e histórico esportivo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Cadastro 100% gratuito</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Informações pessoais e esportivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Upload de fotos e vídeos</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5">
                  <div className="flex items-center justify-center h-64">
                    <UserPlus className="h-32 w-32 text-primary" />
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative order-2 md:order-1">
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5">
                  <div className="flex items-center justify-center h-64">
                    <BarChart3 className="h-32 w-32 text-accent" />
                  </div>
                </Card>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl">
                    2
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Segundo Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Coleta de Estatísticas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Adicione suas estatísticas de desempenho, conquistas e dados relevantes da sua modalidade. Quanto mais
                  completo, melhor!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Dados de performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Conquistas e medalhas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Histórico de clubes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    3
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Terceiro Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">IA MatchScore</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa Inteligência Artificial analisa todos os seus dados e gera um MatchScore exclusivo, calculando
                  sua compatibilidade com diferentes posições e clubes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Análise automatizada por IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Score de 0 a 100</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Atualização em tempo real</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5">
                  <div className="flex items-center justify-center h-64">
                    <Sparkles className="h-32 w-32 text-primary" />
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative order-2 md:order-1">
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5">
                  <div className="flex items-center justify-center h-64">
                    <Target className="h-32 w-32 text-accent" />
                  </div>
                </Card>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl">
                    4
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Quarto Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Recomendações Personalizadas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com base no seu MatchScore, receba recomendações automáticas de clubes, posições e oportunidades
                  perfeitamente alinhadas ao seu perfil.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Clubes compatíveis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Posições ideais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Oportunidades relevantes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    5
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Quinto Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Comparações com Outros Atletas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Veja como você se compara com outros atletas da sua modalidade e região. Identifique pontos fortes e
                  áreas de melhoria.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Rankings por região</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Análise comparativa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Insights de melhoria</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5">
                  <div className="flex items-center justify-center h-64">
                    <TrendingUp className="h-32 w-32 text-primary" />
                  </div>
                </Card>
              </div>
            </div>

            {/* Step 6 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5">
                  <div className="flex items-center justify-center h-64">
                    <Globe className="h-32 w-32 text-accent" />
                  </div>
                </Card>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-xl">
                    6
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Sexto Passo
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Mapa de Oportunidades</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Explore um mapa interativo com clubes, scouts e oportunidades ao redor do mundo. Conecte-se
                  diretamente e candidate-se às vagas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Oportunidades globais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Contato direto com clubes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Candidaturas simplificadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 max-w-4xl mx-auto">
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                  Comece sua jornada agora!
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Cadastre-se gratuitamente e deixe nossa IA encontrar as melhores oportunidades para você
                </p>
                <Link href="/dashboard/atleta">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                    Criar Conta Grátis
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
