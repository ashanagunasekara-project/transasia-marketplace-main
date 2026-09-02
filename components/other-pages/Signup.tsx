"use client";
import Link from "next/link";
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";
import { useState } from "react";
import {
  getPasswordStrength,
  getPasswordValidationError,
} from "@/lib/passwordValidation";
import PasswordStrengthIndicator from "@/components/common/forms/PasswordStrengthIndicator";

export default function Signup() {
  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordStrength = getPasswordStrength(password);
  const passwordError = getPasswordValidationError(password, confirmPassword, {
    requireStrong: true,
  });
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
                    Create an Account
                  </h6>
                  <p className="description">I want grocery delivery for my:</p>
                  <ul className="rbt-signup-radio-list">
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-1"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-1">
                        <span className="rbt-label-text">Home</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-2"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-2">
                        <span className="rbt-label-text">Office</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-3"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-3">
                        <span className="rbt-label-text">Business</span>
                      </label>
                    </li>
                    <li className="rbt-check-grp ml--0">
                      <input
                        id="rbt-signup-radio-4"
                        type="radio"
                        name="rbt-signup-radio"
                      />
                      <label htmlFor="rbt-signup-radio-4">
                        <span className="rbt-label-text">Others</span>
                      </label>
                    </li>
                  </ul>
                  <div className="rbt-tab rbt-round-shape-tab">
                    {/* Start tabs */}
                    <ul
                      className="nav nav-tabs"
                      id="registerFormTab2"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link${activeTab === "phone" ? " active" : ""}`}
                          id="rbt-tab-id-1"
                          type="button"
                          onClick={() => setActiveTab("phone")}
                        >
                          <i className="fa-sharp fa-regular fa-phone" />
                          Phone Number
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link${activeTab === "email" ? " active" : ""}`}
                          id="rbt-tab-id-2"
                          type="button"
                          onClick={() => setActiveTab("email")}
                        >
                          <i className="fa-sharp fa-regular fa-envelope" />
                          Email
                        </button>
                      </li>
                    </ul>
                    {/* End tabs */}
                    {/* Start tabs content */}
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="tab-content" id="registerFormTab2Content">
                        {activeTab === "phone" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="register_number"
                              >
                                Your Number
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                type="text"
                                id="register_number"
                              />
                            </div>
                          </div>
                        )}
                        {activeTab === "email" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="register_email"
                              >
                                Your Email
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                type="email"
                                id="register_email"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="rbt-input-field-grp mt--16">
                        <label
                          className="rbt-field-label"
                          htmlFor="register_password"
                        >
                          Password
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          type="password"
                          id="register_password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="rbt-input-field-grp mt--16">
                        <label
                          className="rbt-field-label"
                          htmlFor="register_confirm_password"
                        >
                          Confirm Password
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field"
                          type="password"
                          id="register_confirm_password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      {passwordError && (
                        <p className="rbt-form-error mt--8 mb--0">
                          {passwordError}
                        </p>
                      )}
                      {password.length > 0 && (
                        <PasswordStrengthIndicator
                          label={passwordStrength.label}
                          hint={`Password Strength: ${passwordStrength.label}`}
                        />
                      )}
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                        disabled={
                          Boolean(passwordError) ||
                          !password ||
                          !confirmPassword
                        }
                      >
                        Continue
                      </button>
                      <div className="rbt-check-group">
                        <input
                          id="login_checked2"
                          type="checkbox"
                          name="login"
                        />
                        <label htmlFor="login_checked2">Stay Logged In</label>
                      </div>
                    </form>
                    {/* End tabs content */}
                  </div>
                  {/* Separator */}
                  <div className="d-flex align-items-center justify-content-center mb--24 mt--24">
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                    <span className="pl--8 pr--8 b4 rbt-text-medium">OR</span>
                    <hr className="rbt-separator rbt-bg-color-gray-light mb--0" />
                  </div>
                  {/* Start social login button */}
                  <button
                    type="submit"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 mb--16 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/fb-icon.webp"
                      width={37}
                      height={36}
                    />
                    Continue with Facebook
                  </button>
                  <button
                    type="submit"
                    className="rbt-btn rbt-btn-border rbt-social-login-btn d-block w-100 rbt-social-login-btn"
                  >
                    <Image
                      className="icon"
                      alt="Icon"
                      src="/assets/images/icons/google-icon.webp"
                      width={36}
                      height={36}
                    />
                    Continue with Google
                  </button>
                  {/* End social login button */}
                  <div className="rbt-login-system-switch rbt-link-hover">
                    Already a customer?{" "}
                    <Link className="rbt-switch-btn ml--4" href={`/signin`}>
                      <span>Sing In</span>
                    </Link>
                  </div>
                </div>
                {/* Start slider */}
                <ReviewSlider />

                {/* End slider */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
