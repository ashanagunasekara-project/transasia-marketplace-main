import Image from "next/image";
import Countdown from "@/components/common/ui/Countdown";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-cyber-monday-hero-section-area rbt-bg-color-white rbt-has-edge-shape-bottom">
      <div className="container-fluid p-0">
        <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner rbt-rounded--0">
            <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-end">
              <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                <div className="rbt-countdown-one bg-variation-green rbt-countdown-lg cd-border-style">
                  <Countdown />
                </div>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <Image
                alt="eCommerce Product Banner Background"
                src="/assets/images/product-banner/product-banner-cyber-monday-01.webp"
                width={3840}
                height={1556}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="rbt-edge-shape-bottom"
        alt="Shape"
        src="/assets/images/bg-shape/edge-shape.webp"
        width={3840}
        height={168}
      />
    </div>
  );
}
