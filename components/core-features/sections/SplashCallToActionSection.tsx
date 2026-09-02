'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
export default function SplashCallToActionSection() {
  const paralaxRef = useParallax();
  return (
    <>
      {/* Start Call to Action Area */}
      <div ref={paralaxRef} className="splash-section-gap rbt-splash-call-to-action-area position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--0">
                <span className="subtitle rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  Personalize Your Template
                </span>
                <h2 className="rbt-title rbt-text-color-white position-relative">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Grab
                    <span className="rbt-splash-gradient-text">
                      Unimart
                    </span>{" "}
                    Now Before
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    Price Increase
                  </span>
                </h2>
                <a
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                  className="rbt-btn splash-btn icon-reverse-right rbt-scroll-trigger fade_in animation-order-4"
                  target="_blank"
                >
                  <span className="icon-left">
                    <i className="fa-sharp fa-solid fa-circle-play mr--4" />
                  </span>
                  <span>Purchase Unimart</span>
                  <span className="icon-right">
                    <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                  </span>
                </a>
                <div className="mt--56 d-flex align-items-center justify-content-center gap-4 rbt-scroll-trigger fade_in animation-order-5">
                  <span className="b2 mb--0 rbt-text-color-gray-300 text-nowrap">
                    Powered by
                  </span>
                  <a
                    href="https://themeforest.net/user/rainbow-themes/portfolio"
                    target="_blank"
                  >
                    <Image
                      alt="Rainbow Themes Logo"
                      src="/assets/images/splash/icons/rainbow-logo.png"
                      width={235}
                      height={38}
                    />
                  </a>
                </div>
              </div>
              <div className="rbt-component-image-wrap">
                <div
                  className="rbt-component-image image-1"
                  data-parallax='{"x": 0, "y": -40}'
                >
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-1"
                    alt="Component Image"
                    src="/assets/images/splash/others/component-image5.png"
                    width={272}
                    height={229}
                  />
                </div>
                <div
                  className="rbt-component-image image-2"
                  data-parallax='{"x": -40, "y": 0}'
                >
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-2"
                    alt="Component Image"
                    src="/assets/images/splash/others/component-image6.png"
                    width={271}
                    height={126}
                  />
                </div>
                <div
                  className="rbt-component-image image-3"
                  data-parallax='{"x": 40, "y": 0}'
                >
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-3"
                    alt="Component Image"
                    src="/assets/images/splash/others/component-image7.png"
                    width={385}
                    height={179}
                  />
                </div>
                <div
                  className="rbt-component-image image-4"
                  data-parallax='{"x": 0, "y": 40}'
                >
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-4"
                    alt="Component Image"
                    src="/assets/images/splash/others/component-image8.png"
                    width={360}
                    height={229}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call to Action Area */}
    </>
  );
}
