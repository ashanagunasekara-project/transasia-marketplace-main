"use client";
import { campingSlides } from "@/data/heroSlides";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/common/ui/Countdown";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-camping-hero-section-area rbt-bg-color-white">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light p-0 overflow-hidden">
          <div className="container-fluid p-0">
            {/* Start Product Banner Area */}
            <Swiper
              className="swiper rbt-hero-banner-activation-3 rbt-slideshow"
              {...{
                slidesPerView: 1,
                spaceBetween: 24,
                grabCursor: true,
                loop: true,
                speed: 500,
                draggable: true,
                effect: "fade",
                fadeEffect: {
                  crossFade: true,
                },
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                },
                pagination: {
                  el: ".rbt-swiper-pagination, .abc",
                  clickable: true,
                },
                navigation: {
                  prevEl: ".rbt-arrow-left",
                  nextEl: ".rbt-arrow-right",
                },
                breakpoints: {
                  575: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                },
              }}
              modules={[Pagination, Navigation, Autoplay, EffectFade]}
            >
              {campingSlides.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-banner-inner rbt-rounded--0">
                      <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
                        <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                          <h6 className="rbt-banner-subtitle-two h4 mb-0">
                            Exclusive Offer Going
                          </h6>
                          <h1 className="rbt-title mb-0 rbt-text-regular rbt-text-capitalize">
                            <span className="rbt-bold--text d-block">
                              Epic deals for any Camping
                            </span>
                            Up to 30% off gear and clothing
                          </h1>

                          <div className="rbt-countdown-sections d-flex justify-content-center align-items-center mt--24">
                            <div className="rbt-countdown-one bg-variation-secondary cd-border-style">
                              <Countdown />
                            </div>
                          </div>

                          <div className="rbt-banner-btn-grp d-flex flex-wrap rbt-gap--16 mt--32 mt_sm--20 justify-content-center">
                            <Link
                              className="rbt-btn rbt-btn-border rbt-text-color-black rbt-border-color-black bg-transparent shadow-none"
                              href={`/shop-by-categories`}
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
                        <Image
                          alt={item.alt || ""}
                          src={item.imgSrc || ""}
                          width={3616}
                          height={1160}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
