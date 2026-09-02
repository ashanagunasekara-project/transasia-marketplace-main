import { kidsToyCategories } from "@/data/categories";

import Link from "next/link";
import Image from "next/image";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                Top Rated Items
              </a>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Categories</span> Trending Now
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {kidsToyCategories.map((item, index) => (
            <div
              className="col-xl-2 col-lg-4 col-md-4 col-6 mt--24"
              key={index}
            >
              <div className="rbt-cat-box rbt-cat-box-5 variation-three rbt-scroll-trigger fade_in animation-order-2">
                <div className="inner">
                  <div className="rbt-image-portion">
                    <Link href={`/shop-by-category`}>
                      {item.imgSrc && (
                        <Image
                          alt="Category Product Images"
                          width={400}
                          height={556}
                          src={item.imgSrc}
                        />
                      )}
                    </Link>
                  </div>
                  <div className="content text-center">
                    <h6 className="title rbt-text-color-white mb--0">
                      <Link href={`/shop-by-category`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Card Area */}
        <div className="row">
          <div className="col-12 text-center">
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2 mt--40"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
