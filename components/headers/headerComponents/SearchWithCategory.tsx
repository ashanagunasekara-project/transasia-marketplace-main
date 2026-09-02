"use client";
import TypeAnimation from "@/components/common/ui/TypeAnimation";
import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import { useState } from "react";
const categories = [
  "All Categories",
  "Fashion",
  "Furniture",
  "Electronics",
  "Beauty",
];

export default function SearchWithCategory({
  parentClass = "rbt-search-with-category uni-header-swc-one uni-header-swc-md",
}) {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <div className={parentClass}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="rbt-inner-search-field border-0">
          <div className="rbt-search-input-section has-left-catagory-section rbt-inner-search-label-animate-activation">
            <div className="filter-select rbt-modern-select search-by-category">
              <SearchableDropdown
                options={categories}
                selected={activeCategory}
                onChange={setActiveCategory}
                placeholder="All Categories"
                searchPlaceholder="Search Categories"
                menuMinWidth="220px"
              />
            </div>

            <input type="text" placeholder="" />
            <span className="cd-headline clip is-full-width">
              <TypeAnimation
                strings={[
                  "Search for something...",
                  "Looking for something specific?",
                  "Explore what you need...",
                ]}
              />
            </span>
          </div>
          <button className="rbt-round-btn search-btn" type="submit">
            <i className="fa-sharp fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </div>
  );
}
