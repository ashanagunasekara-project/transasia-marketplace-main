import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-right-style">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-banner-content-lg-wider">
                    <h6 className="rbt-banner-subtitle mb-0">HURRY SALE 50%</h6>
                    <h2 className="rbt-banner-title mb-0 h1">
                      <span className="rbt-bold--text">Seal The Mega </span>Deal
                      Now
                    </h2>
                    <p className="rbt-banner-description">
                    Don’t miss this limited-time offer! Grab your favorite items 
                    at half price and upgrade your shopping experience today.
                    </p>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn" href={`/shop`}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-11.webp"
                  width={2640}
                  height={840}
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
