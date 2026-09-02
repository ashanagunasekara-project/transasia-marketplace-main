"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import MagneticButton from "@/components/common/ui/MagneticButton";
import { productBanners } from "@/data/collections";
import { formatCurrency } from "@/lib/price";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PRODUCT_BANNER_ANIMATION_ORDERS = ["1", "2", "3", "4", "3", "4"];

export default function Hero() {
  return (
    <>
      <div className="rbt-component-area rbt-product-banner-area rbt-section-gap2 rbt-bg-color-gray-light rbt-elctro-hero-banner">
        <div className="container">
          {/* Start Product Banner Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div className="rbt-swiper-container-one rbt-arrow-between">
                <Swiper
                  {...({
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: true,
                    pagination: {
                      el: ".rbt-swiper-pagination, .abc",
                      clickable: true,
                    },
                    navigation: {
                      prevEl: ".rbt-arrow-left",
                      nextEl: ".rbt-arrow-right",
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
                          prevEl: ".rbt-arrow-left",
                          nextEl: ".rbt-arrow-right",
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
                  modules={[Navigation, Pagination]}
                  className="swiper rbt-hero-banner-activation-1 rbt-dot-bottom-center rbt-slideshow-content-inner"
                >
                  {productBanners.map((product, index) => {
                    const animationOrder =
                      PRODUCT_BANNER_ANIMATION_ORDERS[index] ??
                      String(index + 1);
                    return (
                    <SwiperSlide className="swiper-slide" key={product.id}>
                      <div
                        className={`rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-curved-style-box rbt-scroll-trigger fade_in animation-order-${
                          animationOrder
                        } ${
                          product.hasCurvedPortion
                            ? "rbt-curved-style-box-2"
                            : ""
                        }`}
                      >
                        <div className="rbt-banner-inner">
                          <div
                            className={`rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
                          >
                            <Image
                              alt="Ecommerce Product Banner Image"
                              src={
                                product.imgSrc || ""
                              }
                              width={product.width}
                              height={product.height}
                              priority
                            />
                          </div>
                          <div className="rbt-product-banner-content">
                            <div className="rbt-content-section">
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
                                <span className="d-flex align-items-center rbt-gap--8">
                                  <span className="rbt-price-text offer-price">
                                    {formatCurrency(product.price)}
                                  </span>
                                  <OfferBadge price={product.price} oldPrice={product.oldPrice} />
                                </span>
                              </div>
                              <div className="rbt-banner-btn">
                                <MagneticButton
                                  as={Link}
                                  className="rbt-btn rbt-btn-round"
                                  href={`/shop`}
                                >
                                  <i className="fa-solid fa-arrow-up-right" />{" "}
                                  SHOP NOW
                                </MagneticButton>
                              </div>
                            </div>
                          </div>
                        </div>
                        {product.hasCurvedPortion && (
                          <div className="rbt-curved-portion rbt-right-corner-portion">
                            <div className="rbt-wrapper" />
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                    );
                  })}
                  <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
                </Swiper>
                <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-lg">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-left" />
                    <i className="rbt-icon-top fa-regular fa-arrow-left" />
                  </div>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-lg">
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
