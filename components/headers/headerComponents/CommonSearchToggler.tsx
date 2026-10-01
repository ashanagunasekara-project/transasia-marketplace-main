"use client";

import { useUiElement } from "@/context/uiStore";
import { useEffect } from "react";

export default function CommonSearchToggler() {
  const {
    commonSearchOpen,
    toggleCommonSearch,
    setMenuHoverOpen,
    closeCommonSearch,
  } = useUiElement();
  useEffect(() => {
    if (!commonSearchOpen) return;
    const onScroll = () => closeCommonSearch();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [commonSearchOpen, closeCommonSearch]);
  return (
    <button
      type="button"
      className={`rbt-round-btn has-rbt-md-fsize rbt-common-search-trigger-active rbt-modern-close-btn${commonSearchOpen ? " open" : ""}`}
      aria-label="Toggle sticky header search panel"
      aria-expanded={commonSearchOpen}
      aria-controls="header-common-search-dropdown"
      onClick={(e) => {
        e.preventDefault();
        setMenuHoverOpen(false);
        toggleCommonSearch();
      }}
    >
      <i className="fa-regular fa-search search-icon" />
      <div className="modern-close-wrapper" />
    </button>
  );
}
