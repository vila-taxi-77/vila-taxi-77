
import Link from "next/link";

export default function AdminBookingsPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7fb] px-4 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-[#dce3ed] bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0563d8]">Taxi VILA</p>
        <h1 className="mt-3 text-3xl font-black text-[#0a192f]">Quản lý đơn đặt xe</h1>
        <p className="mt-4 leading-relaxed text-[#64748b]">
          Khu vực quản trị đang được phát triển. Chức năng xem và xử lý đơn sẽ được bổ sung ở giai đoạn backend.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[#0a192f] px-6 font-bold text-white"
        >
          Về trang chủ
        </Link>
      </section>
    </main>
  );
}
