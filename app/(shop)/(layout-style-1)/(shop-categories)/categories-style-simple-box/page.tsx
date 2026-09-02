import Link from "next/link";
import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";
import { categoryCards } from "@/data/categories";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Simple Box || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Simple Box" />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            {/* Start Single Card  */}
            {categoryCards.map((category, i) => (
              <div
                key={i}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt--24"
              >
                <div className="rbt-cat-box rbt-cat-box-4 text-left rbt-scroll-trigger fade_in animation-order-1">
                  <div className="inner">
                    <div className="content">
                      <h6 className="title">
                        <Link href={`/shop-by-categories`}>
                          {category.title}
                        </Link>
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
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                      <Link href={`/shop-by-categories`}>
                        {category.imgSrc && (
                          <Image
                            alt="Category Product Images"
                            src={category.imgSrc}
                            width="142"
                            height="100"
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
    </>
  );
}
