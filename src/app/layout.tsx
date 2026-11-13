import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { getSiteUrl, seoConfig } from "@/config/seo";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.businessName}`,
  },
  description: seoConfig.description,
  applicationName: seoConfig.businessName,
  keywords: [...seoConfig.keywords],
  creator: seoConfig.businessName,
  publisher: seoConfig.businessName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: "/",
    siteName: seoConfig.businessName,
    title: seoConfig.title,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.image,
        width: 1672,
        height: 941,
        alt: "Xe điện Taxi Vila phục vụ Phù Cát và Phù Mỹ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: seoConfig.googleSiteVerification,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "48x48 96x96 192x192",
      },
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo/taxi-vila-logo.png",
  },
  other: {
    "geo.position": `${seoConfig.latitude};${seoConfig.longitude}`,
    ICBM: `${seoConfig.latitude}, ${seoConfig.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
