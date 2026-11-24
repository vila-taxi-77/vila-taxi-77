
import { NextResponse } from "next/server";
import { initialBookingValues, validateBooking } from "@/features/booking/schemas/booking-schema";
import { createBookingSummary } from "@/features/booking/services/booking-service";
import type { BookingFormValues } from "@/features/booking/types/booking";

export async function POST(request: Request) {
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) {
    return NextResponse.json({ message: "Nguồn gửi yêu cầu không hợp lệ." }, { status: 403 });
  }
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({ message: "Thông tin quá dài." }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ message: "Thông tin gửi lên không hợp lệ." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ message: "Thông tin gửi lên không hợp lệ." }, { status: 400 });
  const payload = body as Record<string, unknown>;
  const values = { ...initialBookingValues };
  for (const key of Object.keys(values) as Array<keyof BookingFormValues>) {
    if (typeof payload[key] !== "string") return NextResponse.json({ message: "Vui lòng điền đầy đủ thông tin chuyến đi." }, { status: 400 });
    Object.assign(values, { [key]: payload[key] });
  }
  const errors = validateBooking(values);
  if (Object.keys(errors).length) return NextResponse.json({ message: "Vui lòng kiểm tra các thông tin chưa hợp lệ.", errors }, { status: 400 });

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ message: "Hiện chưa thể nhận yêu cầu trực tuyến. Vui lòng gửi lịch trình qua Zalo hoặc gọi hotline." }, { status: 503 });
  try {
    if (new URL(webhook).protocol !== "https:") throw new Error("Invalid receiver");
    const response = await fetch(webhook, {
      method: "POST", redirect: "error", cache: "no-store",
      headers: { "Content-Type": "application/json", ...(process.env.BOOKING_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.BOOKING_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify({ ...values, summary: createBookingSummary(values), receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Receiver unavailable");
    return NextResponse.json({ message: "Yêu cầu đã được gửi, đang chờ nhân viên xác nhận." });
  } catch {
    return NextResponse.json({ message: "Chưa thể xác nhận gửi yêu cầu. Vui lòng gọi hotline hoặc gửi qua Zalo để kiểm tra." }, { status: 502 });
  }
}
