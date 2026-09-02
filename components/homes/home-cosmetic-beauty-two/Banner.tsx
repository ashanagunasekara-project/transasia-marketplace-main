"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-section-gapTop">
      <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-banner-four-var-two rbt-banner-four-var-two-medium rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
        <div className="rbt-banner-inner rbt-rounded--0">
          <div className="rbt-product-banner-content text-left d-flex align-items-end">
            <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
              <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                Rich Moisture
              </h6>
              <h1 className="rbt-title mb-0 rbt-text-color-white">
                <span className="rbt-bold--text d-block">
                  Luxe Bloom Rich Hydrating
                </span>
                Floral Infused Luxe Bloom Moisturizer
              </h1>
              <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--16 mt_sm--16">
                <Link className="rbt-btn" href={`/shop-by-categories`}>
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
          <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
            <Image
              alt="eCommerce Product Banner Background"
              src="/assets/images/product-banner/product-banner-lg-cb-01.webp"
              width={3840}
              height={1360}
            />
          </div>
          <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
            <MagneticButton
              as="a"
              href="#"
              className="rbt-btn rounded-player popup-video rbtplayer xl-size bg-var-three position-absolute z-5"
              data-rbt-position-horigental={45}
              data-rbt-position-vertical={45}
            >
              <span>
                <i className="fa-solid fa-play" />
              </span>
            </MagneticButton>
          </VideoModal>
        </div>
      </div>
    </div>
  );
}
