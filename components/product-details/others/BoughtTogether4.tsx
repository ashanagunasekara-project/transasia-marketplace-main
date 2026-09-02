"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import Image from "next/image";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import { catAccessories } from "@/data/products/accessories";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { formatCurrency } from "@/lib/price";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether4() {
  const featuredProduct = catAccessories[0];

  return (
    <div className="rbt-component-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h3 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">
                  Frequently Bought Together
                </span>
              </h3>
            </div>
            <Link
              className="rbt-btn-link link rbt-btn-text-color-primary d-flex rbt-text-medium rbt-gap--4 mt--8 justify-content-center rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop`}
            >
              <span className="btn-text">View All Products</span>
              <span className="btn-icon">
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12">
          <div className="col-md-12">
            <div className="rbt-swiper-container-one rbt-arrow-between rbt-arrow-between-lg-dis">
              <Swiper
                className="swiper rbt-fashion-prd-card-activation-1-v1 rbt-dot-bottom-center"
                {...{
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                  loop: true,
                  pagination: {
                    el: ".rbt-swiper-pagination, .abc",
                    clickable: true,
                    dynamicBullets: true,
                  },
                  navigation: {
                    prevEl: ".rbt-arrow-left",
                    nextEl: ".rbt-arrow-right",
                  },
                  breakpoints: {
                    575: {
                      slidesPerView: 1.8,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2.8,
                      slidesPerGroup: 1,
                    },
                    992: {
                      slidesPerView: 2.8,
                      slidesPerGroup: 1,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 1,
                    },
                  },
                }}
                modules={[Pagination, Navigation]}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-1">
                      <div className="rbt-card-img rbt-rounded--12 rbt-scroll-trigger zoom_in animation-order-1">
                        <Link href={`/product-single-default`}>
                          <Image
                            alt="Card Image"
                            src="/assets/images/product-img/animal-accessories/cat-toys-a-01.webp"
                            width={800}
                            height={800}
                          />
                        </Link>
                        <div className="rbt-product-badge rbt-product-badge-bg-primary rbt-badge-top-left--position">
                          SALE
                        </div>
                        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                          <Tooltip content="Add To Wishlist" placement="left">
                            <button
                              className="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
                              type="button"
                            >
                              <i className="fa-regular fa-heart" />
                            </button>
                          </Tooltip>
                          <Tooltip content="Add To Compare" placement="left">
                            <button
                              className="rbt-compare-btn bg-light-one rbt-quick-btn tooltips"
                              type="button"
                            >
                              <i className="fa-regular fa-scale-balanced" />
                            </button>
                          </Tooltip>
                          <Tooltip content="Quick View" placement="left">
                            <ModalTriggerButton
                              openModalName="quickViewModal"
                              className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
                              type="button"
                            >
                              <i className="fa-sharp fa-regular fa-eye" />
                            </ModalTriggerButton>
                          </Tooltip>
                        </div>
                        <a
                          className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                      </div>
                      <div className="rbt-card-body rbt-card-body-center-align">
                        <a
                          href="#"
                          className="rbt-card-subtitle rbt-card-categories-text"
                        >
                          Cat Feed
                        </a>
                        <h6 className="rbt-card-title">
                          <Link href={`/product-single-default`}>
                            Royal Canin Puppy Growth Formula
                          </Link>
                        </h6>
                        <ProductRating product={featuredProduct}><span className="icon">
                            <i className="fa-sharp fa-solid fa-truck-fast" />
                          </span></ProductRating>
                        <div className="pricing-part">
                          {featuredProduct.oldPrice ? (
                            <del className="price-text">
                              {formatCurrency(featuredProduct.oldPrice)}
                            </del>
                          ) : null}
                          <span className="price-text">
                            {formatCurrency(featuredProduct.price)}
                          </span>
                          <OfferBadge product={featuredProduct} variant="minus" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {catAccessories.map((product) => (
                    <SwiperSlide key={product.id} className="swiper-slide">
                      <ProductCard8 product={product} />
                    </SwiperSlide>
                  ))}
                </div>
                <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe" />
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
        {/* End Card Area */}
      </div>
    </div>
  );
}
