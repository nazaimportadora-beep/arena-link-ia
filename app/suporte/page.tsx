import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, MessageCircle, Mail, Phone, Book, Video, Users, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Central de Suporte | ArenaLinkIA",
  description: "Encontre ajuda, tutoriais e respostas para suas dúvidas sobre a plataforma ArenaLinkIA.",
}

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Como podemos ajudar?</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Encontre respostas rápidas ou entre em contato com nossa equipe
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Pesquisar na central de ajuda..." className="pl-12 h-12 text-base" />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container max-w-6xl mx-auto px-4 -mt-8 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Book className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Guias e Tutoriais</CardTitle>
              <CardDescription>Aprenda a usar todos os recursos da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="#tutoriais">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Tutoriais
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Video className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Vídeos Explicativos</CardTitle>
              <CardDescription>Assista tutoriais em vídeo passo a passo</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="#videos">
                <Button variant="outline" className="w-full bg-transparent">
                  Assistir Vídeos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Falar com Suporte</CardTitle>
              <CardDescription>Nossa equipe está pronta para ajudar</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contato">
                <Button className="w-full bg-gradient-to-r from-primary to-orange-500">Contato</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">Respostas rápidas para as dúvidas mais comuns</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Geral */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Geral</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>O que é a ArenaLinkIA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A ArenaLinkIA é uma plataforma que conecta atletas amadores a oportunidades profissionais usando
                    Inteligência Artificial. Oferecemos análises avançadas de desempenho através do MatchScore IA e
                    facilitamos o contato direto entre atletas, clubes e scouts de todo o mundo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>É realmente gratuito para atletas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! Atletas podem criar uma conta gratuita com acesso a recursos básicos, incluindo perfil
                    completo, análise IA inicial e visibilidade para clubes. Oferecemos também planos Premium e Pro com
                    recursos avançados para quem deseja maximizar suas oportunidades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Quais modalidades são suportadas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Suportamos mais de 18 modalidades esportivas, incluindo Futebol, Basquete, Vôlei, Futsal, Handebol,
                    Rugby, Futebol Americano, Natação, Atletismo, Tênis, MMA, Boxe, Ciclismo, Skate, Surf, Ginástica,
                    Judô e Taekwondo. Novas modalidades são adicionadas regularmente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>A plataforma está disponível globalmente?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! A ArenaLinkIA conecta atletas e clubes de todo o mundo. Apoiamos múltiplos idiomas e
                    trabalhamos com organizações esportivas em mais de 50 países, facilitando oportunidades
                    internacionais para atletas brasileiros e acesso a talentos globais para clubes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Para Atletas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Para Atletas</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Como criar meu perfil de atleta?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    1. Clique em "Criar Conta Grátis" no topo da página
                    <br />
                    2. Preencha seus dados básicos (nome, email, senha)
                    <br />
                    3. Complete seu perfil com informações esportivas (modalidade, posição, estatísticas)
                    <br />
                    4. Adicione fotos e vídeos de seus melhores momentos
                    <br />
                    5. Nossa IA analisará automaticamente seu perfil e gerará seu MatchScore
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>O que é o MatchScore IA?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    O MatchScore é uma pontuação de 0 a 100 calculada por nossa Inteligência Artificial que avalia
                    múltiplos aspectos do seu desempenho: técnica, tática, físico, mental, histórico e potencial. Ele
                    ajuda clubes a identificarem rapidamente atletas que se encaixam em seus critérios e estilo de jogo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Como melhorar meu MatchScore?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    • Complete 100% do seu perfil com informações detalhadas
                    <br />• Adicione vídeos de qualidade mostrando suas habilidades
                    <br />• Mantenha suas estatísticas atualizadas
                    <br />• Participe de competições e atualize seus resultados
                    <br />• Obtenha recomendações de treinadores ou ex-clubes
                    <br />• Use o plano Premium para acesso a análises avançadas
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Clubes podem me encontrar automaticamente?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim! Clubes e scouts usam nosso sistema de busca avançada e recebem recomendações automáticas da
                    nossa IA baseadas em seus critérios. Quanto mais completo seu perfil, maior sua visibilidade.
                    Usuários Premium aparecem com destaque nos resultados de busca.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Para Clubes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Para Clubes e Scouts</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Como buscar atletas na plataforma?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Após criar sua conta de Clube/Scout, você terá acesso ao nosso dashboard de busca com filtros
                    avançados: modalidade, posição, idade, altura, peso, nacionalidade, MatchScore mínimo e mais. Nossa
                    IA também fornece recomendações personalizadas baseadas no perfil do seu clube.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>Quais informações posso ver sobre os atletas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Você tem acesso a: perfil completo, estatísticas detalhadas, vídeos de performance, histórico de
                    competições, MatchScore IA com breakdown de habilidades, análises técnicas e táticas, projeção de
                    crescimento e informações de contato (com permissão do atleta).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>Como posso entrar em contato com um atleta?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Através da plataforma, você pode: enviar mensagem direta, solicitar mais informações, agendar
                    avaliação presencial ou virtual, fazer proposta formal. Todas as comunicações são registradas para
                    segurança de ambas as partes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>Qual o custo para clubes?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Oferecemos planos flexíveis para clubes: Básico (gratuito para busca limitada), Profissional (acesso
                    completo à base de dados) e Enterprise (soluções customizadas para organizações grandes). Entre em
                    contato para um orçamento personalizado.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Pagamentos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Pagamentos e Planos</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-13">
                  <AccordionTrigger>Quais são os planos disponíveis?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <strong>Gratuito:</strong> Perfil básico, MatchScore inicial, visibilidade limitada
                    <br />
                    <strong>Premium (R$ 29,90/mês):</strong> Análise IA completa, destaque em buscas, estatísticas
                    avançadas
                    <br />
                    <strong>Pro (R$ 79,90/mês):</strong> Tudo do Premium + assessoria personalizada, networking
                    exclusivo, suporte prioritário
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Aceitamos cartão de crédito (todas as bandeiras), boleto bancário, PIX e transferência bancária.
                    Pagamentos internacionais são processados via cartão de crédito em moeda local.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger>Posso cancelar minha assinatura?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim, você pode cancelar a qualquer momento através das configurações da conta. O cancelamento terá
                    efeito no final do período já pago, e você continuará tendo acesso até lá. Oferecemos reembolso
                    total se cancelado dentro de 7 dias da primeira compra.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Segurança e Privacidade</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-16">
                  <AccordionTrigger>Meus dados estão seguros?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutamente. Usamos criptografia de ponta a ponta, servidores seguros certificados e cumprimos
                    todas as normas da LGPD. Seus dados pessoais nunca são vendidos a terceiros. Você tem controle total
                    sobre quem pode ver suas informações.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17">
                  <AccordionTrigger>Quem pode ver meu perfil?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Você decide! Pode configurar seu perfil como: Público (todos podem ver), Clubes Verificados (apenas
                    clubes/scouts verificados), Privado (apenas quem você autorizar). Menores de 18 anos têm
                    configurações de privacidade reforçadas por padrão.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18">
                  <AccordionTrigger>Como reportar um problema ou abuso?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Se você encontrar conteúdo inadequado, suspeitar de fraude ou sofrer assédio, clique no botão
                    "Reportar" no perfil ou mensagem em questão. Nossa equipe de moderação analisa todos os reports em
                    até 24 horas. Em casos urgentes, entre em contato direto pelo suporte.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Accordion>
      </section>

      {/* Contact Options */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Não encontrou o que procurava?</h2>
            <p className="text-muted-foreground">Nossa equipe está pronta para ajudar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Resposta em até 24h</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono">suporte@arenalinkia.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Telefone</CardTitle>
                <CardDescription>Seg-Sex, 9h-18h</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono">+55 (11) 4002-8922</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Comunidade</CardTitle>
                <CardDescription>Fórum e redes sociais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">@arenalinkia</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contato">
              <Button size="lg" className="bg-gradient-to-r from-primary to-orange-500">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
