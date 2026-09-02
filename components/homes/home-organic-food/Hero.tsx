"use client";

import { perfumeSlides } from "@/data/heroSlides";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        {/* Start Product Banner Area */}
        <div className="row row--12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <Swiper
              className="swiper rbt-hero-banner-activation-3 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow"
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
              {perfumeSlides.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-banner-inner">
                      <div className="rbt-product-banner-content text-left d-flex justify-content-start align-items-end p--72 p_sm--24 m--0">
                        <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                          <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                            Exclusive Offer Going
                          </h6>
                          <h1 className="rbt-title mb-0 rbt-text-color-white h1 rbt-text-capitalize">
                            <span className="rbt-bold--text d-block">
                              Discover the Unimart Organic 
                            </span>
                            fresh staples and everyday nourishment.
                          </h1>
                          <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--32 mt_sm--16">
                            <Link
                              className="rbt-btn"
                              href={`/shop-by-categories`}
                            >
                              Shop Collection
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
                        <Image
                          alt="eCommerce Product Banner Background"
                          src={item.imgSrc || ""}
                          width={3616}
                          height={1120}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
            </Swiper>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
