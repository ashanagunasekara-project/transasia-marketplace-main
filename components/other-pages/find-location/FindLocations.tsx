"use client";
import { useState } from "react";
import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import Link from "next/link";

const CITY_OPTIONS = [
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

export default function FindLocations() {
  const [selectedCity, setSelectedCity] = useState<string>(CITY_OPTIONS[0]);
  return (
    <div className="rbt-component-are">
      <div className="container">
        {/* Start section title */}
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--16 p-0 border-0 text-center">
              <h6 className="rbt-title mb--8">
                <span className="rbt-text-bold">Locations</span>
              </h6>
            </div>
          </div>
        </div>
        {/* End section title */}
        {/* Start found card area */}
        <div className="row row--12 mt_dec--24 d-flex justify-content-center mb--32">

          {/* Colombo Store */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <Link
              href="https://maps.app.goo.gl/aBG2XeS1BwKtYAwz5"
              target="_blank"
              rel="noopener noreferrer"
              className="rbt-found-location-card text-decoration-none d-block"
              aria-label="View Colombo Store on Google Maps"
            >
              <span className="rbt-location-icon">
                <i className="fa-sharp fa-regular fa-location-dot" />
              </span>

              <p className="rbt-found-location-name">
                Colombo Store
              </p>

              <span className="rbt-found-location">
                Trans Asia Cellular (Pvt) Ltd, 61 1st Cross St,
                Colombo 00110.
              </span>
            </Link>
          </div>

          {/* Kurunegala Store */}
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
            <Link
              href="https://maps.app.goo.gl/3jkdr3cFGCojZwMS6"
              target="_blank"
              rel="noopener noreferrer"
              className="rbt-found-location-card text-decoration-none d-block"
              aria-label="View Kurunegala Store on Google Maps"
            >
              <span className="rbt-location-icon">
                <i className="fa-sharp fa-regular fa-location-dot" />
              </span>

              <p className="rbt-found-location-name">
                Kurunegala Store
              </p>

              <span className="rbt-found-location">
                Trans Asia Cellular (Pvt) Ltd, 19 Katugastota-Kurunegala-Puttalam Hwy,
                Kurunegala.
              </span>
            </Link>
          </div>

        </div>
        {/* End found card area */}
      </div>
    </div>
  );
}