"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReviewSlider from "./ReviewSlider";
import { useAuthStore } from "@/context/authStore";
import { useUiStore } from "@/context/uiStore";
import StoreLogo from "@/components/common/StoreLogo";

export default function Signin() {
  const router = useRouter();
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

  // Customer Type: "retail" | "wholesale"
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
  const [wholesaleMethod, setWholesaleMethod] = useState<"otp" | "password">("otp");
  const [wholesaleId, setWholesaleId] = useState("");
  const [wholesalePassword, setWholesalePassword] = useState("");
  const [showWholesalePassword, setShowWholesalePassword] = useState(false);
  const [wholesaleOtpCode, setWholesaleOtpCode] = useState("");
  const [wholesaleOtpSent, setWholesaleOtpSent] = useState(false);
  const [wholesaleDebugOtp, setWholesaleDebugOtp] = useState<string | null>(null);
  const [wholesaleMaskedPhone, setWholesaleMaskedPhone] = useState<string>("");

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
      showToaster("Signed in successfully!");
      router.push("/");
    }
  };

  const handleRetailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!identifier || !password) return;

    const res = await loginPassword(identifier, password);
    if (res.success) {
      showToaster("Signed in successfully!");
      router.push("/");
    }
  };

  const handleWholesaleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!wholesaleId.trim()) return;

    const res = await sendOtp({ wholesaleCustomerId: wholesaleId.trim().toUpperCase() });
    if (res.success) {
      setWholesaleOtpSent(true);
      if (res.debugOtp) setWholesaleDebugOtp(res.debugOtp);
      if (res.maskedPhone) setWholesaleMaskedPhone(res.maskedPhone);
      showToaster("Verification code sent to registered mobile phone");
    }
  };

  const handleWholesaleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!wholesaleId.trim() || !wholesaleOtpCode.trim()) return;

    const res = await loginWholesale({
      wholesaleCustomerId: wholesaleId.trim().toUpperCase(),
      otpCode: wholesaleOtpCode.trim(),
    });
    if (res.success) {
      showToaster("Wholesale access granted! Wholesale pricing activated.");
      router.push("/");
    }
  };

  const handleWholesalePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!wholesaleId.trim() || !wholesalePassword) return;

    const res = await loginWholesale({
      wholesaleCustomerId: wholesaleId.trim().toUpperCase(),
      password: wholesalePassword,
    });
    if (res.success) {
      showToaster("Wholesale access granted! Wholesale pricing activated.");
      router.push("/");
    }
  };

  return (
    <div className="rbt-component-area rbt-section-gap2Bottom rbt-section-gap2Top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
            <div className="rbt-login-form">
              <div className="rbt-login-form-inner">
                <div className="rbt-login-form-top">
                  <div className="logo">
                    <Link href={`/`}>
                      <StoreLogo />
                    </Link>
                  </div>
                  <h6 className="rbt-title rbt-text-bold mb--12">
                    Sign In To TransAsia
                  </h6>

                  {/* Customer Type Selector */}
                  <div className="d-flex rounded p--4 mb--16 bg-light gap-2">
                    <button
                      type="button"
                      className={`rbt-btn rbt-btn-sm flex-grow-1 ${customerType === "retail"
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
                      className={`rbt-btn rbt-btn-sm flex-grow-1 ${customerType === "wholesale"
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

                  {/* Retail Customer Form */}
                  {customerType === "retail" && (
                    <div className="retail-login-block">
                      <div className="rbt-tab rbt-round-shape-tab mb--16">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${retailMethod === "otp" ? " active" : ""
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
                              className={`nav-link${retailMethod === "password" ? " active" : ""
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
                                  htmlFor="page_retail_phone"
                                >
                                  Mobile Phone Number
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  placeholder="e.g. 0773392727"
                                  type="text"
                                  id="page_retail_phone"
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
                                  htmlFor="page_retail_otp"
                                >
                                  Enter 6-Digit Code
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  placeholder="000000"
                                  type="text"
                                  maxLength={6}
                                  id="page_retail_otp"
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
                              htmlFor="page_retail_id"
                            >
                              Phone Number or Email
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field"
                              placeholder="Phone or email"
                              type="text"
                              id="page_retail_id"
                              value={identifier}
                              onChange={(e) => setIdentifier(e.target.value)}
                              required
                            />
                          </div>
                          <div className="rbt-input-field-grp mb--16">
                            <label
                              className="rbt-field-label"
                              htmlFor="page_retail_pass"
                            >
                              Password
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                className="rbt-input-field"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                id="page_retail_pass"
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
                                  className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"
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

                  {/* Wholesale Customer Form */}
                  {customerType === "wholesale" && (
                    <div className="wholesale-login-block">
                      <div className="alert alert-secondary p--10 rounded mb--16 b4">
                        <i className="fa-solid fa-shield-halved mr--6 text-primary" />
                        Wholesale portal requires your registered <strong>Wholesale Customer ID (e.g. WS-10025)</strong>.
                      </div>

                      <div className="rbt-tab rbt-round-shape-tab mb--16">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${wholesaleMethod === "otp" ? " active" : ""}`}
                              type="button"
                              onClick={() => {
                                setWholesaleMethod("otp");
                                clearError();
                              }}
                            >
                              <i className="fa-sharp fa-regular fa-phone" />
                              SMS OTP
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${wholesaleMethod === "password" ? " active" : ""}`}
                              type="button"
                              onClick={() => {
                                setWholesaleMethod("password");
                                clearError();
                              }}
                            >
                              <i className="fa-sharp fa-regular fa-key" />
                              Password
                            </button>
                          </li>
                        </ul>
                      </div>

                      {wholesaleMethod === "otp" && (
                        <div>
                          {!wholesaleOtpSent ? (
                            <form onSubmit={handleWholesaleSendOtp}>
                              <div className="rbt-input-field-grp mb--16">
                                <label
                                  className="rbt-field-label"
                                  htmlFor="page_ws_otp_id"
                                >
                                  Wholesale Customer ID
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field text-uppercase"
                                  placeholder="e.g. WS-10025"
                                  type="text"
                                  id="page_ws_otp_id"
                                  value={wholesaleId}
                                  onChange={(e) => setWholesaleId(e.target.value.toUpperCase())}
                                  required
                                />
                                <small className="text-muted mt--4 d-block">
                                  Verification OTP code will be sent via SMS to the mobile number registered with this ID.
                                </small>
                              </div>
                              <button
                                type="submit"
                                className="rbt-btn d-block w-100 mb--16"
                                disabled={isLoading || !wholesaleId.trim()}
                              >
                                {isLoading ? "Sending Code..." : "Send Verification Code"}
                              </button>
                            </form>
                          ) : (
                            <form onSubmit={handleWholesaleVerifyOtp}>
                              <div className="alert alert-info p--8 rounded mb--12 b4">
                                Verification code sent to registered number{" "}
                                <strong>{wholesaleMaskedPhone || "for " + wholesaleId}</strong>
                                {wholesaleDebugOtp && (
                                  <span className="badge bg-warning text-dark ml--8">
                                    Code: {wholesaleDebugOtp}
                                  </span>
                                )}
                              </div>
                              <div className="rbt-input-field-grp mb--16">
                                <label
                                  className="rbt-field-label"
                                  htmlFor="page_ws_otp_code"
                                >
                                  Enter 6-Digit Code
                                  <span className="rbt-text-color-danger">*</span>
                                </label>
                                <input
                                  className="rbt-input-field"
                                  placeholder="000000"
                                  type="text"
                                  maxLength={6}
                                  id="page_ws_otp_code"
                                  value={wholesaleOtpCode}
                                  onChange={(e) => setWholesaleOtpCode(e.target.value)}
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="rbt-btn d-block w-100 mb--12"
                                disabled={isLoading || wholesaleOtpCode.length < 4}
                              >
                                {isLoading ? "Verifying..." : "Verify & Sign In"}
                              </button>
                              <button
                                type="button"
                                className="btn btn-link b4 text-muted w-100"
                                onClick={() => setWholesaleOtpSent(false)}
                              >
                                Change Customer ID / Resend Code
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                      {wholesaleMethod === "password" && (
                        <form onSubmit={handleWholesalePasswordLogin}>
                          <div className="rbt-input-field-grp mb--12">
                            <label
                              className="rbt-field-label"
                              htmlFor="page_ws_id"
                            >
                              Wholesale Customer ID
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <input
                              className="rbt-input-field text-uppercase"
                              placeholder="e.g. WS-10025"
                              type="text"
                              id="page_ws_id"
                              value={wholesaleId}
                              onChange={(e) => setWholesaleId(e.target.value.toUpperCase())}
                              required
                            />
                          </div>
                          <div className="rbt-input-field-grp mb--16">
                            <label
                              className="rbt-field-label"
                              htmlFor="page_ws_pass"
                            >
                              Wholesale Account Password
                              <span className="rbt-text-color-danger">*</span>
                            </label>
                            <div className="position-relative">
                              <input
                                className="rbt-input-field"
                                placeholder="Password"
                                type={showWholesalePassword ? "text" : "password"}
                                id="page_ws_pass"
                                value={wholesalePassword}
                                onChange={(e) => setWholesalePassword(e.target.value)}
                                required
                              />
                              <button
                                type="button"
                                onClick={() => setShowWholesalePassword((prev) => !prev)}
                                className="rbt-password-toggle-btn"
                                aria-label="Toggle password"
                              >
                                <i
                                  className={`fa-regular ${showWholesalePassword ? "fa-eye-slash" : "fa-eye"
                                    }`}
                                />
                              </button>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="rbt-btn d-block w-100 mb--16"
                            disabled={isLoading || !wholesaleId.trim() || !wholesalePassword}
                          >
                            {isLoading ? "Authenticating Wholesale..." : "Wholesale Sign In"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}

                  <div className="rbt-login-system-switch rbt-link-hover mt--16 text-center">
                    Don&apos;t have an account?{" "}
                    <Link className="rbt-switch-btn ml--4 text-primary font-weight-bold" href={`/signup`}>
                      <span>Create an account / Register Wholesale</span>
                    </Link>
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
