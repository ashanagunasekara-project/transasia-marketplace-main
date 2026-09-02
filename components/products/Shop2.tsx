"use client";
import { WaveFatIcon } from "../svg-icons";
import Image from "next/image";
import { electronicsHoverVideoData2 } from "@/data/products/electronics";
import {
  clearAllFilters,
  setCurrentPage,
  setItemPerPage,
  setSorting,
  toggleTag,
} from "../reducer/filterActions";

import FilterByTag from "./filterComponents/FilterByTag";
import DropdownSelect from "../common/select/DropdownSelect";
import ShopPagination from "./ShopPagination";
import FilterMeta from "./FilterMeta";
import Sidebar from "./Sidebar";
import LayoutHandler from "./LayoutHandler";
import SidebarScrollable from "./SidebarScrollable";
import ProductCard10 from "../product-cards/ProductCard10";
import { useShopState } from "./useShopState";

export default function Shop2({
  rightSidebar = false,
  stickyTop = false,
  sidebarScrollAble = false,
  loaderType = "pagination",
}) {
  const { state, dispatch, visibleProducts, getFilterCount, isLoadMore } =
    useShopState({
      column: 3,
      loaderType,
      products: electronicsHoverVideoData2,
    });
  const hasNoFilteredItems = state.sorted.length === 0;
  const hasMultiplePages = state.sorted.length > state.itemPerPage;
  const fromResult = hasNoFilteredItems
    ? 0
    : (state.currentPage - 1) * state.itemPerPage + 1;
  const toResult = hasNoFilteredItems
    ? 0
    : Math.min(state.currentPage * state.itemPerPage, state.sorted.length);
  return (
    <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div
          className={`row row--16 mt_dec--24  ${
            rightSidebar ? "flex-row-reverse" : ""
          } `}
        >
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt--24">
            <aside
              className={`rbt-sidebar has-rbt-fshape ${
                stickyTop ? "sticky-top" : ""
              }`}
            >
              <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one position-relative">
                <div className="rbt-sidebar-top">
                  <h6 className="rbt-sidebar-title">
                    <i className="fa-sharp fa-regular fa-filter-list mr--4" />
                    Filter &amp; Refine
                    <span className="rbt-fshape-right-portion">
                      <WaveFatIcon />
                    </span>
                  </h6>
                </div>
                {sidebarScrollAble ? (
                  <SidebarScrollable
                    getFilterCount={getFilterCount}
                    state={state}
                    dispatch={dispatch}
                  />
                ) : (
                  <Sidebar
                    getFilterCount={getFilterCount}
                    state={state}
                    dispatch={dispatch}
                  />
                )}
              </div>
              <div className="rbt-sidebar-widget-wrapper">
                <div className="rbt-sidebar-widget-img">
                  <a href="#">
                    <Image
                      alt="Sidebar Banner"
                      src="/assets/images/sidebar/sidebar-banner-one.webp"
                      width={628}
                      height={840}
                    />
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 mt--24">
            <div className="row row--12">
              <div className="col-md-12">
                <div className="rbt-shop-tools-wrapper">
                  <div className="rbt-shop-tool-content rbt-shop-filter-tag-wrapper w-100">
                    <h6 className="rbt-shop-tools-title">Fast FIlter :</h6>
                    <div className="rbt-shop-filter-tag-list rbt-tag-list rbt-tag-list-rounded rbt-tag-list-var-one">
                      <FilterByTag
                        selectedItems={state.tags}
                        onChange={(value) =>
                          toggleTag(value, dispatch, state.tags)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="rbt-shop-tools-wrapper rbt-shop-tools-wrapper-var-one mt--20">
                  <div className="rbt-shop-tool-content rbt-shop-view-var-wrapper">
                    <h6 className="rbt-shop-tools-title">
                      Showing {fromResult}–{toResult} of{" "}
                      {state.sorted.length ?? 0} results
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
                      <input type="text" placeholder="Search for products" />
                      <button
                        className="rbt-round-btn search-btn"
                        type="submit"
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
            </div>
            {/* Start Card Area */}
            <div className="row row--12">
              {hasNoFilteredItems ? (
                <div className="col-12 mt--24">
                  <div className="text-center rbt-border rbt-radius p--24">
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
                  <div
                    key={i}
                    className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mt--24"
                  >
                    <ProductCard10 product={product}
                      animationOrder={i + 1}
                    />
                  </div>
                ))
              )}
            </div>
            {/* End Card Area */}
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
                  state.currentPage * state.itemPerPage <
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
