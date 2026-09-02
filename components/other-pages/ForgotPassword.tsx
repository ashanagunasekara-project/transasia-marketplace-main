"use client";

import Link from "next/link";
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUiElement } from "@/context/uiStore";
import {
  getPasswordStrength,
  getPasswordValidationError,
} from "@/lib/passwordValidation";
import PasswordStrengthIndicator from "@/components/common/forms/PasswordStrengthIndicator";

const DEMO_OTP_CODE = "123456";

export default function ForgotPassword() {
  const router = useRouter();
  const { showToaster } = useUiElement();
  const [step, setStep] = useState<"request" | "reset" | "done">("request");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = getPasswordStrength(newPassword);
  const missingRequirements: string[] = [];
  if (newPassword.length < 8) missingRequirements.push("8+ characters");
  if (!/[A-Z]/.test(newPassword))
    missingRequirements.push("an uppercase letter");
  if (!/[a-z]/.test(newPassword))
    missingRequirements.push("a lowercase letter");
  if (!/[0-9]/.test(newPassword)) missingRequirements.push("a number");
  if (!/[^A-Za-z0-9]/.test(newPassword))
    missingRequirements.push("a special symbol");

  const strengthHint =
    strength.label === "Strong"
      ? "Great! Your password is strong."
      : `Add ${missingRequirements.join(", ")}.`;
  const passwordError = getPasswordValidationError(
    newPassword,
    confirmPassword,
    {
      requireStrong: true,
    },
  );

  const handleSendCode = () => {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      showToaster("OTP code sent");
      setStep("reset");
      setError("");
      setCode("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPassword(false);
      setShowConfirmPassword(false);
    }, 600);
  };

  const handleResetPassword = () => {
    if (!code.trim()) {
      setError("Please enter verification code.");
      return;
    }
    if (code.trim() !== DEMO_OTP_CODE) {
      setError("Invalid verification code. Use the demo OTP.");
      return;
    }
    if (passwordError) {
      setError(passwordError);
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      showToaster("Password reset successful");
      setStep("done");
      setTimeout(() => {
        router.push("/account-info");
      }, 1200);
    }, 600);
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
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                  <h6 className="rbt-title rbt-text-bold mb--16">
                    Forgot Password
                  </h6>

                  {step === "request" && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendCode();
                      }}
                    >
                      <p className="rbt-description mb--16">
                        Enter your email to receive a verification code.
                      </p>
                      <div className="rbt-input-field-grp">
                        <label
                          className="rbt-field-label"
                          htmlFor="forgot_page_email"
                        >
                          Your Email
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          type="email"
                          id="forgot_page_email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {error && (
                        <p className="rbt-form-error mt--8 mb--0">{error}</p>
                      )}
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Code"}
                      </button>
                    </form>
                  )}

                  {step === "reset" && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleResetPassword();
                      }}
                    >
                      <p className="rbt-description mb--16">
                        We sent a code to <strong>{email}</strong>.
                      </p>
                      <div
                        className="mb--16"
                        style={{
                          backgroundColor: "rgba(13,110,253,0.08)",
                          borderLeft: "3px solid #0d6efd",
                          borderRadius: "4px",
                          padding: "8px 12px",
                          color: "#0d6efd",
                          fontWeight: 500,
                        }}
                      >
                        For demo: use OTP <strong>{DEMO_OTP_CODE}</strong>
                      </div>
                      <div className="rbt-input-field-grp mt--16">
                        <label
                          className="rbt-field-label"
                          htmlFor="forgot_page_code"
                        >
                          Verification Code
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          type="text"
                          id="forgot_page_code"
                          value={code}
                          onChange={(e) => {
                            setCode(e.target.value);
                            if (error) setError("");
                          }}
                        />
                      </div>
                      <div className="rbt-input-field-grp">
                        <label
                          className="rbt-field-label"
                          htmlFor="forgot_page_new_password"
                        >
                          New Password
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            className="rbt-input-field"
                            type={showPassword ? "text" : "password"}
                            id="forgot_page_new_password"
                            value={newPassword}
                            onChange={(e) => {
                              setNewPassword(e.target.value);
                              if (error) setError("");
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="rbt-password-toggle-btn"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            <i
                              className={`fa-regular ${
                                showPassword ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </button>
                        </div>
                        {newPassword.length > 0 && (
                          <PasswordStrengthIndicator
                            label={strength.label}
                            hint={strengthHint}
                            compact
                          />
                        )}
                      </div>
                      <div className="rbt-input-field-grp mt--16">
                        <label
                          className="rbt-field-label"
                          htmlFor="forgot_page_confirm_password"
                        >
                          Confirm Password
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            className="rbt-input-field"
                            type={showConfirmPassword ? "text" : "password"}
                            id="forgot_page_confirm_password"
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                              if (error) setError("");
                            }}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            className="rbt-password-toggle-btn"
                            aria-label={
                              showConfirmPassword
                                ? "Hide confirm password"
                                : "Show confirm password"
                            }
                          >
                            <i
                              className={`fa-regular ${
                                showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      {error && (
                        <p
                          className="rbt-form-error mt--12 mb--0"
                          style={{
                            color: "#dc3545",
                            backgroundColor: "rgba(220,53,69,0.08)",
                            borderLeft: "3px solid #dc3545",
                            borderRadius: "4px",
                            padding: "6px 10px",
                          }}
                        >
                          {error}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24"
                        disabled={loading || strength.label !== "Strong"}
                      >
                        {loading ? "Updating..." : "Reset Password"}
                      </button>
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-border d-block w-100 mt--16"
                        onClick={handleSendCode}
                        disabled={loading}
                      >
                        Resend Code
                      </button>
                    </form>
                  )}

                  {step === "done" && (
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(25,135,84,0.1), rgba(13,110,253,0.08))",
                        border: "1px solid rgba(25,135,84,0.25)",
                        borderRadius: "12px",
                        padding: "18px 16px",
                      }}
                    >
                      <div
                        className="d-flex align-items-center mb--8"
                        style={{ color: "#198754", fontWeight: 700 }}
                      >
                        <i className="fa-regular fa-circle-check mr--8" />
                        Password Updated Successfully
                      </div>
                      <p className="rbt-description mb--0">
                        Welcome back! Your password has been reset and your
                        account is now secure. Redirecting to your account
                        page...
                      </p>
                    </div>
                  )}

                  {step !== "done" && (
                    <div className="rbt-login-system-switch rbt-link-hover mt--24">
                      Remember your password?{" "}
                      <Link className="rbt-switch-btn ml--4" href={`/signin`}>
                        <span>Sign In</span>
                      </Link>
                    </div>
                  )}
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
