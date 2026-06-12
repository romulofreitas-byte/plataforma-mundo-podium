import { site } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AuthorityPhotoFrame } from "@/components/media/AuthorityPhotoFrame";

export function AuthoritySection() {
  return (
    <SectionWrapper variant="bands">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <AuthorityPhotoFrame
            src={site.autoridade.foto}
            alt="Rômulo Freitas"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <HighlightHeadline
            text="Quem te treina."
            highlight="treina"
            className="text-3xl sm:text-4xl"
          />
          <p className="mt-6 text-base font-medium leading-relaxed text-muted">
            Criador do Método Pódium, CEO da Combustível Marketing e Vendas, +12
            anos em vendas. Faz <strong className="text-white">ligações reais ao vivo</strong> no
            YouTube — skin in the game. Você aprende com quem liga, não com quem
            só fala sobre ligar.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {site.autoridade.metricas.map((m) => (
              <Card key={m.label} glass interactive className="text-center">
                <AnimatedCounter
                  value={m.valor}
                  className="text-lg font-extrabold text-gold"
                />
                <p className="mt-1 text-xs font-medium text-muted">{m.label}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <CtaButton>Entrar na casa</CtaButton>
          </div>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
