"use client";

const categories = [
  { id: 1, name: "Smartphones & Mobile" },
  { id: 2, name: "Audio & Headphones" },
  { id: 3, name: "Laptops & Computers" },
  { id: 4, name: "Wearable Tech" },
  { id: 5, name: "Cameras & Drones" },
  { id: 6, name: "Gaming Accessories" },
];

import { Product } from "@/types";

export default function FilterByCategories({
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
      {categories.map((category) => {
        const isChecked = selectedItems.includes(category.name);
        const inputId = `category-checkbox-${category.id}`;

        return (
          <li
            key={category.id}
            className={`rbt-check-group ${isChecked ? "active" : ""}`}
          >
            <input
              id={inputId}
              type="checkbox"
              name="category"
              checked={isChecked}
              onChange={() => handleToggle(category.name)}
            />
            <label htmlFor={inputId}>
              <span className="rbt-label-content">
                <span className="rbt-label-text">{category.name}</span>
                <span className="rbt-label-count">
                  (
                  {getFilterCount(
                    (product) =>
                      !!(
                        product.filterCategory?.includes(category.name) ?? false
                      ),
                  )}
                  )
                </span>
              </span>
            </label>
          </li>
        );
      })}
    </>
  );
}
