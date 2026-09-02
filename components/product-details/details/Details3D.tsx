"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";

import { FireIcon, EyeIcon } from "../../svg-icons";
import Image from "next/image";
import ProductActionPanel from "../ProductActionPanel";
import Slider3D from "../sliders/Slider3D";
import ComboProducts from "../others/ComboProducts";
import ProductOptionsPanel13 from "../productOptionsPanels/ProductOptionsPanel13";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { formatCurrency } from "@/lib/price";

export default function Details({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24">
            <div className="row row--20 justify-content-center mt_dec--16">
              <div className="col-xl-7 col-lg-12 col-12 mt--16">
                <div className="thumbnail rbt-360-view-thumbnail rbt-sticky-top-150">
                  <Slider3D />
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-content">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text"
                  >
                    Headphones
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="pricing-part mt--0">
                      {product.oldPrice ? (
                        <del className="price-text">
                          {formatCurrency(product.oldPrice)}
                        </del>
                      ) : null}
                      <span className="price-text">
                        {formatCurrency(product.price)}
                      </span>
                      <OfferBadge product={product} className="rbt-offer-badge-md" />
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
                  <div className="rbt-info-wrapper d-flex">
                    <ProductRating product={product}><span className="icon">
                        <i className="fa-sharp fa-solid fa-truck-fast" />
                      </span></ProductRating>
                    <div className="prd-info-section has-left-separator">
                      <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                        9 in Stock
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--16">
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
                    <div className="prd-info-section has-left-separator">
                      <div className="prd-id-text">
                        <p className="text-bold">All Europe</p>
                        <Tooltip content="All Europe Delivery" placement="top">
                          <a href="#" className="rbt-brand-img tooltips">
                            <Image
                              alt="Small icon Brand"
                              src="/assets/images/icons/small-brand/sm-brand-b-02.webp"
                              width={40}
                              height={41}
                              className="image-auto"
                            />
                          </a>
                        </Tooltip>
                      </div>
                    </div>
                    <div className="prd-info-section has-left-separator">
                      <div className="prd-id-text">
                        <p className="text-bold">Verified:</p>
                        <Tooltip content="Verified Product" placement="top">
                          <span className="rbt-brand-img tooltips">
                            <Image
                              alt="Small icon Brand"
                              src="/assets/images/icons/small-brand/sm-brand-b-03.webp"
                              width={40}
                              height={41}
                            />
                          </span>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12">
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
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-shiny"
                        href="#"
                      >
                        <EyeIcon />
                        <p>
                          <strong>20 people are viewing this</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  <ProductOptionsPanel13 />
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
                </div>
              </div>
            </div>
            <div className="rbt-combo-prd-box rbt-bg-color-white mt--24">
              <div className="row justify-content-between">
                <div className="col-lg-2">
                  <div className="rbt-combo-title-section">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There&apos;s more in the complete bundle
                    </h5>
                  </div>
                </div>
                <div className="col-lg-10">
                  <ComboProducts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
