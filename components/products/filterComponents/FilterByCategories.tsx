"use client";

import { useEffect, useState, useMemo } from "react";
import { Product } from "@/types";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import { fetchStorefrontCategories } from "@/lib/api";

type CategoryItem = {
  id: string | number;
  name: string;
  slug?: string;
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
  const [apiCategories, setApiCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      try {
        const live = await fetchStorefrontCategories({ onlyParents: true });
        if (isMounted && live && live.length > 0) {
          setApiCategories(
            live.map((c: any) => ({
              id: c.id,
              name: c.title || c.name,
              slug: c.slug,
            }))
          );
        }
      } catch {
        // Fallback to DOCUMENTATION_CATEGORIES
      }
    }
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayCategories = useMemo(() => {
    const map = new Map<string, CategoryItem>();

    // 1. If API categories returned, add them first
    if (apiCategories.length > 0) {
      for (const cat of apiCategories) {
        if (cat.name && !map.has(cat.name.toLowerCase().trim())) {
          map.set(cat.name.toLowerCase().trim(), cat);
        }
      }
    }

    // 2. Add documentation categories (core TransAsia categories)
    for (const doc of DOCUMENTATION_CATEGORIES) {
      const norm = doc.title.toLowerCase().trim();
      if (!map.has(norm)) {
        map.set(norm, {
          id: doc.id,
          name: doc.title,
          slug: doc.slug,
        });
      }
    }

    // 3. Add common electronics categories that might exist on products
    const standardCategories = [
      "Computer Accessories",
      "Electronics & Gadgets",
      "Audio & Sound",
      "Photography & Outdoor",
      "Camera & Photo",
      "Watch & Music",
      "Home Appliances",
    ];
    for (const name of standardCategories) {
      const norm = name.toLowerCase().trim();
      if (!map.has(norm)) {
        map.set(norm, {
          id: `cat-${norm.replace(/[^a-z0-9]+/g, "-")}`,
          name,
        });
      }
    }

    return Array.from(map.values());
  }, [apiCategories]);

  const handleToggle = (name: string) => {
    onChange(name);
  };

  const getCategoryCount = (categoryName: string) => {
    return getFilterCount((product) => {
      const normCat = categoryName.toLowerCase().trim();
      const normSlug = normCat.replace(/[^a-z0-9]+/g, "-");

      const prodCats = [
        ...(product.filterCategory || []),
        ...(product.category || []),
      ].map((c) => String(c).toLowerCase().trim());

      // Direct or slug match
      if (
        prodCats.some(
          (c) =>
            c === normCat ||
            c === normSlug ||
            c.includes(normCat) ||
            normCat.includes(c)
        )
      ) {
        return true;
      }

      // Hierarchy match: if parent documentation category
      const doc = DOCUMENTATION_CATEGORIES.find(
        (dc) => dc.title.toLowerCase() === normCat || dc.slug === normSlug
      );
      if (doc && doc.subcategories) {
        return doc.subcategories.some((sub) => {
          const subLower = sub.title.toLowerCase();
          const subSlug = sub.slug;
          return prodCats.some(
            (c) => c === subLower || c === subSlug || c.includes(subLower)
          );
        });
      }

      return false;
    });
  };

  return (
    <>
      {displayCategories.map((category) => {
        const isChecked = selectedItems.some((item) => {
          const normItem = item.toLowerCase().trim();
          const normCat = category.name.toLowerCase().trim();
          return (
            normItem === normCat ||
            normItem === normCat.replace(/[^a-z0-9]+/g, "-") ||
            normCat === normItem.replace(/[^a-z0-9]+/g, "-")
          );
        });
        const inputId = `category-checkbox-${category.id}`;
        const count = getCategoryCount(category.name);

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
                <span className="rbt-label-count">({count})</span>
              </span>
            </label>
          </li>
        );
      })}
    </>
  );
}
