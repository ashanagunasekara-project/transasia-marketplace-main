import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gapTop">
      <div className="container">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
          <div className="row row--0 justify-content-end">
            <div className="col-md-6 col-12">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-bottle-md-02.webp"
                  width={1672}
                  height={1300}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="rbt-banner-content text-center">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-text-bold">Exclusive Offer Going</span>
                </p>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular">
                  <span className="rbt-bold--text d-block">
                    Ready For the Trendy
                  </span>
                  Monochrome Magic Dots!
                </h2>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3"
                  href={`/shop-by-category`}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
