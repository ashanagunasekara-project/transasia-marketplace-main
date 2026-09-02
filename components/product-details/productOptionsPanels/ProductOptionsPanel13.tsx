"use client";
import { useState } from "react";
import ProductOptionsPanelGift from "./ProductOptionsPanelGift";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel13() {
  const initialSelection = {
    color: "Black",
    style: "Headphones Only",
  };
  const [selected, setSelected] = useState({
    ...initialSelection,
  });

  const handleSelect = (type: string, value: string, disabled = false) => {
    if (disabled) return;
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const colorOptions = [
    {
      name: "Black",
      color: "#2B2B2B",
      src: "/assets/images/product-single/earphone/earphone-05.webp",
      className: "rbt-switcher--color-one",
      disabled: false,
    },
    {
      name: "Pink",
      color: "#cc999d",
      src: "/assets/images/product-single/earphone/earphone-02.webp",
      className: "rbt-switcher--color-two",
      disabled: false,
    },
    {
      name: "Dark",
      color: "#9C9B9E",
      src: "/assets/images/product-single/earphone/earphone-04.webp",
      className: "rbt-switcher--color-three",
      disabled: false,
    },
    {
      name: "White",
      color: "#F2EDE7",
      src: "/assets/images/product-single/earphone/earphone-03.webp",
      className: "rbt-switcher--color-four",
      disabled: false,
    },
    {
      name: "Gray",
      color: "#a09fa4",
      className: "rbt-switcher--color-five",
      disabled: true,
    },
  ];

  const styleOptions = [
    { name: "Headphones Only", disabled: false },
    { name: "Charging Stand", disabled: false },
    { name: "Headphones + Charging Stand", disabled: true },
  ];

  return (
    <>
      {/* Color Options */}
      <div className="rbt-info-wrapper d-flex mt--28">
        <div className="prd-info-section">
          <div className="prd-id-text">
            <p className="text-bold title">Color:</p>
            <div className="rbt-color-select-area">
              <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                {colorOptions.map((item) => (
                  <li
                    key={item.name}
                    className={selected.color === item.name ? "active" : ""}
                  >
                    <Tooltip content={item.name} placement="top">
                      <a
                        href="#"
                        className={`rbt-switcher--color tooltips ${
                          item.className
                        } ${
                          item.disabled ? "rbt-switcher--disable disabled" : ""
                        }`}
                        data-switcher-color={item.color}
                        data-src={item.src}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect("color", item.name, item.disabled);
                        }}
                      >
                        <div
                          className="rbt-color-circle"
                          style={{ backgroundColor: item.color }}
                        />
                      </a>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Style Options */}
      <div className="rbt-info-wrapper d-flex mt--24">
        <div className="product-styles-grp d-flex mt--0">
          <p className="text-bold title">Style :</p>
          <div className="content d-flex flex-wrap">
            {styleOptions.map((style) => (
              <a
                key={style.name}
                href="#"
                className={`rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn ${
                  style.disabled ? "disabled" : ""
                } ${selected.style === style.name ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect("style", style.name, style.disabled);
                }}
              >
                {style.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Component */}
      <ProductOptionsPanelGift />
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
