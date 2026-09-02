"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { bookSlides } from "@/data/products/others";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white">
      <div className="wrapper p-0">
        {/* Start Product Banner Area */}
        <div className="rbt-swiper-container-one rbt-dot-bottom-center pb--60">
          <Swiper
            className="swiper rbt-hero-banner-activation-2-version-center pb--100"
            {...{
              spaceBetween: 24,
              loop: true,
              autoplay: false,
              centeredSlides: true,
              pagination: {
                el: ".rbt-swiper-container-one.rbt-dot-bottom-center .rbt-swiper-pagination, .abc",
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
                  slidesPerView: 2.5,
                  slidesPerGroup: 1,
                },
              },
            }}
            onSwiper={(swiper) => swiper.slideNext()}
            modules={[Pagination, Autoplay]}
          >
            {bookSlides.map((book, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="rbt-card rbt-product-card rbt-card-has-animated rbt-product-card-style-3 variation-two rbt-rounded--8 rbt-scroll-trigger fade_in animation-order-1">
                  <div className="rbt-card-img rbt-card-img-bg-blue rbt-rounded--8 rbt-scroll-trigger zoom_in animation-order-1">
                    <Link href={`/product-single-fashion/${book.id}`}>
                      <Image
                        alt="Card Image"
                        width={1560}
                        height={840}
                        src={book.imgSrc}
                        priority
                      />
                    </Link>
                  </div>
                  <div className="rbt-card-body rbt-card-body-center-align">
                    <a
                      href="#"
                      className="rbt-card-subtitle rbt-card-categories-text rbt-text-color-heading"
                    >
                      {book.subtitle}
                    </a>
                    <h4 className="rbt-card-title-2">
                      <Link href={`/product-single-fashion/${book.id}`}>
                        <span className="rbt-title-bold">{book.title}</span>
                        <br />
                        {book.titleSub}
                      </Link>
                    </h4>
                    <div className="pricing-part justify-content-center">
                      <del className="price-text">
                        ${(book.oldPrice ?? 0).toFixed(2)}
                      </del>
                      <span className="price-text">
                        ${book.price.toFixed(2)}
                      </span>
                      <OfferBadge price={book.price} oldPrice={book.oldPrice} variant="minus" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
