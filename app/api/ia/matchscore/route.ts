import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { athleteId } = await request.json()

    // MOCK: Simulação de cálculo do MatchScore IA
    // Em produção, aqui você teria um modelo de ML real
    const mockMatchScore = {
      score: Math.floor(Math.random() * 30) + 70, // 70-100
      velocity: Math.floor(Math.random() * 20) + 80,
      agility: Math.floor(Math.random() * 20) + 75,
      precision: Math.floor(Math.random() * 20) + 82,
      pressure: Math.floor(Math.random() * 20) + 78,
      endurance: Math.floor(Math.random() * 20) + 85,
      technical: Math.floor(Math.random() * 20) + 80,
      tactical: Math.floor(Math.random() * 20) + 76,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: mockMatchScore,
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao calcular MatchScore" }, { status: 500 })
  }
}
