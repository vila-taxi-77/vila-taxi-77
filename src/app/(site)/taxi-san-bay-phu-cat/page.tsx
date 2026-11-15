import type { Metadata } from "next";
import Image from "next/image";
import { BookingSection } from "@/features/booking/components/booking-section";
import {
  airportBenefits,
  airportBookingSteps,
  airportFaqs,
  airportRoutes,
} from "@/content/airport-service";
import { absoluteUrl, getSiteUrl, serializeJsonLd } from "@/config/seo";
import { siteConfig, siteContact } from "@/config/site";

const pagePath = "/taxi-san-bay-phu-cat";
const pageTitle = "Taxi sân bay Phù Cát – Đưa đón tận nơi | Taxi VILA";
const pageDescription =
  "Taxi VILA nhận đưa đón sân bay Phù Cát đi Phù Cát, Phù Mỹ, Quy Nhơn và các tuyến theo yêu cầu. Xe điện 5–7 chỗ, hỗ trợ lịch bay và báo giá trước.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/images/hero/taxi-vila-phu-cat-airport-service.png",
        width: 1536,
        height: 1024,
        alt: "Taxi VILA đưa đón khách tại sân bay Phù Cát",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hero/taxi-vila-phu-cat-airport-service.png"],
  },
};

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.1">
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

