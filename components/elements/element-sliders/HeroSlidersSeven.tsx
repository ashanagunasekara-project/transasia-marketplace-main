"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { collections } from "@/data/collections";

/** Index-based animation class list for this slider. */
const FASHION_COLLECTIONS_ANIMATION_CLASSES = [
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
];

function HeroSlidersSeven() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom">
        <div className="wrapper plr--56 plr_lg--20 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hero Slider </span> Seven
                </h2>
              </div>
            </div>
          </div>
          <div className="wrapper plr--48 plr_lg--20 plr_md--20 plr_sm--16">
            {/* Start Product Banner Area */}
            <div className="row row--12 mt_dec--24">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center p-0">
                <div className="rbt-swiper-container-one rbt-dot-right-center plr--68 plr_lg--48 plr_md--48 plr_sm--0">
                  <Swiper
                    className="swiper rbt-hero-banner-activation-2"
                    {...{
                      spaceBetween: 24,
                      loop: true,
                      autoplay: false,
                      pagination: {
                        el: ".rbt-swiper-container-one.rbt-dot-right-center .rbt-swiper-pagination, .abc",
                        clickable: true,
                      },
                      navigation: false,
                      breakpoints: {
                        575: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        768: {
                          slidesPerView: 1.6,
                          slidesPerGroup: 1,
                        },
                        992: {
                          slidesPerView: 2,
                          slidesPerGroup: 1,
                        },
                        1200: {
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                        },
                      },
                    }}
                    modules={[Pagination]}
                  >
                    {collections.map((product, index) => {
                      const animationClass =
                        FASHION_COLLECTIONS_ANIMATION_CLASSES[index] ??
                        "animation-order-1";

                      return (
                        <SwiperSlide className="swiper-slide" key={product.id}>
                          <div
                            className={`rbt-card rbt-product-card rbt-card-has-animated rbt-product-card-style-3 rbt-rounded--24 rbt-scroll-trigger fade_in ${animationClass}`}
                          >
                            <div
                              className={`rbt-card-img ${product.bgClass} rbt-rounded--24 rbt-scroll-trigger zoom_in ${animationClass}`}
                            >
                              <Link href={`/shop`}>
                                <Image
                                  alt="Card Image"
                                  src={product.imgSrc || ""}
                                  width={product.width}
                                  height={product.height}
                                />
                              </Link>
                              <div className="rbt-right-corner-portion rbt-right-corner-portion-lg show-rbt-right-corner-portion">
                                <div className="rbt-corner-portion-wrapper">
                                  <Link
                                    href={`/shop`}
                                    className="rbt-icon-overlay-link-btn rbt-icon-overlay-link-btn-"
                                  >
                                    <span className="rbt-btn-overlay">
                                      <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                      <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="rbt-card-body rbt-card-body-center-align">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-categories-text rbt-text-color-heading"
                              >
                                {product.subtitle}
                              </a>
                              <h4 className="rbt-card-title-2">
                                <Link href={`/shop`}>
                                  <span className="rbt-title-bold mr--4">
                                    {product.title?.split("\n")[0] ?? ""}
                                  </span>
                                  {product.title?.split("\n").slice(1).join(" ") ?? ""}
                                </Link>
                              </h4>
                              <Link
                                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger mt--12 fade_in animation-order-3"
                                href={`/shop`}
                              >
                                <span className="btn-text">Shop Products</span>
                                <span className="btn-icon ml--4">
                                  <i className="fa-regular fa-bag-shopping" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlidersSeven;
