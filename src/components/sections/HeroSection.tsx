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
    <SectionWrapper
      id="hero"
      variant="bands"
      className="pt-20 pb-8 md:flex md:flex-1 md:flex-col md:justify-center md:pt-24 md:pb-10"
    >
      <div className="grid items-stretch gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <Kicker className="max-w-none tracking-[0.12em] sm:tracking-[0.14em] lg:tracking-kicker">
            <span className="whitespace-nowrap">{site.heroKicker.lead}</span>
            {" · "}
            <span className="whitespace-nowrap">{site.heroKicker.trail}</span>
          </Kicker>
          <HighlightHeadline
            as="h1"
            text="Aqui você não assiste cold call. Você liga — ao vivo."
            highlight="ao vivo"
            className="max-w-2xl text-balance text-3xl sm:text-4xl lg:text-5xl"
          />
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted sm:text-lg">
            A casa onde os Pilotos treinam prospecção de verdade: ligação real ao
            vivo, comunidade e mentorias com método. Você sai de &ldquo;tenho medo de
            ligar&rdquo; para &ldquo;agendo reunião por telefone&rdquo;.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="live">Sala de Ligação ao vivo</Badge>
            <span className="text-xs text-muted-2">
              Mentorias toda {site.mentorias.dias}, {site.mentorias.hora}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton size="lg" className="whitespace-nowrap">
              {site.cta.teste}
            </CtaButton>
            <Button
              variant="ghost"
              size="lg"
              scrollTo="#demonstracao"
              className="whitespace-nowrap"
            >
              {site.cta.verPorDentro}
            </Button>
          </div>

          <p className="mt-3 text-xs text-muted-2">
            <strong className="font-bold text-white">
              {site.trial.notaHeroDestaque}
            </strong>{" "}
            {site.trial.notaHero}
          </p>

          <p className="mt-8 text-xs text-muted-2">
            4 frentes da casa • PódiumFlix • mentorias {site.mentorias.dias} •
            hospedado no Circle
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="flex h-full flex-col">
          <div className="media-frame">
            <VideoFullHD
              source={site.videos.hero}
              label="Corte da Sala de Ligação"
              className="!rounded-none !border-0"
            />
          </div>
          <ul className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-6">
            {site.autoridade.metricas.map((metrica) => (
              <li key={metrica.label} className="text-center">
                <p className="text-base font-bold text-white">
                  {metrica.valor}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-2 sm:text-xs">
                  {metrica.label}
                </p>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </SectionWrapper>
  );
}
