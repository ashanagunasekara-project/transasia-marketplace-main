'use client';

import Image from "next/image";
import SplashScrollLink from "@/components/splash/SplashScrollLink";
import { useParallax } from "@/hooks/useParallax";

export default function Banner() {
  const parallaxRef = useParallax();

  return (
    <>
      <div ref={parallaxRef} className="rbt-splash-banner-area rbt-product-banner position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
                  <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                    <h6 className="rbt-banner-subtitle-two h4 mb-8 rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                      Perfect for every market
                    </h6>
                    <div className="rbt-overlay-text rbt-scroll-trigger fade_in animation-order-2">
                      Ecommerce
                    </div>
                    <h2 className="rbt-banner-title mb-0">
                      <span className="rbt-bold--text d-block rbt-scroll-trigger fade_in animation-order-3">
                        The Most{" "}
                        <span className="rbt-gradient-text">Powerful</span>
                      </span>
                      <span className="rbt-banner-title-sm-text rbt-text-regular rbt-scroll-trigger fade_in animation-order-4">
                        Nextjs eCommerce Template
                      </span>
                    </h2>
                    {/* <div className="rbt-pricing-part d-flex align-items-center flex-row justify-content-center rbt-scroll-trigger fade_in animation-order-5">
                      <p className="rbt-price-desc-text m-0 rbt-text-semi-bold rbt-text-color-gray-400">
                        Intro Sell Offer
                      </p>
                      <span className="rbt-price-text offer-price rbt-text-color-warning">
                        $17.99
                      </span>
                      <span className="rbt-offer-badge">40% OFF</span>
                    </div> */}
                    <div className="rbt-banner-btn-grp d-flex rbt-gap--16 mt--32 justify-content-center">
                      <SplashScrollLink
                        section="demos"
                        className="rbt-btn splash-btn icon-reverse-right rbt-scroll-trigger fade_in animation-order-6"
                      >
                        <span className="icon-left">
                          <i className="fa-sharp fa-solid fa-circle-play mr--4" />
                        </span>
                        <span>Pre-built sites</span>
                        <span className="icon-right">
                          <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                        </span>
                      </SplashScrollLink>
                      <SplashScrollLink
                        section="admin-dashboard"
                        className="rbt-btn splash-btn icon-reverse-right rbt-btn-border rbt-text-color-white rbt-scroll-trigger fade_in animation-order-7"
                      >
                        <span className="icon-left">
                          <i className="fa-regular fa-laptop mr--4" />
                        </span>
                        <span>Admin Dashboard</span>
                        <span className="icon-right">
                          <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                        </span>
                      </SplashScrollLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-splash-banner-img">
          <Image
            priority
            fetchPriority="high"
            alt="Unimart Splash Banner Background"
            src="/assets/images/splash/banner/banner-bg.webp"
            width={1920}
            height={766}
            sizes="100vw"
          />
        </div>
        <div className="rbt-component-image-wrap">
          <div
            className="rbt-component-image image-1"
            data-parallax='{"x": 0, "y": 100}'
          >
            <Image
              loading="lazy"
              className="rbt-scroll-trigger fade_in animation-order-1"
              alt="Unimart Component Image"
              src="/assets/images/splash/banner/component-img-1.webp"
              width={179}
              height={446}
            />
          </div>
          <div
            className="rbt-component-image image-2"
            data-parallax='{"x": 0, "y": -200}'
          >
            <Image
              loading="lazy"
              className="rbt-scroll-trigger fade_in animation-order-2"
              alt="Unimart Component Image"
              src="/assets/images/splash/banner/component-img-2.webp"
              width={232}
              height={330}
            />
          </div>
          <div
            className="rbt-component-image image-3"
            data-parallax='{"x": 0, "y": 150}'
          >
            <Image
              loading="lazy"
              className="rbt-scroll-trigger fade_in animation-order-3"
              alt="Unimart Component Image"
              src="/assets/images/splash/banner/component-img-3.webp"
              width={232}
              height={407}
            />
          </div>
          <div
            className="rbt-component-image image-4"
            data-parallax='{"x": 0, "y": -100}'
          >
            <Image
              loading="lazy"
              className="rbt-scroll-trigger fade_in animation-order-4"
              alt="Unimart Component Image"
              src="/assets/images/splash/banner/component-img-4.webp"
              width={112}
              height={277}
            />
          </div>
          <div
            className="rbt-component-image image-5"
            data-parallax='{"x": 0, "y": 50}'
          >
            <Image
              loading="lazy"
              className="rbt-scroll-trigger fade_in animation-order-5"
              alt="Unimart Component Image"
              src="/assets/images/splash/banner/component-img-5.webp"
              width={161}
              height={257}
            />
          </div>
        </div>
      </div>
     
    </>
  );
}
