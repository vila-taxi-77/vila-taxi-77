# Taxi VILA

Website giới thiệu và đặt xe cho Taxi VILA, phục vụ khu vực Phù Cát, Phù Mỹ, sân bay Phù Cát, Quy Nhơn và các tuyến liên tỉnh.

## Công nghệ sử dụng

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Khởi chạy dự án

```bash
npm install
npm run dev
```

Sau đó mở [http://localhost:3000](http://localhost:3000).

Build bản production:

```bash
npm run build
npm run start
```

## Cấu trúc source đề xuất

```text
vila-taxi-77/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── .gitkeep
│   │   ├── hero/
│   │   │   └── .gitkeep
│   │   ├── fleet/
│   │   │   └── .gitkeep
│   │   ├── services/
│   │   │   └── .gitkeep
│   │   └── about/
│   │       └── .gitkeep
│   └── icons/
│       └── .gitkeep
│
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── (admin)/                  # Làm sau nếu cần quản trị
│   │   │   └── admin/
│   │   │       ├── login/
│   │   │       │   └── page.tsx
│   │   │       ├── bookings/
│   │   │       │   └── page.tsx
│   │   │       ├── layout.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── bookings/
│   │   │       └── route.ts
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── site-footer.tsx
│   │   │   ├── floating-contact.tsx
│   │   │   └── mobile-contact-bar.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── trust-strip.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── price-first-section.tsx
│   │   │   ├── why-vila-section.tsx
│   │   │   ├── fleet-section.tsx
│   │   │   ├── service-areas-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── reviews-section.tsx
│   │   │   └── faq-section.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── container.tsx
│   │       ├── section-heading.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       └── accordion.tsx
│   │
│   ├── features/
│   │   └── booking/
│   │       ├── components/
│   │       │   ├── booking-section.tsx
│   │       │   ├── booking-form.tsx
│   │       │   ├── booking-success.tsx
│   │       │   └── route-selector.tsx
│   │       ├── actions/
│   │       │   └── create-booking.ts
│   │       ├── schemas/
│   │       │   └── booking-schema.ts
│   │       ├── services/
│   │       │   └── booking-service.ts
│   │       └── types/
│   │           └── booking.ts
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── seo.ts
│   │
│   ├── content/
│   │   ├── services.ts
│   │   ├── commitments.ts
│   │   ├── fleet.ts
│   │   ├── service-areas.ts
│   │   ├── popular-routes.ts
│   │   ├── reviews.ts
│   │   └── faqs.ts
│   │
│   ├── hooks/
│   │   ├── use-mobile-menu.ts
│   │   └── use-scroll-header.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── maps.ts
│   │   ├── phone.ts
│   │   └── format.ts
│   └── types/
│       ├── common.ts
│       └── site.ts
│
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Vai trò của từng khu vực

### `src/app`

Quản lý route, layout, metadata, SEO và API của Next.js.

- `(site)`: website công khai dành cho khách hàng.
- `(admin)`: khu vực quản trị đơn đặt xe, chỉ tạo khi cần.
- `api`: các Route Handler xử lý request phía server.

### `src/components`

Chứa các component giao diện không gắn chặt với nghiệp vụ.

- `layout`: Header, Footer, menu và thanh liên hệ.
- `sections`: các section trình bày trên trang chủ.
- `ui`: component nhỏ, có thể tái sử dụng ở nhiều nơi.

### `src/features`

Chứa code theo nghiệp vụ. Nghiệp vụ đặt xe được gom trong `features/booking`, bao gồm form, validation, type, action và service.

### `src/config`

Chứa cấu hình chung như tên thương hiệu, hotline, Zalo, điều hướng và SEO. Không viết trực tiếp hotline hoặc URL Zalo lặp lại trong nhiều component.

### `src/content`

Chứa nội dung tĩnh của website như dịch vụ, đội xe, khu vực, tuyến đường, đánh giá và câu hỏi thường gặp. Tách dữ liệu khỏi JSX giúp chỉnh sửa dễ hơn và có thể thay bằng CMS sau này.

### `src/lib`

Chứa hàm tiện ích và tích hợp dùng chung. Thư mục này không chứa React component.

### `public`

Chứa logo, hình ảnh xe, ảnh dịch vụ và icon tĩnh. Ưu tiên dùng ảnh đã tối ưu như WebP hoặc SVG.

## Cấu trúc trang chủ

File `src/app/(site)/page.tsx` chỉ nên chịu trách nhiệm ghép các phần theo thứ tự:

```text
SiteHeader
HeroSection
TrustStrip
ServicesSection
PriceFirstSection
WhyVilaSection
FleetSection
ServiceAreasSection
BookingSection
AboutSection
ReviewsSection
FaqSection
SiteFooter
FloatingContact
```

Không đặt toàn bộ JSX của landing page trực tiếp trong `page.tsx`.

## Quy ước code

- Folder và tên file sử dụng `kebab-case`.
- React component và TypeScript type sử dụng `PascalCase`.
- Hàm và biến sử dụng `camelCase`.
- Ưu tiên Server Component.
- Chỉ thêm `"use client"` cho phần có state, event hoặc sử dụng API của trình duyệt.
- Component chỉ dùng trong đặt xe đặt tại `features/booking`.
- Chỉ đưa component vào `components/ui` khi nó thực sự được tái sử dụng.

## Thứ tự triển khai đề xuất

1. Tạo `config`, `content` và chuẩn bị hình ảnh.
2. Xây dựng các component trong `components/ui`.
3. Xây dựng Header, Footer và các section.
4. Ghép giao diện tại `src/app/(site)/page.tsx`.
5. Xây dựng `features/booking`.
6. Thêm API và trang admin khi cần lưu, quản lý đơn đặt xe.
