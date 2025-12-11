import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Eye, UserCheck, Database, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Privacidade | ArenaLinkIA",
  description: "Entenda como coletamos, usamos e protegemos seus dados pessoais na plataforma ArenaLinkIA.",
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                1. Informações que Coletamos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>A ArenaLinkIA coleta diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1.1 Informações Pessoais</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nome completo, email, telefone</li>
                    <li>Data de nascimento, gênero, nacionalidade</li>
                    <li>Informações de perfil do atleta (altura, peso, posição)</li>
                    <li>Fotos e vídeos de performance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">1.2 Dados de Performance</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Estatísticas esportivas e métricas de desempenho</li>
                    <li>Histórico de jogos e competições</li>
                    <li>Análises técnicas e táticas</li>
                    <li>Dados gerados pela IA (MatchScore, projeções)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">1.3 Dados de Uso</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Informações de navegação e interação com a plataforma</li>
                    <li>Endereço IP, tipo de dispositivo, navegador</li>
                    <li>Cookies e tecnologias similares</li>
                    <li>Logs de acesso e atividades</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                2. Como Usamos Suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Fornecer nossos serviços:</strong> Criar e manter seu perfil,
                  processar análises de IA, conectar atletas e clubes
                </li>
                <li>
                  <strong className="text-foreground">Melhorar a plataforma:</strong> Desenvolver novos recursos,
                  otimizar algoritmos de IA, personalizar experiência
                </li>
                <li>
                  <strong className="text-foreground">Comunicação:</strong> Enviar notificações importantes,
                  atualizações de match, newsletters (com seu consentimento)
                </li>
                <li>
                  <strong className="text-foreground">Segurança:</strong> Detectar fraudes, proteger contra abusos,
                  garantir conformidade legal
                </li>
                <li>
                  <strong className="text-foreground">Análise:</strong> Entender padrões de uso, gerar estatísticas
                  agregadas, pesquisa e desenvolvimento
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                3. Compartilhamento de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Podemos compartilhar suas informações com:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Clubes e Scouts:</strong> Com seu consentimento explícito,
                  compartilhamos seu perfil e análises com potenciais empregadores
                </li>
                <li>
                  <strong className="text-foreground">Provedores de Serviço:</strong> Empresas que auxiliam na operação
                  da plataforma (hospedagem, analytics, pagamentos)
                </li>
                <li>
                  <strong className="text-foreground">Requisitos Legais:</strong> Quando exigido por lei ou para
                  proteger direitos e segurança
                </li>
                <li>
                  <strong className="text-foreground">Parceiros:</strong> Com seu consentimento, para oportunidades
                  específicas (camps, treinamentos, patrocínios)
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Nunca vendemos suas informações pessoais para terceiros.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                4. Segurança e Proteção
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso</li>
                <li>Autenticação segura e controle de acesso</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e planos de recuperação</li>
                <li>Conformidade com LGPD e padrões internacionais</li>
                <li>Auditorias de segurança periódicas</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                5. Seus Direitos (LGPD)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Acesso:</strong> Consultar quais dados temos sobre você
                </li>
                <li>
                  <strong className="text-foreground">Correção:</strong> Atualizar informações incompletas ou incorretas
                </li>
                <li>
                  <strong className="text-foreground">Exclusão:</strong> Solicitar a remoção de seus dados
                </li>
                <li>
                  <strong className="text-foreground">Portabilidade:</strong> Receber seus dados em formato estruturado
                </li>
                <li>
                  <strong className="text-foreground">Revogação:</strong> Retirar consentimentos dados anteriormente
                </li>
                <li>
                  <strong className="text-foreground">Oposição:</strong> Opor-se ao tratamento de seus dados
                </li>
                <li>
                  <strong className="text-foreground">Informação:</strong> Saber com quem compartilhamos seus dados
                </li>
              </ul>
              <p className="mt-4">
                Para exercer seus direitos, entre em contato através de{" "}
                <Link href="/contato" className="text-primary hover:underline font-semibold">
                  nossa página de contato
                </Link>{" "}
                ou email: privacidade@arenalinkia.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Retenção de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dados de conta: enquanto sua conta estiver ativa</li>
                <li>Dados de performance: até 7 anos após inatividade</li>
                <li>Dados de comunicação: 2 anos</li>
                <li>Dados fiscais e legais: conforme exigido por lei</li>
              </ul>
              <p className="mt-4">
                Após o período de retenção, os dados são anonimizados ou excluídos de forma segura.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies e Tecnologias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Utilizamos cookies e tecnologias similares para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Manter sua sessão ativa e segura</li>
                <li>Lembrar suas preferências</li>
                <li>Analisar uso da plataforma</li>
                <li>Personalizar conteúdo e anúncios</li>
              </ul>
              <p className="mt-4">
                Você pode gerenciar cookies nas configurações do seu navegador. Note que desabilitar cookies pode afetar
                funcionalidades da plataforma.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Menores de Idade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Atletas menores de 18 anos podem usar a plataforma com consentimento dos pais ou responsáveis legais.
                Para menores de 13 anos, exigimos autorização expressa e supervisionada dos responsáveis.
              </p>
              <p>
                Tomamos medidas especiais para proteger a privacidade de menores, incluindo limitações no
                compartilhamento de dados e comunicações.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Transferências Internacionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Como conectamos atletas e clubes globalmente, seus dados podem ser transferidos e processados em outros
                países. Garantimos que essas transferências cumpram a LGPD e usem mecanismos de proteção adequados, como
                cláusulas contratuais padrão.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por email ou
                aviso na plataforma. A data de "última atualização" no topo indica quando a política foi revisada.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle>Contato e Dúvidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre esta política ou sobre como tratamos seus dados, entre em contato:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> privacidade@arenalinkia.com
                </p>
                <p>
                  <strong>Telefone:</strong> +55 (11) 4002-8922
                </p>
                <p>
                  <strong>Endereço:</strong> Av. Paulista, 1578 - São Paulo, SP
                </p>
                <p>
                  <strong>DPO:</strong> dpo@arenalinkia.com
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
