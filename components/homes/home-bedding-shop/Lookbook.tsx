"use client";

import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import { beddingProducts } from "@/data/products/lookbook";
import AddToWishlistTwo from "@/components/action-buttons/AddToWishlistTwo";
import { useLookbookMobileHotspot } from "@/hooks/useLookbookMobileHotspot";
import { formatCurrency } from "@/lib/price";

export default function Lookbook() {
  const bannerImage = beddingProducts[0].bannerImg;
  const { getHotspotClassName, toggleHotspot, closeHotspot } =
    useLookbookMobileHotspot();

  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-section-gap rbt-bg-color-white">
      <div className="rbt-full-width-wrapper">
        <div className="row row--0 mt_dec--24 align-items-center justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 text-end">
            <div className="rbt-lookbook-section rbt-lookbook-style--two p-0">
              <div className="rbt-lookbook-banner rbt-lookbook-banner-two rbt-scroll-trigger zoom_in animation-order-3">
                <Image
                  alt="Lookbook Image"
                  src={bannerImage || ""}
                  width={3614}
                  height={1440}
                />

                {beddingProducts.map((item, idx) => (
                  <div
                    key={idx}
                    className={getHotspotClassName(`home-bedding-${item.id}`)}
                    data-rbt-position-vertical={item.top}
                    data-rbt-position-horigental={item.left}
                  >
                    <button
                      type="button"
                      className="rbt-lookbook-dot"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleHotspot(`home-bedding-${item.id}`);
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
                        className={`rbt-lookbook-dot-content ${item.contentPosition}`}
                      >
                        <div className="rbt-card rbt-product-card">
                          <div className="inner border-0">
                            <div className="rbt-card-img rbt-bg-color-white">
                              <Link href={`/product-single-default/${item.id}`}>
                                <Image
                                  alt="Card Image"
                                  src={item.imgSrc || ""}
                                  width={624}
                                  height={624}
                                />
                              </Link>
                              <div className="rbt-product-badge rbt-product-badge-bg-green border-rounded rbt-badge-top-left--position">
                                New
                              </div>

                              <AddToWishlistTwo
                                product={item}
                                parentClass="rbt-wishlist-btn rbt-round-btn bg-light-one rbt-top-right--position tooltips"
                              />
                            </div>
                            <div className="rbt-card-body">
                              <div className="rbt-color-select-area">
                                <Link
                                  className="prd-link-text"
                                  href={`/product-single-default/${item.id}`}
                                >
                                  +3 More Items
                                </Link>
                              </div>
                              <Link
                                href={`/shop-by-category`}
                                className="rbt-card-subtitle rbt-card-categories-text"
                              >
                                Table
                              </Link>
                              <h6 className="rbt-card-title text-start">
                                <Link
                                  href={`/product-single-default/${item.id}`}
                                >
                                  {item.title}
                                </Link>
                              </h6>
                              <ProductRating product={item} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
