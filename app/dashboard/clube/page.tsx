"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Trophy, Target, TrendingUp, User, Mail, ChevronRight, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ClubeDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const athletes = [
    {
      id: 1,
      name: "Carlos Silva",
      sport: "Futebol",
      position: "Meio-Campo",
      age: 23,
      location: "São Paulo, SP",
      matchScore: 87,
      goals: 12,
      assists: 8,
    },
    {
      id: 2,
      name: "Ana Santos",
      sport: "Vôlei",
      position: "Levantadora",
      age: 21,
      location: "Rio de Janeiro, RJ",
      matchScore: 92,
      points: 245,
      blocks: 34,
    },
    {
      id: 3,
      name: "Pedro Costa",
      sport: "Basquete",
      position: "Armador",
      age: 25,
      location: "Belo Horizonte, MG",
      matchScore: 85,
      points: 18,
      assists: 6,
    },
    {
      id: 4,
      name: "Juliana Oliveira",
      sport: "Natação",
      position: "Velocista",
      age: 20,
      location: "Curitiba, PR",
      matchScore: 89,
      medals: 15,
      records: 3,
    },
    {
      id: 5,
      name: "Rafael Almeida",
      sport: "Futebol",
      position: "Atacante",
      age: 24,
      location: "Salvador, BA",
      matchScore: 83,
      goals: 18,
      assists: 5,
    },
    {
      id: 6,
      name: "Mariana Ferreira",
      sport: "Jiu-Jitsu",
      position: "Faixa Roxa",
      age: 22,
      location: "Fortaleza, CE",
      matchScore: 91,
      wins: 28,
      submissions: 15,
    },
  ]

  const [selectedSport, setSelectedSport] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [minScore, setMinScore] = useState("0")

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSport = selectedSport === "all" || athlete.sport === selectedSport
    const matchesPosition = selectedPosition === "all" || athlete.position === selectedPosition
    const matchesScore = athlete.matchScore >= Number.parseInt(minScore)
    return matchesSearch && matchesSport && matchesPosition && matchesScore
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard de Clubes & Scouts</h1>
            <p className="text-muted-foreground">Busque e avalie atletas com inteligência artificial</p>
          </div>

          {/* Search and Filters */}
          <Card className="p-6 mb-8 bg-card">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar atletas por nome..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros Avançados
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="Esporte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Esportes</SelectItem>
                    <SelectItem value="Futebol">Futebol</SelectItem>
                    <SelectItem value="Vôlei">Vôlei</SelectItem>
                    <SelectItem value="Basquete">Basquete</SelectItem>
                    <SelectItem value="Natação">Natação</SelectItem>
                    <SelectItem value="Jiu-Jitsu">Jiu-Jitsu</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                  <SelectTrigger>
                    <SelectValue placeholder="Posição" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Posições</SelectItem>
                    <SelectItem value="Meio-Campo">Meio-Campo</SelectItem>
                    <SelectItem value="Atacante">Atacante</SelectItem>
                    <SelectItem value="Levantadora">Levantadora</SelectItem>
                    <SelectItem value="Armador">Armador</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={minScore} onValueChange={setMinScore}>
                  <SelectTrigger>
                    <SelectValue placeholder="MatchScore Mínimo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Qualquer Score</SelectItem>
                    <SelectItem value="70">70+</SelectItem>
                    <SelectItem value="80">80+</SelectItem>
                    <SelectItem value="90">90+</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Região" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Regiões</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{filteredAthletes.length}</span> atletas encontrados
            </p>
            <Select defaultValue="score">
              <SelectTrigger className="w-48 bg-background">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Maior MatchScore</SelectItem>
                <SelectItem value="name">Nome (A-Z)</SelectItem>
                <SelectItem value="age">Idade</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Athletes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredAthletes.map((athlete) => (
              <Card key={athlete.id} className="p-6 hover:shadow-lg transition-all bg-card">
                <div className="flex items-start justify-between mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg" alt={athlete.name} />
                    <AvatarFallback>
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">MatchScore</p>
                    <Badge
                      className={
                        athlete.matchScore >= 90
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {athlete.matchScore}
                      <Sparkles className="h-3 w-3 ml-1" />
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{athlete.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        {athlete.sport}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Target className="h-3 w-3 mr-1" />
                        {athlete.position}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{athlete.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    {athlete.goals !== undefined && (
                      <>
                        <div>
                          <p className="text-2xl font-bold text-primary">{athlete.goals}</p>
                          <p className="text-xs text-muted-foreground">Gols</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{athlete.assists}</p>
                          <p className="text-xs text-muted-foreground">Assistências</p>
                        </div>
                      </>
                    )}
                    {athlete.points !== undefined && athlete.sport === "Vôlei" && (
                      <>
                        <div>
                          <p className="text-2xl font-bold text-primary">{athlete.points}</p>
                          <p className="text-xs text-muted-foreground">Pontos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{athlete.blocks}</p>
                          <p className="text-xs text-muted-foreground">Bloqueios</p>
                        </div>
                      </>
                    )}
                    {athlete.medals !== undefined && (
                      <>
                        <div>
                          <p className="text-2xl font-bold text-primary">{athlete.medals}</p>
                          <p className="text-xs text-muted-foreground">Medalhas</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{athlete.records}</p>
                          <p className="text-xs text-muted-foreground">Recordes</p>
                        </div>
                      </>
                    )}
                    {athlete.wins !== undefined && (
                      <>
                        <div>
                          <p className="text-2xl font-bold text-primary">{athlete.wins}</p>
                          <p className="text-xs text-muted-foreground">Vitórias</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent">{athlete.submissions}</p>
                          <p className="text-xs text-muted-foreground">Finalizações</p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2 pt-3">
                    <Button className="flex-1 bg-transparent" variant="outline" size="sm">
                      Ver Perfil
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Contatar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparison Tool */}
          <Card className="p-6 mb-8 bg-card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Comparação de Atletas</h2>
                <p className="text-sm text-muted-foreground">Compare até 3 atletas lado a lado</p>
              </div>
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                <Sparkles className="h-3 w-3 mr-1" />
                IA
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Selecione um atleta</p>
              </div>
              <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Selecione um atleta</p>
              </div>
              <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
                <p className="text-sm text-muted-foreground">Selecione um atleta</p>
              </div>
            </div>
          </Card>

          {/* AI Rankings */}
          <Card className="p-6 bg-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Ranking IA - Top Atletas</h2>
              <Badge className="bg-primary text-primary-foreground">
                <TrendingUp className="h-3 w-3 mr-1" />
                Atualizado Hoje
              </Badge>
            </div>
            <div className="space-y-3">
              {filteredAthletes
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 5)
                .map((athlete, index) => (
                  <div
                    key={athlete.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" alt={athlete.name} />
                      <AvatarFallback>
                        <User className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold">{athlete.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {athlete.sport} • {athlete.position}
                      </p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">{athlete.matchScore}</Badge>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Ver
                    </Button>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
