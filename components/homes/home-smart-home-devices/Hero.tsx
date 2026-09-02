import Image from "next/image";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-laptop-hero-section-area">
      <div className="container-fluid p-0">
        <div className="row row--0">
          <div className="col-12">
            <figure>
              <Image
                alt="Product Banner Image"
                src="/assets/images/hero-slider-banner/slider-smart-device-a-01.webp"
                width="3840"
                height="1406"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
