import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2Bottom rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div
              className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-1"
              data-black-overlay={1}
            >
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-content rbt-content-style-one">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0">HURRY SALE 50%</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Phone Holders </span>
                      Deals
                    </h2>
                    <p className="rbt-banner-description">
                      sitar nostrum conctetur Volupq .
                    </p>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-product-banner-img rbt-full-width-img h-100 rbt-scroll-trigger zoom_in animation-order-1">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-12.webp"
                  width={1296}
                  height={640}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div
              className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-2"
              data-black-overlay={1}
            >
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-content rbt-content-style-one">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0">SALE UPTO 70%</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Seal The </span>Matching
                    </h2>
                    <p className="rbt-banner-description">
                      sitar nostrum conctetur Volupq .
                    </p>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-product-banner-img rbt-full-width-img h-100 rbt-scroll-trigger zoom_in animation-order-2">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-13.webp"
                  width={1296}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
