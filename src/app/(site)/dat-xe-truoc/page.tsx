import type { Metadata } from "next";
import { BookingSection } from "@/features/booking/components/booking-section";
import { siteConfig, siteContact } from "@/config/site";
import { createFaqJsonLd, serializeJsonLd } from "@/config/seo";

const title = "Đặt Xe Taxi Phù Cát – Phù Mỹ | Taxi VILA – Báo Giá Trước";
const description = "Đặt trước taxi điện Taxi VILA tại Phù Cát, Phù Mỹ. Dịch vụ đưa đón sân bay Phù Cát, taxi đi tỉnh, giá tham khảo 5.000–12.000đ/km. Hotline 0978 063 463.";
const faqs = [
  { question: "Gửi yêu cầu có nghĩa là đã đặt xe thành công chưa?", answer: "Chưa. Nhân viên Taxi VILA cần kiểm tra lịch xe, liên hệ báo giá và xác nhận với bạn. Chuyến đi chỉ được chốt sau khi hai bên thống nhất giá và thời gian đón." },
  { question: "Đặt trước có được giảm giá không?", answer: "Bạn có cơ hội nhận ưu đãi tùy tuyến, thời điểm và điều kiện áp dụng. Hãy hỏi nhân viên khi nhận báo giá; không phải mọi yêu cầu đều được giảm giá." },
  { question: "Tôi cần cung cấp gì khi đặt xe sân bay?", answer: "Hãy điền điểm đón, điểm đến, ngày giờ, số hành khách. Bạn có thể ghi thêm số chuyến bay và hành lý để nhân viên tư vấn lịch đón phù hợp." },
  { question: "Có thể đổi lịch hoặc cần xe ngay thì làm sao?", answer: `Gọi ${siteConfig.phoneDisplay} hoặc nhắn Zalo để nhân viên kiểm tra và hỗ trợ. Việc đổi lịch và điều xe phụ thuộc tình trạng xe thực tế.` },
];

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: "/dat-xe-truoc" },
  openGraph: { title, description, url: "/dat-xe-truoc", type: "website", images: ["/images/booking/booking-background.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/booking/booking-background.png"] },
};

export default function PrebookingPage() {
  return <main id="main-content" tabIndex={-1} className="page-below-header bg-[#f5f7fb] outline-none">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(createFaqJsonLd(faqs)) }} />
    <nav aria-label="Đường dẫn" className="site-container flex min-h-12 flex-wrap items-center gap-3 py-3 text-sm font-semibold text-[var(--text-muted)]"><a href="/" className="underline underline-offset-4">Trang chủ</a><span aria-hidden="true">/</span><span aria-current="page">Đặt xe trước</span></nav>
    <BookingSection standalone />
    <section aria-labelledby="prebook-services" className="site-container py-14 sm:py-18">
      <p className="section-eyebrow"><span aria-hidden="true" />Lịch trình của bạn</p>
      <h2 id="prebook-services" className="section-title mt-3">Đặt trước cho từng nhu cầu</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Đưa đón sân bay Phù Cát", text: "Chủ động giờ đón và lịch bay. Ghi thêm số chuyến bay, hành lý khi gửi yêu cầu.", href: "/taxi-san-bay-phu-cat" },
          { title: "Taxi nội khu Phù Cát – Phù Mỹ", text: "Hẹn xe cho công việc, thăm người thân hoặc những chuyến đi theo lịch riêng.", href: "/#khu-vuc" },
          { title: "Đi tỉnh & khứ hồi", text: "Trao đổi trước điểm dừng, lịch về và số hành khách để nhận báo giá theo hành trình.", href: "/taxi-di-tinh" },
        ].map((item) => <article key={item.title} className="rounded-2xl border border-[var(--border-soft)] bg-white p-6"><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 leading-relaxed text-[var(--text-muted)]">{item.text}</p><a href={item.href} className="mt-4 inline-flex min-h-11 items-center font-bold underline underline-offset-4">Xem dịch vụ</a></article>)}
      </div>
      <aside className="mt-6 rounded-2xl border border-[#f3d28e] bg-[var(--accent-soft)] p-6 sm:p-8"><h2 className="text-2xl font-black">Đặt lịch trước – Có cơ hội nhận ưu đãi</h2><p className="mt-3 max-w-3xl leading-relaxed text-[var(--text-muted)]">Taxi VILA báo giá theo hành trình và thỏa thuận trước chuyến đi. Ưu đãi phụ thuộc tuyến, thời điểm và điều kiện áp dụng; nhân viên sẽ tư vấn khi liên hệ xác nhận.</p></aside>
    </section>
    <section aria-labelledby="prebook-faq" className="bg-white py-14">
      <div className="site-container grid gap-8 lg:grid-cols-2"><div><h2 id="prebook-faq" className="section-title">Trước khi đặt lịch</h2><p className="mt-4 leading-relaxed text-[var(--text-muted)]">Cần tư vấn hoặc kiểm tra yêu cầu đã gửi? Liên hệ trực tiếp Taxi VILA.</p><div className="mt-6 flex flex-wrap gap-3"><a href={siteContact.telephoneUrl} className="inline-flex min-h-12 items-center rounded-full bg-[#07172f] px-5 font-bold !text-white">Gọi {siteConfig.phoneDisplay}</a><a href={siteContact.zaloUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-[var(--border-soft)] px-5 font-bold">Nhắn Zalo</a></div></div><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="rounded-2xl border border-[var(--border-soft)] p-5"><summary className="min-h-11 cursor-pointer font-bold">{faq.question}</summary><p className="mt-3 leading-relaxed text-[var(--text-muted)]">{faq.answer}</p></details>)}</div></div>
    </section>
  </main>;
}
