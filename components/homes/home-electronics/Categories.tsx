"use client";

import { useEffect, useState } from "react";
import { ExternalLinkAltIcon } from "../../svg-icons";
import Link from "next/link";
import { Category } from "@/types/categories";
import { classicBentoCategories } from "@/data/categories";
import {
  fetchStorefrontPopularCategories,
  resolveImageUrl,
  type StorefrontPopularCategory,
  type StorefrontDealBanner,
} from "@/lib/api";

const defaultDealBanner: StorefrontDealBanner = {
  subtitle: "Weekend Deal",
  title: "DJI Ronin Action",
  secondaryTitle: "Super holiday",
  imgSrc: "/assets/images/catagory-img/banner-cat-01.webp",
  link: "/shop",
};

interface PopularDataState {
  sectionTitle: string;
  viewAllLink: string;
  categories: StorefrontPopularCategory[];
  dealBanner: StorefrontDealBanner;
}

export default function Categories({
  categories = [],
  initialPopularData,
}: {
  categories?: Category[];
  initialPopularData?: PopularDataState | null;
}) {
  const [popularData, setPopularData] = useState<PopularDataState | null>(
    initialPopularData && initialPopularData.categories?.length > 0
      ? initialPopularData
      : null
  );

  useEffect(() => {
    let isMounted = true;
    async function loadPopularCategories() {
      try {
        const data = await fetchStorefrontPopularCategories();
        if (isMounted && data && data.categories?.length > 0) {
          setPopularData(data);
        }
      } catch (err) {
        console.warn("Using fallback popular categories:", err);
      }
    }
    if (!initialPopularData || !initialPopularData.categories?.length) {
      loadPopularCategories();
    }
    return () => {
      isMounted = false;
    };
  }, [initialPopularData]);

  const sectionTitle =
    popularData?.sectionTitle || "Popular By Categories";
  const viewAllLink = popularData?.viewAllLink || "/categories";
  const dealBanner = popularData?.dealBanner || defaultDealBanner;

  const displayCategories: Array<{
    id: string;
    title: string;
    imgSrc: string;
    link?: string;
    subCategories?: Array<{ title: string; href?: string }>;
  }> = popularData?.categories && popularData.categories.length > 0
    ? popularData.categories.slice(0, 6)
    : categories && categories.length > 0
      ? categories.slice(0, 6).map((c, i) => ({
          id: c.id ? String(c.id) : String(i + 1),
          title: c.title || c.name || "",
          imgSrc: c.imgSrc || c.image || "/assets/images/catagory-img/cat-transp-img-07.webp",
          link: "/shop-by-category",
          subCategories: c.subCategories || [],
        }))
      : classicBentoCategories.slice(0, 6).map((c, i) => ({
          id: String(c.id || i + 1),
          title: c.title,
          imgSrc: c.imgSrc,
          link: "/shop-by-category",
          subCategories: c.subCategories || [],
        }));

  const dealBannerImg = resolveImageUrl(
    dealBanner.imgSrc,
    "/assets/images/catagory-img/banner-cat-01.webp"
  );

  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pr--0">
            <div className="rbt-component-section-title d-flex justify-content-between flex-row align-items-center p-0 mb--32 mb_sm--16 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">{sectionTitle}</span>
              </h4>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2 animated-icon-btn default-secondary-bg"
                href={viewAllLink}
              >
                <span className="btn-text">View All Categories</span>
                <span className="animated-icon ml--4">
                  <ExternalLinkAltIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="rbt-categories-section rbt-curved-style-box rbt-categories-section-bg-one">
          <div className="row row--12 mt_dec--24">
            <div className="col-xl-8 col-lg-12 col-12 mt--24">
              <div className="row row--12 mt_dec--24 rbt-mobile-row">
                {displayCategories.map((category, index: number) => {
                  const resolvedImg = resolveImageUrl(
                    category.imgSrc,
                    "/assets/images/catagory-img/cat-transp-img-07.webp"
                  );
                  return (
                    <div
                      key={category.id || index}
                      className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
                    >
                      <div
                        className={`rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-${
                          index + 1
                        }`}
                      >
                        <div className="inner">
                          <div className="content">
                            <h5 className="title">
                              <Link href={category.link || `/shop-by-category`}>
                                {category.title}
                              </Link>
                            </h5>
                            <ul className="quick-link-list rbt-link-hover">
                              {category.subCategories?.map(
                                (
                                  link: { title: string; href?: string },
                                  linkIndex: number
                                ) => (
                                  <li key={linkIndex}>
                                    <Link
                                      href={link.href || `/shop-by-category`}
                                      className="quick-link"
                                    >
                                      {link.title}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="rbt-image-portion">
                            <Link href={category.link || `/shop-by-category`}>
                              <img
                                alt={category.title || "Category Product Image"}
                                src={resolvedImg}
                                width={93}
                                height={93}
                                style={{
                                  width: "93px",
                                  height: "93px",
                                  objectFit: "contain",
                                }}
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "/assets/images/catagory-img/cat-transp-img-07.webp";
                                }}
                              />
                            </Link>
                            <Link
                              href={category.link || `/categories`}
                              className="rbt-icon-overlay-link-btn"
                            >
                              <span className="rbt-btn-overlay">
                                <i className="rbt-icon fa-solid fa-arrow-up-right" />
                                <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-12 mt--24">
              <div className="rbt-cat-box banner-card text-center rbt-curved-style-box rbt-categories-img-bg rbt-scroll-trigger fade_in animation-order-5">
                <div className="inner">
                  <div className="content">
                    <p className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                      {dealBanner.subtitle}
                    </p>
                    <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                      <Link href={dealBanner.link || "/shop"}>
                        <span className="rbt-bold--text">
                          {dealBanner.title?.split(" ")[0]}
                        </span>{" "}
                        {dealBanner.title?.split(" ").slice(1).join(" ")}
                      </Link>
                    </h4>
                    <h3 className="secondary-title rbt-scroll-trigger fade_in animation-order-3">
                      {dealBanner.secondaryTitle}
                    </h3>
                  </div>
                  <div
                    className="rbt-image-portion d-flex justify-content-center align-items-center"
                    style={{ minHeight: "180px" }}
                  >
                    <Link href={dealBanner.link || "/shop"} className="d-block w-100">
                      <img
                        alt={dealBanner.title || "Category Image"}
                        src={dealBannerImg}
                        className="img-fluid mx-auto d-block"
                        style={{
                          maxHeight: "190px",
                          width: "auto",
                          objectFit: "contain",
                        }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/assets/images/catagory-img/banner-cat-01.webp";
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
