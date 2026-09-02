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
  const sourceProducts = (
    products && products.length ? products : electronicsCardData
  ) as Product[];
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

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: sourceProducts });
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
    sourceProducts,
  ]);

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
