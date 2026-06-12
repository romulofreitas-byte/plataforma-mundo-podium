import { site } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { Kicker } from "@/components/ui/Kicker";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageLightbox } from "@/components/media/ImageLightbox";
import { VideoFullHD } from "@/components/media/VideoFullHD";

export function PlatformTourSection() {
  return (
    <SectionWrapper id="demonstracao">
      <RevealOnScroll>
        <Kicker>POR DENTRO</Kicker>
        <HighlightHeadline
          text="Um tour pela casa, na prática."
          highlight="casa"
          className="text-3xl sm:text-4xl"
        />
      </RevealOnScroll>

      <RevealOnScroll className="mt-10">
        <VideoFullHD
          source={site.videos.tour}
          label="TODO_ASSET: tour-circle.mp4 ou YouTube"
        />
      </RevealOnScroll>

      <RevealOnScroll className="mt-10">
        <ImageLightbox
          images={site.demos.prints}
          altPrefix="Print do Circle"
        />
      </RevealOnScroll>

      <RevealOnScroll className="mt-8">
        <p className="text-sm font-medium text-muted">
          É o mesmo ambiente, hospedado no Circle, onde você vai viver a rotina
          de Piloto.
        </p>
        <div className="mt-6">
          <CtaButton>Entrar na Plataforma</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
