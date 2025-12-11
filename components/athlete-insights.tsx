import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Target, AlertCircle } from "lucide-react"

export function AthleteInsights() {
  const insights = [
    {
      type: "positive",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Performance em Alta",
      description: "Seu MatchScore aumentou 5 pontos este mês. Continue assim!",
      action: "Ver detalhes",
    },
    {
      type: "opportunity",
      icon: <Target className="w-5 h-5" />,
      title: "Nova Oportunidade",
      description: "3 clubes da Série B visualizaram seu perfil esta semana.",
      action: "Ver clubes",
    },
    {
      type: "tip",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Dica de Melhoria",
      description: "Adicione mais vídeos de jogos para aumentar sua visibilidade em 40%.",
      action: "Adicionar vídeos",
    },
    {
      type: "alert",
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Perfil Incompleto",
      description: "Complete as informações de altura e peso para melhorar matches.",
      action: "Completar perfil",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights IA</CardTitle>
        <CardDescription>Recomendações personalizadas para maximizar suas oportunidades</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  insight.type === "positive"
                    ? "bg-green-500/10 text-green-600"
                    : insight.type === "opportunity"
                      ? "bg-primary/10 text-primary"
                      : insight.type === "tip"
                        ? "bg-orange-500/10 text-orange-600"
                        : "bg-yellow-500/10 text-yellow-600"
                }`}
              >
                {insight.icon}
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-semibold">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <button className="text-xs text-primary hover:underline mt-1">{insight.action} →</button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
