import Link from "next/link";
import Image from "next/image";
import { circleCategories } from "@/data/categories";

function CategoriesStyleCircle() {
  return (
    <>
      <div className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Categories Style{" "}
                  <span className="rbt-bold--text">Circle</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--8 mt_dec--16 align-items-end">
            {circleCategories.map((category, index) => (
              <div
                key={category.id}
                className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16"
              >
                <Link
                  className={`rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                  href={`/shop-by-categories`}
                >
                  <div className="inner">
                    <div
                      className={`rbt-image-portion rbt-scroll-trigger zoom_in animation-order-${
                        index + 1
                      }`}
                    >
                      <Image
                        alt="Category Product Images"
                        src={category.imgSrc}
                        width={category.imgWidth}
                        height={category.imgHeight}
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">{category.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default CategoriesStyleCircle;
