import { cn } from "@/lib/utils";

export type IconName =
  | "bandeira-largada"
  | "chat"
  | "torre"
  | "play"
  | "pessoas"
  | "bandeira-quadriculada"
  | "replay"
  | "aperto-mao"
  | "trofeu"
  | "alvo"
  | "foguete"
  | "engrenagem"
  | "onda-sonora"
  | "documento"
  | "relogio"
  | "olho"
  | "telefone"
  | "check";

type IconLineProps = {
  name: IconName;
  className?: string;
  size?: number;
};

const stroke = "#F4B71E";

export function IconLine({ name, className, size = 28 }: IconLineProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("shrink-0", className),
    "aria-hidden": true,
  };

  switch (name) {
    case "bandeira-largada":
      return (
        <svg {...props}>
          <path d="M5 4v16M5 4l10 3-10 3" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "torre":
      return (
        <svg {...props}>
          <path d="M12 3v3M8 6h8M6 9h12v12H6zM10 13h4M10 17h4" />
        </svg>
      );
    case "play":
      return (
        <svg {...props}>
          <polygon points="8,5 19,12 8,19" />
        </svg>
      );
    case "pessoas":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 2-3.5 4-3.5" />
        </svg>
      );
    case "bandeira-quadriculada":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M4 12h16M12 4v16M4 8h8M12 8h8M4 16h8M12 16h8" />
        </svg>
      );
    case "replay":
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v5h5" />
        </svg>
      );
    case "aperto-mao":
      return (
        <svg {...props}>
          <path d="M4 12l3 3 4-4 3 3 6-6" />
          <path d="M14 8l2-2 4 4-2 2" />
        </svg>
      );
    case "trofeu":
      return (
        <svg {...props}>
          <path d="M8 4h8v5a4 4 0 0 1-8 0zM12 13v4M8 21h8M10 17h4" />
          <path d="M5 4H3v1a3 3 0 0 0 3 3M19 4h2v1a3 3 0 0 1-3 3" />
        </svg>
      );
    case "alvo":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill={stroke} stroke="none" />
        </svg>
      );
    case "foguete":
      return (
        <svg {...props}>
          <path d="M12 3c3 4 4 8 4 12 0 2-1 4-4 6-3-2-4-4-4-6 0-4 1-8 4-12z" />
          <path d="M9 14l-2 4 3-1M15 14l2 4-3-1" />
        </svg>
      );
    case "engrenagem":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "onda-sonora":
      return (
        <svg {...props}>
          <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
        </svg>
      );
    case "documento":
      return (
        <svg {...props}>
          <path d="M8 4h8l4 4v12H8z" />
          <path d="M16 4v4h4M10 13h8M10 17h6" />
        </svg>
      );
    case "relogio":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "olho":
      return (
        <svg {...props}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "telefone":
      return (
        <svg {...props}>
          <path d="M6 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 8a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12l4 4 10-10" />
        </svg>
      );
    default:
      return null;
  }
}
