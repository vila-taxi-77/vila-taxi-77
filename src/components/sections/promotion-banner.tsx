"use client";

import { useEffect, useRef, useState } from "react";

function GiftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-full w-full"
      fill="none"
    >
      <path d="M10 27h44v29H10z" fill="url(#promotion-gift-box)" stroke="#ffe4e6" strokeWidth="2.5" />
      <path d="M7 19h50v11H7z" fill="#df6874" stroke="#ffe4e6" strokeWidth="2.5" />
      <path d="M29 19h7v37h-7z" fill="#fff1f2" />
      <path d="M32 19c-13 0-16-5-14-10 3-7 13-2 14 10Zm0 0c13 0 16-5 14-10-3-7-13-2-14 10Z" fill="#ed9aa1" stroke="#fff1f2" strokeWidth="2.5" strokeLinejoin="round" />
      <defs><linearGradient id="promotion-gift-box" x1="12" y1="28" x2="54" y2="56" gradientUnits="userSpaceOnUse"><stop stopColor="#df6874" /><stop offset="1" stopColor="#882c3a" /></linearGradient></defs>
    </svg>
  );
}

export function PromotionBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner || !("IntersectionObserver" in window)) {
      setHasEnteredViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(banner);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="hero-promotion-banner mt-4 max-w-xl"
      data-visible={hasEnteredViewport ? "true" : "false"}
      role="group"
      aria-label="Ưu đãi dành cho khách đặt lịch trước"
    >
      <div className="promotion-copy">
        <p className="promotion-title">
          <strong>ĐẶT LỊCH TRƯỚC</strong>
          <span className="promotion-title-separator"> – CƠ HỘI NHẬN</span>
          <strong> ƯU ĐÃI!</strong>
        </p>
        <p className="promotion-description">
          Chủ động đặt lịch, khám phá những chương trình khuyến mãi hấp dẫn dành cho chuyến đi của bạn.
        </p>
      </div>
      <span className="promotion-gift-decoration" aria-hidden="true"><GiftIcon /></span>
      <span className="promotion-sparkle" aria-hidden="true">✦</span>
    </div>
  );
}
