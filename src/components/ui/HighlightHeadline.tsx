import { highlightWord } from "@/lib/utils";

type HighlightHeadlineProps = {
  as?: "h1" | "h2" | "h3";
  text: string;
  highlight: string;
  className?: string;
};

export function HighlightHeadline({
  as: Tag = "h2",
  text,
  highlight,
  className = "",
}: HighlightHeadlineProps) {
  const { before, highlight: word, after } = highlightWord(text, highlight);

  return (
    <Tag
      className={`font-extrabold tracking-tight text-balance text-white ${className}`}
    >
      {before}
      <span className="text-gold">{word}</span>
      {after}
    </Tag>
  );
}
