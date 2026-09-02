'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
export default function Hero() {
  const paralaxRef = useParallax();
  
  return (
    <div ref={paralaxRef} className="rbt-component-area rbt-products-banner-area rbt-dog-hero-section-area rbt-floating-hero-banner rbt-bg-color-white">
      <div className="wrapper plr--0">
        <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-rounded--0 rbt-banner-four-var-two-larger-static rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner">
            <div className="rbt-product-banner-content text-start d-flex justify-content-left align-items-start container">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0">Offer Going</h6>
                <h1 className="rbt-title mb-0 h1">
                  <span className="rbt-bold--text d-block">Top Pet Shop</span>
                </h1>
              </div>
            </div>
            <p className="rbt-desc rbt-floating-desc-right-bottom">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the underground here
              goes fast.
            </p>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3 rbt-bg-color-brand-50 rbt-banner-has-bg-icon rbt-banner-has-bg-grid-both">
              <Image
                alt="eCommerce Product Banner Background"
                width={3840}
                height={1404}
                src="/assets/images/product-banner/dog-accessoris-01.webp"
                priority
              />
              <div
                className="bg-shape-icon"
                data-parallax='{"x": 0, "y": 100}'
                data-rbt-position-horigental={60}
                data-rbt-position-vertical={13}
              >
                <Image
                  alt="Ecommerce Shape Background icon"
                  width={175}
                  height={154}
                  src="/assets/images/bg-shape/dog-belt-shape-01.webp"
                />
              </div>
              <div
                className="bg-shape-icon"
                data-parallax='{"x": 0, "y": 100}'
                data-rbt-position-horigental={16}
                data-rbt-position-vertical={64}
              >
                <Image
                  alt="Ecommerce Shape Background icon"
                  width={146}
                  height={143}
                  src="/assets/images/bg-shape/dog-bone-shape-01.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
