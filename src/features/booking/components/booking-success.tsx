
type BookingSuccessProps = {
  summary: string;
  copied: boolean;
  onCopy: () => void;
};

export function BookingSuccess({ summary, copied, onCopy }: BookingSuccessProps) {
  return (
    <div role="status" aria-live="polite" className="mt-4 rounded-2xl border border-[#f3d28e] bg-[var(--accent-soft)] p-4 text-sm text-[#24344d]">
      <p className="font-black text-[var(--foreground)]">
        {copied ? "Đã sao chép nội dung." : "Bạn có thể gửi trực tiếp qua Zalo."}
      </p>
      <p className="mt-1 leading-relaxed">
        Sao chép nội dung, mở Zalo rồi dán và gửi vào cuộc trò chuyện với Taxi VILA. Nhân viên sẽ kiểm tra và phản hồi báo giá.
      </p>
      <details className="mt-3">
        <summary className="min-h-11 cursor-pointer py-2 font-bold text-[var(--brand-accent-dark)]">Xem lại nội dung</summary>
        <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-white p-3 font-sans text-xs leading-relaxed text-[var(--text-muted)]">{summary}</pre>
      </details>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 min-h-11 rounded-full border border-[var(--brand-accent)] bg-white px-5 font-black text-[var(--brand-accent-dark)] transition-colors hover:bg-[var(--brand-accent)] hover:text-white"
      >
        {copied ? "Đã sao chép" : "Sao chép nội dung"}
      </button>
    </div>
  );
}
