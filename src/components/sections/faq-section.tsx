
import { faqs } from "@/content/faqs";
import { siteContact } from "@/config/site";

export function FaqSection() {
  return (
    <section id="hoi-dap" aria-labelledby="faq-title" className="scroll-mt-24 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-5">
        <div>
          <p className="section-eyebrow"><span aria-hidden="true" />Hỏi đáp</p>
          <h2 id="faq-title" className="section-title mt-4 max-w-lg">Thông tin cần biết trước khi đặt xe</h2>
          <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Nếu chưa có câu trả lời phù hợp, bạn có thể gọi hoặc nhắn Zalo để trao đổi trực tiếp với Taxi VILA.
          </p>
          <a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-[#0563d8]/30 bg-white px-6 font-black text-[#0563d8] transition-colors hover:border-[#0563d8] hover:bg-[#eff6ff]">
            Nhắn Zalo để được tư vấn
          </a>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details key={item.question} className="group rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-1 shadow-[0_10px_30px_rgba(10,25,47,0.035)]" open={index === 0}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-black text-[var(--foreground)] marker:content-none sm:text-lg">
                <span>{item.question}</span>
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-xl text-[var(--brand-accent-dark)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[var(--border-soft)] pb-5 pt-4 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
