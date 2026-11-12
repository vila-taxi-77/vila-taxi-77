"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  fleetFeatures,
  fleetGallery,
  fleetGalleryFilters,
  type FleetFeatureIcon,
  type FleetGalleryCategory,
  type FleetGalleryItem,
} from "@/content/fleet";
import { siteContact } from "@/config/site";

function FleetIcon({ name }: { name: FleetFeatureIcon }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "seats") {
    return <svg {...common}><circle cx="9" cy="7" r="2.5" /><path d="M3.5 19v-2a5.5 5.5 0 0 1 11 0v2M16.5 5.2a2.5 2.5 0 0 1 0 4.6M18 13a4.5 4.5 0 0 1 2.5 4v2" /></svg>;
  }

  if (name === "battery") {
    return <svg {...common}><rect x="2.5" y="6" width="17" height="12" rx="2" /><path d="M21.5 10v4M11.5 8.5 8.5 13h3l-1 3 4-5h-3l1-2.5" /></svg>;
  }

  if (name === "quiet") {
    return <svg {...common}><path d="M4 9v6h4l5 4V5L8 9H4ZM17 9l4 6M21 9l-4 6" /></svg>;
  }

  return <svg {...common}><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M12 2l-2 2M12 2l2 2M12 22l-2-2M12 22l2-2" /></svg>;
}

