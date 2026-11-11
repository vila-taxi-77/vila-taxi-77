export type PopularRoute = {
  label: string;
  origin: string;
  destination: string;
  mapUrl: string;
  featured?: boolean;
};

function createDirectionsUrl(origin: string, destination: string) {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "driving",
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export const popularRoutes: PopularRoute[] = [
  {
    label: "Sân bay",
    origin: "Phù Mỹ",
    destination: "Sân bay Phù Cát",
    mapUrl: createDirectionsUrl("Phù Mỹ, Gia Lai", "Sân bay Phù Cát"),
  },
  {
    label: "Liên huyện",
    origin: "Phù Cát",
    destination: "Quy Nhơn",
    mapUrl: createDirectionsUrl("Phù Cát, Gia Lai", "Quy Nhơn, Gia Lai"),
    featured: true,
  },
  {
    label: "Liên huyện",
    origin: "Phù Mỹ",
    destination: "Quy Nhơn",
    mapUrl: createDirectionsUrl("Phù Mỹ, Gia Lai", "Quy Nhơn, Gia Lai"),
  },
  {
    label: "Sân bay",
    origin: "Sân bay Phù Cát",
    destination: "Phù Cát",
    mapUrl: createDirectionsUrl("Sân bay Phù Cát", "Phù Cát, Gia Lai"),
    featured: true,
  },
  {
    label: "Du lịch",
    origin: "Phù Cát",
    destination: "Điểm du lịch Bình Định",
    mapUrl: createDirectionsUrl("Phù Cát, Gia Lai", "Điểm du lịch Bình Định"),
  },
  {
    label: "Đi tỉnh",
    origin: "Phù Cát – Phù Mỹ",
    destination: "Các tỉnh lân cận",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ph%C3%B9+C%C3%A1t%2C+Gia+Lai",
  },
];

export const servedAreaTags = [
  "Taxi Phù Cát",
  "Taxi Phù Mỹ",
  "Taxi sân bay Phù Cát",
  "Taxi Phù Cát đi Quy Nhơn",
  "Taxi Phù Mỹ đi Quy Nhơn",
  "Taxi Ngô Mây, Phù Cát",
  "Taxi đi tỉnh từ Phù Cát",
  "Taxi điện Bình Định",
  "Taxi Gia Lai",
  "Taxi đưa đón theo yêu cầu",
] as const;

export const serviceAreaMapEmbedUrl =
  "https://www.google.com/maps?q=Ph%C3%B9%20C%C3%A1t%2C%20Gia%20Lai&z=10&output=embed";
