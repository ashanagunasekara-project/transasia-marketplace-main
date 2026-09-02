"use client";
import ProductCard1 from "@/components/product-cards/ProductCard1";
import { sportsProduct2 } from "@/data/products/sports";

import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Products2() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Popular Offer
              </span>
              <h2 className="rbt-title">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Fashion Inspiration
                </span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-md rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop`}
            >
              <span className="btn-text">Shop All</span>
              <span className="btn-icon">
                <i className="ml--4 fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-6 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-1">
              <div className="inner">
                <div className="content">
                  <p className="subtitle">Embrace Comfy Wear</p>
                  <h2 className="title">
                    <a href="#">
                      <span className="rbt-bold--text">
                        Ready To Fall in Love With
                      </span>
                    </a>
                  </h2>
                  <Link
                    href={`/shop-by-categories`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Shop Collection
                  </Link>
                </div>
                <div className="rbt-image-portion">
                  <a href="#">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-1"
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-sports-a-1.webp"
                      width={1296}
                      height={1033}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12 mt--24">
            <div className="rbt-swiper-container-one">
              <Swiper
                className="swiper rbt-sports-prd-activation-1 rbt-swiper-scrollbar-bottom pb--32"
                {...({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 24,
                  loop: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
                      slidesPerView: 2,
                    },
                  },
                  scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: "true",
                  },
                } as unknown as import("swiper/react").SwiperProps)}
                modules={[Autoplay, Scrollbar]}
              >
                {sportsProduct2.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard1 product={product}
                      animationOrder={i + 1}
                    />
                  </SwiperSlide>
                ))}

                <div className="swiper-scrollbar" />
              </Swiper>
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
