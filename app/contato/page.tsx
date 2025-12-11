"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <>
      <Header />

      <main className="px-6 py-12 max-w-3xl mx-auto">
        <Card className="p-6 shadow-md rounded-xl border border-gray-200">
          <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-gray-600 mb-6">
            Preencha os campos abaixo e retornaremos o mais rápido possível.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">

              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                type="text"
                name="phone"
                placeholder="Seu telefone"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Escreva sua mensagem"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 p-3 border rounded-lg text-gray-800"
              />

              {error && <p className="text-red-500">{error}</p>}

              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <Badge className="text-lg px-4 py-2">Mensagem enviada com sucesso!</Badge>
            </div>
          )}
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 underline">
            Voltar para o início
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
