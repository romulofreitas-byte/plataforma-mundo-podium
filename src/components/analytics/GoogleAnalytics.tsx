import Script from "next/script";
import { site } from "@/config/site";

function isConfigured(id: string) {
  return id && !id.startsWith("[[CONFIG:");
}

export function GoogleAnalytics() {
  if (!isConfigured(site.ga4Id)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.ga4Id}');
        `}
      </Script>
    </>
  );
}
