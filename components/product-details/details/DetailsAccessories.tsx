import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireIcon } from "../../svg-icons";
import Link from "next/link";
import Image from "next/image";

import Slider4 from "../sliders/Slider4";
import Facts from "@/components/common/other-components/Facts";
import ProductActionPanel from "../ProductActionPanel";
import ComboProducts from "../others/ComboProducts2";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

import { recentlyViewed2, recommendedProducts2 } from "@/data/products/others";
import ProductOptionsPanel6 from "../productOptionsPanels/ProductOptionsPanel6";
import Tooltip from "@/components/common/ui/Tooltip";

import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function DetailsAccessories({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-9 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <Slider4 />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-content ptb--0 rbt-product-variations">
                  <div
                    className="rbt-quick-access-banner rbt-quick-access-banner-sm rbt-bg-color-brand-300 rbt-rounded--8 alert alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="rbt-quick-access-banner-banner-content d-flex align-items-center">
                      <div className="rbt-icon-img">
                        <Image
                          alt="Ecommerce Gift Box Icon"
                          src="/assets/images/icons/product-single/gift-box-01-sm.svg"
                          width={44}
                          height={44}
                        />
                      </div>
                      <p className="rbt-quick-access-banner-title b3 mb-0">
                        Register to buy Grocery&apos;s at wholesale prices for
                        your shop.
                      </p>
                    </div>
                    <div className="rbt-quick-access-banner-action-btn">
                      <ModalTriggerButton
                        openModalName="signinModal"
                        className="rbt-btn rbt-btn-xs"
                      >
                        <i className="fa-light fa-user mr--4" /> Register Now
                      </ModalTriggerButton>
                    </div>
                    <a
                      href="#"
                      className="rbt-cancel-btn"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text mt--16"
                  >
                    Powerbank
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex mt--28">
                    <ProductRating product={product} className="mt--0"><Facts /></ProductRating>
                  </div>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0">
                        {product.oldPrice ? (
                          <del className="price-text">
                            ${product.oldPrice?.toFixed(2)}
                          </del>
                        ) : (
                          ""
                        )}
                        <span className="price-text">
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
                              src="/assets/images/icons/small-brand/sm-brand-b-01.webp"
                              width={78}
                              height={48}
                              className="image-auto"
                            />
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                        href="#"
                      >
                        <FireIcon />
                        <p>
                          <strong>34 products sold in last 10 hours.</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  {/* Start Dynamic Color Swatches Area */}
                  <ProductOptionsPanel6 />

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
                  <hr className="rbt-separator rbt-separator-gray200 mt--24" />
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
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50">
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link">
                          <li>
                            <Link href={`/product-single-accessories`}>
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
            <div className="rbt-combo-prd-box rbt-bg-color-white mt--24">
              <div className="row justify-content-between">
                <div className="col-lg-12">
                  <div className="rbt-combo-title-section flex-row">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There&apos;s more in the complete bundle
                    </h5>
                  </div>
                </div>

                <ComboProducts />
              </div>
            </div>
          </div>
          <div className="col-xl-3 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts
              recentlyViewedProducts={recentlyViewed2}
              recommendedProducts={recommendedProducts2}
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
