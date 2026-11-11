
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

  if (["fullName", "phone", "pickup", "destination"].includes(name) && !trimmedValue) {
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
    const selectedDate = new Date(`${trimmedValue}T23:59:59`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) return "Ngày đi không thể ở trong quá khứ.";
  }

  return undefined;
}

export function validateBooking(values: BookingFormValues): BookingFieldErrors {
  const errors: BookingFieldErrors = {};

  (Object.keys(values) as Array<keyof BookingFormValues>).forEach((name) => {
    const error = validateBookingField(name, values[name]);
    if (error) errors[name] = error;
  });

  return errors;
}
