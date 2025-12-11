import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validação básica
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "A senha deve ter no mínimo 6 caracteres" }, { status: 400 })
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // MOCK: Simulação de criação de conta
    // Em produção, aqui você salvaria no banco de dados
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: "athlete",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      user: newUser,
      token: "mock-jwt-token-" + Date.now(),
      message: "Conta criada com sucesso!",
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
