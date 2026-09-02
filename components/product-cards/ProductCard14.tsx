"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

const ProductCard14 = ({
  product,
  detailsPageUrl = "/product-single-default",
  textCenter = true,
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  textCenter?: boolean;
  animationOrder?: number;
}) => {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  useEffect(() => {
    setSelectedVariant(product.imgSrc);
  }, [product]);
  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      {/* Product Image */}
      <div
        className={`rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
      >
        <Link href={detailsPageLink}>
          <Image
            className="rbt-prd-img"
            src={selectedVariant}
            alt={product.title}
            width={624}
            height={928}
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
          <AddToWishlistTwo
            parentClass="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <Tooltip content="Quick View" placement="left">
            <AddToQuickViewOne
              product={product}
              className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
              type="button"
              openModalName="quickViewModal"
            >
              <i className="fa-sharp fa-regular fa-magnifying-glass" />
            </AddToQuickViewOne>
          </Tooltip>
        </div>

        {/* Select Option Button */}
        <AddToQuickViewOne
          product={product}
          className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon"
          openModalName="quickViewModal"
        >
          Select Option
        </AddToQuickViewOne>
      </div>

      {/* Product Body */}
      <div
        className={`rbt-card-body ${
          textCenter ? "rbt-card-body-center-align" : ""
        }`}
      >
        {/* Color Switchers */}
        {product.colorVariants && (
          <div
            className={`rbt-color-select-area ${
              textCenter ? "justify-content-center" : ""
            } `}
          >
            <ul className="rbt-switcher-color-list product-switcher-activation">
              {product.colorVariants.map((variant, index) => (
                <li
                  key={index}
                  className={selectedVariant === variant.src ? "active" : ""}
                >
                  <Tooltip content={variant.tooltip} placement="top">
                    <a
                      className="rbt-switcher--color tooltips"
                      data-switcher-color={variant.color}
                      data-src={variant.src}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (variant.src) {
                          setSelectedVariant(variant.src);
                        }
                      }}
                    >
                      <div
                        className="rbt-color-circle"
                        style={{ backgroundColor: variant.color }}
                      ></div>
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ul>
            {product.moreItemsLink && (
              <Link
                className="prd-link-text"
                href={detailsPageLink}
              >
                +{product.moreItemsLink} More Items
              </Link>
            )}
          </div>
        )}
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

        {/* Title */}
        <h6 className="rbt-card-title">
          <Link href={detailsPageLink}>
            {product.title}
          </Link>
        </h6>

        {/* Ratings */}
        <div className="rbt-card-rating">
          <ul className="rbt-rating-icon-list">
            {Array.from({ length: product.rating ?? 0 }).map((_, idx) => (
              <li key={idx}>
                <i className="fa-solid fa-star rbt-rated-icon" />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>

          {/* Truck Icon */}
          {product.showTruckIcon && (
            <span className="icon">
              <i className="fa-sharp fa-solid fa-truck-fast" />
            </span>
          )}
        </div>

        {/* Price */}
        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
          <OfferBadge product={product} variant="minus" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard14;
