import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireIcon, EyeIcon } from "../../svg-icons";
import Image from "next/image";

import { allProducts } from "@/data/products";
import Facts from "@/components/common/other-components/Facts";
import Countdown from "@/components/common/ui/Countdown";
import Tooltip from "@/components/common/ui/Tooltip";

import Link from "next/link";
import Slider1 from "../sliders/Slider1";
import AdditionalOffers from "../others/AdditionalOffers";
import AlternativeProducts from "../others/AlternativeProducts";
import ProductActionPanel from "../ProductActionPanel";
import ProductOptionsPanel1 from "../productOptionsPanels/ProductOptionsPanel1";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function DetailsDefault({
  product = allProducts[0],
  parentClass = "rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row row--20 mt_dec--16 justify-content-center">
          <div className="col-xl-7 col-lg-12 col-12 mt--16">
            <Slider1 product={product} />
          </div>
          <div className="col-xl-5 col-lg-12 col-12 mt--16">
            <div className="rbt-single-product-content ptb--0 rbt-product-variations">
              <div
                className="rbt-quick-access-banner rbt-quick-access-banner-sm rbt-bg-color-brand-300 rbt-rounded--8 alert alert-dismissible fade show"
                role="alert"
              >
                <div className="rbt-quick-access-banner-banner-content d-flex align-items-center">
                  <div className="rbt-icon-img">
                    <Image
                      alt="Ecommerce Gift Box Icon"
                      src="/assets/images/icons/product-single/gift-box-01-sm.svg"
                      width={44}
                      height={44}
                    />
                  </div>
                  <p className="rbt-quick-access-banner-title b3 mb-0">
                    Register to buy Grocery&apos;s at wholesale prices for your
                    shop.
                  </p>
                </div>
                <div className="rbt-quick-access-banner-action-btn">
                  <ModalTriggerButton
                    className="rbt-btn rbt-btn-xs"
                    openModalName="signinModal"
                  >
                    <i className="fa-light fa-user mr--4" /> Register Now
                  </ModalTriggerButton>
                </div>
                <a
                  href="#"
                  className="rbt-cancel-btn"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </a>
              </div>
              <Link
                href={`/shop-by-category`}
                className="rbt-card-subtitle rbt-card-categories-text mt--16"
              >
                Headphones
              </Link>
              <h2 className="rbt-card-title mt--12">{product.title}</h2>
              <p className="description-text b2 mt--16">
                At vero eos et accusamus et iusto dignissimos ducimus blanditiis
                <br />
                praesentium voluptatu atque...
              </p>
              <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                <div className="rbt-store-price-1">
                  <div className="pricing-part mt--0">
                    {product.oldPrice && (
                      <del className="price-text">
                        ${product.oldPrice?.toFixed(2)}
                      </del>
                    )}
                    <span className="price-text">
                      {" "}
                      ${product.price.toFixed(2)}
                    </span>
                    <OfferBadge product={product} className="rbt-offer-badge-md" />
                  </div>
                </div>
                <div className="rbt-quick-access-banner-action-btn d-flex align-items-center">
                  <ModalTriggerButton
                    className="rbt-btn rbt-btn-xs rbt-btn-secondary d-flex align-items-center"
                    openModalName="findStoreModal"
                  >
                    <i className="fa-regular fa-location-dot mr--4" /> Find A
                    Near Store
                  </ModalTriggerButton>
                </div>
              </div>
              <div className="rbt-info-wrapper d-flex mt--24">
                <ProductRating product={product} className="mt--0">
                  <div className="prd-info-section has-left-separator">
                    <Facts />
                  </div>
                </ProductRating>
              </div>
              <div className="rbt-info-wrapper d-flex mt--12">
                <div className="prd-info-section">
                  <div className="prd-id-text">
                    <p className="text-bold">SKU:</p>
                    <p>HN-508801</p>
                  </div>
                </div>
                <div className="prd-info-section has-left-separator">
                  <div className="prd-id-text">
                    <p className="text-bold">All Europe</p>
                    <Tooltip content="All Europe Delivery" placement="top">
                      <a href="#" className="rbt-brand-img tooltips">
                        <Image
                          alt="Small icon Brand"
                          className="image-auto"
                          src="/assets/images/icons/small-brand/sm-brand-b-02.webp"
                          width={40}
                          height={41}
                        />
                      </a>
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
                          className="image-auto"
                          src="/assets/images/icons/small-brand/sm-brand-b-03.webp"
                          width={40}
                          height={41}
                        />
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div className="prd-info-section has-left-separator">
                  <div className="prd-id-text">
                    <p className="text-bold">Brand:</p>
                    <Tooltip content="Product Brand" placement="top">
                      <a href="#" className="rbt-brand-img tooltips">
                        <Image
                          alt="Small icon Brand"
                          className="image-auto"
                          src="/assets/images/icons/small-brand/sm-brand-b-01.webp"
                          width={78}
                          height={48}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                <div className="prd-info-section">
                  <a
                    className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                    href="#"
                  >
                    <FireIcon />
                    <p>
                      <strong>34 products sold in last 10 hours.</strong>
                    </p>
                  </a>
                </div>
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
              {/* Start Dynamic Color Swatches Area */}
              <ProductOptionsPanel1 />

              {/* End Dynamic Color Swatches Area */}
              <div className="rbt-info-wrapper d-block mt--24">
                <div className="rbt-countdown-banner rbt-countdown-banner-sm rbt-countdown-banner-has-bg-01">
                  <span className="b3 rbt-title">Special Offer :</span>
                  <div className="rbt-countdown-sections">
                    <div className="rbt-countdown-one bg-variation-white cd-border-style">
                      <Countdown />
                    </div>
                  </div>
                  <span className="rbt-desc b4">
                    Remains until the end of the offer.
                  </span>
                </div>
              </div>
              <div className="rbt-info-wrapper d-block mt--24">
                <div className="rbt-prd-qty-area">
                  <p className="prd-qty-txt">
                    <strong>Only 97 pc left</strong>
                  </p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Shipping-progress"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar w-50" />
                  </div>
                </div>
              </div>
              <ProductActionPanel product={product} />
              <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
              <AdditionalOffers />
              <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
              <div className="rbt-info-wrapper d-block mt--24">
                <div className="rbt-info-box rbt-bg-color-brand-50">
                  <p className="text-bold rbt-info-title b1">
                    Alternative For This Product
                  </p>
                  <AlternativeProducts />
                </div>
              </div>
              <hr className="rbt-separator rbt-separator-gray200 mt--24" />
              <div className="rbt-info-wrapper d-block mt--24">
                <ul className="product-details-list shipment-details-list">
                  <li>
                    <span className="rbt-bold--text mr--4">Brand : </span>
                    <span className="text">Sony Corporation Ltd</span>
                  </li>
                  <li>
                    <span className="rbt-bold--text mr--4">Resolution :</span>
                    <span className="text">3840×2160</span>
                  </li>
                  <li>
                    <span className="rbt-bold--text mr--4">
                      Release years :
                    </span>
                    <span className="text"> Jan 2022</span>
                  </li>
                  <li>
                    <span className="rbt-bold--text mr--4">Motherboard :</span>
                    <span className="text"> Samsung</span>
                    <span className="text d-block">
                      ATX, ITX, microATX, Mini-ITX
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa-sharp fa-regular fa-truck" />
                    </span>
                    <div className="right-content">
                      <span className="rbt-bold--text mr--4">Ships :</span>
                      <span className="text">2–3 weeks Free Shipping</span>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="fa-regular fa-bag-shopping" />
                    </span>
                    <div className="right-content">
                      <span className="rbt-bold--text mr--4">
                        7 Days Returns :
                      </span>
                      <span className="text">
                        Free return within 7 days of purchase
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
              <div className="rbt-info-wrapper d-block mt--24">
                <div className="rbt-info-box rbt-bg-color-brand-50">
                  <div className="rbt-payment-info-container">
                    <ul className="payment-img-link">
                      <li>
                        <a href="#">
                          <Image
                            alt="Payment Brand Image"
                            src="/assets/images/payment-brand/image-01.webp"
                            width={812}
                            height={64}
                          />
                        </a>
                      </li>
                    </ul>
                    <span className="b2 rbt-text-medium text-center rbt-text-color-heading mt--12 d-block">
                      Guaranteed safe &amp; secure checkout
                    </span>
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
