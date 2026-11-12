"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("#main-content");
    if (!main) return;

    const sections = Array.from(main.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && child.tagName === "SECTION",
    );
    const revealSections = sections.slice(1);

    main.dataset.revealReady = "true";

    if (!("IntersectionObserver" in window)) {
      revealSections.forEach((section) => {
        section.dataset.reveal = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealSections.forEach((section) => {
      section.dataset.reveal = "pending";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
