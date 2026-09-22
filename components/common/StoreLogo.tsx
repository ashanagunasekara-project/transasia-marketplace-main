"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useBrandingStore } from "@/context/brandingStore";

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
  priority = false,
}: StoreLogoProps) {
  const { logoUrl, storeName, isLoaded, fetchBranding } = useBrandingStore();

  useEffect(() => {
    if (!isLoaded) {
      fetchBranding();
    }
  }, [isLoaded, fetchBranding]);

  // If logo is remote URL or relative local path
  const isRemote = logoUrl.startsWith("http://") || logoUrl.startsWith("https://");

  return (
    <Image
      alt={`${storeName} Logo`}
      src={logoUrl || "/assets/images/logo/logo.webp"}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={isRemote}
    />
  );
}
