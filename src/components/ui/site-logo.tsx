import Image from "next/image";
import { siteConfig } from "@/config/site";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "header" | "footer";
};

export function SiteLogo({ className = "", priority = false, variant = "header" }: SiteLogoProps) {
  const variantClass = variant === "header" ? "site-logo-header" : "site-logo-footer";

  return (
    <span
      className={`inline-flex min-w-0 items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} - ${siteConfig.tagline}`}
    >
      <Image
        src="/images/logo/taxi-vila-logo.png"
        alt=""
        width={1536}
        height={1536}
        priority={priority}
        sizes={variant === "header" ? "56px" : "128px"}
        className={`${variantClass} shrink-0 object-contain`}
      />

      <span className="site-logo-wordmark min-w-0 leading-none">
        <span className="site-logo-title block whitespace-nowrap text-[19px] font-black tracking-[0.02em] text-[#0a192f]">
          TAXI <span className="text-[var(--brand-primary)]">VILA</span>
        </span>
        <span className="site-logo-tagline mt-1 block whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#77859a]">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}
