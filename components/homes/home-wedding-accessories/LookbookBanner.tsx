"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import AddToWishlistTwo from "@/components/action-buttons/AddToWishlistTwo";
import { useLookbookMobileHotspot } from "@/hooks/useLookbookMobileHotspot";
import { formatCurrency } from "@/lib/price";

interface LookbookBannerProps {
  banner: string;
  products: Product[];
  index: number;
  isSecondary?: boolean;
}

export default function LookbookBanner({
  banner,
  products,
  index,
  isSecondary = false,
}: LookbookBannerProps) {
  const filteredProducts = products.filter((item) => item.bannerImg === banner);
  const { getHotspotClassName, toggleHotspot, closeHotspot } =
    useLookbookMobileHotspot();

  return (
    <div
      className={`rbt-lookbook-section lookbook-style--three ${isSecondary ? "mt--24" : ""}`}
    >
      <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
        <Image
          className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
          alt="Lookbook Banner"
          src={banner || ""}
          width={692}
          height={740}
        />
        {filteredProducts.map((item, i) => (
          <div
            key={i}
            className={getHotspotClassName(`home-wedding-${banner}-${item.id}`)}
            data-rbt-position-vertical={item.vertical}
            data-rbt-position-horigental={item.horizontal}
          >
            <button
              type="button"
              className="rbt-lookbook-dot"
              onClick={(e) => {
                e.stopPropagation();
                toggleHotspot(`home-wedding-${banner}-${item.id}`);
              }}
            />
            <div
              className="rbt-dot-lookbook-product-wrapper"
              onClick={closeHotspot}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeHotspot();
                }}
              >
                <i className="fas fa-times" />
              </button>
              <div
                className={`rbt-lookbook-dot-content placed-${item.placement}`}
              >
                <div className="rbt-card rbt-product-card">
                  <div className="inner border-0">
                    <div className="rbt-card-img rbt-bg-color-white">
                      <Link href={`/product-single-default/${item.id}`}>
                        <Image
                          alt="Card Image"
                          src={item.imgSrc || ""}
                          width={548}
                          height={462}
                        />
                      </Link>
                      <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded rbt-badge-top-left--position">
                        New
                      </div>
                      <AddToWishlistTwo product={item} />
                    </div>
                    <div className="rbt-card-body">
                      <Link
                        href="/shop-by-categories"
                        className="rbt-card-subtitle rbt-card-categories-text"
                      >
                        Table
                      </Link>
                      <h6 className="rbt-card-title text-start">
                        <Link href={`/product-single-default/${item.id}`}>
                          {item.title}
                        </Link>
                      </h6>
                      <div className="rbt-card-rating">
                        <ul className="rbt-rating-icon-list">
                          {Array.from({ length: item.rating ?? 0 }).map(
                            (_, j) => (
                              <li key={j}>
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </li>
                            ),
                          )}
                        </ul>
                        <p className="rating-digit">({item.ratingCount})</p>
                      </div>
                      <div className="pricing-part">
                        <del className="price-text">
                          {formatCurrency(item.oldPrice ?? 0)}
                        </del>
                        <span className="price-text">
                          {formatCurrency(item.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
