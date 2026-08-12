import { site } from "@/config/site";

export function getProductJsonLd() {
  const price = site.precoMensalNumero.toFixed(2);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: site.description,
    brand: {
      "@type": "Brand",
      name: "Mundo Pódium",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: site.checkoutUrl,
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1),
      )
        .toISOString()
        .split("T")[0],
      seller: {
        "@type": "Organization",
        name: "MUNDO PODIUM LTDA",
        taxID: site.legal.cnpj,
        email: site.legal.email,
        url: site.url,
      },
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };
}
