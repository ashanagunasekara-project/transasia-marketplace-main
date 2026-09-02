import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
import { Product } from "@/types";
import AddToQuickViewOne from "../action-buttons/AddToQuickViewOne";
import AddToWishlistTwo from "../action-buttons/AddToWishlistTwo";

export default function ProductCard20({
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
    <div className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${animationOrder}`}>
      <div className={`rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}>
        <Link href={detailsPageLink}>
          <Image
            alt="Card Image"
            width={400}
            height={581}
            src={product.imgSrc}
          />
        </Link>

        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position">
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

        <AddToQuickViewOne
          product={product}
          className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon"
          openModalName="quickViewModal"
        >
          Select Option
        </AddToQuickViewOne>
      </div>

      <div className="rbt-card-body rbt-card-body-center-align">
        <h6 className="rbt-card-title">
              <Link href={detailsPageLink}>
            {product.title}
          </Link>
        </h6>

        <ProductRating product={product} />

        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