function BenefitIcon({ name }: { name: (typeof airportBenefits)[number]["icon"] }) {
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

  if (name === "flight") {
    return <svg {...common}><path d="m3.5 14.5 7.2 1.4 4.8 4.6 1.5-.5-1.8-5.2 4.7-2.9c1-.6 1.3-1.8.8-2.8-.5-1-1.7-1.4-2.7-.9l-5 2.4-3.9-3.9-1.5.5 1.7 5.5-4.8.5-1 1.3Z" /></svg>;
  }
  if (name === "price") {
    return <svg {...common}><path d="M4 7.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5" /><path d="M4 8h13v8H4a3 3 0 0 1 0-6h10M8 13h.01" /></svg>;
  }
  if (name === "car") {
    return <svg {...common}><path d="m5 16-1-1v-4l2-5h12l2 5v4l-1 1M6 16v2M18 16v2M4 12h16M7 12h.01M17 12h.01" /></svg>;
  }
  return <svg {...common}><path d="M20 10c0 5.5-8 11-8 11S4 15.5 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function createAirportServiceJsonLd() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Taxi đưa đón sân bay Phù Cát",
        description: pageDescription,
        url: pageUrl,
        image: absoluteUrl("/images/hero/taxi-vila-phu-cat-airport-service.png"),
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Taxi đưa đón sân bay",
        areaServed: ["Sân bay Phù Cát", "Phù Cát", "Phù Mỹ", "Quy Nhơn"].map((name) => ({
          "@type": "Place",
          name,
        })),
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Taxi sân bay Phù Cát",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: airportFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function AirportTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createAirportServiceJsonLd()) }}
      />

      <main id="main-content" tabIndex={-1} className="page-below-header bg-[#f5f7fb] outline-none">
        <section id="top" className="relative isolate overflow-hidden bg-[#07172f] text-white">
          <Image
            src="/images/hero/taxi-vila-phu-cat-airport-service.png"
            alt="Taxi VILA đưa đón khách tại sân bay Phù Cát"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[50%_30%]"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,23,47,0.96)_0%,rgba(7,23,47,0.88)_48%,rgba(7,23,47,0.6)_100%),linear-gradient(180deg,rgba(7,23,47,0.16)_0%,rgba(7,23,47,0.74)_100%)]" />

          <div className="mx-auto grid max-w-[1220px] gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-5 lg:py-20">
            <div>
              <nav aria-label="Đường dẫn trang" className="flex flex-wrap items-center gap-2 text-sm font-bold text-white/65">
                <a href="/" className="transition-colors hover:text-[var(--brand-accent)]">Trang chủ</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-white">Taxi sân bay Phù Cát</span>
              </nav>

              <p className="mt-7 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
                <span className="h-px w-10 bg-current" />Dịch vụ sân bay
              </p>
              <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.8rem)] font-black leading-[0.98] tracking-[-0.045em] [text-wrap:balance]">
                Taxi sân bay Phù Cát – đưa đón tận nơi
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/78 sm:text-lg">
                Taxi VILA nhận đón và tiễn sân bay Phù Cát đi Phù Cát, Phù Mỹ, Quy Nhơn cùng các tuyến theo yêu cầu. Xe điện 5–7 chỗ, hỗ trợ lịch bay và trao đổi chi phí trước chuyến đi.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ưu điểm dịch vụ">
                {["Đặt trước theo lịch bay", "Xe điện 5–7 chỗ", "Báo giá trước"].map((item) => (
                  <li key={item} className="rounded-full border border-white/18 bg-white/[0.08] px-3.5 py-2 text-sm font-bold text-white/90 backdrop-blur-sm">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                <a href={siteContact.telephoneUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 font-black !text-white shadow-[0_14px_32px_rgba(245,158,11,0.28)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)]">
                  <PhoneIcon /> Gọi {siteConfig.phoneDisplay}
                </a>
                <a href="#dat-xe-truc-tuyen" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] px-6 font-black !text-white backdrop-blur-sm transition-colors hover:border-[var(--brand-accent)] hover:bg-white/12">
                  Đặt xe sân bay <ArrowIcon />
                </a>
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-white/12 bg-white p-5 text-[var(--foreground)] shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--brand-accent)]">Chuẩn bị thông tin</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Đặt xe sân bay nhanh hơn</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">
                Gửi đủ thông tin giúp Taxi VILA kiểm tra hành trình và tư vấn xe phù hợp ngay từ lần liên hệ đầu tiên.
              </p>
              <ul className="mt-6 grid gap-3">
                {["Mã chuyến bay và giờ dự kiến", "Điểm đón hoặc điểm trả", "Số hành khách và hành lý"].map((item, index) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl bg-[#f5f7fb] p-3.5 font-bold">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--brand-accent)] text-sm font-black text-white">{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 font-black !text-white shadow-[0_12px_28px_rgba(245,158,11,0.24)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)] hover:shadow-[0_16px_34px_rgba(245,158,11,0.34)]">
                Gửi lịch bay qua Zalo
              </a>
            </aside>
          </div>
        </section>

        <section aria-labelledby="airport-routes-title" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="max-w-3xl">
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Tuyến sân bay phổ biến</p>
              <h2 id="airport-routes-title" className="section-title mt-4">Từ sân bay Phù Cát, đi đâu cũng thuận tiện</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Gửi điểm đón và điểm đến cụ thể để Taxi VILA kiểm tra lộ trình, sắp xếp xe và báo giá phù hợp.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {airportRoutes.map((route) => (
                <article key={route.destination} className="group flex min-h-[13rem] flex-col rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-[0_18px_45px_rgba(245,158,11,0.12)] sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--brand-accent-dark)]">
                      <BenefitIcon name="pin" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[var(--text-muted)]">{route.origin}</p>
                      <h3 className="mt-1 text-xl font-black tracking-[-0.025em] text-[var(--foreground)] sm:text-2xl">{route.destination}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">{route.description}</p>
                  <a href="#dat-xe-truc-tuyen" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-4 text-sm font-black text-[var(--brand-accent-dark)] transition-[gap,color] hover:gap-3 hover:text-[var(--foreground)]">
                    Nhận báo giá tuyến này <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="airport-benefits-title" className="bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow justify-center !text-[var(--brand-accent)]"><span aria-hidden="true" />An tâm theo lịch bay</p>
              <h2 id="airport-benefits-title" className="section-title mt-4">Đặt trước để hành trình chủ động hơn</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {airportBenefits.map((benefit) => (
                <article key={benefit.title} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_14px_40px_rgba(10,25,47,0.05)] sm:p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--brand-accent-dark)]">
                    <BenefitIcon name={benefit.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.02em] text-[var(--foreground)]">{benefit.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="airport-process-title" className="bg-[#07172f] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
            <div className="max-w-3xl">
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Cách đặt xe</p>
              <h2 id="airport-process-title" className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.03] tracking-[-0.045em] [text-wrap:balance]">Bốn bước để xe đón đúng lịch hẹn</h2>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {airportBookingSteps.map((step, index) => (
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

        <section aria-labelledby="airport-faq-title" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-5">
            <div>
              <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Hỏi đáp sân bay</p>
              <h2 id="airport-faq-title" className="section-title mt-4">Thông tin cần biết trước khi đặt xe</h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[var(--text-muted)]">
                Cần trao đổi hành trình riêng? Gọi trực tiếp để Taxi VILA kiểm tra lịch xe và hỗ trợ nhanh hơn.
              </p>
              <a href={siteContact.telephoneUrl} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07172f] px-6 font-black !text-white transition-colors hover:bg-[#102a50]">
                <PhoneIcon /> {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="grid gap-3">
              {airportFaqs.map((item, index) => (
                <details key={item.question} open={index === 0} className="group rounded-2xl border border-[var(--border-soft)] bg-white p-5 transition-colors open:border-[var(--brand-accent)]/60 open:bg-[var(--accent-soft)]/35">
                  <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-black text-[var(--foreground)] marker:content-none">
                    {item.question}
                    <span aria-hidden="true" className="text-xl text-[var(--brand-accent-dark)] transition-transform group-open:rotate-45">+</span>
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

