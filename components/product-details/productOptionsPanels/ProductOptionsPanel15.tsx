"use client";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel15() {
  const initialSelection = {
    color: "",
    size: "",
    style: "",
  };
  const [selected, setSelected] = useState({
    ...initialSelection,
  });

  const handleSelect = (type: string, value: string) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const colors = [
    { name: "Black", code: "#2B2B2B" },
    { name: "Pink", code: "#cc999d" },
    { name: "Dark", code: "#9C9B9E" },
    { name: "White", code: "#F2EDE7" },
    { name: "Gray", code: "#a09fa4" },
  ];

  const sizes = ["Extra Large", "Large", "Medium", "Small", "Extra Small"];

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
                    <li key={color.name}>
                      <Tooltip content={color.name} placement="top">
                        <a
                          href="#"
                          className={`rbt-switcher--color tooltips ${
                            selected.color === color.name ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelect("color", color.name);
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

        {/* Size (dropdown) */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Size:{" "}
                <span className="rbt-text">
                  {selected.size || "No Selection"}
                </span>
              </p>
              <div className="rbt-modern-select single-prd-select height-36 rbt-rounded-styled rbt-modern-select-md-width">
                <div className="dropdown bootstrap-select rbt-switcher-root rbt-select-activation show">
                  <button
                    type="button"
                    className="btn dropdown-toggle bs-placeholder btn-light show"
                    data-bs-toggle="dropdown"
                  >
                    <div className="filter-option-inner-inner">
                      {selected.size || "Select"}
                    </div>
                  </button>
                  <div className="dropdown-menu">
                    <div className="inner show">
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      >
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
                        data-value={style.toLowerCase()}
                        className={`rbt-btn rbt-btn-border rbt-btn-xs rbt-store-button ${
                          selected.style === style ? "active" : ""
                        }`}
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
