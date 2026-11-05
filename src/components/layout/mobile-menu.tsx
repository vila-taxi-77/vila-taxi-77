
"use client";

import { mainNavigation } from "@/config/navigation";
import { siteConfig, siteContact } from "@/config/site";
import { SiteLogo } from "@/components/ui/site-logo";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      data-state={isOpen ? "open" : "closed"}
      aria-hidden={!isOpen}
      inert={!isOpen}
      className="mobile-menu-root fixed inset-0 z-[60]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng menu"
        className="mobile-menu-overlay absolute inset-0 z-0 cursor-pointer bg-[#08182f]/45 transition-opacity duration-300"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
        className="mobile-drawer absolute right-0 top-0 z-10 flex h-full flex-col bg-white p-6 shadow-2xl transition-transform duration-300"
      >
        <div className="flex items-center justify-between">
          <SiteLogo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-[#dce3ed] text-[#0a192f]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1" aria-label="Điều hướng trên điện thoại">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-base font-bold text-[#24344d] transition-colors hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto grid gap-3">
          <a
            href={siteContact.zaloUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-[#cdd7e5] font-bold text-[#0563d8]"
          >
            Nhắn Zalo
          </a>
          <a
            href={siteContact.telephoneUrl}
            className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-primary)] font-black text-white transition-colors hover:bg-[var(--brand-primary-dark)]"
          >
            Gọi xe · {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
