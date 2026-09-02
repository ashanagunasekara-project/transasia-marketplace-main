"use client";
import Tooltip from "@/components/common/ui/Tooltip";
import Image from "next/image";
import { useState } from "react";

export default function ProductOptionsPanel3() {
  const initialSelection = { style: "", color: "", brand: "", size: "" };
  const [selectedOptions, setSelectedOptions] = useState({
    ...initialSelection,
  });

  const handleSelection = (type: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const styles = ["Fiber Board", "MDF", "Plywood", "Particle Board"];

  const colors = [
    { name: "Wood Color", value: "#ECD4B8" },
    { name: "White", value: "#ffffff" },
  ];

  const brands = [
    {
      name: "Pine Wood",
      img: "/assets/images/product-img/furniture/wood-type-01.webp",
    },
    {
      name: "Hard Board",
      img: "/assets/images/product-img/furniture/wood-type-02.webp",
    },
    {
      name: "knish Wood",
      img: "/assets/images/product-img/furniture/wood-type-03.webp",
    },
    {
      name: "Fine Board",
      img: "/assets/images/product-img/furniture/wood-type-04.webp",
    },
  ];

  const sizes = ['10" x 12"', '15" x 18"', '25" x 30"', '32" x 40"'];

  return (
    <>
      <div className="rbt-store-variation-controls">
        {/* Style */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Style:{" "}
                <span className="rbt-text">
                  {selectedOptions.style || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {styles.map((style) => (
                    <li
                      key={style}
                      className={
                        selectedOptions.style === style ? "active" : ""
                      }
                    >
                      <a
                        href="#"
                        className="rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("style", style);
                        }}
                      >
                        <span className="rbt-store-radio-button">{style}</span>
                      </a>
                    </li>
                  ))}
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Color */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Color:{" "}
                <span className="rbt-text">
                  {selectedOptions.color || "No Selection"}
                </span>
              </p>{" "}
              <div className="rbt-color-select-area">
                <ul className="rbt-switcher-root rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                  {colors.map((color) => (
                    <li
                      key={color.name}
                      className={
                        selectedOptions.color === color.name ? "active" : ""
                      }
                    >
                      <Tooltip content={color.name} placement="top">
                        <a
                          href="#"
                          className="rbt-switcher--color tooltips"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelection("color", color.name);
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

        {/* Brand */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Brand:{" "}
                <span className="rbt-text">
                  {selectedOptions.brand || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {brands.map((brand) => (
                    <li
                      key={brand.name}
                      className={
                        selectedOptions.brand === brand.name ? "active" : ""
                      }
                    >
                      <a
                        href="#"
                        className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("brand", brand.name);
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
            </div>{" "}
          </div>
        </div>

        {/* Size */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Size:{" "}
                <span className="rbt-text">
                  {selectedOptions.size || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {sizes.map((size) => (
                    <li
                      key={size}
                      className={selectedOptions.size === size ? "active" : ""}
                    >
                      <a
                        href="#"
                        className="rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("size", size);
                        }}
                      >
                        <span className="rbt-store-radio-button">{size}</span>
                      </a>
                    </li>
                  ))}
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(initialSelection) !== JSON.stringify(selectedOptions) ? (
        <div
          onClick={() => setSelectedOptions({ ...initialSelection })}
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
