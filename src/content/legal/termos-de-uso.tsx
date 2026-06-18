import Link from "next/link";
import { site } from "@/config/site";
import type { LegalSection } from "@/components/legal/LegalDocument";

const UPDATED_AT = "18 de junho de 2026";

export const termosDeUsoMeta = {
  title: "Termos de Uso",
  updatedAt: UPDATED_AT,
};

export const termosDeUsoSections: LegalSection[] = [
  {
    title: "Aceitação dos Termos",
    content: (
      <>
        <p>
          Estes Termos de Uso (“Termos”) regulam o acesso e a utilização da{" "}
          <strong>{site.name}</strong>, operada por pessoa jurídica inscrita no CNPJ{" "}
          {site.legal.cnpj}, incluindo o site <Link href={site.url}>{site.url}</Link> e a área de
          membros hospedada no Circle em{" "}
          <a href="https://plataforma.mundopodium.com.br" target="_blank" rel="noopener noreferrer">
            plataforma.mundopodium.com.br
          </a>
          .
        </p>
        <p>
          Ao criar conta, assinar, acessar ou utilizar qualquer parte do serviço, você declara ter
          lido, compreendido e concordado com estes Termos e com a{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Se não concordar,
          não utilize a Plataforma.
        </p>
      </>
    ),
  },
  {
    title: "Definições",
    content: (
      <>
        <ul>
          <li>
            <strong>Plataforma:</strong> ecossistema digital da {site.name}, incluindo site
            institucional, checkout e ambiente de comunidade no Circle.
          </li>
          <li>
            <strong>Piloto:</strong> usuário com assinatura ativa ou em período de acesso
            autorizado.
          </li>
          <li>
            <strong>Conteúdo:</strong> aulas, mentorias, gravações, materiais, posts, comentários,
            salas ao vivo e demais recursos disponibilizados na casa.
          </li>
          <li>
            <strong>Assinatura:</strong> plano recorrente que garante acesso às funcionalidades
            contratadas.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Descrição do serviço",
    content: (
      <>
        <p>
          A {site.name} é uma comunidade e programa de treinamento focado em prospecção comercial,
          cold call, prática ao vivo, mentorias e conteúdo estruturado. O serviço inclui, conforme
          o plano vigente, acesso a:
        </p>
        <ul>
          <li>Sala de Ligação e treinos ao vivo;</li>
          <li>mentorias em dias e horários divulgados na plataforma;</li>
          <li>biblioteca de aulas e gravações (incluindo PódiumFlix);</li>
          <li>comunidade de Pilotos;</li>
          <li>gamificação, pontuação e brindes da Corrida ao Vivo, quando ativos.</li>
        </ul>
        <p>
          O serviço tem natureza educacional e de desenvolvimento profissional. Resultados
          comerciais dependem de esforço, dedicação e contexto de cada Piloto. Não garantimos
          faturamento, número de reuniões ou conversões específicas.
        </p>
      </>
    ),
  },
  {
    title: "Elegibilidade e cadastro",
    content: (
      <>
        <p>
          Para utilizar a Plataforma, você deve ter pelo menos 18 anos e capacidade civil para
          contratar. Ao se cadastrar, você se compromete a fornecer informações verdadeiras,
          completas e atualizadas.
        </p>
        <p>
          Você é responsável pela confidencialidade de suas credenciais de acesso e por todas as
          atividades realizadas em sua conta. Notifique-nos imediatamente em caso de uso não
          autorizado pelo e-mail{" "}
          <Link href={`mailto:${site.legal.email}`}>{site.legal.email}</Link>.
        </p>
        <p>
          É vedado compartilhar login, revender acesso ou permitir que terceiros utilizem sua
          conta de forma não autorizada.
        </p>
      </>
    ),
  },
  {
    title: "Assinatura, pagamento e cancelamento",
    content: (
      <>
        <p>
          O acesso à área de membros está condicionado ao pagamento da assinatura vigente, atualmente
          no valor de <strong>{site.precoMensal}/mês</strong>, salvo promoções comunicadas de forma
          clara no momento da contratação.
        </p>
        <p>
          A cobrança é recorrente e processada por provedores de pagamento integrados ao Circle ou
          parceiros indicados no checkout. Ao assinar, você autoriza as cobranças conforme o ciclo
          contratado até que o cancelamento seja efetivado.
        </p>
        {site.cancelamentoLivre && (
          <p>
            Você pode cancelar sua assinatura a qualquer momento, sem multa contratual, pelas
            configurações da conta ou solicitando suporte. O cancelamento interrompe novas cobranças,
            mas o acesso permanece ativo até o fim do período já pago, salvo disposição diversa
            informada no ato da compra.
          </p>
        )}
        <p>
          Não há reembolso proporcional por período não utilizado após o cancelamento, exceto quando
          exigido pela legislação consumerista ou expressamente previsto em campanha promocional.
        </p>
        <p>
          Reservamo-nos o direito de alterar preços para novas contratações ou renovações futuras,
          com comunicação prévia quando aplicável.
        </p>
      </>
    ),
  },
  {
    title: "Conduta e uso aceitável",
    content: (
      <>
        <p>
          A Plataforma existe para aprendizado, prática profissional e troca respeitosa entre
          Pilotos. Ao participar, você concorda em não:
        </p>
        <ul>
          <li>publicar conteúdo ilegal, discriminatório, difamatório ou que viole direitos de terceiros;</li>
          <li>assediar, ameaçar ou humilhar outros membros, equipe ou convidados;</li>
          <li>divulgar dados pessoais de terceiros sem autorização;</li>
          <li>gravar, redistribuir ou comercializar conteúdos da Plataforma sem permissão;</li>
          <li>usar a comunidade para spam, pirâmides, promessas enganosas ou práticas abusivas de vendas;</li>
          <li>tentar burlar sistemas de acesso, gamificação ou segurança;</li>
          <li>utilizar a Plataforma para fins ilícitos ou incompatíveis com sua finalidade educacional.</li>
        </ul>
        <p>
          O descumprimento pode resultar em advertência, suspensão ou encerramento da conta, sem
          prejuízo de medidas legais cabíveis.
        </p>
      </>
    ),
  },
  {
    title: "Propriedade intelectual",
    content: (
      <>
        <p>
          Todo o Conteúdo disponibilizado na Plataforma — incluindo marcas, método, textos, vídeos,
          layouts, materiais didáticos e gravações — é protegido por direitos de propriedade
          intelectual da {site.name} ou de licenciantes.
        </p>
        <p>
          A assinatura concede licença pessoal, limitada, revogável e não exclusiva de acesso para
          uso individual. É proibida a reprodução, distribuição, cessão, sublicenciamento ou
          exploração comercial sem autorização prévia por escrito.
        </p>
        <p>
          Ao publicar comentários, áudios, vídeos ou outros materiais na comunidade, você nos
          concede licença não exclusiva para hospedar, exibir e utilizar esse conteúdo no contexto
          da Plataforma, respeitando sua titularidade original.
        </p>
      </>
    ),
  },
  {
    title: "Sessões ao vivo, gravações e imagem",
    content: (
      <>
        <p>
          Mentorias, salas de ligação e eventos ao vivo podem ser gravados e disponibilizados para
          revisão dos membros. Ao participar, você autoriza o uso de sua voz, imagem e contribuições
          no ambiente da Plataforma para fins educacionais e de arquivo, salvo manifestação em
          contrário comunicada previamente à equipe quando tecnicamente viável.
        </p>
        <p>
          Caso realize ligações reais durante treinos, você é integralmente responsável por cumprir a
          legislação aplicável, incluindo regras de prospecção, registro de consentimento e normas do
          seu setor (como mercado financeiro regulado).
        </p>
      </>
    ),
  },
  {
    title: "Terceiros e links externos",
    content: (
      <>
        <p>
          A experiência de membros é hospedada no Circle, e o pagamento pode ser processado por
          terceiros. Esses serviços possuem termos e políticas próprios. Não nos responsabilizamos
          por indisponibilidades, falhas ou práticas desses provedores além do que a lei exigir.
        </p>
        <p>
          Links para sites ou perfis externos são fornecidos apenas por conveniência. Não endossamos
          nem controlamos conteúdos de terceiros.
        </p>
      </>
    ),
  },
  {
    title: "Disponibilidade e alterações do serviço",
    content: (
      <>
        <p>
          Empregamos esforços razoáveis para manter a Plataforma disponível, mas não garantimos
          funcionamento ininterrupto ou livre de erros. Podemos alterar, incluir ou descontinuar
          funcionalidades, horários de mentorias, formatos de salas ou benefícios de gamificação,
          mediante comunicação adequada quando a mudança for relevante para a experiência contratada.
        </p>
      </>
    ),
  },
  {
    title: "Limitação de responsabilidade",
    content: (
      <>
        <p>
          Na máxima extensão permitida pela lei brasileira, a {site.name} não se responsabiliza por:
        </p>
        <ul>
          <li>resultados comerciais, financeiros ou profissionais obtidos ou não pelos Pilotos;</li>
          <li>decisões tomadas com base no Conteúdo ou em interações na comunidade;</li>
          <li>danos indiretos, lucros cessantes ou perda de oportunidade;</li>
          <li>falhas de internet, equipamentos ou serviços de terceiros fora de nosso controle.</li>
        </ul>
        <p>
          Nada nestes Termos limita direitos irrenunciáveis previstos no Código de Defesa do
          Consumidor quando aplicável à relação de consumo.
        </p>
      </>
    ),
  },
  {
    title: "Suspensão e encerramento",
    content: (
      <>
        <p>
          Podemos suspender ou encerrar o acesso em caso de violação destes Termos, inadimplência,
          fraude, risco à comunidade ou exigência legal. Você pode encerrar sua participação a
          qualquer momento cancelando a assinatura conforme a seção correspondente.
        </p>
        <p>
          As cláusulas que, por sua natureza, devam sobreviver ao término — como propriedade
          intelectual, limitação de responsabilidade e foro — permanecerão vigentes.
        </p>
      </>
    ),
  },
  {
    title: "Alterações dos Termos",
    content: (
      <>
        <p>
          Podemos revisar estes Termos periodicamente. A data da última atualização constará no topo
          desta página. Alterações materiais poderão ser comunicadas por e-mail ou aviso na
          Plataforma. O uso continuado após a vigência das mudanças representa concordância com a
          nova versão.
        </p>
      </>
    ),
  },
  {
    title: "Lei aplicável e foro",
    content: (
      <>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          da comarca de Belo Horizonte/MG para dirimir controvérsias, salvo quando a legislação
          consumerista determinar competência diversa em favor do consumidor.
        </p>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas para{" "}
          <Link href={`mailto:${site.legal.email}`}>{site.legal.email}</Link>.
        </p>
      </>
    ),
  },
];
