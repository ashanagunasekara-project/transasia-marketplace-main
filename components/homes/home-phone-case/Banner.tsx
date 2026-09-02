import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2Top rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-right-style">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-content align-items-start">
                  <div className="rbt-content-section rbt-banner-content-lg-wider">
                    <h6 className="rbt-banner-subtitle mb-0">SALE UPTO 70%</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Seal The Mega </span>Deal
                      Now
                    </h2>
                    <p className="rbt-banner-description">
                      Find them? Keep reading, you’ll find all the information
                      you need! The better your frames fit, the better they
                      flatter...
                    </p>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-phone-a-1.webp"
                  width={2640}
                  height={880}
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
