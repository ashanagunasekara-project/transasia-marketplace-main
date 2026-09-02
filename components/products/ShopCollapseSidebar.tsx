"use client";

import { useMemo, useState } from "react";
import {
  clearAllFilters,
  setCurrentPage,
  setItemPerPage,
  setSorting,
  toggleTag,
} from "../reducer/filterActions";
import ProductCard9 from "../product-cards/ProductCard9";
import FilterByTag from "./filterComponents/FilterByTag";
import DropdownSelect from "../common/select/DropdownSelect";
import ShopPagination from "./ShopPagination";
import FilterMeta from "./FilterMeta";
import LayoutHandler from "./LayoutHandler";
import HorizontalFilterPanel from "./HorizontalFilterPanel";
import FilterToggle from "./FilterToggle";
import { useShopState } from "./useShopState";

type Props = {
  loaderType?: "pagination" | "button";
  column?: number;
  containerFull?: boolean;
  defaultFilterTag?: string[];
  itemPerPage?: number;
  showBestSellerBadge?: boolean;
  countdownStyle?: "default" | "compact";
  showQuantityBadge?: boolean;
  filterPosition?: "left" | "right";
};

export default function ShopCollapseSidebar({
  loaderType = "pagination",
  column = 3,
  containerFull = false,
  defaultFilterTag = [],
  itemPerPage = 0,
  showBestSellerBadge = false,
  countdownStyle = "default",
  showQuantityBadge = false,
  filterPosition = "left",
}: Props) {
  const { state, dispatch, visibleProducts, getFilterCount, isLoadMore } =
    useShopState({
      column,
      loaderType,
      defaultTags: defaultFilterTag,
      itemPerPage,
    });
  const [filterOpen, setFilterOpen] = useState(false);
  const hasNoFilteredItems = state.sorted.length === 0;
  const hasMultiplePages = state.sorted.length > state.itemPerPage;
  const fromResult = hasNoFilteredItems
    ? 0
    : (state.currentPage - 1) * state.itemPerPage + 1;
  const toResult = hasNoFilteredItems
    ? 0
    : Math.min(state.currentPage * state.itemPerPage, state.sorted.length);

  const columnClass = useMemo(() => {
    if (column <= 4) {
      return `col-xxl-${12 / column} col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 product-col mt--24`;
    }
    if (column === 5) {
      return "col-xl-1-5 col-lg-6 col-md-6 col-6 mt--24";
    }
    if (column === 6) {
      return "col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt--24";
    }
    return "col-lg-4 col-md-6 col-sm-6 col-6 mt--24";
  }, [column]);

  const shouldShowPricingBadge = useMemo(() => column <= 4, [column]);
  const shouldShowTimer = useMemo(() => column <= 4, [column]);

  const filterRowClass =
    filterPosition === "right"
      ? "rbt-filterproduct-row d-flex position-relative flex-row-reverse"
      : "rbt-filterproduct-row d-flex position-relative";

  const productWrapperClass =
    filterPosition === "left"
      ? `rbt-card-wrapper rbt-collapsible-filter-product-area${
          filterOpen ? " shift-right" : ""
        }`
      : "rbt-card-wrapper rbt-collapsible-filter-product-area";

  return (
    <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
      <div
        className={`${containerFull ? "rbt-full-width-wrapper" : "container"}`}
      >
        <div className="row row--16 mt_dec--24">
          <div className="col-12 mt--24">
            <div className="rbt-shop-tools-wrapper">
              <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper w-100">
                <h6 className="rbt-shop-tools-title">Fast FIlter :</h6>
                <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-rounded rbt-tag-list-var-one">
                  <FilterByTag
                    selectedItems={state.tags}
                    onChange={(value) => toggleTag(value, dispatch, state.tags)}
                  />
                </div>
              </div>
            </div>
            <div className="rbt-shop-tools-wrapper rbt-shop-tools-wrapper-var-one mt--20">
              {filterPosition == "left" && (
                <FilterToggle
                  open={filterOpen}
                  onToggle={() => setFilterOpen((open) => !open)}
                />
              )}

              <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                <h6 className="rbt-shop-tools-title">
                  Showing {fromResult}–{toResult} of {state.sorted.length ?? 0}{" "}
                  results
                </h6>
                <div className="rbt-shop-view-btn-list rbt-tag-list-rounded rbt-shop-view-menu">
                  <LayoutHandler />
                </div>
              </div>
              <div className="rbt-shop-tool-content rbt-shop-view-sort-wrapper">
                <div className="rbt-tools-select-single">
                  <h6 className="rbt-shop-tools-title">Sort :</h6>
                  <div className="rbt-modern-select rbt-shop-view-sort-select-one">
                    <DropdownSelect
                      selected={state.sortingOption}
                      onChange={(value) => setSorting(value, dispatch)}
                    />
                  </div>
                </div>
                <div className="rbt-tools-select-single">
                  <h6 className="rbt-shop-tools-title">Show :</h6>
                  <div className="rbt-modern-select rbt-shop-view-sort-select-two">
                    <DropdownSelect
                      selected={`${state.itemPerPage} Items`}
                      options={[
                        "15 Items",
                        "12 Items",
                        "9 Items",
                        "6 Items",
                        "3 Items",
                      ]}
                      onChange={(value) =>
                        setItemPerPage(Number(value.split(" ")[0]), dispatch)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                <div className="rbt-inner-search-field style-one rbt-search-field-rounded">
                  <input type="text" placeholder="Search for products" />
                  <button className="rbt-round-btn search-btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </div>
              </div>
              {filterPosition == "right" && (
                <FilterToggle
                  open={filterOpen}
                  onToggle={() => setFilterOpen((open) => !open)}
                />
              )}
            </div>

            {/* Active filters */}
            <div className="rbt-shop-tools-wrapper">
              <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                <FilterMeta state={state} dispatch={dispatch} />
              </div>
            </div>

            {/* Horizontal filter panel + products */}
            <div className={filterRowClass}>
              <HorizontalFilterPanel
                state={state}
                dispatch={dispatch}
                getFilterCount={getFilterCount}
                isOpen={filterOpen}
                position={filterPosition}
              />

              {/* Products */}
              <div className={productWrapperClass}>
                <div className="row row--12">
                  {hasNoFilteredItems ? (
                    <div className="col-12 mt--24">
                      <div className="text-center rbt-radius p--24">
                        <h6 className="mb--8">No items found</h6>
                        <p className="rbt-text-color-body mb--16">
                          No products match your selected filters.
                        </p>
                        <button
                          type="button"
                          className="rbt-btn rbt-btn-sm"
                          onClick={() => clearAllFilters(dispatch)}
                        >
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  ) : (
                    visibleProducts.map((product, i) => (
                      <div key={i} className={columnClass}>
                        <ProductCard9
                          showBestSellerBadge={showBestSellerBadge}
                          showPricingBadge={shouldShowPricingBadge}
                          shouldShowTimer={shouldShowTimer}
                          showQuantityBadge={showQuantityBadge}
                          product={product}
                          countdownStyle={countdownStyle}
                          animationOrder={i + 1}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Pagination / Load more */}
            <div className="row mt--40 mt_sm--16">
              <div className="col-12">
                {hasNoFilteredItems ||
                !hasMultiplePages ? null : !isLoadMore ? (
                  <ShopPagination
                    key={state.itemPerPage}
                    state={state}
                    dispatch={dispatch}
                  />
                ) : (
                  <>
                    {state.currentPage * state.itemPerPage <
                      state.sorted.length && (
                      <div className="rbt-load-more-btn-area text-center">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(state.currentPage + 1, dispatch);
                          }}
                          className="rbt-btn"
                        >
                          Load More <i className="fa-solid fa-spinner ml--4" />
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
