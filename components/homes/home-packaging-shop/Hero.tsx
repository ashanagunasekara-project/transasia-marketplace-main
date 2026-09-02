"use client";

import { banners3 } from "@/data/heroSlides";
import { getHeroEffectClass } from "@/lib/hero-effects";
import { formatCurrency } from "@/lib/price";
import OfferBadge from "@/components/common/ui/OfferBadge";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--0 pb--0">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
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
                {banners3.map((item, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-hero-banner rbt-banner-four-var-two">
                      <div className="rbt-banner-inner">
                        <div className="rbt-product-banner-content">
                          <div
                            className={`rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner ${getHeroEffectClass(item.effectName)}`}
                          >
                            <h6 className="rbt-banner-subtitle-two h4 mb-0">
                              {item.subtitle}
                            </h6>
                            <h2 className="rbt-banner-title rbt-banner-title-lg mb-0 rbt-text-capitalize">
                              <span className="rbt-bold--text d-block">
                                {item.title?.split("\n")[0] ?? ""}
                              </span>
                              {item.title?.split("\n").slice(1).join(" ") ?? ""}
                            </h2>
                            <div className="rbt-pricing-part d-flex align-items-center flex-row">
                              <p className="rbt-price-desc-text">
                                Starting From
                              </p>
                              <span className="rbt-price-text offer-price">
                                {formatCurrency(item.price)}
                              </span>
                              <OfferBadge
                                price={item.price}
                                oldPrice={item.oldPrice}
                              />
                            </div>
                            <div className="rbt-banner-btn">
                              <Link
                                className="rbt-btn"
                                href={`/shop-by-categories`}
                              >
                                Buy Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`rbt-product-img rbt-banner-four-var-two rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                        >
                          <Image
                            alt="eCommerce Product Banner Background"
                            src={item.imgSrc || ""}
                            width={3616}
                            height={1300}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="rbt-swiper-arrow-wrapper-style-one rbt-bg-color-white d-sm-none d-md-block">
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
                <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
              </Swiper>
            </div>
          </div>
          {/* End Product Banner Area */}
        </div>
      </div>
    </>
  );
}
