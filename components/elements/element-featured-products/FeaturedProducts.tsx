import { electronicsCardData } from "@/data/products/electronics";
import ProductCard9 from "@/components/product-cards/ProductCard9";
function FeaturedProducts() {
  return (
    <>
      <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gap">
        <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Featured </span>Products
                </h2>
                <p className="description rbt-scroll-trigger fade_in animation-order-2">
                  Discover our selection of top-rated products, handpicked just
                  for you. Shop now and enjoy the best deals on our featured
                  items.
                </p>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12">
            {/* Start Single Card  */}
            {electronicsCardData.slice(0, 15).map((product, i) => (
              <div
                key={i}
                className="col-xl-1-5 col-xl-4 col-lg-6 col-md-6 col-6 mt--24"
              >
                <ProductCard9 showPricingBadge={false} product={product}
                  animationOrder={i + 1}
                />
              </div>
            ))}
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
