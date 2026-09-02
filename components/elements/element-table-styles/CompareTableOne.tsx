"use client";
import { ScaleIcon } from '../../svg-icons';
import ProductRating from "@/components/common/ui/ProductRating";
import Link from "next/link";
import Image from "next/image";
import { apparelCompareProducts } from "@/data/products/others";
import AddToCart from "@/components/action-buttons/AddToCart";

function CompareTableOne() {
  const products = apparelCompareProducts;

  return (
    <>
      <div
        id="rbt-table-block-01"
        className="rbt-component-area rbt-countdown-area rbt-section-gap rbt-bg-color-gray-light"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Compare Table <span className="rbt-bold--text">One</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 rbt-scrollable-content">
              {/* Start Compare Table */}
              <table className="rbt-compare-table">
                <tbody>
                  {/* Search Fields Row */}
                  <tr>
                    <td />
                    {products.map((_, idx) => (
                      <td key={`search-${idx}`}>
                        <div className="rbt-input-field-grp">
                          <input
                            className="rbt-input-field"
                            type="text"
                            placeholder="Search and Select Product"
                          />
                          <button className="rbt-search-btn">
                            <i className="fa-sharp fa-solid fa-magnifying-glass" />
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Product Image & Info */}
                  <tr className="rbt-compare-prd-table-head">
                    <td className="rbt-compare-table-title">
                      <div className="rbt-compare-values">
                        <span>
                          <ScaleIcon />
                        </span>
                        <p className="rbt-compare-table-text">
                          Find and select products to see the differences and
                          similarities between them
                        </p>
                      </div>
                    </td>
                    {products.map((product, idx) => (
                      <td key={`product-${idx}`}>
                        <div className="rbt-compare-item-wrapper">
                          <a
                            href={`/product-single-default/${product.id}`}
                            className={`rbt-product-item-img rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-${
                              idx + 1
                            }`}
                          >
                            <Image
                              alt="Product"
                              src={product.imgSrc}
                              width={485}
                              height={380}
                            />
                          </a>
                          <div className="rbt-compare-values">
                            <Link
                              href={`/shop-by-categories`}
                              className="rbt-product-item-category"
                            >
                              {product.category}
                            </Link>
                            <h6 className="rbt-product-item-title">
                              <a href={`/product-single-default/${product.id}`}>
                                {product.title}
                              </a>
                            </h6>
                            <AddToCart product={product} />
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Customer Rating */}
                  <tr>
                    <td className="rbt-product-feature-name">
                      Customer Rating
                    </td>
                    {products.map((product, idx) => (
                      <td key={`rating-${idx}`}>
                        <div className="rbt-compare-values">
                          <ProductRating product={product} />
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Price */}
                  <tr>
                    <td className="rbt-product-feature-name">Price</td>
                    {products.map((product, idx) => (
                      <td key={`price-${idx}`}>
                        <div className="rbt-compare-values">
                          <span className="rbt-product-price">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Sold By */}
                  <tr>
                    <td className="rbt-product-feature-name">Sold By</td>
                    {products.map((product, idx) => (
                      <td key={`soldby-${idx}`}>
                        <div className="rbt-compare-values">
                          {product.soldBy ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Color */}
                  <tr>
                    <td className="rbt-product-feature-name">Color</td>
                    {products.map((product, idx) => (
                      <td key={`color-${idx}`}>
                        <div className="rbt-compare-values">
                          {product.color ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Fit Type */}
                  <tr>
                    <td className="rbt-product-feature-name">Fit Type</td>
                    {products.map((product, idx) => (
                      <td key={`fit-${idx}`}>
                        <div className="rbt-compare-values">
                          {product.fitType ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Item Dimensions */}
                  <tr>
                    <td className="rbt-product-feature-name">
                      Item Dimensions
                    </td>
                    {products.map((product, idx) => (
                      <td key={`dim-${idx}`}>
                        <div className="rbt-compare-values">
                          {product.dimensions ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Special Features */}
                  <tr>
                    <td className="rbt-product-feature-name">
                      Special Features
                    </td>
                    {products.map((product, idx) => (
                      <td key={`feature-${idx}`}>
                        <div className="rbt-compare-values">
                          {product.features ?? "—"}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              {/* End Compare Table */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareTableOne;
