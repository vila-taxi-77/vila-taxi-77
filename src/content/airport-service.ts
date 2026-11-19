export const airportRoutes = [
  {
    origin: "Sân bay Phù Cát",
    destination: "Phù Cát",
    description: "Đưa đón về thị trấn Ngô Mây và các khu vực lân cận theo lịch hẹn.",
  },
  {
    origin: "Sân bay Phù Cát",
    destination: "Phù Mỹ",
    description: "Taxi sân bay Phù Cát về Phù Mỹ: sắp xếp xe điện theo số khách, hành lý và địa chỉ trả cụ thể.",
  },
  {
    origin: "Sân bay Phù Cát",
    destination: "Quy Nhơn",
    description: "Đón theo giờ hạ cánh, trao đổi lộ trình và báo giá trước chuyến đi.",
  },
  {
    origin: "Sân bay Phù Cát",
    destination: "Tuyến theo yêu cầu",
    description: "Nhận đưa đón đi tỉnh, đi du lịch hoặc đến địa điểm riêng của bạn.",
  },
] as const;

export const airportBenefits = [
  {
    title: "Theo sát lịch bay",
    description: "Gửi mã chuyến bay và giờ dự kiến để Taxi VILA chủ động sắp xếp thời gian đón.",
    icon: "flight",
  },
  {
    title: "Báo giá trước",
    description: "Lộ trình và chi phí được trao đổi rõ ràng trước khi chuyến xe được xác nhận.",
    icon: "price",
  },
  {
    title: "Xe điện 5–7 chỗ",
    description: "Tư vấn dòng xe phù hợp với số người, số lượng hành lý và nhu cầu chuyến đi.",
    icon: "car",
  },
  {
    title: "Đón tận nơi",
    description: "Đón hoặc trả tại địa chỉ đã thống nhất, phù hợp cho chuyến bay sớm và muộn.",
    icon: "pin",
  },
] as const;

export const airportBookingSteps = [
  {
    title: "Gửi thông tin chuyến bay",
    description: "Cho biết ngày đi, giờ bay, mã chuyến bay, điểm đón hoặc điểm trả.",
  },
  {
    title: "Nhận tư vấn và báo giá",
    description: "Taxi VILA kiểm tra hành trình, số khách và hành lý để tư vấn xe phù hợp.",
  },
  {
    title: "Xác nhận chuyến xe",
    description: "Chuyến đi được chốt sau khi bạn đồng ý với thời gian đón và mức giá.",
  },
  {
    title: "Tài xế đón theo lịch hẹn",
    description: "Tài xế liên hệ và có mặt tại điểm đón đã thống nhất trước chuyến đi.",
  },
] as const;

export const airportFaqs = [
  {
    question: "Nên đặt taxi sân bay Phù Cát trước bao lâu?",
    answer: "Bạn nên gửi yêu cầu sớm ngay khi có lịch bay để Taxi VILA kiểm tra hành trình và chủ động sắp xếp xe. Với chuyến bay sáng sớm hoặc tối muộn, đặt trước sẽ thuận tiện hơn.",
  },
  {
    question: "Taxi VILA có theo dõi giờ hạ cánh không?",
    answer: "Khi đặt xe, bạn hãy cung cấp mã chuyến bay và giờ hạ cánh dự kiến. Taxi VILA sẽ dựa trên thông tin đó để trao đổi thời gian đón phù hợp với bạn.",
  },
  {
    question: "Có xe 7 chỗ để chở nhiều hành lý không?",
    answer: "Taxi VILA có các lựa chọn xe điện 5–7 chỗ. Bạn nên báo trước số khách, số vali và hành lý đặc biệt để được tư vấn dòng xe phù hợp với tình trạng xe tại thời điểm đặt.",
  },
  {
    question: "Giá taxi sân bay Phù Cát được tính như thế nào?",
    answer: "Chi phí phụ thuộc vào điểm đón, điểm đến, thời gian và yêu cầu thực tế. Taxi VILA sẽ kiểm tra lộ trình và báo giá để bạn xác nhận trước khi chuyến đi được chốt.",
  },
] as const;

