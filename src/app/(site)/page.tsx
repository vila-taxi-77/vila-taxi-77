
import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/sections/trust-strip";

export default function HomePage() {
  return (
    <main className="page-below-header bg-[#f5f7fb]">
      <HeroSection />
      <TrustStrip />
    </main>
  );
}
