import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area">
      <div className="wrapper p-0">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100 rbt-rounded--0">
          <div className="row row--0 justify-content-end">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="rbt-banner-content rbt-banner-content-has-bg-two text-center">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-text-bold">Exclusive Offer Going</span>
                </p>
                <h1 className="rbt-lg-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular rbt-text-capitalize">
                  <span className="rbt-bold--text d-block">
                    Designed with utility &amp; comfort in mind{" "}
                  </span>
                  For wearing on the daily.
                </h1>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3"
                  href={`/shop-by-categories`}
                >
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12 order-2">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-borkha-01.webp"
                  width={1918}
                  height={1300}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
