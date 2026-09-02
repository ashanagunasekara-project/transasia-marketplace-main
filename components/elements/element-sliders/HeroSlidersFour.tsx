"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { bannerSlides } from "@/data/collections";
import { formatCurrency } from "@/lib/price";
import Image from "next/image";
function HeroSlidersFour() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area pt--32 rbt-bg-color-white">
        <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hero Slider </span> Four
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
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
              >
                {bannerSlides.map((slide, index) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className={`rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-smaller rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                    >
                      <div className="rbt-banner-inner">
                        <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-center">
                          <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                            <h6 className="rbt-banner-subtitle-two h4 mb-0">
                              {slide.subtitle}
                            </h6>
                            <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                              <span className="rbt-bold--text d-block">
                                Highly Standard!{" "}
                              </span>
                              Branded Case Collections
                            </h2>
                            <div className="rbt-pricing-part d-flex align-items-center flex-row justify-content-center">
                              <p className="rbt-price-desc-text">
                                Just Starting From
                              </p>
                              <span className="rbt-price-text offer-price">
                                {formatCurrency(slide.price)}
                              </span>
                              <OfferBadge price={slide.price} oldPrice={slide.oldPrice} />
                            </div>
                            <div className="rbt-banner-btn-grp d-flex rbt-gap--16 mt--32 mt_sm--16 justify-content-center">
                              <Link
                                className="rbt-btn"
                                href={`/shop-by-categories`}
                              >
                                <i className="fa-brands fa-Protective Case mr--8" />
                                Shop For Protective Case
                              </Link>
                              <Link
                                className="rbt-btn bg-white"
                                href={`/shop-by-categories`}
                              >
                                <i className="fa-brands fa-android mr--8" />{" "}
                                Shop For Android
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`rbt-product-img rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                        >
                          <Image
                            alt="eCommerce Product Banner Background"
                            src={slide.imgSrc || ""}
                            width={3520}
                            height={1106}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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
    </>
  );
}

export default HeroSlidersFour;
