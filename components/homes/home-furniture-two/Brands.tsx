import { brands2 } from "@/data/brands";

import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/components/common/ui/Tooltip";
export default function Brands() {
  return (
    <div className="rbt-component-area rbt-brands-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--24 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <span className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Popular brands
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Shopping by brands</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
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
        <div className="row row--12 mt_dec--60">
          {brands2.map((brand, index) => (
            <div
              key={index}
              className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60"
            >
              <Link
                href={`/shop-by-brands`}
                className={`rbt-brand text-center style-two rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <div className="rbt-brand-inner">
                  <h6 className="title">{brand.title}</h6>
                  <p className="sub-title mb--0">{brand.location}</p>
                  <div className="rbt-badge-wrapper rbt-content-top-right">
                    <Tooltip content="Total Products" placement="bottom">
                      <span className="prd-text mt--4 rbt-product-badge tooltips">
                        {brand.totalProducts}
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div className="brand-image">
                  {brand.imgSrc && (
                    <Image
                      alt="Ecommerce Brand Images"
                      src={brand.imgSrc}
                      width={490}
                      height={490}
                    />
                  )}
                </div>
                <div className="sm-logo">
                  {brand.logoSrc && (
                    <Image
                      alt="Ecommerce Brand Images"
                      src={brand.logoSrc}
                      width={72}
                      height={72}
                    />
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
