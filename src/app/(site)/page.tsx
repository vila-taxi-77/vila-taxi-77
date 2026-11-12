
import { FaqSection } from "@/components/sections/faq-section";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { PriceFirstSection } from "@/components/sections/price-first-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyVilaSection } from "@/components/sections/why-vila-section";
import { BookingSection } from "@/features/booking/components/booking-section";
import { faqs } from "@/content/faqs";
import { createFaqJsonLd, createFleetJsonLd, createWebsiteJsonLd, serializeJsonLd } from "@/config/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createWebsiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFleetJsonLd()) }}
      />
      <main id="main-content" tabIndex={-1} className="page-below-header bg-[#f5f7fb] outline-none">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <PriceFirstSection />
        <WhyVilaSection />
        <FleetSection />
        <ServiceAreasSection />
        <BookingSection />
        <AboutSection />
        <FaqSection />
      </main>
    </>
  );
}
