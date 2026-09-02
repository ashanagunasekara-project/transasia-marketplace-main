import Image from "next/image";
import Link from "next/link";
import { buttonBoxedCategories } from "@/data/categories";

function CategoriesStyleButtonBoxed() {
  return (
    <>
      {/* Start Component Area */}
      <div
        id="rbt-category-block-08"
        className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Categories Style
                  <span className="rbt-bold--text ml--4">Button Boxed</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            {buttonBoxedCategories.map((category, index) => (
              <div
                key={category.id}
                className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24"
              >
                <div
                  className={`rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="inner">
                    <div className="content">
                      <h5 className="title">
                        <Link href="/shop-by-category">{category.title}</Link>
                      </h5>
                      <div
                        className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${
                          index + 1
                        }`}
                      >
                        <Link href="/shop-by-category">
                          <Image
                            alt="Category Product Images"
                            src={category.imgSrc}
                            width={category.imgWidth}
                            height={category.imgHeight}
                          />
                        </Link>
                      </div>
                      <ul className="quick-button-list">
                        {category.subCategories?.map((button, btnIndex) => (
                          <li key={btnIndex}>
                            <Link
                              className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                              href={button.href || `/shop-by-category`}
                            >
                              <span className="btn-text">{button.title}</span>
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
              </div>
            ))}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default CategoriesStyleButtonBoxed;
