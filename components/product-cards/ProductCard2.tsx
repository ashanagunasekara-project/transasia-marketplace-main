import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import Link from "next/link";
import AddToCart2 from "../action-buttons/AddToCart2";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToCompare2 from "../action-buttons/AddToCompareTwo";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard2({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
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

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
      >
        <Link href={detailsPageLink}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={1162}
            height={892}
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
      <div className="rbt-card-body rbt-card-body-top-bottom-space">
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
              <div className="pricing-part">
                {product.oldPrice && (
                  <del className="price-text">
                    ${product.oldPrice.toFixed(2)}
                  </del>
                )}
                <span className="price-text">${product.price.toFixed(2)}</span>
              </div>
            </div>
            {product.oldPrice ? (<div className="bottom-part"><OfferBadge product={product} className="mt--12" /></div>) : null}
          </div>
        </div>
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart2 product={product} />
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
