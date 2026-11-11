export type PriceStepIcon = "message" | "phone" | "shield";

export const priceFirstHighlights = [
  "Minh bạch chi phí",
  "Chủ động hành trình",
  "An tâm trải nghiệm",
] as const;

export const meterTaxiDrawbacks = [
  "Chỉ biết giá khi đến nơi",
  "Kẹt xe, đi vòng – tiền vẫn nhảy",
  "Khó chủ động ngân sách",
] as const;

export const vilaPriceBenefits = [
  "Biết giá trước khi khởi hành",
  "Giá đã chốt – an tâm suốt chuyến",
  "Chủ động kế hoạch, chi phí",
] as const;

export const priceFirstSteps: {
  number: string;
  title: string;
  description: string;
  icon: PriceStepIcon;
}[] = [
  {
    number: "01",
    title: "Bạn cho biết hành trình",
    description: "Điểm đón, điểm đến, ngày giờ và số khách.",
    icon: "message",
  },
  {
    number: "02",
    title: "Chúng tôi báo giá",
    description: "Nhân viên kiểm tra lộ trình và báo chi phí cụ thể.",
    icon: "phone",
  },
  {
    number: "03",
    title: "Bạn đồng ý, xe mới lăn bánh",
    description: "Giá đã thống nhất – không phát sinh bất ngờ.",
    icon: "shield",
  },
];
