"use client";

import TypeAnimation from "@/components/common/ui/TypeAnimation";
import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import { fetchStorefrontCategories } from "@/lib/api";
import { Category } from "@/types/categories";

const FALLBACK_CATEGORY_OPTIONS = [
  "All Categories",
  ...DOCUMENTATION_CATEGORIES.map((cat) => cat.title),
];

export default function SearchWithCategory({
  parentClass = "rbt-search-with-category uni-header-swc-one uni-header-swc-md",
}: {
  parentClass?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>(
    FALLBACK_CATEGORY_OPTIONS
  );
  const [categoryMap, setCategoryMap] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    DOCUMENTATION_CATEGORIES.forEach((c) => {
      map[c.title] = c.slug;
    });
    return map;
  });

  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Fetch real categories dynamically on client mount
  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      try {
        const live = await fetchStorefrontCategories({ onlyParents: true });
        if (isMounted && live.length > 0) {
          const titles = ["All Categories", ...live.map((c) => c.title)];
          const map: Record<string, string> = {};
          live.forEach((c) => {
            const slug =
              c.slug ||
              c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            map[c.title] = slug;
          });
          setCategories(titles);
          setCategoryMap(map);
        }
      } catch (err) {
        console.error("Failed to load header categories:", err);
      }
    }
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  // Synchronize with URL searchParams if present
  useEffect(() => {
    const query = searchParams?.get("search") || searchParams?.get("query");
    if (query !== null && query !== undefined) {
      setSearchTerm(query);
    }

    const catSlug = searchParams?.get("category");
    if (catSlug) {
      const normalized = catSlug.toLowerCase().trim();
      const foundEntry = Object.entries(categoryMap).find(
        ([title, slug]) =>
          slug.toLowerCase() === normalized ||
          title.toLowerCase() === normalized
      );
      if (foundEntry) {
        setActiveCategory(foundEntry[0]);
      }
    } else if (searchParams && !catSlug) {
      setActiveCategory("All Categories");
    }
  }, [searchParams, categoryMap]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    const trimmed = searchTerm.trim();
    if (trimmed) {
      params.set("search", trimmed);
    }

    if (activeCategory && activeCategory !== "All Categories") {
      const slug =
        categoryMap[activeCategory] ||
        activeCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      params.set("category", slug);
    }

    const qs = params.toString();
    router.push(`/shop${qs ? `?${qs}` : ""}`);
  };

  const isPlaceholderHidden = isFocused || searchTerm.length > 0;

  return (
    <div className={parentClass}>
      <form onSubmit={handleSubmit}>
        <div className="rbt-inner-search-field border-0">
          <div className="rbt-search-input-section has-left-catagory-section rbt-inner-search-label-animate-activation position-relative">
            <div className="filter-select rbt-modern-select search-by-category">
              <SearchableDropdown
                options={categories}
                selected={activeCategory}
                onChange={setActiveCategory}
                placeholder="All Categories"
                searchPlaceholder="Search Categories"
                menuMinWidth="230px"
              />
            </div>

            <input
              type="text"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              aria-label="Search products"
            />

            {/* Clear Button */}
            {searchTerm.length > 0 && (
              <button
                type="button"
                className="rbt-search-clear-btn"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search input"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}

            {/* Animated Placeholder Headline */}
            <span
              className={`cd-headline clip is-full-width ${isPlaceholderHidden ? "is-hidden" : ""
                }`}
              style={{
                opacity: isPlaceholderHidden ? 0 : 1,
                visibility: isPlaceholderHidden ? "hidden" : "visible",
                transition: "opacity 0.25s ease, visibility 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <TypeAnimation
                strings={[
                  "Search for electronics",
                  "Looking for...",
                  "Explore...",
                ]}
              />
            </span>
          </div>
          <button
            className="rbt-round-btn search-btn"
            type="submit"
            aria-label="Submit search"
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>

      <style jsx>{`
        .rbt-search-clear-btn {
          position: absolute;
          right: 64px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: color 0.2s ease;
        }
        .rbt-search-clear-btn:hover {
          color: #1e293b;
        }
      `}</style>
    </div>
  );
}

