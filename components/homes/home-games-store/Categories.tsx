import { categories8 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--80 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <div className="rbt-card-subtitle rbt-text-color-white rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Top Rated Games
              </div>
              <h2 className="rbt-title rbt-text-color-white rbt-text-regular rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Categories</span> Trending Now
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Categories Area*/}
        <div className="row row--12 mt_dec--60 rbt-mobile-row">
          {categories8.map((category) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 mt--60"
              key={category.id}
            >
              <div className="rbt-cat-box rbt-cat-box-9 rbt-cat-box-9-var-two">
                <div className="inner">
                  <div className="content">
                    <div className="top-content">
                      <h4 className="title">
                        <span className="rbt-text-bold">{category.title}</span>
                      </h4>
                    </div>
                  </div>
                  <Link
                    href={`/shop-by-categories`}
                    className="rbt-image-portion stretched-link"
                  >
                    {category.bgImg && (
                      <Image
                        className="rbt-cat-bg-img image-auto"
                        alt="Category Product Images"
                        width={category.bgWidth}
                        height={category.bgHeight}
                        src={category.bgImg}
                      />
                    )}
                    {category.imgSrc && (
                      <Image
                        alt="Category Product Images"
                        width={category.width}
                        height={category.height}
                        src={category.imgSrc}
                        className="image-auto"
                      />
                    )}
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
