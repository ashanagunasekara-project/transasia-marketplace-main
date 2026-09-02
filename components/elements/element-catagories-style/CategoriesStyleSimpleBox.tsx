import Link from "next/link";
import Image from "next/image";
import { simpleBoxCategories } from "@/data/categories";

function CategoriesStyleSimpleBox() {
  return (
    <>
      {/* Start Component Area */}
      <div
        id="rbt-category-block-04"
        className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Categories Style{" "}
                  <span className="rbt-bold--text">Simple Box</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            {simpleBoxCategories.map((category, index) => (
              <div
                key={category.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt--24"
              >
                <div
                  className={`rbt-cat-box rbt-cat-box-4 text-left rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="inner">
                    <div className="content">
                      <h6 className="title">
                        <Link href={`/shop-by-categories`}>
                          {category.title}
                        </Link>
                      </h6>
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
                    <div
                      className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${
                        index + 1
                      }`}
                    >
                      <a href="#">
                        <Image
                          alt="Category Product Images"
                          src={category.imgSrc}
                          width={category.imgWidth}
                          height={category.imgHeight}
                        />
                      </a>
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

export default CategoriesStyleSimpleBox;
