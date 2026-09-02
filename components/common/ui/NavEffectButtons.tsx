"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

type ButtonOption = {
  id: string;
  label: React.ReactNode;
};

type NavEffectButtonsProps = {
  parentClassName?: string;
  options: ButtonOption[];
  active: string;
  setActive: (id: string) => void;
  groupClassName?: string;
  itemClassName?: string;
  highlightClassName?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export default function NavEffectButtons({
  parentClassName = "",
  options,
  active,
  setActive,
  groupClassName = "rbt-product-nav-grp",
  itemClassName = "rbt-filter-btn",
  highlightClassName = "rbt-bg-highlight",
  startAdornment,
  endAdornment,
}: NavEffectButtonsProps) {
  const [highlightStyle, setHighlightStyle] = useState<
    React.CSSProperties | undefined
  >();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const rafRef = useRef<number | null>(null);

  const updateHighlight = useCallback(() => {
    if (!containerRef.current) return;

    const currentEl = itemRefs.current[active];
    if (!currentEl) return;

    const itemRect = currentEl.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setHighlightStyle({
      width: itemRect.width,
      height: itemRect.height,
      left: 0,
      top: 0,
      transform: `translate(${itemRect.left - containerRect.left}px, ${
        itemRect.top - containerRect.top
      }px)`,
    });
  }, [active]);

  const scheduleHighlightUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateHighlight();
    });
  }, [updateHighlight]);

  useEffect(() => {
    scheduleHighlightUpdate();
  }, [scheduleHighlightUpdate]);

  useEffect(() => {
    const handleResize = () => {
      scheduleHighlightUpdate();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scheduleHighlightUpdate]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive(id);
  };

  return (
    <div
      ref={containerRef}
      className={`rbt-nav-effect-activation ${parentClassName}`.trim()}
    >
      {startAdornment}
      <div className={groupClassName}>
        {options.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) {
                itemRefs.current[tab.id] = el;
              }
            }}
            className={`${itemClassName}${active === tab.id ? " active" : ""}`}
            onClick={handleClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {endAdornment}
      <span className={highlightClassName} style={highlightStyle} />
    </div>
  );
}
