import { collections3 } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap2">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Trending<span className="rbt-bold--text"> Collections</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Start Product Banner Area */}
            <div className="row row--12 mt_dec--24">
              {collections3.map((banner, index) => (
                <div
                  key={banner.id}
                  className="col-lg-4 col-md-4 col-sm-6 col-6 mt--24"
                >
                  <div
                    className={`rbt-product-banner rbt-product-banner-style-nine border-0 rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                  >
                    <div className="rbt-banner-inner d-flex justify-content-center align-items-center flex-column">
                      <div
                        className={`rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                      >
                        <Link href={`/shop-by-categories`}>
                          <Image
                            alt="Ecommerce Product Banner Image"
                            src={banner.imgSrc || ""}
                            width={840}
                            height={840}
                          />
                        </Link>
                      </div>
                      <div className="rbt-content-section">
                        <h5 className="rbt-banner-title mb-0">
                          <span className="rbt-bold--text">{banner.title}</span>
                        </h5>
                        <div className="rbt-banner-btn">
                          <Link className="rbt-btn rbt-btn-sm" href={`/shop`}>
                            SHOP NOW
                            <i className="fa-solid fa-arrow-up-right ml--4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End Product Banner Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
