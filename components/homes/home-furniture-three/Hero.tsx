"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { furnitureSlides } from "@/data/heroSlides";
import { formatCurrency } from "@/lib/price";
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white pt--0">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-banner-curved-style rbt-banner-has-center-curved-style rbt-banner-has-bottom-center-curved-style rbt-rounded--24">
          <Swiper
            className="swiper rbt-jwellery-hero-activation-1 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow"
            {...{
              slidesPerView: 1,
              spaceBetween: 24,
              parallax: true,
              effect: "fade",
              fadeEffect: {
                crossFade: true,
              },
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
              navigation: {
                prevEl: ".rbt-arrow-left",
                nextEl: ".rbt-arrow-right",
              },
              breakpoints: {
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 1,
                },
              },
            }}
            modules={[Pagination, Navigation, EffectFade, Autoplay, Parallax]}
          >
            {furnitureSlides.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div
                  className={`rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-banner-four-var-three rbt-banner-four-var-three-lg rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="rbt-banner-inner rounded-0">
                    <div className="container">
                      <div className="row row--12 align-items-end">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="rbt-product-banner-content rbt-product-banner-content-white-var pl--0">
                            <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                              <h6 className="rbt-banner-subtitle-two rbt-text-color-white h4 mb-0">
                                {slide.subtitle}
                              </h6>
                              <h2 className="rbt-banner-title rbt-banner-title-lg mb-0 rbt-text-color-white rbt-text-capitalize">
                                <span className="rbt-bold--text d-block">
                                  {slide.title?.split("\n")[0] ?? ""}
                                </span>
                                {slide.title?.split("\n").slice(1).join(" ") ?? ""}
                              </h2>
                              <div className="rbt-pricing-part d-flex align-items-center flex-row">
                                <p className="rbt-price-desc-text rbt-text-color-white">
                                  Start From
                                </p>
                                <span className="rbt-price-text m-0 offer-price rbt-text-color-gray-200">
                                  {formatCurrency(slide.price)}
                                </span>
                                <OfferBadge price={slide.price} oldPrice={slide.oldPrice} variant="off" />
                              </div>
                              <div className="rbt-banner-btn">
                                <Link className="rbt-btn" href={`/shop`}>
                                  Shop Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div
                            className={`rbt-product-image rounded-0 rbt-product-image-fwidth rbt-scroll-trigger zoom_in animation-order-${
                              index + 1
                            }`}
                          >
                            <Image
                              alt="eCommerce Product Banner Image"
                              src={slide.imgSrc || ""}
                              width={3616}
                              height={1300}
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="rbt-swiper-arrow rbt-arrow-transparent rbt-arrow-left">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-left" />
                <i className="rbt-icon-top fa-regular fa-arrow-left" />
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-transparent rbt-arrow-right">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-right" />
                <i className="rbt-icon-top fa-regular fa-arrow-right" />
              </div>
            </div>
          </Swiper>
          <div className="rbt-banner-center-curved-wrapper" />
        </div>
      </div>
    </div>
  );
}
