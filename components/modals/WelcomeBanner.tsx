import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { EyeIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import Facts from "../common/other-components/Facts";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import CompareQuickLinkTrigger from "@/components/action-buttons/CompareQuickLinkTrigger";
import WishlistQuickLinkTrigger from "@/components/action-buttons/WishlistQuickLinkTrigger";
import { welcomeBannerSlides } from "@/data/products/modalProducts";

export default function WelcomeBanner() {
  return (
    <div
      className="rbt-product-restock-modal-area rbt-default-modal modal fade"
      id="welcomebannerModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-0">
          <div className="modal-header">
            <div className="rbt-welcome-text-area">
              <h5 className="rbt-title rbt-welcome-title-header">
                🎉 Welcome back Andrew Simon!!
              </h5>
              <p className="rbt-description">
                Just in time for summer! The awesome new Super vertical is now
                in our stock!
              </p>
            </div>
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          {/* Start Component Area */}
          <div className="rbt-single-product-area rbt-bg-color-white p--32 rbt-rounded--12 p_sm--16">
            <div className="row row--16">
              <div className="col-lg-6 col-12">
                <div className="rbt-product-view-slider rbt-single-product-media-area rbt-single-product-media-has-folder-shape">
                  <div className="swiper rbt-arrow-between rbt-product-single-slider-activation rbt-arrow-show-dfl">
                    <div className="swiper-wrapper">
                      {welcomeBannerSlides.map((slide, index) => (
                        <div className="swiper-slide" key={index}>
                          <div className="thumbnail radius-16">
                            <div className="rbt-product-single-img">
                              <Image
                                className="w-100"
                                alt={slide.title || "Product Images"}
                                src={slide.imgSrc}
                                width={slide.width || 1024}
                                height={slide.height || 793}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
                  </div>
                  <div className="swiper rbt-product-thumb-slider-activation mt--24">
                    <div className="swiper-wrapper">
                      {welcomeBannerSlides.map((slide, index) => (
                        <div className="swiper-slide" key={index}>
                          <button className="thumbnail d-block">
                            <span className="rbt-thumb-img-sm">
                              <Image
                                className="w-100"
                                alt={slide.title || "Product Images"}
                                src={slide.imgSrc}
                                width={slide.width || 1024}
                                height={slide.height || 793}
                              />
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 content">
                <Link
                  href={`/shop-by-category`}
                  className="rbt-card-subtitle rbt-card-categories-text mt--0"
                >
                  {welcomeBannerSlides[0]?.category?.[0] || "Electronics"}
                </Link>
                <h4 className="rbt-card-title">
                  <Link
                    href={`/product-single-default/${welcomeBannerSlides[0]?.id || 1005}`}
                  >
                    {welcomeBannerSlides[0]?.title ||
                      "High-Performance Electronics Device"}
                  </Link>
                </h4>
                <div className="rbt-scroll-vertical-wrapper rbt-vertical-height-sm">
                  <div className="rbt-scroll-vertical content">
                    <p className="description-text b2">
                      At vero eos et accusamus et iusto dignissimos ducimus
                      blanditiis praesentium voluptatu atque...
                    </p>
                    <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                      <div className="pricing-part mt--0">
                        {welcomeBannerSlides[0]?.oldPrice && (
                          <del className="price-text">
                            ${welcomeBannerSlides[0].oldPrice}
                          </del>
                        )}
                        <span className="price-text">
                          ${welcomeBannerSlides[0]?.price}
                        </span>
                        <OfferBadge price={welcomeBannerSlides[0]?.price} oldPrice={welcomeBannerSlides[0]?.oldPrice} variant="minus" />
                      </div>
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">SKU:</p>
                          <p>HN-50{welcomeBannerSlides[0]?.id || 8801}</p>
                        </div>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          {welcomeBannerSlides[0]?.availableQuantity || 9} in
                          Stock
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--24">
                      <ProductRating product={welcomeBannerSlides[0]} className="mt--0"><Facts /></ProductRating>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--24">
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">Brand:</p>
                          <Tooltip content="Product Brand" placement="top">
                            <Link
                              href={`/shop-by-brands`}
                              className="rbt-brand-img tooltips"
                            >
                              <Image
                                alt="Small icon Brand"
                                src="/assets/images/icons/small-brand/sm-brand-b-01.webp"
                                width={78}
                                height={48}
                                className="image-auto"
                              />
                            </Link>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="prd-info-section has-left-separator">
                        <div className="prd-id-text">
                          <p className="text-bold">All Europe</p>
                          <Tooltip
                            content="All Europe Delivery"
                            placement="top"
                          >
                            <Link
                              href={`/shop-by-brands`}
                              className="rbt-brand-img tooltips"
                            >
                              <Image
                                alt="Small icon Brand"
                                src="/assets/images/icons/small-brand/sm-brand-b-02.webp"
                                width={40}
                                height={41}
                                className="image-auto"
                              />
                            </Link>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="prd-info-section has-left-separator">
                        <div className="prd-id-text">
                          <p className="text-bold">Verified:</p>
                          <Tooltip content="Verified Product" placement="top">
                            <span className="rbt-brand-img tooltips">
                              <Image
                                alt="Small icon Brand"
                                src="/assets/images/icons/small-brand/sm-brand-b-03.webp"
                                width={40}
                                height={41}
                              />
                            </span>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                      <div className="prd-info-section">
                        <a
                          className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-shiny"
                          href="#"
                        >
                          <EyeIcon />
                          <p>
                            <strong>20 people are viewing this</strong>
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--24">
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">Color:</p>
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                              <li>
                                <Tooltip content="Black" placement="top">
                                  <a
                                    className="rbt-switcher--color tooltips rbt-switcher--color-one"
                                    data-switcher-color="#2B2B2B"
                                    data-src="/assets/images/product-single/earphone/earphone-05.webp"
                                    href="#"
                                  >
                                    <div className="rbt-color-circle" />
                                  </a>
                                </Tooltip>
                              </li>
                              <li className="active">
                                <Tooltip content="Pink" placement="top">
                                  <a
                                    className="rbt-switcher--color tooltips rbt-switcher--color-two"
                                    data-switcher-color="#cc999d"
                                    data-src="/assets/images/product-single/earphone/earphone-02.webp"
                                    href="#"
                                  >
                                    <div className="rbt-color-circle" />
                                  </a>
                                </Tooltip>
                              </li>
                              <li>
                                <Tooltip content="Dark" placement="top">
                                  <a
                                    className="rbt-switcher--color tooltips rbt-switcher--color-three"
                                    data-switcher-color="#9C9B9E"
                                    data-src="/assets/images/product-single/earphone/earphone-04.webp"
                                    href="#"
                                  >
                                    <div className="rbt-color-circle" />
                                  </a>
                                </Tooltip>
                              </li>
                              <li>
                                <Tooltip content="White" placement="top">
                                  <a
                                    className="rbt-switcher--color tooltips rbt-switcher--color-four"
                                    data-switcher-color="#F2EDE7"
                                    data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                    href="#"
                                  >
                                    <div className="rbt-color-circle" />
                                  </a>
                                </Tooltip>
                              </li>
                              <li>
                                <Tooltip content="Gray" placement="top">
                                  <a
                                    className="rbt-switcher--color tooltips rbt-switcher--color-five rbt-switcher--disable disabled"
                                    data-switcher-color="#a09fa4"
                                    data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                    href="#"
                                  >
                                    <div className="rbt-color-circle" />
                                  </a>
                                </Tooltip>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--16">
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
                    <div className="rbt-info-wrapper d-flex mt--20">
                      <div className="product-styles-grp d-flex mt--0">
                        <p className="text-bold title">Items :</p>
                        <div className="content d-flex flex-wrap">
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Charger
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Audio Port
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Type C Jack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="separator-top has-sm-spacer" />
                    <div className="product-btn-grp">
                      <div className="rbt-qty-area">
                        <button className="qty-item-btn qty-item-btn-decr">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <input
                          type="number"
                          className="items-qty-input"
                          defaultValue={"05"}
                          min={"01"}
                        />
                        <button className="qty-item-btn qty-item-btn-incr">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                      <ModalTriggerButton
                        openModalName="popup-cartModal"
                        className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
                      >
                        <i className="fa-regular fa-cart-shopping" /> Add To
                        Cart
                      </ModalTriggerButton>
                    </div>
                    <div className="prd-btn-grp">
                      <Link
                        className="rbt-btn d-block text-center"
                        href="/shop"
                      >
                        Buy Now
                      </Link>
                    </div>
                    <div className="rbt-quick-link-grp mt--12">
                      <CompareQuickLinkTrigger
                        product={welcomeBannerSlides[0]}
                      />
                      <WishlistQuickLinkTrigger
                        product={welcomeBannerSlides[0]}
                      />
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
          </div>
          {/* End Component Area */}
        </div>
      </div>
    </div>
  );
}
