"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  User,
  MapPin,
  Calendar,
  Trophy,
  TrendingUp,
  Sparkles,
  Target,
  ChevronRight,
  Activity,
  Award,
  Mail,
  Phone,
} from "lucide-react"
import { RadarChart } from "@/components/radar-chart"
import { PerformanceChart } from "@/components/performance-chart"
import { MatchScoreGauge } from "@/components/match-score-gauge"

export default function AtletaDashboard() {
  // Mock data
  const athlete = {
    name: "Carlos Silva",
    sport: "Futebol",
    position: "Meio-Campo",
    age: 23,
    location: "São Paulo, SP",
    matchScore: 87,
    avatar: "/diverse-group-athletes.png",
  }

  const stats = {
    goals: 12,
    assists: 8,
    matches: 24,
    winRate: 75,
  }

  const recommendations = [
    { club: "São Paulo FC", match: 92, location: "São Paulo, SP" },
    { club: "Santos FC", match: 88, location: "Santos, SP" },
    { club: "Palmeiras", match: 85, location: "São Paulo, SP" },
  ]

  const radarData = [
    { skill: "Técnica", value: 85 },
    { skill: "Velocidade", value: 78 },
    { skill: "Resistência", value: 90 },
    { skill: "Visão de Jogo", value: 82 },
    { skill: "Finalização", value: 75 },
    { skill: "Passe", value: 88 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <Card className="p-6 md:p-8 mb-8 bg-card">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Avatar className="h-24 w-24 border-4 border-primary">
                <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{athlete.name}</h1>
                    <Badge className="bg-primary text-primary-foreground">Atleta Verificado</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Trophy className="h-4 w-4" />
                      {athlete.sport}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      {athlete.position}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {athlete.age} anos
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {athlete.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="bg-transparent" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contato
                  </Button>
                  <Button size="sm" className="bg-transparent" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground mb-2">MatchScore IA</p>
                <div className="flex items-baseline justify-center md:justify-end gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {athlete.matchScore}
                  </span>
                  <span className="text-2xl text-muted-foreground">/100</span>
                </div>
                <Badge className="mt-2 bg-accent text-accent-foreground">Excelente</Badge>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* MatchScore Gauge */}
              <Card className="p-6 bg-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">MatchScore IA</h2>
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Atualizado
                  </Badge>
                </div>
                <MatchScoreGauge score={athlete.matchScore} />
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Seu score aumentou 5 pontos no último mês. Continue assim!
                </p>
              </Card>

              {/* Performance Stats */}
              <Card className="p-6 bg-card">
                <h2 className="text-2xl font-bold mb-6">Estatísticas de Performance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-3xl font-bold text-primary">{stats.goals}</p>
                    <p className="text-sm text-muted-foreground">Gols</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5">
                    <Target className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <p className="text-3xl font-bold text-accent">{stats.assists}</p>
                    <p className="text-sm text-muted-foreground">Assistências</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Activity className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-3xl font-bold text-primary">{stats.matches}</p>
                    <p className="text-sm text-muted-foreground">Partidas</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <p className="text-3xl font-bold text-accent">{stats.winRate}%</p>
                    <p className="text-sm text-muted-foreground">Taxa de Vitória</p>
                  </div>
                </div>
              </Card>

              {/* Performance Chart */}
              <Card className="p-6 bg-card">
                <h2 className="text-2xl font-bold mb-6">Evolução de Performance</h2>
                <PerformanceChart />
              </Card>

              {/* Radar Chart */}
              <Card className="p-6 bg-card">
                <h2 className="text-2xl font-bold mb-6">Radar de Habilidades</h2>
                <RadarChart data={radarData} />
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Position Compatibility */}
              <Card className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-4">Compatibilidade de Posições</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium">Meio-Campo</span>
                      <span className="text-primary font-bold">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium">Atacante</span>
                      <span className="text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium">Lateral</span>
                      <span className="text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </Card>

              {/* Recommendations */}
              <Card className="p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Clubes Recomendados</h3>
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{rec.club}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {rec.location}
                          </p>
                        </div>
                        <Badge className="bg-accent text-accent-foreground">{rec.match}% match</Badge>
                      </div>
                      <Button size="sm" className="w-full mt-2 bg-transparent" variant="outline">
                        Ver Detalhes
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Growth Projection */}
              <Card className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-4">Projeção de Crescimento</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
                    <span className="text-sm font-medium">Projeção 6 meses</span>
                    <Badge className="bg-primary text-primary-foreground">+8 pontos</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
                    <span className="text-sm font-medium">Projeção 1 ano</span>
                    <Badge className="bg-primary text-primary-foreground">+15 pontos</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Com base no seu ritmo atual, você pode alcançar MatchScore de 95+ em 1 ano.
                  </p>
                </div>
              </Card>

              {/* Update Stats CTA */}
              <Card className="p-6 bg-gradient-to-br from-primary to-primary/80">
                <Award className="h-12 w-12 text-primary-foreground mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Atualize suas Estatísticas</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">
                  Mantenha seu perfil atualizado para melhorar seu MatchScore
                </p>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Atualizar Agora
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
