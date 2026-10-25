"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
                        {/* Cash on delivery */}
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

                        {/* Credit card */}
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
                          {selectedPaymentMethod === "Credit or debit card" && (
                            <div className="mt-2">
                              <CheckoutPaymentForm />
                            </div>
                          )}
                        </div>

                        {/* Bank Transfer / Slip Upload */}
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
                            <div className="p-3 bg-light rounded mt-2 fs-sm">
                              <p className="mb-1 fw-bold text-dark">
                                Commercial Bank of Ceylon
                              </p>
                              <p className="mb-1 text-muted">
                                Account Name: TransAsia International (Pvt) Ltd
                              </p>
                              <p className="mb-0 text-muted">
                                Account No: 1000 2345 6789 (Bambalapitiya
                                Branch)
                              </p>
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
