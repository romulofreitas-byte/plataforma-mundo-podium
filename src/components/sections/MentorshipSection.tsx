import { site } from "@/config/site";
import { IconLine } from "@/components/icons/IconLine";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { Kicker } from "@/components/ui/Kicker";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const beneficios = [
  "Tire suas dúvidas reais ao vivo",
  "Traga sua ligação pra ser analisada",
  "Acompanhe a evolução de outros Pilotos",
];

export function MentorshipSection() {
  return (
    <SectionWrapper warm>
      <RevealOnScroll>
        <Kicker>ACOMPANHAMENTO AO VIVO</Kicker>
        <HighlightHeadline
          text="Mentorias exclusivas, toda Segunda e Quinta, às 11h."
          highlight="11h"
          className="text-3xl sm:text-4xl"
        />
        <p className="mt-6 max-w-3xl text-base font-medium text-muted">
          Dois encontros ao vivo por semana com o Rômulo e a turma — pra ajustar
          a rota, destravar o que travou e manter o ritmo de quem não atravessa
          o limbo sozinho.
        </p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {["Segunda", "Quinta"].map((dia) => (
          <RevealOnScroll key={dia}>
            <Card accent className="text-center">
              <IconLine name="relogio" className="mx-auto mb-4" />
              <p className="text-2xl font-bold text-white">{dia}</p>
              <p className="mt-1 text-lg font-semibold text-gold">
                {site.mentorias.hora}
              </p>
              <p className="mt-2 text-sm text-muted-2">{site.mentorias.fuso}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10">
        <ul className="space-y-3">
          {beneficios.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <IconLine name="check" size={20} className="mt-0.5 shrink-0" />
              <span className="font-medium text-muted">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CtaButton>Entrar na casa</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
