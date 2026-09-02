"use client";

import { useState } from "react";

import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import Tooltip from "@/components/common/ui/Tooltip";

export default function CheckoutShippingForm() {
  const [validated, setValidated] = useState(false);
  const [selectedCity, setSelectedCity] = useState("New York");
  const cityOptions = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Dubai",
    "Singapore",
    "Sydney",
    "Berlin",
    "Toronto",
    "Los Angeles",
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
    }

    setValidated(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`needs-validation d-block mt--12 ${validated ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-3 mb-4 mb_sm--12">
        <div className="col">
          <label htmlFor="shipping-fn" className="form-label">
            First name
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="shipping-fn"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your first name.</div>
        </div>
        <div className="col">
          <label htmlFor="shipping-ln" className="form-label">
            Last name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="shipping-ln"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your last name.</div>
        </div>
        <div className="col">
          <label htmlFor="shipping-email" className="form-label">
            Email address
            <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="shipping-email"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="col">
          <label htmlFor="shipping-mobile" className="form-label">
            Mobile number
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="shipping-mobile"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            Please enter your mobile number.
          </div>
        </div>
        <div className="col">
          <label className="form-label">
            City <span className="text-danger">*</span>
          </label>
          <div className="filter-select rbt-modern-select rbt-modern-select-btn search-by-category">
            <SearchableDropdown
              options={cityOptions}
              selected={selectedCity}
              onChange={setSelectedCity}
              placeholder="Select your City"
            />
            {validated &&
              (selectedCity ? (
                <div className="valid-feedback d-block">Looks good!</div>
              ) : (
                <div className="invalid-feedback d-block">
                  Please select a city.
                </div>
              ))}
          </div>
          <input
            type="text"
            required
            readOnly
            tabIndex={-1}
            value={selectedCity}
            className="position-absolute opacity-0 pointer-events-none d-none"
            aria-hidden="true"
          />
        </div>
        <div className="col">
          <label htmlFor="shipping-postcode" className="form-label">
            Postcode <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="shipping-postcode"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your postcode.</div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="shipping-address" className="form-label">
          House / apartment number and street address
          <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="shipping-address"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please enter your address.</div>
      </div>
      <h3 className="h6 mb--8">
        Billing address
        <Tooltip
          content="Uncheck the checkbox below if your Billing address should be different from your Shipping address."
          placement="right"
        >
          <i className="fa-regular fa-circle-info align-middle ms-2 tooltips" />
        </Tooltip>
      </h3>
      <div className="form-check mb-lg-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="same-address"
          defaultChecked
        />
        <label htmlFor="same-address" className="form-check-label">
          Same as delivery address
        </label>
      </div>
      <div className="text-center mt--12 text-center rbt-btn-area">
        <button
          type="submit"
          className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5 d-block rbt-rounded--4"
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
    </form>
  );
}
