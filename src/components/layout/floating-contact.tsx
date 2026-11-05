
import { siteConfig, siteContact } from "@/config/site";

export function FloatingContact() {
  return (
    <aside aria-label="Liên hệ nhanh Taxi VILA" className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-40 flex flex-col items-center gap-3">
      <a
        href={siteContact.zaloUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Nhắn Taxi VILA qua Zalo"
        className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-[0_12px_30px_rgba(10,25,47,0.16)] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0563d8]"
      >
        <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-xl bg-[#0563d8] text-xs font-black text-white">Zalo</span>
      </a>

      <a
        href={siteContact.telephoneUrl}
        aria-label={`Gọi Taxi VILA theo số ${siteConfig.phoneDisplay}`}
        className="floating-phone relative grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-accent)] !text-white shadow-[0_12px_32px_rgba(245,158,11,0.35)] transition-[transform,background-color] hover:-translate-y-1 hover:bg-[var(--brand-accent-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </aside>
  );
}
