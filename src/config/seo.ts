
import type { FaqItem } from "@/content/faqs";
import { fleetGallery } from "@/content/fleet";
import { siteConfig } from "@/config/site";

// Production canonical origin. Keep NEXT_PUBLIC_SITE_URL in Vercel aligned with this value.
const fallbackSiteUrl = "https://taxivila.com";

export const seoConfig = {
  businessName: "Taxi VILA",
  displayName: "Taxi VILA",
  title: "Taxi điện Phù Cát – Phù Mỹ | Taxi VILA – Báo giá trước",
  description:
    "Taxi VILA phục vụ taxi điện 5–7 chỗ tại Phù Cát, Phù Mỹ, sân bay Phù Cát, Quy Nhơn và các tuyến liên tỉnh. Đội xe đa dạng, êm ái, báo giá trước chuyến đi, gọi đặt xe nhanh.",
  keywords: [
    "Taxi VILA",
    "Dịch vụ taxi điện Phù Cát Phù Mỹ",
    "taxi điện Phù Cát",
    "taxi điện Phù Mỹ",
    "taxi điện sân bay Phù Cát",
    "taxi điện đưa đón sân bay Phù Cát",
    "taxi điện Phù Cát đi Quy Nhơn",
    "taxi điện đi tỉnh",
    "taxi điện đi tỉnh từ Phù Cát",
    "taxi điện đường dài Phù Mỹ",
    "taxi điện 5 chỗ",
    "taxi điện 7 chỗ",
    "đội xe điện Taxi VILA",
    "xe điện Phù Mỹ",
    "Taxi điện Bình Định",
    "Taxi điện Gia Lai",
    "taxi Phù Cát",
    "taxi Phù Mỹ",
    "taxi sân bay Phù Cát",
    "taxi Phù Cát đi Quy Nhơn",
    "taxi đi tỉnh từ Phù Cát",
  ],
  locale: "vi_VN",
  language: "vi-VN",
  mapsUrl: "https://maps.app.goo.gl/Fz2Ghzd5mpxrmN7Y7",
  zaloUrl: siteConfig.zaloUrl,
  image: "/images/hero/taxi-vila-fleet-lineup-hero.png",
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
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: seoConfig.businessName,
        alternateName: seoConfig.displayName,
        url: siteUrl,
        logo: absoluteUrl(seoConfig.logo),
        image: absoluteUrl(seoConfig.image),
        telephone: `+84${siteConfig.phone.slice(1)}`,
        priceRange: siteConfig.priceRange,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
        hasMap: seoConfig.mapsUrl,
        sameAs: [seoConfig.mapsUrl, seoConfig.zaloUrl, siteConfig.facebookUrl, siteConfig.tiktokUrl],
        areaServed: seoConfig.serviceAreas.map((name) => ({
          "@type": "Place",
          name,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+84${siteConfig.phone.slice(1)}`,
          contactType: "customer service",
          areaServed: "VN",
          availableLanguage: "Vietnamese",
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
        "@type": "TaxiService",
        "@id": `${siteUrl}/#taxi-service`,
        name: "Dịch vụ taxi điện Taxi VILA",
        serviceType: "Dịch vụ taxi điện Phù Cát Phù Mỹ, đưa đón sân bay và đi tỉnh",
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

export function createFleetJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#fleet-gallery`,
    name: "Thư viện đội xe điện Taxi VILA 5–7 chỗ",
    description: "Hình ảnh đội xe điện Taxi VILA gồm ngoại thất, nội thất, đón sân bay và trạm sạc.",
    numberOfItems: fleetGallery.length,
    itemListElement: fleetGallery.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      item: {
        "@type": "ImageObject",
        name: item.title,
        description: item.description,
        caption: item.alt,
        contentUrl: absoluteUrl(item.src),
        representativeOfPage: false,
      },
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
