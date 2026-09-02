'use client';

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const parallaxRef = useParallax();
  return (
    <div ref={parallaxRef} className="rbt-component-area rbt-product-banner-area rbt-mobile-hero-section-area">
      <div className="container-fluid p-0">
        <div className="row row--0">
          <div className="col-12">
            <figure className="hero-img">
              <Image
                alt="Product Banner Image"
                src="/assets/images/hero-slider-banner/slider-mobile-01.webp"
                width={3840}
                height={1728}
                priority
              />
              <Image
                className="icon-img icon-img-01"
                data-parallax='{"x": 0, "y": 60}'
                alt="Product Banner Icon Image"
                src="/assets/images/hero-slider-banner/slider-mobile-icon-01.webp"
                width={200}
                height={242}
              />
              <Image
                className="icon-img icon-img-02"
                data-parallax='{"x": 0, "y": 60}'
                alt="Product Banner Icon Image"
                src="/assets/images/hero-slider-banner/slider-mobile-icon-02.webp"
                width={269}
                height={265}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
