import { laundrySaleBanners } from "@/data/collections";

import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {laundrySaleBanners.map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center"
            >
              <div className="rbt-product-banner rbt-product-banner-style-five rbt-bg-color-gray-one">
                <div className="rbt-banner-inner h-100">
                  <div className="rbt-product-banner-img h-100">
                    <Image
                      className="rbt-media-cover"
                      alt="Ecommerce Product Banner Image"
                      src={item.imgSrc || ""}
                      width={1296}
                      height={984}
                    />
                  </div>
                  <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                    <div className="rbt-corner-portion-wrapper">
                      <h6 className="rbt-banner-subtitle mb-0">
                        {item.subtitle}
                      </h6>
                      <h2 className="rbt-banner-title mb--8">
                        Seal The{" "}
                        <span className="rbt-bold--text">Deal Now</span>
                      </h2>
                      <p className="rbt-banner-description">
                        {item.description}
                      </p>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
