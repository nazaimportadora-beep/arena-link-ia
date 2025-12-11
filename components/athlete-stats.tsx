import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Zap, Award } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  icon: React.ReactNode
  trend?: "up" | "down" | "neutral"
}

function StatCard({ title, value, change, icon, trend = "neutral" }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={`text-xs ${
              trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-muted-foreground"
            }`}
          >
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export function AthleteStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="MatchScore IA"
        value="87"
        change="+5 pontos este mês"
        icon={<Award className="h-4 w-4" />}
        trend="up"
      />
      <StatCard
        title="Visualizações"
        value="1.2K"
        change="+12% vs. mês anterior"
        icon={<TrendingUp className="h-4 w-4" />}
        trend="up"
      />
      <StatCard
        title="Clubes Interessados"
        value="8"
        change="3 novos esta semana"
        icon={<Target className="h-4 w-4" />}
        trend="up"
      />
      <StatCard
        title="Taxa de Resposta"
        value="94%"
        change="Excelente engajamento"
        icon={<Zap className="h-4 w-4" />}
        trend="neutral"
      />
    </div>
  )
}
