export const quyNhonTripNeeds = [
  {
    title: "Đi công tác, làm việc",
    description: "Đặt xe theo giờ hẹn để chủ động lịch trình từ Phù Cát đến Quy Nhơn.",
    icon: "briefcase",
  },
  {
    title: "Đi khám bệnh",
    description: "Đưa đón tận nơi, phù hợp cho người lớn tuổi và người cần có người thân đi cùng.",
    icon: "health",
  },
  {
    title: "Đi du lịch, nghỉ dưỡng",
    description: "Tư vấn xe theo số người và hành lý cho gia đình hoặc nhóm bạn.",
    icon: "travel",
  },
  {
    title: "Đặt xe khứ hồi",
    description: "Trao đổi giờ đi, giờ về và các điểm dừng để nhận báo giá cho toàn hành trình.",
    icon: "roundTrip",
  },
] as const;

export const quyNhonRoutePoints = [
  {
    title: "Điểm đón tại Phù Cát",
    description: "Nếu cần taxi đi Quy Nhơn từ Phù Cát, bạn có thể chọn điểm đón tại Ngô Mây hoặc địa chỉ cụ thể đã thống nhất.",
  },
  {
    title: "Điểm trả tại Quy Nhơn",
    description: "Nhà riêng, khách sạn, bệnh viện, nơi làm việc hoặc địa điểm bạn cung cấp.",
  },
  {
    title: "Điểm dừng trên hành trình",
    description: "Thông báo trước các điểm ghé để Taxi VILA kiểm tra lộ trình và tư vấn phù hợp.",
  },
] as const;

export const quyNhonBenefits = [
  {
    title: "Báo giá trước chuyến",
    description: "Chi phí được trao đổi theo điểm đón, điểm trả và yêu cầu thực tế trước khi xác nhận.",
    icon: "price",
  },
  {
    title: "Xe điện 5–7 chỗ",
    description: "Lựa chọn xe phù hợp cho khách cá nhân, gia đình, nhóm bạn và hành lý đi kèm.",
    icon: "car",
  },
  {
    title: "Đón trả tận nơi",
    description: "Tài xế đón và trả tại địa chỉ đã thống nhất trong hành trình.",
    icon: "pin",
  },
  {
    title: "Một chiều hoặc khứ hồi",
    description: "Linh hoạt theo nhu cầu đi trong ngày, về theo giờ hẹn hoặc lịch trình riêng.",
    icon: "route",
  },
] as const;

export const quyNhonBookingSteps = [
  {
    title: "Gửi hành trình",
    description: "Cung cấp điểm đón tại Phù Cát, điểm đến ở Quy Nhơn và thời gian dự kiến.",
  },
  {
    title: "Chọn loại chuyến",
    description: "Cho biết chuyến một chiều hay khứ hồi, số khách và lượng hành lý.",
  },
  {
    title: "Nhận báo giá",
    description: "Taxi VILA kiểm tra lịch trình và trao đổi mức giá trước chuyến đi.",
  },
  {
    title: "Xác nhận giờ đón",
    description: "Sau khi bạn đồng ý, tài xế được sắp xếp theo thời gian và địa điểm đã chốt.",
  },
] as const;

export const quyNhonFaqs = [
  {
    question: "Taxi VILA có đón tận nhà tại Phù Cát không?",
    answer: "Có. Bạn hãy gửi địa chỉ đón cụ thể tại Phù Cát cùng thời gian dự kiến. Taxi VILA sẽ kiểm tra hành trình và trao đổi lại trước khi xác nhận chuyến.",
  },
  {
    question: "Có thể đặt xe Phù Cát đi Quy Nhơn khứ hồi không?",
    answer: "Có. Khi đặt xe, bạn nên cung cấp giờ đi, giờ về dự kiến và các điểm dừng nếu có để được tư vấn lịch trình và báo giá cho toàn chuyến.",
  },
  {
    question: "Giá taxi Phù Cát đi Quy Nhơn được tính như thế nào?",
    answer: "Chi phí phụ thuộc vào điểm đón, điểm trả, loại chuyến, thời gian và yêu cầu thực tế. Taxi VILA sẽ kiểm tra thông tin và báo giá để bạn xác nhận trước khi khởi hành.",
  },
  {
    question: "Nhóm 5–7 người có đặt xe được không?",
    answer: "Taxi VILA có các lựa chọn xe điện 5–7 chỗ. Bạn nên gửi số hành khách và số lượng hành lý để được tư vấn dòng xe phù hợp với tình trạng xe tại thời điểm đặt.",
  },
] as const;

