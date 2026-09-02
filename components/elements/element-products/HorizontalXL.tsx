"use client";

import { Navigation } from "swiper/modules";
import ProductRating from "@/components/common/ui/ProductRating";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { singleStyleProducts2 } from "@/data/products/others";
import ColorSelect2 from "@/components/product-details/colorSelects/ColorSelect2";
import SizeSelect from "@/components/product-details/sizeSelects/SizeSelect";
import QuantitySelect from "@/components/common/ui/QuantitySelect";
import Tooltip from "@/components/common/ui/Tooltip";
import { useCartQuantityAction } from "@/hooks/useCartQuantityAction";
import OfferBadge from "@/components/common/ui/OfferBadge";

export default function SingleProduct() {
  const product = singleStyleProducts2[0];
  const { quantity, setQuantity, buttonLabel, isDisabled, applyCartAction } =
    useCartQuantityAction(product);
  return (
    <div
      id="rbt-product-block-02"
      className="rbt-single-product-area rbt-section-gapTop rbt-bg-color-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Horizontal XL</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--12 align-items-center">
          <div className="col-xl-8 col-12">
            <Swiper
              className="swiper prd-single-slide-activation-1 rbt-arrow-between"
              {...{
                slidesPerView: 1,
                grabCursor: true,
                speed: 500,
                spaceBetween: 24,
                loop: true,
                navigation: {
                  prevEl: ".rbt-arrow-left",
                  nextEl: ".rbt-arrow-right",
                },
                breakpoints: {
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                },
              }}
              modules={[Navigation]}
            >
              {singleStyleProducts2?.[0]?.frameSlides?.map((product, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className={`thumbnail rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                  >
                    {product.src ? (
                      <Image
                        className="w-100 rbt-rounded--16 rbt-prd-img"
                        alt="Product Images"
                        src={product.src}
                        width={424}
                        height={575}
                      />
                    ) : null}
                    {product.badges?.map((badge, idx) => (
                      <div
                        key={idx}
                        className={`rbt-product-badge ${badge.className} rbt-badge-top-left--position`}
                      >
                        {badge.text}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-arrow rbt-arrow-left">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-left" />
                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                </div>
              </div>
              <div className="rbt-swiper-arrow rbt-arrow-right">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-right" />
                  <i className="rbt-icon-top fa-regular fa-arrow-right" />
                </div>
              </div>
            </Swiper>
          </div>
          <div className="col-xl-4 col-12">
            <div className="content rbt-scroll-trigger fade_in animation-order-1">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 mt_sm--8 mt_md--8"
              >
                Casual Wear
              </a>
              <h2 className="rbt-card-title">
                <Link
                  href={`/product-single-fashion/${singleStyleProducts2[0].id}`}
                >
                  {singleStyleProducts2[0].title}
                </Link>
              </h2>
              <p className="description-text b1">
                Elevate your casual wardrobe with this stylish Zipper Neckline
                Bateau T-Shirt. Featuring a modern bateau neckline with a unique
                zipper detail.
              </p>
              <div className="rbt-info-wrapper d-flex flex-wrap">
                <ProductRating product={product} className="mt--0"><span className="icon">
                    <i className="fa-sharp fa-solid fa-truck-fast" />
                  </span></ProductRating>
                <div className="prd-info-section has-left-separator">
                  <div className="prd-id-text">
                    <p className="text-bold">SKU:</p>
                    <p>HN-508801</p>
                  </div>
                  <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                    9 in Stock
                  </div>
                </div>
              </div>
              <div className="rbt-info-wrapper d-flex justify-content-between rbt-gap--8">
                <div className="pricing-part mt--0">
                  <del className="price-text">
                    ${singleStyleProducts2[0].price.toFixed(2)}
                  </del>
                  <span className="price-text">
                    {" "}
                    ${singleStyleProducts2?.[0]?.oldPrice?.toFixed(2) ?? 0}
                  </span>
                  <OfferBadge product={product} variant="minus" />
                </div>
                <div className="prd-info-section">
                  <div className="prd-id-text">
                    <p className="text-bold">Brand:</p>
                    <Tooltip content="Product Brand" placement="top">
                      <a href="#" className="rbt-brand-img tooltips">
                        <Image
                          alt="Small icon Brand"
                          className="image-auto"
                          src="/assets/images/icons/small-brand/sm-brand-01.webp"
                          width={40}
                          height={40}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <hr className="separator-top has-sm-spacer mt--16 mb--24" />
              <div className="rbt-info-wrapper d-flex mt--24">
                <ColorSelect2 />
              </div>
            </div>
            <div className="rbt-info-wrapper mt--24 d-block">
              <SizeSelect />
            </div>
            <div className="product-btn-grp">
              <div className="rbt-qty-area">
                <QuantitySelect
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  applyCartAction();
                }}
                className="rbt-btn has-left-icon d-block text-center"
                disabled={isDisabled}
                suppressHydrationWarning
              >
                <i className="fa-regular fa-cart-shopping" />{" "}
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
