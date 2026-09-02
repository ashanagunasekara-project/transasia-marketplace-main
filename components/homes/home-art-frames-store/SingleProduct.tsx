"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { singleStyleProducts } from "@/data/products/others";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import CompareQuickLinkTrigger from "@/components/action-buttons/CompareQuickLinkTrigger";
import WishlistQuickLinkTrigger from "@/components/action-buttons/WishlistQuickLinkTrigger";
import QuantitySelect from "@/components/common/ui/QuantitySelect";
import { useCartQuantityAction } from "@/hooks/useCartQuantityAction";
import { formatCurrency } from "@/lib/price";

export default function SingleProduct() {
  const product = singleStyleProducts[0];
  const { quantity, setQuantity, buttonLabel, isDisabled, applyCartAction } =
    useCartQuantityAction(product);
  return (
    <div className="rbt-single-product-area rbt-section-gapTop rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Item </span>Of The Week
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
              {singleStyleProducts[0]?.frameSlides?.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className={`thumbnail rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
                    {slide.imgSrc ? (
                      <Image
                        className="w-100 rbt-rounded--16 rbt-prd-img"
                        alt={slide.imgAlt ?? ""}
                        src={slide.imgSrc}
                        width={848}
                        height={1150}
                      />
                    ) : null}
                    {slide.badges?.map((badge, i) => (
                      <div
                        key={i}
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
                Art &amp; Frame
              </a>
              <h3 className="rbt-card-title">
                <Link
                  href={`/product-single-fashion/${product.id}`}
                >
                  {product.title}
                </Link>
              </h3>
              <p className="description-text b1">
                Discover premium wall art and handcrafted frames with timeless
                finishes, gallery-grade materials, and elegant details for your
                space that elevate every room.
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
              <div className="rbt-info-wrapper d-flex rbt-gap--8 justify-content-between">
                <div className="pricing-part mt--0">
                  {product.oldPrice ? (
                    <del className="price-text">
                      {formatCurrency(product.oldPrice)}
                    </del>
                  ) : null}
                  <span className="price-text">
                    {formatCurrency(product.price)}
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
                <div className="product-styles-grp d-flex mt--0">
                  <p className="text-bold title">Style :</p>
                  <div className="content d-flex flex-wrap">
                    <a
                      className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn active"
                      href="#"
                    >
                      Headphones Only
                    </a>
                    <a
                      className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                      href="#"
                    >
                      Charging Stand
                    </a>
                    <a
                      className="rbt-btn rbt-btn-border rbt-btn-sm disabled"
                      href="#"
                    >
                      Headphones + Charging Stand
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-btn-grp">
              <div className="rbt-qty-area">
                <QuantitySelect quantity={quantity} setQuantity={setQuantity} />
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
                <i className="fa-regular fa-cart-shopping mr--4" />
                {buttonLabel}
              </button>
            </div>
            <div className="rbt-quick-link-grp mt--24">
              <CompareQuickLinkTrigger product={product} />
              <WishlistQuickLinkTrigger product={product} />
              <ModalTriggerButton
                openModalName="socialShareModal"
                className="rbt-quick-link"
              >
                <i className="fa-sharp fa-regular fa-share-nodes" />
                Share
              </ModalTriggerButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
