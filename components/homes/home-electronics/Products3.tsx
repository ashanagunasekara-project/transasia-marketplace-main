"use client";
import { WaveThinIcon } from "../../svg-icons";
import MagneticButton from "@/components/common/ui/MagneticButton";
import { electronicsProducts } from "@/data/products/electronics";
import Image from "next/image";
import Link from "next/link";
import ProductSmallCard from "@/components/product-cards/ProductCardElectronicsList";

export default function Products3() {
  return (
    <div
      id="rbt-product-block-03"
      className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-gray-light"
    >
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24">
            <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-bg-white rbt-fshape-box-outline-style-sm-size">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title">
                    <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                      <span className="rbt-bold--text">
                        This Week’s Highlights
                      </span>
                    </h4>
                    <span className="rbt-fshape-right-portion rbt-fshape-right-portion-sm">
                      <WaveThinIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box">
                <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {electronicsProducts.slice(0, 6).map((product, i) => (
                    <div
                      key={product.id ?? i}
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                    >
                      <ProductSmallCard
                        detailsPageUrl="/product-single-electronics"
                        product={product}
                        animationOrder={i + 1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt--24 pt--44 pt_sm--0 pt_lg--0 pt_md--0">
            {/* Start Product Banner Area */}
            <div className="rbt-product-banner rbt-product-banner-style-two rbt-curved-style-box h-100">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-img-02.webp"
                    width={1296}
                    height={890}
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                    <h6 className="rbt-banner-subtitle mb-0">Power Up Deals</h6>
                    <h2 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">Red Camera </span>Plus
                    </h2>
                    <h3 className="rbt-secondary-subtitle mb-0">
                      Holiday Cheers
                    </h3>
                  </div>
                  <div className="rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                    <MagneticButton
                      as={Link}
                      className="rbt-btn rbt-btn-round"
                      href={`/shop`}
                    >
                      <i className="fa-solid fa-arrow-up-right" /> SHOP NOW
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
