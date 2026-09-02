"use client";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/common/ui/MagneticButton";
function ProductBannerStyleTwo() {
  return (
    <>
      <div
        id="rbt-prd-banner-block-02"
        className="rbt-component-area rbt-product-banner-area rbt-section-gap rbt-bg-color-white"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Product Banners <span className="rbt-bold--text">Two</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-lg-6">
              {/* Start Product Banner Area */}
              <div className="rbt-product-banner rbt-product-banner-style-two rbt-curved-style-box h-100">
                <div className="rbt-banner-inner h-100">
                  <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                    <Image
                      alt="Ecommerce Product Banner Image"
                      src="/assets/images/product-banner/product-banner-img-02.webp"
                      width={1296}
                      height={890}
                    />
                  </div>
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                      <h6 className="rbt-banner-subtitle mb-0">
                        Power Up Deals
                      </h6>
                      <h2 className="rbt-banner-title title-capitalize-text mb-0">
                        <span className="rbt-bold--text">Red Camera </span>
                        Plus
                      </h2>
                      <h3 className="rbt-secondery-subtitle mb-0">
                        Holiday Cheers
                      </h3>
                    </div>
                    <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
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
              {/* End Product Banner Area */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBannerStyleTwo;
