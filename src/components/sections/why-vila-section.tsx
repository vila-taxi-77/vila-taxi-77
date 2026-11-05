import Image from "next/image";
import { whyVilaBenefits, type WhyVilaIcon as WhyVilaIconName } from "@/content/why-vila";

function WhyVilaIcon({ name }: { name: WhyVilaIconName }) {
  const className = "h-7 w-7";

  if (name === "wallet") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6.5h14a2 2 0 0 1 2 2V19H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 1-2Zm0 0V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="13.5" r=".6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 4c-8.5 0-14 2.5-14 9a6 6 0 0 0 6 6c6.5 0 9-5.5 8-15Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 21c2.5-5.5 6-8.5 12-11" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 17s5-4.2 5-9a5 5 0 0 0-10 0c0 4.8 5 9 5 9Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="1.7" />
        <path d="m7 14-2.5 6h15L17 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.2 5.5a4.6 4.6 0 0 0-6.5 0L12 7.2l-1.7-1.7a4.6 4.6 0 0 0-6.5 6.5L12 20l8.2-8a4.6 4.6 0 0 0 0-6.5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12.2h2.2l1.1-2 1.5 4 1.1-2H16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="2.5" width="12" height="19" rx="2" />
        <path d="M10 18h4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhyVilaSection() {
  return (
    <section id="gioi-thieu" aria-labelledby="why-vila-title" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-5">
        <div className="lg:flex lg:h-full lg:flex-col">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--brand-accent)]" />
            Tại sao chọn Taxi VILA?
          </p>
          <h2 id="why-vila-title" className="mt-4 max-w-xl text-[clamp(2.35rem,4vw,3.4rem)] font-black leading-[1.05] tracking-[-0.045em] text-[#0a192f]">
            Không chỉ là một chuyến xe – là sự an tâm
          </h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-[#64748b] sm:text-lg">
            Chúng tôi tin rằng một chuyến đi tốt bắt đầu từ sự rõ ràng và kết thúc bằng nụ cười. Đó là lý do khách hàng gọi lại Taxi VILA.
          </p>

          <figure className="relative mt-9 h-[19rem] overflow-hidden rounded-[1.75rem] bg-[#eaf0f6] sm:h-[23rem] lg:min-h-[21rem] lg:flex-1 lg:h-auto">
            <Image
              src="/images/hero/taxi-vila-hero.png"
              alt="Xe taxi điện VILA sẵn sàng đón khách"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
              className="object-cover object-[65%_50%]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07172f]/45 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_12px_35px_rgba(10,25,47,0.16)] backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:px-5">
              <span className="block text-sm font-black text-[#0a192f] sm:text-base">“Hạnh phúc khi được phục vụ!”</span>
              <span className="mt-0.5 block text-xs font-medium text-[#64748b] sm:text-sm">Phương châm trong mỗi chuyến xe của Taxi VILA.</span>
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr lg:gap-5">
          {whyVilaBenefits.map((benefit, index) => {
            const featured = index === 0;

            return (
              <article
                key={benefit.title}
                className={`flex min-h-[12.5rem] flex-col justify-center rounded-[1.5rem] p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:p-7 lg:justify-start ${
                  featured
                    ? "bg-[var(--brand-accent)] text-[#0a192f] shadow-[0_20px_45px_rgba(245,158,11,0.2)]"
                    : "border border-[#dce4ee] bg-white text-[#0a192f] hover:shadow-[0_18px_45px_rgba(10,25,47,0.08)]"
                }`}
              >
                <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${featured ? "bg-[#0a192f]/10 text-[#0a192f]" : "bg-[#fff7e6] text-[var(--brand-accent-dark)]"}`}>
                  <WhyVilaIcon name={benefit.icon} />
                </span>
                <h3 className="text-lg font-black leading-snug sm:text-xl">{benefit.title}</h3>
                <p className={`mt-2 text-sm font-medium leading-relaxed sm:text-base ${featured ? "text-[#0a192f]/80" : "text-[#64748b]"}`}>
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
