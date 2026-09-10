"use client";
import Image from "next/image";
import Link from "next/link";
import { widerSixCategories } from "@/data/categories";

export default function CategoriesWider() {
  return (
    <div className="rbt-component-area rbt-categories-area pt--0 pt_sm--16 pt_md--16 rbt-bg-color-white">
      <div className="rbt-full-width-wrapper">
        <div className="row row--12 align-items-stretch">
          {widerSixCategories.map((category, index) => (
            <div
              key={`${category.title}-${index}`}
              className="col-lg-1 col-md-3 col-sm-4 col-6 mt--12"
            >
              <Link
                href="/shop-by-categories"
                className={`rbt-cat-box-square text-center rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  padding: "16px 8px 14px",
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
                    width: "68px",
                    height: "68px",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #eef0f3",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    src={category.imgSrc}
                    alt={category.title || "Category Product Images"}
                    width={56}
                    height={56}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      borderRadius: "6px",
                    }}
                  />
                </div>
                <div className="content mt--10">
                  <h6
                    className="title mb--0 text-center"
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#212529",
                      lineHeight: "1.3",
                    }}
                  >
                    {category.title}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .rbt-cat-box-square:hover {
          border-color: var(--color-primary) !important;
          background-color: #ffffff !important;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08) !important;
          transform: translateY(-3px);
        }
        .rbt-cat-box-square:hover .rbt-image-portion {
          border-color: var(--color-primary) !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
