"use client";

import { useEffect, useState } from "react";
import { useBrandingStore } from "@/context/brandingStore";
import { resolveImageUrl } from "@/lib/api";

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
  const [imgSrc, setImgSrc] = useState<string>("/assets/images/logo/logo.webp");

  useEffect(() => {
    if (!isLoaded) {
      fetchBranding();
    }
  }, [isLoaded, fetchBranding]);

  useEffect(() => {
    if (logoUrl) {
      setImgSrc(resolveImageUrl(logoUrl, "/assets/images/logo/logo.webp"));
    }
  }, [logoUrl]);

  return (
    <img
      alt={`${storeName} Logo`}
      src={imgSrc}
      width={width}
      height={height}
      className={className}
      onError={() => {
        setImgSrc("/assets/images/logo/logo.webp");
      }}
      style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
    />
  );
}
