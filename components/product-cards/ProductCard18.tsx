import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToCart from "../action-buttons/AddToCart";
import AddToCompare2 from "../action-buttons/AddToCompareTwo";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard18({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  const {
    imgSrc,
    badge,
    category,
    title,
    price,
    oldPrice,
    discount,
    rating,
    reviewCount,
    moreText,
    variants,
  } = product;
  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rounded--12 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div className="rbt-card-img top-rounded-md">
        <Link href={detailsPageLink}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-prd-img`}
            src={imgSrc}
            alt={title}
            width={624}
            height={624}
          />
        </Link>

        {/* Badge if available */}
        {badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${badge.bg}`}>{badge.text}</div>
          </div>
        )}

        <AddToWishlistTwo product={product} />
      </div>

      <div className="rbt-card-body rbt-bg-color-gray-light text-center">
        <div className="rbt-card-top-content">
          {/* Category */}
          <Link
            href={`/shop-by-categories`}
            className="rbt-card-subtitle rbt-card-categories-text mt--12"
          >
            {category}
          </Link>

          {/* Title */}
          <h6 className="rbt-card-title">
            <Link href={detailsPageLink}>{title}</Link>
          </h6>

          {/* Rating */}
          <div className="rbt-card-rating justify-content-center">
            <ul className="rbt-rating-icon-list">
              {[...Array(rating)].map((_, i) => (
                <li key={i}>
                  <i className="fa-solid fa-star rbt-rated-icon" />
                </li>
              ))}
            </ul>
            <p className="rating-digit">({reviewCount})</p>
          </div>

          {/* Price */}
          <div className="pricing-part justify-content-center">
            <del className="price-text">${oldPrice?.toFixed(2)}</del>
            <span className="price-text">${price.toFixed(2)}</span>
            <OfferBadge price={product.price} oldPrice={product.oldPrice} variant="minus" />
          </div>

          {/* Variant Images (if available) */}
          {variants && (
            <div className="rbt-product-switch-area mt--10">
              <ul className="rbt-switcher-product-list product-switcher-activation">
                {variants.map((variant, index) => (
                  <li key={index} className={index === 0 ? "active" : ""}>
                    <a
                      href="#"
                      className={`rbt-switcher--prd rbt-switcher--prd-${
                        index + 1
                      }`}
                    >
                      {variant.src && (
                        <Image
                          src={variant.src}
                          alt="Variant"
                          width={624}
                          height={624}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              {moreText && (
                <a className="prd-link-text" href="#">
                  +{moreText} More
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart product={product} />
          <div className="rbt-quick-btn-grp has-mixup-midlayer">
            <AddToCompare2 tooltipDirection="top" product={product} />
            <Tooltip content="Quick View" placement="top">
              <AddToQuickViewOne
                product={product}
                className="rbt-watch-btn rbt-quick-btn tooltips top-right"
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
