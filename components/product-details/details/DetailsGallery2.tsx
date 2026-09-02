import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireSmallIcon, EyeIcon } from "../../svg-icons";
import Image from "next/image";

import ProductActionPanel from "../ProductActionPanel";
import Slider12 from "../sliders/Slider12";
import SuggestedProducts from "../others/SuggestedProducts";
import { suggestedProducts2 } from "@/data/products/others";
import ComboProducts from "../others/ComboProducts2";
import ProductOptionsPanel15 from "../productOptionsPanels/ProductOptionsPanel15";
import ProductOptionsPanelGift from "../productOptionsPanels/ProductOptionsPanelGift";
import Tooltip from "@/components/common/ui/Tooltip";

import { Product } from "@/types";
export default function DetailsGallery2({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-10 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt sticky-top">
                  <Slider12 />
                </div>
              </div>
              <div className="col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-content rbt-product-variations">
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
                  <div className="rbt-info-wrapper d-flex">
                    <ProductRating product={product} className="mt--0"><span className="icon">
                        <i className="fa-sharp fa-solid fa-truck-fast" />
                      </span></ProductRating>
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
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap flex-column align-items-start">
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
                  {/* Start Dynamic Color Swatches Area */}
                  <ProductOptionsPanel15 />
                  <ProductOptionsPanelGift />
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
          <div className="col-xl-2 col-lg-12 mt--24">
            <div className="row row--12">
              <div className="col-12 text-center">
                <h5 className="title mb--0">
                  <span className="rbt-bold--text">You May Also Like</span>
                </h5>
              </div>
            </div>
            <div className="row row--12 rbt-mobile-row">
              <SuggestedProducts products={suggestedProducts2} />
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
