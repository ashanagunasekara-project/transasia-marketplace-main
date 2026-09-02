import { BadgeSatisfactionIcon } from '../../svg-icons';
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-section-gap">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1">
          <div className="row row--12 mt_dec--24 justify-content-end">
            <div className="col-xl-6 col-lg-8 col-12 mt--24 mx-lg-auto">
              <div className="rbt-product-banner-dark">
                <div className="rbt-product-banner-img rbt-rounded--24 overflow-hidden rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-thumb-black-friday-01.webp"
                    width={1648}
                    height={1260}
                  />
                </div>
                <div className="rbt-banner-content-area">
                  <h4 className="rbt-subtitle rbt-text-color-white mb--0 rbt-scroll-trigger fade_in animation-order-1">
                    <span className="rbt-text-bold">Accessories</span>
                  </h4>
                  <h2 className="rbt-title mb--0 rbt-text-color-white rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular">
                    <span className="rbt-bold--text d-block">60% OFF</span>
                  </h2>
                  <Link
                    className="rbt-btn rbt-btn-gradient-red ml--12 rbt-scroll-trigger fade_in animation-order-3"
                    href="/shop"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12 mt--24 mx-lg-auto">
              <div className="rbt-product-banner-dark rbt-banner-dark-var-2">
                <div className="rbt-product-banner-img rbt-rounded--24 overflow-hidden rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-thumb-black-friday-02.webp"
                    width={1648}
                    height={1260}
                  />
                </div>
                <div className="rbt-banner-content-area text-start">
                  <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                    <span className="rbt-text-bold">Watch Collection</span>
                  </p>
                  <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular">
                    <span className="rbt-bold--text d-block">
                      Wrap the Strap
                    </span>
                  </h2>
                  <Link
                    className="rbt-btn rbt-btn-gradient-red rbt-scroll-trigger fade_in animation-order-3"
                    href="/shop"
                  >
                    Know More
                  </Link>
                </div>
                <div className="rbt-content-shape rbt-content-shape-star z-1">
                  <span className="text text-center">
                    Flat
                    <span className="h3 d-block rbt-text-color-white mb--0">
                      70%
                    </span>
                    off!
                  </span>
                  <span className="rbt-star-shape">
                    <BadgeSatisfactionIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
