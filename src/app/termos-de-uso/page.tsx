import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termosDeUsoMeta, termosDeUsoSections } from "@/content/legal/termos-de-uso";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: termosDeUsoMeta.title,
  description: `Termos de Uso da ${site.name}. Regras de acesso, assinatura e conduta na comunidade de Pilotos.`,
  alternates: {
    canonical: "/termos-de-uso",
  },
  robots: { index: true, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <LegalDocument
      title={termosDeUsoMeta.title}
      updatedAt={termosDeUsoMeta.updatedAt}
      sections={termosDeUsoSections}
    />
  );
}
