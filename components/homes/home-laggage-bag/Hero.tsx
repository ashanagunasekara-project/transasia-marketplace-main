import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        {/* Start Product Banner Area */}
        <div className="swiper rbt-hero-banner-activation-3 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
                <div className="rbt-banner-inner rbt-rounded--0">
                  <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
                    <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                      <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white rbt-text-capitalize">
                        Exclusive Offer Going
                      </h6>
                      <h1 className="rbt-title mb-0 rbt-text-color-white rbt-text-regular rbt-text-capitalize">
                        <span className="rbt-bold--text d-block">
                          Discover the Unimart Luggage Edit
                        </span>
                        durable shells and travel-ready comfort.
                      </h1>
                      <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--16 mt_sm--16 justify-content-center">
                        <Link className="rbt-btn" href={`/shop-by-categories`}>
                          Shop Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
                    <Image
                      alt="eCommerce Product Banner Background"
                      src="/assets/images/product-banner/hero-banner-lb-one-01.webp"
                      width={3840}
                      height={1300}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
