import Image from "next/image";
import ProductRating from "@/components/common/ui/ProductRating";
import { allProducts } from "@/data/products";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";

import { Product } from "@/types";
export default function BreadCrumb({
  product,
  isFullWidth = false,
}: {
  product: Product;
  isFullWidth?: boolean;
}) {
  const id = product.id;

  // Find previous product
  const prevProduct =
    allProducts.find((p) => p.id === Number(id) - 1) ||
    allProducts[allProducts.length - 1];

  // Find next product
  const nextProduct =
    allProducts.find((p) => p.id === Number(id) + 1) || allProducts[0];

  return (
    <div className="rbt-breadcrumb-two rbt-bg-color-white">
      <div className={isFullWidth ? "rbt-full-width-wrapper" : "container"}>
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-breadcrumb-inner d-flex align-items-center justify-content-between flex-nowrap">
              <ul className="rbt-breadcrumb-page-list justify-content-start mt--0 flex-nowrap">
                <li className="rbt-breadcrumb-item">
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item d-none d-md-block">
                  <Link href="/shop">Products</Link>
                </li>
                <li className="d-none d-md-block">
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                {product.category?.length &&
                  product.category.length > 0 &&
                  product.category?.slice(0, 1).map((item, index) => (
                    <li key={index} className="d-none d-md-block">
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-breadcrumb-item"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                {product.category?.length && product.category.length > 0 && (
                  <li className="d-none d-md-block">
                    <div className="icon-right">
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </li>
                )}
                <li className="rbt-breadcrumb-item active text-nowrap text-truncate flex-grow-1">{product.title}</li>
              </ul>
              <div className="rbt-single-nav">
                <div className="rbt-products-nav">
                  <div className="rbt-event-hover">
                    <Link
                      className="rbt-product-nav-btn rbt-round-btn rbt-btn-prev"
                      href={`/product-single-default/${prevProduct.id}`}
                      aria-label="Previous product"
                    >
                      <i className="fa-regular fa-chevron-left" />
                    </Link>
                    <div className="rbt-dropdown rbt-dropdown-from-right">
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-bg-color-gray-light">
                        <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-card-body">
                            <ProductRating product={prevProduct} />
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${prevProduct.id}`}
                              >
                                {prevProduct.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              {prevProduct.oldPrice && (
                                <del className="price-text">
                                  ${prevProduct.oldPrice?.toFixed(2)}
                                </del>
                              )}
                              <span className="price-text">
                                ${prevProduct.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default">
                            <Link href={`/product-single-default/${prevProduct.id}`}>
                              <Image
                                alt="Card Image"
                                src={prevProduct.imgSrc}
                                width={1072}
                                height={824}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Tooltip content="Back To Products" placement="top">
                    <Link
                      href={`/shop`}
                      className="rbt-product-nav-btn rbt-round-btn tooltips"
                    >
                      <i className="fa-regular fa-grid-2" />
                    </Link>
                  </Tooltip>
                  <div className="rbt-event-hover">
                    <Link
                      className="rbt-product-nav-btn rbt-round-btn rbt-btn-next"
                      href={`/product-single-default/${nextProduct.id}`}
                      aria-label="Next product"
                    >
                      <i className="fa-regular fa-chevron-right" />
                    </Link>
                    <div className="rbt-dropdown rbt-dropdown-from-right">
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-bg-color-gray-light">
                        <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-card-body">
                            <ProductRating product={nextProduct} />
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${nextProduct.id}`}
                              >
                                {nextProduct.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              {nextProduct.oldPrice && (
                                <del className="price-text">
                                  ${nextProduct.oldPrice?.toFixed(2)}
                                </del>
                              )}
                              <span className="price-text">
                                 ${nextProduct.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default">
                            <Link href={`/product-single-default/${nextProduct.id}`}>
                              <Image
                                alt="Card Image"
                                src={nextProduct.imgSrc}
                                width={1072}
                                height={824}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
