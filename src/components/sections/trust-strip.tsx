import { commitments } from "@/content/commitments";

function CommitmentIcon({ icon }: { icon: (typeof commitments)[number]["icon"] }) {
  if (icon === "gift") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7H8.5a2.5 2.5 0 1 1 2.5-2.5C11 5.9 12 7 12 7Zm0 0h3.5A2.5 2.5 0 1 0 13 4.5C13 5.9 12 7 12 7Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }

  if (icon === "price") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M4 5h12a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h12M12 2v20" strokeLinecap="round" /></svg>;
  }

  if (icon === "car") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="m4 14 1.5-5A2 2 0 0 1 7.4 7h9.2a2 2 0 0 1 1.9 2l1.5 5v5h-2v-2H6v2H4v-5Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 13h16M7 14.5h.01M17 14.5h.01" /></svg>;
  }

  if (icon === "check") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="m13 2-7 11h6l-1 9 7-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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
              <span className="mt-1 block text-sm leading-snug text-[#64748b]">{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
