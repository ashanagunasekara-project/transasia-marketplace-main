"use client";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel9() {
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
    { name: "Deep Green", value: "#405658" },
    { name: "Light pink", value: "#F2CFBC" },
    { name: "Osam Gray", value: "#9D9D9D" },
  ];

  const sizes = ['10" x 12"', '15" x 18"', '25" x 30"', '32" x 40"'];

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
