import { furnitureProducts2 } from "@/data/products/furnitures";
import Image from "next/image";
import Link from "next/link";
function MiniStandard() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Mini Standard</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 justify-content-center">
            {/* Start Single Box  */}
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="rbt-list-card-box rbt-border-color-primary">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {[...furnitureProducts2, ...furnitureProducts2].map(
                    (product, i) => (
                      <div key={i} className="col-lg-6 col-md-6 col-12 mt--24">
                        <div
                          className={`rbt-card rbt-product-card rbt-list-view-variation list-view-md rbt-scroll-trigger fade_in animation-order-${(i % 2) + 1}`}
                        >
                          <div className="inner">
                            <div className="rbt-card-body p-0">
                              <a
                                href="#"
                                className="rbt-card-subtitle rbt-card-categories-text"
                              >
                                {product.category}
                              </a>
                              <h6 className="rbt-card-title">
                                <Link
                                  href={`/product-single-default/${product.id}`}
                                >
                                  {product.title}
                                </Link>
                              </h6>
                              <div className="pricing-part">
                                <del className="price-text">
                                  ${product.oldPrice?.toFixed(2)}
                                </del>
                                <span className="price-text">
                                  ${product.price.toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <div
                              className={`rbt-card-img rbt-bg-color-default rbt-scroll-trigger zoom_in animation-order-${(i % 2) + 1}`}
                            >
                              <a href="#">
                                <Image
                                  className="rbt-prd-img"
                                  alt="Card Image"
                                  src={product.imgSrc}
                                  width={170}
                                  height={130}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* End Single Box  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default MiniStandard;
