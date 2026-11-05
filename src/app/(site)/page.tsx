
import { HeroSection } from "@/components/sections/hero-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { PriceFirstSection } from "@/components/sections/price-first-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyVilaSection } from "@/components/sections/why-vila-section";

export default function HomePage() {
  return (
    <main className="page-below-header bg-[#f5f7fb]">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <PriceFirstSection />
      <WhyVilaSection />
      <FleetSection />
    </main>
  );
}
