"use client";

import { isotopFilters } from "@/data/portfolios";
import { useEffect, useMemo, useRef, useState } from "react";
import type { IsotopFilter } from "@/data/portfolios";

type PortfolioIsotopeFilterTabsProps = {
  active?: string;
  setActive?: (filter: string) => void;
  options?: IsotopFilter[];
  defaultActive?: string;
  splitOptionId?: string;
};

export default function PortfolioIsotopeFilterTabs({
  active: activeProp,
  setActive,
  options = isotopFilters,
  defaultActive = "*",
  splitOptionId = ".coming-soon",
}: PortfolioIsotopeFilterTabsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [internalActive, setInternalActive] = useState(defaultActive);
  const active = activeProp ?? internalActive;

  const [highlightStyle, setHighlightStyle] = useState<
    React.CSSProperties | undefined
  >(undefined);

  const { mainOptions, splitOptions } = useMemo(() => {
    const split = options.filter((f) => f.filter === splitOptionId);
    const main = options.filter((f) => f.filter !== splitOptionId);
    return { mainOptions: main, splitOptions: split };
  }, [options, splitOptionId]);

  useEffect(() => {
    const rootEl = rootRef.current;
    const activeEl = itemRefs.current[active];
    if (!rootEl || !activeEl) return;

    const rootRect = rootEl.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();

    const left = itemRect.left - rootRect.left;
    const top = itemRect.top - rootRect.top;
    const width = itemRect.width;

    setHighlightStyle({
      width,
      transform: `translateX(${left}px)`,
      height: itemRect.height,
      top: `${top}px`,
    });
  }, [active]);

  const handleClick = (filter: string) => {
    if (setActive) {
      setActive(filter);
      return;
    }
    setInternalActive(filter);
  };

  return (
    <div className="rbt-isotop-tabs rbt-nav-effect-activation" ref={rootRef}>
      <div className="rbt-product-nav-grp rbt-tab-btn-list">
        {mainOptions.map((item) => (
          <button
            key={item.filter}
            ref={(el) => {
              itemRefs.current[item.filter] = el;
            }}
            type="button"
            data-filter={item.filter}
            className={active === item.filter ? "active" : ""}
            onClick={() => handleClick(item.filter)}
          >
            <span className="filter-text">{item.label}</span>
          </button>
        ))}
      </div>

      {splitOptions.length > 0 ? (
        <div className="rbt-product-nav-grp rbt-tab-btn-list">
          {splitOptions.map((item) => (
            <button
              key={item.filter}
              ref={(el) => {
                itemRefs.current[item.filter] = el;
              }}
              type="button"
              data-filter={item.filter}
              className={active === item.filter ? "active" : ""}
              onClick={() => handleClick(item.filter)}
            >
              <span className="filter-text">{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}

      <span
        className="rbt-bg-highlight isotop-tab-bg-highlight"
        style={highlightStyle}
      />
    </div>
  );
}
