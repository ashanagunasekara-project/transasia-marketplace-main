'use client';

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function MobileResponsive() {
  const parallaxRef = useParallax();
  return (
    <div ref={parallaxRef} className="splash-sticky-section splash-section-bg-blue rbt-sticky-section sticky-sec-2 pb_sm--60">
      <div className="container">
        <div className="row row--24 mt_dec--24">
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-mobile-responsive-layout">
              <div
                className="mobile-layout-img"
                data-parallax='{"x": 0, "y": 30}'
              >
                <Image
                  alt="Image"
                  src="/assets/images/splash/others/mobile-layout-img.webp"
                  width={452}
                  className="image-auto"
                  height={391}
                />
              </div>
              <div
                className="mobile-component-img"
                data-parallax='{"x": 0, "y": -50}'
              >
                <Image
                  alt="Image"
                  className="image-auto"
                  src="/assets/images/splash/others/mobile-img.webp"
                  width={492}
                  height={1001}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-splash-section-title mb--24">
              <span className="subtitle rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                Highly Responsive
              </span>
              <h2 className="rbt-title mb--24 rbt-text-color-white">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Mobile-First Design
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  For Very Easy Selling Products
                </span>
              </h2>
              <p className="b1 rbt-text-color-gray-100 rbt-scroll-trigger fade_in animation-order-4">
                Night Cream For Women, Eye Brush Set, Soap Dispenser,
                Highlighter <br />
                Palette, Black Head Remover, Harbal Hair Oil, Waterproof
                Eyeliner, Hair Fall
              </p>
            </div>
            <ul className="rbt-splash-feature-list rbt-text-color-white mb--40">
              <li className="rbt-scroll-trigger fade_in animation-order-5">
                <i className="fa-regular fa-check" />
                <span>1-time charge for lifetime use</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-6">
                <i className="fa-regular fa-check" />
                <span>Smooth Shopping on Any Device</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-7">
                <i className="fa-regular fa-check" />
                <span>Easy to use &amp; intuitive</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-8">
                <i className="fa-regular fa-check" />
                <span>24/7 premium support</span>
              </li>
            </ul>
            <a
              href="#"
              className="rbt-btn splash-btn icon-reverse-left rbt-bg-color-white rbt-text-color-primary rbt-scroll-trigger fade_in animation-order-8"
            >
              <span className="icon-left">
                <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
              </span>
              <span>Build your online store</span>
              <span className="icon-right">
                <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
