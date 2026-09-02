"use client";
import { CloseIcon } from "../svg-icons";
import { useState } from "react";
import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function DeliveryEdit() {
  const countryOptions = [
    "United States",
    "United Kingdom",
    "Nigeria",
    "South Africa",
    "Kenya",
    "Egypt",
    "Ethiopia",
    "China",
    "India",
    "Japan",
    "South Korea",
    "Saudi Arabia",
  ];
  const cityOptions = [
    "Santa Rosa",
    "Chelsea",
    "Austin",
    "Charlotte",
    "Chicago",
    "Columbus",
    "Dallas",
    "Houston",
    "Jacksonville",
    "Los Angeles",
    "New York",
    "Orlando",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
  ];
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedCity, setSelectedCity] = useState("Santa Rosa");
  const { close } = useManagedModalPanel("deliveryAddressEditModal");

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="deliveryAddressEditModal"
      tabIndex={-1}
      aria-labelledby="deliveryAddressEditModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rbt-cart-edit-area">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <CloseIcon />
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              aria-label="Close"
              onClick={close}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            {/* Start Component Area */}
            <div className="rbt-single-product-area rbt-bg-color-white rbt-content-trs-portion">
              <h5 className="rbt-title rbt-modal-title mb--24">
                Change delivery address
              </h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row row--12 mt_dec--24">
                  <div className="col-md-6 mt--24">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <div className="rbt-input-field-grp mb--0">
                      <div className="rbt-dropdown-select filter-select rbt-modern-select rbt-bordered-style search-by-category w-100">
                        <SearchableDropdown
                          options={countryOptions}
                          selected={selectedCountry}
                          onChange={setSelectedCountry}
                          placeholder="Select Country"
                          searchPlaceholder="Search Country"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <div className="rbt-input-field-grp mb--0">
                      <div className="rbt-dropdown-select filter-select rbt-modern-select rbt-bordered-style search-by-category w-100">
                        <SearchableDropdown
                          options={cityOptions}
                          selected={selectedCity}
                          onChange={setSelectedCity}
                          placeholder="Select City"
                          searchPlaceholder="Search City"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      defaultValue="Tortor St, Santa Rosa, USA"
                    />
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="zip_code" className="form-label">
                      ZIP code
                    </label>
                    <input type="text" id="zip_code" defaultValue="935-9940" />
                  </div>
                  <div className="col-12">
                    <div className="d-flex rbt-gap--16">
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-secondary rbt-btn-md rbt-square-btn mt--24"
                        aria-label="Close"
                        onClick={close}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rbt-btn rbt-btn-md rbt-square-btn mt--24"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
