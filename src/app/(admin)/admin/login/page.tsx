
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7fb] px-4 py-12">
      <section className="w-full max-w-md rounded-3xl border border-[#dce3ed] bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0563d8]">Taxi VILA</p>
        <h1 className="mt-3 text-3xl font-black text-[#0a192f]">Đăng nhập quản trị</h1>
        <p className="mt-4 leading-relaxed text-[#64748b]">
          Chức năng đăng nhập chưa được kích hoạt. Hệ thống sẽ được kết nối khi triển khai backend quản trị.
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
