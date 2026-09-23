"use client";

import { useEffect, useMemo, useReducer } from "react";
import { initialState, reducer } from "../reducer/filterReducer";
import { electronicsCardData } from "@/data/products/electronics";
import type { FilterState, Product } from "@/types";

type LoaderType = "pagination" | "button";

type UseShopStateOptions = {
  column: number;
  loaderType?: LoaderType | string;
  defaultTags?: string[];
  itemPerPage?: number;
  products?: Product[];
};

export function useShopState({
  column,
  loaderType = "pagination",
  defaultTags = [],
  itemPerPage = 0,
  products,
}: UseShopStateOptions) {
  const sourceProducts = useMemo(() => {
    if (products && products.length > 0) return products;
    if (products !== undefined) return products;
    return electronicsCardData;
  }, [products]);

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filtered: sourceProducts,
    sorted: sourceProducts,
    itemPerPage: itemPerPage
      ? itemPerPage
      : column >= 4
        ? column * 3
        : column * 5,
    tags: defaultTags,
  });

  const filterKey = useMemo(() => {
    return [
      state.brands.join(","),
      state.categories.join(","),
      state.colors.join(","),
      state.size,
      state.activeFilterOnSale ? "1" : "0",
      state.activeFilterInStock ? "1" : "0",
      state.services.join(","),
      state.ratings.join(","),
      `${state.price[0]}-${state.price[1]}`,
      state.tags.join(","),
      sourceProducts.length,
    ].join("|");
  }, [
    state.brands,
    state.categories,
    state.colors,
    state.size,
    state.activeFilterOnSale,
    state.activeFilterInStock,
    state.services,
    state.ratings,
    state.price,
    state.tags,
    sourceProducts.length,
  ]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: sourceProducts });
  }, [filterKey, sourceProducts]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortingOption, state.filtered]);

  const isLoadMore = loaderType === "button";

  const visibleProducts = useMemo(() => {
    if (isLoadMore) {
      return state.sorted.slice(0, state.currentPage * state.itemPerPage);
    }
    return state.sorted.slice(
      (state.currentPage - 1) * state.itemPerPage,
      state.currentPage * state.itemPerPage,
    );
  }, [state.sorted, state.currentPage, state.itemPerPage, isLoadMore]);

  function getFilterCount(filterFunction: (product: Product) => boolean) {
    return sourceProducts.filter((product) => filterFunction(product)).length;
  }

  return {
    state: state as FilterState,
    dispatch,
    visibleProducts,
    getFilterCount: getFilterCount as (
      fn: (product: Product) => boolean,
    ) => number,
    isLoadMore,
  };
}
