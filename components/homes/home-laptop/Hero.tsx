import Image from "next/image";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-laptop-hero-section-area rbt-section-gap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--0 align-items-center">
              <h1 className="rbt-banner-title mb--0 rbt-text-regular rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Ultimate </span> Book
              </h1>
              <h3 className="mb--0 rbt-text-gradient-secondary">
                Light Up a Vivid World
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <figure>
              <Image
                alt="Product Banner Image"
                src="/assets/images/product-banner/product-banner-img-laptop-sm-04.webp"
                width={3840}
                height={1406}
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
