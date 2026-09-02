import { categories2 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular By{" "}
                <span className="rbt-bold--text">Sports Categories</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="ml--4 fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {categories2.map((category, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24"
              key={category.id}
            >
              {/* Start Single Card */}
              <div
                className={`rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div className="content">
                    <h5 className="title">
                      <Link href="/shop-by-category">{category.title}</Link>
                    </h5>
                    <div
                      className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                    >
                      <Link href="/shop-by-category">
                        {category.imgSrc && (
                          <Image
                            alt="Category Product Images"
                            src={category.imgSrc}
                            width={category.width}
                            height={category.height}
                          />
                        )}
                      </Link>
                    </div>
                    <ul className="quick-button-list">
                      {category.subCategories?.map((link, index) => (
                        <li key={index}>
                          <Link
                            className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                            href="/shop-by-category"
                          >
                            <span className="btn-text">{link.title}</span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Card */}
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
