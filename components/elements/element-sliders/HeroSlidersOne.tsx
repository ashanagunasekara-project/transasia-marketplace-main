"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { collections2 } from "@/data/collections";
import { getHeroEffectClass } from "@/lib/hero-effects";
import { formatCurrency } from "@/lib/price";
import OfferBadge from "@/components/common/ui/OfferBadge";
import Link from "next/link";

/** Former `animationOrder` on `collections2` items was a full `animation-order-*` class name. */
const COLLECTIONS2_SLIDE_IMAGE_ANIMATION_CLASSES = [
  "animation-order-4",
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
];

function HeroSlidersOne() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hero Slider </span> One
                </h2>
              </div>
            </div>
          </div>
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
                    el: ".rbt-hero-banner-activation-3 .rbt-swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    prevEl: ".rbt-hero-banner-activation-3 .rbt-arrow-left",
                    nextEl: ".rbt-hero-banner-activation-3 .rbt-arrow-right",
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
                {collections2.map((slide, index) => (
                  <SwiperSlide className="swiper-slide" key={slide.id}>
                    <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-hero-banner rbt-banner-four-var-two">
                      <div className="rbt-banner-inner">
                        <div className="rbt-product-banner-content">
                          <div
                            className={`rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner ${getHeroEffectClass(slide.effectName)}`}
                          >
                            <h6 className="rbt-banner-subtitle-two h4 mb-0">
                              Exclusive Offer Going
                            </h6>
                            <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                              <span className="rbt-bold--text d-block">
                                {slide.title?.split("\n")[0] ?? ""}
                              </span>
                              {slide.title?.split("\n").slice(1).join(" ") ?? ""}
                            </h2>
                            <div className="rbt-pricing-part d-flex align-items-center flex-row">
                              <p className="rbt-price-desc-text">
                                Starting From
                              </p>
                              <span className="rbt-price-text offer-price">
                                {formatCurrency(slide.price)}
                              </span>
                              <OfferBadge
                                price={slide.price}
                                oldPrice={slide.oldPrice}
                              />
                            </div>
                            <div className="rbt-banner-btn">
                              <Link className="rbt-btn" href="/shop">
                                Buy Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`rbt-product-img rbt-banner-four-var-two rbt-scroll-trigger zoom_in ${COLLECTIONS2_SLIDE_IMAGE_ANIMATION_CLASSES[index] ?? `animation-order-${index + 1}`}`}
                        >
                          <Image
                            alt="eCommerce Product Banner Background"
                            src={slide.imgSrc || ""}
                            width={3616}
                            height={1300}
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

export default HeroSlidersOne;
