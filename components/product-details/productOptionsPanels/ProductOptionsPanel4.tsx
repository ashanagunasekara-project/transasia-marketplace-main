"use client";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

export default function ProductOptionsPanel4() {
  const initialSelection = { color: "", shade: "" };
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
    { name: "Royel Red", value: "#AB1423" },
    { name: "Purple Pink", value: "#863273" },
    { name: "Gray Purple", value: "#985C60" },
    { name: "Deep Brown", value: "#844347" },
    { name: "Light Pink", value: "#C86481" },
    { name: "Berry", value: "#800080" },
    { name: "Magenta", value: "#FF00FF" },
    { name: "Maroon", value: "#800000" },
    { name: "Mauve", value: "#E0B0FF" },
    { name: "Rose", value: "#FFA07A" },
    { name: "Coral", value: "#FF7F50" },
    { name: "Rust", value: "#CD5C5C" },
    { name: "Tangerine", value: "#FF8C69" },
  ];

  const shades = ["Silky Purple", "Lipstick Snob", "Evocative Purple"];

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

        {/* Shade */}
        <div className="rbt-info-wrapper d-flex mt--24">
          <div className="prd-info-section">
            <div className="prd-id-text">
              <p className="text-bold rbt-variation-label">
                Shade:{" "}
                <span className="rbt-text">
                  {selectedOptions.shade || "No Selection"}
                </span>
              </p>
              <div className="rbt-modern-select single-prd-select height-36 rbt-rounded-styled rbt-modern-select-md-width">
                <div className="dropdown bootstrap-select rbt-switcher-root rbt-select-activation">
                  <button
                    type="button"
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">
                          {selectedOptions.shade || "Select Shade"}
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="dropdown-menu">
                    <div className="inner show" role="listbox" tabIndex={-1}>
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      >
                        {shades.map((shade) => (
                          <li key={shade}>
                            <a
                              href="#"
                              role="option"
                              aria-selected={selectedOptions.shade === shade}
                              className={`dropdown-item ${
                                selectedOptions.shade === shade
                                  ? "active selected"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSelection("shade", shade);
                              }}
                            >
                              <span className="text">{shade}</span>
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
