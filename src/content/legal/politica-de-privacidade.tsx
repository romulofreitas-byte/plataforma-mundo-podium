import Link from "next/link";
import { site } from "@/config/site";
import type { LegalSection } from "@/components/legal/LegalDocument";

const UPDATED_AT = "18 de junho de 2026";

export const politicaPrivacidadeMeta = {
  title: "Política de Privacidade",
  updatedAt: UPDATED_AT,
};

export const politicaPrivacidadeSections: LegalSection[] = [
  {
    title: "Introdução",
    content: (
      <>
        <p>
          Esta Política de Privacidade descreve como a <strong>{site.name}</strong> (“nós”, “nosso”
          ou “Plataforma”), operada por pessoa jurídica inscrita no CNPJ {site.legal.cnpj},
          coleta, usa, armazena e protege dados pessoais em conformidade com a Lei Geral de Proteção
          de Dados (Lei nº 13.709/2018 — LGPD).
        </p>
        <p>
          Ela se aplica ao site <Link href={site.url}>{site.url}</Link>, às páginas associadas e à
          experiência de assinatura e acesso à comunidade hospedada no Circle, em{" "}
          <a href="https://plataforma.mundopodium.com.br" target="_blank" rel="noopener noreferrer">
            plataforma.mundopodium.com.br
          </a>
          .
        </p>
        <p>
          Ao utilizar nossos serviços, você declara ter lido e compreendido esta Política. Em caso
          de dúvidas, entre em contato pelo e-mail{" "}
          <Link href={`mailto:${site.legal.email}`}>{site.legal.email}</Link>.
        </p>
      </>
    ),
  },
  {
    title: "Quem é o controlador dos dados",
    content: (
      <>
        <p>
          O controlador dos dados pessoais tratados nesta Política é a responsável pela operação da{" "}
          {site.name}, CNPJ {site.legal.cnpj}, com canal de atendimento em{" "}
          <Link href={`mailto:${site.legal.email}`}>{site.legal.email}</Link>.
        </p>
        <p>
          Para exercer seus direitos previstos na LGPD ou solicitar esclarecimentos sobre o
          tratamento de dados, utilize o mesmo endereço de e-mail indicado acima.
        </p>
      </>
    ),
  },
  {
    title: "Dados pessoais que coletamos",
    content: (
      <>
        <p>Podemos coletar e tratar as seguintes categorias de dados, conforme sua interação:</p>
        <ul>
          <li>
            <strong>Dados de identificação e contato:</strong> nome, e-mail, telefone e demais
            informações fornecidas no cadastro, checkout ou contato conosco.
          </li>
          <li>
            <strong>Dados de pagamento:</strong> informações necessárias à cobrança da assinatura.
            Dados sensíveis de cartão são processados diretamente pelos provedores de pagamento e
            não são armazenados por nós.
          </li>
          <li>
            <strong>Dados de uso da plataforma:</strong> participação em mentorias, salas ao vivo,
            comunidade, comentários, pontuação em gamificação e histórico de acesso ao conteúdo.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas,
            tempo de permanência, origem de acesso e identificadores de dispositivo.
          </li>
          <li>
            <strong>Dados de comunicação:</strong> mensagens enviadas por e-mail, WhatsApp ou canais
            oficiais de suporte.
          </li>
          <li>
            <strong>Gravações de áudio e vídeo:</strong> sessões ao vivo, mentorias e salas de
            ligação podem ser gravadas para fins educacionais, arquivo e melhoria do serviço, com
            aviso prévio quando aplicável.
          </li>
        </ul>
        <p>
          Não solicitamos intencionalmente dados de menores de 18 anos. Se identificarmos coleta
          indevida, adotaremos medidas para exclusão.
        </p>
      </>
    ),
  },
  {
    title: "Como coletamos os dados",
    content: (
      <>
        <p>Os dados são coletados quando você:</p>
        <ul>
          <li>visita nosso site ou páginas de divulgação;</li>
          <li>realiza assinatura, login ou utiliza a plataforma no Circle;</li>
          <li>participa de mentorias, salas ao vivo ou interações na comunidade;</li>
          <li>entra em contato conosco por e-mail, WhatsApp ou redes sociais;</li>
          <li>aceita cookies e tecnologias similares de medição e marketing.</li>
        </ul>
        <p>
          Também podemos receber dados de parceiros essenciais à operação, como processadores de
          pagamento e a plataforma Circle, sempre dentro dos limites contratuais e legais.
        </p>
      </>
    ),
  },
  {
    title: "Finalidades e bases legais do tratamento",
    content: (
      <>
        <p>Tratamos dados pessoais para as finalidades abaixo, com base nas hipóteses da LGPD:</p>
        <ul>
          <li>
            <strong>Prestação do serviço</strong> (execução de contrato): criar e gerenciar sua
            conta, liberar acesso à comunidade, mentorias, conteúdos e funcionalidades da
            assinatura.
          </li>
          <li>
            <strong>Cobrança e gestão financeira</strong> (execução de contrato e obrigação legal):
            processar pagamentos, emitir documentos fiscais quando aplicável e prevenir fraudes.
          </li>
          <li>
            <strong>Comunicação</strong> (execução de contrato e legítimo interesse): enviar avisos
            operacionais, confirmações, suporte e informações relevantes sobre sua assinatura.
          </li>
          <li>
            <strong>Melhoria e segurança</strong> (legítimo interesse): analisar uso, proteger a
            plataforma, detectar abusos e aprimorar a experiência dos membros.
          </li>
          <li>
            <strong>Marketing e mensuração</strong> (consentimento ou legítimo interesse, conforme
            o caso): medir campanhas, remarketing e desempenho de anúncios, quando você consentir ou
            quando permitido pela legislação.
          </li>
          <li>
            <strong>Cumprimento legal</strong> (obrigação legal): atender exigências de autoridades
            e obrigações regulatórias.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Cookies e tecnologias de rastreamento",
    content: (
      <>
        <p>
          Utilizamos cookies e tecnologias semelhantes para funcionamento do site, análise de
          audiência e publicidade. Entre as ferramentas que podemos empregar estão:
        </p>
        <ul>
          <li>
            <strong>Google Analytics 4</strong> — métricas de navegação e comportamento agregado;
          </li>
          <li>
            <strong>Meta Pixel (Facebook)</strong> — mensuração de conversões e otimização de
            campanhas.
          </li>
        </ul>
        <p>
          Você pode gerenciar cookies nas configurações do seu navegador. A desativação pode
          limitar algumas funcionalidades ou a personalização da experiência. Quando exigido por
          lei, solicitaremos consentimento prévio para cookies não essenciais.
        </p>
      </>
    ),
  },
  {
    title: "Compartilhamento de dados",
    content: (
      <>
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com terceiros que nos
          auxiliam na operação do serviço, sob contrato e com medidas de segurança adequadas,
          incluindo:
        </p>
        <ul>
          <li>
            <strong>Circle</strong> — hospedagem da comunidade, cursos, eventos ao vivo e gestão de
            membros;
          </li>
          <li>
            <strong>Processadores de pagamento</strong> — cobrança recorrente da assinatura;
          </li>
          <li>
            <strong>Google e Meta</strong> — analytics e publicidade, conforme descrito nesta
            Política;
          </li>
          <li>
            <strong>Prestadores de infraestrutura e comunicação</strong> — hospedagem, e-mail e
            ferramentas de suporte.
          </li>
        </ul>
        <p>
          Também podemos divulgar dados quando necessário para cumprir lei, ordem judicial,
          proteger direitos ou em operações societárias, respeitando a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    title: "Transferência internacional de dados",
    content: (
      <>
        <p>
          Alguns fornecedores utilizados por nós podem processar dados em servidores localizados
          fora do Brasil, inclusive nos Estados Unidos. Nesses casos, adotamos salvaguardas
          contratuais e técnicas compatíveis com a LGPD para proteger suas informações.
        </p>
      </>
    ),
  },
  {
    title: "Armazenamento e segurança",
    content: (
      <>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger dados contra acesso
          não autorizado, perda, alteração ou divulgação indevida. Entre elas: controle de acesso,
          criptografia quando aplicável e seleção de fornecedores com padrões adequados de
          segurança.
        </p>
        <p>
          Nenhum sistema é totalmente imune a riscos. Em caso de incidente relevante que possa
          afetar seus direitos, comunicaremos conforme exigido pela legislação.
        </p>
      </>
    ),
  },
  {
    title: "Prazo de retenção",
    content: (
      <>
        <p>
          Mantemos os dados pelo tempo necessário para cumprir as finalidades desta Política,
          honrar obrigações legais, resolver disputas e fazer valer nossos acordos. Após esse
          período, os dados serão eliminados ou anonimizados, salvo quando a lei exigir conservação
          por prazo superior.
        </p>
        <p>
          Dados de assinatura e financeiros podem ser mantidos pelo prazo exigido pela legislação
          fiscal e consumerista brasileira.
        </p>
      </>
    ),
  },
  {
    title: "Seus direitos como titular",
    content: (
      <>
        <p>Nos termos da LGPD, você pode solicitar, a qualquer momento:</p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
            desconformidade;
          </li>
          <li>portabilidade, quando aplicável;</li>
          <li>eliminação dos dados tratados com base no consentimento;</li>
          <li>informação sobre compartilhamentos;</li>
          <li>revogação do consentimento;</li>
          <li>oposição a tratamentos realizados com base em legítimo interesse, quando cabível.</li>
        </ul>
        <p>
          Para exercer esses direitos, envie solicitação para{" "}
          <Link href={`mailto:${site.legal.email}`}>{site.legal.email}</Link>. Podemos solicitar
          informações adicionais para confirmar sua identidade antes de atender ao pedido.
        </p>
        <p>
          Você também pode registrar reclamação perante a Autoridade Nacional de Proteção de Dados
          (ANPD), se entender que seus direitos não foram atendidos adequadamente.
        </p>
      </>
    ),
  },
  {
    title: "Comunicações de marketing",
    content: (
      <>
        <p>
          Podemos enviar comunicações sobre novidades, conteúdos e ofertas relacionadas ao ecossistema
          Mundo Pódium. Você pode cancelar o recebimento a qualquer momento pelos links de descadastro
          nas mensagens ou solicitando exclusão pelo e-mail de contato.
        </p>
      </>
    ),
  },
  {
    title: "Alterações desta Política",
    content: (
      <>
        <p>
          Podemos atualizar esta Política periodicamente para refletir mudanças legais, técnicas ou
          operacionais. A data da última atualização será revisada no topo desta página. Alterações
          relevantes poderão ser comunicadas por e-mail ou aviso na plataforma.
        </p>
        <p>
          O uso continuado dos serviços após a publicação de alterações constitui ciência da versão
          vigente, salvo quando nova base legal ou consentimento forem exigidos.
        </p>
      </>
    ),
  },
];
