import { commitments } from "@/content/commitments";

function CommitmentIcon({ icon }: { icon: (typeof commitments)[number]["icon"] }) {
  if (icon === "gift") {
    return <span aria-hidden="true" className="text-lg">🎁</span>;
  }

  if (icon === "price") {
    return <span aria-hidden="true" className="text-sm font-black">₫</span>;
  }

  if (icon === "car") {
    return <span aria-hidden="true" className="text-lg">▰</span>;
  }

  if (icon === "check") {
    return <span aria-hidden="true" className="text-lg font-black">✓</span>;
  }

  return <span aria-hidden="true" className="text-lg">⚡</span>;
}

export function TrustStrip() {
  return (
    <section aria-label="Cam kết Taxi VILA" className="border-b border-[#e5eaf1] bg-white">
      <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-px bg-[#e5eaf1] sm:grid-cols-3 lg:grid-cols-5">
        {commitments.map((item, index) => (
          <div key={item.title} className={`flex min-h-[92px] items-center gap-3 bg-white px-4 py-4 sm:px-5 ${index === commitments.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary)]"><CommitmentIcon icon={item.icon} /></span>
            <span className="min-w-0">
              <span className="block text-sm font-black leading-tight text-[#0a192f]">{item.title}</span>
              <span className="mt-1 block text-xs leading-snug text-[#64748b]">{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
