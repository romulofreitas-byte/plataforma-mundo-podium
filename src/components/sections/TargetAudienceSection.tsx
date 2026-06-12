import { IconLine } from "@/components/icons/IconLine";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const audience = [
  "Freelancers e prestadores travados no cold call",
  "SDRs/BDRs que querem converter mais",
  "Donos de agência e líderes comerciais",
  "Assessores de investimento (mercado regulado)",
  "Qualquer um que depende do telefone pra gerar negócio",
];

export function TargetAudienceSection() {
  return (
    <SectionWrapper variant="dark">
      <RevealOnScroll>
        <HighlightHeadline
          text="Pra quem é a casa."
          highlight="casa"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {audience.map((item, i) => (
          <RevealOnScroll key={item} delay={i * 0.06}>
            <Card interactive className="flex items-start gap-3">
              <IconLine name="check" size={22} className="mt-0.5 shrink-0" />
              <p className="font-medium text-muted">{item}</p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10 text-center">
        <p className="text-lg font-bold text-white">
          Se você vive de marcar reunião, seu lugar é aqui.
        </p>
        <div className="mt-6">
          <CtaButton>Entrar na casa</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
