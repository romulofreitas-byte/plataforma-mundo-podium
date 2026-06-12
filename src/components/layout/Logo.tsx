import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logos/logo-horizontal-claro.png"
        alt="Mundo Pódium"
        width={180}
        height={48}
        className="h-8 w-auto sm:h-10"
        priority
      />
    </Link>
  );
}
