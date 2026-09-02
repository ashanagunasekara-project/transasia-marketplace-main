"use client";

import { luggageCategories } from "@/data/categories";
import { luggageItems } from "@/data/collections";
import FooterNewsletterForm from "../../footers/FooterNewsletterForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  const [activeTab, setActiveTab] = useState<"categories" | "collections">(
    "categories",
  );
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2Top">
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
                      {luggageCategories.map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6 col-6 mt--24"
                          key={index}
                        >
                          <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-two rbt-scroll-trigger fade_in animation-order-1">
                            <Link href={`/categories-list`} className="inner">
                              <div className="content">
                                <h5 className="title">
                                  <span className="rbt-bold--text">
                                    {item.title}
                                  </span>
                                </h5>
                              </div>
                              <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                                {item.imgSrc && (
                                  <Image
                                    alt="Category Product Images"
                                    src={item.imgSrc}
                                    width={624}
                                    height={380}
                                  />
                                )}
                              </div>
                            </Link>
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
                      {luggageItems.map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6 col-6 mt--24"
                          key={index}
                        >
                          <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-two rbt-scroll-trigger fade_in animation-order-1">
                            <Link href={`/categories-list`} className="inner">
                              <div className="content">
                                <h5 className="title">
                                  <span className="rbt-bold--text">
                                    {item.title}
                                  </span>
                                </h5>
                              </div>
                              <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                                <Image
                                  alt="Category Product Images"
                                  src={item.imgSrc || ""}
                                  width={624}
                                  height={380}
                                />
                              </div>
                            </Link>
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
        {/* Start Newsletter area */}
        <div className="rbt-newsletter-area style--one rbt-var-one mt--80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 justify-content-center justify-content-lg-start d-flex">
                <div className="rbt-newsletter-content-wrapper justify-content-md-start justify-content-center rbt-gap--16">
                  <span className="rbt-newsletter-icon">
                    <i className="fa-light fa-envelope" />
                  </span>
                  <div className="content">
                    <h2 className="title">
                      <span>Need a bag that&apos;ll fit your lifestyle?</span>
                    </h2>
                    <p className="sub-title m-0 p-0 border-0">
                      Stay updated on new arrivals, exclusive offers and much
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--12 mt_sm--12 justify-content-center justify-content-lg-end text-center text-md-left d-flex">
                <FooterNewsletterForm
                  formClass="rbt-newsletter-form-one"
                  inputClass="rbt-border"
                  btnClass="rbt-btn rbt-btn-md radius-round-6"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Newsletter aera */}
      </div>
    </div>
  );
}
