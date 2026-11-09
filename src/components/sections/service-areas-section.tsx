import {
  popularRoutes,
  servedAreaTags,
  serviceAreaMapEmbedUrl,
} from "@/content/service-areas";
import { siteContact } from "@/config/site";

function OriginIcon() {
  return (
    <span aria-hidden="true" className="grid h-5 w-5 shrink-0 place-items-center">
      <span className="h-2.5 w-2.5 rounded-full bg-[#0563d8] ring-4 ring-[#eaf2ff]" />
    </span>
  );
}

function DestinationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[var(--brand-accent-dark)]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="7" r="2" />
      <path d="M8 17h4a3 3 0 0 0 0-6h0a3 3 0 0 1 0-6h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M14 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceAreasSection() {
  return (
    <section id="khu-vuc" aria-labelledby="service-areas-title" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
        <header className="max-w-3xl">
          <p className="section-eyebrow"><span aria-hidden="true" />Khu vực &amp; tuyến phổ biến</p>
          <h2 id="service-areas-title" className="section-title mt-4 max-w-3xl">
            Phù Cát – Phù Mỹ là nhà. Đi đâu chúng tôi cũng đưa.
          </h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Phục vụ khu vực Phù Cát – Phù Mỹ và các tuyến liên huyện, liên tỉnh theo yêu cầu. Khoảng cách và thời gian thực tế xem trực tiếp trên Google Maps.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {popularRoutes.map((route) => (
            <article
              key={`${route.origin}-${route.destination}`}
              className="flex min-h-[14.5rem] flex-col rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-[0_18px_45px_rgba(245,158,11,0.14)] sm:p-6"
            >
              <p className="w-fit rounded-full bg-[#eaf2ff] px-3 py-1 text-xs font-black uppercase tracking-[0.04em] text-[#0563d8]">
                {route.label}
              </p>

              <div className="relative mt-4 space-y-4">
                <span aria-hidden="true" className="absolute bottom-4 left-[9px] top-4 border-l border-dashed border-[#cbd5e1]" />
                <p className="relative flex items-center gap-3 text-base font-black leading-snug text-[var(--foreground)] sm:text-lg">
                  <OriginIcon /> {route.origin}
                </p>
                <p className="relative flex items-center gap-3 text-base font-black leading-snug text-[var(--foreground)] sm:text-lg">
                  <DestinationIcon /> {route.destination}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-5 xs:flex-row xs:items-center xs:justify-between">
                <a
                  href={route.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--text-muted)] transition-colors hover:text-[#0563d8]"
                  aria-label={`Xem lộ trình từ ${route.origin} đến ${route.destination} trên Google Maps`}
                >
                  <RouteIcon /> Xem lộ trình
                </a>
                <a
                  href={siteContact.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-black !text-white transition-[transform,background-color] hover:-translate-y-0.5 ${
                    route.featured
                      ? "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-dark)]"
                      : "bg-[#07172f] hover:bg-[#102a50]"
                  }`}
                  aria-label={`Nhận báo giá tuyến ${route.origin} đến ${route.destination}`}
                >
                  Báo giá tuyến này <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.9fr_1fr]">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] sm:min-h-[27rem]">
            <iframe
              src={serviceAreaMapEmbedUrl}
              title="Bản đồ khu vực Taxi VILA phục vụ"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
          </div>

          <aside className="rounded-[1.6rem] bg-[#eaf2ff] p-5 sm:p-7" aria-labelledby="served-area-tags-title">
            <h3 id="served-area-tags-title" className="text-sm font-black uppercase tracking-[0.14em] text-[#0563d8] sm:text-base">
              Chúng tôi phục vụ
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {servedAreaTags.map((tag) => (
                <li key={tag} className="flex min-h-11 items-center justify-center rounded-2xl border border-[#cedcf0] bg-white px-2 py-2 text-center text-sm font-bold leading-snug text-[#24344d] shadow-[0_4px_12px_rgba(10,25,47,0.04)]">
                  {tag}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#cbdcf2] pt-5 text-sm font-medium leading-relaxed text-[var(--text-muted)]">
              Chưa có tuyến bạn cần? Gửi yêu cầu — Taxi VILA nhận đưa đón theo yêu cầu.
            </p>
            <a
              href={siteContact.zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 font-black !text-white transition-colors hover:bg-[var(--brand-accent-dark)]"
            >
              Gửi tuyến cần tư vấn
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
