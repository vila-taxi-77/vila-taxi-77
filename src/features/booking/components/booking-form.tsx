
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteContact } from "@/config/site";
import { BookingSuccess } from "@/features/booking/components/booking-success";
import { RouteSelector } from "@/features/booking/components/route-selector";
import {
  initialBookingValues,
  validateBooking,
  validateBookingField,
} from "@/features/booking/schemas/booking-schema";
import { createBookingSummary } from "@/features/booking/services/booking-service";
import type {
  BookingFieldErrors,
  BookingFormValues,
  BookingRequestType,
  BookingTripType,
} from "@/features/booking/types/booking";

const requestOptions = [
  { value: "booking", label: "Đặt xe" },
  { value: "quote", label: "Nhận báo giá" },
] as const;

const tripOptions = [
  { value: "one-way", label: "Một chiều" },
  { value: "round-trip", label: "Khứ hồi" },
] as const;

const inputClassName = "min-h-11 w-full rounded-xl border border-[var(--border-soft)] bg-white px-3.5 text-base font-medium text-[var(--foreground)] outline-none transition-[border-color,box-shadow] placeholder:text-[#8a98aa] focus:border-[var(--brand-accent)] focus:shadow-[0_0_0_3px_rgba(245,158,11,0.14)]";

type TextFieldName = "fullName" | "phone" | "pickup" | "destination" | "departureDate" | "pickupTime" | "note";

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m21 3-7.5 18-4.2-7.8L2 9l19-6Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.3 13.2 5.2-5.1" strokeLinecap="round" />
    </svg>
  );
}

export function BookingForm() {
  const [values, setValues] = useState<BookingFormValues>(initialBookingValues);
  const [errors, setErrors] = useState<BookingFieldErrors>({});
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  const setValue = <K extends keyof BookingFormValues>(name: K, value: BookingFormValues[K]) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (summary) setSummary("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name as TextFieldName | "passengers";
    setValue(name, event.target.value);
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as TextFieldName;
    const error = validateBookingField(name, event.target.value);
    setErrors((current) => ({ ...current, [name]: error }));
  };

  const copySummary = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      });
      return;
    }

    const nextSummary = createBookingSummary(values);
    setSummary(nextSummary);
    setCopied(false);
    void copySummary(nextSummary);

    const zaloLink = document.createElement("a");
    zaloLink.href = siteContact.zaloUrl;
    zaloLink.target = "_blank";
    zaloLink.rel = "noreferrer";
    zaloLink.click();
  };

  const fieldProps = (name: TextFieldName) => ({
    id: `booking-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `booking-${name}-error` : undefined,
  });

  const ErrorMessage = ({ name }: { name: TextFieldName }) => errors[name] ? (
    <p id={`booking-${name}-error`} className="mt-1.5 text-sm font-semibold text-[var(--brand-primary)]">{errors[name]}</p>
  ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-[39rem] rounded-[1.5rem] bg-white p-5 text-[var(--foreground)] shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:p-6 lg:justify-self-end">
      <RouteSelector<BookingRequestType>
        legend="Loại yêu cầu"
        name="requestType"
        value={values.requestType}
        options={requestOptions}
        onChange={(value) => setValue("requestType", value)}
      />

      <div className="mt-5 grid gap-x-4 gap-y-4 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-fullName" className="mb-2 block text-sm font-extrabold text-[#24344d]">Họ và tên <span className="text-[var(--brand-accent-dark)]">*</span></label>
          <input {...fieldProps("fullName")} type="text" autoComplete="name" placeholder="Nguyễn Văn A" className={inputClassName} />
          <ErrorMessage name="fullName" />
        </div>
        <div>
          <label htmlFor="booking-phone" className="mb-2 block text-sm font-extrabold text-[#24344d]">Số điện thoại <span className="text-[var(--brand-accent-dark)]">*</span></label>
          <input {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="09xx xxx xxx" className={inputClassName} />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <label htmlFor="booking-pickup" className="mb-2 block text-sm font-extrabold text-[#24344d]">Điểm đón <span className="text-[var(--brand-accent-dark)]">*</span></label>
          <input {...fieldProps("pickup")} type="text" placeholder="Địa chỉ đón" className={inputClassName} />
          <ErrorMessage name="pickup" />
        </div>
        <div>
          <label htmlFor="booking-destination" className="mb-2 block text-sm font-extrabold text-[#24344d]">Điểm đến <span className="text-[var(--brand-accent-dark)]">*</span></label>
          <input {...fieldProps("destination")} type="text" placeholder="Địa chỉ đến" className={inputClassName} />
          <ErrorMessage name="destination" />
        </div>
        <div>
          <label htmlFor="booking-departureDate" className="mb-2 block text-sm font-extrabold text-[#24344d]">Ngày đi</label>
          <input {...fieldProps("departureDate")} type="date" className={inputClassName} />
          <ErrorMessage name="departureDate" />
        </div>
        <div>
          <label htmlFor="booking-pickupTime" className="mb-2 block text-sm font-extrabold text-[#24344d]">Giờ đón</label>
          <input {...fieldProps("pickupTime")} type="time" className={inputClassName} />
        </div>
        <RouteSelector<BookingTripType>
          legend="Loại chuyến"
          name="tripType"
          value={values.tripType}
          options={tripOptions}
          onChange={(value) => setValue("tripType", value)}
          compact
        />
        <div>
          <label htmlFor="booking-passengers" className="mb-2 block text-sm font-extrabold text-[#24344d]">Số hành khách</label>
          <select id="booking-passengers" name="passengers" value={values.passengers} onChange={handleChange} className={inputClassName}>
            {[1, 2, 3, 4, 5, 6, 7].map((count) => <option key={count} value={count}>{count} khách</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="booking-note" className="mb-2 block text-sm font-extrabold text-[#24344d]">Ghi chú</label>
          <textarea {...fieldProps("note")} rows={2} placeholder="Số chuyến bay, hành lý, yêu cầu đặc biệt..." className={`${inputClassName} resize-y py-3`} />
        </div>
      </div>

      <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-accent)] px-6 font-black !text-white shadow-[0_14px_30px_rgba(245,158,11,0.24)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[var(--brand-accent-dark)] hover:shadow-[0_18px_36px_rgba(245,158,11,0.34)]">
        <SendIcon /> {values.requestType === "booking" ? "Gửi yêu cầu qua Zalo" : "Nhận báo giá qua Zalo"}
      </button>
      <p className="mt-3 text-center text-xs font-medium leading-relaxed text-[var(--text-muted)]">
        Chuyến đi chỉ được chốt sau khi bạn đồng ý với báo giá và thời gian đón.
      </p>

      {summary ? <BookingSuccess summary={summary} copied={copied} onCopy={() => void copySummary(summary)} /> : null}
    </form>
  );
}
