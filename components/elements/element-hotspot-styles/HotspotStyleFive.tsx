"use client";

import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import { products1 } from "@/data/products/lookbook";
import { useLookbookMobileHotspot } from "@/hooks/useLookbookMobileHotspot";
import { formatCurrency } from "@/lib/price";

export default function Lookbook() {
  const { getHotspotClassName, toggleHotspot, closeHotspot } =
    useLookbookMobileHotspot();
  const banners = [
    ...new Map(products1.map((p) => [p.bannerId, p.bannerImg])).entries(),
  ];

  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Popular Offer
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Lookbook SS&apos;23</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Lookbook Grid */}
        <div className="row row--12 mt_dec--24">
          {banners.map(([bannerId, bannerImg], idx) => (
            <div
              className="col-md-4 col-sm-12 col-12 mt--24 sal-animate"
              key={bannerId}
            >
              <div className="rbt-lookbook-section lookbook-style--three">
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  {bannerImg ? (
                    <Image
                      className={`rbt-scroll-trigger zoom_in animation-order-${idx + 1
                        }`}
                      alt="Lookbook Image"
                      src={bannerImg}
                      width={848}
                      height={1060}
                    />
                  ) : null}
                  {products1
                    .filter((p) => p.bannerId === bannerId)
                    .map((p, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(
                          `hotspot-five-${bannerId}-${p.id}`,
                        )}
                        data-rbt-position-vertical={p.top}
                        data-rbt-position-horigental={p.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-five-${bannerId}-${p.id}`);
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
                            className={`rbt-lookbook-dot-content ${p.contentPosition} lookbook-content-width--420`}
                          >
                            <div className="rbt-card rbt-product-card card-list-styled">
                              <div className="inner border-0 d-flex p-0">
                                <div className="rbt-card-img rbt-bg-color-white">
                                  <Link
                                    href={`/product-single-default/${p.id}`}
                                  >
                                    <Image
                                      alt="Product"
                                      src={p.imgSrc}
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
                                      href={`/product-single-default/${p.id}`}
                                    >
                                      {p.title}
                                    </Link>
                                  </h6>
                                  <ProductRating product={p} />
                                  <div className="pricing-part">
                                    {p.oldPrice ? (
                                      <del className="price-text">
                                        {formatCurrency(p.oldPrice)}
                                      </del>
                                    ) : null}
                                    <span className="price-text">
                                      {formatCurrency(p.price)}
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
          ))}
        </div>
      </div>
    </div>
  );
}
