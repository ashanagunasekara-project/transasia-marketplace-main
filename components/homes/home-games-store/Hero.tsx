"use client";

import Image from "next/image";
import VideoModal from "@/components/common/ui/VideoModal";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white">
      <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-banner-four-var-two rbt-banner-four-var-two-classic rbt-scroll-trigger fade_in animation-order-3">
        <div className="rbt-banner-inner rbt-rounded--0">
          <div className="container">
            <div className="col-xxl-6 col-xl-8 col-md-12 col-sm-12 col-12 ms-auto d-flex justify-content-center align-items-center position-relative z-1">
              <div className="rbt-hero-banner-content text-center rbt-content-has-shape mt--60">
                <h4 className="subtitle">THE CREW</h4>
                <h1 className="title">
                  MOTOR<span className="rbt-text-color-extra-eight">FEST</span>
                </h1>
                <h3 className="rbt-text-color-white mb--0">
                  A UBISOFT ORIGINAL
                </h3>
                <ul className="rbt-desc-list rbt-desc-list-color-light mt--16 justify-content-center">
                  <li>GAMERADAR+</li>
                  <li>GAMESPEW</li>
                  <li>PUSH SQUAREs</li>
                </ul>
                <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                  <a
                    href="#"
                    className="rbt-btn rbt-bg-color-secondary mt--32 mt_sm--16"
                  >
                    <i className="fa-duotone fa-regular fa-play mr--8" />
                    Watch Trailer Now
                  </a>
                </VideoModal>
              </div>
            </div>
          </div>
          <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
            <Image
              alt="eCommerce Product Banner Background"
              width={3840}
              height={1360}
              src="/assets/images/product-banner/product-img-banner-game-a-01.webp"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
