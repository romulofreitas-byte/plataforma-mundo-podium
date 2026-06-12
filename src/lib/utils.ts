export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function highlightWord(text: string, word: string) {
  const index = text.toLowerCase().indexOf(word.toLowerCase());
  if (index === -1) {
    return { before: text, highlight: "", after: "" };
  }
  return {
    before: text.slice(0, index),
    highlight: text.slice(index, index + word.length),
    after: text.slice(index + word.length),
  };
}
