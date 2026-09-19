"use client";

import { useState } from "react";
import { CloseIcon } from "../svg-icons";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { useAuthStore } from "@/context/authStore";

export default function WholesaleUpgradeModal() {
  const { close } = useManagedModalPanel("wholesaleUpgradeModal");
  const { user, applyWholesale, isLoading, error, clearError } = useAuthStore();

  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [brcDocumentUrl, setBrcDocumentUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setSuccessMessage(null);

    if (!businessName || !businessAddress) return;

    const res = await applyWholesale({
      businessName,
      businessAddress,
      ownerName: ownerName || user?.profile?.fullName || undefined,
      brcDocumentUrl: brcDocumentUrl || undefined,
    });

    if (res.success) {
      setSuccessMessage(res.message || "Application submitted successfully!");
    }
  };

  const isPending = user?.wholesaleStatus === "PENDING";
  const isApproved = user?.wholesaleStatus === "APPROVED";

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="wholesaleUpgradeModal"
      tabIndex={-1}
      aria-labelledby="wholesaleUpgradeModalLabel"
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
                  <div className="d-flex align-items-center gap-2 mb--12">
                    <span className="badge bg-primary text-white p--8 rounded">
                      <i className="fa-solid fa-store mr--6" />
                      Wholesale Partnership
                    </span>
                  </div>
                  <h6
                    className="rbt-title rbt-text-bold mb--8"
                    id="wholesaleUpgradeModalLabel"
                  >
                    Register for Wholesale Pricing
                  </h6>
                  <p className="b3 text-muted mb--20">
                    Retail accounts can apply for TransAsia verified wholesale status to unlock commercial wholesale tier pricing.
                  </p>

                  {isApproved ? (
                    <div className="alert alert-success p--16 rounded mb--16">
                      <h6 className="mb--4 text-success">
                        <i className="fa-solid fa-circle-check mr--6" />
                        Wholesale Account Active
                      </h6>
                      <p className="mb--0 b3">
                        Your account is approved (Wholesale ID: {user?.wholesaleCustomerId || "WS-Active"}). You can toggle to Wholesale View anytime using the switch button in the header.
                      </p>
                    </div>
                  ) : isPending || successMessage ? (
                    <div className="alert alert-info p--16 rounded mb--16">
                      <h6 className="mb--4 text-info">
                        <i className="fa-solid fa-clock mr--6" />
                        Application Under Verification
                      </h6>
                      <p className="mb--0 b3">
                        {successMessage ||
                          `Your application for "${user?.profile?.businessName || businessName || "your business"}" is currently pending review by TransAsia administration. You will be able to switch to Wholesale view as soon as it is approved.`}
                      </p>
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-sm mt--12"
                        onClick={close}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {error && (
                        <div className="alert alert-danger p--12 rounded mb--16 b3">
                          {error}
                        </div>
                      )}

                      <div className="rbt-input-field-grp mb--12">
                        <label className="rbt-field-label" htmlFor="upgrade_biz_name">
                          Registered Business / Shop Name
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          placeholder="e.g. Lanka Tech Traders (Pvt) Ltd"
                          type="text"
                          id="upgrade_biz_name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="rbt-input-field-grp mb--12">
                        <label className="rbt-field-label" htmlFor="upgrade_biz_address">
                          Business Address
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          placeholder="e.g. 128 Main Street, Colombo 11"
                          type="text"
                          id="upgrade_biz_address"
                          value={businessAddress}
                          onChange={(e) => setBusinessAddress(e.target.value)}
                          required
                        />
                      </div>

                      <div className="rbt-input-field-grp mb--12">
                        <label className="rbt-field-label" htmlFor="upgrade_owner_name">
                          Proprietor / Contact Person Name
                        </label>
                        <input
                          className="rbt-input-field"
                          placeholder={user?.profile?.fullName || "Full Name"}
                          type="text"
                          id="upgrade_owner_name"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                        />
                      </div>

                      <div className="rbt-input-field-grp mb--16">
                        <label className="rbt-field-label" htmlFor="upgrade_brc">
                          Business Reg. No. (BRC) / Certificate Reference
                        </label>
                        <input
                          className="rbt-input-field"
                          placeholder="e.g. PV-12345 or certificate link"
                          type="text"
                          id="upgrade_brc"
                          value={brcDocumentUrl}
                          onChange={(e) => setBrcDocumentUrl(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mb--12"
                        disabled={isLoading || !businessName || !businessAddress}
                      >
                        {isLoading ? "Submitting..." : "Submit Wholesale Application"}
                      </button>

                      <p className="b4 text-muted text-center mb--0">
                        Verification is typically reviewed within 24 hours. You can continue shopping with standard retail prices in the meantime.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
