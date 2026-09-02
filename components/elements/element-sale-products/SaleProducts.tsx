import { electronicsCardData } from "@/data/products/electronics";
import ProductCard9 from "@/components/product-cards/ProductCard9";
function SaleProducts() {
  return (
    <>
      <div className="rbt-component-area rbt-shop-filter-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Products On <span className="rbt-bold--text">Sale</span>
                </h2>
                <p className="description rbt-scroll-trigger fade_in animation-order-2">
                  Discover our exclusive collection of products currently on
                  sale. Enjoy great discounts and find the best deals on a
                  variety of items.!
                </p>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12">
            {electronicsCardData.slice(0, 12).map((product, i) => (
              <div
                key={i}
                className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
              >
                <ProductCard9 showPricingBadge={false} product={product}
                      animationOrder={i + 1}
                    />
              </div>
            ))}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default SaleProducts;
