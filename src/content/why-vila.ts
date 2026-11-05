export type WhyVilaIcon = "wallet" | "leaf" | "location" | "heart" | "phone" | "sparkles";

export type WhyVilaBenefit = {
  title: string;
  description: string;
  icon: WhyVilaIcon;
};

export const whyVilaBenefits: WhyVilaBenefit[] = [
  {
    title: "Báo giá trước",
    description: "Thống nhất chi phí trước chuyến đi. Không phụ thuộc đồng hồ tính cước.",
    icon: "wallet",
  },
  {
    title: "Taxi điện êm ái",
    description: "Xe điện VinFast VF5 vận hành êm, hạn chế tiếng ồn và thân thiện hơn với môi trường.",
    icon: "leaf",
  },
  {
    title: "Am hiểu địa phương",
    description: "Thông thạo đường sá, địa điểm tại Phù Cát – Phù Mỹ và các tuyến lân cận.",
    icon: "location",
  },
  {
    title: "Phục vụ tận tâm",
    description: "Tài xế lịch sự, hỗ trợ hành lý, người lớn tuổi và khách đi khám bệnh.",
    icon: "heart",
  },
  {
    title: "Đặt xe dễ dàng",
    description: "Gọi điện hoặc nhắn Zalo để được tư vấn và sắp xếp chuyến đi thuận tiện.",
    icon: "phone",
  },
  {
    title: "Đa dạng nhu cầu",
    description: "Đi sân bay, bệnh viện, du lịch, công tác hoặc theo lịch trình riêng của bạn.",
    icon: "sparkles",
  },
];
