
import { serviceAreas, type ServiceAreaIcon } from "@/content/service-areas";
import { siteConfig, siteContact } from "@/config/site";

function AreaIcon({ name }: { name: ServiceAreaIcon }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "airport") {
    return <svg {...common}><path d="m3.8 10 6.5 1.8 5.9-6c.7-.7 1.7-1 2.7-.7l.8.3-4.8 8.1 4.3 2.6-.8 1.4-5.8-1.4-3.3 3.3-1.6-.5 1.7-4-4.7-2.8-.9-2.1Z" /></svg>;
  }

  if (name === "location") {
    return <svg {...common}><path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  }

  if (name === "route") {
    return <svg {...common}><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h4a3 3 0 0 0 0-6h0a3 3 0 0 1 0-6h4" /></svg>;
  }

  return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h3M8 17h6" /></svg>;
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceAreasSection() {
  return (
    <section id="khu-vuc" aria-labelledby="service-areas-title" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <p className="section-eyebrow"><span aria-hidden="true" />Khu vực phục vụ</p>
            <h2 id="service-areas-title" className="section-title mt-4 max-w-xl">Đón tận nơi, chủ động mọi hành trình</h2>
          </div>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Từ chuyến đi nội khu đến sân bay và tuyến lân cận, hãy gửi điểm đón, điểm đến để Taxi VILA tư vấn thời gian và chi phí phù hợp.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <article key={area.title} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] p-5 sm:p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--brand-accent-dark)]"><AreaIcon name={area.icon} /></span>
              <h3 className="mt-5 text-lg font-black leading-snug text-[var(--foreground)]">{area.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] bg-[#07172f] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:px-8">
          <div>
            <p className="text-lg font-black sm:text-xl">Chưa thấy tuyến bạn cần?</p>
            <p className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">Gọi trực tiếp để kiểm tra hành trình và nhận báo giá trước.</p>
          </div>
          <a href={siteContact.telephoneUrl} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 font-black !text-white transition-colors hover:bg-[var(--brand-accent-dark)]">
            <PhoneIcon /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
