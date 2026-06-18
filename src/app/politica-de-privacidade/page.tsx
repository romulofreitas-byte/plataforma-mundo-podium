import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import {
  politicaPrivacidadeMeta,
  politicaPrivacidadeSections,
} from "@/content/legal/politica-de-privacidade";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: politicaPrivacidadeMeta.title,
  description: `Política de Privacidade da ${site.name}. Saiba como tratamos seus dados pessoais em conformidade com a LGPD.`,
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalDocument
      title={politicaPrivacidadeMeta.title}
      updatedAt={politicaPrivacidadeMeta.updatedAt}
      sections={politicaPrivacidadeSections}
    />
  );
}
