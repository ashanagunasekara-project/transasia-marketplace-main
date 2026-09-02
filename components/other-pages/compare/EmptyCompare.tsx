'use client'
import { ScaleEmptyIcon } from '../../svg-icons';
import Image from "next/image";
import Link from "next/link";
import { accessoriesProducts } from "@/data/products/accessories";
import { formatCurrency } from "@/lib/price";

const compareSuggestions = accessoriesProducts.slice(0, 2);

export default function EmptyCompare() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom rbt-compare-product-empty-area">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center">
              <span className="icon">
                <i className="fa-regular fa-scale-balanced" />
              </span>
              <h2 className="rbt-title mb--8">
                <span className="rbt-text-bold">Compare Product</span>
              </h2>
              <p className="description mx-auto">
                You have not chosen any products to compare.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <div className="rbt-compare-product-empty-box">
              <div className="product-empty-box-inner">
                <div className="rbt-compare-title">
                  <span>
                    <ScaleEmptyIcon />
                  </span>
                  <p className="rbt-compare-table-text rbt-text-color-gray-500">
                    Find and select products to see the differences and
                    similarities between them
                  </p>
                </div>
                <div className="rbt-compare-product-search-area">
                  <div className="compare-product-search-field-wrap">
                    <form onSubmit={(e) => e.preventDefault()} className="rbt-search-form">
                      <div className="rbt-inner-search-field border-0">
                        <div className="rbt-search-input-section">
                          <input
                            type="text"
                            className="rbt-product-search-select-field"
                            placeholder="Search and Select Product"
                          />
                          <button
                            className="search-btn search-btn-dark"
                            type="submit"
                          >
                            <i className="fa-sharp fa-solid fa-magnifying-glass" />
                          </button>
                        </div>
                        <ul className="rbt-product-search-dropdown">
                          {compareSuggestions.map((product) => (
                          <li key={product.id}>
                            <div className="rbt-product">
                              <Image
                                alt="Product Image"
                                src={product.imgSrc}
                                width={93}
                                height={93}
                              />
                            </div>
                            <div className="rbt-product-info">
                              <h6 className="rbt-title">{product.title}</h6>
                              <span className="pricing-part">
                                {product.oldPrice ? (
                                  <del className="price-text">
                                    {formatCurrency(product.oldPrice)}
                                  </del>
                                ) : null}
                                <span className="price-text">
                                  {formatCurrency(product.price)}
                                </span>
                              </span>
                            </div>
                          </li>
                          ))}
                        </ul>
                      </div>
                    </form>
                    <form onSubmit={(e) => e.preventDefault()} className="rbt-search-form">
                      <div className="rbt-inner-search-field border-0">
                        <div className="rbt-search-input-section">
                          <input
                            type="text"
                            placeholder="Search and Select Product"
                          />
                          <button
                            className="search-btn search-btn-dark"
                            type="submit"
                          >
                            <i className="fa-sharp fa-solid fa-magnifying-glass" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <Link className="rbt-btn rbt-btn-md radius" href="/compare-product">
                    <i className="fa-regular fa-scale-balanced" /> View Comparison
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
