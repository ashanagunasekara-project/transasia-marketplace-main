"use client";

import Image from "next/image";
import Link from "next/link";
import Countdown from "../common/ui/Countdown";
import Facts from "../common/other-components/Facts";
import { Product } from "@/types";
import { useState } from "react";
import Tooltip from "@/components/common/ui/Tooltip";
import AddToWishlist from "../action-buttons/AddToWishlistOne";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";

export default function ProductCard23({
  product,
  detailsPageUrl = "/product-single-default",

  shouldShowTimer = true,
  countdownStyle = "default",
  loginRequired = false,
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  shouldShowTimer?: boolean;
  countdownStyle?: "default" | "compact";
  loginRequired?: boolean;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div
        className={`rbt-card rbt-product-card has-hover-box-shadow ${
          product.isStockOut ? "rbt-stock-out-product-card" : ""
        }`}
      >
        <div
          className={`inner rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
        >
          <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
            <Link href={detailsPageLink}>
              <Image
                className="rbt-prd-img"
                alt="Card Image"
                src={product.imgSrc}
                width={1246}
                height={976}
              />
              {product.hoverImgSrc && (
                <Image
                  className="rbt-hover-img"
                  alt="Card Image"
                  src={product.hoverImgSrc}
                  width={1246}
                  height={976}
                />
              )}
            </Link>
            {product.badges && product.badges.length > 0 && (
              <div className="rbt-badge-wrapper rbt-content-top-left">
                {product.badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`rbt-product-badge ${badge.bg} border-rounded`}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            )}
            {product.watchingTooltip && (
              <Tooltip
                content={`👁️ ${product.watchingTooltip} People Are Watching This Item`}
                placement="bottom"
              >
                <div className="rbt-discount-badge right--corner-style tooltips">
                  <span>
                    <i className="fa-regular fa-eye" />
                    {product.watchingTooltip}
                  </span>
                </div>
              </Tooltip>
            )}
            <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
              <Tooltip content="Quick View" placement="left">
                <AddToQuickViewOne
                  product={product}
                  className={`rbt-search-btn rbt-quick-btn tooltips ${
                    product.id === 2 ? "rbt-quickview-sidenav-activation" : ""
                  }`}
                  type="button"
                  openModalName="quickViewModal"
                >
                  <i className="fa-regular fa-magnifying-glass-plus" />
                </AddToQuickViewOne>
              </Tooltip>

              <AddToWishlist product={product} />
            </div>
            {product.countdown &&
              shouldShowTimer &&
              countdownStyle === "default" && (
                <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
                  <Countdown />
                </div>
              )}
          </div>
          <div className="rbt-card-body">
            {product.category?.length && product.category.length > 0 && (
              <div>
                {product.category?.map((item, index) => (
                  <Link
                    key={index}
                    href={`/shop-by-categories`}
                    className="rbt-card-subtitle rbt-card-categories-text"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
            <h6 className="rbt-card-title">
              <Link href={detailsPageLink}>
                {product.title}
              </Link>
            </h6>
            <div className="rbt-card-rating">
              <ul className="rbt-rating-icon-list">
                {Array.from({ length: 5 }, (_, index) => (
                  <li key={index}>
                    <i
                      className={`fa-solid fa-star${index < (product.rating ?? 0) ? " rbt-rated-icon" : ""}`}
                    />
                  </li>
                ))}
              </ul>
              <p className="rating-digit">({product.reviewCount})</p>
              {product.extraInfo && product.extraInfo.length > 0 && <Facts />}
            </div>

            <div className="prd-btn-grp">
              {loginRequired ? (
                <ModalTriggerButton
                  className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                  openModalName="signinModal"
                >
                  <i className="fa-regular fa-user" /> Login/Registration
                </ModalTriggerButton>
              ) : (
                <ModalTriggerButton
                  className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                  openModalName="makecallModal"
                >
                  <i className="fa-regular fa-phone" /> Call for prices
                </ModalTriggerButton>
              )}
            </div>
          </div>
        </div>
        <div
          className={`prd-details-area rbt-has-show-more ${showMore ? "active" : ""}`}
        >
          <div className="wrapper rbt-has-show-more-inner-content">
            <ul className="product-details-list">
              {product.productDetails &&
                product.productDetails.map((detail, index) => (
                  <li key={index}>
                    <span className="rbt-bold--text mr--1">
                      {detail.label} :
                    </span>
                    {Array.isArray(detail.text) ? (
                      detail.text.map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          className={`text ${lineIndex > 0 ? "d-block" : ""}`}
                        >
                          {line}
                        </span>
                      ))
                    ) : (
                      <span className="text ml--4">{detail.text}</span>
                    )}
                  </li>
                ))}
            </ul>
            <ul className="product-details-list shipment-details-list">
              {product.shipmentDetails &&
                product.shipmentDetails.map((shipment, index) => (
                  <li key={index}>
                    <span className="icon">
                      <i className={shipment.icon} />
                    </span>
                    <div className="right-content">
                      {shipment.label && (
                        <span className="rbt-bold--text mr--1">
                          {shipment.label} :
                        </span>
                      )}
                      {shipment.text && (
                        <span className="text ml--4">
                          {shipment.text} {``}
                        </span>
                      )}
                      {shipment.link && (
                        <a
                          href={shipment.link.href}
                          className="shipment-quick-link rbt-btn-link ml--4"
                        >
                          {shipment.link.text}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className={`rbt-show-more-btn-area ${showMore ? "active" : ""}`}>
            <button
              type="button"
              className="rbt-show-more-btn"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
