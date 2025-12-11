import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, ArrowRight } from "lucide-react"

export function MatchesRecommendations() {
  const recommendations = [
    {
      club: "FC Barcelona Youth",
      location: "Barcelona, Espanha",
      matchScore: 94,
      category: "Sub-20",
      logo: "/placeholder-logo.png",
      reason: "Estilo de jogo técnico compatível",
    },
    {
      club: "Santos FC",
      location: "Santos, Brasil",
      matchScore: 91,
      category: "Profissional",
      logo: "/placeholder-logo.png",
      reason: "Posição em aberto na categoria",
    },
    {
      club: "Ajax Amsterdam",
      location: "Amsterdam, Holanda",
      matchScore: 89,
      category: "Academia",
      logo: "/placeholder-logo.png",
      reason: "Perfil ideal para desenvolvimento",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recomendações IA</CardTitle>
        <CardDescription>Clubes que mais combinam com seu perfil</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{rec.club}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{rec.location}</span>
                        <span>•</span>
                        <span>{rec.category}</span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20 text-green-700"
                    >
                      {rec.matchScore}% Match
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">{rec.reason}</p>

                  <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
