import { site } from "@/config/site";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AuthorityImage } from "@/components/media/AuthorityImage";

export function AuthoritySection() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[14px] border border-line bg-card">
            <AuthorityImage src={site.autoridade.foto} alt="Rômulo Freitas" />
          </div>
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
              <Card key={m.label} className="text-center">
                <p className="text-lg font-extrabold text-gold">{m.valor}</p>
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
