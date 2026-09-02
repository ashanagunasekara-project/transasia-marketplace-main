import MiniCheckout from "./MiniCheckout";
import Link from "next/link";

export default function Checkout2() {
  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
              <div className="rbt-checkout-wrapper-box">
                <div className="rbt-checkout-single-content active">
                  <span className="rbt-checkout-step">1</span>
                  <div className="inner w-100">
                    <h5 className="title">Delivery Details</h5>
                    <div className="content">
                      <p className="desc">
                        Provide your shipping address to ensure a smooth and
                        timely arrival. 🚚
                      </p>
                      <h6 className="h6 border-bottom pb-4 mb-0 mt--12">
                        Choose shipping method
                      </h6>
                      <div
                        className="rbt-shipping-method mb-lg-4"
                        id="shippingMethod"
                        role="list"
                      >
                        {/* Courier delivery option */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0 collapsed"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#courier"
                            aria-expanded="true"
                            aria-controls="courier"
                          >
                            <label className="form-check-label d-flex align-items-center py-3">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="payment-method"
                                defaultChecked
                              />
                              Courier delivery
                              <span className="b1 ms-auto">$16.50</span>
                            </label>
                          </div>
                          <div
                            className="collapse show"
                            id="courier"
                            data-bs-parent="#shippingMethod"
                          >
                            <div className="rbt-courier-shipping-area pb-4 ps-3 ms-2 ms-sm-3">
                              <p className="fs-sm mb--0">
                                Choose a courier delivery time convenient for
                                you:
                              </p>
                              <div className="rbt-delivery-input-wrapper mt--12">
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Monday, 13
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-mon-1"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="p-mon-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-mon-2"
                                    />
                                    <label
                                      htmlFor="p-mon-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Tuesday, 14
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-tue-1"
                                    />
                                    <label
                                      htmlFor="p-tue-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      09:00 - 12:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-tue-2"
                                    />
                                    <label
                                      htmlFor="p-tue-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      14:00 - 19:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Wednesday, 15
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-wed-1"
                                    />
                                    <label
                                      htmlFor="p-wed-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      09:00 - 12:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-wed-2"
                                    />
                                    <label
                                      htmlFor="p-wed-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      14:00 - 19:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Thursday, 16
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-thu-1"
                                    />
                                    <label
                                      htmlFor="p-thu-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-thu-2"
                                    />
                                    <label
                                      htmlFor="p-thu-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Friday, 17
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-fri-1"
                                    />
                                    <label
                                      htmlFor="p-fri-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="p-fri-2"
                                    />
                                    <label
                                      htmlFor="p-fri-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Pickup from store option */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0 collapsed"
                            role="button"
                            tabIndex={0}
                            data-bs-toggle="collapse"
                            data-bs-target="#pickup"
                            aria-expanded="false"
                            aria-controls="pickup"
                          >
                            <label className="form-check-label d-flex align-items-center py-3">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="payment-method"
                              />
                              Pickup from store
                              <span className="fw-normal ms-auto">Free</span>
                            </label>
                          </div>
                          <div
                            className="collapse"
                            id="pickup"
                            data-bs-parent="#shippingMethod"
                          >
                            <div className="rbt-pickup-shipping-area pb-4 ps-3 ms-2 ms-sm-3">
                              <p className="fs-sm mb-2">
                                Choose a store nearby:
                              </p>
                              <p className="fs-sm">
                                Choose a pickup time convenient for you:
                              </p>
                              <div className="rbt-delivery-input-wrapper mt--12">
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Monday, 13
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-mon-1"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="q-mon-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-mon-2"
                                    />
                                    <label
                                      htmlFor="q-mon-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Tuesday, 14
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-tue-1"
                                    />
                                    <label
                                      htmlFor="q-tue-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      09:00 - 12:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-tue-2"
                                    />
                                    <label
                                      htmlFor="q-tue-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      14:00 - 19:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Wednesday, 15
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-wed-1"
                                    />
                                    <label
                                      htmlFor="q-wed-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      09:00 - 12:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-wed-2"
                                    />
                                    <label
                                      htmlFor="q-wed-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      14:00 - 19:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Thursday, 16
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-thu-1"
                                    />
                                    <label
                                      htmlFor="q-thu-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-thu-2"
                                    />
                                    <label
                                      htmlFor="q-thu-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                                <div className="rbt-single-input-box text-center">
                                  <div className="h6 fs-sm pb-2 mb-0 rbt-text-regular">
                                    Friday, 17
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-fri-1"
                                    />
                                    <label
                                      htmlFor="q-fri-1"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      12:00 - 15:00
                                    </label>
                                  </div>
                                  <div className="py-1 my-1 rbt-single-order-checkbox">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="pickup-time"
                                      id="q-fri-2"
                                    />
                                    <label
                                      htmlFor="q-fri-2"
                                      className="rbt-btn rbt-btn-border rbt-btn-xs rbt-btn-gray-light"
                                    >
                                      17:00 - 20:00
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Local shipping option */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#shipping"
                            aria-expanded="false"
                            aria-controls="shipping"
                          >
                            <label className="form-check-label d-flex align-items-center py-3">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="payment-method"
                              />
                              Local shipping
                              <span className="fw-normal ms-auto">$23.40</span>
                            </label>
                          </div>
                          <div
                            className="collapse"
                            id="shipping"
                            data-bs-parent="#shippingMethod"
                          >
                            <div className="rbt-local-shipping-area pb-4 ps-3 ms-2 ms-sm-3">
                              <div
                                className="alert rbt-alert-brand d-flex align-items-center alert-info mb-3"
                                role="alert"
                              >
                                <i className="fa-regular fa-circle-info mr--4" />
                                <div className="fs-sm">
                                  Local shipping can take up to{" "}
                                  <span className="text-info-emphasis fw-semibold">
                                    5
                                  </span>{" "}
                                  business days.
                                </div>
                              </div>
                              <p className="fs-sm mb-0">
                                Estimated date of delivery -
                                <span className="text-body-emphasis fw-medium">
                                  March 31, 2025
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt--12 text-center rbt-btn-area">
                          <Link
                            href="/checkout-shipping"
                            className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 d-block rbt-rounded--4"
                            target="_blank"
                          >
                            <span className="icon-left">
                              <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                            </span>
                            <span>Continue Order Process</span>
                            <span className="icon-right">
                              <i className="fa-regular fa-arrow-right ml--4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">2</span>
                  <h5 className="title">Shipping Options</h5>
                </div>
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">3</span>
                  <h5 className="title">Secure Payment</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt--24">
            <MiniCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}
