import Link from "next/link";
import Image from "next/image";
function ProductBannerStyleFive() {
  return (
    <>
      <div
        id="rbt-prd-banner-block-05"
        className="rbt-component-area rbt-product-banner-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Product Banners <span className="rbt-bold--text">Five</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Product Banner Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-yellow-one rbt-banner-resp-var-one rbt-scroll-trigger fade_in animation-order-1">
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                    <Image
                      alt="Ecommerce Product Banner Image"
                      src="/assets/images/product-banner/product-banner-img-06.webp"
                      width={907}
                      height={400}
                    />
                  </div>
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section">
                      <h6 className="rbt-banner-subtitle mb-0">
                        SALE UPTO 70%
                      </h6>
                      <h2 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text">Seal The</span> Deal
                        Now
                      </h2>
                      <p className="rbt-banner-description text-color-darker">
                        Send me exclusive offers, personalised, unique gift
                        ideas, tips for shopping rbt.
                      </p>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
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

export default ProductBannerStyleFive;
