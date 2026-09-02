import { WaveShortIcon } from "../../svg-icons";
import ProductCard11 from "@/components/product-cards/ProductCard11";
import {
  furnitureNewArivalProducts,
  furnitureProducts2,
} from "@/data/products/furnitures";
import Image from "next/image";
import Link from "next/link";

export default function Products2() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-white">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 h4">
                  <span className="rbt-bold--text">New Arrivals</span>
                </h2>
                <span className="rbt-fshape-right-portion">
                  <WaveShortIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-bg-color-gray-light">
            <div className="row row--12 mt_dec--24 align-items-end">
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                <ProductCard11
                  detailsPageUrl="/product-single-furniture"
                  bgClass="border-0 bg-white"
                  product={furnitureNewArivalProducts[0]}
                />
              </div>
              {/* Start Single Box  */}
              <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
                <div className="rbt-list-card-box">
                  {furnitureProducts2.map((product, index) => (
                    <div
                      key={product.id}
                      className={`rbt-card rbt-product-card rbt-list-view-variation list-view-md rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                    >
                      <div className="inner">
                        <div className="rbt-card-body p-0">
                          <Link
                            href="/shop-by-category"
                            className="rbt-card-subtitle rbt-card-categories-text"
                          >
                            {product.category}
                          </Link>
                          <h6 className="rbt-card-title">
                            <Link
                              href={`/product-single-furniture/${product.id}`}
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
                          className={`rbt-card-img rbt-bg-color-default rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                        >
                          <Link href={`/product-single-furniture/${product.id}`}>
                            <Image
                              className="rbt-prd-img"
                              alt="Card Image"
                              src={product.imgSrc}
                              width={170}
                              height={130}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
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
