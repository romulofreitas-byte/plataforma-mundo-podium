"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { CtaButton } from "@/components/ui/CtaButton";
import { HighlightHeadline } from "@/components/ui/HighlightHeadline";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoFullHD } from "@/components/media/VideoFullHD";
import { cn } from "@/lib/utils";
import { hasVideoSource } from "@/lib/video";

const defaultGallery: Array<{ legenda: string; type: "mp4"; src: string }> = [
  { legenda: "Quebra de objeção 'me manda no WhatsApp'", type: "mp4", src: "" },
  { legenda: "Agendamento em 4 minutos", type: "mp4", src: "" },
  { legenda: "Primeira ligação ao vivo", type: "mp4", src: "" },
];

export function LiveCallVideosSection() {
  const gallery =
    site.videos.salaLigacaoGaleria.length > 0
      ? site.videos.salaLigacaoGaleria
      : defaultGallery;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = gallery[activeIndex];
  const activeSource = hasVideoSource(activeItem)
    ? activeItem
    : site.videos.salaLigacaoPrincipal;

  return (
    <SectionWrapper id="sala-ligacao">
      <RevealOnScroll>
        <Badge variant="live" className="mb-4">
          AO VIVO
        </Badge>
        <HighlightHeadline
          text="Veja a ligação real acontecendo."
          highlight="real"
          className="text-3xl sm:text-4xl"
        />
        <p className="mt-6 max-w-3xl text-base font-medium text-muted">
          Sem ator, sem roteiro de novela, sem corte. Cliente real do outro
          lado. É isso que você treina aqui dentro.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="mt-10">
        <VideoFullHD
          source={
            hasVideoSource(activeSource)
              ? activeSource
              : site.videos.salaLigacaoPrincipal
          }
          label="TODO_ASSET: /videos/sala-ligacao/*.mp4"
        />
      </RevealOnScroll>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {gallery.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={cn(
              "min-w-[200px] shrink-0 rounded-[14px] border p-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              activeIndex === i
                ? "border-gold bg-card"
                : "border-line bg-card/50 hover:border-gold/40",
            )}
            aria-pressed={activeIndex === i}
          >
            <div className="mb-2 aspect-video rounded-lg bg-bg-1">
              <VideoFullHD
                source={hasVideoSource(item) ? item : null}
                label="TODO_ASSET"
                className="!rounded-lg !border-0"
              />
            </div>
            <p className="text-xs font-medium text-muted">{item.legenda}</p>
          </button>
        ))}
      </div>

      <RevealOnScroll className="mt-8">
        <p className="text-sm font-medium text-muted-2">
          Tudo fica gravado na casa pra você rever quando quiser.
        </p>
        <div className="mt-6">
          <CtaButton>Quero treinar ao vivo</CtaButton>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
