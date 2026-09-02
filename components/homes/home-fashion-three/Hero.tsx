import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-fashion-hero-section-area">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="container-fluid">
            <div className="rbt-product-banner rbt-product-banner-style-six">
              <div className="row row--12 align-items-end">
                <div className="col-12">
                  <div className="rbt-banner-content">
                    <div className="rbt-content-section">
                      <h4 className="rbt-banner-subtitle rbt-text-color-white">
                        Exclusive Offer Going
                      </h4>
                      <h1 className="rbt-banner-title rbt-text-color-white">
                        <span className="rbt-text-bold">Trends Galore!</span>{" "}
                        <br />
                        Find Fashion Trend
                      </h1>
                      <div className="rbt-banner-btn-grp justify-content-xl-end">
                        <Link
                          href={`/shop`}
                          className="rbt-btn rbt-bg-color-secondary"
                        >
                          Shop Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure>
            <Image
              className="rbt-banner-img image-auto"
              alt="Banner Image"
              src="/assets/images/product-banner/product-banner-img-fashion-3.webp"
              width={1156}
              height={1422}
              priority
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
