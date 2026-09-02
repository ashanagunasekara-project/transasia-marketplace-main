"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 992;

export function useLookbookMobileHotspot() {
  const [activeHotspotKey, setActiveHotspotKey] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const syncViewport = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobileView(mobile);
      if (!mobile) {
        setActiveHotspotKey(null);
      }
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const getHotspotClassName = (key: string) =>
    `rbt-lookbook-portion${isMobileView && activeHotspotKey === key ? " is-active" : ""}`;

  const toggleHotspot = (key: string) => {
    if (!isMobileView) return;
    setActiveHotspotKey((current) => (current === key ? null : key));
  };

  const closeHotspot = () => {
    if (!isMobileView) return;
    setActiveHotspotKey(null);
  };

  return {
    getHotspotClassName,
    toggleHotspot,
    closeHotspot,
  };
}
