"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MiniCheckout from "./MiniCheckout";
import CheckoutPaymentForm from "./CheckoutPaymentForm";
import Link from "next/link";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import CouponSelectionModal from "@/components/modals/CouponSelectionModal";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";
import { useContextElement } from "@/context/Context";
import { getCartSummary } from "@/lib/cartSummaryUtils";
import { formatCurrency } from "@/lib/price";

export default function CheckoutPayment() {
  const router = useRouter();
  const { cartProducts, totalPrice, clearCart } = useContextElement();
  const { orderTotal } = getCartSummary(totalPrice, cartProducts.length);

  // Selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(
    "Credit or debit card"
  );

  // Dynamic delivery details from Step 1 & 2
  const [deliveryInfo, setDeliveryInfo] = useState({
    postcode: "00100",
    deliveryMethod: "Courier delivery",
    shippingFee: 450,
  });

  // Dynamic shipping contact details from Step 3
  const [shippingInfo, setShippingInfo] = useState({
    name: "Customer",
    email: "customer@example.com",
    mobile: "077 123 4567",
    address: "Street Address",
    city: "Colombo",
    district: "Colombo",
    postcode: "00100",
  });

  // Dynamic Bank Deposit / Wire Transfer details (Commercial Bank of Ceylon)
  const [bankDetails, setBankDetails] = useState({
    accountHolder: "TRANS ASIA CELLULAR PVT LTD",
    accountNumber: "1000060278",
    bankName: "COMMERCIAL BANK",
    branchName: "KEYZER STREET BRANCH",
    instructions:
      "Please transfer the total amount and WhatsApp your deposit slip with Order ID to 077 339 2727",
  });

  useEffect(() => {
    async function fetchPublicSettings() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/settings/public`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data?.paymentSettings?.bankDetails) {
            setBankDetails(json.data.paymentSettings.bankDetails);
          }
        }
      } catch (err) {
        console.error("Failed to load store payment settings:", err);
      }
    }
    fetchPublicSettings();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedDelivery = localStorage.getItem("transasia_checkout_delivery");
        if (storedDelivery) {
          const parsed = JSON.parse(storedDelivery);
          setDeliveryInfo({
            postcode: parsed.postcode || "00100",
            deliveryMethod:
              parsed.deliveryMethod === "STORE_PICKUP_COLOMBO"
                ? "Pickup from store"
                : parsed.deliveryMethod === "LOCAL_SHIPPING"
                ? "Local shipping"
                : "Courier delivery",
            shippingFee: parsed.shippingFee ?? 450,
          });
        }

        const storedShipping = localStorage.getItem("transasia_checkout_shipping");
        if (storedShipping) {
          const parsed = JSON.parse(storedShipping);
          setShippingInfo({
            name:
              `${parsed.firstName || ""} ${parsed.lastName || ""}`.trim() ||
              "Customer",
            email: parsed.email || "customer@example.com",
            mobile: parsed.mobile || "077 123 4567",
            address: parsed.address || "Street Address",
            city: parsed.city || "Colombo",
            district: parsed.district || "Colombo",
            postcode: parsed.postcode || "00100",
          });
        }
      } catch (e) {
        console.error("Failed to load checkout state in payment:", e);
      }
    }
  }, []);

  const handlePlaceOrder = (e: React.MouseEvent) => {
    e.preventDefault();

    const orderNumber = `TA-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

    const lastOrder = {
      orderNumber,
      items: cartProducts.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        quantity: p.quantity,
        imgSrc: p.imgSrc,
      })),
      subtotal: totalPrice,
      shippingFee: deliveryInfo.shippingFee,
      totalAmount: orderTotal,
      deliveryMethod: deliveryInfo.deliveryMethod,
      shippingAddress: {
        name: shippingInfo.name,
        email: shippingInfo.email,
        mobile: shippingInfo.mobile,
        address: shippingInfo.address,
        city: shippingInfo.city,
        district: shippingInfo.district,
        postcode: shippingInfo.postcode,
      },
      paymentMethod: selectedPaymentMethod,
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("transasia_last_order", JSON.stringify(lastOrder));
      } catch (err) {
        console.error("Failed to persist order summary:", err);
      }
    }

    // Clear cart upon successful order placement
    if (typeof clearCart === "function") {
      clearCart();
    }

    // Smooth navigation to thank you page
    router.push("/checkout-thankyou");
  };

  return (
    <>
      <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row row--12 mt_dec--24 justify-content-center">
            <div className="col-12 col-md-12 col-lg-8 mt--24">
              <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
                <div className="rbt-checkout-wrapper-box">
                  {/* Step 1 Completed Summary */}
                  <div className="rbt-checkout-single-content">
                    <span className="rbt-checkout-step">
                      <i className="fa-regular fa-check" />
                    </span>
                    <div className="inner w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="title mb-0">Delivery Details</h5>
                        <div className="rbt-link-hover">
                          <Link
                            href="/checkout-delivery-step-two"
                            className="text-primary fw-semibold"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                      <div className="content mt--12">
                        <h6 className="h6 mb-0 text-muted fs-sm">Postcode</h6>
                        <p className="desc mt--4 fw-semibold text-dark">
                          {deliveryInfo.postcode}
                        </p>
                        <h6 className="h6 mb-0 mt--12 text-muted fs-sm">
                          Shipping Method
                        </h6>
                        <p className="desc mt--4 fw-semibold text-dark">
                          {deliveryInfo.deliveryMethod}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Completed Summary */}
                  <div className="rbt-checkout-single-content">
                    <span className="rbt-checkout-step">
                      <i className="fa-regular fa-check" />
                    </span>
                    <div className="rbt-checkout-content-inner w-100">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="title mb-0">Shipping Options</h5>
                        <div className="rbt-link-hover">
                          <Link
                            href="/checkout-shipping"
                            className="text-primary fw-semibold"
                          >
                            Edit
                          </Link>
                        </div>
                      </div>
                      <div className="content mt--12">
                        <p className="desc mb-0 fw-semibold text-dark">
                          {shippingInfo.name}
                        </p>
                        <p className="desc mt--4 text-muted">
                          {shippingInfo.email}
                        </p>
                        <p className="desc mt--4 text-muted">
                          {shippingInfo.mobile}
                        </p>
                        <p className="desc mt--4 text-muted">
                          {shippingInfo.address}, {shippingInfo.city},{" "}
                          {shippingInfo.district} District ({shippingInfo.postcode})
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 Active: Secure Payment */}
                  <div className="rbt-checkout-single-content active">
                    <span className="rbt-checkout-step">3</span>
                    <div className="rbt-checkout-content-inner w-100">
                      <h5 className="title">Secure Payment</h5>
                      <div className="mb-4" id="paymentMethod" role="list">
                        {/* 
                          Figure 01: Temporarily hidden: Cash on delivery method.
                          Order payments are currently routed through Credit/Debit card or Bank Deposit.
                        */}
                        {/* 
                        <div className="single-payment-methode mt-2">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            onClick={() =>
                              setSelectedPaymentMethod("Cash on delivery")
                            }
                          >
                            <label className="form-check-label w-100 text-dark-emphasis fw-semibold cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                                checked={
                                  selectedPaymentMethod === "Cash on delivery"
                                }
                                onChange={() =>
                                  setSelectedPaymentMethod("Cash on delivery")
                                }
                              />
                              Cash on delivery (Pay when goods arrive)
                            </label>
                          </div>
                          {selectedPaymentMethod === "Cash on delivery" && (
                            <div className="d-sm-flex align-items-center pt-2 pt-sm-1 pb-2 ps-3 ms-2 ms-sm-3">
                              <span className="fs-sm me-3 text-muted">
                                Change required from (optional):
                              </span>
                              <div className="rbt-price-input-grp">
                                <input
                                  type="number"
                                  min={100}
                                  placeholder="e.g. Rs. 5000"
                                  className="form-control form-control-sm"
                                  style={{ maxWidth: "160px" }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        */}

                        {/* Credit or debit card option - Figure 02: Visa and MasterCard option only */}
                        <div className="single-payment-methode mt-2 d-block">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            onClick={() =>
                              setSelectedPaymentMethod("Credit or debit card")
                            }
                          >
                            <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                                checked={
                                  selectedPaymentMethod ===
                                  "Credit or debit card"
                                }
                                onChange={() =>
                                  setSelectedPaymentMethod(
                                    "Credit or debit card"
                                  )
                                }
                              />
                              <span>Credit or debit card</span>

                              {/* Figure 02: Visa and MasterCard Badges ONLY */}
                              <span className="d-inline-flex align-items-center gap-2 ms-2 ms-sm-3">
                                {/* Visa Badge */}
                                <span
                                  className="d-inline-flex align-items-center justify-content-center bg-white px-2 py-1 rounded border"
                                  style={{ height: "26px", minWidth: "44px" }}
                                  title="Visa"
                                >
                                  <svg width="34" height="11" viewBox="0 0 100 32" fill="none">
                                    <path
                                      d="M39.6 1.4L25.8 30.6H17.2L10.5 7.6C10.1 6 9.3 5.4 8 4.6C5.9 3.4 2.8 2.4 0 1.7L0.2 0.7H14.1C15.9 0.7 17.5 1.9 17.9 3.9L21.3 22.1L29.9 1.4H39.6ZM75.2 21.1C75.3 13.1 63.8 12.6 63.9 9C63.9 7.9 65 6.7 67.4 6.4C68.6 6.3 71.9 6.2 75.3 7.8L76.7 1.3C74.8 0.6 72.4 0 69.4 0C60.9 0 54.9 4.5 54.8 11C54.7 15.8 59 18.5 62.3 20.1C65.6 21.7 66.8 22.8 66.8 24.2C66.7 26.4 64.1 27.4 61.7 27.4C57.4 27.5 54.8 26.2 52.8 25.3L51.3 32.1C53.2 33 56.8 33.7 60.5 33.7C69.6 33.7 75.2 29.2 75.2 21.1ZM97.4 30.6H105L98.4 1.4H91.4C89.8 1.4 88.5 2.3 87.9 3.8L75.1 30.6H83.8L85.6 25.6H96.1L97.4 30.6ZM87.9 19.3L92.3 7.3L94.8 19.3H87.9ZM52.4 1.4L45.6 30.6H37.3L44.1 1.4H52.4Z"
                                      fill="#1A1F71"
                                    />
                                  </svg>
                                </span>

                                {/* Mastercard Badge */}
                                <span
                                  className="d-inline-flex align-items-center justify-content-center bg-white px-2 py-1 rounded border"
                                  style={{ height: "26px", minWidth: "44px" }}
                                  title="Mastercard"
                                >
                                  <svg width="32" height="20" viewBox="0 0 38 24" fill="none">
                                    <rect width="38" height="24" rx="3" fill="#0A1E3F" />
                                    <circle cx="15" cy="12" r="7" fill="#EB001B" />
                                    <circle cx="23" cy="12" r="7" fill="#F79E1B" fillOpacity="0.88" />
                                  </svg>
                                </span>
                              </span>
                            </label>
                          </div>
                          {selectedPaymentMethod === "Credit or debit card" && (
                            <div className="mt-2">
                              <CheckoutPaymentForm />
                            </div>
                          )}
                        </div>

                        {/* Bank Deposit / Wire Transfer */}
                        <div className="single-payment-methode mt-2">
                          <div
                            className="rbt-radio-accordion form-check mb-0"
                            role="button"
                            onClick={() =>
                              setSelectedPaymentMethod(
                                "Bank Deposit / Wire Transfer"
                              )
                            }
                          >
                            <label className="form-check-label d-flex align-items-center text-dark-emphasis fw-semibold cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-1 me-sm-2"
                                name="payment-method"
                                checked={
                                  selectedPaymentMethod ===
                                  "Bank Deposit / Wire Transfer"
                                }
                                onChange={() =>
                                  setSelectedPaymentMethod(
                                    "Bank Deposit / Wire Transfer"
                                  )
                                }
                              />
                              Bank Deposit / Wire Transfer
                            </label>
                          </div>
                          {selectedPaymentMethod ===
                            "Bank Deposit / Wire Transfer" && (
                            <div className="p-3 p-sm-4 bg-light rounded mt-2 border border-secondary-subtle">
                              <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                                <h6 className="mb-0 fw-bold text-dark d-flex align-items-center gap-2">
                                  <i className="fa-solid fa-building-columns text-primary" />
                                  {bankDetails.bankName || "COMMERCIAL BANK"}
                                </h6>
                                <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
                                  Official Corporate Account
                                </span>
                              </div>

                              <div className="row g-3 fs-sm">
                                <div className="col-12 col-sm-6">
                                  <span className="text-muted d-block small">
                                    A/C Holder:
                                  </span>
                                  <strong className="text-dark">
                                    {bankDetails.accountHolder ||
                                      "TRANS ASIA CELLULAR PVT LTD"}
                                  </strong>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <span className="text-muted d-block small">
                                    A/C Number:
                                  </span>
                                  <strong className="text-dark font-monospace fs-6">
                                    {bankDetails.accountNumber || "1000060278"}
                                  </strong>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <span className="text-muted d-block small">
                                    Bank:
                                  </span>
                                  <strong className="text-dark">
                                    {bankDetails.bankName || "COMMERCIAL BANK"}
                                  </strong>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <span className="text-muted d-block small">
                                    Branch:
                                  </span>
                                  <strong className="text-dark">
                                    {bankDetails.branchName ||
                                      "KEYZER STREET BRANCH"}
                                  </strong>
                                </div>
                              </div>

                              <div className="mt-3 p-3 rounded bg-white border border-info-subtle small text-dark d-flex align-items-start gap-2">
                                <i className="fa-brands fa-whatsapp text-success fs-5 mt-1" />
                                <div>
                                  <strong>Deposit Instructions & Slip Upload:</strong>
                                  <p className="mb-0 text-muted mt-1">
                                    {bankDetails.instructions ||
                                      "Please transfer the total amount and WhatsApp your deposit slip with Order ID to 077 339 2727"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Terms and conditions */}
                        <div className="form-check mb-lg-4 mt--24">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="accept-terms"
                            defaultChecked
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

                        {/* Place Order & Pay Button */}
                        <div className="text-center mt--12 text-center rbt-btn-area d-block">
                          <button
                            type="button"
                            onClick={handlePlaceOrder}
                            className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 rbt-rounded--4 d-block w-100 border-0"
                          >
                            <span className="icon-left">
                              <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                            </span>
                            <span>Pay {formatCurrency(orderTotal)}</span>
                            <span className="icon-right">
                              <i className="fa-solid fa-money-bill-1-wave ml--4" />
                            </span>
                          </button>
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
