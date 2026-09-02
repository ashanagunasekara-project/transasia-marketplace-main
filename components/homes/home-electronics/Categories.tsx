import { ExternalLinkAltIcon } from "../../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { classicBentoCategories } from "@/data/categories";

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pr--0">
            <div className="rbt-component-section-title d-flex justify-content-between flex-row align-items-center p-0 mb--32 mb_sm--16 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Popular By Categories</span>
              </h4>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2 animated-icon-btn default-secondary-bg"
                href={`/categories-list`}
              >
                <span className="btn-text">View All Categories</span>
                <span className="animated-icon ml--4">
                  <ExternalLinkAltIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="rbt-categories-section rbt-curved-style-box rbt-categories-section-bg-one">
          <div className="row row--12 mt_dec--24">
            <div className="col-xl-8 col-lg-12 col-12 mt--24">
              <div className="row row--12 mt_dec--24 rbt-mobile-row">
                {classicBentoCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
                  >
                    <div
                      className={`rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-category`}>
                              {category.title}
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            {category.subCategories?.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  href={link.href || `/shop-by-category`}
                                  className="quick-link"
                                >
                                  {link.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-category`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src={category.imgSrc}
                              width={93}
                              height={93}
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-12 mt--24">
              <div className="rbt-cat-box banner-card text-center rbt-curved-style-box rbt-categories-img-bg rbt-scroll-trigger fade_in animation-order-5">
                <div className="inner">
                  <div className="content">
                    <p className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                      Weekend Deal
                    </p>
                    <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                      <a href="#">
                        <span className="rbt-bold--text">DJI Ronin</span> Action
                      </a>
                    </h4>
                    <h3 className="secondary-title rbt-scroll-trigger fade_in animation-order-3">
                      Super holiday
                    </h3>
                  </div>
                  <div className="rbt-image-portion">
                    <a href="#">
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-4"
                        alt="Category Image"
                        src="/assets/images/catagory-img/banner-cat-01.webp"
                        width={338}
                        height={201}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
