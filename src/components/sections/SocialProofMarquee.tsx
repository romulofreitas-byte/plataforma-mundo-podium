import { site } from "@/config/site";

/** Preenche cada metade do track até cobrir telas largas; as duas metades são idênticas para o loop em -50%. */
function buildInfiniteMarqueeItems(
  phrases: readonly string[],
  minPerHalf = 32,
): string[] {
  const half: string[] = [];
  for (let i = 0; half.length < minPerHalf; i++) {
    half.push(phrases[i % phrases.length]);
  }
  return [...half, ...half];
}

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
      {text}
    </span>
  );
}

export function SocialProofMarquee() {
  const items = buildInfiniteMarqueeItems(site.marquee);

  return (
    <div
      className="bg-dark marquee-container relative shrink-0 overflow-hidden border-b border-line py-4"
      aria-hidden
    >
      <div className="marquee-track items-center gap-8 px-4">
        {items.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}
