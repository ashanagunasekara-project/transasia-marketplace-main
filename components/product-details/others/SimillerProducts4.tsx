import { WaveThinIcon } from "../../svg-icons";
import Link from "next/link";
import ProductCard5 from "@/components/product-cards/ProductCard5";
import { beautyProductsCarousel } from "@/data/products/beauty";

export default function SimillerProducts4() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12 rbt-fshape-row position-relative">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h4 className="rbt-title text-start">
                  <span className="rbt-bold--text">Similar Items</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveThinIcon />
                </span>
              </div>
              <Link
                className="rbt-link position-absolute d-inline-block rbt-text-color-primary rbt-text-medium rbt-gap--8 justify-content-center rbt-btn-link"
                href={`/shop`}
              >
                <span className="btn-text">View All Products</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square rbt-color-primary" />
                </span>
              </Link>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {beautyProductsCarousel.slice(0, 4).map((product, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
                >
                  <ProductCard5 product={product}
                      animationOrder={i + 1}
                    />
                </div>
              ))}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
