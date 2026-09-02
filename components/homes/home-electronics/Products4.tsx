import { WaveShortIcon } from "../../svg-icons";
import ProductCard11 from "@/components/product-cards/ProductCard11";
import {
  electronicsListViewData,
  electronicsProducts2,
} from "@/data/products/electronics";
import Link from "next/link";
import Image from "next/image";

const RenderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <li key={i}>
          <i className="fa-solid fa-star rbt-rated-icon" />
        </li>,
      );
    } else {
      stars.push(
        <li key={i}>
          <i className="fa-solid fa-star" />
        </li>,
      );
    }
  }
  return stars;
};
export default function Products4() {
  return (
    <div
      id="rbt-product-block-04"
      className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-white"
    >
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title">
                <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Featured Products</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveShortIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-bg-color-gray-light">
            <div className="row row--12 mt_dec--24">
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                {
                  <ProductCard11
                    detailsPageUrl="/product-single-electronics"
                    product={electronicsListViewData[0]}
                  />
                }
              </div>
              {/* Start Single Box  */}
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                <div className="rbt-list-card-box variation-lg">
                  <div className="row row--12 mt_dec--24 mt_dec--24 rbt-card-row-has-top-separator rbt-one-align-card-row">
                    {electronicsProducts2.map((product, i) => (
                      <div
                        key={i}
                        className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24"
                      >
                        <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                          <div
                            className={`inner rbt-scroll-trigger fade_in animation-order-${i + 1}`}
                          >
                            <div className="rbt-card-body">
                              <div className="rbt-card-rating">
                                <ul className="rbt-rating-icon-list">
                                  {product.rating
                                    ? RenderStars(product.rating)
                                    : null}
                                </ul>
                                <p className="rating-digit">
                                  ({product.ratingCount})
                                </p>
                              </div>
                              <h6 className="rbt-card-title">
                                <Link
                                  href={`/product-single-electronics/${product.id}`}
                                >
                                  {product.title}
                                </Link>
                              </h6>
                              <div className="pricing-part">
                                <del className="price-text">
                                  ${product.oldPrice?.toFixed(2) ?? 0}
                                </del>
                                <span className="price-text">
                                  ${product.price.toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <div className="rbt-card-img rbt-bg-color-default rbt-curved-style-box">
                              <Link
                                href={`/product-single-electronics/${product.id}`}
                              >
                                <Image
                                  alt="Card Image"
                                  src={product.imgSrc}
                                  width={278}
                                  height={212}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* End Single Box  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
