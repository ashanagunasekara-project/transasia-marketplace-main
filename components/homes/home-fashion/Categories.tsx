import Image from "next/image";
import Link from "next/link";
import { fashionHomeCategories } from "@/data/categories";

const BASE_COL_CLASS = "col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6";
const WIDE_COL_CLASS = "col-lg-2-5 col-lg-8 col-md-8 col-sm-12 col-6";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Categories</span> Your May
                Interested
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {fashionHomeCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.isWider ? WIDE_COL_CLASS : BASE_COL_CLASS} mt--24`}
            >
              <div
                className={`rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-${category.id} ${category.isWider ? "wider-column" : "text-center"}`}
              >
                <div className="inner">
                  <div
                    className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${category.id}`}
                  >
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src={category.imgSrc}
                        width={category.width}
                        height={category.height}
                      />
                    </Link>
                  </div>
                  {category.isWider ? (
                    <div className="content">
                      <div className="top-content">
                        {category.badge && (
                          <span
                            className={`rbt-badge rbt-badge-${category.badge.color} rbt-badge-small`}
                          >
                            {category.badge.label}
                          </span>
                        )}
                        <p className="subtitle">{category.subtitle}</p>
                        <h5 className="title">{category.title}</h5>
                      </div>
                      <div className="bottom-content">
                        <Link
                          href={`/shop`}
                          className={`rbt-btn rbt-btn-white rbt-btn-md ${category.buttonMarquee ? "rbt-marquee-btn marquee-auto" : ""}`}
                        >
                          {category.buttonMarquee ? (
                            <span data-text={category.title}>
                              {category.title}
                            </span>
                          ) : (
                            category.title
                          )}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={`/shop`}
                      className="rbt-btn rbt-btn-white rbt-btn-md"
                    >
                      {category.title}
                    </Link>
                  )}
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
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
