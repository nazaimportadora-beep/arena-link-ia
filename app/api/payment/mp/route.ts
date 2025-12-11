import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { plan, userId } = await request.json()

    // MOCK: Simulação de criação de preferência Mercado Pago
    // Em produção, você usaria a SDK oficial do Mercado Pago
    const mockPreference = {
      id: "mp_pref_" + Math.random().toString(36).substr(2, 9),
      init_point: "https://www.mercadopago.com.br/checkout/mock",
      plan,
      userId,
      amount: plan === "premium" ? 29.9 : 9.9,
      currency: "BRL",
      status: "pending",
    }

    return NextResponse.json({
      success: true,
      preference: mockPreference,
      message: "Preferência de pagamento criada. Redirecionando...",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar preferência de pagamento" }, { status: 500 })
  }
}
