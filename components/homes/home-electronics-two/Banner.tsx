import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/common/ui/Countdown";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-products-banner-area">
      <div className="wrapper">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100 rbt-rounded--0">
          <div className="row row--0 justify-content-end">
            <div className="col-md-6 col-12">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto h-100">
                <Image
                  className="rbt-media-cover"
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/product-banner-img-electro-a-sm-01.webp"
                  width={2120}
                  height={1200}
                />
              </div>
            </div>
            <div className="col-md-6 col-12 rbt-bg-color-white">
              <div className="rbt-banner-content m--0 align-items-start">
                <h5 className="rbt-subtitle mb--8 rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-text-bold">Exclusive Offer Going</span>
                </h5>
                <h2 className="rbt-lg-title h1 rbt-scroll-trigger rbt-text-regular fade_in animation-order-2 rbt-text-regular">
                  <span className="rbt-bold--text d-block">
                    Epic Deals For All Smart TV
                  </span>
                  <span className="rbt-text-color-secondary">
                    Up To 30% Off
                  </span>
                </h2>
                <Link
                  className="rbt-btn rbt-scroll-trigger fade_in animation-order-3"
                  href={`/shop-by-category`}
                >
                  Shop Collection
                </Link>
                <div className="mt--32">
                  <p className="b1 rbt-text-bold rbt-text-color-heading mb--12">
                    Hurry up! Offer ends in
                  </p>
                  <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                    <div className="rbt-countdown-one bg-variation-black">
                      <Countdown />
                    </div>
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
