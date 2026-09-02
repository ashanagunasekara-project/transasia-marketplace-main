import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-section-gapTop">
      <div className="wrapper p-0">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100 rbt-rounded--0">
          <div className="row row--0 justify-content-end">
            <div className="col-md-6 col-12">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto h-100">
                <Image
                  className="h-100"
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-watch-a-2.webp"
                  width={1920}
                  height={1300}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="rbt-banner-content rbt-banner-content-watch rbt-banner-content-has-bg-one text-center rbt-max-w-full">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-text-bold">Exclusive Offer Going</span>
                </p>
                <h2 className="rbt-lg-title h1 rbt-scroll-trigger rbt-text-regular fade_in animation-order-2 rbt-text-regular">
                  <span className="rbt-bold--text d-block">
                    Specialty Collection Featuring the{" "}
                  </span>
                  Blueprint automatic watch.
                </h2>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3"
                  href={`/shop`}
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
