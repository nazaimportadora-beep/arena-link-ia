"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">ArenaLinkIA</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="platform" className="border-b-0">
              <AccordionTrigger className="hover:no-underline py-2">Plataforma</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    href="/como-funciona"
                    className="py-2 text-muted-foreground hover:text-foreground"
                    onClick={closeMenu}
                  >
                    Como Funciona
                  </Link>
                  <Link
                    href="/modalidades"
                    className="py-2 text-muted-foreground hover:text-foreground"
                    onClick={closeMenu}
                  >
                    Modalidades
                  </Link>
                  <Link href="/ia" className="py-2 text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                    IA & Análise
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="company" className="border-b-0">
              <AccordionTrigger className="hover:no-underline py-2">Empresa</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    href="/empresa"
                    className="py-2 text-muted-foreground hover:text-foreground"
                    onClick={closeMenu}
                  >
                    Sobre Nós
                  </Link>
                  <Link
                    href="/contato"
                    className="py-2 text-muted-foreground hover:text-foreground"
                    onClick={closeMenu}
                  >
                    Contato
                  </Link>
                  <Link
                    href="/suporte"
                    className="py-2 text-muted-foreground hover:text-foreground"
                    onClick={closeMenu}
                  >
                    Suporte
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login" onClick={closeMenu}>
              <Button variant="outline" className="w-full bg-transparent">
                Entrar
              </Button>
            </Link>
            <Link href="/register" onClick={closeMenu}>
              <Button className="w-full bg-gradient-to-r from-primary to-orange-500">Criar Conta Grátis</Button>
            </Link>
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/privacidade" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                Privacidade
              </Link>
              <Link href="/termos" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
