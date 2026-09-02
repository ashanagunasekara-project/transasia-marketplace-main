"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";

import { FireSmallIcon } from "../../svg-icons";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Countdown from "../../common/ui/Countdown";
import Facts from "../../common/other-components/Facts";
import ProductActionPanel from "../ProductActionPanel";
import Tooltip from "@/components/common/ui/Tooltip";

import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

import { recentlyViewed4, recommendedProducts4 } from "@/data/products/others";
import ProductOptionsPanel2 from "../productOptionsPanels/ProductOptionsPanel2";

import { Product } from "@/types";
import "@/lib/lightgallery-styles";
const FASHION_IMAGES = [
  "/assets/images/product-img/fashion/fashion-a-red-01.webp",
  "/assets/images/product-img/fashion/fashion-a-red-02.webp",
  "/assets/images/product-img/fashion/fashion-a-red-03.webp",
  "/assets/images/product-img/fashion/fashion-a-red-04.webp",
] as const;

export default function DetailsFashion({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-8 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-media-area position-sticky-top rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
                    NEW
                  </div>
                  <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
                    HOT
                  </div>
                  <LightGallery
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="w-100"
                    speed={400}
                    selector=".rbt-grid-4-variation-markup a.rbt-product-single-img"
                    zoomFromOrigin={false}
                  >
                    <div className="row row--12 mt_dec--24 rbt-grid-4-variation-markup">
                      {FASHION_IMAGES.map((src, index) => (
                        <div
                          key={src}
                          className={`col-lg-6 col-6 mt--24 rbt-scroll-trigger fade_in animation-order-${
                            index + 1
                          }`}
                        >
                          <div className="thumbnail">
                            <a
                              href={src}
                              data-src={src}
                              className="rbt-product-single-img"
                            >
                              <Image
                                className="rbt-rounded--12"
                                alt="Product Images"
                                src={src}
                                width={776}
                                height={1236}
                              />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </LightGallery>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-content rbt-product-variations">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text"
                  >
                    Crop Tops
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0">
                        {product.oldPrice && (
                          <del className="price-text">
                            ${product.oldPrice?.toFixed(2)}
                          </del>
                        )}
                        <span className="price-text">
                          {" "}
                          ${product.price.toFixed(2)}
                        </span>
                        <OfferBadge product={product} className="rbt-offer-badge-md" />
                      </div>
                    </div>
                    <div className="prd-info-section">
                      <div className="prd-id-text">
                        <p className="text-bold">Brand:</p>
                        <Tooltip content="Product Brand" placement="top">
                          <a href="#" className="rbt-brand-img tooltips">
                            <Image
                              alt="Small icon Brand"
                              src="/assets/images/icons/small-brand/sm-brand-01.webp"
                              width={40}
                              height={40}
                              className="image-auto"
                            />
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--28">
                    <ProductRating product={product} className="mt--0"><Facts /></ProductRating>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                        href="#"
                      >
                        <FireSmallIcon />
                        <p>
                          <strong>34 products sold in last 10 hours.</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  <ProductOptionsPanel2 />

                  {/* Start Dynamic Color Swatches Area */}
                  <div
                    className="rbt-store-variation-controls"
                    data-variation="grid-4"
                  />

                  {/* End Dynamic Color Swatches Area */}
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-countdown-banner rbt-countdown-banner-sm rbt-countdown-banner-has-bg-01">
                      <span className="b3 rbt-title">Special Offer :</span>
                      <div className="rbt-countdown-sections">
                        <div className="rbt-countdown-one bg-variation-white cd-border-style">
                          <Countdown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-prd-qty-area">
                      <p className="prd-qty-txt">
                        <strong>Only 97 pc left</strong>
                      </p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Shipping-progress"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar w-50" />
                      </div>
                    </div>
                  </div>
                  <ProductActionPanel product={product} />
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <ul className="product-details-list shipment-details-list">
                      <li>
                        <span className="rbt-bold--text mr--4">Brand : </span>
                        <span className="text">Sony Corporation Ltd</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Resolution :
                        </span>
                        <span className="text">3840×2160</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Release years :
                        </span>
                        <span className="text"> Jan 2022</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Motherboard :
                        </span>
                        <span className="text"> Samsung</span>
                        <span className="text d-block">
                          ATX, ITX, microATX, Mini-ITX
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa-sharp fa-regular fa-truck" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">Ships :</span>
                          <span className="text">2–3 weeks Free Shipping</span>
                        </div>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa-regular fa-bag-shopping" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">
                            7 Days Returns :
                          </span>
                          <span className="text">
                            Free return within 7 days of purchase
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50">
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link">
                          <li>
                            <a href="#">
                              <Image
                                alt="Payment Brand Image"
                                src="/assets/images/payment-brand/image-01.webp"
                                width={812}
                                height={64}
                              />
                            </a>
                          </li>
                        </ul>
                        <span className="b2 rbt-text-medium text-center rbt-text-color-heading mt--12 d-block">
                          Guaranteed safe &amp; secure checkout
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts
              recentlyViewedProducts={recentlyViewed4}
              recommendedProducts={recommendedProducts4}
              parentClass="rbt-tab rbt-product-single-details-tab rbt-fshape-tab rbt-product-single-details-tab-sm"
            />

            <div className="rbt-block-banner-img mt--32">
              <Image
                alt="Ecommerce Product Banner"
                src="/assets/images/product-single/single-prd-banner/single-prd-banner-a-01.webp"
                width={1696}
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
