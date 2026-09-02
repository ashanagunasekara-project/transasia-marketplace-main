"use client";

import { CloseIcon } from "../svg-icons";
import { useState } from "react";
import DropdownSelect from "@/components/common/select/DropdownSelect";
import Tooltip from "@/components/common/ui/Tooltip";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function CallModal() {
  const countryOptions = [
    "United States Of America",
    "Bangladesh",
    "United Kingdom",
    "France",
    "Spain",
  ];
  const [selectedCountry, setSelectedCountry] = useState(
    "United States Of America",
  );
  const [activeTab, setActiveTab] = useState<"instant" | "request">("instant");
  const { close } = useManagedModalPanel("makecallModal");

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="makecallModal"
      tabIndex={-1}
      aria-labelledby="makecallModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog xxs-size modal-dialog-centered">
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
            <div className="rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-notify-modal-content">
                <h5
                  className="rbt-title rbt-text-bold mb--8"
                  id="makecallModalLabel"
                >
                  <span className="mr--4">
                    <i className="fa-regular fa-headset" />
                  </span>
                  Contact To Know the Product Details
                </h5>
                <div className="rbt-info-wrapper d-flex mt--8 rbt-gap--12">
                  <div className="rbt-info-box rbt-notify-box w-100">
                    <p className="b1 mb--16">
                      Want to be Call Back when this product Queries.
                    </p>
                    <div className="rbt-tab rbt-round-shape-tab">
                      {/* Start tabs */}
                      <ul
                        className="nav nav-tabs"
                        id="callFormTab1"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link${activeTab === "instant" ? " active" : ""}`}
                            id="rbt-tab-id-1"
                            type="button"
                            onClick={() => setActiveTab("instant")}
                          >
                            <i className="fa-regular fa-phone-volume" />
                            Make Instant Call
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link${activeTab === "request" ? " active" : ""}`}
                            id="rbt-tab-id-2"
                            type="button"
                            onClick={() => setActiveTab("request")}
                          >
                            <i className="fa-sharp fa-regular fa-phone-arrow-down-left" />
                            Request Call Back
                          </button>
                        </li>
                      </ul>
                      {/* End tabs */}
                      {/* Start tabs content */}
                      <form>
                        <div className="tab-content" id="callFormTab1Content">
                          {activeTab === "instant" && (
                            <div className="tab-pane fade show active">
                              <div className="rbt-btn-grp flex-column rbt-gap--24">
                                {/* Call via Phone */}
                                <Tooltip content="Call via Phone" placement="top">
                                  <a
                                    href="tel:+958445612564"
                                    className="rbt-btn d-block w-100 text-center rbt-btn-modern-hover rbt-bg-color-phone tooltips"
                                  >
                                    <span className="icon">
                                      <i className="fa-regular fa-phone" />
                                    </span>
                                    +9584 4561 2564
                                  </a>
                                </Tooltip>
                                {/* Call via WhatsApp */}
                                <Tooltip
                                  content="Call via WhatsApp"
                                  placement="top"
                                >
                                  <a
                                    href="https://wa.me/958445612564"
                                    target="_blank"
                                    className="rbt-btn d-block w-100 text-center rbt-btn-modern-hover rbt-bg-color-whatsapp tooltips"
                                  >
                                    <span className="icon">
                                      <i className="fa-brands fa-whatsapp" />
                                    </span>
                                    Call via WhatsApp
                                  </a>
                                </Tooltip>
                                {/* Call via Telegram */}
                                <Tooltip
                                  content="Call via Telegram"
                                  placement="top"
                                >
                                  <a
                                    href="https://t.me/+958445612564"
                                    target="_blank"
                                    className="rbt-btn d-block w-100 text-center rbt-btn-modern-hover rbt-bg-color-telegram tooltips"
                                  >
                                    <span className="icon">
                                      <i className="fa-brands fa-telegram" />
                                    </span>
                                    Call via Telegram
                                  </a>
                                </Tooltip>
                                {/* Call via Signal */}
                                <Tooltip content="Call via Signal" placement="top">
                                  <a
                                    href="https://signal.me/#p/+958445612564"
                                    target="_blank"
                                    className="rbt-btn d-block w-100 text-center rbt-btn-modern-hover rbt-bg-color-signal tooltips"
                                  >
                                    <span className="icon">
                                      <i className="fa-solid fa-messages" />
                                    </span>
                                    Call via Signal Messenger
                                  </a>
                                </Tooltip>
                              </div>
                            </div>
                          )}
                          {activeTab === "request" && (
                            <div className="tab-pane fade show active">
                              <div className="rbt-input-field-grp d-flex flex-column rbt-gap--8">
                                <div className="rbt-modern-select rbt-modern-select-round-style country-num-select w-100">
                                  <DropdownSelect
                                    options={countryOptions}
                                    selected={selectedCountry}
                                    onChange={setSelectedCountry}
                                  />
                                </div>
                                <label
                                  className="rbt-field-label mb--0 ml--12"
                                  htmlFor="req-call_email"
                                >
                                  Your Email
                                  <span className="rbt-text-color-danger">
                                    *
                                  </span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  type="email"
                                  placeholder="Email"
                                  id="req-call_email"
                                />
                                <label
                                  className="rbt-field-label mb--0 ml--12"
                                  htmlFor="req-call-number"
                                >
                                  Your Phone Number
                                  <span className="rbt-text-color-danger">
                                    *
                                  </span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  type="number"
                                  placeholder="Phone Number"
                                  id="req-call-number"
                                />
                              </div>
                              <ul className="rbt-signup-radio-list w-100 justify-content-around mt--16 mb--0 pl--12 pr--12">
                                <li className="rbt-check-grp ml--0">
                                  <input
                                    id="rbt-callback-radio-1"
                                    type="radio"
                                    name="rbt-signup-radio"
                                  />
                                  <label htmlFor="rbt-callback-radio-1">
                                    <span className="rbt-lable-text">Call</span>
                                  </label>
                                </li>
                                <li className="rbt-check-grp ml--0">
                                  <input
                                    id="rbt-callback-radio-2"
                                    type="radio"
                                    name="rbt-signup-radio"
                                  />
                                  <label htmlFor="rbt-callback-radio-2">
                                    <span className="rbt-lable-text">SMS</span>
                                  </label>
                                </li>
                                <li className="rbt-check-grp ml--0">
                                  <input
                                    id="rbt-callback-radio-3"
                                    type="radio"
                                    name="rbt-signup-radio"
                                  />
                                  <label htmlFor="rbt-callback-radio-3">
                                    <span className="rbt-lable-text">
                                      Whatsapp
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <button
                                type="submit"
                                className="rbt-btn d-block w-100 mt--24"
                              >
                                SEND
                              </button>
                            </div>
                          )}
                        </div>
                      </form>
                      {/* End tabs content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
