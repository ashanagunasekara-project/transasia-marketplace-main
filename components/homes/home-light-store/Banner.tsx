import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
          <div className="row row--0 justify-content-end">
            <div className="col-md-6 col-12">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-light-sm-01.webp"
                  width={1320}
                  height={1027}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="rbt-banner-content align-items-start">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular">
                  <span className="rbt-bold--text d-block">
                    Illuminate Your Path with Lamplight
                  </span>
                </h2>
                <p>
                  Discover Lamplight—a platform to brighten your journey with
                  innovative solutions. Join today for a brighter future!
                </p>
                  <Link
                    className="rbt-btn rbt-scroll-trigger text-left fade_in animation-order-3"
                    href={`/shop-by-category`}
                  >
                    Contact Us
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
