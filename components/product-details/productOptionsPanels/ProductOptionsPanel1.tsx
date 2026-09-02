"use client";
import Image from "next/image";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel1() {
  const initialSelection = {
    color: "",
    size: "",
    brand: "",
    style: "",
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
    { name: "Black", value: "#2B2B2B" },
    { name: "Pink", value: "#cc999d" },
    { name: "Dark", value: "#9C9B9E" },
    { name: "White", value: "#F2EDE7" },
    { name: "Gray", value: "#a09fa4" },
  ];

  const sizes = ["Extra Large", "Large", "Medium", "Small", "Extra Small"];

  const brands = [
    {
      name: "Go Pro",
      img: "/assets/images/product-single/ear-add-prd/eadd-prd-1.webp",
    },
    {
      name: "Watch",
      img: "/assets/images/product-single/ear-add-prd/eadd-prd-2.webp",
    },
    {
      name: "Camera",
      img: "/assets/images/product-single/ear-add-prd/eadd-prd-3.webp",
    },
    {
      name: "Airpod",
      img: "/assets/images/product-single/ear-add-prd/eadd-prd-4.webp",
    },
  ];

  const styles = ["Casual", "Formal", "Extrime"];

  return (
    <>
      <div className="rbt-store-variation-controls">
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
                      className={` ${
                        selectedOptions.color === color.name ? "active" : ""
                      }`}
                    >
                      <Tooltip content={color.name} placement="top">
                        <a
                          href="#"
                          className={`rbt-switcher--color tooltips`}
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
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Size:{" "}
                <span className="rbt-text">
                  {selectedOptions.size || "No Selection"}
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
                          {selectedOptions.size || "Select"}
                        </div>
                      </div>{" "}
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
                          <li key={size}>
                            <a
                              href="#"
                              className={`dropdown-item ${
                                selectedOptions.size === size
                                  ? "active selected"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelection("size", size);
                              }}
                            >
                              <span className="text">{size}</span>
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
                      className={` ${
                        selectedOptions.brand === brand.name ? "active" : ""
                      }`}
                    >
                      <a
                        href="#"
                        className={`rbt-switcher--prd rbt-bg-color-brand-100 rbt-image-tooltip-activation rbt-switcher--prd-one`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("brand", brand.name);
                        }}
                      >
                        <Image
                          width={100}
                          height={100}
                          className="rbt-h-unset"
                          src={brand.img}
                          alt={brand.name}
                        />
                        <div className="rbt-image-tooltip-box">
                          <Image
                            width={100}
                            height={100}
                            className="rbt-h-unset"
                            src={brand.img}
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
                      className={` ${
                        selectedOptions.style === style ? "active" : ""
                      }`}
                    >
                      <a
                        href="#"
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelection("style", style);
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
