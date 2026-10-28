"use client";
import { Dispatch } from "react";
import {
  setPriceRange,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleRating,
  toggleService,
} from "../reducer/filterActions";
import FilterByCategories from "./filterComponents/FilterByCategories";
import FilterByReview from "./filterComponents/FilterByReview";
import FilterByPrice from "./filterComponents/FilterByPrice";
import FilterByColor from "./filterComponents/FilterByColor";
import FilterByBrand from "./filterComponents/FilterByBrand";
import FilterByService from "./filterComponents/FilterByService";
import { FilterState, FilterAction } from "@/types";
import { Product } from "@/types";
export default function SidebarScrollable({ state, dispatch, getFilterCount }: { state: FilterState; dispatch: Dispatch<FilterAction>; getFilterCount: (fn: (product: Product) => boolean) => number }) {
  return (
    <div className="rbt-sidebar-bottom">
      {/* Start Widget Area  */}
      <div className="rbt-single-widget rbt-widget-categories">
        <div className="bt-single-widget-inner">
          <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
            Categories
          </h4>
          <div className="rbt-scroll-content">
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
      {/* End Widget Area  */}
      {/* Start Widget Area  */}
      <div className="rbt-single-widget rbt-widget-categories">
        <div className="bt-single-widget-inner">
          <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
            Customer Reviews
          </h4>
          <div className="rbt-scroll-content">
            <ul className="rbt-sidebar-list-wrapper rbt-categories-review-list">
              <FilterByReview
                selectedItems={state.ratings}
                getFilterCount={getFilterCount}
                onChange={(value) =>
                  toggleRating(value, dispatch, state.ratings)
                }
              />
            </ul>
          </div>
        </div>
      </div>
      {/* End Widget Area  */}
      {/* Start Widget Area  */}
      <div className="rbt-single-widget rbt-widget-categories">
        <div className="bt-single-widget-inner">
          <h4 className="rbt-widget-title rbt-widget-title-without-border mb--16">
            Filter by price
          </h4>
          <div className="rbt-scroll-content">
            <FilterByPrice
              getFilterCount={getFilterCount}
              priceRange={state.price}
              onChange={(value) => setPriceRange(value, dispatch)}
            />
          </div>
        </div>
      </div>
      {/* End Widget Area  */}
      {/* Temporarily hidden: Filter by color, Brand, Promotion & Services */}
      {/*
      <div className="rbt-single-widget rbt-widget-categories">
        ...
      </div>
      */}
    </div>
  );
}
