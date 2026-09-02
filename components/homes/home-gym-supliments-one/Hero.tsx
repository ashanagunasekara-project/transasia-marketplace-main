import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
        <div className="container-fluid p-0">
          {/* Start Product Banner Area */}
          <div className="row row--0">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
              <Link href={`/shop`} className="rbt-hero-slider-banner">
                <Image
                  alt="eCommerce Hero Slider"
                  src="/assets/images/hero-slider-banner/slider-gym-01.webp"
                  width={3840}
                  height={1260}
                  priority
                />
              </Link>
            </div>
          </div>
          {/* End Product Banner Area */}
        </div>
      </div>
    </>
  );
}
