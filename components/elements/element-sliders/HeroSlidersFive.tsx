"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { productBanners2 } from "@/data/collections";
import { formatCurrency } from "@/lib/price";
function HeroSlidersFive() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area pt--32 rbt-bg-color-white rbt-section-gap2">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hero Slider </span> Five
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--0">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 rbt-bg-color-brand-300">
              <Swiper
                className="swiper rbt-cs-hero-banner-activation rbt-slideshow"
                {...{
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 24,
                  loop: true,
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
                    el: ".rbt-cs-hero-banner-activation .rbt-swiper-pagination",
                    clickable: true,
                  },
                }}
                modules={[Pagination, Autoplay, EffectFade]}
              >
                {productBanners2.map((banner, index) => (
                  <SwiperSlide key={banner.id} className="swiper-slide">
                    {/* Start Product Banner Area */}
                    <div
                      className={`rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-scroll-trigger zoom_in animation-order-${index + 1} rbt-has-content-bg-shape rbt-banner-four-var-three rbt-banner-four-var-three-has-larger-pb has-rbt-img-curved rbt-bg-color-extra-seven rounded-0`}
                    >
                      <div className="rbt-banner-inner rounded-0">
                        <div className="container">
                          <div className="row row--12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                              <div className="rbt-product-banner-content pl--0">
                                <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
                                  <h6 className="rbt-banner-subtitle-two h4 mb-0">
                                    {banner.subtitle}
                                  </h6>
                                  <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                    <span className="rbt-bold--text d-block">
                                      {banner.title?.split("\n")[0] ?? ""}
                                    </span>
                                    {banner.title?.split("\n").slice(1).join(" ") ?? ""}
                                  </h2>
                                  <div className="rbt-pricing-part d-flex align-items-center flex-row">
                                    <p className="rbt-price-desc-text">
                                      Just Starting From
                                    </p>
                                    <span className="rbt-price-text offer-price">
                                      {formatCurrency(banner.price)}
                                    </span>
                                    <OfferBadge price={banner.price} oldPrice={banner.oldPrice} variant="minus" />
                                  </div>
                                  <div className="rbt-banner-btn">
                                    <Link className="rbt-btn" href={`/shop`}>
                                      Shop Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-product-img rbt-bg-color-white rounded-0">
                          <div className="rbt-img-file-shape-inner rbt-curved-style-box">
                            <Image
                              className="w-100"
                              alt="eCommerce Product Banner Half Background"
                              src={banner.imgSrc || ""}
                              width={1920}
                              height={1372}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Product Banner Area */}
                  </SwiperSlide>
                ))}
                <div className="container rbt-swiper-pagination rbt-swiper-pagination-var-one" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlidersFive;
