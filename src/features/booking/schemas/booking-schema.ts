
import type {
  BookingFieldErrors,
  BookingFormValues,
} from "@/features/booking/types/booking";

export const initialBookingValues: BookingFormValues = {
  requestType: "booking",
  fullName: "",
  phone: "",
  pickup: "",
  destination: "",
  departureDate: "",
  pickupTime: "",
  tripType: "one-way",
  serviceType: "airport",
  passengers: "1",
  note: "",
};

function normalizePhone(phone: string) {
  return phone.replace(/[\s.-]/g, "");
}

export function validateBookingField(
  name: keyof BookingFormValues,
  value: string,
): string | undefined {
  const trimmedValue = value.trim();

  if (["fullName", "phone", "pickup", "destination", "departureDate", "pickupTime"].includes(name) && !trimmedValue) {
    return "Vui lòng nhập thông tin này.";
  }

  if (name === "fullName" && trimmedValue.length < 2) {
    return "Họ và tên cần có ít nhất 2 ký tự.";
  }

  if (name === "phone") {
    const phone = normalizePhone(trimmedValue);
    if (!/^(?:\+84|0)\d{9}$/.test(phone)) {
      return "Số điện thoại chưa đúng định dạng Việt Nam.";
    }
  }

  if (name === "departureDate" && trimmedValue) {
    const selectedDate = new Date(`${trimmedValue}T00:00:00+07:00`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmedValue) || Number.isNaN(selectedDate.getTime()) || new Date(`${trimmedValue}T00:00:00Z`).toISOString().slice(0, 10) !== trimmedValue) return "Ngày đi không hợp lệ.";
    const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" }).format(new Date());
    if (trimmedValue < today) return "Ngày đi không thể ở trong quá khứ.";
  }

  if (name === "pickupTime" && !/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmedValue)) return "Giờ đón không hợp lệ.";
  if (name === "passengers" && !/^[1-7]$/.test(value)) return "Vui lòng chọn từ 1 đến 7 hành khách.";
  if (name === "serviceType" && !["airport", "local", "province", "other"].includes(value)) return "Vui lòng chọn dịch vụ.";
  if (name === "tripType" && !["one-way", "round-trip"].includes(value)) return "Loại chuyến không hợp lệ.";
  if (name === "requestType" && !["booking", "quote"].includes(value)) return "Loại yêu cầu không hợp lệ.";
  if (value.length > (name === "note" ? 2000 : 300)) return "Thông tin quá dài, vui lòng rút gọn.";

  return undefined;
}

export function validateBooking(values: BookingFormValues): BookingFieldErrors {
  const errors: BookingFieldErrors = {};

  (Object.keys(values) as Array<keyof BookingFormValues>).forEach((name) => {
    const error = validateBookingField(name, values[name]);
    if (error) errors[name] = error;
  });

  if (!errors.departureDate && !errors.pickupTime && new Date(`${values.departureDate}T${values.pickupTime}:00+07:00`).getTime() <= Date.now()) {
    errors.pickupTime = "Vui lòng chọn thời gian đón trong tương lai.";
  }

  return errors;
}
