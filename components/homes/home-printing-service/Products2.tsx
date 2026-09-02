import ProductCard4 from "@/components/product-cards/ProductCard4";
import { printingServiceProducts2 } from "@/data/products/printingService";

export default function Products2() {
  return (
    <div
      id="rbt-product-block-02"
      className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0 text-center">
              <span className="rbt-card-subtitle h5 mt--0">Now See what</span>
              <h2 className="rbt-title">
                <span className="rbt-bold--text">Our Best Products</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {printingServiceProducts2.slice(0, 8).map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard4
                detailsPageUrl="/product-single-printing-service"
                product={product}
                animationOrder={i + 1}
              />
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
