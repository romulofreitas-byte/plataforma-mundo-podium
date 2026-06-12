type LogoPodiumProps = {
  className?: string;
};

export function LogoPodium({ className = "h-10 w-auto" }: LogoPodiumProps) {
  return (
    <svg
      viewBox="0 0 110 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mundo Pódium"
      className={className}
    >
      <defs>
        <pattern
          id="chk"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="14" height="14" fill="#F4B71E" />
          <rect width="7" height="7" fill="#0A0B10" />
          <rect x="7" y="7" width="7" height="7" fill="#0A0B10" />
        </pattern>
      </defs>
      <g transform="skewX(-9)">
        <rect x="0" y="74" width="26" height="46" fill="#FFFFFF" />
        <rect x="36" y="42" width="26" height="78" fill="#FFFFFF" />
        <rect x="72" y="30" width="26" height="90" fill="#F4B71E" />
        <rect x="72" y="8" width="26" height="22" fill="url(#chk)" />
      </g>
    </svg>
  );
}
