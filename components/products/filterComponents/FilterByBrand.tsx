"use client";
import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Acme",
    count: 96,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-01.webp",
  },
  {
    id: 2,
    name: "Aurarts",
    count: 12,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-02.webp",
  },
  {
    id: 3,
    name: "Hamofy",
    count: 67,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-03.webp",
  },
  {
    id: 4,
    name: "Starwalks",
    count: 30,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-04.webp",
  },
  {
    id: 5,
    name: "Massive",
    count: 89,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-05.webp",
  },
  {
    id: 6,
    name: "Superga",
    count: 60,
    image: "/assets/images/sidebar/catagory-brand/catagory-brand-img-06.webp",
  },
];

import { Product } from "@/types";

export default function FilterByBrand({
  selectedItems,
  onChange,
  getFilterCount,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const handleToggle = (name: string) => {
    onChange(name);
  };

  return (
    <>
      {brands.map((brand) => {
        const isActive = selectedItems.includes(brand.name);
        const inputId = `brand-checkbox-${brand.id}`;

        return (
          <li
            key={brand.id}
            className={`rbt-check-group ${isActive ? "active" : ""}`}
          >
            <input
              id={inputId}
              type="checkbox"
              name="brand"
              checked={isActive}
              onChange={() => handleToggle(brand.name)}
            />
            <label htmlFor={inputId}>
              <span className="rbt-label-content">
                <span className="rbt-label-img">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    width={48}
                    height={49}
                    loading="lazy"
                  />
                </span>
                <span className="rbt-label-text">{brand.name}</span>
              </span>
              <span className="rbt-label-count">
                (
                {getFilterCount(
                  (product) =>
                    !!(product.filterBrands?.includes(brand.name) ?? false),
                )}
                )
              </span>
            </label>
          </li>
        );
      })}
    </>
  );
}
