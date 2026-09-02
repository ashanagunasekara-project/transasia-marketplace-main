"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import { tennisAccessorySlides } from "@/data/collections";
import { formatCurrency } from "@/lib/price";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-tennis-hero-section-area">
      <div className="wrapper">
        <div className="container-fluid">
          <div className="rbt-product-banner rbt-product-banner-style-six">
            <div className="row">
              <div className="col-12 col-lg-6 p-0">
                <figure className="rbt-banner-media">
                  <Image
                    alt="Banner Image"
                    src="/assets/images/product-banner/product-banner-img-tennis-01.webp"
                    width={1914}
                    height={1420}
                    priority
                  />
                </figure>
              </div>
              <div className="col-12 col-lg-6 p-0 rbt-bg-color-gray-light">
                <div className="rbt-banner-content">
                  <Swiper
                    className="swiper rbt-product-slider-activation-1 rbt-arrow-between"
                    {...{
                      slidesPerView: 1,
                      speed: 1000,
                      grabCursor: true,
                      navigation: {
                        prevEl: ".rbt-arrow-left",
                        nextEl: ".rbt-arrow-right",
                      },
                    }}
                    modules={[Navigation]}
                  >
                    {tennisAccessorySlides.map((item, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="rbt-large-product-card">
                          <figure>
                            <Image
                              alt="Product Image"
                              src={item.imgSrc || ""}
                              width={item.width}
                              height={item.height}
                            />
                          </figure>
                          <div className="rbt-product-card-content">
                            <div className="rbt-card-element">
                              <Link
                                href={`/shop-by-category`}
                                className="rbt-card-subtitle rbt-card-categories-text"
                              >
                                {item.category}
                              </Link>
                              <h4 className="rbt-card-title">
                                <Link href="/shop">{item.title}</Link>
                              </h4>
                            </div>
                            <div className="rbt-card-element">
                              <div className="pricing-part">
                                <del className="price-text">
                                  {formatCurrency(item.oldPrice)}
                                </del>
                                <span className="price-text">
                                  {formatCurrency(item.price)}
                                </span>
                                <OfferBadge price={item.price} oldPrice={item.oldPrice} variant="minus" />
                              </div>
                            </div>
                            <div className="rbt-card-element">
                              <Link
                                className="rbt-btn"
                                href={`/shop`}
                              >
                                Shop Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
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
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
