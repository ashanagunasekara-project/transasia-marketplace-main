import { organicFoodCategories } from "@/data/categories";

import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--0 rbt-section-gap3Bottom flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Discover the
                <span className="rbt-bold--text ml--4">Popular Categories</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {organicFoodCategories.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12 mt--24" key={index}>
              <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-three rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="content text-start">
                    <h4 className="title w-100 mb--4">
                      <Link href={`/shop-by-categories`}>{item.title}</Link>
                    </h4>
                    <p className="qty-text b1 mb--0">{item.qty}</p>
                  </div>
                  <div className="rbt-image-portion">
                    <Link
                      href={`/shop-by-categories`}
                      className="has-rbt-section-overlay rbt-section-overlay-black-reverse"
                    >
                      {item.imgSrc && (
                        <Image
                          alt="Category Product Images"
                          src={item.imgSrc}
                          width={624}
                          height={750}
                        />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
