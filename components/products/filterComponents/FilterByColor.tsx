"use client";

import { useState } from "react";

const colors = [
  { name: "Black", count: 33, bgClass: "rbt-swatch-bg-black" },
  { name: "Blue", count: 56, bgClass: "rbt-swatch-bg-blue" },
  { name: "Brown", count: 90, bgClass: "rbt-swatch-bg-brown" },
  { name: "Gray", count: 33, bgClass: "rbt-swatch-bg-gray" },
  { name: "Green", count: 46, bgClass: "rbt-swatch-bg-green" },
  { name: "Orange", count: 94, bgClass: "rbt-swatch-bg-orange" },
  { name: "Red", count: 85, bgClass: "rbt-swatch-bg-red" },
  { name: "Yellow", count: 55, bgClass: "rbt-swatch-bg-yellow" },
];

import { Product } from "@/types";

export default function FilterByColor({
  selectedItems,
  onChange,
  getFilterCount,
  scrollAble = false,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
  scrollAble?: boolean;
}) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = (colorName: string) => {
    onChange(colorName);
  };

  return (
    <div
      className={`${scrollAble ? "" : "rbt-has-show-more"} ${
        showMore ? "active" : ""
      }`}
    >
      <span className="rbt-filter-item-not-found rbt-text-color-danger">
        Color not matched
      </span>

      <ul className="rbt-sidebar-list-wrapper rbt-categories-list-color-swatch rbt-search-filter-item-list rbt-has-show-more-inner-content">
        {colors.map((color) => {
          const isActive = selectedItems.includes(color.name);

          return (
            <li key={color.name} className="rbt-color-swatch-group">
              <a
                onClick={() => handleToggle(color.name)}
                className={`rbt-color-swatch-content ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="rbt-color-swatch">
                  <span className={`rbt-color-swatch-bg ${color.bgClass}`} />
                  <span className="rbt-color-swatch-text">{color.name}</span>
                </span>
              </a>

              <span className="rbt-color-swatch-count">
                (
                {getFilterCount(
                  (product) =>
                    !!(product.filterColor?.includes(color.name) ?? false),
                )}
                )
              </span>
            </li>
          );
        })}
      </ul>
      {!scrollAble ? (
        <div
          className={`rbt-show-more-btn-area ${showMore ? "active" : ""}`}
          onClick={() => setShowMore((prev) => !prev)}
        >
          <button type="button" className="rbt-show-more-btn">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
