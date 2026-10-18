"use client";

import {
  PhoneReceiverIcon,
  PaperPlaneIcon,
  MessengerIcon,
  EnvelopeIcon,
} from "../../svg-icons";
import Tooltip from "@/components/common/ui/Tooltip";
import ContactForm from "./ContactForm";
import { STORE_LOCATIONS, contactInfo } from "@/data/contact";

interface ContactProps {
  selectedLocationId?: string;
  onSelectLocation?: (id: string) => void;
}

export default function Contact({
  selectedLocationId = "colombo",
  onSelectLocation,
}: ContactProps) {
  const handleSelect = (id: string) => {
    onSelectLocation?.(id);
    const mapElement = document.getElementById("store-map-section");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="rbt-component-area rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--24 row--16 mt_dec--24">
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-component-section-title rbt-gap--4 mb--24 p-0 border-0 text-left">
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-2 mb--16">
                <span className="rbt-bold--text">Contact Us</span>
              </h2>
              <p className="desc mb--0">
                Email, call, or visit our stores to get in touch with the Trans Asia
                Cellular team. We&apos;re here to help you find the best tech and accessories.
              </p>
            </div>

            <div className="rbt-btn-grp justify-content-between rbt-gap--16 flex-wrap">
              {/* Call via Phone */}
              <Tooltip content="Call Hotline" placement="top">
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <PhoneReceiverIcon />
                  </span>
                  {contactInfo.phone}
                </a>
              </Tooltip>

              {/* Email */}
              <Tooltip content="Send an Email" placement="top">
                <a
                  href={contactInfo.emailHref}
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <EnvelopeIcon />
                  </span>
                  {contactInfo.email}
                </a>
              </Tooltip>

              {/* Telegram */}
              <Tooltip content="Chat on Telegram" placement="top">
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <PaperPlaneIcon />
                  </span>
                  Telegram
                </a>
              </Tooltip>

              {/* Messenger */}
              <Tooltip content="Chat on Messenger" placement="top">
                <a
                  href={contactInfo.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <MessengerIcon />
                  </span>
                  Messenger
                </a>
              </Tooltip>
            </div>

            <div className="row row--16 mt--24 mt_sm--0 mt_md--0">
              {STORE_LOCATIONS.map((store) => {
                const isSelected = selectedLocationId === store.id;

                return (
                  <div
                    key={store.id}
                    className="col-12 col-md-6 col-lg-6 mt--24"
                  >
                    <div
                      className={`rbt-location-card style-two ${
                        isSelected ? "is-active" : ""
                      }`}
                      onClick={() => handleSelect(store.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelect(store.id);
                        }
                      }}
                      aria-label={`Select ${store.name} location`}
                    >
                      <div className="inner">
                        {isSelected && (
                          <div className="rbt-card-active-indicator">
                            <i className="fa-solid fa-circle-check" />
                            <span>Showing on Map</span>
                          </div>
                        )}

                        <h6 className="rbt-location-card-title d-flex align-items-center justify-content-between flex-wrap">
                          <span>
                            <i className="fa-sharp fa-regular fa-location-dot mr--8" />
                            {store.name}
                          </span>
                          <span
                            className={`rbt-card-badge ${
                              store.isMain ? "main-badge" : ""
                            }`}
                          >
                            {store.badge}
                          </span>
                        </h6>

                        <p className="rbt-location-card-text">
                          {store.companyName}, {store.address}
                        </p>

                        <ul className="rbt-contact-info-list">
                          <li>
                            <span>Phone : </span>
                            <a
                              href={`tel:${store.phoneRaw}`}
                              className="rbt-contact-info-single color-primary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {store.phone}
                            </a>
                          </li>
                          <li>
                            <span>Email : </span>
                            <a
                              href={`mailto:${store.email}`}
                              className="rbt-contact-info-single color-primary"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {store.email}
                            </a>
                          </li>
                        </ul>

                        <div className="rbt-card-actions">
                          <button
                            type="button"
                            className={`btn-pin-map ${
                              isSelected ? "is-pinned" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelect(store.id);
                            }}
                          >
                            <i
                              className={
                                isSelected
                                  ? "fa-solid fa-location-dot"
                                  : "fa-regular fa-map"
                              }
                            />
                            {isSelected ? "Pinned on Map" : "View on Map"}
                          </button>

                          <a
                            href={store.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-open-maps"
                            onClick={(e) => e.stopPropagation()}
                            title="Open direct location in Google Maps app or site"
                          >
                            <span>Open in Maps</span>
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-12 col-xl-6 mt--24">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
