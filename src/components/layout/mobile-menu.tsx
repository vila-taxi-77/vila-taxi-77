
"use client";

import { useEffect, useRef } from "react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig, siteContact } from "@/config/site";
import { SiteLogo } from "@/components/ui/site-logo";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
};

export function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const drawer = drawerRef.current;
    if (!drawer) return;

    const keepFocusInside = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("inert"));

      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    drawer.addEventListener("keydown", keepFocusInside);
    return () => drawer.removeEventListener("keydown", keepFocusInside);
  }, [isOpen]);

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
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
        className="mobile-drawer absolute right-0 top-0 z-10 flex h-full min-h-0 flex-col bg-white p-6 shadow-2xl transition-transform duration-300"
      >
        <div className="flex shrink-0 items-center justify-between">
          <SiteLogo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#dce3ed] text-[#0a192f] transition-colors hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary-soft)]"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 min-h-0 flex-1 overflow-y-auto overscroll-contain" aria-label="Điều hướng trên điện thoại">
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-bold text-[#24344d] transition-colors hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="grid shrink-0 gap-3 border-t border-[#e7ebf0] pt-4">
          <a
            href={siteContact.zaloUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
            className="flex h-12 items-center justify-center rounded-full border border-[#cdd7e5] font-bold text-[#0563d8]"
          >
            Nhắn Zalo
          </a>
          <a
            href={siteContact.telephoneUrl}
            onClick={onNavigate}
            className="flex h-12 items-center justify-center rounded-full bg-[var(--brand-accent)] font-black !text-white transition-colors hover:bg-[var(--brand-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
          >
            Gọi xe · {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
