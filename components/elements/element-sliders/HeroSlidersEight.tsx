"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { productBanners4 } from "@/data/collections";
import { formatCurrency } from "@/lib/price";
import Image from "next/image";
function HeroSlidersEight() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hero Slider </span> Eight
                </h2>
              </div>
            </div>
          </div>
          {/* Start Product Banner Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div className="rbt-swiper-container-one hero-8 rbt-arrow-between">
                <Swiper
                  className="swiper rbt-hero-banner-activation-1 rbt-dot-bottom-center"
                  {...({
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: true,
                    pagination: {
                      el: ".hero-8 .rbt-swiper-pagination",
                      clickable: true,
                    },
                    navigation: {
                      prevEl: ".hero-8 .rbt-arrow-left",
                      nextEl: ".hero-8 .rbt-arrow-right",
                      clickable: true,
                    },
                    breakpoints: {
                      575: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        navigation: false,
                      },
                      768: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        navigation: {
                          prevEl: ".hero-8 .rbt-arrow-left",
                          nextEl: ".hero-8 .rbt-arrow-right",
                          clickable: true,
                        },
                      },
                      992: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                      1200: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                      },
                    },
                  } as import("swiper/react").SwiperProps)}
                  modules={[Pagination, Navigation]}
                >
                  {productBanners4.map((product, index) => (
                    <SwiperSlide className="swiper-slide" key={product.id}>
                      <div
                        className={`rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-card rbt-product-banner-accessories rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                      >
                        <div className="rbt-banner-inner rbt-bg-color-brand-50">
                          <div
                            className={`rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                          >
                            <Image
                              alt="Ecommerce Product Banner Image"
                              src={product.imgSrc || ""}
                              width={1296}
                              height={960}
                            />
                          </div>
                          <div className="rbt-product-banner-content">
                            <div className="rbt-content-section rbt-content-less-wider">
                              <h6 className="rbt-banner-subtitle mb-0">
                                {product.subtitle}
                              </h6>
                              <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                <span className="rbt-bold--text">
                                  {product.title?.split("\n")[0] ?? ""}
                                </span>{" "}
                                {product.title?.split("\n").slice(1).join(" ") ?? ""}
                              </h2>
                              <div className="rbt-pricing-part">
                                <del className="rbt-dis-price-text">
                                  {formatCurrency(product.oldPrice)}
                                </del>
                                <div className="d-flex rbt-gap--12 align-items-center">
                                  <span className="rbt-price-text offer-price">
                                    {formatCurrency(product.price)}
                                  </span>
                                  <OfferBadge price={product.price} oldPrice={product.oldPrice} variant="minus" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rbt-left-corner-portion bottom--position rbt-left-corner-portion-lg show-rbt-left-corner-portion">
                            <div className="rbt-corner-portion-wrapper">
                              <a
                                href="#"
                                className="rbt-icon-overlay-link-btn rbt-icon-overlay-link-btn-dflt-active"
                              >
                                <span className="rbt-btn-overlay">
                                  <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                  <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="rbt-banner-bg-shape">
                            <Image
                              alt="Ecommerce Banner Background Shape"
                              src="/assets/images/product-banner/product-banner-access-h-shape-01.webp"
                              width={1296}
                              height={959}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
                </Swiper>
                <div className="rbt-swiper-arrow sm_d-none rbt-arrow-left rbt-arrow-gray rbt-arrow-lg">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-left" />
                    <i className="rbt-icon-top fa-regular fa-arrow-left" />
                  </div>
                </div>
                <div className="rbt-swiper-arrow sm_d-none rbt-arrow-right rbt-arrow-gray rbt-arrow-lg">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-right" />
                    <i className="rbt-icon-top fa-regular fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Product Banner Area */}
        </div>
      </div>
    </>
  );
}

export default HeroSlidersEight;
