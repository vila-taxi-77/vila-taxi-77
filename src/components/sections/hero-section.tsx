import Image from "next/image";
import { siteConfig, siteContact } from "@/config/site";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7H8.5a2.5 2.5 0 1 1 2.5-2.5C11 5.9 12 7 12 7Zm0 0h3.5A2.5 2.5 0 1 0 13 4.5C13 5.9 12 7 12 7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZaloIcon() {
  return <span className="grid h-5 w-5 place-items-center rounded-[5px] bg-[#0563d8] text-[7px] font-black text-white">Zalo</span>;
}

export function HeroSection() {
  return (
    <section id="top" className="hero-section relative isolate overflow-hidden bg-[#081a35] text-white">
      <div className="hero-media pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero/taxi-vila-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-background-art pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid relative mx-auto grid max-w-[1220px] items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8 lg:px-5 lg:pb-8 lg:pt-8">
        <div className="hero-copy relative z-10">
          <p className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white/90 backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)] shadow-[0_0_14px_rgba(215,25,32,0.9)]" />
            Taxi điện Phù Cát – Phù Mỹ
          </p>

          <h1 className="hero-fade-up hero-delay-1 mt-6 max-w-3xl text-[clamp(2.35rem,6vw,4.9rem)] font-black leading-[0.98] tracking-[-0.04em]">
            100% xe thuần điện.
            <span className="mt-2 block text-[var(--brand-primary)]">Biết giá trước,</span>
            <span className="mt-2 block">an tâm lên xe.</span>
          </h1>

          <p className="hero-fade-up hero-delay-2 mt-5 text-xl font-extrabold italic text-white/90 sm:text-2xl">
            “Hạnh phúc khi được phục vụ!”
          </p>

          <p className="hero-fade-up hero-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Taxi VILA phục vụ đưa đón sân bay Phù Cát, taxi nội khu, đi tỉnh và các chuyến xe theo yêu cầu. Với 100% xe thuần điện, dòng xe linh hoạt và chi phí được báo trước, chúng tôi mong muốn mang đến hành trình êm ái, tiết kiệm và an tâm cho khách hàng.
          </p>

          <div className="hero-fade-up hero-delay-3 hero-price mt-7 inline-flex items-end gap-3 rounded-2xl border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/12 px-5 py-4 sm:px-6 sm:py-5">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">Giá tham khảo</p>
              <p className="mt-1 text-[clamp(2rem,5vw,3.1rem)] font-black leading-none tracking-[-0.04em] text-[var(--brand-primary)]">
                {siteConfig.priceRange}
              </p>
            </div>
            <span className="mb-0.5 max-w-[180px] text-xs leading-relaxed text-white/65">{siteConfig.priceNote}</span>
          </div>

          <div className="hero-fade-up hero-delay-3 hero-promo mt-4 flex max-w-xl items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-bold text-white/90 backdrop-blur-sm sm:px-5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--brand-primary)] text-white"><GiftIcon /></span>
            <span>{siteConfig.prebookMessage}</span>
          </div>

          <div className="hero-fade-up hero-delay-4 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={siteContact.telephoneUrl} className="hero-call-cta cta-call-attention inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[var(--brand-primary)] px-6 text-base font-black text-white shadow-[0_14px_32px_rgba(215,25,32,0.32)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[var(--brand-primary-dark)] hover:shadow-[0_18px_38px_rgba(215,25,32,0.42)]">
              <PhoneIcon /> Gọi xe ngay – {siteConfig.phoneDisplay}
            </a>
            <a href={siteContact.telephoneUrl} className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-6 text-base font-bold text-white backdrop-blur-md transition-colors hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]">
              Đặt lịch trước – Nhận ưu đãi <ArrowIcon />
            </a>
          </div>
        </div>

        <aside className="hero-fade-up hero-delay-2 hero-contact-card relative z-10 rounded-[1.75rem] border border-white/12 bg-white p-5 text-[#0a192f] shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:p-7 lg:justify-self-end">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xl font-black sm:text-2xl">Bạn muốn đặt xe?</p>
              <p className="mt-1 text-sm leading-relaxed text-[#64748b]">Gọi hoặc nhắn Zalo để được tư vấn hành trình và báo giá trước.</p>
            </div>
            <span className="rounded-full bg-[var(--brand-primary-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[var(--brand-primary)]">Liên hệ nhanh</span>
          </div>

          <div className="mt-6 rounded-2xl bg-[#f8fafc] p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#64748b]">Hotline Taxi VILA</p>
            <a href={siteContact.telephoneUrl} className="mt-2 flex items-center gap-2 text-2xl font-black text-[var(--brand-primary)] sm:text-3xl">
              <PhoneIcon /> {siteConfig.phoneDisplay}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-[#64748b]">Trao đổi điểm đón, điểm đến và thời gian đi để nhận mức giá phù hợp.</p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href={siteContact.telephoneUrl} className="cta-call-attention inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-4 text-sm font-black text-white transition-colors hover:bg-[var(--brand-primary-dark)]"><PhoneIcon /> Gọi ngay</a>
            <a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#dce3ed] px-4 text-sm font-black text-[#0563d8] transition-colors hover:border-[#0563d8] hover:bg-[#eff6ff]"><ZaloIcon /> Nhắn Zalo</a>
          </div>

          <p className="mt-5 border-t border-[#e7ebf0] pt-4 text-xs leading-relaxed text-[#64748b]">Giá và điều kiện ưu đãi sẽ được trao đổi, xác nhận trước khi chuyến đi được chốt.</p>
        </aside>
      </div>

      <div className="hero-road-line relative mx-auto h-1.5 max-w-[1220px]" aria-hidden="true" />
    </section>
  );
}
