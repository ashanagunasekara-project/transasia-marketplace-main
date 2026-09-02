import Image from "next/image";
import Countdown from "@/components/common/ui/Countdown";
export default function Hero() {
  return (
    <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-seven rbt-banner-seven-var-1 rbt-black-friday-hero-section-area">
      <div className="rbt-banner-inner rounded-0">
        <div className="rbt-product-banner-content text-center">
          <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
            <h6 className="rbt-banner-subtitle-two h4 mb-0">
              UP TO 70% OFF ON
            </h6>
            <h1 className="rbt-title mb-0 rbt-text-gradient-golden">
              BLACK FRIDAY
            </h1>
            <div className="rbt-countdown-sections d-flex justify-content-center align-items-center mt--52 mt_sm--20">
              <div className="rbt-countdown-one rbt-countdown-lg bg-variation-primary cd-border-style">
                <Countdown />
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-product-img rbt-product-img-one-template rbt-scroll-trigger zoom_in animation-order-3">
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/product-banner-img-black-friday-a-01.webp"
            width={3840}
            height={1302}
            priority
          />
        </div>
      </div>
    </div>
  );
}
