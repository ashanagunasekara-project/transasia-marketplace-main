"use client";

import { useState } from "react";
import {
  clearAllFilters,
  setItemPerPage,
  setSorting,
  toggleTag,
} from "../reducer/filterActions";
import ProductCard9 from "../product-cards/ProductCard9";
import DropdownSelect from "../common/select/DropdownSelect";
import ShopPagination from "./ShopPagination";
import FilterMeta from "./FilterMeta";
import LayoutHandler from "./LayoutHandler";
import ProductViewTabs from "./ProductViewTabs";
import FilterOffcanvas from "./FilterOffcanvas";
import { useShopState } from "./useShopState";
import FilterByTagTwo from "./filterComponents/FilterByTagTwo";

const columnClass =
  "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 product-col";

export default function ShopFilterOffcanvas({
  offcanvasDirection = "left",
}: {
  offcanvasDirection?: "left" | "right" | "top" | "bottom";
}) {
  const { state, dispatch, visibleProducts, getFilterCount } = useShopState({
    column: 4,
    loaderType: "pagination",
  });
  const [filterOffcanvasOpen, setFilterOffcanvasOpen] = useState(false);
  const hasNoFilteredItems = state.sorted.length === 0;
  const hasMultiplePages = state.sorted.length > state.itemPerPage;
  const fromResult = hasNoFilteredItems
    ? 0
    : (state.currentPage - 1) * state.itemPerPage + 1;
  const toResult = hasNoFilteredItems
    ? 0
    : Math.min(state.currentPage * state.itemPerPage, state.sorted.length);

  return (
    <>
      <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row row--12 mt_dec--12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--12">
              <div className="row row--12">
                <div className="col-md-12">
                  <div className="rbt-shop-tools-wrapper">
                    <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper justify-content-start">
                      <h6 className="rbt-shop-tools-title">Product View :</h6>
                      <ProductViewTabs state={state} dispatch={dispatch} />
                    </div>
                    <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                      <h6 className="rbt-shop-tools-title">Fast FIlter :</h6>
                      <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-rounded rbt-tag-list-var-one">
                        <FilterByTagTwo
                          selectedItems={state.tags}
                          onChange={(value) =>
                            toggleTag(value, dispatch, state.tags)
                          }
                        />
                      </div>
                    </div>
                    <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper justify-content-end">
                      {hasMultiplePages ? (
                        <ShopPagination
                          parentClass="rbt-nav-effect-activation text-center d-flex align-items-center rbt-gap--8"
                          listClass="rbt-pagination rbt-pagination-sm d-inline-flex"
                          state={state}
                          dispatch={dispatch}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="rbt-shop-tools-wrapper rbt-shop-tools-wrapper-var-one mt--20">
                    <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                      <h6 className="rbt-shop-tools-title">
                        <button
                          type="button"
                          className="rbt-filter-button"
                          onClick={() => setFilterOffcanvasOpen(true)}
                          aria-expanded={filterOffcanvasOpen}
                        >
                          <i className="fa-sharp fa-regular fa-filter mr--4" />
                          <span className="filter-text">
                            {filterOffcanvasOpen
                              ? "Hide Filter"
                              : "Show Filter"}
                          </span>
                        </button>
                      </h6>
                    </div>
                    <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                      <h6 className="rbt-shop-tools-title">
                        Showing {fromResult}–{toResult} of {state.sorted.length}{" "}
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
                              "16 Items",
                              "12 Items",
                              "8 Items",
                              "4 Items",
                              "2 Items",
                            ]}
                            onChange={(value) =>
                              setItemPerPage(
                                Number(value.split(" ")[0]),
                                dispatch,
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                      <div className="rbt-inner-search-field style-one rbt-search-field-rounded">
                        <input
                          type="text"
                          placeholder="Search for products"
                          aria-label="Search for products"
                        />
                        <button
                          className="rbt-round-btn search-btn"
                          type="submit"
                          aria-label="Search"
                        >
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-shop-tools-wrapper">
                    <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper">
                      <FilterMeta state={state} dispatch={dispatch} />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  {/* Start Card Area */}
                  <div className="row row--12">
                    {visibleProducts.length === 0 ? (
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
                            showPricingBadge
                            shouldShowTimer
                            product={product}
                            animationOrder={i + 1}
                          />
                        </div>
                      ))
                    )}
                  </div>
                  {/* End Card Area */}
                  <div className="row mt--40 mt_sm--12">
                    <div className="col-12">
                      {hasNoFilteredItems || !hasMultiplePages ? null : (
                        <ShopPagination
                          key={state.itemPerPage}
                          state={state}
                          dispatch={dispatch}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterOffcanvas
        open={filterOffcanvasOpen}
        onOpen={() => setFilterOffcanvasOpen(true)}
        onClose={() => setFilterOffcanvasOpen(false)}
        direction={offcanvasDirection}
        state={state}
        dispatch={dispatch}
        getFilterCount={getFilterCount}
      />
    </>
  );
}
