
export type ServiceIcon = "airport" | "local" | "route" | "roundTrip";

export type TaxiService = {
  title: string;
  description: string;
  icon: ServiceIcon;
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
    image: {
      src: "https://images.unsplash.com/photo-1603792835233-f4f7c2497d4f?auto=format&fit=crop&w=1400&q=85",
      alt: "Hành khách tại nhà ga sân bay",
      position: "50% 28%",
    },
  },
  {
    title: "Taxi nội khu Phù Cát – Phù Mỹ",
    description:
      "Đi làm, đi học, đi chợ, đi bệnh viện, đi ăn uống – có mặt nhanh, phục vụ tận nơi.",
    icon: "local",
  },
  {
    title: "Thuê xe theo chuyến – theo lịch trình",
    description:
      "Du lịch, công tác, thăm người thân: xe riêng theo lịch trình của bạn.",
    icon: "route",
    image: {
      src: "https://images.unsplash.com/photo-1684805670451-cf87260590d2?auto=format&fit=crop&w=1400&q=85",
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
