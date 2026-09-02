"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";
export default function ProductCard3({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  useEffect(() => {
    setSelectedVariant(product.imgSrc);
  }, [product]);
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <i
            className={`fa-solid fa-star${i < rating ? " rbt-rated-icon" : ""}`}
          />
        </li>,
      );
    }
    return stars;
  };

  const renderColorVariants = (
    variants: import("@/types").ProductVariant[],
  ) => {
    return variants.map((variant, index) => (
      <li
        key={index}
        className={selectedVariant === variant.src ? "active" : ""}
      >
        <Tooltip content={variant.color} placement="top">
          <a
            className="rbt-switcher--color tooltips"
            data-switcher-color={variant.hex}
            data-src={variant.src}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedVariant(variant.src ?? "");
            }}
          >
            <div
              className="rbt-color-circle"
              style={{ backgroundColor: variant.hex }}
            />
          </a>
        </Tooltip>
      </li>
    ));
  };

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 wider-variation rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div className="rbt-card-img -scroll-triggerzoome_in animation-order-">
        {" "}
        {/* Note the inconsistent class here "-scroll-triggerzoome_in" */}
        <Link href={detailsPageLink}>
          <Image
            className="rbt-prd-img"
            alt="Card Image"
            src={selectedVariant}
            width={1296}
            height={750}
          />
        </Link>
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${product.badge.bg}`}>
              {product.badge.text}
            </div>
          </div>
        )}
        <div className="rbt-right-corner-portion bottom--position white-box-style">
          <div className="rbt-corner-portion-wrapper">
            <div className="corner-portion-box" />
          </div>
        </div>
        <AddToWishlistTwo product={product} />
      </div>
      <div className="rbt-card-body no-footer-body">
        <div className="rbt-card-top-content has-two-align">
          <div className="left-part">
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
                {product.rating ? renderRatingStars(product.rating) : null}
              </ul>
              <p className="rating-digit">({product.reviewCount})</p>
            </div>
          </div>
          <div className="right-part">
            <div className="top--part">
              <div className="pricing-part justify-content-end">
                {product.priceRange?.length === 2 && (
                  <span className="price-text">
                    ${product.priceRange[0]} - ${product.priceRange[1]}
                  </span>
                )}
              </div>
              {product.variants && product.variants.length > 0 && (
                <div className="rbt-color-select-area mt--8 mt_sm--4">
                  <ul className="rbt-switcher-color-list product-switcher-activation">
                    {renderColorVariants(product.variants)}
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
              <Link
                className="rbt-btn rbt-btn-sm bg-black text-center mt--12"
                href="/shop"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
