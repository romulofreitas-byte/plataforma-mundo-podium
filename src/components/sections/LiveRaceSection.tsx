import { IconLine } from "@/components/icons/IconLine";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { Kicker } from "@/components/ui/Kicker";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const pontos = [
  {
    icon: "chat" as const,
    title: "Interagir na comunidade",
    desc: "Comentários, dúvidas e troca de ideias valem pontos.",
  },
  {
    icon: "onda-sonora" as const,
    title: "Participar das ligações ao vivo",
    desc: "Estar na Sala de Ligação e nas mentorias conta.",
  },
  {
    icon: "bandeira-quadriculada" as const,
    title: "Postar conquistas",
    desc: "Cada resultado na Chegada ao Pódium soma.",
  },
  {
    icon: "aperto-mao" as const,
    title: "Ajudar outros Pilotos",
    desc: "Engajamento real com a turma também pontua.",
  },
];

export function LiveRaceSection() {
  return (
    <SectionWrapper>
      <RevealOnScroll>
        <Kicker>GAMIFICAÇÃO</Kicker>
        <HighlightHeadline
          text="Quanto mais você joga, mais você ganha."
          highlight="ganha"
          className="text-3xl sm:text-4xl"
        />
        <p className="mt-6 max-w-3xl text-base font-medium text-muted">
          A <strong className="text-white">Corrida ao Vivo</strong> premia quem
          evolui. Cada interação na casa — participar, comentar, mostrar
          resultado, ajudar outro Piloto — vira pontos. E pontos viram{" "}
          <strong className="text-white">brindes oficiais do Mundo Pódium</strong>.
        </p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pontos.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 0.08}>
            <Card className="h-full">
              <IconLine name={p.icon} className="mb-3" />
              <h3 className="font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-muted">{p.desc}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-12">
        <div className="flex flex-col items-center gap-6 rounded-[14px] border border-line bg-card p-8 md:flex-row md:justify-center">
          <div className="flex items-end gap-3">
            <div className="flex h-16 w-14 flex-col items-center justify-end rounded-t-lg bg-muted-2/30 pb-2">
              <span className="text-xs font-bold text-muted">2º</span>
            </div>
            <div className="flex h-24 w-16 flex-col items-center justify-end rounded-t-lg bg-gold/20 pb-2">
              <IconLine name="trofeu" size={20} />
              <span className="mt-1 text-sm font-bold text-gold">1º</span>
            </div>
            <div className="flex h-12 w-14 flex-col items-center justify-end rounded-t-lg bg-muted-2/30 pb-2">
              <span className="text-xs font-bold text-muted">3º</span>
            </div>
          </div>
          <IconLine name="bandeira-quadriculada" size={40} />
        </div>
        <p className="mt-8 text-center text-xl font-bold text-white">
          Aqui, constância tem prêmio.
        </p>
        <div className="mt-6 text-center">
          <CtaButton>Entrar na Plataforma</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
