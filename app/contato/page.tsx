"use client"

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
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setError("")
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Mensagem enviada com sucesso!")

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsSubmitted(false)
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h1>Contato</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Telefone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} />

        <label>Mensagem</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitted}>
          {isSubmitted ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p style={{ marginTop: 20 }}>
        <Link href="/">Voltar ao Início</Link>
      </p>
    </div>
  )
}
