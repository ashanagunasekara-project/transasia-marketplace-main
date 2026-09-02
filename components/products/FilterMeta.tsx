"use client";

import { Dispatch } from "react";
import {
  clearAllFilters,
  setPriceRange,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleRating,
  toggleService,
  toggleTag,
} from "../reducer/filterActions";
import { FilterState, FilterAction } from "@/types";

export default function FilterMeta({
  state,
  dispatch,
}: {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
}) {
  const isDefaultPrice = state.price[0] === 0 && state.price[1] === 1000;

  const isFilterActive = () => {
    return (
      state.tags.length > 0 ||
      state.colors.length > 0 ||
      state.categories.length > 0 ||
      state.brands.length > 0 ||
      state.ratings.length > 0 ||
      state.services.length > 0 ||
      !isDefaultPrice
    );
  };

  if (!isFilterActive()) return null; // Don't render anything if all filters are reset

  return (
    <div
      className={`rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-sm rbt-tag-list-bg-var-one rbt-tag-list-rounded rbt-tag-cancel-var ${state.tags.length > 0 ? "mt--20" : ""}`}
    >
      {state.tags.map((t) => (
        <a
          className="rbt-text-capitalize"
          href="#"
          key={t}
          onClick={(e) => {
            e.preventDefault();
            toggleTag(t, dispatch, state.tags);
          }}
        >
          {t}
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      {state.colors.map((color) => (
        <a
          className="rbt-text-capitalize"
          href="#"
          key={color}
          onClick={(e) => {
            e.preventDefault();
            toggleColor(color, dispatch, state.colors);
          }}
        >
          {color}
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      {state.categories.map((category) => (
        <a
          className="rbt-text-capitalize"
          href="#"
          key={category}
          onClick={(e) => {
            e.preventDefault();
            toggleCategory(category, dispatch, state.categories);
          }}
        >
          {category}
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      {state.brands.map((brand) => (
        <a
          className="rbt-text-capitalize"
          href="#"
          key={brand}
          onClick={(e) => {
            e.preventDefault();
            toggleBrand(brand, dispatch, state.brands);
          }}
        >
          {brand}
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      {state.ratings.map((rating) => (
        <a
          href="#"
          className="rbt-text-capitalize"
          key={rating}
          onClick={(e) => {
            e.preventDefault();
            toggleRating(rating, dispatch, state.ratings);
          }}
        >
          {rating} star up
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      {!isDefaultPrice && (
        <a
          href="#"
          className="rbt-text-capitalize"
          onClick={(e) => {
            e.preventDefault();
            setPriceRange([20, 300], dispatch);
          }}
        >
          ${state.price[0]} to ${state.price[1]}
          <i className="fa-solid fa-xmark" />
        </a>
      )}

      {state.services.map((service) => (
        <a
          href="#"
          className="rbt-text-capitalize"
          key={service}
          onClick={(e) => {
            e.preventDefault();
            toggleService(service, dispatch, state.services);
          }}
        >
          {service}
          <i className="fa-solid fa-xmark" />
        </a>
      ))}

      <a
        href="#"
        className="text-decoration-underline rbt-text-capitalize"
        onClick={(e) => {
          e.preventDefault();
          clearAllFilters(dispatch);
        }}
      >
        Clear All
      </a>
    </div>
  );
}
