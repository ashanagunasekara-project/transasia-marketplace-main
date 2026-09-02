"use client";

import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import { lookbookProducts3 } from "@/data/products/lookbook";
import { useLookbookMobileHotspot } from "@/hooks/useLookbookMobileHotspot";
import { formatCurrency } from "@/lib/price";

export default function Lookbook() {
  const { getHotspotClassName, toggleHotspot, closeHotspot } =
    useLookbookMobileHotspot();

  const banner = lookbookProducts3[0].bannerImg;

  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center">
              <h2 className="rbt-title">
                Hotspot Style <span className="rbt-bold--text">Banner</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
            <div className="rbt-lookbook-section lookbook-list-banner-style lookbook-list-banner-style-one">
              <div className="lookbook-left-portion">
                <div className="rbt-lookbook-banner">
                  {banner ? (
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-1"
                      alt="Lookbook Image"
                      src={banner}
                      width={1792}
                      height={832}
                    />
                  ) : null}
                  {lookbookProducts3.map((item, index) => (
                    <div
                      key={index}
                      className={getHotspotClassName(`hotspot-four-${item.id}`)}
                      data-rbt-position-horigental={item.left}
                      data-rbt-position-vertical={item.top}
                    >
                      <button
                        type="button"
                        className="rbt-lookbook-dot"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleHotspot(`hotspot-four-${item.id}`);
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
                          className={`rbt-lookbook-dot-content ${item.contentPosition} lookbook-content-width--420`}
                        >
                          <div className="rbt-card rbt-product-card card-list-styled">
                            <div className="inner border-0 d-flex p-0">
                              <div className="rbt-card-img rbt-bg-color-white">
                                <Link
                                  href={`/product-single-default/${item.id}`}
                                >
                                  <Image
                                    alt="Card Image"
                                    src={item.imgSrc}
                                    width={352}
                                    height={296}
                                  />
                                </Link>
                              </div>
                              <div className="rbt-card-body">
                                <a
                                  href="#"
                                  className="rbt-card-subtitle rbt-card-categories-text"
                                >
                                  Table
                                </a>
                                <h6 className="rbt-card-title text-start">
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
                                    {item.title}
                                  </Link>
                                </h6>
                                <ProductRating product={item} />
                                <div className="pricing-part">
                                  {item.oldPrice ? (
                                    <del className="price-text">
                                      {formatCurrency(item.oldPrice)}
                                    </del>
                                  ) : null}
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
              <div className="lookbook-right-portion">
                <div className="content-part text-center">
                  <h2 className="title">
                    Get inspired or build your own art wall with tool
                  </h2>
                  <Link
                    className="rbt-btn rbt-btn-md bg-white"
                    href="/shop-by-category"
                  >
                    Shop This Look
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
