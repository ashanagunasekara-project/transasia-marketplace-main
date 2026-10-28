"use client";

import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Product } from "@/types";
import { DEFAULT_MAX_PRICE } from "../../reducer/filterReducer";

const priceRanges = [
  { id: 1, label: "Under Rs. 1,000", min: 0, max: 1000 },
  { id: 2, label: "Rs. 1,000 to Rs. 5,000", min: 1000, max: 5000 },
  { id: 3, label: "Rs. 5,000 to Rs. 20,000", min: 5000, max: 20000 },
  { id: 4, label: "Rs. 20,000 to Rs. 50,000", min: 20000, max: 50000 },
  { id: 5, label: "Rs. 50,000 to Rs. 150,000", min: 50000, max: 150000 },
  { id: 6, label: "Rs. 150,000 & Above", min: 150000, max: DEFAULT_MAX_PRICE },
];

export default function FilterByPrice({
  priceRange,
  onChange,
  getFilterCount,
}: {
  priceRange: [number, number];
  onChange: (value: [number, number]) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const [inputMin, setInputMin] = useState<string>(
    priceRange[0] > 0 ? String(priceRange[0]) : ""
  );
  const [inputMax, setInputMax] = useState<string>(
    priceRange[1] < DEFAULT_MAX_PRICE ? String(priceRange[1]) : ""
  );

  // Synchronize local input fields with external priceRange changes
  useEffect(() => {
    setInputMin(priceRange[0] > 0 ? String(priceRange[0]) : "");
    setInputMax(priceRange[1] < DEFAULT_MAX_PRICE ? String(priceRange[1]) : "");
  }, [priceRange]);

  const handleSliderChange = (range: number | number[]) => {
    const arr = Array.isArray(range) ? range : [range, range];
    const newMax = arr[1] >= 200000 ? DEFAULT_MAX_PRICE : arr[1];
    onChange([arr[0], newMax]);
  };

  const handleApplyInputs = () => {
    const minVal = inputMin.trim() ? Math.max(0, parseFloat(inputMin) || 0) : 0;
    const maxVal = inputMax.trim()
      ? Math.max(minVal, parseFloat(inputMax) || DEFAULT_MAX_PRICE)
      : DEFAULT_MAX_PRICE;
    onChange([minVal, maxVal]);
  };

  const handleCheckboxToggle = (range: { min: number; max: number }) => {
    const isCurrentlyChecked =
      priceRange[0] === range.min &&
      (range.max === DEFAULT_MAX_PRICE
        ? priceRange[1] >= DEFAULT_MAX_PRICE
        : priceRange[1] === range.max);

    if (isCurrentlyChecked) {
      // Toggle off -> reset to full range
      onChange([0, DEFAULT_MAX_PRICE]);
    } else {
      onChange([range.min, range.max]);
    }
  };

  const sliderCurrentValue = [
    Math.min(priceRange[0], 200000),
    priceRange[1] >= DEFAULT_MAX_PRICE ? 200000 : Math.min(priceRange[1], 200000),
  ];

  const formattedDisplay =
    priceRange[0] === 0 && priceRange[1] >= DEFAULT_MAX_PRICE
      ? "All Prices (Rs.)"
      : `Rs. ${priceRange[0].toLocaleString()} - ${
          priceRange[1] >= DEFAULT_MAX_PRICE
            ? "Above"
            : `Rs. ${priceRange[1].toLocaleString()}`
        }`;

  return (
    <>
      {/* Price Range Checkboxes in Rupees */}
      <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check">
        {priceRanges.map((range) => {
          const isChecked =
            priceRange[0] === range.min &&
            (range.max === DEFAULT_MAX_PRICE
              ? priceRange[1] >= DEFAULT_MAX_PRICE
              : priceRange[1] === range.max);
          const inputId = `price-checkbox-${range.id}`;
          const count = getFilterCount(
            (product) =>
              product.price >= range.min &&
              (range.max === DEFAULT_MAX_PRICE
                ? true
                : product.price <= range.max)
          );

          return (
            <li
              key={range.id}
              className={`rbt-check-group ${isChecked ? "active" : ""}`}
            >
              <input
                id={inputId}
                type="checkbox"
                name={inputId}
                checked={isChecked}
                onChange={() => handleCheckboxToggle(range)}
              />
              <label htmlFor={inputId}>
                {range.label}
                <span className="rbt-label-count">({count})</span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* Slider Range in Rupees */}
      <div className="rbt-price-range-slider mt--20">
        <Slider
          range
          value={sliderCurrentValue}
          onChange={handleSliderChange}
          max={200000}
          min={0}
          step={1000}
        />
        <p className="rbt-range-value mt--8">
          <input
            type="text"
            id="amount"
            readOnly
            value={formattedDisplay}
            style={{ fontWeight: 600, color: "var(--color-heading)" }}
          />
        </p>
      </div>

      {/* Manual Input Group with Apply button */}
      <div
        className="rbt-price-input-grp d-flex align-items-center gap-2 mt--12"
        style={{ flexWrap: "nowrap" }}
      >
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <input
            type="number"
            min={0}
            placeholder="Min (Rs.)"
            value={inputMin}
            onChange={(e) => setInputMin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApplyInputs()}
            className="form-control form-control-sm"
            style={{ fontSize: "13px", height: "38px" }}
          />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <input
            type="number"
            min={0}
            placeholder="Max (Rs.)"
            value={inputMax}
            onChange={(e) => setInputMax(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApplyInputs()}
            className="form-control form-control-sm"
            style={{ fontSize: "13px", height: "38px" }}
          />
        </div>
        <button
          type="button"
          className="rbt-btn rbt-btn-sm"
          onClick={handleApplyInputs}
          style={{
            padding: "0 16px",
            height: "38px",
            lineHeight: "38px",
            fontSize: "13px",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
}
