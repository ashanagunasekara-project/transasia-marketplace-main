import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-medium rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner">
            <div className="rbt-product-banner-content text-center p--72 d-flex justify-content-center align-items-center">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0">
                  Exclusive Offer Going
                </h6>
                <h1 className="rbt-title mb-0 h1 rbt-text-capitalize">
                  <span className="rbt-bold--text d-block">
                    Discover the Unimart Beauty Lab
                  </span>
                  radiant skin and everyday self-care rituals.
                </h1>
                <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--32 mt_sm--16 justify-content-center">
                  <Link className="rbt-btn" href={`/shop-by-categories`}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <Image
                alt="eCommerce Product Banner Background"
                src="/assets/images/product-banner/product-banner-beauty-lg-a1.webp"
                width={3440}
                height={1324}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
