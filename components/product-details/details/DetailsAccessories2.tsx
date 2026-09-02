import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireSmallIcon, EyeIcon } from '../../svg-icons';
import DescriptionTab1 from "../descriptions/DescriptionTab1";
import ProductActionPanel from "../ProductActionPanel";
import Gallery1 from "../galleries/Gallery1";
import ComboProducts from "../others/ComboProducts2";
import ProductOptionsPanel12 from "../productOptionsPanels/ProductOptionsPanel12";

import { Product } from "@/types";
export default function DetailsAccessories2({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="rbt-full-width-wrapper">
        <div className="row row--16 justify-content-center mt_dec--16">
          <div className="col-xxl-8 col-xl-7 col-lg-12 col-12 mt--16">
            <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
              <div className="row row--8 align-items-center rbt-mobile-row rbt-grid-masonary-variation-markup position-relative">
                <Gallery1 />
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
            <div className="row row--12 mt--24">
              <div className="col-xl-12">
                <DescriptionTab1 />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-12 col-12 mt--16">
            <div className="rbt-single-product-content rbt-content-top-sticky-on-img ml--0 mt--0 w-100 rbt-product-variations rbt-sticky-top-150">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text"
              >
                Bluetooth-Speakers
              </a>
              <h2 className="rbt-card-title mt--12">{product.title}</h2>
              <p className="description-text b2 mt--16">
                At vero eos et accusamus et iusto dignissimos ducimus blanditiis
                praesentium voluptatu atque...
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
                    <span className="rbt-bold--text">Estimated Delivery :</span>
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
              <ProductOptionsPanel12 />

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
                    <span className="rbt-bold--text mr--4">Resolution :</span>
                    <span className="text">3840×2160</span>
                  </li>
                  <li>
                    <span className="rbt-bold--text mr--4">
                      Release years :
                    </span>
                    <span className="text"> Jan 2022</span>
                  </li>
                  <li>
                    <span className="rbt-bold--text mr--4">Motherboard :</span>
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
  );
}
