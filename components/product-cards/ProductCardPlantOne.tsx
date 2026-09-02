"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import AddToCart2 from "@/components/action-buttons/AddToCart2";
import AddToCompare2 from "@/components/action-buttons/AddToCompareTwo";
import AddToQuickViewOne from "@/components/action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "@/components/action-buttons/AddToWishlistTwo";
import OfferBadge from "@/components/common/ui/OfferBadge";

export default function ProductCardPlantOne({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const variants = product.variants ?? [];
  const [selectedImage, setSelectedImage] = useState(product.imgSrc);

  useEffect(() => {
    setSelectedImage(product.imgSrc);
  }, [product]);

  const badgeClass = useMemo(() => {
    const bg = product.badge?.bg;
    if (!bg) return "";
    return bg.startsWith("rbt-product-badge-") ? bg : `rbt-product-badge-${bg}`;
  }, [product.badge?.bg]);

  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-rounded--12 rbt-bg-color-white rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
      >
        <Link href={detailsPageLink}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-prd-img`}
            alt={product.title}
            src={selectedImage}
            width={624}
            height={846}
          />
        </Link>

        {product.badge && (
          <div
            className={`rbt-product-badge ${badgeClass} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
          <AddToWishlistTwo
            parentClass="rbt-wishlisted-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <AddToCompare2
            parentClass="rbt-compare-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <AddToQuickViewOne
            product={product}
            className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
            type="button"
            openModalName="quickViewModal"
          >
            <i className="fa-sharp fa-regular fa-eye" />
          </AddToQuickViewOne>
        </div>

        <AddToCart2
          parentClass="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
          product={product}
        />
      </div>

      <div className="rbt-card-body rbt-card-body-center-align">
        {variants.length > 0 && (
          <div className="rbt-product-switch-area justify-content-center">
            <ul className="rbt-switcher-product-list product-switcher-activation">
              {variants.map((variant, index) => (
                <li
                  key={`${product.id}-${variant.src ?? index}`}
                  className={selectedImage === variant.src ? "active" : ""}
                >
                  <a
                    className={`rbt-switcher--prd rbt-switcher--prd-${
                      ["one", "two", "three", "four"][index] ?? "one"
                    }`}
                    data-src={variant.src}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.src) setSelectedImage(variant.src);
                    }}
                  >
                    {variant.src && (
                      <Image
                        alt="Product Image"
                        src={variant.src}
                        width={624}
                        height={846}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.category?.[0] && (
          <Link
            href="/shop-by-categories"
            className="rbt-card-subtitle rbt-card-catagories-text"
          >
            {product.category[0]}
          </Link>
        )}

        <h6 className="rbt-card-title">
            <Link href={detailsPageLink}>
            {product.title}
          </Link>
        </h6>

        <div className="rbt-card-rating">
          <ul className="rbt-rating-icon-list">
            {Array.from({ length: product.rating ?? 0 }).map((_, index) => (
              <li key={index}>
                <i className="fa-solid fa-star rbt-rated-icon" />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount ?? 0})</p>
          <span className="icon">
            <i className="fa-sharp fa-solid fa-truck-fast" />
          </span>
        </div>

        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
          <OfferBadge product={product} variant="minus" />
        </div>
      </div>
    </div>
  );
}
