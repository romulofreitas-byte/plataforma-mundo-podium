import { site } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageLightbox } from "@/components/media/ImageLightbox";
import { VideoFullHD } from "@/components/media/VideoFullHD";
import { hasVideoSource } from "@/lib/video";

const defaultDepoimentos = [
  { type: "mp4" as const, src: "" },
  { type: "mp4" as const, src: "" },
];

export function TestimonialsSection() {
  const videos =
    site.videos.depoimentos.length > 0
      ? site.videos.depoimentos
      : defaultDepoimentos;

  return (
    <SectionWrapper variant="dark">
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
            <div className="media-frame">
              <VideoFullHD
                source={hasVideoSource(v) ? v : null}
                label={`Depoimento Piloto ${i + 1}`}
                className="!rounded-none !border-0"
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10">
        <h3 className="mb-4 text-lg font-bold text-white">Mural de resultados</h3>
        <ImageLightbox
          images={site.depoimentos.prints}
          altPrefix="Depoimento Piloto"
          framed
          placeholderCount={4}
        />
      </RevealOnScroll>

      <RevealOnScroll className="mt-10 text-center">
        <CtaButton>Entrar na Plataforma</CtaButton>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
