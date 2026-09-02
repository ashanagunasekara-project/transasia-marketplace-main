"use client";
import { basketballBanners } from "@/data/heroSlides";
import { formatCurrency } from "@/lib/price";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const BASKETBALL_HERO_ANIMATION_CLASSES = [
  "animation-order-3",
  "animation-order-1",
  "animation-order-2",
];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white pt--24">
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
              modules={[Pagination, Navigation, EffectFade, Autoplay]}
            >
              {basketballBanners.map((item, index) => {
                const animationClass =
                  BASKETBALL_HERO_ANIMATION_CLASSES[index] ??
                  "animation-order-1";

                return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className={`rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-smaller rbt-bg-color-brand-100 rbt-scroll-trigger fade_in ${animationClass}`}
                  >
                    <div className="rbt-banner-inner">
                      <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
                        <div className="rbt-content-section rbt-content-wider rbt-slideshow-content-inner effect_fadeindown">
                          <h6
                            className={`rbt-banner-subtitle-two h4 mb-0  ${
                              index != 0 ? "rbt-text-color-white" : ""
                            } `}
                          >
                            {item.subtitle}
                          </h6>
                          <h2
                            className={`rbt-banner-title rbt-banner-title-lg mb-0 ${
                              index != 0 ? "rbt-text-color-white" : ""
                            } `}
                          >
                            <span className="rbt-bold--text d-block">
                              {item.title?.split("\n")[0] ?? ""}
                            </span>
                            {item.title?.split("\n").slice(1).join(" ") ?? ""}
                          </h2>
                          <div className="rbt-pricing-part d-flex align-items-center flex-row justify-content-center">
                            <p className={`rbt-price-desc-text  ${
                              index != 0 ? "rbt-text-color-white" : ""
                            } `}>
                              Just Starting From
                            </p>
                            <span className="rbt-price-text offer-price">
                              {formatCurrency(item.price)}
                            </span>
                            <OfferBadge
                              price={item.price}
                              oldPrice={item.oldPrice}
                            />
                          </div>
                          <div className="rbt-banner-btn-grp d-flex rbt-gap--16 mt--32 mt_sm--16 justify-content-center">
                            <Link
                              className="rbt-btn"
                              href={`/shop-by-categories`}
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`rbt-product-img rbt-scroll-trigger zoom_in ${animationClass}`}
                      >
                        <Image
                          alt="eCommerce Product Banner Background"
                          src={item.imgSrc || ""}
                          width={3520}
                          height={1106}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                );
              })}
              <div className="rbt-swiper-arrow-wrapper-style-one rbt-swiper-arrow-wrapper-style-one-col-style rbt-swiper-arrow-wrapper-style-one-sm-style rbt-bg-color-white">
                <ul>
                  <li>
                    <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-md rbt-arrow-brand">
                      <div className="custom-overflow">
                        <i className="rbt-icon fa-regular fa-arrow-left" />
                        <i className="rbt-icon-top fa-regular fa-arrow-left" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-md rbt-arrow-brand">
                      <div className="custom-overflow">
                        <i className="rbt-icon fa-regular fa-arrow-right" />
                        <i className="rbt-icon-top fa-regular fa-arrow-right" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-bottom-center" />
            </Swiper>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
