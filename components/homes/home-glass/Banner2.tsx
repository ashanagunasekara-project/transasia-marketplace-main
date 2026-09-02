import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-five rounded-0 rbt-scroll-trigger fade_in animation-order-1">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-15.webp"
                    width={1296}
                    height={984}
                  />
                </div>
                <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                  <div className="rbt-corner-portion-wrapper rbt-bg-color-white rbt-slideshow-content-inner effect_fadeindown">
                    <h6 className="rbt-banner-subtitle mb-0">HURRY SALE 50%</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Seal The </span>Deal Now
                    </h2>
                    <p className="rbt-banner-description mt--8">
                      Don’t miss this limited-time offer!
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
            <div className="rbt-product-banner rbt-product-banner-style-five rounded-0 rbt-scroll-trigger fade_in animation-order-2">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-2">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-16.webp"
                    width={1296}
                    height={984}
                  />
                </div>
                <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                  <div className="rbt-corner-portion-wrapper rbt-bg-color-white rbt-slideshow-content-inner effect_fadeindown">
                    <h6 className="rbt-banner-subtitle mb-0">HURRY SALE 50%</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Seal The </span>Deal Now
                    </h2>
                    <p className="rbt-banner-description mt--8">
                      Don’t miss this limited-time offer!
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
