export type VideoSource =
  | { type: "mp4"; src: string; poster?: string }
  | { type: "youtube"; id: string; poster?: string };

export type FaqItem = {
  pergunta: string;
  resposta: string;
};

const precoMensal = "R$ 89,90";
const precoMensalNumero = 89.9;
const precoAncora = "R$ 129,90";
const precoAnual = "R$ 899";
const precoAnualAncora = "R$ 1.558,80";

const faqItems: FaqItem[] = [
  {
    pergunta: "O que é a Plataforma Mundo Pódium?",
    resposta:
      "É a camada paga de membros do ecossistema Mundo Pódium, hospedada no Circle. É onde você treina cold call de verdade — com ligações ao vivo, comunidade, mentorias e conteúdo estruturado.",
  },
  {
    pergunta: "Onde ela fica hospedada?",
    resposta:
      "No Circle, uma plataforma de comunidade e cursos. Você acessa tudo com login único, no navegador ou app.",
  },
  {
    pergunta: "Como funcionam as mentorias ao vivo?",
    resposta:
      "Toda Segunda e Quinta, às 11h (horário de Brasília), encontros ao vivo com o Rômulo e a turma para tirar dúvidas, analisar ligações e ajustar a rota.",
  },
  {
    pergunta: "O que é a Sala de Ligação?",
    resposta:
      "O coração da casa. Cold call ao vivo, treino real, com correção na hora. Cliente real do outro lado, sem roteiro de novela.",
  },
  {
    pergunta: "As ligações e aulas ficam gravadas?",
    resposta:
      "Sim. Tudo fica gravado na casa pra você rever quando quiser, incluindo no PódiumFlix.",
  },
  // {
  //   pergunta: "Como funciona a Corrida ao Vivo e os brindes?",
  //   resposta:
  //     "Cada interação na casa — participar, comentar, mostrar resultado, ajudar outro Piloto — vira pontos. Pontos viram brindes oficiais do Mundo Pódium.",
  // },
  {
    pergunta: "Preciso ter experiência?",
    resposta:
      "Não. A casa serve desde quem tem medo de ligar até SDRs e líderes comerciais que querem converter mais.",
  },
  {
    pergunta: "Funciona pro meu nicho?",
    resposta:
      "Sim. Freelancers, agências, SDRs, donos de negócio, corretores/consultores de seguros e plano de saúde e até mercado regulado (assessores de investimento) treinam aqui.",
  },
  {
    pergunta: "Quanto custa e como cancelo?",
    resposta: `Você começa com 7 dias de teste (R$ 0 hoje). Depois a assinatura é de ${precoMensal}/mês, ou ${precoAnual} à vista no plano anual. Cancele quando quiser, sem burocracia.`,
  },
];

