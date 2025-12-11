import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Trophy,
  Target,
  Waves,
  Bike,
  Dumbbell,
  ReplyAll as Volleyball,
  User,
  Timer,
  Wind,
  Mountain,
  Flame,
} from "lucide-react"

const sports = [
  {
    name: "Futebol",
    icon: Trophy,
    athletes: "3.2k",
    description: "O esporte mais popular do mundo",
  },
  {
    name: "Vôlei",
    icon: Volleyball,
    athletes: "1.8k",
    description: "Indoor e de praia",
  },
  {
    name: "Basquete",
    icon: Target,
    athletes: "2.1k",
    description: "Performance e estratégia",
  },
  {
    name: "Futsal",
    icon: Users,
    athletes: "1.5k",
    description: "Técnica e velocidade",
  },
  {
    name: "Natação",
    icon: Waves,
    athletes: "980",
    description: "Todas as modalidades",
  },
  {
    name: "Corrida",
    icon: Wind,
    athletes: "2.5k",
    description: "Pista e maratona",
  },
  {
    name: "Jiu-Jitsu",
    icon: User,
    athletes: "850",
    description: "Arte marcial brasileira",
  },
  {
    name: "Ciclismo",
    icon: Bike,
    athletes: "720",
    description: "Estrada e MTB",
  },
  {
    name: "Musculação",
    icon: Dumbbell,
    athletes: "1.2k",
    description: "Força e hipertrofia",
  },
  {
    name: "CrossFit",
    icon: Flame,
    athletes: "650",
    description: "Fitness funcional",
  },
  {
    name: "Atletismo",
    icon: Timer,
    athletes: "890",
    description: "Provas de pista e campo",
  },
  {
    name: "Escalada",
    icon: Mountain,
    athletes: "420",
    description: "Indoor e outdoor",
  },
  {
    name: "Tênis",
    icon: Target,
    athletes: "680",
    description: "Simples e duplas",
  },
  {
    name: "Handebol",
    icon: Users,
    athletes: "540",
    description: "Velocidade e técnica",
  },
  {
    name: "MMA",
    icon: User,
    athletes: "780",
    description: "Artes marciais mistas",
  },
  {
    name: "Judô",
    icon: User,
    athletes: "510",
    description: "Arte marcial japonesa",
  },
  {
    name: "Skate",
    icon: Wind,
    athletes: "620",
    description: "Street e park",
  },
  {
    name: "Surf",
    icon: Waves,
    athletes: "590",
    description: "Ondas e manobras",
  },
]

export default function ModalidadesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mx-auto w-fit bg-accent/20 text-accent-foreground border-accent/30">
                18+ Modalidades
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Todas as{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Modalidades Esportivas
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Do futebol ao surf, da natação ao jiu-jitsu. Encontre sua modalidade e conecte-se com oportunidades
              </p>
            </div>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport) => {
                const Icon = sport.icon
                return (
                  <Card
                    key={sport.name}
                    className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1 bg-card"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                        {sport.athletes} atletas
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                      <p className="text-sm text-muted-foreground">{sport.description}</p>
                    </div>
                    <Link href="/dashboard/atleta">
                      <Button className="w-full bg-transparent" variant="outline">
                        Criar Perfil na Modalidade
                      </Button>
                    </Link>
                  </Card>
                )
              })}
            </div>

            {/* More Sports Coming Soon */}
            <div className="mt-12 text-center">
              <Card className="p-8 max-w-2xl mx-auto bg-muted/50">
                <h3 className="text-2xl font-bold mb-2">E muito mais em breve!</h3>
                <p className="text-muted-foreground">
                  Estamos constantemente adicionando novas modalidades. Não encontrou seu esporte? Entre em contato
                  conosco!
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 max-w-4xl mx-auto">
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                  Pronto para se destacar?
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Escolha sua modalidade e crie seu perfil gratuitamente
                </p>
                <Link href="/dashboard/atleta">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                    Criar Conta Grátis
                  </Button>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
