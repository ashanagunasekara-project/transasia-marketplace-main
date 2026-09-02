"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import { slides } from "@/data/collections";
import { formatCurrency } from "@/lib/price";

import { Autoplay, Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white rbt-section-gap2Bottom pt_sm--16 pt_md--24 pt_lg--24">
      <div className="wrapper plr--48 plr_lg--20 plr_md--20 plr_sm--16">
        <div className="rbt-banner-curved-style rbt-banner-has-center-curved-style rbt-banner-has-top-center-curved-style rbt-bg-color-brand-200 rbt-rounded--24">
          <Swiper
            className="swiper rbt-sports-hero-activation-1 rbt-arrow-between rbt-arrow-show-dfl rbt-arrow-bg-brand rbt-slideshow"
            {...{
              slidesPerView: 1,
              spaceBetween: 24,
              parallax: true,
              speed: 1000,
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
            modules={[Autoplay, Navigation, Parallax]}
          >
            {slides.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                {/* Start Product Banner Area */}
                <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-banner-four-var-three rbt-banner-four-var-three-lg rbt-bg-transparent">
                  <div
                    className={`rbt-banner-inner rounded-0 rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                  >
                    <div className="container">
                      <div className="row row--12 align-items-end">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="rbt-product-banner-content pl--0">
                            <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                              <h6 className="rbt-banner-subtitle-two h4 mb-0">
                                {slide.subtitle}
                              </h6>
                              <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                <span className="rbt-bold--text d-block">
                                  A Little More Than{" "}
                                </span>
                                Just Sports Site.
                              </h2>
                              <div className="rbt-pricing-part d-flex align-items-center flex-row">
                                <p className="rbt-price-desc-text">
                                  Start From
                                </p>
                                <span className="rbt-price-text m-0 offer-price">
                                  {formatCurrency(slide.price)}
                                </span>
                                <OfferBadge price={slide.price} oldPrice={slide.oldPrice} variant="minus" />
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
                            className={`rbt-product-image rounded-0 rbt-scroll-trigger zoom_in animation-order-${index + 1} effect_fadeindown`}
                          >
                            <Image
                              alt="eCommerce Ecommerce Product Banner Image"
                              src={slide.imgSrc || ""}
                              width={slide.width}
                              height={slide.height}
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Product Banner Area */}
              </SwiperSlide>
            ))}
            <div className="rbt-swiper-arrow rbt-arrow-left">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-left" />
                <i className="rbt-icon-top fa-regular fa-arrow-left" />
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-right">
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