export const site = {
  name: "Plataforma Mundo Pódium",
  tagline: "Processo, prática e direção — o Pódium começa aqui.",
  description:
    "A casa onde os Pilotos treinam prospecção de verdade: ligação real ao vivo, comunidade e mentorias com método no Circle.",
  // Landing (Vercel) — checkout permanece no Circle em plataforma.*
  url: "https://casa.mundopodium.com.br",
  precoMensal,
  precoMensalNumero,
  precoAncora,
  precoAnual,
  precoAnualAncora,
  trial: {
    dias: 7,
    rotulo: "7 dias de teste",
    notaHeroDestaque: "R$ 0 hoje.",
    notaHero: `Depois, ${precoMensal}/mês. Cancele quando quiser.`,
    notaOferta: "R$ 0 hoje. Depois vira a assinatura mensal.",
  },
  pagamentos: ["Cartão"] as const,
  cta: {
    teste: "Começar 7 dias grátis",
    casa: "Entrar na casa",
    sticky: "7 dias grátis · Entrar",
    verPorDentro: "Ver por dentro",
  },
  heroKicker: {
    lead: "PLATAFORMA MUNDO PÓDIUM",
    trail: "O ECOSSISTEMA NO CIRCLE",
  },
  checkoutUrl:
    "https://plataforma.mundopodium.com.br/checkout/plataforma-mundo-podium-casa",
  whatsapp: "https://wa.me/5531994293099",
  instagram: "https://instagram.com/romulocsfreitas",
  youtube: "https://youtube.com/@mundopodium",
  mentorias: {
    dias: "Segunda e Quinta",
    hora: "11h",
    fuso: "horário de Brasília",
  },
  escassez: { ativo: false, texto: "" },
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "[[CONFIG: GA4_ID]]",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "878170965336988",
  niveis: {
    entrada: "Pit Stop",
    principal: "Acelerador",
    apice: "Elite Pódium",
  },
  legal: {
    cnpj: "68.349.974/0001-19",
    politicaPrivacidade: "/politica-de-privacidade",
    termos: "/termos-de-uso",
    email: "contato@mundopodium.com.br",
  },
  cancelamentoLivre: true,
  videos: {
    hero: null as VideoSource | null,
    tour: null as VideoSource | null,
    salaLigacaoPrincipal: null as VideoSource | null,
    salaLigacaoGaleria: [] as Array<VideoSource & { legenda: string }>,
    depoimentos: [] as Array<VideoSource & { nome?: string }>,
  },
  demos: {
    prints: [] as string[],
  },
  depoimentos: {
    /** Ordem: 1º = spotlight; demais = grade. Uma pessoa = um item; partes no mesmo `images`. */
    items: [
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_guilherme-alves-elogia-argumento-do-grup_parte-1.png",
          "/depoimentos/gallery/gallery_comunidade_guilherme-alves-elogia-argumento-do-grup_parte-2.png",
        ],
        highlight: "Esse grupo aqui é uma mina de ouro",
        name: "Guilherme Alves",
        role: "Piloto da comunidade",
        alt: "Membro da comunidade chama o grupo de mina de ouro",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_destravamento_alanis-almeida-diz-que-o-workshop-de-lig_comp-b.png",
        ],
        highlight: "Vira a chave pra quem está no limbo das ligações",
        name: "Alanis Almeida",
        role: "Membro da Casa",
        bodyQuote:
          "Quem está com receio de participar, eu digo PARTICIPE! Porque ter pessoas na ativa faz total diferença.",
        alt: "Membro fala sobre destravamento e troca na comunidade",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_mayara-curitiba-cumprimenta-o-grupo-e-di.png",
        ],
        highlight: "Estou adorando a comunidade",
        name: "Mayara",
        role: "Membro da Casa",
        alt: "Mayara de Curitiba diz que está adorando a comunidade",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_aluno-novo-elogia-a-sintonia-e-o-valor-d.png",
        ],
        highlight: "Tem valor demais esse grupo",
        name: "Piloto novo",
        role: "Membro da Casa",
        alt: "Novo membro elogia a sintonia e o valor do grupo no primeiro dia",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_apos-live-emocional-membros-reforcam-con_parte-1.png",
          "/depoimentos/gallery/gallery_comunidade_apos-live-emocional-membros-reforcam-con_parte-2.png",
        ],
        highlight: "Estamos todos na mesma jornada",
        name: "Gabriel",
        role: "Piloto da comunidade",
        alt: "Membro reforça conexão e jornada compartilhada após a live",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_gente-so-facam_parte-2.png",
          "/depoimentos/gallery/gallery_comunidade_gente-so-facam_parte-4.png",
          "/depoimentos/gallery/gallery_comunidade_gente-so-facam_parte-1.png",
        ],
        highlight: "Gente, só façam!",
        name: "André Neto",
        role: "Piloto da comunidade",
        bodyQuote: "Empresários dizendo: é exatamente isso que eu preciso.",
        alt: "Membro incentiva a turma a agir e valida entrega com empresários",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_bruno-henrique-da-nota-1000-e-chama-a-en.png",
        ],
        highlight: "Nota 1000! Entrega absurda!",
        name: "Bruno Henrique",
        role: "Piloto da comunidade",
        alt: "Bruno Henrique dá nota máxima à entrega da casa",
      },
      {
        images: [
          "/depoimentos/gallery/gallery_comunidade_victor-diz-que-a-equipe-adorou-e-pede-o.png",
        ],
        highlight: "Pessoal quer o link da comunidade!",
        name: "Victor",
        role: "Membro da Casa",
        alt: "Victor diz que a equipe adorou e pede o link da comunidade",
      },
    ],
  },
  autoridade: {
    foto: "/romulo.jpg",
    metricas: [
      { valor: "+12 anos", label: "em vendas" },
      { valor: "+130 lives", label: "de cold call real" },
      { valor: "Método Pódium", label: "criador" },
    ],
  },
  marquee: [
    "agendou a 1ª reunião",
    "perdeu o medo de ligar",
    "ligação ao vivo",
    "comunidade que cobra",
    "atravessou o limbo",
    "treino real",
    "cold call sem roteiro",
    "primeira reunião marcada",
    "feedback na hora",
    "Sala de Ligação ao vivo",
    "mentoria toda semana",
    "evoluiu com a turma",
    "constância virou resultado",
    "Piloto em ação",
    "destravou o telefone",
    "agendou por cold call",
  ],
  faq: faqItems,
  ofertaInclusos: [
    "Acesso às 4 frentes da casa",
    "Sala de Ligação ao vivo",
    "Mentorias Segunda e Quinta, 11h",
    "PódiumFlix — biblioteca de aulas",
    "Comunidade de Pilotos",
    // "Corrida ao Vivo — gamificação e brindes", // oculto com a seção de gamificação
  ],
} as const;
