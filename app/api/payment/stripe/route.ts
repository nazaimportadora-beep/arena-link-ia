import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { plan, userId } = await request.json()

    // MOCK: Simulação de criação de sessão de pagamento Stripe
    // Em produção, você usaria a SDK oficial do Stripe
    const mockSession = {
      id: "cs_test_" + Math.random().toString(36).substr(2, 9),
      url: "https://checkout.stripe.com/mock-session",
      plan,
      userId,
      amount: plan === "premium" ? 29.9 : 9.9,
      currency: "BRL",
      status: "pending",
    }

    return NextResponse.json({
      success: true,
      session: mockSession,
      message: "Sessão de pagamento criada. Redirecionando...",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar sessão de pagamento" }, { status: 500 })
  }
}
