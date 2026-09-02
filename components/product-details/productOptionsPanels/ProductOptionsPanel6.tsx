"use client";
import Image from "next/image";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel6() {
  const initialSelection = {
    color: "",
    brand: "",
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
    { name: "Lavender", value: "#D3AFF2" },
    { name: "Light Green", value: "#C0DCCE" },
    { name: "Gray", value: "#737373" },
  ];

  const brands = [
    {
      name: "Apple Cable",
      img: "/assets/images/product-img/accessories/cable-a-01.webp",
      width: 160,
      height: 160,
    },
    {
      name: "Android Cable",
      img: "/assets/images/product-img/accessories/cable-b-01.webp",
      width: 160,
      height: 160,
    },
  ];

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
                  {selectedOptions.color || "No Selection"}
                </span>
              </p>
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
        <div className="rbt-info-wrapper d-flex mt--24 products-brand-hidden-content">
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
                          width={brand.width}
                          height={brand.height}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            className="rbt-h-unset"
                            src={brand.img}
                            alt={brand.name}
                            width={brand.width}
                            height={brand.height}
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
