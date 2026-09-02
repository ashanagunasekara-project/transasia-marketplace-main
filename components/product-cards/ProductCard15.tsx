import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import AddToCart from "../action-buttons/AddToCart";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard15({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-rounded--12 rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
      >
        <Link href={detailsPageLink}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={624}
            height={846}
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

        <AddToCart
          parentClass="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
          product={product}
        />
      </div>
      <div className="rbt-card-body rbt-card-body-center-align">
        {product.category?.length && product.category.length > 0 && (
          <div>
            {product.category?.map((item, index) => (
              <Link
                key={index}
                href={`/shop-by-category`}
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
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <i
                  className={`fa-solid fa-star ${
                    index < (product.rating ?? 0) ? "rbt-rated-icon" : ""
                  }`}
                />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>
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
