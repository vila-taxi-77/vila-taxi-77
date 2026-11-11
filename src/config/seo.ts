
import type { FaqItem } from "@/content/faqs";
import { siteConfig } from "@/config/site";

const fallbackSiteUrl = "https://vila-taxi-77.vercel.app";

export const seoConfig = {
  businessName: "Taxi Vila",
  displayName: "Taxi VILA",
  title: "Taxi Vila – Taxi điện Phù Cát, Phù Mỹ, sân bay Phù Cát",
  description:
    "Taxi Vila phục vụ 24/7 tại Phù Cát, Phù Mỹ, sân bay Phù Cát, Quy Nhơn và các tuyến lân cận. Xe điện êm ái, báo giá trước chuyến đi.",
  keywords: [
    "Taxi Vila",
    "taxi Phù Cát",
    "taxi Phù Mỹ",
    "taxi sân bay Phù Cát",
    "taxi điện Phù Cát",
    "taxi Phù Cát đi Quy Nhơn",
    "taxi đi tỉnh",
  ],
  locale: "vi_VN",
  language: "vi-VN",
  mapsUrl: "https://maps.app.goo.gl/Fz2Ghzd5mpxrmN7Y7",
  zaloUrl: siteConfig.zaloUrl,
  image: "/images/hero/taxi-vila-hero.png",
  logo: "/images/logo/taxi-vila-logo.png",
  latitude: 14.062141,
  longitude: 109.0454244,
  serviceAreas: ["Phù Cát", "Phù Mỹ", "Sân bay Phù Cát", "Quy Nhơn"],
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION ?? "WU-UB66UP6xL8F7iVOBLRLrHqml9RSMn32FC85LhmU8",
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

export function createWebsiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: seoConfig.businessName,
        alternateName: seoConfig.displayName,
        url: siteUrl,
        logo: absoluteUrl(seoConfig.logo),
        image: absoluteUrl(seoConfig.image),
        telephone: `+84${siteConfig.phone.slice(1)}`,
        priceRange: siteConfig.priceRange,
        sameAs: [seoConfig.mapsUrl, seoConfig.zaloUrl],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+84${siteConfig.phone.slice(1)}`,
          contactType: "customer service",
          areaServed: "VN",
          availableLanguage: "Vietnamese",
        },
        location: {
          "@type": "Place",
          name: "Khu vực phục vụ Taxi Vila",
          geo: {
            "@type": "GeoCoordinates",
            latitude: seoConfig.latitude,
            longitude: seoConfig.longitude,
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seoConfig.businessName,
        inLanguage: seoConfig.language,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#taxi-service`,
        name: "Dịch vụ taxi điện Taxi Vila",
        serviceType: "Dịch vụ taxi điện, đưa đón sân bay và đi tỉnh",
        url: siteUrl,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: seoConfig.serviceAreas.map((name) => ({
          "@type": "Place",
          name,
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: `+84${siteConfig.phone.slice(1)}`,
            availableLanguage: "Vietnamese",
          },
        },
      },
    ],
  };
}

export function createFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
