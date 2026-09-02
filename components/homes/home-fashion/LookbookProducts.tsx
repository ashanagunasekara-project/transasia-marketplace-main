"use client";
import type { Swiper as SwiperClass } from "swiper";
import ProductCard1 from "@/components/product-cards/ProductCard1";
import { fashionProducts2 } from "@/data/products/fashion";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function LookbookProducts() {
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-lookbook-area-one rbt-section-gapTop rbt-bg-color-white">
      <div className="wrapper">
        {/* Start Look Book Area */}
        <div className="row row--0 mt_dec--24 align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mt--24 text-xl-end text-center">
            <div className="rbt-lookbook-section">
              <div className="rbt-lookbook-banner rbt-lookbook-banner-one rbt-scroll-trigger zoom_in animation-order-1">
                <Image
                  alt="Lookbook Image"
                  src="/assets/images/lookbook-images/lookbook-image-01.webp"
                  width={1920}
                  height={1734}
                />
                <a
                  href="#"
                  className="rbt-lookbook-dot rbt-lookbook-dot-one show-rbt-lookbook-dot"
                  data-rbt-position-vertical={35}
                  data-rbt-position-horigental={30}
                  data-index={1}
                  onClick={(e) => {
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(0); // Slide to the second slide
                    }
                  }}
                />
                <a
                  href="#"
                  className="rbt-lookbook-dot rbt-lookbook-dot-two show-rbt-lookbook-dot"
                  data-rbt-position-vertical={33}
                  data-rbt-position-horigental={71}
                  data-index={2}
                  onClick={(e) => {
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(1); // Slide to the third slide
                    }
                  }}
                />
                <a
                  href="#"
                  className="rbt-lookbook-dot rbt-lookbook-dot-three show-rbt-lookbook-dot"
                  data-rbt-position-vertical={87}
                  data-rbt-position-horigental={26}
                  data-index={3}
                  onClick={(e) => {
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(2); // Slide to the fourth slide
                    }
                  }}
                />
                <a
                  href="#"
                  className="rbt-lookbook-dot rbt-lookbook-dot-four show-rbt-lookbook-dot"
                  data-rbt-position-vertical={75}
                  data-rbt-position-horigental={73}
                  data-index={4}
                  onClick={(e) => {
                    e.preventDefault();
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(3); // Slide to the fifth slide
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
            <div className="rbt-lookbook-content">
              <div className="rbt-component-section-title text-center p-0 border-0 mb--32 mb_sm--16">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Lookbook <span className="rbt-bold--text">Special Denim</span>
                </h2>
              </div>
              {/* Start Card Swiper Area */}
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="swiper product-swiper-activation-three-lookbook rbt-arrow-between rbt-dot-bottom-center gutter-swiper-24 pb--40"
                {...{
                  slidesPerView: 1.8,
                  spaceBetween: 24,

                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  },
                  pagination: {
                    el: ".fashion-lookbook-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".fashion-lookbook-next",
                  },
                  breakpoints: {
                    481: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                  },
                }}
                modules={[Navigation, Pagination, Autoplay]}
              >
                {fashionProducts2.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard1 product={product}
                      animationOrder={i + 1}
                    />
                  </SwiperSlide>
                ))}

                <div className="rbt-swiper-arrow rbt-arrow-right fashion-lookbook-next">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-right" />
                    <i className="rbt-icon-top fa-regular fa-arrow-right" />
                  </div>
                </div>
                <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one fashion-lookbook-pagination" />
              </Swiper>
              {/* End Card Swiper Area */}
            </div>
          </div>
        </div>
        {/* End Look Book Area */}
      </div>
    </div>
  );
}
