"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setError("");

    // Simulação de envio (retire se for conectar com API)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-20 bg-white">
      
      {/* Título */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Contato</h1>
      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        Preencha o formulário abaixo e nossa equipe retornará o mais rápido possível.
      </p>

      {/* Formulário */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10 border border-gray-200 space-y-6"
      >
        {/* Linha Nome + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold text-gray-700">Nome</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        {/* Telefone */}
        <div>
          <label className="font-semibold text-gray-700">Telefone</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label className="font-semibold text-gray-700">Mensagem</label>
          <textarea
            name="message"
            required
            rows={5}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Escreva sua mensagem..."
          />
        </div>

        {/* Respostas */}
        {isSubmitted && (
          <p className="text-green-600 font-semibold">
            Mensagem enviada com sucesso!
          </p>
        )}

        {error && (
          <p className="text-red-600 font-semibold">
            {error}
          </p>
        )}

        {/* Botão */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition disabled:opacity-50"
        >
          {isLoading ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      {/* Voltar */}
      <Link 
        href="/"
        className="mt-10 text-blue-600 font-semibold hover:underline"
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
