"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseIcon } from "../svg-icons";
import ReviewSlider from "../other-pages/ReviewSlider";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import {
  getPasswordStrength,
  getPasswordValidationError,
} from "@/lib/passwordValidation";
import PasswordStrengthIndicator from "@/components/common/forms/PasswordStrengthIndicator";
import { useAuthStore } from "@/context/authStore";
import { useUiStore } from "@/context/uiStore";

export default function Signup() {
  const { close } = useManagedModalPanel("signupModal");
  const {
    registerRegular,
    registerWholesale,
    isLoading,
    error,
    clearError,
  } = useAuthStore();
  const showToaster = useUiStore((s) => s.showToaster);

  const [customerType, setCustomerType] = useState<"retail" | "wholesale">("retail");

  // Common Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Wholesale specific fields
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [brcDocumentUrl, setBrcDocumentUrl] = useState("");

  const passwordStrength = getPasswordStrength(password);
  const passwordError = getPasswordValidationError(password, confirmPassword, {
    requireStrong: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (passwordError || !password || !confirmPassword || !fullName || !phone) {
      return;
    }

    if (customerType === "retail") {
      const res = await registerRegular({
        fullName,
        phone,
        email: email || undefined,
        password,
      });
      if (res.success) {
        showToaster("Retail account registered successfully! You are now logged in.");
        close();
      }
    } else {
      if (!businessName || !businessAddress) {
        return;
      }
      const res = await registerWholesale({
        fullName,
        phone,
        email: email || undefined,
        password,
        businessName,
        businessAddress,
        ownerName: ownerName || fullName,
        brcDocumentUrl: brcDocumentUrl || undefined,
      });
      if (res.success) {
        showToaster("Wholesale registration submitted! Pricing will update upon approval.");
        close();
      }
    }
  };

  return (
    <div
      className="rbt-default-modal has-rbt-top-folder-shape modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
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
                    className="rbt-title rbt-text-bold mb--12"
                    id="signupModalLabel"
                  >
                    Create Customer Account
                  </h6>

                  {/* Customer Type Selector */}
                  <div className="d-flex rounded p--4 mb--16 bg-light gap-2">
                    <button
                      type="button"
                      className={`rbt-btn rbt-btn-sm flex-grow-1 ${
                        customerType === "retail"
                          ? "rbt-btn-gradient text-white"
                          : "bg-transparent text-dark border-0"
                      }`}
                      style={{ borderRadius: "8px", fontWeight: 600 }}
                      onClick={() => {
                        setCustomerType("retail");
                        clearError();
                      }}
                    >
                      <i className="fa-solid fa-user mr--6" />
                      Retail Customer
                    </button>
                    <button
                      type="button"
                      className={`rbt-btn rbt-btn-sm flex-grow-1 ${
                        customerType === "wholesale"
                          ? "rbt-btn-gradient text-white"
                          : "bg-transparent text-dark border-0"
                      }`}
                      style={{ borderRadius: "8px", fontWeight: 600 }}
                      onClick={() => {
                        setCustomerType("wholesale");
                        clearError();
                      }}
                    >
                      <i className="fa-solid fa-store mr--6" />
                      Wholesale Customer
                    </button>
                  </div>

                  {error && (
                    <div className="alert alert-danger p--10 rounded mb--16 b3">
                      <i className="fa-solid fa-circle-exclamation mr--6" />
                      {error}
                    </div>
                  )}

                  {customerType === "wholesale" && (
                    <div className="alert alert-warning p--10 rounded mb--16 b4">
                      <i className="fa-solid fa-briefcase mr--6 text-primary" />
                      Wholesale accounts require verification. Standard retail prices will display until your business application is approved.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Common Fields */}
                    <div className="rbt-input-field-grp mb--12">
                      <label className="rbt-field-label" htmlFor="modal_reg_name">
                        Full Name
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <input
                        className="rbt-input-field"
                        placeholder="Your full name"
                        type="text"
                        id="modal_reg_name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="row g-2 mb--12">
                      <div className="col-md-6">
                        <div className="rbt-input-field-grp">
                          <label className="rbt-field-label" htmlFor="modal_reg_phone">
                            Mobile Phone
                            <span className="rbt-text-color-danger">*</span>
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="e.g. 0771234567"
                            type="text"
                            id="modal_reg_phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rbt-input-field-grp">
                          <label className="rbt-field-label" htmlFor="modal_reg_email">
                            Email (Optional)
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="email@example.com"
                            type="email"
                            id="modal_reg_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Wholesale Specific Fields */}
                    {customerType === "wholesale" && (
                      <div className="wholesale-extra-fields p--12 rounded mb--12 bg-light border">
                        <h6 className="b3 font-weight-bold mb--8 text-primary">
                          <i className="fa-solid fa-building mr--6" />
                          Business Verification Details
                        </h6>

                        <div className="rbt-input-field-grp mb--8">
                          <label className="rbt-field-label" htmlFor="modal_reg_biz_name">
                            Business / Company Name
                            <span className="rbt-text-color-danger">*</span>
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="e.g. Lanka Tech Traders (Pvt) Ltd"
                            type="text"
                            id="modal_reg_biz_name"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required={customerType === "wholesale"}
                          />
                        </div>

                        <div className="rbt-input-field-grp mb--8">
                          <label className="rbt-field-label" htmlFor="modal_reg_biz_addr">
                            Business Address
                            <span className="rbt-text-color-danger">*</span>
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="Store / office address"
                            type="text"
                            id="modal_reg_biz_addr"
                            value={businessAddress}
                            onChange={(e) => setBusinessAddress(e.target.value)}
                            required={customerType === "wholesale"}
                          />
                        </div>

                        <div className="row g-2">
                          <div className="col-md-6">
                            <div className="rbt-input-field-grp">
                              <label className="rbt-field-label" htmlFor="modal_reg_owner">
                                Owner Name
                              </label>
                              <input
                                className="rbt-input-field"
                                placeholder="Proprietor / Director"
                                type="text"
                                id="modal_reg_owner"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="rbt-input-field-grp">
                              <label className="rbt-field-label" htmlFor="modal_reg_brc">
                                BRC Ref / Number
                              </label>
                              <input
                                className="rbt-input-field"
                                placeholder="PV-XXXXX"
                                type="text"
                                id="modal_reg_brc"
                                value={brcDocumentUrl}
                                onChange={(e) => setBrcDocumentUrl(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Password Fields */}
                    <div className="rbt-input-field-grp mb--12">
                      <label className="rbt-field-label" htmlFor="modal_reg_pass">
                        Password
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          className="rbt-input-field"
                          placeholder="Create password"
                          type={showPassword ? "text" : "password"}
                          id="modal_reg_pass"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="rbt-password-toggle-btn"
                          aria-label="Toggle password"
                        >
                          <i
                            className={`fa-regular ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="rbt-input-field-grp mb--12">
                      <label className="rbt-field-label" htmlFor="modal_reg_cpass">
                        Confirm Password
                        <span className="rbt-text-color-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          className="rbt-input-field"
                          placeholder="Confirm password"
                          type={showConfirmPassword ? "text" : "password"}
                          id="modal_reg_cpass"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          className="rbt-password-toggle-btn"
                          aria-label="Toggle password"
                        >
                          <i
                            className={`fa-regular ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {passwordError && (
                      <p className="rbt-form-error mb--12">{passwordError}</p>
                    )}
                    {password.length > 0 && (
                      <div className="mb--12">
                        <PasswordStrengthIndicator
                          label={passwordStrength.label}
                          hint={`Password Strength: ${passwordStrength.label}`}
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="rbt-btn d-block w-100 mb--16"
                      disabled={
                        isLoading ||
                        Boolean(passwordError) ||
                        !password ||
                        !confirmPassword ||
                        !fullName ||
                        !phone ||
                        (customerType === "wholesale" && (!businessName || !businessAddress))
                      }
                    >
                      {isLoading
                        ? "Registering..."
                        : customerType === "wholesale"
                        ? "Register Wholesale Account"
                        : "Create Retail Account"}
                    </button>
                  </form>

                  <div className="rbt-login-system-switch rbt-link-hover text-center">
                    Already have an account?
                    <ModalTriggerButton
                      openModalName="signinModal"
                      className="rbt-switch-btn ml--6 text-primary font-weight-bold"
                    >
                      <span>Sign In</span>
                    </ModalTriggerButton>
                  </div>
                </div>

                <ReviewSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
