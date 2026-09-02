'use client';

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function SpeedPerformance() {
  const parallaxRef = useParallax();
  return (
    <div ref={parallaxRef} className="splash-sticky-section splash-section-bg-green rbt-sticky-section sticky-sec-3 overflow-hidden">
      <div className="container">
        <div className="row row--24 mt_dec--24 rbt-splash-wide-section-right">
          <div className="col-12 col-lg-5 col-xl-6 mt--24">
            <div className="rbt-splash-section-title mb--24">
              <span className="subtitle rbt-text-color-gray-light rbt-scroll-trigger fade_in animation-order-1">
                Hyper fast Loading Time
              </span>
              <h2 className="rbt-title rbt-text-color-gray-light mb--24">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Exceptional And High
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  Octane Performance
                </span>
              </h2>
              <p className="b1 rbt-text-color-gray-light rbt-scroll-trigger fade_in animation-order-4">
                Accelerate your sales strategy: Outpace competitors with
                lightning-fast <br />
                performance that leaves them in the dust.
              </p>
            </div>
            <div className="d-flex mb--32">
              <Image
                className="rbt-scroll-trigger fade_in animation-order-5"
                alt="Icon"
                src="/assets/images/splash/icons/icon6.png"
                width={80}
                height={80}
              />
              <h5 className="rbt-text-color-gray-light ml--16 rbt-scroll-trigger fade_in animation-order-6">
                Google <br />
                PageSpeed Insights
              </h5>
            </div>
            {/* TODO: Add link to the page speed insights */}
            {/* <a
              href="#"
              className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-7"
            >
              <span className="icon-left">
                <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
              </span>
              <span>Discover Now</span>
              <span className="icon-right">
                <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
              </span>
            </a> */}
          </div>
          <div className="col-12 col-lg-7 col-xl-6 mt--24">
            <div className="rbt-page-speed-presentaion-box">
              <div className="d-flex flex-column align-items-center">
                <div className="gt-matrix mb--24">
                  <Image
                    alt="Icon"
                    src="/assets/images/splash/icons/icon8.png"
                    width={52}
                    height={51}
                  />
                  <span className="rbt-text-color-heading">99% Metrix</span>
                </div>
                <div
                  className="google-speed"
                  data-parallax='{"x": -20, "y": -20}'
                >
                  <div className="rbt-modern-progress-bar" data-percent={96} />
                  <Image
                    alt="Icon"
                    src="/assets/images/splash/icons/icon7.png"
                    width={139}
                    height={72}
                  />
                </div>
              </div>
              <div
                className="rbt-speed-box box-1"
                data-parallax='{"x": 0, "y": 50}'
              >
                <span className="speed-count">0.6s</span>
                <span className="rbt-text-color-heading">
                  Fully interactive
                </span>
              </div>
              <div
                className="rbt-speed-box box-2 rbt-bg-color-white"
                data-parallax='{"x": 0, "y": 50}'
              >
                <span className="speed-count">0.15s</span>
                <span className="rbt-text-color-heading">Fast Response</span>
              </div>
              <div
                className="rbt-speed-box box-3 pr--44 pr_sm--12 rbt-bg-color-white"
                data-parallax='{"x": 0, "y": -50}'
              >
                <span className="speed-count h1 mb--0">100%</span>
                <span className="rbt-text-color-heading">Page SEO</span>
              </div>
              <div
                className="rbt-speed-box box-4"
                data-parallax='{"x": 0, "y": -50}'
              >
                <span className="speed-count">99%</span>
                <span className="rbt-text-color-heading">Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
