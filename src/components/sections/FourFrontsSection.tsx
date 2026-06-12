import { site } from "@/config/site";
import { IconLine, type IconName } from "@/components/icons/IconLine";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Space = { icon: IconName; name: string; desc: string; live?: boolean };

type Front = { title: string; subtitle: string; spaces: Space[] };

const fronts: Front[] = [
  {
    title: "Central Pódium",
    subtitle: "recepção e operação",
    spaces: [
      {
        icon: "bandeira-largada",
        name: "Largada Oficial / Comece aqui",
        desc: "Seu onboarding de Piloto: por onde começar, sem se perder.",
      },
      {
        icon: "chat",
        name: "Rádio Pódium",
        desc: "O chat da casa — tira dúvida, troca ideia, não fica sozinho.",
      },
      {
        icon: "torre",
        name: "Torre de Controle",
        desc: "Avisos e calendário: você sempre sabe o que vem e quando.",
      },
    ],
  },
  {
    title: "Comunidade Pódium",
    subtitle: "vida social e acervo",
    spaces: [
      {
        icon: "play",
        name: "PódiumFlix",
        desc: "A biblioteca de reuniões e aulas gravadas — o método no seu ritmo.",
      },
      {
        icon: "pessoas",
        name: "Pista Aberta",
        desc: "O hangout da comunidade — onde a constância vira convivência.",
      },
      {
        icon: "bandeira-quadriculada",
        name: "Chegada ao Pódium",
        desc: "O mural de conquistas: cada reunião marcada aparece pra turma.",
      },
      {
        icon: "replay",
        name: "Box de Revisão",
        desc: "Sua ligação vira aula — o erro de um ensina a casa inteira.",
      },
      {
        icon: "aperto-mao",
        name: "Paddock",
        desc: "Espaço de parcerias entre Pilotos.",
      },
      {
        icon: "trofeu",
        name: "Clube de Cases",
        desc: "Cases reais destrinchados.",
      },
      {
        icon: "alvo",
        name: "Desafio Semanal",
        desc: "Toda semana, uma missão pra manter o ritmo.",
      },
    ],
  },
  {
    title: "Coaching Pódium",
    subtitle: "acompanhamento de perto",
    spaces: [
      {
        icon: "relogio",
        name: "Mentorias em grupo ao vivo",
        desc: `Segunda e Quinta, ${site.mentorias.hora} — ajuste de rota com a turma.`,
      },
      {
        icon: "engrenagem",
        name: site.niveis.entrada,
        desc: "Primeiro passo no acompanhamento individual.",
      },
      {
        icon: "foguete",
        name: site.niveis.principal,
        desc: "Acompanhamento intenso pra acelerar resultados.",
      },
      {
        icon: "trofeu",
        name: site.niveis.apice,
        desc: "O nível mais alto — direção individual de perto.",
      },
    ],
  },
  {
    title: "Cursos | Box Pódium",
    subtitle: "o conteúdo estruturado e o coração da entrega",
    spaces: [
      {
        icon: "foguete",
        name: "Workshop Destrava Ligações",
        desc: "O destrava: perca o medo e faça suas primeiras ligações.",
      },
      {
        icon: "engrenagem",
        name: "Preparação",
        desc: "Metas, ICP e construção do seu discurso antes de discar.",
      },
      {
        icon: "onda-sonora",
        name: "Sala de Ligação",
        desc: "O coração da casa. Cold call ao vivo, treino real, com correção na hora.",
        live: true,
      },
      {
        icon: "documento",
        name: "Clube de Cases / Sala de Contratos",
        desc: "Do discurso ao contrato: o caminho até o fechamento.",
      },
    ],
  },
];

export function FourFrontsSection() {
  return (
    <SectionWrapper id="espacos">
      <RevealOnScroll>
        <HighlightHeadline
          text="Tudo que você encontra dentro da casa."
          highlight="casa"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <div className="mt-14 space-y-16">
        {fronts.map((front, fi) => (
          <RevealOnScroll key={front.title} delay={fi * 0.05}>
            <div>
              <h3 className="text-xl font-bold text-white">
                FRENTE {fi + 1} — {front.title}
              </h3>
              <p className="mt-1 text-sm italic text-muted-2">{front.subtitle}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {front.spaces.map((space) => (
                  <Card key={space.name} className="flex gap-4">
                    <IconLine name={space.icon} size={24} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-white">{space.name}</h4>
                        {space.live && <Badge variant="live">AO VIVO</Badge>}
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted">
                        {space.desc}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-12 text-center">
        <CtaButton>Entrar na casa</CtaButton>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
