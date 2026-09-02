import { categoryCards } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Popular By Categories</span>
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
          {categoryCards.map((category, index) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt--24"
              key={category.id}
            >
              <div
                className={`rbt-cat-box rbt-cat-box-4 text-left rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div className="content">
                    <h6 className="title">
                      <Link href={`/shop-by-category`}>{category.title}</Link>
                    </h6>
                    <ul className="quick-link-list rbt-link-hover">
                      {category.subCategories?.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={`/shop-by-category`}
                            className="quick-link"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
                    <Link href={`/shop-by-category`}>
                      <Image
                        alt="Category Product Images"
                        src={category.imgSrc}
                        width={142}
                        height={100}
                      />
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
