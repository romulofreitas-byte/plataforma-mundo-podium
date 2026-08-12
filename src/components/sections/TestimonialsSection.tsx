import { site } from "@/config/site";
import { CasaProofCard } from "@/components/ui/CasaProofCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoFullHD } from "@/components/media/VideoFullHD";
import { hasVideoSource } from "@/lib/video";

export function TestimonialsSection() {
  const videos = site.videos.depoimentos.filter((v) => hasVideoSource(v));
  const items = site.depoimentos.items;
  const spotlight = items[0];
  const wall = items.slice(1);

  return (
    <SectionWrapper variant="dark">
      <RevealOnScroll>
        <HighlightHeadline
          text="O que os Pilotos vivem dentro da casa"
          highlight="Pilotos"
          className="text-3xl sm:text-4xl"
        />
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          Prints reais da comunidade — clique para ler o fio.
        </p>
      </RevealOnScroll>

      {videos.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="media-frame">
                <VideoFullHD
                  source={v}
                  label={v.nome ?? `Depoimento Piloto ${i + 1}`}
                  className="!rounded-none !border-0"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      )}

      {spotlight && (
        <RevealOnScroll className="mt-10">
          <CasaProofCard
            variant="spotlight"
            images={spotlight.images}
            highlight={spotlight.highlight}
            name={spotlight.name}
            role={spotlight.role}
            bodyQuote={
              "bodyQuote" in spotlight
                ? (spotlight.bodyQuote as string | undefined)
                : undefined
            }
            alt={spotlight.alt}
            priority
          />
        </RevealOnScroll>
      )}

      {wall.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wall.map((item, i) => (
            <RevealOnScroll
              key={item.name}
              delay={(i % 3) * 0.05}
              className="h-full"
            >
              <CasaProofCard
                variant="grid"
                images={item.images}
                highlight={item.highlight}
                name={item.name}
                role={item.role}
                alt={item.alt}
                priority={i < 3}
                className="h-full"
              />
            </RevealOnScroll>
          ))}
        </div>
      )}

      <RevealOnScroll className="mt-10 text-center">
        <CtaButton />
      </RevealOnScroll>
    </SectionWrapper>
  );
}
