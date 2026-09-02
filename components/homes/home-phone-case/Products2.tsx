import ProductCard7 from "@/components/product-cards/ProductCard7";
import { phoneProducts } from "@/data/products/phone";

export default function Products2() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap2Top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
              <h2 className="rbt-title">
                Up To<span className="rbt-bold--text"> 70% Discount</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {phoneProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard7
                detailsPageUrl="/product-single-phone-case"
                product={product}
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
