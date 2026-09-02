import OfferBadge from "@/components/common/ui/OfferBadge";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToCart from "../action-buttons/AddToCart";
import AddToCompare2 from "../action-buttons/AddToCompareTwo";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard13({
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
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rounded--16 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div
        className={`rbt-card-img ${
          product.hoverImgSrc ? "rbt-has-hover-img" : ""
        } rounded--16`}
      >
        <Link href={detailsPageLink}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-prd-img`}
            alt="Card Image"
            src={product.imgSrc}
            width={800}
            height={1085}
          />
        </Link>
        {product.hoverImgSrc && (
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-hover-img`}
            alt="Hover"
            src={product.hoverImgSrc}
            width={800}
            height={1085}
          />
        )}
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${product.badge.bg}`}>
              {product.badge.text}
            </div>
          </div>
        )}

        <AddToWishlistTwo product={product} />
      </div>

      <div className="rbt-card-body has-rbt-top-right-corner-portion rbt-card-body-top-bottom-space rbt-card-circle-hidden">
        <div className="rbt-curved-radius-bottom-corner" />

        {/* Right corner buttons */}
        {product.hotSell && (
          <div className="rbt-scroll-animation-wrapper rbt-no-overlay">
            <div className="rbt-scroll-animation rbt-scroll-right-left">
              {/* Start Single Testimonial  */}
              <div className="rbt-single-column-100">
                <div className="rbt-category-list-dis rbt-category-list">
                  <a href="#!">
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
                  <a href="#!">
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
                  <a href="#!">
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
                  <a href="#!">
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
                  <a href="#!">
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
                  <a href="#!">
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
                  <a href="#!">
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
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
        )}
        <div className="rbt-right-corner-portion bottom--position">
          <div className="rbt-corner-portion-wrapper">
            <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
              <AddToCompare2 product={product} />
              <Tooltip content="Quick View" placement="left">
                <AddToQuickViewOne
                  product={product}
                  className="rbt-watch-btn rbt-quick-btn tooltips"
                  type="button"
                  openModalName="quickViewModal"
                >
                  <i className="fa-sharp fa-regular fa-eye" />
                </AddToQuickViewOne>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="rbt-card-top-content text-center">
          {product.category?.length && product.category.length > 0 && (
            <div>
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-categories`}
                  className="rbt-card-subtitle rbt-card-categories-text mt--0"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
          <h6 className="rbt-card-title mt--4">
            <Link href={detailsPageLink}>
              {product.title}
            </Link>
          </h6>

          <div className="rbt-card-rating justify-content-center">
            <ul className="rbt-rating-icon-list">
              {Array.from({ length: 5 }, (_, index) => (
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
          </div>

          <div className="pricing-part justify-content-center">
            <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
            <span className="price-text">${product.price.toFixed(2)}</span>
            <OfferBadge product={product} variant="minus" />
          </div>
        </div>

        {/* Footer Button */}
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart
            parentClass="rbt-btn rbt-btn-sm has-left-icon flex-basis-100"
            product={product}
          />
        </div>
      </div>
    </div>
  );
}
