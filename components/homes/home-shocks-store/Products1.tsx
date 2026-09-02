import ProductCard15 from "@/components/product-cards/ProductCard15";
import { shockProducts } from "@/data/products/fashion";
import Link from "next/link";
import Image from "next/image";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Bestselling{" "}
                <span className="rbt-bold--text">Items For You</span>
              </h2>
              <p className="b1 rbt-text-color-gray-600 mb--0">
                Premium shocks tuned for control, comfort, and smooth daily ride
                and OE fit. <br />
                Matched valving. Firm seals. Confident miles for you.
              </p>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-6 col-12 mt--24">
            <div className="row">
              <div className="col-md-12">
                <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-1">
                  <div className="rbt-banner-inner">
                    <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                      <div className="rbt-content mw-auto">
                        <h6 className="rbt-banner-subtitle mb-0">
                          HURRY SALE 50%
                        </h6>
                        <h3 className="rbt-banner-title mb-0 line-height-normal rbt-text-capitalize">
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
                      src="/assets/images/product-banner/product-banner-shocks-md-a-01.webp"
                      width={1296}
                      height={1206}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {shockProducts.slice(0, 2).map((product, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard15 product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
          </div>
        </div>
        <div className="row row--12">
          {/* Start Single Card  */}
          {shockProducts.slice(2, 6).map((product, i) => (
            <div
              key={i}
              className="col-lg-6 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard15 product={product}
                animationOrder={i + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
