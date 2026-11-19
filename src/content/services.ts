
export type ServiceIcon = "airport" | "local" | "route" | "roundTrip";

export type TaxiService = {
  title: string;
  description: string;
  icon: ServiceIcon;
  href?: string;
  ctaLabel?: string;
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
};

export const taxiServices: TaxiService[] = [
  {
    title: "Taxi đưa đón sân bay Phù Cát",
    description:
      "Đón, tiễn tại sân bay Phù Cát về Phù Mỹ, Phù Cát, Quy Nhơn và các địa điểm theo yêu cầu. Đặt trước theo lịch bay – không lo chờ đợi.",
    icon: "airport",
    href: "/taxi-san-bay-phu-cat",
    ctaLabel: "Xem dịch vụ",
    image: {
      src: "/images/hero/taxi-vila-phu-cat-airport-service.png",
      alt: "Taxi Vila đưa đón khách tại sân bay Phù Cát",
      position: "50% 28%",
    },
  },
  {
    title: "Taxi nội khu Phù Cát – Phù Mỹ",
    description:
      "Đặt taxi ở Phù Mỹ để đi bệnh viện, đi làm, đi chợ; hoặc gọi xe đưa đón tận nhà tại Phù Cát. Xe điện đón theo địa chỉ và lịch đã thống nhất.",
    icon: "local",
  },
  {
    title: "Thuê xe theo chuyến – theo lịch trình",
    description:
      "Thuê xe điện có tài xế tại Phù Cát cho chuyến du lịch, công tác hoặc thăm người thân; trao đổi lịch trình và báo giá trước.",
    icon: "route",
    href: "/taxi-di-tinh",
    ctaLabel: "Xem dịch vụ",
    image: {
      src: "/images/hero/taxi-vila-route-coastal-service.png",
      alt: "Phong cảnh biển và núi tại Bình Định",
    },
  },
  {
    title: "Taxi khứ hồi",
    description:
      "Đi và về trọn chuyến, báo giá một lần cho cả hành trình.",
    icon: "roundTrip",
  },
];
