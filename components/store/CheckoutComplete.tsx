"use client";

import { furnitureSliderProducts } from "@/data/products/furnitures";
import Image from "next/image";
import Link from "next/link";

import Tooltip from "@/components/common/ui/Tooltip";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

export default function CheckoutComplete() {
  const { registerInputRef, getTooltip, copyFromRef, isCopied } =
    useCopyToClipboard({ defaultTooltip: "Copy" });

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-8 col-12 col-md-12 col-lg-12 mt--24 rbt-scrollable-content rbt-checkout-single-content">
            <div className="w-100 pt-sm-2 pt-md-3 pt-lg-4 pb-lg-4 pb-xl-5 px-3 px-sm-4 pe-lg-0 ps-lg-5">
              <div className="d-flex align-items-sm-center border-bottom pb-3 pb-md-4 active">
                <div className="rbt-checkout-step rbt-bg-color-success rbt-text-color-white">
                  <i className="fa-solid fa-check" />
                </div>
                <div className="w-100 ps-3">
                  <div className="fs-sm mb-1">Order #234000</div>
                  <div className="d-sm-flex align-items-center">
                    <h1 className="h4 mb-0 me-3">Thank you for your order!</h1>
                    <div className="nav mt-2 mt-sm-0 ms-auto rbt-link-hover">
                      <a className="nav-link p-0" href="#!">
                        Track order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-4 pt-3 pb-5 mt-3">
                <div>
                  <h3 className="h6 mb-2">Delivery</h3>
                  <p className="fs-sm mb-0">
                    567 Cherry Souse Lane Sacramento, 95829
                  </p>
                </div>
                <div>
                  <h3 className="h6 mb-2">Time</h3>
                  <p className="fs-sm mb-0">Sunday, May 9, 12:00 - 14:00</p>
                </div>
                <div>
                  <h3 className="h6 mb-2">Payment</h3>
                  <p className="fs-sm mb-0">Visa: **** **** **** 8395</p>
                </div>
              </div>
              <div className="rbt-coupon rbt-coupon-lg mt--12 rbt-coupon-bg-white w-50">
                <div className="inner rbt-text-copy-activation">
                  <div className="left-part">
                    <input
                      ref={registerInputRef("checkout-offer-coupon")}
                      type="text"
                      defaultValue="20%SALEOFF"
                      readOnly
                      className="rbt-coupon-code-text rbt-has-right-shepe-border rbt-copy-value-field h5"
                    />
                  </div>
                  <div className="coupon-details">
                    <h2 className="rbt-coupon-info-title b1">
                      🎉 Congratulations! 20% off your new purchase!
                    </h2>
                    <p className="rbt-coupon-info-sub-title b3 mt--4">
                      Use the coupon now or look for it in your personal
                      account.
                    </p>
                    <ul className="rbt-coupon-info-list mt--12">
                      <li>
                        <span>12/18/2026 14:00 ~ 12/25/2026 14:00</span>
                      </li>
                      <li>
                        <span>30% Off Your Entire Purchase</span>
                      </li>
                      <li>
                        <span>
                          Minimum Spend: <strong>$200.00</strong>
                        </span>
                      </li>
                      <li>
                        <span>Valid on All Clothing &amp; Accessories</span>
                      </li>
                      <li>
                        <span>One Use Per Customer</span>
                      </li>
                    </ul>
                  </div>
                  <Tooltip
                    content={getTooltip("checkout-offer-coupon")}
                    placement="top"
                    forceOpen={isCopied("checkout-offer-coupon")}
                  >
                    <button
                      type="button"
                      className="copy-icon rbt-round-btn rbt-bg-primary rbt-copy-btn"
                      onClick={() => void copyFromRef("checkout-offer-coupon")}
                    >
                      <i className="fa-sharp fa-regular fa-copy" />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <p className="rbt-link-hover fs-sm pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0 mb-0">
                Need help?
                <a className="fw-medium ms-2" href="#!">
                  Contact us
                </a>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 mt--24">
            <div className="row row--12">
              <div className="col-12 text-center">
                <h5 className="title mb--0">
                  <span className="rbt-bold--text">You May Also Like</span>
                </h5>
              </div>
            </div>
            <div className="row row--12 rbt-mobile-row">
              {/* Start Single Card  */}
              {furnitureSliderProducts.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="col-xl-6 col-lg-3 col-sm-6 col-12 mt--24"
                >
                  <div className="rbt-card rbt-product-card has-hover-box-shadow">
                    <div className="inner">
                      <div className="rbt-card-img rbt-bg-color-default">
                        <Link href={`/product-single-furniture/${product.id}`}>
                          <Image
                            alt="Card Image"
                            src={product.imgSrc}
                            width={856}
                            height={720}
                          />
                        </Link>
                      </div>
                      <div className="rbt-card-body p-0 pt--4">
                        <Link
                          href={`/product-single-furniture/${product.id}`}
                          className="rbt-card-subtitle rbt-card-categories-text"
                        >
                          {product.category}
                        </Link>
                        <h6 className="rbt-card-title b3">
                          <Link
                            href={`/product-single-furniture/${product.id}`}
                          >
                            {product.title}
                          </Link>
                        </h6>
                        <div className="pricing-part">
                          <span className="price-text">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
