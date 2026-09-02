"use client";

import type { Dispatch } from "react";
import type { FilterState, FilterAction, Product } from "@/types";
import {
  setPriceRange,
  toggleBrand,
  toggleCategory,
  toggleColor,
} from "../reducer/filterActions";

import FilterByCategories from "./filterComponents/FilterByCategories";
import FilterByPrice from "./filterComponents/FilterByPrice";
import FilterByColor from "./filterComponents/FilterByColor";
import FilterByBrand from "./filterComponents/FilterByBrand";

type Props = {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  getFilterCount: (fn: (product: Product) => boolean) => number;
  isOpen: boolean;
  position?: "left" | "right";
};

export default function HorizontalFilterPanel({
  isOpen = false,
  position = "left",
  state,
  dispatch,
  getFilterCount,
}: Props) {
  const startClass =
    position === "right" ? "start-from-right" : "start-from-left";
  const innerPaddingClass = position === "right" ? "pl--24" : "pr--24";

  return (
    <div
      className={`rbt-filter-content rbt-filter-content-horizontal rbt-filter-collapse-area ${startClass} ${isOpen ? "show" : ""}`}
    >
      <div className={`inner  ${innerPaddingClass}`}>
        {/* Categories */}
        <div className="rbt-single-widget rbt-widget-categories mt--24">
          <div className="bt-single-widget-inner">
            <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
              Categories
            </h4>
            <div className="rbt-widget-content">
              <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check">
                <FilterByCategories
                  selectedItems={state.categories}
                  getFilterCount={getFilterCount}
                  onChange={(value) =>
                    toggleCategory(value, dispatch, state.categories)
                  }
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Filter by price */}
        <div className="rbt-single-widget rbt-widget-categories mt--24">
          <div className="bt-single-widget-inner">
            <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
              Filter by price
            </h4>
            <div className="rbt-widget-content">
              <FilterByPrice
                getFilterCount={getFilterCount}
                priceRange={state.price}
                onChange={(value) => setPriceRange(value, dispatch)}
              />
            </div>
          </div>
        </div>

        {/* Filter by color */}
        <div className="rbt-single-widget rbt-widget-categories mt--24">
          <div className="bt-single-widget-inner">
            <h4 className="rbt-widget-title rbt-widget-title-without-border pb--0">
              Filter by color
            </h4>
            <div className="rbt-inner-search-field border-0 pt--16 pb--16">
              <div className="rbt-search-input-section rbt-sm-search-section">
                <input
                  className="rbt-filter-search-field"
                  type="text"
                  placeholder="Search and Select Product"
                />
                <span className="search-btn search-btn-dark bg-transparent rbt-text-color-gray-400">
                  <i className="fa-sharp fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </div>
            <div className="rbt-widget-content rbt-scroll-content">
              <FilterByColor
                getFilterCount={getFilterCount}
                selectedItems={state.colors}
                onChange={(value) => toggleColor(value, dispatch, state.colors)}
              />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="rbt-single-widget rbt-widget-categories mt--24">
          <div className="bt-single-widget-inner">
            <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
              Brand
            </h4>
            <div className="rbt-widget-content">
              <ul className="rbt-sidebar-list-wrapper rbt-categories-list-check rbt-categories-brand-list-check">
                <FilterByBrand
                  getFilterCount={getFilterCount}
                  selectedItems={state.brands}
                  onChange={(value) =>
                    toggleBrand(value, dispatch, state.brands)
                  }
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
