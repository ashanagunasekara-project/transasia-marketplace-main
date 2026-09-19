"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseIcon } from "../svg-icons";
import ReviewSlider from "../other-pages/ReviewSlider";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { useAuthStore } from "@/context/authStore";
import { useUiStore } from "@/context/uiStore";

export default function Signin() {
  const { close } = useManagedModalPanel("signinModal");
  const {
    loginPassword,
    sendOtp,
    verifyOtp,
    loginWholesale,
    isLoading,
    error,
    clearError,
  } = useAuthStore();
  const showToaster = useUiStore((s) => s.showToaster);

  // Customer Type Tab: "retail" | "wholesale"
  const [customerType, setCustomerType] = useState<"retail" | "wholesale">("retail");

  // Retail Sub Tab: "otp" | "password"
  const [retailMethod, setRetailMethod] = useState<"otp" | "password">("otp");

  // Retail OTP form state
  const [phone, setPhone] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [debugOtp, setDebugOtp] = useState<string | null>(null);

  // Password login form state
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Wholesale form state
  const [wholesaleId, setWholesaleId] = useState("");
  const [wholesalePassword, setWholesalePassword] = useState("");

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!phone) return;

    const res = await sendOtp(phone);
    if (res.success) {
      setOtpSent(true);
      if (res.debugOtp) setDebugOtp(res.debugOtp);
      showToaster("Verification code sent to your phone");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!phone || !otpCode) return;

    const res = await verifyOtp(phone, otpCode);
    if (res.success) {
      showToaster("Welcome back! Signed in successfully");
      close();
    }
  };

  const handleRetailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!identifier || !password) return;

    const res = await loginPassword(identifier, password);
    if (res.success) {
      showToaster("Signed in successfully");
      close();
    }
  };

  const handleWholesaleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!wholesaleId || !wholesalePassword) return;

    const res = await loginWholesale({
      wholesaleCustomerId: wholesaleId,
      password: wholesalePassword,
    });
    if (res.success) {
      showToaster("Wholesale access granted! Wholesale pricing activated.");
      close();
    }
  };

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="signinModal"
      tabIndex={-1}
      aria-labelledby="signinModalLabel"
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
                    id="signinModalLabel"
                  >
                    Customer Sign In
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

                  {/* Retail Customer View */}
                  {customerType === "retail" && (
                    <div className="retail-login-block">
                      <div className="rbt-tab rbt-round-shape-tab mb--16">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${
                                retailMethod === "otp" ? " active" : ""
                              }`}
                              type="button"
                              onClick={() => {
                                setRetailMethod("otp");
                                clearError();
                              }}
                            >
                              <i className="fa-sharp fa-regular fa-phone" />
                              SMS OTP
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${
                                retailMethod === "password" ? " active" : ""
                              }`}
                              type="button"
                              onClick={() => {
                                setRetailMethod("password");
                                clearError();
                              }}
                            >
                              <i className="fa-sharp fa-regular fa-key" />
                              Password
                            </button>
                          </li>
                        </ul>
                      </div>

                      {retailMethod === "otp" && (
                        <div>
                          {!otpSent ? (
                            <form onSubmit={handleSendOtp}>
                              <div className="rbt-input-field-grp mb--16">
                                <label
                                  className="rbt-field-label"
                                  htmlFor="modal_retail_phone"
                                >
                                  Mobile Phone Number
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  placeholder="e.g. 0773392727"
                                  type="text"
                                  id="modal_retail_phone"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="rbt-btn d-block w-100 mb--16"
                                disabled={isLoading || !phone}
                              >
                                {isLoading ? "Sending Code..." : "Send Verification Code"}
                              </button>
                            </form>
                          ) : (
                            <form onSubmit={handleVerifyOtp}>
                              <div className="alert alert-info p--8 rounded mb--12 b4">
                                Verification code sent to <strong>{phone}</strong>
                                {debugOtp && (
                                  <span className="badge bg-warning text-dark ml--8">
                                    Code: {debugOtp}
                                  </span>
                                )}
                              </div>
                              <div className="rbt-input-field-grp mb--16">
                                <label
                                  className="rbt-field-label"
                                  htmlFor="modal_retail_otp"
                                >
                                  Enter 6-Digit Code
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  placeholder="000000"
                                  type="text"
                                  maxLength={6}
                                  id="modal_retail_otp"
                                  value={otpCode}
                                  onChange={(e) => setOtpCode(e.target.value)}
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="rbt-btn d-block w-100 mb--12"
                                disabled={isLoading || otpCode.length < 4}
                              >
                                {isLoading ? "Verifying..." : "Verify & Sign In"}
                              </button>
                              <button
                                type="button"
                                className="btn btn-link b4 text-muted w-100"
                                onClick={() => setOtpSent(false)}
                              >
                                Change Phone Number
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                      {retailMethod === "password" && (
                        <form onSubmit={handleRetailPasswordLogin}>
                          <div className="rbt-input-field-grp mb--12">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_retail_id"
                            >
                              Phone Number or Email
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Phone or email"
                              type="text"
                              id="modal_retail_id"
                              value={identifier}
                              onChange={(e) => setIdentifier(e.target.value)}
                              required
                            />
                          </div>
                          <div className="rbt-input-field-grp mb--16">
                            <label
                              className="rbt-field-label"
                              htmlFor="modal_retail_pass"
                            >
                              Password
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                className="rbt-input-field"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                id="modal_retail_pass"
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
                          <button
                            type="submit"
                            className="rbt-btn d-block w-100 mb--16"
                            disabled={isLoading || !identifier || !password}
                          >
                            {isLoading ? "Signing In..." : "Sign In"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}

                  {/* Wholesale Customer View */}
                  {customerType === "wholesale" && (
                    <div className="wholesale-login-block">
                      <div className="alert alert-secondary p--10 rounded mb--16 b4">
                        <i className="fa-solid fa-info-circle mr--6 text-primary" />
                        Enter your <strong>Wholesale Customer ID (e.g. WS-10025)</strong> or registered phone number.
                      </div>
                      <form onSubmit={handleWholesaleLogin}>
                        <div className="rbt-input-field-grp mb--12">
                          <label
                            className="rbt-field-label"
                            htmlFor="modal_ws_id"
                          >
                            Wholesale Customer ID / Phone
                            <span className="rbt-text-color-danger">*</span>
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="e.g. WS-10025 or 0719876543"
                            type="text"
                            id="modal_ws_id"
                            value={wholesaleId}
                            onChange={(e) => setWholesaleId(e.target.value)}
                            required
                          />
                        </div>
                        <div className="rbt-input-field-grp mb--16">
                          <label
                            className="rbt-field-label"
                            htmlFor="modal_ws_pass"
                          >
                            Wholesale Account Password
                            <span className="rbt-text-color-danger">*</span>
                          </label>
                          <input
                            className="rbt-input-field"
                            placeholder="Password"
                            type="password"
                            id="modal_ws_pass"
                            value={wholesalePassword}
                            onChange={(e) => setWholesalePassword(e.target.value)}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="rbt-btn d-block w-100 mb--16"
                          disabled={isLoading || !wholesaleId || !wholesalePassword}
                        >
                          {isLoading ? "Authenticating Wholesale..." : "Wholesale Sign In"}
                        </button>
                      </form>
                    </div>
                  )}

                  <div className="rbt-login-system-switch rbt-link-hover mt--16 text-center">
                    Don&apos;t have an account?
                    <ModalTriggerButton
                      openModalName="signupModal"
                      className="rbt-switch-btn ml--6 text-primary font-weight-bold"
                    >
                      <span>Create Account / Register Wholesale</span>
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
