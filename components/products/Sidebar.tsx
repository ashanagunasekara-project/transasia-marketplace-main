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
export default function Sidebar({
  state,
  dispatch,
  getFilterCount,
}: {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  return (
    <div className="rbt-sidebar-bottom">
      {/* Start Widget Area  */}
      <div className="rbt-single-widget rbt-widget-categories">
        <div className="bt-single-widget-inner">
          <h4 className="rbt-widget-title rbt-widget-title-without-border">
            <a
              data-bs-toggle="collapse"
              href="#rbt-collapse-3"
              role="button"
              aria-expanded="false"
              aria-controls="rbt-collapse-3"
            >
              Categories
              <span className="icon">
                <i className="fa-regular fa-chevron-down" />
              </span>
            </a>
          </h4>
          <div className="collapse show" id="rbt-collapse-3">
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
          <h4 className="rbt-widget-title rbt-widget-title-without-border">
            <a
              data-bs-toggle="collapse"
              href="#rbt-collapse-6"
              role="button"
              aria-expanded="false"
              aria-controls="rbt-collapse-6"
            >
              Customer Reviews
              <span className="icon">
                <i className="fa-regular fa-chevron-down" />
              </span>
            </a>
          </h4>
          <div className="collapse show" id="rbt-collapse-6">
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
          <h4 className="rbt-widget-title rbt-widget-title-without-border">
            <a
              data-bs-toggle="collapse"
              href="#rbt-collapse-7"
              role="button"
              aria-expanded="false"
              aria-controls="rbt-collapse-7"
            >
              Filter by price
              <span className="icon">
                <i className="fa-regular fa-chevron-down" />
              </span>
            </a>
          </h4>
          <div className="collapse show" id="rbt-collapse-7">
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
