import { site } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { Kicker } from "@/components/ui/Kicker";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoFullHD } from "@/components/media/VideoFullHD";

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <Kicker>PLATAFORMA MUNDO PÓDIUM · O ECOSSISTEMA NO CIRCLE</Kicker>
          <HighlightHeadline
            as="h1"
            text="Aqui você não assiste sobre cold call. Você liga — ao vivo."
            highlight="ao vivo"
            className="text-3xl sm:text-4xl lg:text-5xl"
          />
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted sm:text-lg">
            A casa onde os Pilotos treinam prospecção de verdade: ligação real ao
            vivo, comunidade e mentorias com método. Você sai de &apos;tenho medo de
            ligar&apos; para &apos;agendo reunião por telefone&apos;.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="live">Sala de Ligação ao vivo</Badge>
            <span className="text-xs text-muted-2">
              Mentorias toda {site.mentorias.dias}, {site.mentorias.hora}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton size="lg">
              Entrar na Plataforma — {site.precoMensal}/mês
            </CtaButton>
            <Button variant="ghost" size="lg" scrollTo="#demonstracao">
              Ver a casa por dentro
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-2">
            100% orgânico • +130 lives de cold call real • hospedado no Circle
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <VideoFullHD
            source={site.videos.hero}
            label="TODO_ASSET: corte Sala de Ligação"
          />
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
