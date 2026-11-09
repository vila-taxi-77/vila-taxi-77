
import Image from "next/image";
import { fleetFeatures, type FleetFeatureIcon } from "@/content/fleet";

function FleetIcon({ name }: { name: FleetFeatureIcon }) {
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

  if (name === "seats") {
    return <svg {...common}><circle cx="9" cy="7" r="2.5" /><path d="M3.5 19v-2a5.5 5.5 0 0 1 11 0v2M16.5 5.2a2.5 2.5 0 0 1 0 4.6M18 13a4.5 4.5 0 0 1 2.5 4v2" /></svg>;
  }

  if (name === "battery") {
    return <svg {...common}><rect x="2.5" y="6" width="17" height="12" rx="2" /><path d="M21.5 10v4M11.5 8.5 8.5 13h3l-1 3 4-5h-3l1-2.5" /></svg>;
  }

  if (name === "quiet") {
    return <svg {...common}><path d="M4 9v6h4l5 4V5L8 9H4ZM17 9l4 6M21 9l-4 6" /></svg>;
  }

  return <svg {...common}><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M12 2l-2 2M12 2l2 2M12 22l-2-2M12 22l2-2" /></svg>;
}

export function FleetSection() {
  return (
    <section id="doi-xe" aria-labelledby="fleet-title" className="scroll-mt-24 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--brand-accent)]" />
            Đội xe
          </p>
          <h2 id="fleet-title" className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.045em] text-[#0a192f]">
            VinFast VF5 – xe điện đời mới, sạch và êm
          </h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#64748b] sm:text-xl">
            Toàn bộ chuyến đi của Taxi VILA được phục vụ bằng xe điện VinFast VF5 màu xanh dương đặc trưng: êm ái, sạch sẽ và thân thiện môi trường.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[1.8fr_1fr] lg:gap-6">
          <figure className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#0a192f] shadow-[0_22px_55px_rgba(10,25,47,0.12)] sm:min-h-[28rem] lg:h-full lg:min-h-[31rem]">
            <Image
              src="/images/hero/taxi-vila-hero.png"
              alt="Xe điện VinFast VF5 màu xanh của Taxi VILA mở cửa đón khách"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-[85%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/95 via-[#07172f]/10 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
              <span className="block text-3xl font-black tracking-[-0.04em] sm:text-4xl">VinFast <span className="text-[var(--brand-accent)]">VF5</span></span>
              <span className="mt-1 block text-sm font-medium text-white/80 sm:text-base">Xe điện xanh dương · Taxi VILA</span>
            </figcaption>
          </figure>

          <div className="grid min-h-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-rows-[minmax(0,1.15fr)_repeat(2,minmax(0,0.75fr))]">
            <figure className="relative col-span-2 min-h-[13rem] overflow-hidden rounded-[1.5rem] bg-[#dce4ee] lg:min-h-0">
              <Image
                src="/images/hero/taxi-vila-charging.jpg"
                alt="Xe điện Taxi VILA màu xanh tại trạm sạc"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-[50%_90%]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#302451]/25 via-[#241b48]/30 to-[#07172f]/45" aria-hidden="true" />
              <figcaption className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0a192f] shadow-sm backdrop-blur-sm">
                Xe VILA tại trạm sạc
              </figcaption>
            </figure>

            {fleetFeatures.map((feature) => (
              <article key={feature.title} className="flex min-h-[8.75rem] flex-col justify-center rounded-[1.3rem] border border-[#dce4ee] bg-white p-3 sm:p-5">
                <span className="mb-3 text-[var(--brand-accent-dark)]"><FleetIcon name={feature.icon} /></span>
                <h3 className="text-sm font-black leading-snug text-[#0a192f] sm:text-base">{feature.title}</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
