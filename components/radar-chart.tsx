"use client"

interface RadarData {
  skill: string
  value: number
}

export function RadarChart({ data }: { data: RadarData[] }) {
  const size = 400
  const center = size / 2
  const maxRadius = 150
  const levels = 5

  // Calculate points for each skill
  const points = data.map((item, index) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2
    const value = (item.value / 100) * maxRadius
    const x = center + Math.cos(angle) * value
    const y = center + Math.sin(angle) * value
    return { x, y, angle, label: item.skill }
  })

  // Create path for the data polygon
  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z"

  return (
    <div className="flex items-center justify-center py-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="max-w-full">
        {/* Grid levels */}
        {Array.from({ length: levels }).map((_, i) => {
          const radius = ((i + 1) / levels) * maxRadius
          const gridPoints = data.map((_, index) => {
            const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2
            const x = center + Math.cos(angle) * radius
            const y = center + Math.sin(angle) * radius
            return `${x},${y}`
          })
          return (
            <polygon
              key={i}
              points={gridPoints.join(" ")}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
          )
        })}

        {/* Axis lines */}
        {data.map((_, index) => {
          const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2
          const x = center + Math.cos(angle) * maxRadius
          const y = center + Math.sin(angle) * maxRadius
          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
            />
          )
        })}

        {/* Data polygon */}
        <path d={pathData} fill="url(#radarGradient)" fillOpacity="0.3" stroke="url(#radarStroke)" strokeWidth="3" />

        {/* Data points */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="6" fill="currentColor" className="text-primary" />
        ))}

        {/* Labels */}
        {points.map((p, i) => {
          const angle = p.angle
          const labelRadius = maxRadius + 40
          const labelX = center + Math.cos(angle) * labelRadius
          const labelY = center + Math.sin(angle) * labelRadius
          return (
            <text
              key={i}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-medium fill-foreground"
            >
              {p.label}
            </text>
          )
        })}

        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
