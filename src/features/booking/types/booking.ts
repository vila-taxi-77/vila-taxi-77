
export type BookingRequestType = "booking" | "quote";
export type BookingTripType = "one-way" | "round-trip";

export type BookingFormValues = {
  requestType: BookingRequestType;
  fullName: string;
  phone: string;
  pickup: string;
  destination: string;
  departureDate: string;
  pickupTime: string;
  tripType: BookingTripType;
  passengers: string;
  note: string;
};

export type BookingFieldErrors = Partial<Record<keyof BookingFormValues, string>>;
