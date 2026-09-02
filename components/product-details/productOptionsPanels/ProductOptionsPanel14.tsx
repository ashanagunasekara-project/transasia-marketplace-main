"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductOptionsPanel14() {
  const initialSelection = {
    size: "",
    brand: "",
    style: "",
  };
  const [selected, setSelected] = useState({
    ...initialSelection,
  });

  const handleSelect = (type: string, value: string) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const sizeOptions = [
    { label: "Extra Large", value: "xl" },
    { label: "Large", value: "lg" },
    { label: "Medium", value: "md" },
    { label: "Small", value: "sm" },
    { label: "Extra Small", value: "xs" },
  ];

  const brandOptions = [
    {
      label: "Go Pro",
      value: "/assets/images/product-img/fashion/product-01.webp",
    },
    {
      label: "Watch",
      value: "/assets/images/product-img/fashion/product-02.webp",
    },
    {
      label: "Camera",
      value: "/assets/images/product-img/fashion/product-03.webp",
    },
    {
      label: "Airpod",
      value: "/assets/images/product-img/fashion/product-04.webp",
    },
  ];

  const styleOptions = [
    { label: "Casual", value: "casual" },
    { label: "Formal", value: "formal" },
    { label: "Extrime", value: "extrime" },
  ];

  return (
    <>
      <div className="rbt-store-variation-controls">
        {/* Size Selector */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Size:{" "}
                <span className="rbt-text">
                  {selected.size || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {sizeOptions.map((item) => (
                    <li key={item.value}>
                      <a
                        href="#"
                        data-value={item.value}
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button ${
                          selected.size === item.value ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("size", item.value);
                        }}
                      >
                        <span className="rbt-store-radio-button">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Selector */}
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
                  {brandOptions.map((brand) => (
                    <li key={brand.label}>
                      <a
                        href="#"
                        className={`rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one ${
                          selected.brand === brand.label ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("brand", brand.label);
                        }}
                      >
                        <Image
                          className="rbt-h-unset"
                          src={brand.value}
                          alt={brand.label}
                          width={128}
                          height={128}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            className="rbt-h-unset"
                            src={brand.value}
                            alt={brand.label}
                            width={128}
                            height={128}
                          />
                          <span className="img-desc-text">{brand.label}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Style Selector */}
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
                  {styleOptions.map((style) => (
                    <li key={style.value}>
                      <a
                        href="#"
                        data-value={style.value}
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button ${
                          selected.style === style.value ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("style", style.value);
                        }}
                      >
                        <span className="rbt-store-radio-button">
                          {style.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(initialSelection) !== JSON.stringify(selected) ? (
        <div
          onClick={() => setSelected({ ...initialSelection })}
          className="rbt-store-reset-variations"
        >
          <button className="rbt-reset-variation rbt-btn rbt-btn-black rbt-btn-xs mt--16 rbt-scroll-trigger fade_in animation-order-1">
            Reset All
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
