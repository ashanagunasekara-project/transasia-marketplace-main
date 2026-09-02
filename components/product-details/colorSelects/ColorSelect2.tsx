"use client";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";

const colorOptions = [
  {
    id: 1,
    colorClass: "rbt-switcher--color-one",
    colorCode: "#2B2B2B",
    imageSrc: "/assets/images/product-single/earphone/earphone-05.webp",
    tooltip: "Black",
    disabled: false,
  },
  {
    id: 2,
    colorClass: "rbt-switcher--color-two",
    colorCode: "#cc999d",
    imageSrc: "/assets/images/product-single/earphone/earphone-02.webp",
    tooltip: "Pink",
    disabled: false,
  },
  {
    id: 3,
    colorClass: "rbt-switcher--color-three",
    colorCode: "#9C9B9E",
    imageSrc: "/assets/images/product-single/earphone/earphone-04.webp",
    tooltip: "Dark",
    disabled: false,
  },
  {
    id: 4,
    colorClass: "rbt-switcher--color-four",
    colorCode: "#F2EDE7",
    imageSrc: "/assets/images/product-single/earphone/earphone-03.webp",
    tooltip: "White",
    disabled: false,
  },
  {
    id: 5,
    colorClass: "rbt-switcher--color-five rbt-switcher--disable disabled",
    colorCode: "#a09fa4",
    imageSrc: "/assets/images/product-single/earphone/earphone-03.webp",
    tooltip: "Gray",
    disabled: true,
  },
];

export default function ColorSelect2() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with Pink as active

  const handleColorClick = (index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveIndex(index);
    }
  };
  return (
    <div className="product-styles-grp mt--0 flex-column rbt-gap--16">
      <p className="text-bold d-flex mb--0">
        Color:{" "}
        <span className="ml--4">{colorOptions[activeIndex].tooltip}</span>
      </p>
      <div className="rbt-color-select-area">
        <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
          {colorOptions.map((option, index) => (
            <li
              key={option.id}
              className={activeIndex === index ? "active" : ""}
            >
              <Tooltip content={option.tooltip} placement="top">
                <a
                  className={`rbt-switcher--color tooltips ${option.colorClass}`}
                  data-switcher-color={option.colorCode}
                  data-src={option.imageSrc}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleColorClick(index, option.disabled);
                  }}
                >
                  <div className="rbt-color-circle" />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
