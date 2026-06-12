import { site } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AssetPlaceholder } from "@/components/media/AssetPlaceholder";
import { ImageLightbox } from "@/components/media/ImageLightbox";
import { VideoFullHD } from "@/components/media/VideoFullHD";
import { hasVideoSource } from "@/lib/video";

export function TestimonialsSection() {
  const videos =
    site.videos.depoimentos.length > 0
      ? site.videos.depoimentos
      : [
          { type: "mp4" as const, src: "" },
          { type: "mp4" as const, src: "" },
        ];

  return (
    <SectionWrapper>
      <RevealOnScroll>
        <HighlightHeadline
          text="O que os Pilotos dizem."
          highlight="Pilotos"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {videos.map((v, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <VideoFullHD
              source={hasVideoSource(v) ? v : null}
              label={`TODO_ASSET: /depoimentos/* ${i + 1}`}
            />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10">
        <h3 className="mb-4 text-lg font-bold text-white">Mural de resultados</h3>
        {site.depoimentos.prints.length > 0 ? (
          <ImageLightbox
            images={site.depoimentos.prints}
            altPrefix="Depoimento Piloto"
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <AssetPlaceholder key={i} label="TODO_ASSET" aspect="square" />
            ))}
          </div>
        )}
      </RevealOnScroll>

      <RevealOnScroll className="mt-10 text-center">
        <CtaButton>Entrar na Plataforma</CtaButton>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
