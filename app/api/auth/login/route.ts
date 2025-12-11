import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validação básica
    if (!email || !password) {
      return NextResponse.json({ error: "Email e senha são obrigatórios" }, { status: 400 })
    }

    // MOCK: Simulação de autenticação
    // Em produção, aqui você verificaria no banco de dados
    if (email === "demo@arenalinkia.com" && password === "demo123") {
      return NextResponse.json({
        success: true,
        user: {
          id: "1",
          name: "Atleta Demo",
          email: email,
          role: "athlete",
        },
        token: "mock-jwt-token-" + Date.now(),
      })
    }

    // Simular login bem-sucedido para qualquer credencial
    // (apenas para demonstração)
    return NextResponse.json({
      success: true,
      user: {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email: email,
        role: "athlete",
      },
      token: "mock-jwt-token-" + Date.now(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
