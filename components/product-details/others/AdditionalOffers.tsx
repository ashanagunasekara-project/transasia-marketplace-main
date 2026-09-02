"use client";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Tooltip from "@/components/common/ui/Tooltip";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

const coupons = [
  {
    code: "WELCOME100",
    title: "UP TO 30% OFF",
    subtitle: "For orders over $9.90",
    date: "12/18/2026 14:00 ~ 12/25/2026 14:00",
    minimumSpend: "$200.00",
    expired: false,
  },
  {
    code: "WELCOME100",
    title: "UP TO 30% OFF",
    subtitle: "For orders over $9.90",
    date: "12/18/2026 14:00 ~ 12/25/2026 14:00",
    minimumSpend: "$200.00",
    expired: false,
  },
  {
    code: "WELCOME100",
    title: "UP TO 30% OFF",
    subtitle: "For orders over $9.90",
    date: "12/18/2026 14:00 ~ 12/25/2026 14:00",
    minimumSpend: "$200.00",
    expired: true,
  },
];

export default function AdditionalOffers() {
  const { registerInputRef, getTooltip, copyFromRef, isCopied } =
    useCopyToClipboard({ defaultTooltip: "Copy" });

  return (
    <div className="rbt-info-wrapper d-block mt--24">
      <div className="rbt-info-box rbt-bg-color-brand-50">
        <p className="text-bold rbt-info-title b1">Additional Offers</p>
        <div className="rbt-coupon-container">
          <Swiper
            className="swiper rbt-coupon-slide-active"
            {...({
              slidesPerView: "auto",
              spaceBetween: 24,
              scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
              },
            } as unknown as import("swiper/react").SwiperProps)}
            modules={[Scrollbar]}
          >
            {coupons.map((coupon, index) => (
              <SwiperSlide
                className="swiper-slide rbt-scroll-trigger fade_in animation-order-1"
                key={index}
              >
                <div
                  className={`rbt-coupon ${
                    coupon.expired ? "rbt-coupon-expired" : ""
                  }`}
                >
                  <div className="inner rbt-text-copy-activation">
                    <div className="left-part">
                      <input
                        ref={registerInputRef(index)}
                        type="text"
                        defaultValue={coupon.code}
                        readOnly
                        className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field"
                      />
                    </div>
                    <div className="coupon-details">
                      <h2 className="rbt-coupon-info-title b1">
                        {coupon.title}
                      </h2>
                      <p className="rbt-coupon-info-sub-title b3 mt--4">
                        {coupon.subtitle}
                      </p>
                      <ul className="rbt-coupon-info-list mt--12">
                        <li>
                          <span>{coupon.date}</span>
                        </li>
                        <li>
                          <span>
                            The minimum spend for this coupon{" "}
                            <strong>{coupon.minimumSpend}</strong>
                          </span>
                        </li>
                      </ul>
                    </div>

                    {coupon.expired ? (
                      <button className="rbt-btn rbt-bg-color-gray-300 shadow-none rbt-btn-sm">
                        Expired
                      </button>
                    ) : (
                      <Tooltip
                        content={getTooltip(index)}
                        placement="top"
                        forceOpen={isCopied(index)}
                      >
                        <button
                          type="button"
                          className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn copy-icon-none"
                          onClick={() => void copyFromRef(index)}
                        >
                          <i className="fa-sharp fa-regular fa-copy" />
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="rbt-swiper-scrollbar swiper-scrollbar" />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
