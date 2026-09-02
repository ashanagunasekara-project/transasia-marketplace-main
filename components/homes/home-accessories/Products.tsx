"use client";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import { accessoriesProducts } from "@/data/products/accessories";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Todays<span className="rbt-bold--text"> Best Deals</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-swiper-container-one rbt-arrow-between rbt-progress-bottom">
              <Swiper
                className="swiper rbt-access-prd-activation-1"
                {...{
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 24,
                  loop: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  },
                  pagination: {
                    el: ".rbt-swiper-progress",
                    type: "progressbar",
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
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
              >
                {accessoriesProducts.slice(0, 8).map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard8
                      detailsPageUrl="/product-single-accessories"
                      product={product}
                      animationOrder={i + 1}
                    />
                  </SwiperSlide>
                ))}
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
              <div className="rbt-swiper-progress" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
