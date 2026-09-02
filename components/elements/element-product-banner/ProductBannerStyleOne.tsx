"use client";
import MagneticButton from "@/components/common/ui/MagneticButton";
import Image from "next/image";
import Link from "next/link";
function ProductBannerStyleOne() {
  return (
    <>
      <div
        id="rbt-prd-banner-block-01"
        className="rbt-component-area rbt-product-banner-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Product Banners <span className="rbt-bold--text">One</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Product Banner Area */}
          <div className="row row--12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="rbt-product-banner rbt-product-banner-style-one">
                <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-01.webp"
                    width={435}
                    height={250}
                  />
                </div>
                <div className="rbt-banner-inner rbt-curved-style-box">
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                      <h6 className="rbt-banner-subtitle mb-0">
                        Power Up Deals
                      </h6>
                      <h2 className="rbt-banner-title title-capitalize-text mb-0">
                        <span className="rbt-bold--text">New Device</span>{" "}
                        coming Soon
                      </h2>
                      <h3 className="rbt-secondery-subtitle mb-0">
                        Land major deals
                      </h3>
                    </div>
                    <div className="rbt-banner-btn rbt-magnet-area rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                      <MagneticButton
                        as={Link}
                        className="rbt-btn rbt-btn-round rbt-magnetic-button"
                        href={`/shop`}
                      >
                        <i className="fa-solid fa-arrow-up-right" /> SHOP NOW
                      </MagneticButton>
                    </div>
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

export default ProductBannerStyleOne;
