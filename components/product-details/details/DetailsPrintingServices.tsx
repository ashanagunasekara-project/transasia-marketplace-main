import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireIcon } from "../../svg-icons";
import Image from "next/image";

import Slider9 from "../sliders/Slider9";
import Facts from "@/components/common/other-components/Facts";
import FileInput from "../others/FileInput";
import ProductActionPanel from "../ProductActionPanel";
import ProductOptionsPanel10 from "../productOptionsPanels/ProductOptionsPanel10";
import Countdown from "@/components/common/ui/Countdown";
import Tooltip from "@/components/common/ui/Tooltip";

import { Product } from "@/types";
export default function DetailsPrintingServices({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container-fluid p-0 rbt-sticky-top-150">
        <div className="row row--0 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24 order-sm-1">
            <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
              <div className="rbt-medea-lg-img-area">
                <Slider9 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 mt--24 order-2 rbt-single-mobile-view-sidebar order-sm-2 order-xl-3">
            <div className="row row--12 rbt-single-product-content rbt-content-top-sticky-on-img rbt-product-variations w-100">
              <div className="col-lg-6 col-xl-4">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-categories-text"
                >
                  Hoodie Printing
                </a>
                <h2 className="rbt-card-title mt--12">{product.title}</h2>
                <p className="description-text b2 mt--16">
                  At vero eos et accusamus et iusto dignissimos ducimus
                  blanditiis praesentium voluptatu atque...
                </p>
                <ul className="rbt-timeline-info-list">
                  <li>Instantly generate 100s of custom logo mockups</li>
                  <li>Change colors, symbols, sizing, and more</li>
                  <li>High-res file types include SVG, PNG, EPS &amp; PDF</li>
                </ul>
                <div className="rbt-info-wrapper d-flex mt--16">
                  <ProductRating product={product} className="mt--0"><Facts /></ProductRating>
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
                      <p className="text-bold">SKU:</p>
                      <p>HN-508801</p>
                    </div>
                    <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                      9 in Stock
                    </div>
                  </div>
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
                        {" "}
                        ${product.price.toFixed(2)}
                      </span>
                      <OfferBadge product={product} className="rbt-offer-badge-md" />
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
              </div>
              <div className="col-lg-6 col-xl-4">
                {/* Start Dynamic Color Swatches Area */}
                <ProductOptionsPanel10 />

                {/* End Dynamic Color Swatches Area */}
                <div className="rbt-info-wrapper d-block mt--24">
                  <div className="prd-info-section d-block">
                    <FileInput />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-4">
                <div className="rbt-info-wrapper d-block">
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
                  <div className="rbt-countdown-banner rbt-countdown-banner-sm rbt-countdown-banner-has-bg-01">
                    <span className="b3 rbt-title">Special Offer :</span>
                    <div className="rbt-countdown-sections">
                      <div className="rbt-countdown-one bg-variation-white cd-border-style">
                        <Countdown />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                <div className="rbt-info-wrapper d-block mt--24">
                  <ul className="product-details-list shipment-details-list">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
