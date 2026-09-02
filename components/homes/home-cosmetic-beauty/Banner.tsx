import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div
              className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-1 rbt-curved-style-left"
              data-black-overlay={5}
            >
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-07.webp"
                    width={1296}
                    height={956}
                  />
                </div>
                <div className="rbt-product-banner-content has-lg-space-bottom">
                  <div className="rbt-content-section rbt-content-less-wider">
                    <h6 className="rbt-banner-subtitle rbt-text-color-primary mb-0">
                      HURRY SALE 50%
                    </h6>
                    <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                      <span className="rbt-bold--text">The Gorgeous</span>{" "}
                      Beauty deserve.
                    </h2>
                    <p className="rbt-banner-description">
                      Temporibus unde uat exercit ationem nostrum conctetur est
                      wtatem.
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
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div
              className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-2 rbt-curved-style-right"
              data-black-overlay={5}
            >
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-2">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-08.webp"
                    width={1296}
                    height={956}
                  />
                </div>
                <div className="rbt-product-banner-content has-lg-space-bottom">
                  <div className="rbt-content-section rbt-content-less-wider">
                    <h6 className="rbt-banner-subtitle rbt-text-color-primary mb-0">
                      SALE UPTO 70%
                    </h6>
                    <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                      <span className="rbt-bold--text">
                        Lip color gives the
                      </span>
                      beauty
                    </h2>
                    <p className="rbt-banner-description">
                      Temporibus unde uat exercit atio nem sitar nostrum
                      conctetur.
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
  );
}
