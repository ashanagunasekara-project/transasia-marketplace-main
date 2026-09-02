"use client";
import { useState } from "react";
import DropdownSelect from "@/components/common/select/DropdownSelect";

export default function SerchWithCategory2() {
  const categories = [
    "All Categories",
    "Fashion",
    "Furniture",
    "Electronics",
    "Beauty",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="rbt-header-content d-none d-xl-block">
      <div className="header-info">
        <div className="rbt-search-with-category uni-header-swc-one uni-header-swc-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="rbt-inner-search-field border-0">
              <div className="rbt-search-input-section has-right-catagory-section rbt-inner-search-label-animate-activation">
                <div className="filter-select rbt-modern-select search-by-category">
                  <DropdownSelect
                    options={categories}
                    selected={selectedCategory}
                    onChange={setSelectedCategory}
                  />
                </div>
                <input type="text" />
                <span className="cd-headline clip is-full-width">
                  <span className="cd-words-wrapper">
                    <b className="is-visible">Search for something...</b>
                    <b className="is-hidden">Looking for something specific?</b>
                    <b className="is-hidden">Explore what you need...</b>
                  </span>
                </span>
              </div>
              <button className="rbt-round-btn search-btn" type="submit">
                <i className="fa-sharp fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
