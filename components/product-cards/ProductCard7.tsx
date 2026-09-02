import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import AddToCart3 from "../action-buttons/AddToCart2";
import Tooltip from "@/components/common/ui/Tooltip";
import AddToCompare2 from "../action-buttons/AddToCompareTwo";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

const ProductCard7 = ({
  product,
  detailsPageUrl = "/product-single-default",
  animationOrder = 1,
}: {
  product: Product;
  detailsPageUrl?: string;
  animationOrder?: number;
}) => {
  const detailsPageLink = `${detailsPageUrl}/${product.id}`;
  // Function to render rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <i
            className={`fa-solid fa-star ${i < rating ? "rbt-rated-icon" : ""}`}
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
        className={`rbt-card-img top-rounded-md rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
      >
        <Link href={detailsPageLink}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={312}
            height={445}
          />
        </Link>
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}
        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
          <AddToWishlistTwo
            parentClass="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />

          <AddToCompare2
            parentClass="rbt-compare-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <Tooltip content="Quick View" placement="left">
            <AddToQuickViewOne
              product={product}
              className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
              type="button"
              openModalName="quickViewModal"
            >
              <i className="fa-sharp fa-regular fa-eye" />
            </AddToQuickViewOne>
          </Tooltip>
        </div>
      </div>
      <div className="rbt-card-body rbt-card-body-center-align rbt-bg-color-gray-100">
        <div className="rbt-card-top-content">
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
              {product.rating ? renderStars(product.rating) : null}
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
        <div className="rbt-card-footer d-block footer-content-btn">
          <AddToCart3
            parentClass="rbt-btn rbt-btn-sm has-left-icon d-block w-full"
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard7;
