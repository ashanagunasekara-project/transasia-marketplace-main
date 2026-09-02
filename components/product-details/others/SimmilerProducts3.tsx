import { WaveShortIcon } from "../../svg-icons";
import Link from "next/link";
import Image from "next/image";
import ProductCard16 from "@/components/product-cards/ProductCard16";
import { furnitureTranspProducts } from "@/data/products/furnitures";

export default function SimmilerProducts3() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12 rbt-fshape-row position-relative">
              <div className="rbt-component-section-title rbt-bg-color-gray-light">
                <h4 className="rbt-title text-start">
                  <span className="rbt-bold--text">Similar Items</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveShortIcon />
                </span>
              </div>
              <Link
                href={`/shop`}
                className="rbt-link position-absolute d-inline-block rbt-text-color-primary rbt-text-medium rbt-gap--8 justify-content-center rbt-btn-link"
              >
                <span className="btn-text">View All Products</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square rbt-color-primary" />
                </span>
              </Link>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-gray-light">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {furnitureTranspProducts.slice(0, 3).map((product, i) => (
                <div
                  key={i}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
                >
                  <ProductCard16 product={product} animationOrder={i + 1} />
                </div>
              ))}

              {/* Start Single Card  */}
              <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-6 col-sm-6 col-6 mt--24">
                <div className="rbt-card rbt-beta-shop-card rbt-bg-color-primary">
                  <div className="inner rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-card-img rbt-bg-color-default">
                      <Link href="/shop-by-brands">
                        <Image
                          alt="Card Image"
                          src="/assets/images/product-img/beta-shop/shop-beta-img-01.webp"
                          width={216}
                          height={216}
                        />
                      </Link>
                    </div>
                    <div className="rbt-card-content">
                      <h5 className="rbt-card-title">
                        <Link href="/shop-by-brands">
                          Beats Brand is now on Unimart Platform
                        </Link>
                      </h5>
                      <p className="b4 desc rbt-text-medium">
                        Shop Beats Headphones &amp; Earbuds
                      </p>
                      <Link
                        className="rbt-btn rbt-btn-white rbt-btn-sm has-left-icon"
                        href="/shop-by-brands"
                      >
                        Shop Beats <i className="fa-solid fa-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
