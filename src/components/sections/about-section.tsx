
import Image from "next/image";

const coreValues = [
  {
    title: "Tận tâm",
    description: "Lắng nghe và hỗ trợ rõ ràng trong từng hành trình.",
    icon: "heart",
  },
  {
    title: "Minh bạch",
    description: "Trao đổi chi phí trước khi chuyến đi được chốt.",
    icon: "scale",
  },
  {
    title: "Trách nhiệm",
    description: "Tôn trọng thời gian và hành trình đã thống nhất.",
    icon: "shield",
  },
  {
    title: "Đồng hành",
    description: "Phục vụ từ chuyến nội khu đến hành trình đường dài.",
    icon: "compass",
  },
] as const;

function ValueIcon({ name }: { name: (typeof coreValues)[number]["icon"] }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "heart") {
    return <svg {...common}><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" /></svg>;
  }

  if (name === "scale") {
    return <svg {...common}><path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7ZM8 21h8" /></svg>;
  }

  if (name === "shield") {
    return <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }

  return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></svg>;
}

export function AboutSection() {
  return (
    <section id="gioi-thieu" aria-labelledby="about-title" className="scroll-mt-24 overflow-hidden bg-white py-14 sm:py-18 lg:py-22">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:px-5">
        <div className="relative lg:pr-3">
          <div aria-hidden="true" className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#eaf2ff]/70 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-8 -right-5 h-40 w-40 rounded-[2.5rem] border border-[var(--brand-accent)]/25" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 bg-[#dce4ee] shadow-[0_28px_70px_rgba(10,25,47,0.14)]">
            <Image
              src="/images/hero/taxt-vila-byd.png"
              alt="Xe điện BYD của Taxi VILA"
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover object-[52%_58%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,47,0.02)_45%,rgba(7,23,47,0.68)_100%)]" />

            <span className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#07172f] shadow-lg backdrop-blur sm:left-5 sm:top-5">
              Xe điện Taxi VILA
            </span>

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.35rem] border border-white/15 bg-[#07172f]/92 p-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md sm:bottom-5 sm:left-auto sm:right-5 sm:max-w-[20rem] sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[var(--brand-accent)]">Sứ mệnh</p>
              <p className="mt-2 text-base font-bold leading-relaxed">
                Đưa đón tận nơi bằng xe điện, báo giá trước và phục vụ bằng sự tận tâm.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="section-eyebrow"><span aria-hidden="true" />Về Taxi VILA</p>
          <h2 id="about-title" className="section-title mt-4 max-w-2xl">
            Hạnh phúc khi được phục vụ!
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Taxi VILA mong muốn mang đến những hành trình thuận tiện, an tâm và thoải mái bằng dịch vụ taxi điện tại Phù Cát – Phù Mỹ cùng các khu vực lân cận.
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Mỗi chuyến đi có một mục đích riêng. Vì vậy, chúng tôi chú trọng sự tận tâm trong phục vụ, chủ động trao đổi lịch trình và minh bạch chi phí trước khi khởi hành.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
            {coreValues.map((value) => (
              <article key={value.title} className="group rounded-[1.35rem] border border-[var(--border-soft)] bg-white p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] sm:p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--brand-accent-dark)] transition-colors group-hover:bg-[var(--brand-accent)] group-hover:text-white">
                  <ValueIcon name={value.icon} />
                </span>
                <h3 className="mt-4 text-base font-black leading-snug text-[var(--foreground)] sm:text-lg">{value.title}</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--text-muted)]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
