import { categories7 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Discover the
                <span className="rbt-bold--text ml--4">
                  World Of Electronics
                </span>
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
          {categories7.map((item, index) => (
            <div className="col-lg-1-5 col-md-4 col-6 mt--24" key={index}>
              <div
                className={`rbt-cat-box rbt-cat-box-5 variation-four rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <Link href={`/shop-by-categories`}>
                      {item.imgSrc && (
                        <Image
                          className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                          alt="Category Product Images"
                          src={item.imgSrc}
                          width={item.width}
                          height={item.height}
                        />
                      )}
                    </Link>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <Link
                          href={`/shop-by-categories`}
                          className="rbt-card-link-btn"
                        >
                          <i className="fa-solid fa-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content text-center">
                    <h6 className="title">
                      <Link href={`/shop-by-categories`}>{item.title}</Link>
                    </h6>
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
