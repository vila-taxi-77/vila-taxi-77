
export type ServiceAreaIcon = "airport" | "location" | "route" | "calendar";

export type ServiceArea = {
  title: string;
  description: string;
  icon: ServiceAreaIcon;
};

export const serviceAreas: ServiceArea[] = [
  {
    title: "Sân bay Phù Cát",
    description: "Đón và tiễn theo lịch bay, kết nối Phù Cát, Phù Mỹ, Quy Nhơn và điểm đến theo yêu cầu.",
    icon: "airport",
  },
  {
    title: "Phù Cát – Phù Mỹ",
    description: "Phục vụ các chuyến đi làm, đi học, đi chợ, bệnh viện và nhu cầu di chuyển hằng ngày.",
    icon: "location",
  },
  {
    title: "Quy Nhơn và tuyến lân cận",
    description: "Tư vấn hành trình, thời gian đón và chi phí trước khi xác nhận chuyến đi.",
    icon: "route",
  },
  {
    title: "Chuyến theo lịch trình",
    description: "Phù hợp cho công tác, du lịch, thăm người thân hoặc chuyến đi khứ hồi đã lên kế hoạch.",
    icon: "calendar",
  },
];
