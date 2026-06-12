import Link from "next/link";
import { site } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Logo } from "./Logo";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "YouTube", href: site.youtube },
  { label: "WhatsApp", href: site.whatsapp },
];

export function Footer() {
  return (
    <SectionWrapper
      as="footer"
      variant="bands"
      bandsSubtle
      className="border-t border-line"
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <Logo />
        <p className="max-w-xl text-sm font-medium text-muted">
          {site.tagline}
        </p>

        <CtaButton size="lg">Entrar na Plataforma</CtaButton>

        <nav aria-label="Redes sociais" className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-xs text-muted-2">
          <p>CNPJ {site.legal.cnpj}</p>
          {site.legal.politicaPrivacidade && (
            <Link href={site.legal.politicaPrivacidade} className="hover:text-gold">
              Política de Privacidade
            </Link>
          )}
          {site.legal.termos && (
            <Link href={site.legal.termos} className="hover:text-gold">
              Termos de Uso
            </Link>
          )}
          <p>
            Contato:{" "}
            <a href={`mailto:${site.legal.email}`} className="hover:text-gold">
              {site.legal.email}
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
