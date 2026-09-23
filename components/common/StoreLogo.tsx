"use client";

import { useEffect, useState } from "react";
import { useBrandingStore } from "@/context/brandingStore";
import { resolveImageUrl } from "@/lib/api";

const DEFAULT_FALLBACK_LOGO = "/assets/images/logo/transasia-logo.png";

interface StoreLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function StoreLogo({
  width = 1487,
  height = 334,
  className = "",
}: StoreLogoProps) {
  const { logoUrl, storeName, isLoaded, fetchBranding } = useBrandingStore();

  const [imgSrc, setImgSrc] = useState<string>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("transasia_store_branding");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.state?.logoUrl) {
            return resolveImageUrl(parsed.state.logoUrl, DEFAULT_FALLBACK_LOGO);
          }
        }
      } catch {
        // Use default fallback
      }
    }
    return logoUrl ? resolveImageUrl(logoUrl, DEFAULT_FALLBACK_LOGO) : DEFAULT_FALLBACK_LOGO;
  });

  useEffect(() => {
    fetchBranding();
  }, [fetchBranding]);

  useEffect(() => {
    if (logoUrl) {
      setImgSrc(resolveImageUrl(logoUrl, DEFAULT_FALLBACK_LOGO));
    }
  }, [logoUrl]);

  return (
    <img
      alt={`${storeName || "Transasia"} Logo`}
      src={imgSrc}
      width={width}
      height={height}
      className={className}
      onError={() => {
        setImgSrc(DEFAULT_FALLBACK_LOGO);
      }}
      style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
    />
  );
}
