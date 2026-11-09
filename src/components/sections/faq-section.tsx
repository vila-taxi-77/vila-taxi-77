import { faqs } from "@/content/faqs";
import { siteConfig, siteContact } from "@/config/site";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FaqSection() {
  return (
    <section id="hoi-dap" aria-labelledby="faq-title" className="scroll-mt-24 bg-[#f5f7fb] py-14 sm:py-18 lg:py-22">
      <div className="mx-auto grid max-w-[1220px] gap-9 px-4 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-14 lg:px-5">
        <div className="max-w-lg lg:mx-auto">
          <p className="section-eyebrow"><span aria-hidden="true" />Câu hỏi thường gặp</p>
          <h2 id="faq-title" className="section-title mt-4 max-w-lg">Bạn hỏi, Taxi VILA trả lời</h2>
          <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Chưa thấy câu trả lời bạn cần? Gọi ngay, chúng tôi luôn sẵn sàng 24/7.
          </p>
          <a href={siteContact.telephoneUrl} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07172f] px-7 font-black !text-white shadow-[0_12px_28px_rgba(7,23,47,0.14)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#102a50] hover:shadow-[0_16px_34px_rgba(7,23,47,0.2)]">
            <PhoneIcon /> {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="space-y-2.5">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-[0_8px_24px_rgba(10,25,47,0.025)] transition-[border-color,box-shadow] open:border-[#9fb5cf] open:shadow-[0_14px_34px_rgba(7,23,47,0.08)]"
              open={index === 0}
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-black leading-snug text-[var(--foreground)] marker:content-none sm:min-h-16 sm:px-5 sm:text-base">
                <span>{item.question}</span>
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eef3f8] text-[#274766] transition-[transform,background-color,color] duration-200 group-open:rotate-180 group-open:bg-[#07172f] group-open:text-white">
                  <ChevronIcon />
                </span>
              </summary>
              <div className="mx-4 border-t border-[var(--border-soft)] sm:mx-5">
                <p className="max-w-3xl pb-4 pt-3.5 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:pb-5 sm:pt-4 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
