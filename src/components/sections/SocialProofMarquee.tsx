import { site } from "@/config/site";

export function SocialProofMarquee() {
  const items = [...site.marquee, ...site.marquee];

  return (
    <div className="overflow-hidden border-y border-line bg-bg-1 py-4">
      <div className="marquee-track gap-8 px-4">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            {item}
            <span className="text-muted-3">· TODO_ASSET depoimento</span>
          </span>
        ))}
      </div>
    </div>
  );
}
