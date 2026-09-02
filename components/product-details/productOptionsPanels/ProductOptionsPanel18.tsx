"use client";

import Image from "next/image";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

type SelectionState = {
  color: string;
  size: string;
  brand: string;
  style: string;
};

export default function ProductOptionsPanel18() {
  const initialSelection: SelectionState = {
    color: "",
    size: "",
    brand: "",
    style: "",
  };

  const [selected, setSelected] = useState<SelectionState>({
    ...initialSelection,
  });

  const handleSelect = (type: keyof SelectionState, value: string) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const colors = [
    { name: "Black", value: "#2B2B2B" },
    { name: "Pink", value: "#cc999d" },
    { name: "Dark", value: "#9C9B9E" },
    { name: "White", value: "#F2EDE7" },
    { name: "Gray", value: "#a09fa4" },
  ];

  const sizes = [
    { label: "Extra Large", value: "xl" },
    { label: "Large", value: "lg" },
    { label: "Medium", value: "md" },
    { label: "Small", value: "sm" },
    { label: "Extra Small", value: "xs" },
  ];

  const brands = [
    {
      name: "Go Pro",
      value: "/assets/images/product-img/fashion/product-01.webp",
      img: "/assets/images/product-img/fashion/product-01.webp",
    },
    {
      name: "Watch",
      value: "/assets/images/product-img/fashion/product-02.webp",
      img: "/assets/images/product-img/fashion/product-02.webp",
    },
    {
      name: "Camera",
      value: "/assets/images/product-img/fashion/product-03.webp",
      img: "/assets/images/product-img/fashion/product-03.webp",
    },
    {
      name: "Airpod",
      value: "/assets/images/product-img/fashion/product-04.webp",
      img: "/assets/images/product-img/fashion/product-04.webp",
    },
  ];

  const styles = ["Casual", "Formal", "Extrime"];

  return (
    <>
      <div className="rbt-store-variation-controls">
        {/* Color */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Color:{" "}
                <span className="rbt-text">
                  {selected.color || "No Selection"}
                </span>
              </p>
              <div className="rbt-color-select-area">
                <ul className="rbt-switcher-root rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                  {colors.map((color) => (
                    <li
                      key={color.value}
                      className={
                        selected.color === color.name ? "active" : undefined
                      }
                    >
                      <Tooltip content={color.name} placement="top">
                        <a
                          href="#0"
                          className="rbt-switcher--color tooltips"
                          data-value={color.value}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelect("color", color.name);
                          }}
                        >
                          <div
                            className="rbt-color-circle"
                            style={{ backgroundColor: color.value }}
                          />
                        </a>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Size */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Size:{" "}
                <span className="rbt-text">
                  {selected.size || "No Selection"}
                </span>
              </p>
              <div className="rbt-modern-select single-prd-select height-36 rbt-rounded-styled rbt-modern-select-md-width rbt-modern-select-md-width">
                <div className="dropdown bootstrap-select rbt-switcher-root rbt-select-activation">
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle bs-placeholder btn-light"
                    data-bs-toggle="dropdown"
                    aria-owns="bs-select-3"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="Select"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">
                          {selected.size || "Select"}
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-3"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      >
                        {sizes.map((size) => (
                          <li key={size.value}>
                            <a
                              href="#0"
                              className={`dropdown-item ${
                                selected.size === size.label
                                  ? "active selected"
                                  : ""
                              }`}
                              data-value={size.value}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelect("size", size.label);
                              }}
                            >
                              <span className="text">{size.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Brand:{" "}
                <span className="rbt-text">
                  {selected.brand || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {brands.map((brand) => (
                    <li
                      key={brand.value}
                      className={
                        selected.brand === brand.name ? "active" : undefined
                      }
                    >
                      <a
                        href="#0"
                        className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                        data-value={brand.value}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("brand", brand.name);
                        }}
                      >
                        <Image
                          className="rbt-h-unset"
                          src={brand.img}
                          alt={brand.name}
                          width={100}
                          height={100}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            className="rbt-h-unset"
                            src={brand.img}
                            alt={brand.name}
                            width={100}
                            height={100}
                          />
                          <span className="img-desc-text">{brand.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Style */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Style:{" "}
                <span className="rbt-text">
                  {selected.style || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {styles.map((style) => (
                    <li
                      key={style}
                      className={
                        selected.style === style ? "active" : undefined
                      }
                    >
                      <a
                        href="#0"
                        className="rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button"
                        data-value={style.toLowerCase()}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("style", style);
                        }}
                      >
                        <span className="rbt-store-radio-button">{style}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {JSON.stringify(initialSelection) !== JSON.stringify(selected) && (
        <div
          onClick={() => setSelected({ ...initialSelection })}
          className="rbt-store-reset-variations"
        >
          <button className="rbt-reset-variation rbt-btn rbt-btn-black rbt-btn-xs mt--16 rbt-scroll-trigger fade_in animation-order-1">
            Reset All
          </button>
        </div>
      )}
    </>
  );
}
