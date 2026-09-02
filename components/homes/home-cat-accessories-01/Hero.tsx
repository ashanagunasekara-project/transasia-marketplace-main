'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const paralaxRef = useParallax();
  
  return (
    <div ref={paralaxRef} className="rbt-component-area rbt-products-banner-area rbt-floating-hero-banner rbt-bg-color-white">
      <div className="wrapper plr--0">
        <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-cat-hero-banner-01 rbt-banner-four-var-two rbt-rounded--0 rbt-banner-four-var-two-medium rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner">
            <div className="rbt-product-banner-content text-start d-flex justify-content-between align-items-start container row">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown col-lg-7">
                <h6 className="rbt-banner-subtitle-two mb-0">More Savings!</h6>
                <h1 className="rbt-title mb-0 rbt-text-regular rbt-text-capitalize">
                  <span className="rbt-bold--text d-block">
                    Experience the new Toys
                  </span>
                  In the first Impression
                </h1>
                <Link
                  href={`/shop`}
                  className="rbt-btn rbt-bg-color-secondary mt--16"
                >
                  Shop Collection
                </Link>
              </div>
              <p className="desc col-xl-3 col-lg-5 col-md-7 col-sm-9 b1 mt--32 mt_sm--16">
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the underground
                here goes fast.
              </p>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3 rbt-bg-color-brand-50 rbt-banner-has-top-bottom-flash">
              <div className="wrapper rbt-banner-has-bg-grid-both h-100">
                <Image
                  alt="eCommerce Hero Banner Background"
                  src="/assets/images/product-banner/cat-accessoris-01.webp"
                  width={3840}
                  height={1400}
                  priority
                />
                <div
                  className="bg-shape-icon"
                  data-parallax='{"x": 0, "y": 100}'
                  data-rbt-position-horigental={35}
                  data-rbt-position-vertical={5}
                >
                  <Image
                    alt="Ecommerce Shape Background icon"
                    src="/assets/images/bg-shape/fish-shape-01.webp"
                    width={243}
                    height={243}
                  />
                </div>
                <div
                  className="bg-shape-icon"
                  data-parallax='{"x": 0, "y": 100}'
                  data-rbt-position-horigental={95}
                  data-rbt-position-vertical={10}
                >
                  <Image
                    alt="Ecommerce Shape Background icon"
                    src="/assets/images/bg-shape/suslic-shape-01.webp"
                    width={130}
                    height={130}
                  />
                </div>
                <div
                  className="bg-shape-icon bg-shape-icon-left--50"
                  data-parallax='{"x": 0, "y": 100}'
                  data-rbt-position-horigental={4}
                  data-rbt-position-vertical={10}
                >
                  <Image
                    alt="Ecommerce Shape Background icon"
                    src="/assets/images/bg-shape/gift-shape-01.webp"
                    width={138}
                    height={123}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
