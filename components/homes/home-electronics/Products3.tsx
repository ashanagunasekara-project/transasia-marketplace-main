"use client";
import { WaveThinIcon } from "../../svg-icons";
import MagneticButton from "@/components/common/ui/MagneticButton";
import Link from "next/link";
import {
  resolveImageUrl,
  type StorefrontPromotionalBannerItem,
  type StorefrontHighlightProductItem,
} from "@/lib/api";

const defaultHighlightsBanner: StorefrontPromotionalBannerItem = {
  sectionTitle: "This Week’s Highlights",
  subtitle: "Power Up Deals",
  titleBold: "Red Camera",
  titleRegular: "Plus",
  secondarySubtitle: "Holiday Cheers",
  imgSrc: "/assets/images/product-banner/product-banner-img-02.webp",
  mobileImgSrc: "/assets/images/product-banner/product-banner-img-02.webp",
  btnText: "SHOP NOW",
  link: "/shop",
};

const defaultHighlightsProducts: StorefrontHighlightProductItem[] = [
  {
    id: "153",
    title: "Beats Studio Pro Wireless Earbuds – Black",
    oldPrice: 83.41,
    price: 66.98,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-01.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-01.webp",
    rating: 5,
    ratingCount: 39,
    link: "/product/153",
  },
  {
    id: "154",
    title: "Apple 12.9-inch iPad Pro Wi-Fi 512GB Gray Space",
    oldPrice: 54.66,
    price: 43.84,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-02.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-02.webp",
    rating: 3,
    ratingCount: 76,
    link: "/product/154",
  },
  {
    id: "155",
    title: "DJI OM 5 Handheld Smartphone Gimbal",
    oldPrice: 90.07,
    price: 72.15,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-03.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-03.webp",
    rating: 4,
    ratingCount: 113,
    link: "/product/155",
  },
  {
    id: "156",
    title: "Apple Watch Ultra 2 – Titanium Case",
    oldPrice: 72.47,
    price: 57.98,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-04.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-04.webp",
    rating: 3,
    ratingCount: 150,
    link: "/product/156",
  },
  {
    id: "157",
    title: "Apple MacBook Pro 16-inch – M2 Chip",
    oldPrice: 95.09,
    price: 75.98,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-05.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-05.webp",
    rating: 5,
    ratingCount: 187,
    link: "/product/157",
  },
  {
    id: "158",
    title: "Apple iPad Air 10.9-inch – Wi-Fi 256GB",
    oldPrice: 99.09,
    price: 79.07,
    imgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-06.webp",
    mobileImgSrc:
      "/assets/images/product-img/electronics/electronics-bg-trans-list-06.webp",
    rating: 5,
    ratingCount: 224,
    link: "/product/158",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i
          className={`fa-solid fa-star${i < rating ? " rbt-rated-icon" : ""}`}
        />
      </li>
    );
  }
  return stars;
};

export default function Products3({
  highlightsBanner,
  highlightsProducts,
}: {
  highlightsBanner?: StorefrontPromotionalBannerItem;
  highlightsProducts?: StorefrontHighlightProductItem[];
}) {
  const banner = highlightsBanner || defaultHighlightsBanner;
  const products =
    highlightsProducts && highlightsProducts.length > 0
      ? highlightsProducts.slice(0, 6)
      : defaultHighlightsProducts;

  const desktopImg = resolveImageUrl(banner.imgSrc);
  const mobileImg = resolveImageUrl(banner.mobileImgSrc || banner.imgSrc);

  return (
    <div
      id="rbt-product-block-03"
      className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-gray-light"
    >
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24">
            <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-bg-white rbt-fshape-box-outline-style-sm-size">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title">
                    <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                      <span className="rbt-bold--text">
                        {banner.sectionTitle || "This Week’s Highlights"}
                      </span>
                    </h4>
                    <span className="rbt-fshape-right-portion rbt-fshape-right-portion-sm">
                      <WaveThinIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {products.map((item, i) => (
                    <div
                      key={item.id ?? i}
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                    >
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                        <div
                          className={`inner rbt-scroll-trigger fade_in animation-order-${
                            i + 1
                          }`}
                        >
                          <div className="rbt-card-body">
                            <div className="rbt-card-rating">
                              <ul className="rbt-rating-icon-list">
                                {renderStars(item.rating ?? 5)}
                              </ul>
                              <p className="rating-digit">
                                ({item.ratingCount ?? 0})
                              </p>
                            </div>
                            <h6 className="rbt-card-title">
                              <Link href={item.link || `/product/${item.id}`}>
                                {item.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              {item.oldPrice && item.oldPrice > item.price ? (
                                <del className="price-text">
                                  ${Number(item.oldPrice).toFixed(2)}
                                </del>
                              ) : null}
                              <span className="price-text">
                                ${Number(item.price).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                            <Link href={item.link || `/product/${item.id}`}>
                              <picture>
                                {item.mobileImgSrc && (
                                  <source
                                    media="(max-width: 767px)"
                                    srcSet={resolveImageUrl(item.mobileImgSrc)}
                                  />
                                )}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  alt={item.title}
                                  src={resolveImageUrl(item.imgSrc)}
                                  width={278}
                                  height={212}
                                  style={{
                                    objectFit: "contain",
                                    maxWidth: "100%",
                                    height: "auto",
                                  }}
                                />
                              </picture>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24 pt--44 pt_sm--0 pt_lg--0 pt_md--0">
            {/* Start Product Banner Area */}
            <div className="rbt-product-banner rbt-product-banner-style-two rbt-curved-style-box h-100">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <picture>
                    {banner.mobileImgSrc && (
                      <source
                        media="(max-width: 767px)"
                        srcSet={mobileImg}
                      />
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={banner.titleRegular || "Ecommerce Product Banner Image"}
                      src={desktopImg}
                      width={1296}
                      height={890}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </picture>
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                    <h6 className="rbt-banner-subtitle mb-0">
                      {banner.subtitle}
                    </h6>
                    <h2 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">
                        {banner.titleBold}{" "}
                      </span>
                      {banner.titleRegular}
                    </h2>
                    <h3 className="rbt-secondary-subtitle mb-0">
                      {banner.secondarySubtitle}
                    </h3>
                  </div>
                  <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                    <MagneticButton
                      as={Link}
                      className="rbt-btn rbt-btn-round"
                      href={banner.link || `/shop`}
                    >
                      <i className="fa-solid fa-arrow-up-right" />{" "}
                      {banner.btnText || "SHOP NOW"}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
