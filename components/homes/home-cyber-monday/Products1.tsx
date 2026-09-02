import ProductCard21 from "@/components/product-cards/ProductCard21";
import { cyberMondayProducts } from "@/data/products/others";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
                <div className="rbt-card-subtitle rbt-text-color-white rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Popular Products
                </div>
                <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  Discover<span className="rbt-bold--text"> Our Products</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="container-fluid">
          <div className="row row--12 mt_dec--24">
            {cyberMondayProducts.map((product, index) => (
              <div
                key={index}
                className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 cyber-monday-product"
              >
                <ProductCard21 product={product}
                  animationOrder={index + 1}
                />
              </div>
            ))}
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
