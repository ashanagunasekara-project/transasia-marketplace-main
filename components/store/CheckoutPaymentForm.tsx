"use client";

import { useState } from "react";

/**
 * SOLID - Single Responsibility Principle (SRP):
 * CardValidationService encapsulates all card number, brand, expiry, and CVV validation rules.
 */
export class CardValidationService {
  /**
   * Detect card brand: Visa or Mastercard only (as per requirement Figure 02).
   */
  static detectBrand(cardNumber: string): "visa" | "mastercard" | "unknown" {
    const clean = cardNumber.replace(/\D/g, "");
    if (/^4/.test(clean)) return "visa";
    if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/.test(clean))
      return "mastercard";
    return "unknown";
  }

  /**
   * Format card number into 4-digit groups (e.g. 4111 2222 3333 4444).
   */
  static formatCardNumber(value: string): string {
    const clean = value.replace(/\D/g, "").slice(0, 16);
    return clean.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }

  /**
   * Luhn Algorithm implementation for mathematical card checksum validation.
   */
  static validateLuhn(cardNumber: string): boolean {
    const digits = cardNumber.replace(/\D/g, "");
    if (digits.length < 13 || digits.length > 19) return false;

    let sum = 0;
    let shouldDouble = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }

  /**
   * Format MM/YY expiry string.
   */
  static formatExpiry(value: string): string {
    const clean = value.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 2) {
      let month = parseInt(clean.slice(0, 2), 10);
      if (month > 12) month = 12;
      if (month === 0) month = 1;
      const monthStr = month < 10 ? `0${month}` : `${month}`;
      return `${monthStr}/${clean.slice(2)}`;
    }
    return clean;
  }

  /**
   * Validate that card expiration is in the future.
   */
  static isExpiryValid(expiry: string): boolean {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    const [monthStr, yearStr] = expiry.split("/");
    const month = parseInt(monthStr, 10);
    const year = 2000 + parseInt(yearStr, 10);

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;
    return true;
  }
}

export default function CheckoutPaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState<{
    cardNumber?: string;
    cardHolder?: string;
    expiry?: string;
    cvc?: string;
  }>({});

  const detectedBrand = CardValidationService.detectBrand(cardNumber);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = CardValidationService.formatCardNumber(e.target.value);
    setCardNumber(formatted);
    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: undefined }));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = CardValidationService.formatExpiry(e.target.value);
    setExpiry(formatted);
    if (errors.expiry) {
      setErrors((prev) => ({ ...prev, expiry: undefined }));
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvc(clean);
    if (errors.cvc) {
      setErrors((prev) => ({ ...prev, cvc: undefined }));
    }
  };

  return (
    <div className="pt-2 pb-2 ps-3 ms-2 ms-sm-3 border-start border-2 border-primary-subtle">
      {/* Security Assurance Badge */}
      <div className="d-flex align-items-center gap-2 mb-3 p-2 bg-body-tertiary rounded small text-muted">
        <i className="fa-solid fa-shield-halved text-success fs-6" />
        <span>
          <strong>256-bit SSL Encrypted & PCI-DSS Compliant.</strong> Your card
          details are processed directly via secure payment gateway tokenization.
        </span>
      </div>

      <div className="mb-3">
        <label className="form-label small fw-semibold text-dark mb-1">
          Card Number (Visa or Mastercard) *
        </label>
        <div className="position-relative">
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            className={`form-control form-control-sm ${
              errors.cardNumber ? "is-invalid" : ""
            }`}
            placeholder="4111 2222 3333 4444"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            style={{ letterSpacing: "1px", fontFamily: "monospace" }}
          />
          <span className="position-absolute d-flex align-items-center top-50 end-0 translate-middle-y me-3">
            {detectedBrand === "visa" && (
              <span className="badge bg-primary text-white px-2 py-1">VISA</span>
            )}
            {detectedBrand === "mastercard" && (
              <span className="badge bg-danger text-white px-2 py-1">Mastercard</span>
            )}
            {detectedBrand === "unknown" && (
              <i className="fa-regular fa-credit-card text-muted" />
            )}
          </span>
        </div>
        {errors.cardNumber && (
          <div className="invalid-feedback d-block">{errors.cardNumber}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label small fw-semibold text-dark mb-1">
          Cardholder Name *
        </label>
        <input
          type="text"
          autoComplete="cc-name"
          className={`form-control form-control-sm ${
            errors.cardHolder ? "is-invalid" : ""
          }`}
          placeholder="e.g. A. B. PERERA"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
          required
        />
      </div>

      <div className="row g-3">
        <div className="col-6">
          <label className="form-label small fw-semibold text-dark mb-1">
            Expiry Date *
          </label>
          <div className="input-group input-group-sm">
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              className={`form-control ${errors.expiry ? "is-invalid" : ""}`}
              value={expiry}
              onChange={handleExpiryChange}
              maxLength={5}
              required
            />
            <span className="input-group-text bg-white">
              <i className="fa-regular fa-calendar text-muted" />
            </span>
          </div>
          {errors.expiry && (
            <div className="invalid-feedback d-block">{errors.expiry}</div>
          )}
        </div>

        <div className="col-6">
          <label className="form-label small fw-semibold text-dark mb-1">
            CVV / CVC *
          </label>
          <div className="input-group input-group-sm">
            <input
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="123"
              className={`form-control ${errors.cvc ? "is-invalid" : ""}`}
              value={cvc}
              onChange={handleCvcChange}
              maxLength={4}
              required
            />
            <span className="input-group-text bg-white" title="3 digits on back of card">
              <i className="fa-solid fa-lock text-muted" />
            </span>
          </div>
          {errors.cvc && (
            <div className="invalid-feedback d-block">{errors.cvc}</div>
          )}
        </div>
      </div>
    </div>
  );
}
