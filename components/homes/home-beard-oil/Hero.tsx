"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import { beardOilBanners } from "@/data/heroSlides";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box">
          <Swiper
            className="swiper rbt-hero-banner-activation-3 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow pt--36 pt_sm--0 pt_md--0"
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
            {beardOilBanners.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="rbt-component-area rbt-products-banner-area rbt-hero-banner-classic rbt-hero-banner-classic-var-2 rbt-banner-has-bg-grid-two">
                  <div className="container">
                    <div className="rbt-banner-wrapper">
                      <div className="row row--12">
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                          <div className="rbt-hero-banner-content rbt-content-has-shape rbt-slideshow-content-inner effect_fadeindown">
                            <div className="pricing-part">
                              <del className="price-text">
                                $
                                {(typeof item.oldPrice === "number"
                                  ? item.oldPrice
                                  : Number(item.oldPrice ?? 0)
                                ).toFixed(2)}
                              </del>
                              <span className="price-text rbt-text-color-white">
                                $
                                {(typeof item.price === "number"
                                  ? item.price
                                  : Number(item.price ?? 0)
                                ).toFixed(2)}
                              </span>
                              <OfferBadge price={item.price} oldPrice={item.oldPrice} />
                            </div>
                            <h1 className="title rbt-text-color-white">
                              {item.productTitle}
                            </h1>
                            <h4 className="mb--0 rbt-text-color-white">
                              {item.subtitle}
                            </h4>
                            <Link
                              href={`/shop`}
                              className="rbt-btn mt--32 mt_sm--16"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                          <div className="rbt-hero-banner-img">
                            <Image
                              alt="Hero Image"
                              src={item.imgSrc || ""}
                              width={item.width}
                              height={item.height}
                              className="image-auto"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="rbt-banner-bg-img"
                    alt="Banner Background Media"
                    src={item.bgImgSrc || ""}
                    width={item.bgImgWidth}
                    height={item.bgImgHeight}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
