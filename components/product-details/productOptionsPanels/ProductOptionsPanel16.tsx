"use client";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function ProductOptionsPanel16() {
  const initialSelection = {
    color: "Pink",
    size: "Extra Large",
    style: "Headphones Only",
  };
  const [selected, setSelected] = useState({
    ...initialSelection,
  });

  const handleSelect = (type: string, value: string) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const colors = [
    {
      name: "Black",
      code: "#2B2B2B",
      src: "/assets/images/product-single/earphone/earphone-05.webp",
      class: "rbt-switcher--color-one",
    },
    {
      name: "Pink",
      code: "#cc999d",
      src: "/assets/images/product-single/earphone/earphone-02.webp",
      class: "rbt-switcher--color-two",
    },
    {
      name: "Dark",
      code: "#9C9B9E",
      src: "/assets/images/product-single/earphone/earphone-04.webp",
      class: "rbt-switcher--color-three",
    },
    {
      name: "White",
      code: "#F2EDE7",
      src: "/assets/images/product-single/earphone/earphone-03.webp",
      class: "rbt-switcher--color-four",
    },
    {
      name: "Gray",
      code: "#a09fa4",
      src: "",
      class: "rbt-switcher--color-five disabled",
    },
  ];

  const sizes = ["Extra Large", "Large", "Medium", "Small", "Extra Small"];

  const styles = [
    { label: "Headphones Only", disabled: false },
    { label: "Charging Stand", disabled: false },
    { label: "Headphones + Charging Stand", disabled: true },
  ];

  return (
    <>
      {/* Color Picker */}
      <div className="rbt-info-wrapper d-flex mt--24">
        <div className="prd-info-section">
          <div className="prd-id-text">
            <p className="text-bold">Color:</p>
            <div className="rbt-color-select-area">
              <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                {colors.map((color) => (
                  <li
                    key={color.name}
                    className={` ${
                      selected.color === color.name ? "active" : ""
                    }`}
                  >
                    <Tooltip content={color.name} placement="top">
                      <a
                        className={`rbt-switcher--color tooltips ${color.class}`}
                        data-switcher-color={color.code}
                        data-src={color.src}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (!color.class.includes("disabled")) {
                            handleSelect("color", color.name);
                          }
                        }}
                      >
                        <div
                          className="rbt-color-circle"
                          style={{ backgroundColor: color.code }}
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

      {/* Size Dropdown */}
      <div className="rbt-info-wrapper d-flex justify-content-between mt--24 flex-wrap">
        <div className="product-styles-grp d-flex mt--0">
          <div className="prd-id-text">
            <p className="text-bold title">Size :</p>
            <div className="content d-flex flex-wrap">
              <div className="rbt-modern-select single-prd-select height-36 rbt-rounded-styled rbt-modern-select-md-width">
                <div className="dropdown bootstrap-select rbt-select-activation show">
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                  >
                    <div className="filter-option-inner-inner">
                      {selected.size}
                    </div>
                  </button>
                  <div className="dropdown-menu">
                    <div className="inner show">
                      <ul className="dropdown-menu inner show">
                        {sizes.map((size) => (
                          <li key={size}>
                            <a
                              role="option"
                              aria-selected={selected.size === size}
                              className={`dropdown-item ${
                                selected.size === size ? "active selected" : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelect("size", size);
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
        <ModalTriggerButton
          openModalName="quickViewSizeGuideModal"
          className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
          type="button"
        >
          <i className="fa-regular fa-pen-ruler mr--4" /> Size Guide
        </ModalTriggerButton>
      </div>

      {/* Style Buttons */}
      <div className="rbt-info-wrapper d-flex mt--24">
        <div className="product-styles-grp d-flex mt--0">
          <p className="text-bold title">Style :</p>
          <div className="content d-flex flex-wrap">
            {styles.map((style) => (
              <a
                key={style.label}
                className={`rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn ${
                  selected.style === style.label ? "active" : ""
                } ${style.disabled ? "disabled" : ""}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!style.disabled) handleSelect("style", style.label);
                }}
              >
                {style.label}
              </a>
            ))}
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
