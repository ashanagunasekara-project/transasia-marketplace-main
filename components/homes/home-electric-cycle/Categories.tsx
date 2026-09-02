"use client";

import { categories4 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  const [activeTab, setActiveTab] = useState<"categories" | "collections">(
    "categories",
  );
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--8 mb_sm--0 mb_md--0 p-0 border-0 text-center align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Most Popular
              </span>
            </div>
          </div>
        </div>
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="advance-tab-button">
              <ul
                className="nav nav-tabs tab-button-style-2"
                id="myTab-4"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    type="button"
                    className={`tab-button${activeTab === "categories" ? " active" : ""}`}
                    onClick={() => {
                      setActiveTab("categories");
                    }}
                  >
                    <span className="title">Categories</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    type="button"
                    className={`tab-button${activeTab === "collections" ? " active" : ""}`}
                    onClick={() => {
                      setActiveTab("collections");
                    }}
                  >
                    <span className="title">Collections</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tab-content advance-tab-content-style-2">
              {activeTab === "categories" && (
                <div className="tab-pane fade active show">
                <div className="content">
                  {/* Start Card Area */}
                  <div className="row row--12 mt_dec--24">
                    {categories4.map((category, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24"
                        key={index}
                      >
                        <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-1 text-center">
                          <div className="inner">
                            <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-1">
                              <Link href="/shop-by-category" className="rbt-card-link-btn">
                                <Image
                                  alt="Category Product Images"
                                  src={category.imgSrc || ""}
                                  width={624}
                                  height={832}
                                />
                              </Link>
                            </div>
                            <Link href="/shop-by-category"
                              className="rbt-btn rbt-btn-white rbt-btn-md"
                            >
                              {category.title}
                            </Link>
                          </div>
                          <div className="rbt-right-corner-portion">
                            <div className="rbt-corner-portion-wrapper">
                              <Link href="/shop-by-category" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End Card Area */}
                </div>
              </div>
              )}
              {activeTab === "collections" && (
                <div className="tab-pane fade active show">
                <div className="content">
                  {/* Start Card Area */}
                  <div className="row row--12 mt_dec--24">
                    {categories4.map((category, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24"
                        key={index}
                      >
                        <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-1 text-center">
                          <div className="inner">
                            <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-1">
                              <Link href="/shop-by-category">
                                <Image
                                  alt="Category Product Images"
                                  src={category.imgSrc || ""}
                                  width={624}
                                  height={832}
                                />
                              </Link>
                            </div>
                            <Link href="/shop-by-category"
                              className="rbt-btn rbt-btn-white rbt-btn-md"
                            >
                              {category.title}
                            </Link>
                          </div>
                          <div className="rbt-right-corner-portion">
                            <div className="rbt-corner-portion-wrapper">
                              <Link href="/shop-by-category" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* End Card Area */}
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
