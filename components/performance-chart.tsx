"use client"

export function PerformanceChart() {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]
  const data = [72, 75, 78, 82, 85, 87]
  const maxValue = 100

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-64 gap-4">
        {data.map((value, index) => {
          const height = (value / maxValue) * 100
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-sm font-semibold text-primary">{value}</div>
              <div className="relative w-full bg-muted rounded-t-lg" style={{ height: "100%" }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{months[index]}</div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">MatchScore Mensal</span>
        </div>
      </div>
    </div>
  )
}
