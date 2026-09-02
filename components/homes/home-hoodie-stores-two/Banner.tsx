"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-rounded--0">
      <div className="wrapper">
        <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-smaller rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3 rbt-rounded--0">
          <div className="rbt-banner-inner rbt-rounded--0">
            <div className="rbt-product-banner-content text-left d-flex justify-content-start align-items-end">
              <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                  Embrace Comfy Wear
                </h6>
                <h2 className="rbt-title mb-0 h1 rbt-text-color-white rbt-text-capitalize">
                  Get inspired or build your own art wall with tool
                </h2>
                <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--32 mt_sm--16">
                  <Link className="rbt-btn" href={`/shop-by-categories`}>
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <Image
                alt="eCommerce Product Banner Background"
                src="/assets/images/product-banner/product-banner-hoodie-a-02.webp"
                width={3840}
                height={1360}
              />
            </div>
            <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
              <MagneticButton
                as="a"
                href="#"
                className="rbt-btn rounded-player popup-video position-absolute z-5 rbtplayer xs-size"
                data-rbt-position-vertical={12}
                data-rbt-position-horigental={90}
              >
                <span>
                  <i className="fa-solid fa-play" />
                </span>
              </MagneticButton>
            </VideoModal>
          </div>
        </div>
      </div>
    </div>
  );
}
