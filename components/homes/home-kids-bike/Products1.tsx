import ProductCard8 from "@/components/product-cards/ProductCard8";
import { kidsBikes } from "@/data/products/sports";
import Image from "next/image";
import Link from "next/link";
export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h3 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Discover the{" "}
                <span className="rbt-bold--text">Popular Products</span>
              </h3>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-12 mt--24">
            <div className="row">
              <div className="col-md-12">
                <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-1">
                  <div className="rbt-banner-inner">
                    <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                      <div className="rbt-content mw-auto">
                        <h6 className="rbt-banner-subtitle mb-0">
                          HURRY SALE 50%
                        </h6>
                        <h3 className="rbt-banner-title mb-0 line-height-normal">
                          <span className="rbt-bold--text d-block">
                            Keep your focus with the perfect
                          </span>
                          balance of form and function
                        </h3>
                        <div className="rbt-banner-btn mt--16">
                          <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-product-banner-img rbt-full-width-img">
                    <Image
                      className="rbt-scroll-trigger zoom_in animation-order-1"
                      alt="Ecommerce Product Banner Image"
                      src="/assets/images/product-banner/banner-img-kids-bike-sm-01.webp"
                      width={1296}
                      height={1118}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {kidsBikes.slice(0, 2).map((product, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard8 product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
          </div>
        </div>
        <div className="row row--12">
          {kidsBikes.slice(2).map((product, i) => (
            <div
              key={i}
              className="col-lg-6 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard8 product={product}
                animationOrder={i + 1}
              />
            </div>
          ))}
          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
