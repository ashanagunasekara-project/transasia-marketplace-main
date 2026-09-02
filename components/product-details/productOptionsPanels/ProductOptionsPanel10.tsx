"use client";
import Image from "next/image";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel10() {
  const initialSelection = {
    color: "",
    delivery: "Express Delivery",
    size: "",
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
    { name: "Majestic White", value: "#EFF0F4" },
    { name: "Brown", value: "#6F5650" },
    { name: "Light Purple", value: "#E0DBFF" },
  ];

  const deliveries = [
    "Express Delivery",
    "7 Days Express Delivery",
    "3 Days Express Delivery",
    "2 Days Express Delivery",
  ];

  const sizes = ["Large", "Medium", "Small", "Extra Small"];

  const brands = [
    {
      name: "Muslin Cotton",
      img: "/assets/images/product-single/fashion/product-type/prd-type-b-1.webp",
    },
    {
      name: "Mash Cotton",
      img: "/assets/images/product-single/fashion/product-type/prd-type-b-2.webp",
    },
    {
      name: "Smooth Wool",
      img: "/assets/images/product-single/fashion/product-type/prd-type-b-3.webp",
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

        {/* Delivery */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Delivery:{" "}
                <span className="rbt-text">
                  {selectedOptions.delivery || "No Selection"}
                </span>
              </p>
              <div className="rbt-modern-select single-prd-select height-36 rbt-rounded-styled rbt-modern-select-md-width">
                <div className="dropdown bootstrap-select rbt-switcher-root rbt-select-activation">
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">
                          {selectedOptions.delivery}
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="dropdown-menu">
                    <div className="inner show">
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      >
                        {deliveries.map((option) => (
                          <li key={option}>
                            <a
                              href="#"
                              className={`dropdown-item ${
                                selectedOptions.delivery === option
                                  ? "active selected"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelection("delivery", option);
                              }}
                            >
                              <span className="text">{option}</span>
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
                          width={128}
                          height={128}
                          alt={brand.name}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            className="rbt-h-unset"
                            src={brand.img}
                            width={128}
                            height={128}
                            alt={brand.name}
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
