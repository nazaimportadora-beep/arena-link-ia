import type { Metadata } from "next"
import Link from "next/link"
import { FileText, CheckCircle, AlertTriangle, Scale, UserX, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Termos de Uso | ArenaLinkIA",
  description: "Termos e condições de uso da plataforma ArenaLinkIA.",
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-lg text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                1. Aceitação dos Termos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Bem-vindo à ArenaLinkIA! Ao acessar ou usar nossa plataforma, você concorda em cumprir e estar vinculado
                a estes Termos de Uso. Se você não concorda com alguma parte destes termos, não deve usar nossos
                serviços.
              </p>
              <p>
                Estes termos constituem um acordo legal entre você (o "Usuário") e a ArenaLinkIA ("nós", "nossa" ou
                "Plataforma"). Ao criar uma conta, você confirma que:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tem pelo menos 13 anos de idade (ou a idade legal em sua jurisdição)</li>
                <li>Forneceu informações verdadeiras e precisas</li>
                <li>Tem capacidade legal para aceitar este acordo</li>
                <li>Usará a plataforma de forma ética e legal</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descrição dos Serviços</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A ArenaLinkIA é uma plataforma de tecnologia que conecta atletas amadores a oportunidades profissionais
                através de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Perfis de Atletas:</strong> Criação e gerenciamento de portfólios
                  esportivos completos
                </li>
                <li>
                  <strong className="text-foreground">Análise por IA:</strong> MatchScore e outras métricas calculadas
                  por inteligência artificial
                </li>
                <li>
                  <strong className="text-foreground">Conexão:</strong> Facilitar contato entre atletas, clubes, scouts
                  e agentes
                </li>
                <li>
                  <strong className="text-foreground">Dashboard:</strong> Ferramentas de análise e acompanhamento de
                  performance
                </li>
                <li>
                  <strong className="text-foreground">Recomendações:</strong> Sugestões inteligentes de oportunidades
                  baseadas em perfil
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Importante: A ArenaLinkIA é uma plataforma de conexão. Não garantimos emprego, contratos ou resultados
                específicos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Contas de Usuário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.1 Criação de Conta</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Você é responsável por manter a confidencialidade de sua senha</li>
                    <li>Não compartilhe suas credenciais com terceiros</li>
                    <li>Notifique-nos imediatamente sobre uso não autorizado</li>
                    <li>Você é responsável por todas as atividades em sua conta</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.2 Tipos de Conta</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Atleta:</strong> Para atletas que buscam oportunidades
                    </li>
                    <li>
                      <strong>Clube/Scout:</strong> Para organizações que buscam talentos
                    </li>
                    <li>
                      <strong>Agente:</strong> Para representantes de atletas
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.3 Verificação</h3>
                  <p>
                    Podemos solicitar verificação de identidade ou informações para manter a integridade da plataforma.
                    A não verificação pode limitar recursos ou resultar em suspensão da conta.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                4. Uso Aceitável
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Você concorda em NÃO:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações falsas ou enganosas</li>
                <li>Criar múltiplas contas para manipular o sistema</li>
                <li>Usar a plataforma para atividades ilegais ou fraudulentas</li>
                <li>Assediar, intimidar ou discriminar outros usuários</li>
                <li>Fazer spam, phishing ou distribuir malware</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Tentar acessar áreas restritas da plataforma</li>
                <li>Usar bots, scrapers ou ferramentas automatizadas não autorizadas</li>
                <li>Revender ou redistribuir nossos serviços sem autorização</li>
                <li>Interferir no funcionamento da plataforma</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Violações podem resultar em suspensão ou exclusão permanente da conta, além de possíveis ações legais.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Conteúdo do Usuário</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">5.1 Propriedade</h3>
                  <p>
                    Você mantém todos os direitos sobre o conteúdo que envia (fotos, vídeos, estatísticas). Ao enviar,
                    você nos concede uma licença mundial, não exclusiva, livre de royalties para usar, exibir e
                    processar esse conteúdo para fornecer nossos serviços.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5.2 Responsabilidade</h3>
                  <p>Você é responsável pelo conteúdo que envia e garante que:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Possui direitos sobre todo o conteúdo enviado</li>
                    <li>O conteúdo não infringe direitos de terceiros</li>
                    <li>O conteúdo é apropriado e não viola estes termos</li>
                    <li>Tem permissão para compartilhar imagens de terceiros</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">5.3 Moderação</h3>
                  <p>
                    Reservamos o direito de revisar, remover ou recusar qualquer conteúdo que viole nossos termos ou que
                    consideremos inadequado, sem aviso prévio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                6. Planos e Pagamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.1 Planos Disponíveis</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Gratuito:</strong> Acesso básico à plataforma
                    </li>
                    <li>
                      <strong>Premium:</strong> Recursos avançados de IA e visibilidade aumentada
                    </li>
                    <li>
                      <strong>Pro:</strong> Ferramentas profissionais completas
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.2 Pagamentos</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Aceitamos cartão de crédito, boleto e PIX</li>
                    <li>Assinaturas são cobradas automaticamente</li>
                    <li>Preços podem mudar com aviso prévio de 30 dias</li>
                    <li>Todos os valores estão em Reais (BRL) e incluem impostos aplicáveis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">6.3 Cancelamento e Reembolso</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Você pode cancelar sua assinatura a qualquer momento</li>
                    <li>O cancelamento tem efeito no final do período pago</li>
                    <li>Reembolsos são oferecidos dentro de 7 dias da compra inicial</li>
                    <li>Após 7 dias, não oferecemos reembolsos proporcionais</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                7. Propriedade Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A ArenaLinkIA, seus logos, design, algoritmos de IA e todo conteúdo da plataforma são protegidos por
                direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              <p>Você NÃO pode:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copiar, modificar ou distribuir nossa tecnologia</li>
                <li>Fazer engenharia reversa de nossos algoritmos</li>
                <li>Usar nossas marcas sem autorização expressa</li>
                <li>Criar produtos ou serviços derivados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Isenção de Garantias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>A PLATAFORMA É FORNECIDA "COMO ESTÁ" E "CONFORME DISPONÍVEL". NÃO GARANTIMOS:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Que a plataforma estará sempre disponível ou livre de erros</li>
                <li>Que as análises de IA são 100% precisas ou definitivas</li>
                <li>Que você conseguirá contrato ou emprego através da plataforma</li>
                <li>Que os clubes/scouts responderão às suas solicitações</li>
                <li>A qualidade, segurança ou legalidade das oportunidades oferecidas</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Use nossos serviços por sua conta e risco. Sempre faça sua própria verificação sobre oportunidades e
                contatos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A ARENALINKIA NÃO SERÁ RESPONSÁVEL POR:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Danos indiretos, incidentais ou consequenciais</li>
                <li>Perda de lucros, receitas ou oportunidades</li>
                <li>Danos causados por terceiros (clubes, scouts, outros usuários)</li>
                <li>Perda de dados ou interrupção de serviço</li>
                <li>Conteúdo de terceiros ou links externos</li>
              </ul>
              <p className="mt-4">
                Nossa responsabilidade total não excederá o valor pago por você nos últimos 12 meses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserX className="w-5 h-5 text-orange-500" />
                10. Rescisão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">10.1 Por Você</h3>
                  <p>
                    Você pode encerrar sua conta a qualquer momento através das configurações ou entrando em contato com
                    o suporte.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">10.2 Por Nós</h3>
                  <p>Podemos suspender ou encerrar sua conta imediatamente se você:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Violar estes Termos de Uso</li>
                    <li>Usar a plataforma de forma fraudulenta ou ilegal</li>
                    <li>Representar risco à segurança da plataforma ou outros usuários</li>
                    <li>Não pagar por serviços contratados</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">10.3 Efeitos da Rescisão</h3>
                  <p>Após o encerramento da conta:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Você perde acesso imediato à plataforma</li>
                    <li>Seus dados podem ser retidos conforme nossa Política de Privacidade</li>
                    <li>Conteúdo público pode permanecer em cache temporariamente</li>
                    <li>Obrigações financeiras pendentes permanecem válidas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Alterações nos Termos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Podemos atualizar estes termos periodicamente. Mudanças significativas serão notificadas por email ou
                aviso na plataforma com pelo menos 30 dias de antecedência.
              </p>
              <p>
                Seu uso continuado após as alterações constitui aceitação dos novos termos. Se você não concordar, deve
                encerrar sua conta antes da data de vigência.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Lei Aplicável e Jurisdição</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Estes termos são regidos pelas leis do Brasil. Quaisquer disputas serão resolvidas nos tribunais de São
                Paulo, SP.
              </p>
              <p>
                Para usuários internacionais, aplicam-se também as leis de proteção ao consumidor de sua jurisdição.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Disposições Gerais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Acordo Completo:</strong> Estes termos constituem o acordo
                  completo entre você e a ArenaLinkIA
                </li>
                <li>
                  <strong className="text-foreground">Divisibilidade:</strong> Se alguma cláusula for inválida, as
                  demais permanecem em vigor
                </li>
                <li>
                  <strong className="text-foreground">Não Renúncia:</strong> Nossa falha em exercer direitos não
                  constitui renúncia
                </li>
                <li>
                  <strong className="text-foreground">Cessão:</strong> Você não pode transferir seus direitos; nós
                  podemos ceder este acordo
                </li>
                <li>
                  <strong className="text-foreground">Força Maior:</strong> Não somos responsáveis por falhas devido a
                  eventos fora de nosso controle
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle>Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Dúvidas sobre estes termos? Entre em contato:</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> legal@arenalinkia.com
                </p>
                <p>
                  <strong>Telefone:</strong> +55 (11) 4002-8922
                </p>
                <p>
                  <strong>Endereço:</strong> Av. Paulista, 1578 - São Paulo, SP, 01310-200
                </p>
              </div>
              <Link href="/contato">
                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-orange-500 text-white rounded-lg hover:opacity-90 font-semibold">
                  Falar com o Suporte
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
