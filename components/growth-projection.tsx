import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Calendar, TrendingUp } from "lucide-react"

export function GrowthProjection() {
  const projections = [
    { month: "Atual", score: 87, label: "Hoje" },
    { month: "+3 meses", score: 91, label: "Projeção" },
    { month: "+6 meses", score: 94, label: "Projeção" },
    { month: "+1 ano", score: 97, label: "Projeção" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Projeção de Crescimento IA
        </CardTitle>
        <CardDescription>Baseado no seu histórico e tendências atuais</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projections.map((projection, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{projection.month}</span>
                  <span className="text-xs text-muted-foreground">({projection.label})</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">{projection.score}</span>
                  {index > 0 && <ArrowUpRight className="w-4 h-4 text-green-600" />}
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-500 rounded-full"
                  style={{ width: `${projection.score}%` }}
                />
              </div>
            </div>
          ))}

          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="text-sm font-semibold mb-2">Como melhorar sua projeção:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Mantenha perfil 100% completo e atualizado</li>
              <li>• Adicione novos vídeos de performance mensalmente</li>
              <li>• Participe de competições e atualize resultados</li>
              <li>• Responda rapidamente a mensagens de clubes</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
