'use client';

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function Flexibility() {
  const parallaxRef = useParallax();
  return (
    <div ref={parallaxRef} className="splash-sticky-section splash-section-bg-yellow rbt-sticky-section sticky-sec-1 overflow-hidden">
      <div className="container">
        <div className="row row--24 mt_dec--24 rbt-splash-wide-section-right">
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-splash-section-title mb--24">
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                35+ customizable sections
              </span>
              <h2 className="rbt-title mb--24">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Customization Flexibility
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  Enhance Your Shopping Experience
                </span>
              </h2>
              <p className="b1 rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-4">
                Effortlessly tailor your experience with intuitive customization
                options, <br />
                empowering you to personalize every aspect of your website.
              </p>
            </div>
            <ul className="rbt-splash-feature-list mb--40">
              <li className="rbt-scroll-trigger fade_in animation-order-5">
                <i className="fa-regular fa-check" />
                <span>Well Structured Code</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-6">
                <i className="fa-regular fa-check" />
                <span>Easy To Customization</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-7">
                <i className="fa-regular fa-check" />
                <span>Sections On Every Page</span>
              </li>
              <li className="rbt-scroll-trigger fade_in animation-order-8">
                <i className="fa-regular fa-check" />
                <span>24/7 premium support</span>
              </li>
            </ul>
            <a
              href="#"
              className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-8"
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
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-custom-section-flexibility-layout-box">
              <div className="layout-img">
                <Image
                  alt="Image"
                  src="/assets/images/splash/others/customization-flexibility-img.webp"
                  width={598}
                  height={344}
                />
              </div>
              <Image
                className="custom-component-image image-1"
                data-parallax='{"x": 0, "y": -50}'
                alt="Image"
                src="/assets/images/splash/others/custom-component-img-1.webp"
                width={221}
                height={296}
              />
              <Image
                className="custom-component-image image-2"
                data-parallax='{"x": -100, "y": 0}'
                alt="Image"
                src="/assets/images/splash/others/custom-component-img-2.webp"
                width={551}
                height={160}
              />
              <Image
                className="custom-component-image image-3"
                data-parallax='{"x": 0, "y": -50}'
                alt="Image"
                src="/assets/images/splash/others/custom-component-img-3.webp"
                width={235}
                height={245}
              />
              <Image
                className="custom-component-image image-4"
                data-parallax='{"x": 0, "y": 50}'
                alt="Image"
                src="/assets/images/splash/others/custom-component-img-4.webp"
                width={242}
                height={257}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
