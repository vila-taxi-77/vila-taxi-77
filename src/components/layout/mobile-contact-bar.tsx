
import { siteContact } from "@/config/site";

export function MobileContactBar() {
  return <nav aria-label="Đặt xe nhanh" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-[var(--border-soft)] bg-white px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
    <a href={siteContact.telephoneUrl} className="flex min-h-12 items-center justify-center rounded-full bg-[#07172f] px-3 font-extrabold !text-white">Gọi ngay</a>
    <a href="/dat-xe-truoc" className="flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-accent)] px-3 font-extrabold !text-[#07172f] transition-colors hover:bg-[var(--brand-accent-dark)]">Đặt xe trước</a>
  </nav>;
}
