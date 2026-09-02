"use client";

import type { Dispatch } from "react";
import type { FilterAction, FilterState, Product } from "@/types";
import Sidebar from "./Sidebar";

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  direction?: "left" | "right" | "top" | "bottom";
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  getFilterCount: (fn: (product: Product) => boolean) => number;
};

export default function FilterOffcanvas({
  open,
  onOpen: _onOpen,
  onClose,
  direction = "left",
  state,
  dispatch,
  getFilterCount,
}: Props) {
  const sideClass =
    direction === "right"
      ? "start-from-right"
      : direction === "top"
        ? "start-from-top"
        : direction === "bottom"
          ? "start-from-bottom"
          : "start-from-left";

  return (
    <>
      <div
        className={`rbt-filter-offcanvas-area side-menu ${sideClass} ${
          open ? "side-menu-active" : ""
        }`}
      >
        <div className="inner-wrapper p--32">
          <aside className="rbt-sidebar position-sticky sticky-top">
            <div className="rbt-sidebar-widget-wrapper rbt-sidebar-bg-one position-relative">
              <button
                className="rbt-sidebar-close-btn"
                type="button"
                onClick={onClose}
                aria-label="Close filters"
              >
                <i className="fa-sharp fa-solid fa-xmark" />
              </button>
              <div className="rbt-sidebar-top">
                <h6 className="rbt-sidebar-title">
                  <i className="fa-sharp fa-regular fa-filter-list mr--4" />
                  Filter &amp; Refine
                </h6>
              </div>
              <Sidebar
                state={state}
                dispatch={dispatch}
                getFilterCount={getFilterCount}
              />
            </div>
          </aside>
        </div>
      </div>
      <button
        type="button"
        className={`rbt-offcanvas-overlay${open ? " is-open" : ""}`}
        aria-hidden={!open}
        onClick={onClose}
      />
    </>
  );
}
