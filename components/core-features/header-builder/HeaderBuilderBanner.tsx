'use client';

import { useParallax } from '@/hooks/useParallax';
import { WaveSplashIcon } from '../../svg-icons';
import Image from "next/image";

function HeaderBuilderBanner() {
  const paralaxRef = useParallax();
  return (
    <>
      <div className="rbt-builder-banner rbt-builder-banner-var-2 rbt-splash-banner-bg-var-1 rbt-splash-banner-area">
        <div className="container-fluid position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="rbt-splash-section-title text-center">
                <span className="subtitle">Enhance Your Website</span>
                <h1 className="rbt-title mb--24 rbt-text-capitalize">
                  <span className="rbt-bold--text">
                    Header Builder
                    <br />
                  </span>
                  <span className="rbt-title-sm-text">
                    Creating Unlimited Headers
                  </span>
                </h1>
                <p className="rbt-description">
                  Powerful Ajax Filters to help your customers quickly find what
                  they are looking for, speed up the purchase process, and
                  improve the conversion rate of your online shop.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div ref={paralaxRef} className="rbt-banner-part-right">
                <div className="rbt-content">
                  <figure>
                    <Image
                      alt="Component Image"
                      src="/assets/images/splash/banner/image1.webp"
                      width={598}
                      height={505}
                    />
                  </figure>
                  <div className="rbt-component-image-wrap">
                    <div
                      className="rbt-component-image image-6"
                      data-parallax='{"x": 0, "y": 100}'
                    >
                      <Image
                        className="rbt-scroll-trigger fade_in animation-order-1"
                        alt="Unimart Component Image"
                        src="/assets/images/splash/banner/component-img-7.webp"
                        width={128}
                        height={138}
                      />
                    </div>
                    <div
                      className="rbt-component-image image-7"
                      data-parallax='{"x": 0, "y": 150}'
                    >
                      <Image
                        className="rbt-scroll-trigger fade_in animation-order-2"
                        alt="Unimart Component Image"
                        src="/assets/images/splash/banner/component-img-6.webp"
                        width={125}
                        height={209}
                      />
                    </div>
                    <div
                      className="rbt-component-image image-8"
                      data-parallax='{"x": 0, "y": -150}'
                    >
                      <Image
                        className="rbt-scroll-trigger fade_in animation-order-3"
                        alt="Unimart Component Image"
                        src="/assets/images/splash/banner/component-img-8.webp"
                        width={112}
                        height={125}
                      />
                    </div>
                    <div className="rbt-indicator">
                      <span>
                        <WaveSplashIcon />
                      </span>
                      <span>
                        Massive Header CollectionFully with Customizable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="rbt-splash-btn-circle rbt-scroll-down-btn">
            <Image
              className="rbt-animate-rotation-forward"
              alt="Text Image"
              src="/assets/images/splash/others/circle-btn-text.png"
              width={109}
              height={109}
            />
            <span className="circle-btn-center-icon">
              <Image
                alt="Icon"
                src="/assets/images/splash/icons/icon21.png"
                width={48}
                height={49}
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderBuilderBanner;
