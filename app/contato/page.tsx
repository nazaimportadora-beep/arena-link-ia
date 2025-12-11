"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erro ao enviar mensagem")
        setIsLoading(false)
        return
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 5000)
    } catch (err) {
      setError("Erro ao conectar com o servidor. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                Fale Conosco
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Entre em{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contato</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Estamos aqui para ajudar você a alcançar seus objetivos esportivos
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8 bg-card">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Envie uma Mensagem</h2>
                  <p className="text-muted-foreground">Preencha o formulário e retornaremos em breve</p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-lg bg-primary/10 text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                      <Send className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                      <p className="text-muted-foreground">Obrigado pelo contato. Responderemos em até 24 horas.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escreva sua mensagem aqui..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensagem"}
                      {!isLoading && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                )}
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  <div className="space-y-6">
                    <Card className="p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">contato@arenalinkia.com</p>
                          <p className="text-sm text-muted-foreground mt-1">Respondemos em até 24 horas úteis</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 flex-shrink-0">
                          <Phone className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Telefone</h3>
                          <p className="text-muted-foreground">+55 (11) 4002-8922</p>
                          <p className="text-sm text-muted-foreground mt-1">Seg - Sex: 9h às 18h</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">WhatsApp</h3>
                          <p className="text-muted-foreground">+55 (11) 4002-8922</p>
                          <p className="text-sm text-muted-foreground mt-1">Atendimento rápido via mensagem</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-card">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Localização</h3>
                          <p className="text-muted-foreground">Av. Paulista, 1578</p>
                          <p className="text-sm text-muted-foreground mt-1">São Paulo, SP - Brasil</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Support */}
                <Card className="p-6 bg-card border-primary/20">
                  <h3 className="text-xl font-bold mb-2">Central de Ajuda</h3>
                  <p className="text-muted-foreground mb-4">
                    Encontre respostas para as perguntas mais comuns em nossa central de ajuda
                  </p>
                  <Link href="/suporte">
                    <Button variant="outline" className="w-full bg-transparent">
                      Acessar Central de Ajuda
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
