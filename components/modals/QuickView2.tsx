"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";

import { CloseIcon, EyeIcon } from "../svg-icons";
import type { Swiper as SwiperClass } from "swiper";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useContextElement } from "@/context/Context";
import ColorSelect from "../product-details/colorSelects/ColorSelect";
import QuantitySelect from "../common/ui/QuantitySelect";
import Facts from "../common/other-components/Facts";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import CompareQuickLinkTrigger from "../action-buttons/CompareQuickLinkTrigger";
import WishlistQuickLinkTrigger from "../action-buttons/WishlistQuickLinkTrigger";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { useCartQuantityAction } from "@/hooks/useCartQuantityAction";
import {
  DEFAULT_QUICKVIEW_IMAGES,
  QUICKVIEW_BRANDS,
  QUICKVIEW_STYLES,
} from "@/data/productDetails";

export default function QuickView2() {
  const [thumbSlider, setThumbSlider] = useState<SwiperClass | null>(null);
  const {
    quickViewItem,
  } = useContextElement();
  const { close } = useManagedModalPanel("quickViewModal");
  const { quantity, setQuantity, buttonLabel, isDisabled, applyCartAction } =
    useCartQuantityAction(quickViewItem);

  const slides = useMemo(() => {
    const updatedSlides = [...DEFAULT_QUICKVIEW_IMAGES];
    if (quickViewItem.imgSrc) {
      updatedSlides[0] = { ...updatedSlides[0], src: quickViewItem.imgSrc };
    }
    return updatedSlides;
  }, [quickViewItem.imgSrc]);

  return (
    <div className="rbt-default-modal modal fade has-rbt-top-folder-shape">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <CloseIcon />
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              aria-label="Close"
              onClick={close}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-content-trs-portion rbt-arrow-between rbt-swiper-container-one rbt-arrow-between-lg-dis">
              <div className="swiper rbt-qs-wrapper-slide-activation">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rbt-single-product-area">
                      <div className="row row--16">
                        <div className="col-lg-6 col-md-8 col-12">
                          <div className="rbt-product-view-slider rbt-single-product-media-area rbt-single-product-media-has-folder-shape">
                            <Swiper
                              className="swiper rbt-arrow-between rbt-product-single-slider-activation rbt-arrow-show-dfl"
                              modules={[Navigation, Thumbs]}
                              thumbs={{ swiper: thumbSlider }}
                              navigation={{
                                nextEl: ".rbt-modal-arrow-sm-right",
                                prevEl: ".rbt-modal-arrow-sm-left",
                              }}
                            >
                              {slides.map((image, index) => (
                                <SwiperSlide
                                  className="swiper-slide"
                                  key={index}
                                >
                                  <div className="thumbnail radius-16">
                                    <div className="rbt-product-single-img">
                                      <Image
                                        className="w-100"
                                        alt="Product Images"
                                        style={{
                                          maxHeight: "322px",
                                          objectFit: "contain",
                                        }}
                                        src={image.src}
                                        width={image.width}
                                        height={image.height}
                                      />
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                              <div
                                className="rbt-swiper-arrow rbt-modal-arrow-sm-left"
                                data-rbt-position-horigental={3}
                              >
                                <div className="custom-overflow">
                                  <i className="rbt-icon fa-regular fa-arrow-left" />
                                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                                </div>
                              </div>
                              <div
                                className="rbt-swiper-arrow rbt-modal-arrow-sm-right"
                                data-rbt-position-horigental={86}
                              >
                                <div className="custom-overflow">
                                  <i className="rbt-icon fa-regular fa-arrow-right" />
                                  <i className="rbt-icon-top fa-regular fa-arrow-right" />
                                </div>
                              </div>
                            </Swiper>
                            <Swiper
                              className="swiper rbt-product-thumb-slider-activation mt--24 mt_sm--16"
                              {...{
                                spaceBetween: 16,
                                slidesPerView: 4,
                                freeMode: true,
                                watchSlidesProgress: true,
                              }}
                              onSwiper={setThumbSlider}
                              modules={[FreeMode, Thumbs]}
                            >
                              {slides.map((elm, i) => (
                                <SwiperSlide key={i} className="swiper-slide">
                                  <button className="thumbnail d-block">
                                    <span className="rbt-thumb-img-sm">
                                      <Image
                                        alt="Product Images"
                                        src={elm.src}
                                        style={{
                                          objectFit: "cover",
                                          height: "71px",
                                        }}
                                        width={1024}
                                        height={793}
                                      />
                                    </span>
                                  </button>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12 mt_sm--12 content mt_md--24">
                          <Link
                            href={`/shop-by-category`}
                            className="rbt-card-subtitle rbt-card-categories-text mt--0"
                          >
                            Headphones
                          </Link>
                          <h4
                            className="rbt-card-title"
                            id="quickViewModalLabel"
                          >
                            <Link href={`/product-single-default/132`}>
                              {quickViewItem.title}
                            </Link>
                          </h4>
                          <div className="rbt-scroll-vertical-wrapper rbt-vertical-height-sm">
                            <div className="rbt-scroll-vertical content">
                              <p className="description-text b2">
                                At vero eos et accusamus et iusto dignissimos
                                ducimus blanditiis praesentium voluptatu
                                atque...
                              </p>
                              <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                                <div className="pricing-part mt--0">
                                  {quickViewItem.oldPrice && (
                                    <del className="price-text">
                                      ${quickViewItem.oldPrice.toFixed(2)}
                                    </del>
                                  )}
                                  <span className="price-text">
                                    {" "}
                                    ${quickViewItem.price.toFixed(2)}
                                  </span>
                                  <OfferBadge product={quickViewItem} variant="minus" />
                                </div>
                                <div className="prd-info-section has-left-separator">
                                  <div className="prd-id-text">
                                    <p className="text-bold">SKU:</p>
                                    <p>HN-508801</p>
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16">
                                <ProductRating product={quickViewItem} className="mt--0"><Facts /></ProductRating>
                                <div className="prd-info-section has-left-separator">
                                  <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                                    9 in Stock
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--8">
                                {QUICKVIEW_BRANDS.map((brand) => (
                                  <div
                                    key={brand.id}
                                    className={`prd-info-section ${brand.id !== "brand-1" ? "has-left-separator" : ""}`}
                                  >
                                    <div className="prd-id-text">
                                      <p className="text-bold">{brand.name}:</p>
                                      <Tooltip
                                        content={brand.content}
                                        placement="top"
                                      >
                                        {brand.isSpan ? (
                                          <span className="rbt-brand-img tooltips">
                                            <Image
                                              alt={brand.name}
                                              src={brand.imgSrc}
                                              width={brand.width}
                                              height={brand.height}
                                              className="image-auto"
                                            />
                                          </span>
                                        ) : (
                                          <Link
                                            href={`/shop-by-brands`}
                                            className="rbt-brand-img tooltips"
                                          >
                                            <Image
                                              alt={brand.name}
                                              src={brand.imgSrc}
                                              width={brand.width}
                                              height={brand.height}
                                              className="image-auto"
                                            />
                                          </Link>
                                        )}
                                      </Tooltip>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16 rbt-gap--8 flex-wrap">
                                <div className="prd-info-section">
                                  <a
                                    className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-shiny"
                                    href="#"
                                  >
                                    <EyeIcon />
                                    <p>
                                      <strong>
                                        20 people are viewing this
                                      </strong>
                                    </p>
                                  </a>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16">
                                <div className="prd-info-section">
                                  <div className="prd-id-text">
                                    <p className="text-bold">Color:</p>
                                    <div className="rbt-color-select-area">
                                      <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                                        <ColorSelect />
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16">
                                <div className="product-styles-grp d-flex mt--0">
                                  <p className="text-bold title">Style :</p>
                                  <div className="content d-flex flex-wrap">
                                    {QUICKVIEW_STYLES.map((style) => (
                                      <a
                                        key={style.id}
                                        className={`rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn ${style.active ? "active" : ""} ${style.disabled ? "disabled" : ""}`}
                                        href="#"
                                      >
                                        {style.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="separator-top has-sm-spacer" />
                              <div className="product-btn-grp">
                                <div className="rbt-qty-area">
                                  <QuantitySelect
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                  />
                                </div>
                                <ModalTriggerButton
                                  className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
                                  openModalName="popup-cartModal"
                                  disabled={isDisabled}
                                  onClick={() => {
                                    applyCartAction();
                                  }}
                                  suppressHydrationWarning
                                >
                                  <i className="fa-regular fa-cart-shopping mr--4" />
                                  {buttonLabel}
                                </ModalTriggerButton>
                              </div>
                              <div className="prd-btn-grp">
                                <a
                                  className="rbt-btn d-block text-center"
                                  href="#"
                                >
                                  Buy Now
                                </a>
                              </div>
                              <div className="rbt-quick-link-grp mt--12">
                                <CompareQuickLinkTrigger
                                  product={quickViewItem}
                                />
                                <WishlistQuickLinkTrigger product={quickViewItem} />
                                <ModalTriggerButton
                                  className="rbt-quick-link"
                                  openModalName="socialShareModal"
                                  type="button"
                                >
                                  <i className="fa-sharp fa-regular fa-share-nodes" />{" "}
                                  Share
                                </ModalTriggerButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
