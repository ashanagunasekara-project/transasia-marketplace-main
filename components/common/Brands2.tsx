import Image from "next/image";

export default function Brands({
  parentClass = "rbt-component-area rbt-section-gapBottom",
}) {
  return (
    <div className={parentClass}>
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
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-1">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-1 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-01.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Timeless</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-2">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-2 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-02.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Iconic</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-3">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-3 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-03.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Conscious</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-4">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-4 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-04.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Specialty</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-5">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-1 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-05.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Active</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt--24">
            <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-5">
              <div className="inner">
                <div className="brand-image rbt-scroll-trigger zoom_in animation-order-1 mb--20 mb_sm--8">
                  <Image
                    alt="Ecommerce Brand Images"
                    src="/assets/images/brands/brand-e-06.webp"
                    width={400}
                    height={144}
                  />
                </div>
                <p className="rbt-text-color-black b1">Smartwatches</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
