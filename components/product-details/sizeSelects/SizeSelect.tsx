"use client";
import { useState } from "react";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function SizeSelect() {
  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "2xl", label: "2XL" },
    { id: "3xl", label: "3XL" },
    { id: "4xl", label: "4XL" },
    { id: "5xl", label: "5XL", disabled: true },
    { id: "6xl", label: "6XL", disabled: true },
  ];

  const [selectedSize, setSelectedSize] = useState("XL");

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  return (
    <div className="product-styles-grp mt--0 d-block">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-bold d-flex mb--0">
          Size: <span className="ml--4">{selectedSize}</span>
        </p>
        <ModalTriggerButton
          openModalName="quickViewSizeGuideModal"
          className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
          type="button"
        >
          <i className="fa-regular fa-pen-ruler mr--4" />
          Size Guide
        </ModalTriggerButton>
      </div>
      <form
        className="rbt-variant-picker-values d-flex flex-wrap mt--16 rbt-gap--12"
        onSubmit={(e) => e.preventDefault()}
      >
        {sizes.map(({ id, label, disabled }) => (
          <div className="rbt-single-size-btn" key={id}>
            <input
              type="radio"
              name="size1"
              id={`values-${id}`}
              value={label}
              checked={selectedSize === label}
              onChange={() => handleSizeChange(label)}
              disabled={disabled}
            />
            <label
              htmlFor={`values-${id}`}
              className="rbt-style-text rbt-size-btn"
            >
              {label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
