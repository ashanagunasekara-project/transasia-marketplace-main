"use client";

import ProductCard2 from "@/components/product-cards/ProductCard2";
import { furnitureSliderProducts2 } from "@/data/products/furnitures";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Products3() {
  return (
    <div
      id="rbt-product-block-03"
      className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap3"
    >
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="row row--24 align-items-center">
          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="rbt-product-promo-banner-area rbt-scroll-trigger zoom_in animation-order-1">
              <Image
                alt="Product Banner"
                src="/assets/images/product-banner/product-banner-dis-01.webp"
                width={1130}
                height={1222}
              />
            </div>
          </div>
          <div className="col-xl-8 col-md-6 col-sm-12 col-12">
            <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-white ptb_sm--40 p_md--0">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16">
                  <div className="rbt-component-section-title rbt-gap--4 p-0 mb--16 border-0">
                    <a
                      href="#"
                      className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                    >
                      Favorite
                    </a>
                    <h4 className="rbt-title">
                      <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                        Trending items
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {/* Start Card Swiper Area */}
                  <Swiper
                    className="swiper product-swiper-activation-one-var-one rbt-arrow-between pb--60 rbt-progress-bottom"
                    {...{
                      slidesPerView: 1.2,
                      spaceBetween: 16,
                      loop: true,
                      navigation: false,
                      autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      },
                      breakpoints: {
                        481: {
                          slidesPerView: 1.2,
                        },
                        768: {
                          slidesPerView: 1.1,
                        },
                        992: {
                          slidesPerView: 2.1,
                        },
                        1600: {
                          slidesPerView: 3,
                        },
                      },
                      scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                      },
                    }}
                    modules={[Scrollbar, Autoplay]}
                  >
                    {furnitureSliderProducts2.map((product, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <div className="single-slide">
                          <ProductCard2
                            detailsPageUrl="/product-single-furniture"
                            product={product}
                            animationOrder={i + 1}
                          />
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="swiper-scrollbar" />
                  </Swiper>
                  {/* End Card Swiper Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
