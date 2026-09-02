import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="wrapper p-0">
        <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-md-size rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner container">
            <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                  Embrace Comfy Wear
                </h6>
                <h2 className="rbt-title mb-0 rbt-text-color-white h1 rbt-text-capitalize">
                  Keep your focus with the perfect
                  <span className="rbt-bold--text d-block">
                    balance of form and function
                  </span>
                </h2>
                <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--24 mt_sm--16 justify-content-center">
                  <Link className="rbt-btn" href={`/shop-by-categories`}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3"
            data-black-overlay={3}
          >
            <Image
              alt="eCommerce Product Banner Background"
              src="/assets/images/product-banner/product-banner-organic-b-01.webp"
              width={3840}
              height={760}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
