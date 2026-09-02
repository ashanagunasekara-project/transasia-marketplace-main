import { brandLogos } from "@/data/brands";

import Image from "next/image";
import Link from "next/link";
export default function Brands() {
  return (
    <div className="rbt-component-area rbt-brands-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Popular By Brands</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/brand-list`}
            >
              <span className="btn-text">View All Brands</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Brands Area */}
        <div className="row row--12 mt_dec--24">
          {brandLogos.map((brand, index) => (
            <div
              className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24"
              key={brand.id}
            >
              <div
                className={`rbt-brand text-center style-four rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <Link href={`/shop-by-brands`}>
                  <div className="rbt-brand-inner">
                    <div
                      className={`brand-image rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                    >
                      {brand.imgSrc && (
                        <Image
                          alt="Ecommerce Brand Images"
                          src={brand.imgSrc}
                          width={116}
                          height={64}
                        />
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
