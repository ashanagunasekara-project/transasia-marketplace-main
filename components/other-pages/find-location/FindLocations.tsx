"use client";

import { useState } from "react";
import Link from "next/link";
import { STORE_LOCATIONS, contactInfo } from "@/data/contact";

export default function FindLocations() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>("colombo");

  const activeStore =
    STORE_LOCATIONS.find((s) => s.id === selectedLocationId) || STORE_LOCATIONS[0];

  return (
    <div className="rbt-component-area">
      <div className="container">
        {/* Section title */}
        <div className="row">
          <div className="col-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--24 p-0 border-0 text-center">
              <h2 className="rbt-title mb--8">
                <span className="rbt-text-bold">Our Store Locations</span>
              </h2>
              <p className="description mx-auto" style={{ maxWidth: "600px" }}>
                Visit our official branches in Colombo and Kurunegala for genuine electronics,
                original accessories, official warranty, and hands-on customer support.
              </p>
            </div>
          </div>
        </div>

        {/* Store Location Cards */}
        <div className="row row--16 mt_dec--24 d-flex justify-content-center mb--40">
          {STORE_LOCATIONS.map((store) => {
            const isSelected = store.id === activeStore.id;
            return (
              <div key={store.id} className="col-12 col-md-6 col-lg-5 mt--24">
                <div
                  onClick={() => setSelectedLocationId(store.id)}
                  className={`rbt-card p--24 text-decoration-none h-100 ${
                    isSelected ? "border-primary shadow-sm" : ""
                  }`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "12px",
                    border: isSelected ? "2px solid var(--color-primary, #0d6efd)" : "1px solid #e2e8f0",
                    backgroundColor: isSelected ? "#f8fafc" : "#ffffff",
                    transition: "all 0.2s ease",
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                >
                  <div className="d-flex align-items-center justify-content-between mb--12">
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: isSelected ? "var(--color-primary, #0d6efd)" : "#eff6ff",
                        color: isSelected ? "#ffffff" : "var(--color-primary, #0d6efd)",
                        fontSize: "20px",
                      }}
                    >
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <span
                      className={`badge ${store.isMain ? "bg-primary" : "bg-secondary"} text-white`}
                      style={{ padding: "6px 12px", borderRadius: "20px", fontSize: "12px" }}
                    >
                      {store.badge}
                    </span>
                  </div>

                  <h5 className="mb--8" style={{ fontWeight: 700 }}>
                    {store.name}
                  </h5>

                  <p className="text-muted b2 mb--12" style={{ lineHeight: "1.5" }}>
                    <i className="fa-regular fa-map-pin mr--6 text-primary" />
                    {store.companyName}, {store.address}
                  </p>

                  <div className="store-details mb--16" style={{ fontSize: "14px" }}>
                    <div className="mb--6">
                      <i className="fa-regular fa-clock mr--6 text-muted" />
                      <span>{store.openingHours}</span>
                    </div>
                    <div>
                      <i className="fa-regular fa-phone mr--6 text-muted" />
                      <a href={`tel:${store.phoneRaw}`} className="text-dark font-weight-bold">
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt--12 border-top">
                    <button
                      type="button"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: isSelected ? "var(--color-primary, #0d6efd)" : "#e2e8f0",
                        color: isSelected ? "#ffffff" : "#1e293b",
                        fontWeight: 600,
                        borderRadius: "6px",
                      }}
                    >
                      {isSelected ? "Selected on Map" : "View on Map"}
                    </button>

                    <Link
                      href={store.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-weight-bold"
                      style={{ fontSize: "13px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Open in Google Maps <i className="fa-solid fa-arrow-up-right-from-square ml--4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Header and Pin Information */}
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div
              className="d-flex align-items-center justify-content-between p--16 bg-white border mb--16"
              style={{ borderRadius: "10px", flexWrap: "wrap", gap: "12px" }}
            >
              <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--color-primary, #0d6efd)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-solid fa-location-dot" />
                </span>
                <div>
                  <h6 className="m-0 font-weight-bold">
                    {activeStore.name} ({activeStore.badge})
                  </h6>
                  <small className="text-muted">{activeStore.address}</small>
                </div>
              </div>

              <div className="d-flex align-items-center" style={{ gap: "8px" }}>
                {STORE_LOCATIONS.map((store) => (
                  <button
                    key={store.id}
                    type="button"
                    onClick={() => setSelectedLocationId(store.id)}
                    className={`btn btn-sm ${
                      store.id === activeStore.id ? "btn-primary text-white" : "btn-outline-secondary"
                    }`}
                    style={{ borderRadius: "20px", fontSize: "13px" }}
                  >
                    {store.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Embedded Google Map pinned to Transasia Locations */}
            <div
              className="rbt-google-map bg-color-white shadow-sm"
              style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}
            >
              <iframe
                key={activeStore.id}
                className="w-100"
                src={activeStore.embedUrl}
                height={550}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${activeStore.name} Transasia Location`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
