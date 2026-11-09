
import Image from "next/image";

import {
  meterTaxiDrawbacks,
  priceFirstHighlights,
  priceFirstSteps,
  type PriceStepIcon as PriceStepIconName,
  vilaPriceBenefits,
} from "@/content/price-first";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 12 4.2 4.2L19 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m7 7 10 10M17 7 7 17" strokeLinecap="round" />
    </svg>
  );
}

function PriceStepIcon({ name }: { name: PriceStepIconName }) {
  const className = "h-5 w-5";

  if (name === "message") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 5.5h14v10H9l-4 3v-13Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9h6M9 12h4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5 19 6v5.4c0 4.4-2.9 7.6-7 9.1-4.1-1.5-7-4.7-7-9.1V6l7-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PriceFirstSection() {
  return (
    <section id="bao-gia" className="relative isolate scroll-mt-24 overflow-hidden bg-[#07172f] py-14 text-white sm:py-16 lg:py-20">
      <Image
        src="/images/hero/taxi-vila-charging.jpg"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-[68%_72%] opacity-90 brightness-[0.94] saturate-90 lg:object-[center_92%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,23,47,0.87)_0%,rgba(7,23,47,0.7)_44%,rgba(7,23,47,0.43)_100%),linear-gradient(180deg,rgba(7,23,47,0.58)_0%,rgba(7,23,47,0.08)_48%,rgba(7,23,47,0.64)_100%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1220px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:px-5 xl:gap-14">
        <div>
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--brand-accent)]" />
            Điểm khác biệt
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2.35rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.045em] text-white lg:text-[3.1rem] xl:text-[3.4rem]">
            Biết giá trước – An tâm mọi chuyến đi
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/82 sm:text-xl lg:text-base xl:text-lg">
            Tại Taxi VILA, chi phí được trao đổi và thống nhất trước khi khởi hành. Bạn nắm rõ mức giá, không băn khoăn về chi phí phát sinh trong quá trình di chuyển.
          </p>

          <div className="mt-9 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-white/15 bg-white/[0.045] px-5 py-4 text-sm font-extrabold text-white sm:px-6 md:flex-nowrap md:whitespace-nowrap lg:gap-x-2 lg:px-4 lg:text-xs xl:gap-x-4 xl:px-6 xl:text-sm">
            {priceFirstHighlights.map((highlight, index) => (
              <span key={highlight} className="inline-flex items-center gap-2 xl:gap-4">
                {index > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />}
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-[40rem] gap-4 sm:grid-cols-2">
            <article className="rounded-[1.25rem] border border-white/20 bg-[#10223c]/80 p-4 backdrop-blur-sm sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-white/75">
                Tính theo đồng hồ
              </p>
              <ul className="mt-3 space-y-2.5">
                {meterTaxiDrawbacks.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm font-medium leading-snug text-white/82">
                    <span className="mt-0.5 text-white/60"><CloseIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.25rem] bg-[var(--brand-accent)] p-4 text-[#0a192f] shadow-[0_24px_70px_rgba(245,158,11,0.14)] sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em]">
                Taxi VILA
              </p>
              <ul className="mt-3 space-y-2.5">
                {vilaPriceBenefits.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm font-extrabold leading-snug">
                    <span className="mt-0.5"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <ol className="mt-6 grid w-full max-w-[40rem] gap-4 sm:grid-cols-3">
            {priceFirstSteps.map((step) => (
              <li
                key={step.number}
                className="group rounded-[1.25rem] border border-white/20 bg-[#0b1b34]/75 p-4 backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/55 hover:bg-[#142743]/90 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-4xl font-black tracking-[-0.04em] text-[var(--brand-accent)]">
                    {step.number}
                  </span>
                  <span className="text-white/65 transition-colors group-hover:text-[var(--brand-accent)]">
                    <PriceStepIcon name={step.icon} />
                  </span>
                </div>
                <h3 className="mt-4 text-base font-black leading-snug text-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/75">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
