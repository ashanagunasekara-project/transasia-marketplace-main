"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCardPlantOne from "@/components/product-cards/ProductCardPlantOne";
import { plantProducts } from "@/data/products/others";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Top Rated Items
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Shop By <span className="rbt-bold--text">Best Items</span>
              </h2>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
                href="/shop"
              >
                <span className="btn-text">View All Products</span>
                <span className="btn-icon ml--4">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-12 mt--24">
            <div className="row h-100">
              <div className="col-md-12">
                <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer h-100 rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-1">
                  <div className="rbt-banner-inner">
                    <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                      <div className="rbt-content mw-auto">
                        <h6 className="rbt-banner-subtitle mb-0">
                          HURRY SALE 50%
                        </h6>
                        <h3 className="rbt-banner-title mb-0 line-height-normal rbt-text-capitalize">
                          <span className="rbt-bold--text d-block">
                            Keep your focus with the perfect
                          </span>
                          balance of form and function
                        </h3>
                        <div className="rbt-banner-btn mt--16">
                          <Link className="rbt-btn rbt-btn-md" href="/shop">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-product-banner-img rbt-full-width-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-1"
                      alt="Ecommerce Product Banner Image"
                      src="/assets/images/product-banner/plants-b-01.webp"
                      width={1296}
                      height={1206}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {plantProducts.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCardPlantOne product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row row--12">
          {plantProducts.slice(2).map((product) => (
            <div
              key={product.id}
              className="col-lg-6 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCardPlantOne product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
