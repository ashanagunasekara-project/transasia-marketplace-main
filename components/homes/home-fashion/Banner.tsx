import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gapTop rbt-bg-color-gray-light">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-card-has-animated rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-04.webp"
                    width={648}
                    height={380}
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-1">
                      HURRY SALE 50%
                    </h6>
                    <h2 className="rbt-banner-title title-capitalize-text mb-0 rbt-scroll-trigger fade_in animation-order-2">
                      <span className="rbt-bold--text">Trends </span>to Style
                    </h2>
                    <p className="rbt-banner-description rbt-scroll-trigger fade_in animation-order-3">
                    Discover curated fashion pieces designed for timeless style, and effortless confidence.
                    </p>
                    <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-4">
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
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-card-has-animated rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-05.webp"
                    width={648}
                    height={380}
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0 rbt-scroll-trigger fade_in animation-order-1">
                      SALE UPTO 70%
                    </h6>
                    <h2 className="rbt-banner-title title-capitalize-text mb-0 rbt-scroll-trigger fade_in animation-order-2">
                      <span className="rbt-bold--text">Seal The</span> Deal Now
                    </h2>
                    <p className="rbt-banner-description rbt-scroll-trigger fade_in animation-order-3">
                    Refresh your wardrobe with trend‑forward styles and exclusive deals made for you.
                    </p>
                    <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-4">
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
