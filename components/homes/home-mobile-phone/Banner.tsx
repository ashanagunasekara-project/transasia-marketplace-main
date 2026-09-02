import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-product-banner rbt-product-banner-m-01 rbt-product-banner-style-four rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-1 rbt-bg-color-gray-black-three">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-content-section-full-wider">
                    <h6 className="rbt-banner-subtitle mb-0 rbt-text-color-white">
                      Innovation That Glows
                    </h6>
                    <h2 className="rbt-banner-title mb-0 h1 rbt-text-color-white">
                      <span className="rbt-bold--text">
                        Keep your focus with the perfect <br />
                        balance of form and function
                      </span>
                    </h2>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                        Shop Collection
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rbt-banner-img">
                <Image
                  alt="Product Banner Image"
                  src="/assets/images/product-banner/banner-img-mobile-a-01.webp"
                  width={600}
                  height={748}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
