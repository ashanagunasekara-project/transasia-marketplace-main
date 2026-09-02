"use client";

import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import { lookbookProducts } from "@/data/products/lookbook";
import AddToWishlistTwo from "@/components/action-buttons/AddToWishlistTwo";
import { useLookbookMobileHotspot } from "@/hooks/useLookbookMobileHotspot";
import { formatCurrency } from "@/lib/price";

export default function Lookbook() {
  // Group by bannerImg to create distinct banners
  const banners = [...new Set(lookbookProducts.map((item) => item.bannerImg))];
  const { getHotspotClassName, toggleHotspot, closeHotspot } =
    useLookbookMobileHotspot();

  return (
    <div className="rbt-component-area rbt-Lookbook-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--24 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                Popular brands
              </a>
              <h2 className="rbt-title">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  Shopping by brands
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        {/* Start Look Book Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(0, 2).map((banner, index) => (
              <div
                key={index}
                className={`rbt-lookbook-section lookbook-style--three ${
                  index == 1 ? "mt--24" : ""
                }`}
              >
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                    alt="Lookbook Banner"
                    src={banner || ""}
                    width={692}
                    height={740}
                  />
                  {lookbookProducts
                    .filter((item) => item.bannerImg === banner)
                    .map((item, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(`hotspot-three-1-${item.id}`)}
                        data-rbt-position-vertical={item.top}
                        data-rbt-position-horigental={item.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-three-1-${item.id}`);
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
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
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
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(2, 3).map((banner, index) => (
              <div
                key={index}
                className="rbt-lookbook-section lookbook-style--three"
              >
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                    alt="Lookbook Banner"
                    src={banner || ""}
                    width={692}
                    height={740}
                  />
                  {lookbookProducts
                    .filter((item) => item.bannerImg === banner)
                    .map((item, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(`hotspot-three-2-${item.id}`)}
                        data-rbt-position-vertical={item.top}
                        data-rbt-position-horigental={item.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-three-2-${item.id}`);
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
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
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
            ))}
            <div className="rbt-lookbook-box-content box-content-bg-green mt--24 rbt-scroll-trigger fade_in animation-order-3">
              <h3 className="title">Steel Package</h3>
              <p className="desc b2">
                Make yours celebrations even more special this years with
                beautiful items .
              </p>
              <Link
                className="rbt-btn rbt-btn-border rbt-square-btn rbt-btn-md"
                href={`/shop-by-brands`}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(2, 4).map((banner, index) => (
              <div
                key={index}
                className={`rbt-lookbook-section lookbook-style--three ${
                  index == 1 ? "mt--24" : ""
                }`}
              >
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                    alt="Lookbook Banner"
                    src={banner || ""}
                    width={692}
                    height={740}
                  />
                  {lookbookProducts
                    .filter((item) => item.bannerImg === banner)
                    .map((item, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(`hotspot-three-3-${item.id}`)}
                        data-rbt-position-vertical={item.top}
                        data-rbt-position-horigental={item.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-three-3-${item.id}`);
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
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
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
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-8 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-lookbook-box-content box-content-bg-yellow rbt-scroll-trigger fade_in animation-order-4">
              <h3 className="title">Festival Shop</h3>
              <p className="desc b2">
                Enhance your festive moments season with gorgeous products from
                our store
              </p>
              <Link
                className="rbt-btn rbt-btn-border rbt-square-btn rbt-btn-md"
                href={`/shop-by-brands`}
              >
                Shop Now
              </Link>
            </div>
            {banners.slice(4, 5).map((banner, index) => (
              <div
                key={index}
                className="rbt-lookbook-section lookbook-style--three mt--24"
              >
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                    alt="Lookbook Banner"
                    src={banner || ""}
                    width={692}
                    height={740}
                  />
                  {lookbookProducts
                    .filter((item) => item.bannerImg === banner)
                    .map((item, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(`hotspot-three-4-${item.id}`)}
                        data-rbt-position-vertical={item.top}
                        data-rbt-position-horigental={item.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-three-4-${item.id}`);
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
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
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
            ))}
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-6 col-sm-12 col-12 mt--24">
            {banners.slice(5, 7).map((banner, index) => (
              <div
                key={index}
                className={`rbt-lookbook-section lookbook-style--three ${
                  index == 1 ? "mt--24" : ""
                }`}
              >
                <div className="rbt-lookbook-banner hover-appear-dot-style rbt-lookbook-banner-five">
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${
                      index + 1
                    }`}
                    alt="Lookbook Banner"
                    src={banner || ""}
                    width={692}
                    height={740}
                  />
                  {lookbookProducts
                    .filter((item) => item.bannerImg === banner)
                    .map((item, i) => (
                      <div
                        key={i}
                        className={getHotspotClassName(`hotspot-three-5-${item.id}`)}
                        data-rbt-position-vertical={item.top}
                        data-rbt-position-horigental={item.left}
                      >
                        <button
                          type="button"
                          className="rbt-lookbook-dot"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHotspot(`hotspot-three-5-${item.id}`);
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
                                  <Link
                                    href={`/product-single-default/${item.id}`}
                                  >
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
            ))}
          </div>
        </div>
        {/* End Look Book Area */}
      </div>
    </div>
  );
}
