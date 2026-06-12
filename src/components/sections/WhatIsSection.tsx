import { IconLine } from "@/components/icons/IconLine";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { Kicker } from "@/components/ui/Kicker";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const pilares = [
  {
    icon: "olho" as const,
    title: "Veja",
    desc: "Ligações reais ao vivo",
  },
  {
    icon: "telefone" as const,
    title: "Pratique",
    desc: "A Sala de Ligação é sua",
  },
  {
    icon: "check" as const,
    title: "Seja corrigido",
    desc: "Feedback ao vivo, comunidade que cobra",
  },
];

export function WhatIsSection() {
  return (
    <SectionWrapper>
      <RevealOnScroll>
        <Kicker>O QUE É</Kicker>
        <HighlightHeadline
          text="Não é mais um curso. É uma casa."
          highlight="uma casa"
          className="text-3xl sm:text-4xl"
        />
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-muted">
          O YouTube te mostra a ligação acontecendo. A Plataforma é onde você
          entra pra fazer acontecer — treinar ao vivo, conviver com outros
          Pilotos e evoluir com direção. Tudo num só lugar, hospedado no Circle.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pilares.map((p, i) => (
          <RevealOnScroll key={p.title} delay={i * 0.1}>
            <Card accent className="h-full">
              <IconLine name={p.icon} className="mb-4" />
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-muted">{p.desc}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10 text-center">
        <p className="text-xl font-bold text-white">
          Aqui ninguém liga sozinho.
        </p>
        <div className="mt-6">
          <CtaButton>Quero treinar ao vivo</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
