
import Image from "next/image";
import { BookingForm } from "@/features/booking/components/booking-form";
import { siteConfig, siteContact } from "@/config/site";

const bookingSteps = [
  { title: "Gửi yêu cầu", description: "Điền form hoặc nhắn trực tiếp qua Zalo.", icon: "form" },
  { title: "Nhận báo giá", description: "Taxi VILA kiểm tra hành trình và phản hồi.", icon: "phone" },
  { title: "Đồng ý giá", description: "Xác nhận chi phí trước khi khởi hành.", icon: "check" },
  { title: "Xe đón tận nơi", description: "Tài xế đến đúng điểm và thời gian đã hẹn.", icon: "car" },
] as const;

function StepIcon({ name }: { name: (typeof bookingSteps)[number]["icon"] }) {
  const common = { "aria-hidden": true as const, viewBox: "0 0 24 24", className: "h-5 w-5", fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "phone") return <svg {...common}><path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /><path d="M21 12a9 9 0 1 1-5.3-8.2" /></svg>;
  if (name === "car") return <svg {...common}><path d="m5 16-1-1v-4l2-5h12l2 5v4l-1 1M6 16v2M18 16v2M4 12h16M7 12h.01M17 12h.01" /></svg>;
  return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3.5h6V6H9zM9 10h6M9 14h6M9 18h3" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.2 3.8 9.5 8l-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4.2 2.3-.5 3.5c-.2 1.1-1.2 1.9-2.3 1.8C9.2 20 4 14.8 3.3 8c-.1-1.1.7-2.1 1.8-2.3l2.1-.4Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function BookingSection() {
  return (
    <section id="dat-xe-truc-tuyen" aria-labelledby="booking-title" className="relative scroll-mt-24 overflow-hidden bg-[#07172f] py-10 text-white sm:py-12 lg:py-14">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/booking/booking-background.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[65%_100%] sm:object-[50%_100%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,23,47,0.9)_0%,rgba(7,23,47,0.78)_55%,rgba(7,23,47,0.68)_100%),linear-gradient(180deg,rgba(7,23,47,0.14)_0%,rgba(7,23,47,0.18)_55%,rgba(7,23,47,0.55)_100%)]" />
      </div>
      <div className="relative mx-auto grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-10 lg:px-5">
        <div>
          <p className="section-eyebrow !text-[var(--brand-accent)]"><span aria-hidden="true" />Đặt xe trực tuyến</p>
          <h2 id="booking-title" className="mt-3 max-w-xl text-[clamp(2.25rem,4.5vw,3.4rem)] font-black leading-[1.02] tracking-[-0.045em] text-white [text-wrap:balance]">
            Đặt xe trong 30 giây, đón tận nơi
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-white/80">
            Điền thông tin chuyến đi, Taxi VILA sẽ trao đổi và báo giá trước. Cần đi ngay? Gọi hotline để được điều xe nhanh nhất.
          </p>

          <ol className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {bookingSteps.map((step, index) => (
              <li key={step.title} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-3 backdrop-blur-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--brand-accent-dark)]"><StepIcon name={step.icon} /></span>
                <div>
                  <p className="font-black text-white"><span className="text-[var(--brand-accent)]">Bước {index + 1}.</span> {step.title}</p>
                  <p className="mt-0.5 text-sm font-medium leading-relaxed text-white/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col gap-3 xs:flex-row">
            <a href={siteContact.telephoneUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-5 font-black !text-white transition-colors hover:bg-[var(--brand-accent-dark)]"><PhoneIcon /> {siteConfig.phoneDisplay}</a>
            <a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-5 font-black !text-white transition-colors hover:border-[var(--brand-accent)] hover:bg-white/10">Nhắn Zalo</a>
          </div>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}