function GalleryCard({ item, onOpen }: { item: FleetGalleryItem; onOpen: (item: FleetGalleryItem) => void }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#dce4ee] bg-white shadow-[0_16px_45px_rgba(10,25,47,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:rotate-[0.15deg] hover:shadow-[0_24px_55px_rgba(10,25,47,0.12)] before:pointer-events-none before:absolute before:inset-2 before:z-10 before:rounded-[1.25rem] before:border before:border-dashed before:border-[var(--brand-accent)] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-45">
      <button type="button" className="relative block aspect-[4/3] w-full overflow-hidden text-left" onClick={() => onOpen(item)} aria-label={`Xem ảnh: ${item.title}`}>
        <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <span className="absolute left-4 top-4 rounded-full bg-[#07172f]/85 px-3 py-1 text-xs font-black text-white backdrop-blur-sm">{item.label}</span>
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0a192f] shadow-sm">{item.seats}</span>
      </button>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-black tracking-[-0.02em] text-[#0a192f] sm:text-xl">{item.title}</h3>
        <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748b]">{item.description}</p>
        <button type="button" onClick={() => onOpen(item)} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[var(--brand-accent-dark)] transition-[gap,color] hover:gap-3 hover:text-[var(--brand-primary)]">
          Xem góc nhìn đầy đủ <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export function FleetSection() {
  const [activeCategory, setActiveCategory] = useState<FleetGalleryCategory>("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState<FleetGalleryItem | null>(null);
  const galleryScrollTopStackRef = useRef<number[]>([]);
  const filteredItems = useMemo(
    () => activeCategory === "all" ? fleetGallery : fleetGallery.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredItems.length;
  const canCollapseImages = visibleCount > 6;
  const selectedIndex = selectedItem ? filteredItems.findIndex((item) => item.id === selectedItem.id) : -1;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setVisibleCount(6);
    galleryScrollTopStackRef.current = [];
    setSelectedItem(null);
  }, [activeCategory]);

  const handleShowMore = () => {
    galleryScrollTopStackRef.current.push(window.scrollY);
    setVisibleCount((currentCount) => Math.min(currentCount + 6, filteredItems.length));
  };

  const handleShowLess = () => {
    const restoreScrollTop = galleryScrollTopStackRef.current.pop();
    setVisibleCount((currentCount) => Math.max(6, currentCount - 6));

    if (restoreScrollTop !== undefined) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => window.scrollTo({ top: restoreScrollTop, left: 0, behavior: "auto" }));
      });
    }
  };

  useEffect(() => {
    if (!selectedItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
      if (event.key === "ArrowLeft" && filteredItems.length > 1) {
        const previousIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[previousIndex]);
      }
      if (event.key === "ArrowRight" && filteredItems.length > 1) {
        const nextIndex = (selectedIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredItems, selectedIndex, selectedItem]);

  const moveSelection = (direction: -1 | 1) => {
    if (selectedIndex < 0 || filteredItems.length < 2) return;
    const nextIndex = (selectedIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <section id="doi-xe" aria-labelledby="fleet-title" className="scroll-mt-24 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-5">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-accent-dark)] sm:text-sm">
            <span className="h-px w-10 bg-[var(--brand-accent)]" />
            Đội xe Taxi VILA
          </p>
          <h2 id="fleet-title" className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-black leading-[1.02] tracking-[-0.045em] text-[#0a192f]">
            Xe điện 5–7 chỗ, đa dạng cho mọi hành trình
          </h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#64748b] sm:text-xl">
            Khám phá thư viện hình ảnh đội xe Taxi VILA: nhiều mẫu xe điện, nhiều góc nhìn ngoại thất và nội thất, sẵn sàng cho chuyến nội khu, đón sân bay và đi tỉnh.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <article className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#07172f] shadow-[0_24px_60px_rgba(10,25,47,0.16)] sm:min-h-[30rem]">
            <Image src={fleetGallery[0].src} alt={fleetGallery[0].alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07172f]/95 via-[#07172f]/20 to-[#07172f]/5" aria-hidden="true" />
            <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">Hình ảnh thực tế</span>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Taxi VILA, nhiều lựa chọn xe điện</h3>
              <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-white/78 sm:text-base">Từ xe 5 chỗ cho nhu cầu hằng ngày đến lựa chọn 5–7 chỗ cho gia đình và nhóm hành khách.</p>
            </div>
          </article>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {fleetFeatures.map((feature) => (
              <article key={feature.title} className="rounded-[1.35rem] border border-[#dce4ee] bg-white p-4 shadow-[0_12px_30px_rgba(10,25,47,0.04)] sm:p-5">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#fff7e6] text-[var(--brand-accent-dark)]"><FleetIcon name={feature.icon} /></span>
                <h3 className="text-base font-black leading-snug text-[#0a192f] sm:text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748b]">{feature.description}</p>
              </article>
            ))}
            <a href={siteContact.telephoneUrl} className="col-span-2 inline-flex items-center justify-center rounded-2xl bg-[var(--brand-accent)] px-5 py-4 text-center text-base font-black text-[#0a192f] shadow-[0_16px_32px_rgba(245,158,11,0.2)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(245,158,11,0.28)]">
              Gọi xe để được tư vấn dòng xe phù hợp <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2" aria-label="Lọc thư viện ảnh đội xe">
          {fleetGalleryFilters.map((filter) => {
            const isActive = activeCategory === filter.value;
            return (
              <button key={filter.value} type="button" onClick={() => setActiveCategory(filter.value)} aria-pressed={isActive} className={`rounded-full border px-4 py-2 text-sm font-black transition-[background-color,border-color,color,transform] hover:-translate-y-0.5 ${isActive ? "border-[#0a192f] bg-[#0a192f] text-white" : "border-[#d5deea] bg-white text-[#526176] hover:border-[var(--brand-accent)] hover:text-[#0a192f]"}`}>
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => <GalleryCard key={item.id} item={item} onOpen={setSelectedItem} />)}
        </div>

        {filteredItems.length > 6 && (hasMoreImages || canCollapseImages) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hasMoreImages && (
              <button
                type="button"
                onClick={handleShowMore}
                aria-expanded={false}
                className="group inline-flex items-center gap-3 rounded-full border border-[#0a192f] bg-white px-6 py-3 text-sm font-black text-[#0a192f] shadow-[0_12px_28px_rgba(10,25,47,0.08)] transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:bg-[#0a192f] hover:text-white hover:shadow-[0_18px_35px_rgba(10,25,47,0.16)]"
              >
                Xem thêm {Math.min(6, filteredItems.length - visibleCount)} ảnh
                <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>
            )}
            {canCollapseImages && (
              <button
                type="button"
                onClick={handleShowLess}
                className="group inline-flex items-center gap-3 rounded-full border border-[#d5deea] bg-white px-6 py-3 text-sm font-black text-[#526176] shadow-[0_12px_28px_rgba(10,25,47,0.05)] transition-[transform,box-shadow,background-color,border-color] hover:-translate-y-0.5 hover:border-[#0a192f] hover:bg-[#f5f7fb] hover:text-[#0a192f]"
              >
                Thu gọn {Math.min(6, visibleCount - 6)} ảnh
                <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
              </button>
            )}
          </div>
        )}
      </div>

      {selectedItem && typeof document !== "undefined" ? createPortal(
        <div className="fixed inset-0 z-[70] flex min-h-dvh items-center justify-center overflow-y-auto overscroll-contain bg-[#041126]/85 p-3 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={`Xem ảnh ${selectedItem.title}`} onClick={() => setSelectedItem(null)}>
          <div className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-[58vh] min-h-[16rem] max-h-[40rem] shrink-0 bg-[#07172f] sm:h-[68vh]">
              <Image src={selectedItem.src} alt={selectedItem.alt} fill sizes="100vw" className="object-contain" priority />
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3 sm:p-4">
                <span className="rounded-full bg-[#041126]/70 px-3 py-1 text-xs font-black text-white backdrop-blur-sm">{selectedIndex + 1} / {filteredItems.length}</span>
                <button ref={closeButtonRef} type="button" onClick={() => setSelectedItem(null)} className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/95 text-xl font-black text-[#0a192f] shadow-lg transition-transform hover:scale-105" aria-label="Đóng ảnh">×</button>
              </div>
              {filteredItems.length > 1 && (
                <>
                  <button type="button" onClick={() => moveSelection(-1)} className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-2xl font-black text-[#0a192f] shadow-lg transition-transform hover:scale-105 sm:left-5" aria-label="Xem ảnh trước">‹</button>
                  <button type="button" onClick={() => moveSelection(1)} className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-2xl font-black text-[#0a192f] shadow-lg transition-transform hover:scale-105 sm:right-5" aria-label="Xem ảnh tiếp theo">›</button>
                </>
              )}
            </div>
            <div className="flex items-start justify-between gap-4 overflow-y-auto p-4 sm:p-5">
              <div>
                <h3 className="font-black text-[#0a192f]">{selectedItem.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#64748b]">{selectedItem.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#f5f7fb] px-3 py-1 text-xs font-black text-[#526176]">{selectedItem.label}</span>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </section>
  );
}
