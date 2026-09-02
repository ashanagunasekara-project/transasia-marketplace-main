"use client";
import { WaveFatIcon } from "../svg-icons";
import Image from "next/image";
import { useEffect, useMemo, useReducer } from "react";
import { initialState, reducer } from "../reducer/filterReducer";
import { electronicsListViewData2 } from "@/data/products/electronics";
import {
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
import ProductCard11 from "../product-cards/ProductCard11";

export default function ShopListSidebar({ rightSidebar = false }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    filtered: electronicsListViewData2,
    sorted: electronicsListViewData2,
    itemPerPage: 7,
  });
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: electronicsListViewData2 });
  }, [
    state.brands,
    state.categories,
    state.colors,
    state.size,

    state.activeFilterOnSale,
    state.services,
    state.ratings,
    state.price,
    state.tags,
  ]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortingOption, state.filtered]);

  const visibleProducts = useMemo(() => {
    return state.sorted.slice(
      (state.currentPage - 1) * state.itemPerPage,
      state.currentPage * state.itemPerPage,
    );
  }, [state.sorted, state.currentPage, state.itemPerPage]);
  function getFilterCount(
    filterFunction: (product: (typeof electronicsListViewData2)[0]) => boolean,
  ) {
    return electronicsListViewData2.filter((product) => filterFunction(product))
      .length;
  }
  return (
    <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div
          className={`row row--16 mt_dec--24 ${
            rightSidebar ? "flex-row-reverse" : ""
          } `}
        >
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt--24">
            <aside className="rbt-sidebar has-rbt-fshape">
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
                <Sidebar
                  getFilterCount={getFilterCount}
                  state={state}
                  dispatch={dispatch}
                />
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
                      Showing {(state.currentPage - 1) * state.itemPerPage + 1}–
                      {Math.min(
                        state.currentPage * state.itemPerPage,
                        state.sorted.length,
                      )}{" "}
                      of {state.sorted.length ?? 0} results
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
                          options={["7 Items", "5 Items", "3 Items"]}
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
              {/* Start Single Card  */}
              {visibleProducts.map((product, i) => (
                <div
                  key={i}
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt--24"
                >
                  <ProductCard11 product={product}
                      animationOrder={i + 1}
                    />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
            <div className="row mt--40 mt_sm--16">
              <div className="col-12">
                <ShopPagination state={state} dispatch={dispatch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
