import { brandImages2 } from "@/data/brands";
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
          {brandImages2.map((item, index) => (
            <div
              className="col-lg-1-8 col-md-3 col-sm-3 col-3 mt--24"
              key={index}
            >
              <div
                className={`rbt-brand rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="inner">
                  <div
                    className={`brand-image rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
                    {item.imgSrc && (
                      <Image
                        alt="Ecommerce Brand Images"
                        src={item.imgSrc}
                        width={192}
                        height={120}
                        className="image-auto"
                      />
                    )}
                  </div>
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
