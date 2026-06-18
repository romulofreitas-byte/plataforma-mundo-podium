export type VideoSource =
  | { type: "mp4"; src: string; poster?: string }
  | { type: "youtube"; id: string; poster?: string };

export type FaqItem = {
  pergunta: string;
  resposta: string;
};

const precoMensal = "R$ 89,90";

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
  {
    pergunta: "Como funciona a Corrida ao Vivo e os brindes?",
    resposta:
      "Cada interação na casa — participar, comentar, mostrar resultado, ajudar outro Piloto — vira pontos. Pontos viram brindes oficiais do Mundo Pódium.",
  },
  {
    pergunta: "Preciso ter experiência?",
    resposta:
      "Não. A casa serve desde quem tem medo de ligar até SDRs e líderes comerciais que querem converter mais.",
  },
  {
    pergunta: "Funciona pro meu nicho?",
    resposta:
      "Sim. Freelancers, agências, SDRs, donos de negócio e até mercado regulado (assessores de investimento) treinam aqui.",
  },
  {
    pergunta: "Quanto custa e como cancelo?",
    resposta: `A assinatura é de ${precoMensal}/mês. Cancele quando quiser, sem burocracia.`,
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
  precoAncora: "",
  checkoutUrl:
    "https://plataforma.mundopodium.com.br/checkout/plataforma-mundo-podium-casa",
  whatsapp: "https://wa.me/5531994293099",
  instagram: "https://instagram.com/romulocsfreitas",
  youtube: "https://youtube.com/@combustivelmv",
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
    apice: "Elite",
  },
  legal: {
    cnpj: "43.393.622/0001-30",
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
    prints: [] as string[],
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
    "Corrida ao Vivo — gamificação e brindes",
  ],
} as const;
