"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductOptionsPanel11() {
  const initialSelection = {
    color: "",
    size: "",
  };
  const [selectedOptions, setSelectedOptions] = useState({
    ...initialSelection,
  });

  const handleSelection = (type: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const colors = [
    {
      name: "Acacia",
      value:
        "/assets/images/product-img/fashion/product-new-sports-09-a-1.webp",
    },
    {
      name: "Sky Blue",
      value:
        "/assets/images/product-img/fashion/product-new-sports-02-a-1.webp",
    },
    {
      name: "Sweet Orange",
      value:
        "/assets/images/product-img/fashion/product-new-sports-01-a-1.webp",
    },
  ];

  const sizes = [38, 39, 40, 41, 42, 43, 44];

  return (
    <>
      <div className="rbt-store-variation-controls">
        {/* Color Selection (Image-based) */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Color:{" "}
                <span className="rbt-text">
                  {selectedOptions.color || "No Selection"}
                </span>
              </p>
              <div className="rbt-product-switch-area">
                <ul className="rbt-switcher-root rbt-switcher-product-list product-switcher-activation">
                  {colors.map((color) => (
                    <li
                      key={color.name}
                      className={
                        selectedOptions.color === color.name ? "active" : ""
                      }
                    >
                      <a
                        href="#"
                        className="rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("color", color.name);
                        }}
                      >
                        <Image
                          className="rbt-h-unset"
                          src={color.value}
                          alt={color.name}
                          width={128}
                          height={128}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            className="rbt-h-unset"
                            src={color.value}
                            alt={color.name}
                            width={128}
                            height={128}
                          />
                          <span className="img-desc-text">{color.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Size Selection */}
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
                      className={
                        selectedOptions.size === String(size) ? "active" : ""
                      }
                    >
                      <a
                        href="#"
                        className="rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("size", String(size));
                        }}
                      >
                        <span className="rbt-store-radio-button">{size}</span>
                      </a>
                    </li>
                  ))}
                </ul>
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
