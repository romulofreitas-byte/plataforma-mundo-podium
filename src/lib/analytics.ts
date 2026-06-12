import { site } from "@/config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function isConfigured(id: string) {
  return id && !id.startsWith("[[CONFIG:");
}

export function trackCtaClick(eventName = "InitiateCheckout") {
  if (typeof window === "undefined") return;

  if (isConfigured(site.ga4Id) && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "cta",
      event_label: "checkout",
      value: site.precoMensal,
    });
  }

  if (isConfigured(site.metaPixelId) && window.fbq) {
    window.fbq("track", eventName, {
      content_name: site.name,
      value: site.precoMensal,
      currency: "BRL",
    });
  }
}
