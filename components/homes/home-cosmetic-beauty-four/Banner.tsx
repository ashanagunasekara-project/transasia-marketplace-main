import Image from "next/image";
import Countdown from "@/components/common/ui/Countdown";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-countdown-area rbt-bg-color-white rbt-section-gapTop">
      <div className="container">
        <div className="rbt-countdown-section rbt-countdown-section-style-two rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
          <div className="row row--0 justify-content-end">
            <div className="col-xl-6 col-md-12 col-12">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                <Image
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-bp-cd-01.webp"
                  width={1344}
                  height={1300}
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-12">
              <div className="rbt-countdown-content rbt-countdown-content-right-position">
                <p className="rbt-subtitle mb--0 rbt-scroll-trigger fade_in animation-order-1">
                  Our Special Discount
                  <span className="rbt-color-primary ml--4">11th December</span>
                </p>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2 rbt-text-regular">
                  <span className="rbt-bold--text">Up to 40% Off</span> On All
                  Product
                </h2>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3"
                  href="/shop"
                >
                  Know More
                </Link>
                <div className="rbt-countdown-sections pl--0 pb--0 rounded-0 d-flex mt--40">
                  <div className="rbt-countdown-one cd-border-style rbt-countdown-lg bg-variation-black">
                    <Countdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
