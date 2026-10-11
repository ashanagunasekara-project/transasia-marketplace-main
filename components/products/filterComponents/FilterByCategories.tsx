"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import { fetchStorefrontCategories } from "@/lib/api";

type CategoryItem = {
  id: string | number;
  name: string;
};

export default function FilterByCategories({
  selectedItems,
  onChange,
  getFilterCount,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const [categories, setCategories] = useState<CategoryItem[]>(() =>
    DOCUMENTATION_CATEGORIES.map((c) => ({
      id: c.id,
      name: c.title,
    }))
  );

  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      try {
        const live = await fetchStorefrontCategories({ onlyParents: true });
        if (isMounted && live && live.length > 0) {
          setCategories(
            live.map((c: any) => ({
              id: c.id,
              name: c.title || c.name,
            }))
          );
        }
      } catch (err) {
        // Fallback to DOCUMENTATION_CATEGORIES remains
      }
    }
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

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
