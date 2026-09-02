"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AddToCart from "../action-buttons/AddToCart";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";
const ProductCard6 = ({
  product,
  detailsPageUrl = "/product-single-default",
  imgBgcolor = "rbt-bg-color-gray-light",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  imgBgcolor?: string;
  animationOrder?: number;
}) => {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  useEffect(() => {
    setSelectedVariant(product.imgSrc);
  }, [product]);

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div
        className={`rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-${animationOrder} ${imgBgcolor}`}
      >
        <Link href={detailsPageLink}>
          <Image
            className="rbt-prd-img"
            alt="Card Image"
            src={selectedVariant}
            width={624}
            height={624} // Assuming a default height based on your HTML
          />
        </Link>
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        <AddToWishlistTwo product={product} />
      </div>
      <div className="rbt-card-body">
        <h6 className="rbt-card-title">
          <Link href={detailsPageLink}>
            {product.title}
          </Link>
        </h6>
        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
        </div>
        <div className="rbt-color-select-area mt--8">
          <ul className="rbt-switcher-color-list product-switcher-activation">
            {product.variants?.map((variant, index) => (
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
                      if (variant.src) {
                        setSelectedVariant(variant.src);
                      }
                    }}
                  >
                    <div
                      style={{ backgroundColor: variant.hex }}
                      className="rbt-color-circle"
                    />
                  </a>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
        <div className="rbt-card-footer d-block footer-content-btn">
          <AddToCart
            parentClass="rbt-btn rbt-btn-sm w-full has-left-icon rbt-cart-sidenav-activation"
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard6;
