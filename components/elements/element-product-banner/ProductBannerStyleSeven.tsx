import Link from "next/link";
import Image from "next/image";
function ProductBannerStyleSeven() {
  return (
    <>
      <div
        id="rbt-prd-banner-block-07"
        className="rbt-component-area rbt-product-banner-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Product Banners <span className="rbt-bold--text">Seven</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Product Banner Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div
                className="rbt-product-banner rbt-product-banner-style-four rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-1"
                data-black-overlay={6}
              >
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section rbt-banner-content-wider">
                      <h6 className="rbt-banner-subtitle mb-0">
                        HURRY SALE 50%
                      </h6>
                      <h2 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text">Trends </span>to Fit
                        Your Style
                      </h2>
                      <p className="rbt-banner-description">
                        Temporibus unde uat exercit ationem sitar nostrum
                        conctetur est Volupq wtatem.
                      </p>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger fade_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-09.webp"
                    width={1520}
                    height={700}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div
                className="rbt-product-banner rbt-product-banner-style-four rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-2"
                data-black-overlay={6}
              >
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content">
                    <div className="rbt-content-section rbt-banner-content-wider">
                      <h6 className="rbt-banner-subtitle mb-0">
                        SALE UPTO 70%
                      </h6>
                      <h2 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text">Seal The</span> Deal
                        Now
                      </h2>
                      <p className="rbt-banner-description">
                        Temporibus unde uat exercit ationem sitar nostrum
                        conctetur Volupq .
                      </p>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger fade_in animation-order-2">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-10.webp"
                    width={1072}
                    height={700}
                  />
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

export default ProductBannerStyleSeven;
