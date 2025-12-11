"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-orange-500">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="hidden sm:inline">ArenaLinkIA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Início
          </Link>
          <Link
            href="/como-funciona"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Como Funciona
          </Link>
          <Link
            href="/modalidades"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Modalidades
          </Link>
          <Link href="/ia" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            IA & Análise
          </Link>
          <Link
            href="/empresa"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Empresa
          </Link>
          <Link
            href="/contato"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm" className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90">
              Criar Conta
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Início
            </Link>
            <Link href="/como-funciona" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Como Funciona
            </Link>
            <Link href="/modalidades" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Modalidades
            </Link>
            <Link href="/ia" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              IA & Análise
            </Link>
            <Link href="/empresa" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Empresa
            </Link>
            <Link href="/contato" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Link href="/login">
                <Button variant="outline" className="w-full bg-transparent" onClick={() => setMobileMenuOpen(false)}>
                  Entrar
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Criar Conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
