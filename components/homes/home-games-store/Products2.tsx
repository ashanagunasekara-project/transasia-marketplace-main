import { WaveSideIcon } from '../../svg-icons';
import ProductRating from "@/components/common/ui/ProductRating";
import { gameProductCards } from "@/data/products/electronics";
import Link from "next/link";
import Image from "next/image";

export default function Products2() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gapTop">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24">
            <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-bg-dark rbt-fshape-box-outline-style-sm-size">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title rbt-bg-color-extra-ten">
                    <h4 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                      <span className="rbt-bold--text">
                        This Week’s Highlights
                      </span>
                    </h4>
                    <span className="rbt-fshape-right-portion rbt-fshape-right-portion-sm">
                      <WaveSideIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {gameProductCards.map((product, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                    >
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm">
                        <div
                          className={`inner rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                        >
                          <div className="rbt-card-body">
                            <ProductRating product={product} />
                            <h6 className="rbt-card-title rbt-text-color-white">
                              <Link
                                href={`/product-single-electronics/${product.id}`}
                              >
                                {product.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              <del className="price-text">
                                ${(product.oldPrice ?? 0).toFixed(2)}
                              </del>
                              <span className="price-text rbt-text-color-white">
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
                                width={278}
                                height={212}
                                src={product.imgSrc}
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
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24 pt--44 pt_sm--0 pt_lg--0 pt_md--0 mt_sm--0">
            {/* Start Product Banner Area */}
            <div className="rbt-product-banner rbt-product-banner-style-two border-0 h-100">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    width={1296}
                    height={892}
                    src="/assets/images/product-banner/product-banner-img-game-a-sm-01.webp"
                  />
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
