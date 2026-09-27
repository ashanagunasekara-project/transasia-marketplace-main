"use client";

import { useEffect, useState } from "react";
import OfferBadge from "@/components/common/ui/OfferBadge";
import MagneticButton from "@/components/common/ui/MagneticButton";
import { productBanners } from "@/data/collections";
import { formatCurrency } from "@/lib/price";
import {
  fetchStorefrontHeroBanners,
  resolveImageUrl,
  type StorefrontHeroBanner,
} from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PRODUCT_BANNER_ANIMATION_ORDERS = ["1", "2", "3", "4", "3", "4"];

export default function Hero() {
  const [banners, setBanners] = useState<StorefrontHeroBanner[]>(
    productBanners as unknown as StorefrontHeroBanner[]
  );
  const [autoShift, setAutoShift] = useState(true);
  const [autoShiftDelay, setAutoShiftDelay] = useState(3500);

  useEffect(() => {
    let isMounted = true;
    async function loadHeroBanners() {
      try {
        const res = await fetchStorefrontHeroBanners();
        if (isMounted && res.data && res.data.length > 0) {
          setBanners(res.data);
          setAutoShift(res.autoShift);
          setAutoShiftDelay(res.autoShiftDelay || 3500);
        }
      } catch (err) {
        console.warn("Using fallback hero banners:", err);
      }
    }
    loadHeroBanners();
    return () => {
      isMounted = false;
    };
  }, []);

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
                    autoplay: autoShift
                      ? {
                          delay: autoShiftDelay || 3500,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }
                      : false,
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
                  modules={
                    autoShift
                      ? [Navigation, Pagination, Autoplay]
                      : [Navigation, Pagination]
                  }
                  className="swiper rbt-hero-banner-activation-1 rbt-dot-bottom-center rbt-slideshow-content-inner"
                >
                  {banners.map((product, index) => {
                    const animationOrder =
                      PRODUCT_BANNER_ANIMATION_ORDERS[index] ??
                      String(index + 1);

                    const desktopSrc = resolveImageUrl(product.imgSrc);
                    const mobileSrc = resolveImageUrl(
                      product.mobileImgSrc || product.imgSrc
                    );
                    const cleanAlt = product.title
                      ? product.title.replace("\n", " ").trim()
                      : "Transasia Product Banner";

                    return (
                      <SwiperSlide className="swiper-slide" key={product.id || index}>
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
                              {/* Responsive picture element adapting desktop vs mobile screen viewports */}
                              <picture className="w-100 h-100 d-block">
                                <source
                                  media="(max-width: 767px)"
                                  srcSet={mobileSrc}
                                />
                                <source
                                  media="(min-width: 768px)"
                                  srcSet={desktopSrc}
                                />
                                <Image
                                  alt={cleanAlt}
                                  src={desktopSrc}
                                  width={product.width || 1296}
                                  height={product.height || 908}
                                  priority={index < 2}
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                  }}
                                />
                              </picture>
                            </div>
                            <div className="rbt-product-banner-content">
                              <div className="rbt-content-section">
                                {product.subtitle && (
                                  <h6 className="rbt-banner-subtitle mb-0">
                                    {product.subtitle}
                                  </h6>
                                )}
                                <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                                  <span className="rbt-bold--text">
                                    {product.title?.split("\n")[0] ?? ""}
                                  </span>{" "}
                                  {product.title?.split("\n").slice(1).join(" ") ?? ""}
                                </h2>
                                <div className="rbt-pricing-part">
                                  {product.oldPrice && (
                                    <del className="rbt-dis-price-text">
                                      {formatCurrency(product.oldPrice)}
                                    </del>
                                  )}
                                  <span className="d-flex align-items-center rbt-gap--8">
                                    <span className="rbt-price-text offer-price">
                                      {formatCurrency(product.price)}
                                    </span>
                                    {product.oldPrice && (
                                      <OfferBadge
                                        price={product.price}
                                        oldPrice={product.oldPrice}
                                      />
                                    )}
                                  </span>
                                </div>
                                <div className="rbt-banner-btn">
                                  <MagneticButton
                                    as={Link}
                                    className="rbt-btn rbt-btn-round"
                                    href={product.link || "/shop"}
                                  >
                                    <i className="fa-solid fa-arrow-up-right" />{" "}
                                    {product.btnText || "SHOP NOW"}
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
