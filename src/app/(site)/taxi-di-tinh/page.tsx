import type { Metadata } from "next";
import Image from "next/image";
import { BookingSection } from "@/features/booking/components/booking-section";
import {
  interprovincialBenefits,
  interprovincialBookingSteps,
  interprovincialFaqs,
  interprovincialPlanningPoints,
  interprovincialTripNeeds,
} from "@/content/interprovincial-service";
import { absoluteUrl, getSiteUrl, serializeJsonLd } from "@/config/seo";
import { siteConfig, siteContact } from "@/config/site";

const pagePath = "/taxi-di-tinh";
const pageTitle = "Taxi đi tỉnh từ Phù Cát – Phù Mỹ | Taxi VILA";
const pageDescription =
  "Taxi VILA nhận chuyến đi tỉnh từ Phù Cát, taxi đường dài Phù Mỹ bằng xe điện 5–7 chỗ. Đón trả tận nơi, lịch trình linh hoạt và báo giá trước.";
const heroImage = "/images/fleet/overview/fleet-long-distance-service.png";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "taxi đi tỉnh từ Phù Cát",
    "taxi đường dài Phù Mỹ",
    "taxi đi tỉnh Phù Cát",
    "xe đi tỉnh Phù Mỹ",
    "taxi đường dài Taxi VILA",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: heroImage,
        width: 1672,
        height: 941,
        alt: "Đội xe điện Taxi VILA phục vụ chuyến đi tỉnh từ Phù Cát – Phù Mỹ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.1">
      <path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" />
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

type PageIconName =
  | (typeof interprovincialTripNeeds)[number]["icon"]
  | (typeof interprovincialBenefits)[number]["icon"];

function PageIcon({ name }: { name: PageIconName }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "family") return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M15 14a5 5 0 0 1 6 4.9V20" /></svg>;
  if (name === "briefcase") return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>;
  if (name === "health") return <svg {...common}><path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" /><path d="M8 12h2l1-2 2 5 1-3h2" /></svg>;
  if (name === "luggage") return <svg {...common}><rect x="5" y="6" width="14" height="15" rx="2" /><path d="M9 6V3h6v3M9 10v7M15 10v7M5 13h14" /></svg>;
  if (name === "price") return <svg {...common}><path d="M4 7.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5" /><path d="M4 8h13v8H4a3 3 0 0 1 0-6h10M8 13h.01" /></svg>;
  if (name === "car") return <svg {...common}><path d="m5 16-1-1v-4l2-5h12l2 5v4l-1 1M6 16v2M18 16v2M4 12h16M7 12h.01M17 12h.01" /></svg>;
  if (name === "calendar") return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M8 14h3M13 14h3M8 18h3" /></svg>;
  return <svg {...common}><circle cx="6" cy="17" r="2" /><circle cx="18" cy="7" r="2" /><path d="M8 17h4a3 3 0 0 0 0-6 3 3 0 0 1 0-6h4" /></svg>;
}

function createInterprovincialServiceJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Taxi đi tỉnh từ Phù Cát – Phù Mỹ",
        description: pageDescription,
        url: pageUrl,
        image: absoluteUrl(heroImage),
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Taxi đi tỉnh và taxi đường dài",
        areaServed: ["Phù Cát", "Phù Mỹ", "Các tỉnh lân cận"].map((name) => ({ "@type": "Place", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: `+84${siteConfig.phone.slice(1)}`,
            availableLanguage: "Vietnamese",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Taxi đi tỉnh", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: interprovincialFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export default function InterprovincialTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createInterprovincialServiceJsonLd()) }}
      />

      <main id="main-content" tabIndex={-1} className="page-below-header bg-[#f5f7fb] outline-none">
        <section id="top" className="relative isolate overflow-hidden bg-[#07172f] text-white">
          <Image
            src={heroImage}
            alt="Đội xe điện Taxi VILA phục vụ taxi đi tỉnh từ Phù Cát và Phù Mỹ"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,23,47,0.97)_0%,rgba(7,23,47,0.88)_48%,rgba(7,23,47,0.62)_100%),linear-gradient(180deg,rgba(7,23,47,0.12)_0%,rgba(7,23,47,0.8)_100%)]" />

          <div className="mx-auto grid max-w-[1220px] gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-5 lg:py-20">
            <div>
              <nav aria-label="Đường dẫn trang" className="flex flex-wrap items-center gap-2 text-sm font-bold text-white/65">
                <a href="/" className="transition-colors hover:text-[var(--brand-accent)]">Trang chủ</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-white">Taxi đi tỉnh</span>
              </nav>

              <p className="mt-7 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
                <span className="h-px w-10 bg-current" />Dịch vụ đường dài
              </p>
              <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.8rem)] font-black leading-[0.98] tracking-[-0.045em] [text-wrap:balance]">
                Taxi đi tỉnh từ Phù Cát – Phù Mỹ
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/78 sm:text-lg">
                Taxi VILA nhận chuyến đường dài bằng xe điện 5–7 chỗ, đón trả tận nơi theo lịch trình đã thống nhất. Phù hợp đi công tác, về quê, khám bệnh, du lịch và đặt xe khứ hồi.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ưu điểm dịch vụ">
                {["Báo giá trước", "Một chiều hoặc khứ hồi", "Đón trả tận nơi"].map((item) => (
                  <li key={item} className="rounded-full border border-white/18 bg-white/[0.08] px-3.5 py-2 text-sm font-bold text-white/90 backdrop-blur-sm">{item}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                <a href={siteContact.telephoneUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 font-black !text-white shadow-[0_14px_32px_rgba(245,158,11,0.28)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)]">
                  <PhoneIcon /> Gọi {siteConfig.phoneDisplay}
                </a>
                <a href="#dat-xe-truc-tuyen" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] px-6 font-black !text-white backdrop-blur-sm transition-colors hover:border-[var(--brand-accent)] hover:bg-white/12">
                  Nhận báo giá chuyến <ArrowIcon />
                </a>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-white/12 bg-white p-5 text-[var(--foreground)] shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--brand-accent)]">Chuẩn bị hành trình</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Báo giá đi tỉnh nhanh hơn</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">
                Gửi đủ thông tin để Taxi VILA kiểm tra quãng đường, lịch xe và tư vấn phương án phù hợp.
              </p>
              <ul className="mt-6 grid gap-3">
                {["Điểm đón và tỉnh cần đến", "Ngày giờ đi, thời gian về", "Số khách, hành lý và điểm dừng"].map((item, index) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl bg-[#f5f7fb] p-3.5 font-bold">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--brand-accent)] text-sm font-black text-white">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 font-black !text-white shadow-[0_12px_28px_rgba(245,158,11,0.24)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)] hover:shadow-[0_16px_34px_rgba(245,158,11,0.34)]">
                Gửi hành trình qua Zalo
              </a>
            </aside>
          </div>
        </section>

        <section aria-labelledby="long-trip-needs-title" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="max-w-3xl">
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Chuyến đi đường dài</p>
              <h2 id="long-trip-needs-title" className="section-title mt-4">Linh hoạt cho từng mục đích di chuyển</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Mỗi hành trình có thời gian và nhu cầu khác nhau. Gửi thông tin thực tế để Taxi VILA tư vấn loại xe và cách sắp xếp phù hợp.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {interprovincialTripNeeds.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_14px_40px_rgba(10,25,47,0.05)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-[0_18px_45px_rgba(245,158,11,0.12)] sm:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-accent)] text-white"><PageIcon name={item.icon} /></span>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.02em] text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="long-trip-plan-title" className="bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:px-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#07172f] shadow-[0_24px_65px_rgba(10,25,47,0.14)]">
              <Image src="/images/fleet/overview/fleet-convoy-road.png" alt="Đội xe Taxi VILA phục vụ hành trình đường dài" fill sizes="(max-width: 1023px) 100vw, 48vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,47,0.03)_30%,rgba(7,23,47,0.72)_100%)]" />
              <span className="absolute bottom-5 left-5 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-sm font-black text-white shadow-lg">Taxi đường dài 5–7 chỗ</span>
            </div>
            <div>
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Chuẩn bị trước chuyến</p>
              <h2 id="long-trip-plan-title" className="section-title mt-4">Thông tin rõ, hành trình chủ động</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Các điểm đón, trả, dừng nghỉ và thời gian chờ đều ảnh hưởng đến lịch trình. Trao đổi trước giúp hai bên thống nhất thuận tiện hơn.
              </p>
              <ol className="mt-7 grid gap-3">
                {interprovincialPlanningPoints.map((point, index) => (
                  <li key={point.title} className="flex gap-4 rounded-2xl border border-[var(--border-soft)] bg-white p-4 sm:p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--brand-accent)] text-sm font-black text-white">{index + 1}</span>
                    <div>
                      <h3 className="font-black text-[var(--foreground)]">{point.title}</h3>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="long-trip-benefits-title" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow justify-center !text-[var(--brand-accent)]"><span aria-hidden="true" />Đi tỉnh cùng Taxi VILA</p>
              <h2 id="long-trip-benefits-title" className="section-title mt-4">Thoải mái hơn trên hành trình dài</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {interprovincialBenefits.map((benefit) => (
                <article key={benefit.title} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[#f8fafc] p-5 sm:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-accent)] text-white"><PageIcon name={benefit.icon} /></span>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.02em] text-[var(--foreground)]">{benefit.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="long-trip-process-title" className="bg-[#07172f] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="max-w-3xl">
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Cách đặt xe</p>
              <h2 id="long-trip-process-title" className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.03] tracking-[-0.045em] [text-wrap:balance]">Bốn bước chốt chuyến đi tỉnh</h2>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {interprovincialBookingSteps.map((step, index) => (
                <li key={step.title} className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-6">
                  <span className="text-4xl font-black tracking-[-0.04em] text-[var(--brand-accent)]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-lg font-black leading-snug text-white">{step.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/68">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <BookingSection />

        <section aria-labelledby="long-trip-faq-title" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-5">
            <div>
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Hỏi đáp đi tỉnh</p>
              <h2 id="long-trip-faq-title" className="section-title mt-4">Thông tin trước chuyến đường dài</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-muted)]">
                Chưa thấy tuyến bạn cần? Gọi Taxi VILA để được kiểm tra lịch xe và tư vấn trực tiếp.
              </p>
              <a href={siteContact.telephoneUrl} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07172f] px-6 font-black !text-white transition-colors hover:bg-[#102a50]">
                <PhoneIcon /> {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="grid gap-3">
              {interprovincialFaqs.map((item, index) => (
                <details key={item.question} open={index === 0} className="group rounded-2xl border border-[var(--border-soft)] bg-white p-5 transition-colors open:border-[var(--brand-accent)]/60 open:bg-[var(--accent-soft)]/35">
                  <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-black text-[var(--foreground)] marker:content-none">
                    {item.question}
                    <span aria-hidden="true" className="text-xl text-[var(--brand-accent)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
