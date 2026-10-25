"use client";

import { useState, useEffect } from "react";
import MiniCheckout from "./MiniCheckout";
import Link from "next/link";
import CheckoutShippingForm from "./CheckoutShippingForm";

export default function CheckoutShipping() {
  const [postcode, setPostcode] = useState("00100");
  const [estimatedDelivery, setEstimatedDelivery] = useState("Standard");
  const [deliveryMethod, setDeliveryMethod] = useState("Courier delivery");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("transasia_checkout_delivery");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.postcode) setPostcode(parsed.postcode);
          if (parsed.deliveryMethod) {
            if (parsed.deliveryMethod === "DOMEX_COURIER") {
              setDeliveryMethod("Courier delivery");
            } else if (parsed.deliveryMethod.startsWith("STORE_PICKUP")) {
              setDeliveryMethod("Pickup from store");
            } else if (parsed.deliveryMethod === "LOCAL_SHIPPING") {
              setDeliveryMethod("Local shipping");
            }
          }
          if (parsed.estimatedDelivery) {
            setEstimatedDelivery(parsed.estimatedDelivery);
          } else if (parsed.deliveryMethod?.startsWith("STORE_PICKUP")) {
            setEstimatedDelivery("Standard");
          } else {
            setEstimatedDelivery("Standard Delivery (1-3 Business Days)");
          }
        }
      } catch (err) {
        console.error("Failed to read checkout delivery state:", err);
      }
    }
  }, []);

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
              <div className="rbt-checkout-wrapper-box">
                {/* Step 1 Summary: Delivery Details (Figure 05) */}
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
                      <p className="desc mt--4 fw-semibold text-dark">{postcode}</p>

                      <h6 className="h6 mb-0 mt--12 text-muted fs-sm">
                        Estimated delivery date ({deliveryMethod})
                      </h6>
                      <p className="desc mt--4 fw-semibold text-dark">
                        {estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 Form: Shipping Options */}
                <div className="rbt-checkout-single-content active">
                  <span className="rbt-checkout-step">2</span>
                  <div className="inners w-100">
                    <h5 className="title">Shipping Options</h5>
                    <CheckoutShippingForm />
                  </div>
                </div>

                {/* Step 3 Placeholder: Secure Payment */}
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
