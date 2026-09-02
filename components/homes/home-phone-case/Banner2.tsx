import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-1">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img rbt-card-has-animated rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    className="h-100 w-100"
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-04-a2.webp"
                    width={1296}
                    height={720}
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0">SALE UPTO 70%</h6>
                    <h3 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">Phone Holders</span>{" "}
                      Deals
                    </h3>
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
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-2">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img rbt-card-has-animated rbt-scroll-trigger zoom_in animation-order-2">
                  <Image
                    className="h-100 w-100"
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-04-a1.webp"
                    width={1296}
                    height={720}
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0">SALE UPTO 70%</h6>
                    <h3 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">Seal The</span> Deal Now
                    </h3>
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
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
