"use client";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/common/ui/MagneticButton";
import { productBanners } from "@/data/collections";
import { formatCurrency } from "@/lib/price";

const banner = productBanners[2];

function ProductBannerStyleThree() {
  return (
    <>
      <div
        id="rbt-prd-banner-block-03"
        className="rbt-component-area rbt-product-banner-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Product Banners <span className="rbt-bold--text">Three</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Product Banner Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
              <div className="rbt-product-banner rbt-product-banner-style-three rbt-curved-style-box">
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section">
                      <h6 className="rbt-banner-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-0">
                        Exclusive Weekend Discount
                      </h6>
                      <h2 className="rbt-banner-title title-capitalize-text mb-0 text-fsize-38 rbt-scroll-trigger fade_in animation-order-2">
                        Feel-The good
                        <span className="rbt-bold--text">
                          shopping Up to 50% Discount
                        </span>
                      </h2>
                      <h3 className="rbt-secondery-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-3">
                        Incredibly slim designs.....
                      </h3>
                      <div className="rbt-pricing-part rbt-scroll-trigger fade_in animation-order-4">
                        {banner.oldPrice ? (
                          <del className="rbt-dis-price-text">
                            {formatCurrency(banner.oldPrice)}
                          </del>
                        ) : null}
                        <span className="rbt-price-text offer-price">
                          {formatCurrency(banner.price)}
                        </span>
                      </div>
                    </div>
                    <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-5">
                      <MagneticButton
                        as={Link}
                        className="rbt-btn rbt-btn-round rbt-magnetic-button"
                        href={`/shop`}
                      >
                        <i className="fa-solid fa-arrow-up-right" /> SHOP NOW
                      </MagneticButton>
                    </div>
                  </div>
                  <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                    <Image
                      alt="Ecommerce Product Banner Image"
                      src="/assets/images/product-banner/product-banner-img-03.webp"
                      width={1320}
                      height={435}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Product Banner Area */}
        </div>
      </div>
    </>
  );
}

export default ProductBannerStyleThree;
