import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import Image from "next/image";

import Slider6 from "../sliders/Slider6";
import Facts from "@/components/common/other-components/Facts";
import ProductActionPanel from "../ProductActionPanel";
import ProductOptionsPanel6 from "../productOptionsPanels/ProductOptionsPanel6";
import Tooltip from "@/components/common/ui/Tooltip";

import { Product } from "@/types";
export default function DetailsPetAccessories({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container-fluid plr--24 rbt-sticky-top-150">
        <div className="row row--0 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24 order-sm-1">
            <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
              <div className="rbt-medea-lg-img-area">
                <Slider6 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 mt--24 order-2 rbt-single-mobile-view-sidebar order-sm-2 order-xl-3 d-flex justify-content-end">
            <div className="row row--12 rbt-single-product-content rbt-content-top-sticky-on-img rbt-product-variations rbt-content-top-sticky-on-img-vr">
              <div className="col-lg-6">
                <div className="rbt-info-wrapper d-flex mt--0">
                  <ProductRating product={product} className="mt--0"><Facts /></ProductRating>
                </div>
                <h2 className="rbt-card-title mt--12">{product.title} </h2>
                <div className="rbt-info-wrapper d-flex mt--16">
                  <div className="prd-info-section d-none">
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
                <div className="rbt-info-wrapper d-block mt--24">
                  <ul className="product-details-list shipment-details-list">
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
              <div className="col-lg-6 products-brand-hidden">
                <div className="rbt-info-wrapper d-flex justify-content-between mt--0">
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
                {/* Start Dynamic Color Swatches Area */}
                <ProductOptionsPanel6 />

                {/* End Dynamic Color Swatches Area */}
                <ProductActionPanel product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
