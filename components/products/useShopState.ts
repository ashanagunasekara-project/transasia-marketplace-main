"use client";

import { useEffect, useMemo, useReducer } from "react";
import { useSearchParams } from "next/navigation";
import { initialState, reducer } from "../reducer/filterReducer";
import { electronicsCardData } from "@/data/products/electronics";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import type { FilterState, Product } from "@/types";

type LoaderType = "pagination" | "button";

type UseShopStateOptions = {
  column: number;
  loaderType?: LoaderType | string;
  defaultTags?: string[];
  itemPerPage?: number;
  products?: Product[];
};

function resolveCategoryTitle(slugOrTitle: string): string {
  if (!slugOrTitle) return slugOrTitle;
  const normalized = slugOrTitle.toLowerCase().trim();
  for (const parent of DOCUMENTATION_CATEGORIES) {
    if (
      parent.slug.toLowerCase() === normalized ||
      parent.title.toLowerCase() === normalized
    ) {
      return parent.title;
    }
    for (const sub of parent.subcategories) {
      if (
        sub.slug.toLowerCase() === normalized ||
        sub.title.toLowerCase() === normalized
      ) {
        return sub.title;
      }
    }
  }
  return slugOrTitle
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function useShopState({
  column,
  loaderType = "pagination",
  defaultTags = [],
  itemPerPage = 0,
  products,
}: UseShopStateOptions) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category");
  const subCategoryParam = searchParams?.get("subCategory");
  const brandParam = searchParams?.get("brand");
  const tagParam = searchParams?.get("tag");
  const searchParam = searchParams?.get("search") || searchParams?.get("query") || "";

  const sourceProducts = useMemo(() => {
    if (products && products.length > 0) return products;
    if (products !== undefined) return products;
    return electronicsCardData;
  }, [products]);

  const initialCategories = useMemo(() => {
    if (subCategoryParam) return [resolveCategoryTitle(subCategoryParam)];
    if (categoryParam) return [resolveCategoryTitle(categoryParam)];
    return [];
  }, [categoryParam, subCategoryParam]);

  const initialBrands = useMemo(() => {
    if (brandParam) return [brandParam];
    return [];
  }, [brandParam]);

  const initialTags = useMemo(() => {
    if (tagParam) return [tagParam];
    return defaultTags;
  }, [tagParam, defaultTags]);

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filtered: sourceProducts,
    sorted: sourceProducts,
    categories: initialCategories,
    brands: initialBrands,
    tags: initialTags,
    search: searchParam,
    itemPerPage: itemPerPage
      ? itemPerPage
      : column >= 4
        ? column * 3
        : column * 5,
  });

  // Synchronize state when URL query parameters update
  useEffect(() => {
    if (subCategoryParam) {
      const resolved = resolveCategoryTitle(subCategoryParam);
      dispatch({ type: "SET_CATEGORIES", payload: [resolved] });
    } else if (categoryParam) {
      const resolved = resolveCategoryTitle(categoryParam);
      dispatch({ type: "SET_CATEGORIES", payload: [resolved] });
    }
  }, [categoryParam, subCategoryParam]);

  useEffect(() => {
    if (brandParam) {
      dispatch({ type: "SET_BRANDS", payload: [brandParam] });
    }
  }, [brandParam]);

  useEffect(() => {
    if (tagParam) {
      dispatch({ type: "SET_TAGS", payload: [tagParam] });
    }
  }, [tagParam]);

  useEffect(() => {
    dispatch({ type: "SET_SEARCH", payload: searchParam });
  }, [searchParam]);

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
      state.search,
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
    state.search,
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
