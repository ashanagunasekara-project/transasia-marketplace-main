"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MiniCheckout from "./MiniCheckout";
import { findLocationByPostalCode } from "@/data/sriLankaLocations";

export default function Checkout() {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [matchedLocation, setMatchedLocation] = useState<{
    district: string;
    city: string;
    postalCode: string;
  } | null>(null);

  // Restore existing postcode if previously entered
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("transasia_checkout_delivery");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.postcode) {
            setPostcode(parsed.postcode);
            const loc = findLocationByPostalCode(parsed.postcode);
            if (loc) setMatchedLocation(loc);
          }
        }
      } catch (e) {
        console.error("Failed to parse delivery storage:", e);
      }
    }
  }, []);

  const handlePostcodeChange = (val: string) => {
    // Only allow numbers and limit to 5 digits
    const cleaned = val.replace(/\D/g, "").slice(0, 5);
    setPostcode(cleaned);
    setError(null);

    if (cleaned.length === 5) {
      const match = findLocationByPostalCode(cleaned);
      setMatchedLocation(match);
    } else {
      setMatchedLocation(null);
    }
  };

  const handleCalculateCost = (e: React.FormEvent) => {
    e.preventDefault();

    // Sri Lanka postal codes are strictly 5 digits
    if (!/^\d{5}$/.test(postcode.trim())) {
      setError(
        "Please enter a valid 5-digit Sri Lankan postal code (e.g., 00100 for Colombo 01, 10100 for Battaramulla, or 60000 for Kurunegala)."
      );
      return;
    }

    const loc = findLocationByPostalCode(postcode.trim());
    const deliveryData = {
      postcode: postcode.trim(),
      district: loc?.district || (postcode.startsWith("00") ? "Colombo" : "Other"),
      city: loc?.city || "Local Area",
      updatedAt: new Date().toISOString(),
    };

    if (typeof window !== "undefined") {
      try {
        const existing = localStorage.getItem("transasia_checkout_delivery");
        const merged = existing ? { ...JSON.parse(existing), ...deliveryData } : deliveryData;
        localStorage.setItem("transasia_checkout_delivery", JSON.stringify(merged));
      } catch (err) {
        console.error("Failed to save delivery details:", err);
      }
    }

    router.push("/checkout-delivery-step-two");
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
                    <h5 className="title">Delivery Details</h5>
                    <div className="content">
                      <p className="desc mb--16">
                        Provide your shipping address to ensure a smooth and
                        timely arrival. 🚚
                      </p>

                      <form onSubmit={handleCalculateCost} className="form-area">
                        <div className="w-100">
                          <label htmlFor="postcode" className="form-label fw-semibold">
                            Postcode : <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              className={`form-control form-control-lg ${
                                error ? "is-invalid" : matchedLocation ? "is-valid" : ""
                              }`}
                              id="postcode"
                              placeholder="e.g. 00100, 10100, 60000"
                              value={postcode}
                              onChange={(e) => handlePostcodeChange(e.target.value)}
                              maxLength={5}
                              autoFocus
                            />
                          </div>

                          {/* Matched City / District Feedback */}
                          {matchedLocation && (
                            <div className="alert alert-success d-flex align-items-center mt--12 py-2 px-3 mb-0 fs-sm">
                              <i className="fa-regular fa-circle-check text-success me-2 fs-6" />
                              <div>
                                <strong>Recognized:</strong> {matchedLocation.city},{" "}
                                {matchedLocation.district} District ({matchedLocation.postalCode})
                              </div>
                            </div>
                          )}

                          {/* Error message */}
                          {error && (
                            <div className="invalid-feedback d-block mt--8 fs-sm">
                              <i className="fa-regular fa-circle-exclamation me-1" />
                              {error}
                            </div>
                          )}

                          {/* User-friendly Government Sri Lanka Post portal redirect */}
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt--12 pt-1 border-top">
                            <span className="fs-xs text-muted">
                              <i className="fa-regular fa-circle-info me-1 text-primary" />
                              Sri Lanka postal codes are 5 digits.
                            </span>
                            <a
                              href="https://slpost.gov.lk/postcode_new/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="fs-xs text-primary text-decoration-underline fw-medium d-inline-flex align-items-center hover-primary"
                              title="Search official Sri Lanka Post Office postal codes"
                            >
                              <span>Search official postal code on Sri Lanka Post</span>
                              <i className="fa-sharp fa-regular fa-arrow-up-right-from-square ms-1" />
                            </a>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="rbt-btn splash-btn icon-reverse-right rbt-scroll-trigger fade_in animation-order-6 rbt-rounded--4 border-0 mt--16"
                        >
                          <span className="icon-left">
                            <i className="fa-regular fa-calculator-simple mr--4" />
                          </span>
                          <span>Calculate cost</span>
                          <span className="icon-right">
                            <i className="fa-sharp fa-regular fa-arrow-right ml--4" />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Step 2 Placeholder */}
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">2</span>
                  <h5 className="title">Shipping Options</h5>
                </div>

                {/* Step 3 Placeholder */}
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
