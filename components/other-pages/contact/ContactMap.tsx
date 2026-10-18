"use client";

import { useState } from "react";
import { STORE_LOCATIONS } from "@/data/contact";

interface ContactMapProps {
  selectedLocationId?: string;
  onSelectLocation?: (id: string) => void;
}

export default function ContactMap({
  selectedLocationId,
  onSelectLocation,
}: ContactMapProps) {
  const [localLocationId, setLocalLocationId] = useState<string>("colombo");

  const activeId = selectedLocationId ?? localLocationId;
  const handleSelect = onSelectLocation ?? setLocalLocationId;

  const activeStore =
    STORE_LOCATIONS.find((s) => s.id === activeId) || STORE_LOCATIONS[0];

  return (
    <div
      id="store-map-section"
      className="rbt-component-area rbt-bg-color-gray-light pb--80"
    >
      <div className="container">
        <div className="rbt-map-section-wrapper rbt-section-gap2Top">
          {/* Header bar */}
          <div className="rbt-map-header">
            <div className="rbt-map-header-info">
              <span className="map-pin-icon">
                <i className="fa-solid fa-location-dot" />
              </span>
              <div className="map-header-text">
                <h5 className="map-header-title">
                  {activeStore.name}
                  <span
                    className={`rbt-card-badge ${
                      activeStore.isMain ? "main-badge" : ""
                    }`}
                  >
                    {activeStore.badge}
                  </span>
                </h5>
                <p className="map-header-subtitle">
                  {activeStore.companyName}, {activeStore.address}
                </p>
              </div>
            </div>

            <div className="rbt-map-header-actions">
              {/* Quick toggle between stores */}
              <div
                className="rbt-map-toggle-group"
                role="tablist"
                aria-label="Select store location on map"
              >
                {STORE_LOCATIONS.map((store) => (
                  <button
                    key={store.id}
                    type="button"
                    className={`rbt-map-toggle-btn ${
                      store.id === activeStore.id ? "active" : ""
                    }`}
                    onClick={() => handleSelect(store.id)}
                    aria-pressed={store.id === activeStore.id}
                  >
                    <i className="fa-sharp fa-regular fa-location-dot" />
                    {store.name}
                  </button>
                ))}
              </div>

              {/* Direct Link to Google Maps */}
              <a
                href={activeStore.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rbt-map-open-btn"
                title={`Open ${activeStore.name} in Google Maps`}
              >
                <span>Open in Maps</span>
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rbt-map-iframe-container">
            <iframe
              key={activeStore.id}
              className="w-100"
              src={activeStore.embedUrl}
              height={520}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeStore.name} Location Map`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
