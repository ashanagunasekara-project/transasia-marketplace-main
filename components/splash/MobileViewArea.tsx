"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MOBILE_SLIDES = [
  {
    src: "/assets/images/splash/others/mobile-view-1.webp",
    title: "Home Shoes",
  },
  {
    src: "/assets/images/splash/others/mobile-view-2.webp",
    title: "Home Tech Accessories",
  },
  {
    src: "/assets/images/splash/others/mobile-view-3.webp",
    title: "Product Single",
  },
  {
    src: "/assets/images/splash/others/mobile-view-4.webp",
    title: "Shop Page",
  },
  {
    src: "/assets/images/splash/others/mobile-view-5.webp",
    title: "Home Skate Accessories",
  },
  {
    src: "/assets/images/splash/others/mobile-view-6.webp",
    title: "Product Single",
  },
  {
    src: "/assets/images/splash/others/mobile-view-7.webp",
    title: "Home Fragrance",
  }
];

export default function MobileViewArea() {
  return (
    <div className="splash-section-gap rbt-mobile-approach-view-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center">
              <span className="subtitle rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                Always Mobile First Approach
              </span>
              <h2 className="rbt-title rbt-text-color-white">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Unimart Ecommerce
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  Mobile-First eCommerce Template
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="rbt-arrow-between icon-bg-primary rbt-swiper-container">
          <Swiper
            modules={[Autoplay, Navigation]}
            {...{
              slidesPerView: "auto",
              spaceBetween: 24,
              grabCursor: true,
              loop: true,
              speed: 800,
              autoplay: true,
              navigation: {
                prevEl: ".mobile-view-arrow.rbt-arrow-left",
                nextEl: ".mobile-view-arrow.rbt-arrow-right",
              },
            }}
            className="swiper rbt-mobile-view-slide-active"
          >
            {MOBILE_SLIDES.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={slide.src}>
                <div
                  className={`rbt-mobile-approach-view-card text-center rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                >
                  <div className="card-content">
                    <div className="content">
                      <Image
                        alt="Image"
                        src={slide.src}
                        width={578}
                        height={1239}
                      />
                    </div>
                  </div>
                  <p className="h6 mb--0 rbt-text-color-white rbt-text-medium mt--24">
                    {slide.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* pagination */}
          {/* Start slider navigation buttons */}
          <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-lg mobile-view-arrow">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-left" />
              <i className="rbt-icon-top fa-regular fa-arrow-left" />
            </div>
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-lg mobile-view-arrow">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-right" />
              <i className="rbt-icon-top fa-regular fa-arrow-right" />
            </div>
          </div>
          {/* End slider navigation buttons */}
        </div>
      </div>
    </div>
  );
}
