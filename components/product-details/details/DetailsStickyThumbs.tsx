import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireSmallIcon, EyeIcon } from "../../svg-icons";
import Image from "next/image";

import Slider13 from "../sliders/Slider13";
import ComboProducts from "../others/ComboProducts2";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

import ProductOptionsPanel16 from "../productOptionsPanels/ProductOptionsPanel16";
import ProductOptionsPanelGift from "../productOptionsPanels/ProductOptionsPanelGift";

import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import CompareQuickLinkTrigger from "@/components/action-buttons/CompareQuickLinkTrigger";
import WishlistQuickLinkTrigger from "@/components/action-buttons/WishlistQuickLinkTrigger";
import { formatCurrency } from "@/lib/price";

export default function DetailsStickyThumbs({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-8 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <Slider13 />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-content">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text"
                  >
                    Headphones
                  </a>
                  <h2 className="rbt-card-title mt--12">
                    Beats Wireless Earbuds with Charging Case - Bluetooth In-Ear
                    Headphones
                  </h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex">
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
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="pricing-part mt--0">
                      {product.oldPrice ? (
                        <del className="price-text">
                          {formatCurrency(product.oldPrice)}
                        </del>
                      ) : null}
                      <span className="price-text">
                        {formatCurrency(product.price)}
                      </span>
                      <OfferBadge product={product} className="rbt-offer-badge-md" />
                    </div>
                    <div className="rbt-quick-access-banner-action-btn d-flex align-items-center">
                      <ModalTriggerButton
                        openModalName="findStoreModal"
                        className="rbt-btn rbt-btn-xs rbt-btn-secondary d-flex align-items-center"
                      >
                        <i className="fa-regular fa-location-dot mr--4" /> Find
                        A Near Store
                      </ModalTriggerButton>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                        href="#"
                      >
                        <FireSmallIcon />
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
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <ul className="product-details-list shipment-details-list">
                    <li>
                      <span className="icon">
                        <i className="fa-sharp fa-regular fa-truck" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">
                          Estimated Delivery :
                        </span>
                        <span className="text"> 15 - 22 Nov, 2026</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-bag-shopping" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">7 Days Returns :</span>
                        <a href="#" className="shipment-quick-link">
                          Free return within 7 days of purchase
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ProductOptionsPanel16 />
                  <ProductOptionsPanelGift />
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
                    <a
                      className="rbt-btn rbt-btn-border has-left-icon d-block text-center rbt-cart-sidenav-activation"
                      href="#"
                    >
                      <i className="fa-regular fa-cart-shopping" /> Add To Cart
                    </a>
                  </div>
                  <div className="prd-btn-grp">
                    <a className="rbt-btn d-block text-center" href="#">
                      Buy Now
                    </a>
                  </div>
                  <div className="rbt-quick-link-grp">
                    <CompareQuickLinkTrigger product={product} />
                    <WishlistQuickLinkTrigger product={product} />
                    <ModalTriggerButton
                      openModalName="socialShareModal"
                      className="rbt-quick-link"
                      type="button"
                    >
                      <i className="fa-sharp fa-regular fa-share-nodes" />
                      Share
                    </ModalTriggerButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="rbt-combo-prd-box rbt-bg-color-white mt--24">
              <div className="row justify-content-between">
                <div className="col-lg-12">
                  <div className="rbt-combo-title-section flex-row">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There&apos;s more in the complete bundle
                    </h5>
                  </div>
                </div>

                <ComboProducts />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts />
            <div className="rbt-block-banner-img mt--16">
              <Image
                alt="Ecommerce Product Banner"
                src="/assets/images/product-single/single-prd-banner/single-prd-banner-a-01.webp"
                width={1696}
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
