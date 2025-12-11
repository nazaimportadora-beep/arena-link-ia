import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // MOCK: Simulação de envio de email
    // Em produção, aqui você enviaria o email via SendGrid, Resend, etc.
    console.log("[v0] Contact form submission:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simular um pequeno delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
  }
}
