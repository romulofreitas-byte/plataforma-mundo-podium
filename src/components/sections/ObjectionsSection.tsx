import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const objections = [
  {
    problema: "Você assiste e não aplica",
    solucao: "Aqui você liga ao vivo, na Sala de Ligação.",
  },
  {
    problema: "Trava e desiste no meio (o limbo)",
    solucao: "Mentorias 2x/semana + comunidade que cobra te atravessam.",
  },
  {
    problema: "Não sabe se funciona de verdade",
    solucao: "Ligações reais, ao vivo, sem corte. Você vê acontecer.",
  },
  {
    problema: "Fica sozinho",
    solucao: "Uma casa inteira de Pilotos do seu lado.",
  },
];

export function ObjectionsSection() {
  return (
    <SectionWrapper variant="warm">
      <RevealOnScroll>
        <HighlightHeadline
          text="Por que treinar aqui, e não em mais um curso."
          highlight="aqui"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {objections.map((o, i) => (
          <RevealOnScroll key={o.problema} delay={i * 0.08}>
            <Card accent interactive className="h-full">
              <p className="flex items-start gap-2 text-sm font-semibold text-[#8C8F99]">
                <span className="shrink-0 text-gold/50" aria-hidden>
                  ✕
                </span>
                {o.problema}
              </p>
              <p className="mt-3 text-base font-bold text-white">{o.solucao}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10 text-center">
        <CtaButton>Quero treinar ao vivo</CtaButton>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
