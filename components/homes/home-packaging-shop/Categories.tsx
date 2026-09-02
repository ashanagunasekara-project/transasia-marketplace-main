import { categoryCards3 } from "@/data/categories";

import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center rbt-section-gap3Bottom flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                Popular By
                <span className="rbt-bold--text ml--4">Categories</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop-by-categories`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Categories Area*/}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {categoryCards3.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 mt--24"
              key={index}
            >
              <div className="rbt-cat-box rbt-cat-box-9 rbt-package-cat-box wider-column">
                <div className="inner">
                  <div className="content">
                    <div className="top-content">
                      {item.badge && typeof item.badge === "object" && (
                        <span
                          className={`rbt-badge rbt-badge-${typeof item.badge === "object" && item.badge !== null ? item.badge.color : ""} rbt-badge-small`}
                        >
                          {typeof item.badge === "object" && item.badge !== null
                            ? item.badge.label
                            : ""}
                        </span>
                      )}
                      <h5 className="title">
                        <span className="rbt-text-bold">
                          <Link href={`/shop-by-category`}>{item.title}</Link>
                        </span>
                      </h5>
                      <p className="b1 mb--0">{item.qty}</p>
                    </div>
                    <div className="bottom-content">
                      <Link
                        href={`/shop-by-category`}
                        className="rbt-btn rbt-btn-sm-2 rbt-btn-secondary"
                      >
                        Shop Now
                        <i className="fa-regular fa-arrow-up-right ml--4" />
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/shop-by-category`}
                    className="rbt-image-portion"
                  >
                    <Image
                      alt="Category Product Images"
                      src={item.imgSrc || ""}
                      width={440}
                      height={407}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Categories Area*/}
      </div>
    </div>
  );
}
