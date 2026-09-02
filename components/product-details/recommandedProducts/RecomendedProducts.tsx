"use client";

import { GridMatrixIcon, WaveSquareIcon } from '../../svg-icons';
import Image from "next/image";
import {
  recentlyViewed as defaultRecentlyViewed,
  recommendedProducts as defaultrecommendedProducts,
} from "@/data/products/others";

import Link from "next/link";
import { useState } from "react";

export default function RecomendedProducts({
  recentlyViewedProducts = defaultRecentlyViewed,
  recommendedProducts = defaultrecommendedProducts,
  parentClass = "rbt-tab rbt-product-single-details-tab rbt-fshape-tab",
}) {
  const [activeTab, setActiveTab] = useState<"viewed" | "recommended">(
    "viewed",
  );
  return (
    <div className={parentClass}>
      <div className="rbt-tab-nav-wrapper">
        <ul className="nav nav-tabs" id="rbt-product-recomTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link${activeTab === "viewed" ? " active" : ""}`}
              onClick={() => {
                setActiveTab("viewed");
              }}
            >
              Recently Viewed
              <span className="rbt-fshape-portion rbt-fshape-left-portion">
                <GridMatrixIcon />
              </span>
              <span className="rbt-fshape-portion rbt-fshape-right-portion">
                <WaveSquareIcon />
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link${activeTab === "recommended" ? " active" : ""}`}
              onClick={() => {
                setActiveTab("recommended");
              }}
            >
              Recommended
              <span className="rbt-fshape-portion rbt-fshape-left-portion">
                <GridMatrixIcon />
              </span>
              <span className="rbt-fshape-portion rbt-fshape-right-portion">
                <WaveSquareIcon />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={`tab-pane fade${activeTab === "viewed" ? " active show" : ""}`}
        >
          <div className="rbt-single-prd-viewed-prd-area">
            <div className="rbt-list-card-box rbt-list-card-box border-0 p-0">
              {recentlyViewedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rbt-card rbt-product-card rbt-list-view-variation list-view-md"
                >
                  <div className="inner">
                    <div className="rbt-card-body">
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <li key={i}>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            ))}
                        </ul>
                        <p className="rating-digit">({product.ratingCount})</p>
                      </div>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default/${product.id}`}>
                          {product.title}
                        </Link>
                      </h6>
                      <div className="pricing-part">
                        <del className="price-text">
                          ${(product.oldPrice ?? 0).toFixed(2)}
                        </del>
                        <span className="price-text">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                      <Link href={`/product-single-default/${product.id}`}>
                        <Image
                          alt="Card Image"
                          src={product.imgSrc}
                          width={1184}
                          height={928}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade${activeTab === "recommended" ? " active show" : ""}`}
        >
          <div className="rbt-single-prd-recom-prd-area">
            <div className="rbt-list-card-box rbt-list-card-box border-0 p-0">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rbt-card rbt-product-card rbt-list-view-variation list-view-md"
                >
                  <div className="inner">
                    <div className="rbt-card-body">
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <li key={i}>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            ))}
                        </ul>
                        <p className="rating-digit">({product.ratingCount})</p>
                      </div>
                      <h6 className="rbt-card-title">
                        <Link href={`/product-single-default/${product.id}`}>
                          {product.title}
                        </Link>
                      </h6>
                      <div className="pricing-part">
                        <del className="price-text">
                          ${(product.oldPrice ?? 0).toFixed(2)}
                        </del>
                        <span className="price-text">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                      <Link href={`/product-single-default/${product.id}`}>
                        <Image
                          alt="Card Image"
                          src={product.imgSrc}
                          width={1184}
                          height={928}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
