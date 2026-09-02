import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner rbt-rounded--0">
            <div className="rbt-product-banner-content text-left d-flex align-items-end">
              <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                  Exclusive Offer Going
                </h6>
                <h1 className="rbt-title rbt-text-regular mb-0 rbt-text-color-white rbt-text-capitalize">
                  <span className="rbt-bold--text d-block">
                    Experience the new colors
                  </span>
                  In the first Impression
                </h1>
                <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--16 mt_sm--16">
                  <Link
                    className="rbt-btn rbt-bg-color-secondary"
                    href={`/shop-by-categories`}
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <video
                className="video h-100 w-100 rbt-media-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/assets/videos/sneakers-video-1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
