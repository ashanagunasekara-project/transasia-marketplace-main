"use client";

import { catCategories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  const [activeTab, setActiveTab] = useState<"categories" | "collections">(
    "categories",
  );
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gapTop">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-brand-50 pt--80 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-gap--4 mb--8 p-0 border-0 text-center align-items-center">
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
                    className="nav nav-tabs tab-button-style-2 rbt-border-color-gray-200"
                    id="myTab-4"
                    role="tablist"
                  >
                    <li role="presentation">
                      <button
                        type="button"
                        className={`tab-button${activeTab === "categories" ? " active" : ""
                          }`}
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
                        className={`tab-button${activeTab === "collections" ? " active" : ""
                          }`}
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
                        <div className="row row--12 mt_dec--24 justify-content-center">
                          {catCategories.map((item, index) => (
                            <div
                              className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
                              key={index}
                            >
                              <div
                                className={`rbt-cat-box rbt-cat-box-3 cat-var-two text-center rbt-scroll-trigger fade_in animation-order-${index + 1
                                  }`}
                              >
                                <div className="inner">
                                  <div className="rbt-image-portion">
                                    <Link href={`/shop-by-categories`}>
                                      <Image
                                        alt="Category Product Images"
                                        src={item.imgSrc || ""}
                                        width={624}
                                        height={624}
                                      />
                                    </Link>
                                  </div>
                                  <div className="content mt--24">
                                    <h6 className="title mb--0">{item.title}</h6>
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
                        <div className="row row--12 mt_dec--24 justify-content-center">
                          {catCategories.map((item, index) => (
                            <div
                              className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24"
                              key={index}
                            >
                              <div
                                className={`rbt-cat-box rbt-cat-box-3 cat-var-two text-center rbt-scroll-trigger fade_in animation-order-${index + 1
                                  }`}
                              >
                                <div className="inner">
                                  <div className="rbt-image-portion">
                                    <Link href={`/shop-by-categories`}>
                                      <Image
                                        alt="Category Product Images"
                                        src={item.imgSrc || ""}
                                        width={624}
                                        height={624}
                                      />
                                    </Link>
                                  </div>
                                  <div className="content mt--24">
                                    <h6 className="title mb--0">{item.title}</h6>
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
      </div>
    </div>
  );
}
