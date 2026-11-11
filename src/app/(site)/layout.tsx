
import { FloatingContact } from "@/components/layout/floating-contact";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a href="#main-content" className="skip-link">Bỏ qua điều hướng</a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
