import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2Bottom rbt-bg-color-white">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-1">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-scroll-trigger fade_in animation-order-2 w-auto">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-14.webp"
                    width={775}
                    height={300}
                  />
                </div>
                <div className="rbt-product-banner-content rbt-content-style-two">
                  <div className="rbt-content-section rbt-banner-content-lg-wider">
                    <h6 className="rbt-banner-subtitle mb-0">Power Up Deals</h6>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text">Safe Arctic Bunle </span>
                      Home Base + 2 cameras
                    </h2>
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
