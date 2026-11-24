
import { FloatingContact } from "@/components/layout/floating-contact";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { createWebsiteJsonLd, serializeJsonLd } from "@/config/seo";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createWebsiteJsonLd()) }}
      />
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <SiteHeader />
      <ScrollReveal />
      {children}
      <SiteFooter />
      <div aria-hidden="true" className="h-[calc(4.5rem+env(safe-area-inset-bottom))] md:hidden" />
      <MobileContactBar />
      <FloatingContact />
    </>
  );
}
