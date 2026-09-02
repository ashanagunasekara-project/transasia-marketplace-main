"use client";

import { CloseIcon } from "../svg-icons";
import Link from "next/link";
import Image from "next/image";
import AddPaymentMethodForm from "./AddPaymentMethodForm";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { useState } from "react";

export default function AddPaymentMethod() {
  const { close } = useManagedModalPanel("addPaymentMethodModal");
  const [activeTab, setActiveTab] = useState<"card" | "paypal">("card");
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="addPaymentMethodModal"
      tabIndex={-1}
      aria-labelledby="addPaymentMethodModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog rbt-register-form-modal modal-dialog-centered">
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
            <div className="rbt-login-form rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-login-form-inner">
                <div className="rbt-login-form-top">
                  <div className="logo">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <h6
                    className="rbt-title rbt-text-bold mb--16"
                    id="addPaymentMethodModalLabel"
                  >
                    Add new payment method
                  </h6>
                  <div className="rbt-tab rbt-round-shape-tab">
                    {/* Start tabs */}
                    <ul
                      className="nav nav-tabs"
                      id="registerFormTab1"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link${activeTab === "card" ? " active" : ""}`}
                          id="rbt-form-tab-id-5"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-1"
                          aria-selected={activeTab === "card"}
                          onClick={() => setActiveTab("card")}
                        >
                          <i className="fa-regular fa-credit-card-front" />
                          Card
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link${activeTab === "paypal" ? " active" : ""}`}
                          id="rbt-form-tab-id-6"
                          type="button"
                          role="tab"
                          aria-controls="rbt-form-tab-pane-2"
                          aria-selected={activeTab === "paypal"}
                          onClick={() => setActiveTab("paypal")}
                        >
                          <i className="fa-brands fa-paypal" />
                          Paypal
                        </button>
                      </li>
                    </ul>
                    {/* End tabs */}
                    <AddPaymentMethodForm activeTab={activeTab} onCancel={close} />
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
