import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gapTop">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner">
            <div className="rbt-product-banner-content text-left p--72 p_sm--32 d-flex justify-content-start align-items-end">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                  Exclusive Offer Going
                </h6>
                <h2 className="rbt-title mb-0 h1 rbt-text-color-white rbt-text-capitalize">
                  <span className="rbt-bold--text d-block">
                    Keep your focus with the perfect
                  </span>
                  balance of form and function.
                </h2>
                <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--32 mt_sm--16">
                  <Link className="rbt-btn" href={`/shop-by-categories`}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <Image
                alt="eCommerce Product Banner Background"
                src="/assets/images/product-banner/page-banner-one.webp"
                width={3344}
                height={760}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
