"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";

import { FireSmallIcon } from "../../svg-icons";
import Link from "next/link";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import ProductActionPanel from "../ProductActionPanel";
import DescriptionTab1 from "../descriptions/DescriptionTab1";
import Facts from "@/components/common/other-components/Facts";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

import { recentlyViewed5, recommendedProducts5 } from "@/data/products/others";
import ProductOptionsPanel5 from "../productOptionsPanels/ProductOptionsPanel5";

import { Product } from "@/types";
import "@/lib/lightgallery-styles";

import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
const PHONE_CASE_IMAGES = [
  "/assets/images/product-img/accessories/phone-case-a-01.webp",
  "/assets/images/product-img/accessories/phone-case-a-03.webp",
  "/assets/images/product-img/accessories/phone-case-a-02.webp",
  "/assets/images/product-img/accessories/phone-case-a-04.webp",
  "/assets/images/product-img/accessories/phone-case-a-03.webp",
] as const;

export default function DetailsPhonCase({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-9 col-lg-12 mt--24">
            <div className="row row--8 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
                  <LightGallery
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="w-100"
                    speed={400}
                    selector=".rbt-masonary-variation-markup a.rbt-product-single-img"
                    zoomFromOrigin={false}
                  >
                    <div className="row row--8 align-items-center rbt-mobile-row rbt-masonary-variation-markup position-relative">
                      <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
                        NEW
                      </div>
                      <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
                        HOT
                      </div>
                      {PHONE_CASE_IMAGES.map((src, index) => {
                        const layoutClasses = [
                          "col-xl-12 col-sm-6 col-12",
                          "col-xl-4 col-sm-6 col-12",
                          "col-xl-8 col-sm-6 col-12",
                          "col-xl-8 col-sm-6 col-12",
                          "col-xl-4 col-sm-6 col-12",
                        ] as const;

                        return (
                          <div
                            key={`${src}-${index}`}
                            className={`${layoutClasses[index] ?? "col-xl-4 col-sm-6 col-12"} rbt-scroll-trigger fade_in animation-order-${index + 1}${
                              index === 0 ? "" : " mt--16"
                            }`}
                          >
                            <div className="thumbnail position-relative">
                              <a
                                className="rbt-product-single-img"
                                href={src}
                                data-src={src}
                              >
                                <Image
                                  className="w-100 rbt-rounded--12"
                                  alt="Product Images"
                                  src={src}
                                  width={1072}
                                  height={1454}
                                />
                              </a>
                            </div>
                          </div>
                        );
                      })}
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
                    iPhone Cases
                  </a>
                  <h2 className="rbt-card-title mt--12">
                    iPhone&nbsp;16 Pro Silicone Case with MagSafe – Star Fruit
                  </h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatum deleniti atque...
                  </p>
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
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0">
                        <del className="price-text">
                          ${product.oldPrice?.toFixed(2)}
                        </del>
                        <span className="price-text">
                          {" "}
                          ${product.price?.toFixed(2)}
                        </span>
                        <OfferBadge product={product} className="rbt-offer-badge-md" />
                      </div>
                    </div>
                    <div className="rbt-quick-access-banner-action-btn d-flex align-items-center">
                      <ModalTriggerButton
                        openModalName="findStoreModal"
                        className="rbt-btn rbt-btn-xs rbt-btn-secondary d-flex align-items-center"
                      >
                        <i className="fa-regular fa-location-dot mr--4" /> Find
                        A Near Store
                      </ModalTriggerButton>
                    </div>
                  </div>
                  {/* Start Dynamic Color Swatches Area */}
                  <ProductOptionsPanel5 />

                  {/* End Dynamic Color Swatches Area */}
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
                  <ul className="product-details-list shipment-details-list">
                    <li>
                      <span className="icon">
                        <i className="fa-sharp fa-regular fa-truck" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">
                          Estimated Delivery :
                        </span>
                        <span className="text"> 15 - 22 Nov, 2026</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-bag-shopping" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">7 Days Returns :</span>
                        <a href="#" className="shipment-quick-link">
                          Free return within 7 days of purchase
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50">
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link">
                          <li>
                            <Link href={`/product-single-phone-case`}>
                              <Image
                                alt="Payment Brand Image"
                                src="/assets/images/payment-brand/image-01.webp"
                                width={812}
                                height={64}
                              />
                            </Link>
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
            <div className="row rbt-section-gapTop">
              <DescriptionTab1 />
            </div>
          </div>
          <div className="col-xl-3 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts
              recentlyViewedProducts={recentlyViewed5}
              recommendedProducts={recommendedProducts5}
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
