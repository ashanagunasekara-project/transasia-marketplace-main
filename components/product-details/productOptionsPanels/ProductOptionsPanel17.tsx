"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductOptionsPanel17() {
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
      value: "product-01.webp",
      img: "/assets/images/product-img/fashion/product-01.webp",
    },
    {
      name: "Watch",
      value: "product-02.webp",
      img: "/assets/images/product-img/fashion/product-02.webp",
    },
    {
      name: "Camera",
      value: "product-03.webp",
      img: "/assets/images/product-img/fashion/product-03.webp",
    },
    {
      name: "Airpod",
      value: "product-04.webp",
      img: "/assets/images/product-img/fashion/product-04.webp",
    },
  ];

  const styles = ["Casual", "Formal", "Extrime"];

  return (
    <>
      <div className="rbt-store-variation-controls">
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
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {sizes.map((size) => (
                    <li key={size.value}>
                      <a
                        href="#"
                        data-value={size.value}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("size", size.label);
                        }}
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button ${
                          selected.size === size.label ? "active" : ""
                        }`}
                      >
                        <span className="rbt-store-radio-button">
                          {size.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
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
                      className={` ${
                        selected.brand === brand.name ? "active" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("brand", brand.name);
                        }}
                        className={`rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one`}
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
                    <li key={style}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("style", style);
                        }}
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button ${
                          selected.style === style ? "active" : ""
                        }`}
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
