"use client";

import { useUiElement } from "@/context/uiStore";
import { useEffect } from "react";

export default function SearchToggler() {
  const { searchOpen, toggleSearch, setMenuHoverOpen, closeSearch } =
    useUiElement();
  useEffect(() => {
    window.addEventListener("scroll", closeSearch);
    return () => window.removeEventListener("scroll", closeSearch);
  }, [closeSearch]);
  return (
    <button
      type="button"
      className={`search-trigger-active rbt-round-btn rbt-modern-close-btn${searchOpen ? " open" : ""}`}
      aria-label="Toggle search panel"
      aria-expanded={searchOpen}
      aria-controls="header-search-dropdown"
      onClick={(e) => {
        e.preventDefault();
        setMenuHoverOpen(false);
        toggleSearch();
      }}
    >
      <i className="fa-regular fa-search search-icon" />
      <div className="modern-close-wrapper" />
    </button>
  );
}
