"use client";

import Image from "next/image";
import RbtDatePickerField from "@/components/common/select/RbtDatePickerField";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        {/* Start Product Banner Area */}
        <div className="row row--0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <div className="rbt-hero-slider-banner rbt-has-min-height position-relative">
              <Image
                alt="eCommerce Hero Slider"
                src="/assets/images/hero-slider-banner/slider-flower-plants-01.webp"
                width={3840}
                height={1250}
                priority
              />
              <div className="rbt-delivery-details-form">
                <div className="rbt-wrapper">
                  <div className="rbt-content">
                    <h4 className="title mb--12">
                      Find The Perfect Gift for You
                    </h4>
                    <p className="desc">Start here to narrow your search</p>
                  </div>
                  <div className="rbt-form-area">
                    <div className="input-group delivery-code">
                      <input type="text" placeholder="Delivery Zip Code" />
                    </div>
                    <RbtDatePickerField id="date" placeholder="Delivery Date" />
                  </div>
                  <div className="rbt-btn-area">
                    <button
                      type="submit"
                      className="rbt-btn rbt-btn-md radius-round-6"
                    >
                      <i className="fa-regular fa-gift mr--4" />
                      Search Gifts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
