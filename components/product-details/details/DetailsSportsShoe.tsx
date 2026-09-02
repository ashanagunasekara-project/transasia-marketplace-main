import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import Slider10 from "../sliders/Slider10";
import ProductActionPanel from "../ProductActionPanel";
import ComboProducts from "../others/ComboProducts2";
import { sportsComboProducts } from "@/data/products/others";
import ProductOptionsPanel11 from "../productOptionsPanels/ProductOptionsPanel11";

import { Product } from "@/types";
export default function DetailsSportsShoe({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24 order-sm-1">
            <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
              <Slider10 />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-12 mt--24 order-3 order-sm-3 order-xl-2">
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

                <ComboProducts products={sportsComboProducts} />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-12 mt--24 order-2 rbt-single-mobile-view-sidebar order-sm-2 order-xl-3">
            <div className="rbt-single-product-content rbt-content-top-sticky-on-img rbt-sticky-top-150 rbt-product-variations">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text"
              >
                Sports Shoes
              </a>
              <h2 className="rbt-card-title mt--12">{product.title}</h2>
              <p className="description-text b2 mt--16">
                At vero eos et accusamus et iusto dignissimos ducimus blanditiis
                praesentium voluptatu atque...
              </p>
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
              <hr className="rbt-separator rbt-separator-gray200 mt--24" />
              <div className="rbt-info-wrapper d-block mt--24">
                <ul className="product-details-list shipment-details-list">
                  <li>
                    <span className="icon">
                      <i className="fa-sharp fa-regular fa-truck" />
                    </span>
                    <div className="right-content">
                      <span className="rbt-bold--text">Ships :</span>
                      <span className="text">2–3 weeks Free Shipping</span>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa-regular fa-bag-shopping" />
                    </span>
                    <div className="right-content">
                      <span className="rbt-bold--text">7 Days Returns :</span>
                      <span className="text">
                        Free return within 7 days of purchase
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Start Dynamic Color Swatches Area */}
              <ProductOptionsPanel11 />

              {/* End Dynamic Color Swatches Area */}
              <div className="rbt-info-wrapper d-flex justify-content-between mt--24 flex-wrap flex-wrap">
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
        </div>
      </div>
    </div>
  );
}
