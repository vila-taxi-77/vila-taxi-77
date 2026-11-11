
import type { BookingFormValues } from "@/features/booking/types/booking";

const requestTypeLabels = {
  booking: "Đặt xe",
  quote: "Nhận báo giá",
} as const;

const tripTypeLabels = {
  "one-way": "Một chiều",
  "round-trip": "Khứ hồi",
} as const;

export function createBookingSummary(values: BookingFormValues) {
  const lines = [
    `YÊU CẦU ${requestTypeLabels[values.requestType].toUpperCase()} TAXI VILA`,
    `Họ tên: ${values.fullName.trim()}`,
    `Điện thoại: ${values.phone.trim()}`,
    `Điểm đón: ${values.pickup.trim()}`,
    `Điểm đến: ${values.destination.trim()}`,
    `Loại chuyến: ${tripTypeLabels[values.tripType]}`,
    `Số hành khách: ${values.passengers}`,
  ];

  if (values.departureDate) lines.push(`Ngày đi: ${values.departureDate}`);
  if (values.pickupTime) lines.push(`Giờ đón: ${values.pickupTime}`);
  if (values.note.trim()) lines.push(`Ghi chú: ${values.note.trim()}`);

  return lines.join("\n");
}
