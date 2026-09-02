import Countdown from "@/components/common/ui/Countdown";
import ProductCard6 from "@/components/product-cards/ProductCard6";
import { glassProducts } from "@/data/products/glass";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap2Bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Today’s Best Deals{" "}
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Hurry up! </span>Offer ends in
              </h2>
            </div>
            <div className="rbt-title-countdown-sec rbt-scroll-trigger fade_in animation-order-3">
              <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                <div className="rbt-countdown-one bg-variation-primary">
                  <Countdown />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--32">
          {/* Start Single Card  */}
          {glassProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--32"
            >
              <ProductCard6 product={product}
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
