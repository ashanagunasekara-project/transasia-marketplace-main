import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="rbt-team-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="rbt-product-banner rbt-product-banner-style-five rbt-product-banner-style-five-lg rbt-bg-color-gray-one">
          <div className="rbt-banner-inner">
            <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-4">
              <Image
                alt="Ecommerce Product Banner Image"
                src="/assets/images/product-banner/product-banner-team-a-1.webp"
                width={2640}
                height={1200}
              />
            </div>
            <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-rb">
              <div className="rbt-corner-portion-wrapper rbt-bg-color-white rbt-slideshow-content-inner effect_fadeindown space-var-one">
                <h4 className="rbt-banner-subtitle mb-0">Meet Our Team</h4>
                <h2 className="rbt-banner-title h1 mb-0">
                  <span className="rbt-bold--text d-block">
                    Ready for the trendy
                  </span>
                  Monochrome Magic Dots!
                </h2>
                <Link href="/about" className="rbt-btn rbt-btn-md mt--24">
                  Know About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
