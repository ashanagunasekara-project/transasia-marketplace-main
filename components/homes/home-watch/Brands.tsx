import { brandData } from "@/data/brands";

import Image from "next/image";
export default function Brands() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular By <span className="rbt-bold--text">Brands</span>
              </h2>
              <p className="b1 rbt-text-color-gray-600 mb--0">
                Enjoy free standard shipping for all orders within Continental
                <br />
                States. Need it sooner
              </p>
            </div>
          </div>
        </div>
        {/* Start Brands Area */}
        <div className="row row--12 mt_dec--24">
          {brandData.map((brand, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24"
            >
              <div
                className={`rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div
                    className={`brand-image rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
                    {brand.imgSrc && (
                      <Image
                        alt="Ecommerce Brand Images"
                        src={brand.imgSrc}
                        width={400}
                        height={144}
                      />
                    )}
                  </div>
                  <p className="rbt-text-color-black b1 mt--12">
                    {brand.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
