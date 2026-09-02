'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

export default function Features() {
  const parallaxRef = useParallax();
  return (
    <div className="rbt-component-area rbt-about-area rbt-section-gap2Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row row--12 align-items-center">
          <div ref={parallaxRef} className="col-lg-6">
            <div className="rbt-thumbnail-wrapper">
              <div
                className="rbt-thumbnail thumb-image-1 rbt-curved-style-box"
                data-parallax='{"x": 0, "y": 40}'
              >
                <Image
                  alt="About thumbnail image"
                  src="/assets/images/about/about-image-2.webp"
                  width={687}
                  height={882}
                />
              </div>
              <div
                className="rbt-thumbnail thumb-image-2 rbt-curved-style-box"
                data-parallax='{"x": 0, "y": -30}'
              >
                <Image
                  alt="About thumbnail image"
                  src="/assets/images/about/about-image-3.webp"
                  width={371}
                  height={489}
                />
              </div>
              <div
                className="rbt-thumbnail thumb-image-3 rbt-curved-style-box"
                data-parallax='{"x": 0, "y": -40}'
              >
                <Image
                  alt="About thumbnail image"
                  src="/assets/images/about/about-image-4.webp"
                  width={564}
                  height={428}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-about-feature-area">
              <div className="inner">
                <div className="rbt-section-title text-start">
                  <h3 className="rbt-title mb--16">
                    Perfection is achieved not when there is nothing more.
                  </h3>
                  <p className="rbt-description">
                    Founded with a vision to revolutionize online shopping, our
                    journey is driven by innovation and customer satisfaction.
                    We are committed to providing a seamless shopping experience
                    that is secure, fast, and tailored to your unique needs.
                  </p>
                </div>
                {/* Start Feature List  */}
                <div className="rbt-about-feature-wrapper mt--32">
                  <div className="rbt-about-feature feature-style-1">
                    <span className="icon">
                      <i className="fa-regular fa-cart-shopping-fast" />
                    </span>
                    <div className="rbt-feature-content">
                      <h6 className="rbt-feature-title">
                        Innovation in Shopping
                      </h6>
                      <p className="rbt-feature-description">
                        Our platform is designed with the latest technology to
                        make online shopping enjoyable.
                      </p>
                    </div>
                  </div>
                  <div className="rbt-about-feature feature-style-1">
                    <span className="icon">
                      <i className="fa-regular fa-truck-bolt" />
                    </span>
                    <div className="rbt-feature-content">
                      <h6 className="rbt-feature-title">
                        Secure &amp; Fast Delivery
                      </h6>
                      <p className="rbt-feature-description">
                        Enjoy quick and reliable shipping with complete security
                        and tracking at every step.
                      </p>
                    </div>
                  </div>
                  <div className="rbt-about-feature feature-style-1">
                    <span className="icon">
                      <i className="fa-regular fa-bags-shopping" />
                    </span>
                    <div className="rbt-feature-content">
                      <h6 className="rbt-feature-title">
                        Your Shopping, Your Way
                      </h6>
                      <p className="rbt-feature-description">
                        Explore a wide range of products tailored to suit your
                        unique needs and preferences.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Feature List  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
