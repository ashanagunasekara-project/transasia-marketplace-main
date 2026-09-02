import Image from "next/image";
import MiniCheckout from "./MiniCheckout";
import CheckoutPaymentForm from "./CheckoutPaymentForm";
import Link from "next/link";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import CouponSelectionModal from "@/components/modals/CouponSelectionModal";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";

export default function CheckoutPayment() {
  return (
    <>
      <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row row--12 mt_dec--24 justify-content-center">
            <div className="col-12 col-md-12 col-lg-8 mt--24">
              <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
                <div className="rbt-checkout-wrapper-box">
                  {/* ... other content ... */}
                  <div className="rbt-checkout-single-content">
                    <span className="rbt-checkout-step">
                      <i className="fa-regular fa-check" />
                    </span>
                    <div className="inner w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="title">Delivery Details</h5>
                        <div className="rbt-link-hover">
                          <Link href="/checkout-delivery-step-two">Edit</Link>
                        </div>
                      </div>
                      <div className="content">
                        <h6 className="h6 mb-0">Postcode</h6>
                        <p className="desc mt--12">15006</p>
                        <h6 className="h6 mb-0 mt--12">
                          Estimated delivery date
                        </h6>
                        <p className="desc mt--12">
                          Monday, 13 | 12:00 - 16:00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-checkout-single-content">
                    <span className="rbt-checkout-step">
                      <i className="fa-regular fa-check" />
                    </span>
                    <div className="rbt-checkout-content-inner">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="title">Shipping Options</h5>
                        <div className="rbt-link-hover">
                          <Link href="/checkout-shipping">Edit</Link>
                        </div>
                      </div>
                      <div className="content">
                        <p className="desc mb-0">Michael Johnson</p>
                        <p className="desc mt--12">michael.johnson@email.com</p>
                        <p className="desc mt--12">(312) 555-7890</p>
                        <p className="desc mt--12">Illinois 60601</p>
                        <p className="desc mt--12">
                          123 Oak Street Apt 45 Chicago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-checkout-single-content active">
                    <span className="rbt-checkout-step">3</span>
                    <div className="rbt-checkout-content-inner">
                      <h5 className="title">Secure Payment</h5>
                      <div className="mb-4" id="paymentMethod" role="list">
                        {/* Cash on delivery */}
                        <div className="single-payment-methode mt-2">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#cash"
                            aria-expanded="false"
                            aria-controls="cash"
                          >
                            <label className="form-check-label w-100 text-dark-emphasis fw-semibold">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                              />
                              Cash on delivery
                            </label>
                          </div>
                          <div
                            className="collapse"
                            id="cash"
                            data-bs-parent="#paymentMethod"
                          >
                            <div className="d-sm-flex align-items-center pt-2 pt-sm-1 pb-2 ps-3 ms-2 ms-sm-3">
                              <span className="fs-sm me-3">
                                I would require a change from:
                              </span>
                              <div className="rbt-price-input-grp">
                                <input
                                  type="number"
                                  min={10}
                                  placeholder="10$"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Credit card */}
                        <div className="single-payment-methode mt-2 d-block">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#card"
                            aria-expanded="true"
                            aria-controls="card"
                          >
                            <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                                defaultChecked
                              />
                              Credit or debit card
                              <span className="d-none d-sm-flex gap-2 ms-3">
                                <Image
                                  className="d-block"
                                  width={200}
                                  alt="Credit Or Debit Card"
                                  src="/assets/images/payment-brand/image-01.webp"
                                  height={64}
                                />
                              </span>
                            </label>
                          </div>
                          <div
                            className="collapse show"
                            id="card"
                            data-bs-parent="#paymentMethod"
                          >
                            <CheckoutPaymentForm />
                          </div>
                        </div>
                        {/* PayPal */}
                        <div className="single-payment-methode mt-2">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#paypal"
                            aria-expanded="false"
                            aria-controls="paypal"
                          >
                            <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                              />
                              PayPal
                              <Image
                                className="ms-3"
                                alt="PayPal"
                                src="/assets/images/icons/paypal-icon.svg"
                                width={16}
                                height={19}
                              />
                            </label>
                          </div>
                          <div
                            className="collapse"
                            id="paypal"
                            data-bs-parent="#paymentMethod"
                          />
                        </div>
                        {/* Google Pay */}
                        <div className="single-payment-methode mt-2">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#googlepay"
                            aria-expanded="false"
                            aria-controls="googlepay"
                          >
                            <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                              />
                              Google Pay
                              <Image
                                className="ms-3"
                                alt="Google Pay"
                                src="/assets/images/icons/google-icon.svg"
                                width={21}
                                height={17}
                              />
                            </label>
                          </div>
                          <div
                            className="collapse"
                            id="googlepay"
                            data-bs-parent="#paymentMethod"
                          />
                        </div>

                        <div className="nav pb-3 mb-2 mb-sm-3 rbt-link-hover mt-2">
                          <ModalTriggerButton
                            className="nav-link animate-underline rbt-text-color-gray-400 p-0 rbt-text-bold border-0 bg-transparent"
                            openModalName={ModalName.couponSelectionModal}
                          >
                            <i className="fa-regular fa-circle-plus fs-xl ms-a me-2" />
                            <span className="animate-target">
                              Add a promo code or a gift card
                            </span>
                          </ModalTriggerButton>
                        </div>
                        <textarea
                          className="mb-4"
                          rows={3}
                          placeholder="Additional comments"
                          defaultValue={""}
                        />
                        <div className="form-check mb-lg-4">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="accept-terms"
                          />
                          <label
                            htmlFor="accept-terms"
                            className="form-check-label nav align-items-center rbt-link-hover"
                          >
                            I accept the
                            <Link
                              className="nav-link ms-1 p-0"
                              href="/terms-policy"
                            >
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>
                        <div className="text-center mt--12 text-center rbt-btn-area d-block">
                          <Link
                            href="/checkout-thankyou"
                            className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 rbt-rounded--4 d-block"
                            target="_blank"
                          >
                            <span className="icon-left">
                              <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                            </span>
                            <span>Pay $5,650.00</span>
                            <span className="icon-right">
                              <i className="fa-solid fa-money-bill-1-wave ml--4" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
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
      <SingleManagedModalLayer modalName={ModalName.couponSelectionModal}>
        <CouponSelectionModal />
      </SingleManagedModalLayer>
    </>
  );
}
