import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

export function TopAthletesList() {
  const topAthletes = [
    { rank: 1, name: "Lucas Santos", score: 97, sport: "Futebol", position: "Atacante", country: "🇧🇷" },
    { rank: 2, name: "Maria Silva", score: 95, sport: "Vôlei", position: "Oposta", country: "🇧🇷" },
    { rank: 3, name: "Pedro Costa", score: 94, sport: "Basquete", position: "Armador", country: "🇧🇷" },
    { rank: 4, name: "Ana Oliveira", score: 93, sport: "Futsal", position: "Ala", country: "🇧🇷" },
    { rank: 5, name: "João Pereira", score: 92, sport: "Futebol", position: "Meio-campo", country: "🇧🇷" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-orange-500" />
          Ranking IA - Top 5
        </CardTitle>
        <CardDescription>Atletas com maior MatchScore da plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topAthletes.map((athlete) => (
            <div
              key={athlete.rank}
              className="flex items-center gap-4 p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                {athlete.rank}
              </div>

              <Avatar className="w-12 h-12">
                <AvatarImage src={`/placeholder-user.jpg`} alt={athlete.name} />
                <AvatarFallback>{athlete.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm truncate">{athlete.name}</h4>
                  <span>{athlete.country}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{athlete.sport}</span>
                  <span>•</span>
                  <span>{athlete.position}</span>
                </div>
              </div>

              <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary/20">
                {athlete.score}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
