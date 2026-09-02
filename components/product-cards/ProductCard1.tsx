"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToCompare2 from "../action-buttons/AddToCompareTwo";
import AddToCart from "../action-buttons/AddToCart";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard1({
  detailsPageUrl = "/product-single-default",
  product,
  cardBodyClass = "rbt-card-body has-rbt-top-right-corner-portion rbt-card-body-top-bottom-space",
  animationOrder = 1,
}: {
  detailsPageUrl?: string;
  product: Product;
  cardBodyClass?: string;
  animationOrder?: number;
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  useEffect(() => {
    setSelectedVariant(product.imgSrc);
  }, [product]);
  const detailsPageLink = detailsPageUrl + `/${product.id}`;
  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rounded--16 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div className="rbt-card-img rounded--16">
        <Link href={detailsPageLink}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-prd-img`}
            alt="Card Image"
            src={selectedVariant}
            width={624}
            height={846}
          />
        </Link>
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div
              className={`rbt-product-badge rbt-product-badge-${product.badge.bg}`}
            >
              {product.badge.text}
            </div>
          </div>
        )}
        <AddToWishlistTwo product={product} />
      </div>
      <div className={cardBodyClass}>
        <div className="rbt-curved-radius-bottom-corner" />
        {product.hotSell && (
          <div className="rbt-scroll-animation-wrapper rbt-no-overlay">
            <div className="rbt-scroll-animation rbt-scroll-right-left">
              <div className="rbt-single-column-100">
                <div className="rbt-category-list-dis rbt-category-list">
                  {[...Array(7)].map((_, i) => (
                    <a href="#!" key={i}>
                      <span className="rbt-category-icon">
                        <Image
                          alt="icon"
                          src="/assets/images/icons/scroll-icon-01.svg"
                          width={16}
                          height={16}
                        />
                      </span>
                      Hot Sell 50% Off
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="rbt-card-top-content">
          <div className="rbt-product-switch-area">
            <ul className="rbt-switcher-product-list product-switcher-activation">
              {product.variants?.map((variant, index) => (
                <li
                  className={selectedVariant === variant.src ? "active" : ""}
                  key={index}
                >
                  <a
                    className={`rbt-switcher--prd rbt-switcher--prd-${
                      ["one", "two", "three", "four"][index]
                    }`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.src) {
                        setSelectedVariant(variant.src);
                      }
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
            {product.moreText && (
              <Link className="prd-link-text" href={detailsPageLink}>
                +{product.moreText} More
              </Link>
            )}
          </div>
          {product.category?.length && product.category.length > 0 && (
            <div>
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-categories`}
                  className="rbt-card-subtitle rbt-card-categories-text mt--12"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
          <h6 className="rbt-card-title mt--4">
            <Link href={detailsPageLink}>{product.title}</Link>
          </h6>
          <div className="rbt-card-rating">
            <ul className="rbt-rating-icon-list">
              {[...Array(product.rating)].map((_, i) => (
                <li key={i}>
                  <i className="fa-solid fa-star rbt-rated-icon" />
                </li>
              ))}
            </ul>
            <p className="rating-digit">({product.reviewCount})</p>
          </div>
          <div className="pricing-part">
            <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
            <span className="price-text">${product.price.toFixed(2)}</span>
            <OfferBadge product={product} variant="minus" />
          </div>
        </div>
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart product={product} />
          <div className="rbt-quick-btn-grp has-mixup-midlayer">
            <AddToCompare2 product={product} tooltipDirection="top" />
            <Tooltip content="Quick View" placement="top">
              <AddToQuickViewOne
                product={product}
                className="rbt-watch-btn rbt-quick-btn tooltips top-right"
                type="button"
                openModalName="quickViewModal"
              >
                <i className="fa-sharp fa-regular fa-eye" />
              </AddToQuickViewOne>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
