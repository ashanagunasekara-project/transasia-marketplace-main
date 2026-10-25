"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MiniCheckout from "./MiniCheckout";
import { formatCurrency } from "@/lib/price";

export default function Checkout2() {
  const router = useRouter();

  // Selected shipping method: "DOMEX_COURIER" | "STORE_PICKUP_COLOMBO" | "LOCAL_SHIPPING"
  const [shippingMethod, setShippingMethod] = useState<string>("DOMEX_COURIER");

  // Destination context (loaded from step 1 or default)
  const [postcode, setPostcode] = useState<string>("00100");
  const [district, setDistrict] = useState<string>("Colombo");
  const [isOutOfColombo, setIsOutOfColombo] = useState<boolean>(false);

  // Configurable shipping rates in Sri Lankan Rupees (Rs.)
  const [colomboCourierRate, setColomboCourierRate] = useState<number>(350);
  const [outOfColomboCourierRate, setOutOfColomboCourierRate] = useState<number>(450);
  const localShippingRate = 650;

  useEffect(() => {
    // Load delivery destination saved from Step 1
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("transasia_checkout_delivery");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.postcode) setPostcode(parsed.postcode);
          if (parsed.district) {
            setDistrict(parsed.district);
            const outOfCol =
              parsed.district.toLowerCase() !== "colombo" &&
              !parsed.postcode?.startsWith("00");
            setIsOutOfColombo(outOfCol);
          }
          if (parsed.deliveryMethod) {
            setShippingMethod(parsed.deliveryMethod);
          }
        }
      } catch (err) {
        console.error("Error reading delivery storage:", err);
      }
    }

    // Attempt to load live configured shipping rates from backend settings
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    fetch(`${apiBase}/api/settings/public`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.data?.shippingRates) {
          if (data.data.shippingRates.colomboCourierFee) {
            setColomboCourierRate(Number(data.data.shippingRates.colomboCourierFee));
          }
          if (data.data.shippingRates.outOfColomboCourierFee) {
            setOutOfColomboCourierRate(
              Number(data.data.shippingRates.outOfColomboCourierFee)
            );
          }
        }
      })
      .catch(() => {
        // Fallback to standard Sri Lanka defaults
      });
  }, []);

  const activeCourierCost = isOutOfColombo
    ? outOfColomboCourierRate
    : colomboCourierRate;

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();

    const currentFee =
      shippingMethod === "DOMEX_COURIER"
        ? activeCourierCost
        : shippingMethod === "LOCAL_SHIPPING"
        ? localShippingRate
        : 0;

    const deliveryState = {
      postcode,
      district,
      deliveryMethod: shippingMethod,
      shippingFee: currentFee,
      estimatedDelivery:
        shippingMethod === "DOMEX_COURIER"
          ? "Standard Delivery (1-3 Business Days)"
          : shippingMethod === "STORE_PICKUP_COLOMBO"
          ? "Standard"
          : "Local Delivery (1-2 Days)",
      updatedAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      try {
        const existing = localStorage.getItem("transasia_checkout_delivery");
        const merged = existing ? { ...JSON.parse(existing), ...deliveryState } : deliveryState;
        localStorage.setItem("transasia_checkout_delivery", JSON.stringify(merged));
      } catch (err) {
        console.error("Failed to persist checkout delivery selection:", err);
      }
    }

    // Seamless single-tab navigation (strictly avoiding disruptive target="_blank")
    router.push("/checkout-shipping");
  };

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
              <div className="rbt-checkout-wrapper-box">
                {/* Step 1: Delivery Details */}
                <div className="rbt-checkout-single-content active">
                  <span className="rbt-checkout-step">1</span>
                  <div className="inner w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="title mb-0">Delivery Details</h5>
                      <span className="badge bg-light text-dark border px-2 py-1 fs-xs">
                        Postcode: {postcode} ({district})
                      </span>
                    </div>

                    <div className="content mt--12">
                      <p className="desc mb--8">
                        Provide your shipping address to ensure a smooth and
                        timely arrival. 🚚
                      </p>

                      <h6 className="h6 border-bottom pb-3 mb-0 mt--12 text-dark fw-bold">
                        Choose shipping method
                      </h6>

                      <div
                        className="rbt-shipping-method mb-lg-4"
                        id="shippingMethod"
                        role="list"
                      >
                        {/* Option 1: Courier delivery (Figure 01 clean without time slot grid) */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0"
                            role="button"
                            onClick={() => setShippingMethod("DOMEX_COURIER")}
                          >
                            <label className="form-check-label d-flex align-items-center py-3 w-100 cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="shipping-method"
                                checked={shippingMethod === "DOMEX_COURIER"}
                                onChange={() => setShippingMethod("DOMEX_COURIER")}
                              />
                              <div>
                                <span className="fw-semibold text-dark">Courier delivery</span>
                                <span className="d-block fs-xs text-muted">
                                  {isOutOfColombo
                                    ? "Island-wide Out of Colombo Delivery (Domex / Fardar)"
                                    : "Colombo & Greater Suburbs Doorstep Delivery"}
                                </span>
                              </div>
                              <span className="b1 ms-auto fw-bold text-primary">
                                {formatCurrency(activeCourierCost)}
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Option 2: Pickup from store */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0"
                            role="button"
                            onClick={() => setShippingMethod("STORE_PICKUP_COLOMBO")}
                          >
                            <label className="form-check-label d-flex align-items-center py-3 w-100 cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="shipping-method"
                                checked={shippingMethod === "STORE_PICKUP_COLOMBO"}
                                onChange={() =>
                                  setShippingMethod("STORE_PICKUP_COLOMBO")
                                }
                              />
                              <div>
                                <span className="fw-semibold text-dark">Pickup from store</span>
                                <span className="d-block fs-xs text-muted">
                                  Colombo Head Office / Kurunegala Branch
                                </span>
                              </div>
                              <span className="b1 ms-auto fw-bold text-success">
                                Free
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Option 3: Local shipping */}
                        <div className="rbt-single-shipping-method rbt-radio-accordion border-bottom">
                          <div
                            className="form-check mb-0"
                            role="button"
                            onClick={() => setShippingMethod("LOCAL_SHIPPING")}
                          >
                            <label className="form-check-label d-flex align-items-center py-3 w-100 cursor-pointer">
                              <input
                                type="radio"
                                className="rbt-form-check-input me-2 me-sm-3"
                                name="shipping-method"
                                checked={shippingMethod === "LOCAL_SHIPPING"}
                                onChange={() => setShippingMethod("LOCAL_SHIPPING")}
                              />
                              <div>
                                <span className="fw-semibold text-dark">Local shipping</span>
                                <span className="d-block fs-xs text-muted">
                                  Expedited courier service within 1-2 business days
                                </span>
                              </div>
                              <span className="b1 ms-auto fw-bold text-primary">
                                {formatCurrency(localShippingRate)}
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Continue Order Process button */}
                        <div className="text-center mt--24 text-center rbt-btn-area">
                          <button
                            type="button"
                            onClick={handleContinue}
                            className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 d-block rbt-rounded--4 w-100 border-0"
                          >
                            <span className="icon-left">
                              <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                            </span>
                            <span>Continue Order Process</span>
                            <span className="icon-right">
                              <i className="fa-regular fa-arrow-right ml--4" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 placeholder */}
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">2</span>
                  <h5 className="title">Shipping Options</h5>
                </div>

                {/* Step 3 placeholder */}
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
