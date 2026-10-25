"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MiniCheckout from "./MiniCheckout";
import { formatCurrency } from "@/lib/price";

interface DeliveryTimeOption {
  dayLabel: string;
  slots: string[];
}

const DELIVERY_SCHEDULE: DeliveryTimeOption[] = [
  { dayLabel: "Monday, 13", slots: ["12:00 - 15:00", "17:00 - 20:00"] },
  { dayLabel: "Tuesday, 14", slots: ["09:00 - 12:00", "14:00 - 19:00"] },
  { dayLabel: "Wednesday, 15", slots: ["09:00 - 12:00", "14:00 - 19:00"] },
  { dayLabel: "Thursday, 16", slots: ["12:00 - 15:00", "17:00 - 20:00"] },
  { dayLabel: "Friday, 17", slots: ["12:00 - 15:00", "17:00 - 20:00"] },
];

export default function Checkout2() {
  const router = useRouter();

  // Selected shipping method: "DOMEX_COURIER" | "STORE_PICKUP_COLOMBO" | "LOCAL_SHIPPING"
  const [shippingMethod, setShippingMethod] = useState<string>("DOMEX_COURIER");

  // Selected time slot for courier delivery (defaults to Monday, 13 | 12:00 - 15:00)
  const [selectedDay, setSelectedDay] = useState<string>("Monday, 13");
  const [selectedSlot, setSelectedSlot] = useState<string>("12:00 - 15:00");

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
          if (parsed.deliveryTimeSlot) {
            const parts = parsed.deliveryTimeSlot.split(" | ");
            if (parts.length === 2) {
              setSelectedDay(parts[0]);
              setSelectedSlot(parts[1]);
            }
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

  const handleSelectSlot = (day: string, slot: string) => {
    setSelectedDay(day);
    setSelectedSlot(slot);
  };

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();

    const currentFee =
      shippingMethod === "DOMEX_COURIER"
        ? activeCourierCost
        : shippingMethod === "LOCAL_SHIPPING"
        ? localShippingRate
        : 0;

    const fullSlotString = `${selectedDay} | ${selectedSlot}`;

    const deliveryState = {
      postcode,
      district,
      deliveryMethod: shippingMethod,
      shippingFee: currentFee,
      deliveryTimeSlot: shippingMethod === "DOMEX_COURIER" ? fullSlotString : "Standard",
      estimatedDelivery: fullSlotString,
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
                        {/* Option 1: Courier delivery (Figure 01 & 02) */}
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

                          {/* Figure 02: Courier delivery slot picker */}
                          {shippingMethod === "DOMEX_COURIER" && (
                            <div className="rbt-courier-shipping-area pb-4 ps-3 ms-2 ms-sm-3 border-top pt-3">
                              <p className="fs-sm mb--12 fw-medium text-dark">
                                Choose a courier delivery time convenient for you:
                              </p>

                              <div className="rbt-delivery-input-wrapper mt--12 d-flex flex-wrap gap-2 justify-content-between">
                                {DELIVERY_SCHEDULE.map((item) => (
                                  <div
                                    key={item.dayLabel}
                                    className="rbt-single-input-box text-center p-2 rounded-3 bg-white border flex-grow-1"
                                    style={{ minWidth: "120px" }}
                                  >
                                    <div className="h6 fs-sm pb-1 mb-2 rbt-text-regular fw-bold text-dark border-bottom">
                                      {item.dayLabel}
                                    </div>
                                    {item.slots.map((slot) => {
                                      const isSelected =
                                        selectedDay === item.dayLabel &&
                                        selectedSlot === slot;
                                      return (
                                        <div
                                          key={slot}
                                          className="py-1 my-1 rbt-single-order-checkbox"
                                        >
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleSelectSlot(item.dayLabel, slot)
                                            }
                                            className={`rbt-btn rbt-btn-xs w-100 transition-all ${
                                              isSelected
                                                ? "btn-primary text-white bg-primary border-primary fw-semibold shadow-sm"
                                                : "rbt-btn-border rbt-btn-gray-light text-muted"
                                            }`}
                                            style={{
                                              fontSize: "12px",
                                              padding: "5px 8px",
                                            }}
                                          >
                                            {isSelected && (
                                              <i className="fa-solid fa-check me-1 fs-xs" />
                                            )}
                                            {slot}
                                          </button>
                                        </div>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>

                              <div className="mt-3 p-2 bg-light rounded text-center fs-sm text-dark">
                                Selected time slot:{" "}
                                <strong className="text-primary">
                                  {selectedDay} | {selectedSlot}
                                </strong>
                              </div>
                            </div>
                          )}
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

                          {shippingMethod === "LOCAL_SHIPPING" && (
                            <div className="rbt-local-shipping-area pb-4 ps-3 ms-2 ms-sm-3 border-top pt-3">
                              <div
                                className="alert rbt-alert-brand d-flex align-items-center alert-info mb-3 py-2"
                                role="alert"
                              >
                                <i className="fa-regular fa-circle-info me-2 text-info" />
                                <div className="fs-sm">
                                  Local shipping takes approximately{" "}
                                  <span className="text-info-emphasis fw-semibold">
                                    1 - 2
                                  </span>{" "}
                                  business days.
                                </div>
                              </div>
                              <p className="fs-sm mb-0">
                                Estimated delivery window:{" "}
                                <span className="text-body-emphasis fw-medium">
                                  Within 48 Hours
                                </span>
                              </p>
                            </div>
                          )}
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
