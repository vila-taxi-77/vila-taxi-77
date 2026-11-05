
import Image from "next/image";
import {
  taxiServices,
  type ServiceIcon as ServiceIconName,
  type TaxiService,
} from "@/content/services";

type IconProps = {
  name: ServiceIconName;
};

function ServiceIcon({ name }: IconProps) {
  const iconClassName = "h-7 w-7";

  if (name === "airport") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="m3.8 10 6.5 1.8 5.9-6c.7-.7 1.7-1 2.7-.7l.8.3-4.8 8.1 4.3 2.6-.8 1.4-5.8-1.4-3.3 3.3-1.6-.5 1.7-4-4.7-2.8-.9-2.1Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "local") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M6 21V6.7c0-.9.7-1.7 1.7-1.7h8.6c.9 0 1.7.7 1.7 1.7V21M4 21h16M9 5V3h6v2M9.5 9h1M13.5 9h1M9.5 12.5h1M13.5 12.5h1M10 21v-4h4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "route") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="6" cy="17.5" r="2.5" />
        <circle cx="18" cy="6.5" r="2.5" />
        <path d="M8.5 17.5h5a2.5 2.5 0 0 0 0-5h-3a2.5 2.5 0 0 1 0-5h5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M7 7h10.5M15 4l3 3-3 3M17 17H6.5M9 14l-3 3 3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ServiceCardProps = {
  service: TaxiService;
};

function ServiceCard({ service }: ServiceCardProps) {
  const hasImage = Boolean(service.image);

  if (hasImage && service.image) {
    return (
      <article className="group relative isolate min-h-[18.5rem] overflow-hidden rounded-[1.75rem] bg-[#07172f] shadow-[0_22px_60px_rgba(10,25,47,0.13)]">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          style={{ objectPosition: service.image.position ?? "50% 50%" }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172f] via-[#07172f]/65 to-[#07172f]/10" />
        <div className="relative flex min-h-[18.5rem] flex-col justify-end p-6 sm:p-8">
          <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--brand-accent)] text-[#0a192f] shadow-[0_12px_30px_rgba(245,158,11,0.25)]">
            <ServiceIcon name={service.icon} />
          </span>
          <h3 className="text-2xl font-black tracking-[-0.025em] text-white sm:text-[1.75rem]">
            {service.title}
          </h3>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-white/75 sm:text-lg">
            {service.description}
          </p>
          <a
            href="#dat-xe"
            className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-black !text-[var(--brand-accent)] transition-[gap,color] hover:gap-2.5 hover:!text-[var(--brand-accent-dark)]"
            aria-label={`Đặt dịch vụ ${service.title}`}
          >
            Đặt dịch vụ này <ArrowIcon />
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex min-h-[18.5rem] flex-col justify-center rounded-[1.75rem] border border-[#dde4ee] bg-white p-6 shadow-[0_18px_50px_rgba(10,25,47,0.06)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--brand-accent)]/55 hover:shadow-[0_24px_60px_rgba(10,25,47,0.1)] sm:p-8">
      <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff7e6] text-[var(--brand-accent-dark)] transition-colors group-hover:bg-[var(--brand-accent)] group-hover:text-[#0a192f]">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="text-2xl font-black tracking-[-0.025em] text-[#0a192f] sm:text-[1.75rem]">
        {service.title}
      </h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-[#64748b] sm:text-lg">
        {service.description}
      </p>
      <a
        href="#dat-xe"
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-black !text-[var(--brand-accent)] transition-[gap,color] hover:gap-2.5 hover:!text-[var(--brand-accent-dark)]"
        aria-label={`Đặt dịch vụ ${service.title}`}
      >
        Đặt dịch vụ này <ArrowIcon />
      </a>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="dich-vu" className="scroll-mt-24 bg-[#f5f7fb] pb-20 pt-12 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--brand-accent)]" />
            Dịch vụ Taxi VILA
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.045em] text-[#0a192f]">
            Một cuộc gọi – đi đâu cũng được đưa đón tận nơi
          </h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#64748b] sm:text-xl">
            Từ chuyến ra sân bay lúc sáng sớm đến chuyến về quê cuối tuần, chọn dịch vụ phù hợp và để Taxi VILA lo phần còn lại.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_1fr] lg:gap-6">
          {taxiServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
