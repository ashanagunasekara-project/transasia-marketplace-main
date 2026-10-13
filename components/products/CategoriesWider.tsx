"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "@/types/categories";

export default function CategoriesWider({
  categories = [],
}: {
  categories?: Category[];
}) {
  const displayCategories = (
    categories && categories.length > 0 ? categories : []
  ).slice(0, 12);

  if (displayCategories.length === 0) {
    return null;
  }

  return (
    <div className="rbt-component-area rbt-categories-area pt--0 pt_sm--16 pt_md--16 rbt-bg-color-white">
      <div className="rbt-full-width-wrapper position-relative px--16 px_sm--8">
        <div className="categories-slider-wrapper position-relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            className="rbt-swiper-arrow rbt-arrow-left shop-cat-arrow-prev"
            aria-label="Previous Category"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            className="rbt-swiper-arrow rbt-arrow-right shop-cat-arrow-next"
            aria-label="Next Category"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".shop-cat-arrow-prev",
              nextEl: ".shop-cat-arrow-next",
            }}
            grabCursor={true}
            spaceBetween={12}
            slidesPerView={2.5}
            breakpoints={{
              480: { slidesPerView: 3.5, spaceBetween: 12 },
              640: { slidesPerView: 4.5, spaceBetween: 12 },
              768: { slidesPerView: 6, spaceBetween: 12 },
              992: { slidesPerView: 8, spaceBetween: 12 },
              1200: { slidesPerView: 10, spaceBetween: 12 },
              1440: { slidesPerView: 12, spaceBetween: 12 },
            }}
            className="shop-categories-swiper py--8"
          >
            {displayCategories.map((category, index) => (
              <SwiperSlide key={`${category.title}-${index}`} className="h-auto">
                <Link
                  href={`/shop?category=${encodeURIComponent(
                    category.slug ||
                      category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  )}`}
                  className="rbt-cat-box-square text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    minHeight: "128px",
                    padding: "14px 8px 12px",
                    backgroundColor: "#f8f9fb",
                    border: "1px solid #e9ecef",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="rbt-image-portion"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #eef0f3",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "6px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={category.imgSrc}
                      alt={category.title || "Category Product Images"}
                      width={52}
                      height={52}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <div className="content mt--8 w-100">
                    <h6
                      className="title mb--0 text-center"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#212529",
                        lineHeight: "1.25",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        minHeight: "30px",
                      }}
                    >
                      {category.title}
                    </h6>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .categories-slider-wrapper {
          position: relative;
          padding: 0 36px;
        }
        @media (max-width: 576px) {
          .categories-slider-wrapper {
            padding: 0 28px;
          }
        }
        .rbt-swiper-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #334155;
          transition: all 0.2s ease;
          padding: 0;
        }
        .shop-cat-arrow-prev {
          left: 0;
        }
        .shop-cat-arrow-next {
          right: 0;
        }
        .rbt-swiper-arrow:hover:not(:disabled) {
          background: var(--color-primary, #0d6efd);
          color: #ffffff;
          border-color: var(--color-primary, #0d6efd);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        :global(.swiper-button-disabled) {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
        .rbt-cat-box-square:hover {
          border-color: var(--color-primary, #0d6efd) !important;
          background-color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-3px);
        }
        .rbt-cat-box-square:hover .rbt-image-portion {
          border-color: var(--color-primary, #0d6efd) !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

