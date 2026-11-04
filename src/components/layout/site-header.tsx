
"use client";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { mainNavigation } from "@/config/navigation";
import { siteConfig, siteContact } from "@/config/site";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useScrollHeader } from "@/hooks/use-scroll-header";

function BrandLogo() {
  return (
    <span className="flex min-w-0 items-center gap-2.5" aria-label={siteConfig.name}>
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-[11px] bg-[#0563d8] text-[23px] font-black italic text-white shadow-[0_8px_18px_rgba(5,99,216,0.28)]">
        V
        <span className="absolute -right-1 -top-1 grid h-[17px] w-[17px] place-items-center rounded-full bg-[#ffac00] text-[#071a36] ring-2 ring-white">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
            <path d="M9.4 1.2 3.6 8h3.3l-.8 6.8L12.4 7H9.1l.3-5.8Z" />
          </svg>
        </span>
      </span>

      <span className="min-w-0 leading-none">
        <span className="block whitespace-nowrap text-[19px] font-black tracking-[0.02em] text-[#0a192f]">
          TAXI <span className="text-[#0563d8]">VILA</span>
        </span>
        <span className="mt-1 block whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#77859a]">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}

function ZaloMark() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-[#0563d8] text-[7px] font-black text-white">
      Zalo
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const isScrolled = useScrollHeader();
  const menu = useMobileMenu();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-t border-[#8b929c] transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-b border-[#dce3ed] bg-white/95 shadow-[0_8px_30px_rgba(8,24,47,0.08)] backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1220px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-5">
          <a href="#top" className="shrink-0" aria-label="Về đầu trang">
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Điều hướng chính">
            {mainNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-bold text-[#263750] transition-colors hover:bg-[#eaf4ff] hover:text-[#0563d8]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={siteContact.zaloUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Nhắn Taxi VILA qua Zalo"
              className="hidden h-11 items-center gap-1.5 rounded-full border border-[#c8d1de] px-4 text-sm font-extrabold text-[#0563d8] transition-colors hover:border-[#0563d8] md:flex"
            >
              <ZaloMark />
              Zalo
            </a>

            <a
              href={siteContact.telephoneUrl}
              className="flex h-11 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#ffac00] px-5 text-[15px] font-black text-[#071a36] shadow-[0_9px_24px_rgba(255,172,0,0.28)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#f5a400]"
              aria-label={`Gọi Taxi VILA theo số ${siteConfig.phoneDisplay}`}
            >
              <PhoneIcon />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
              <span className="sm:hidden">Gọi xe</span>
            </a>

            <button
              type="button"
              onClick={menu.openMenu}
              aria-label="Mở menu"
              aria-expanded={menu.isOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#c8d1de] text-[#0a192f] lg:hidden"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menu.isOpen} onClose={menu.closeMenu} />
    </>
  );
}
