
import Image from "next/image";
import { mainNavigation } from "@/config/navigation";
import { siteConfig, siteContact } from "@/config/site";

const footerNavigation = mainNavigation.filter(({ href }) =>
  ["#dich-vu", "#bao-gia", "#doi-xe", "#gioi-thieu"].includes(href),
);

function FooterIcon({ name }: { name: "phone" | "location" | "clock" | "wallet" }) {
  const attributes = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-5 w-5 shrink-0 text-[var(--brand-accent)]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "phone") {
    return <svg {...attributes}><path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" /></svg>;
  }

  if (name === "location") {
    return <svg {...attributes}><path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  }

  if (name === "clock") {
    return <svg {...attributes}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
  }

  return <svg {...attributes}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M16 14h2" /></svg>;
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#07172f] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero/taxi-vila-charging.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[65%_100%] sm:object-[50%_100%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,47,0.9)_0%,rgba(7,23,47,0.78)_55%,rgba(7,23,47,0.68)_100%),linear-gradient(180deg,rgba(7,23,47,0.14)_0%,rgba(7,23,47,0.18)_55%,rgba(7,23,47,0.55)_100%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1220px] px-4 pb-7 pt-8 sm:px-6 sm:pt-10 lg:px-5 lg:pt-12">
        <div className="flex flex-col gap-5 rounded-[1.75rem] bg-[var(--brand-accent)] px-5 py-5 text-white sm:px-7 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8">
          <div className="[text-shadow:0_1px_3px_rgba(7,23,47,0.35)]">
            <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">Cần xe ngay bây giờ?</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed sm:text-base">Gọi Taxi VILA để được tư vấn và sắp xếp xe tại Phù Cát – Phù Mỹ.</p>
          </div>
          <a
            href={siteContact.telephoneUrl}
            aria-label={`Gọi Taxi VILA theo số ${siteConfig.phoneDisplay}`}
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#07172f] px-7 text-lg font-black !text-white shadow-[0_12px_28px_rgba(7,23,47,0.18)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#142b4e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07172f] sm:w-fit sm:text-xl"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="grid gap-8 pb-12 pt-9 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9 sm:pb-14 sm:pt-10 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-12 lg:pb-16 lg:pt-12">
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <a href="#top" aria-label="Taxi VILA - về đầu trang" className="inline-flex items-center gap-3">
              <Image src="/images/logo/taxi-vila-logo.png" alt="" width={64} height={64} className="h-14 w-14 rounded-full object-contain" />
              <span className="leading-none">
                <span className="block text-xl font-black tracking-tight text-white">TAXI <span className="text-[var(--brand-accent)]">VILA</span></span>
                <span className="mt-1.5 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#94a3b8]">{siteConfig.tagline}</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#a9b6c9] sm:text-base">Taxi VILA – Taxi điện Phù Cát – Phù Mỹ. Đón tận nơi, báo giá trước, an tâm mọi hành trình.</p>
            <p className="mt-5 text-lg font-black italic text-[var(--brand-accent)] sm:text-xl">Hạnh phúc khi được phục vụ!</p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#94a3b8]">Liên hệ</h3>
            <ul className="mt-5 space-y-3.5 text-sm sm:text-base">
              <li><a href={siteContact.telephoneUrl} className="flex items-start gap-2.5 text-white/90 transition-colors hover:text-[var(--brand-accent)]"><FooterIcon name="phone" /><span>Hotline: {siteConfig.phoneDisplay}</span></a></li>
              <li><a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 text-white/90 transition-colors hover:text-[var(--brand-accent)]"><span aria-hidden="true" className="grid h-5 w-5 shrink-0 place-items-center rounded bg-[#0563d8] text-[7px] font-black text-white">Zalo</span><span>Zalo: {siteConfig.phoneDisplay}</span></a></li>
              <li className="flex items-start gap-2.5 text-white/80"><FooterIcon name="location" /><span>Phù Cát – Phù Mỹ và khu vực lân cận</span></li>
              <li className="flex items-start gap-2.5 text-white/80"><FooterIcon name="clock" /><span>Liên hệ đặt xe 24/7</span></li>
              <li className="flex items-start gap-2.5 text-white/80"><FooterIcon name="wallet" /><span>Tiền mặt hoặc chuyển khoản</span></li>
            </ul>
          </div>

          <nav aria-label="Khám phá website">
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#94a3b8]">Khám phá</h3>
            <ul className="mt-5 space-y-3.5 text-sm sm:text-base">
              {footerNavigation.map((item) => (
                <li key={item.href}><a href={item.href} className="text-white/85 transition-colors hover:text-[var(--brand-accent)]">{item.label}</a></li>
              ))}
              <li><a href={siteContact.telephoneUrl} className="text-white/85 transition-colors hover:text-[var(--brand-accent)]">Gọi đặt xe</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#8795aa] sm:text-sm xl:flex-row xl:items-center xl:justify-between">
          <p>© {new Date().getFullYear()} Taxi VILA. Taxi điện Phù Cát – Phù Mỹ.</p>
          <a href="#top" className="w-fit transition-colors hover:text-white">Về đầu trang ↑</a>
        </div>
      </div>
    </footer>
  );
}
