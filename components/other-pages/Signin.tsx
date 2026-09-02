"use client";
import Link from "next/link";
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";
import { useState } from "react";

export default function Signin() {
  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone");
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
                    Sign In To Proceed
                  </h6>
                  <div className="rbt-tab rbt-round-shape-tab">
                    {/* Start tabs */}
                    <ul className="nav nav-tabs" id="signinTab" role="tablist">
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
                      <div className="tab-content">
                        {activeTab === "phone" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="signin_number"
                              >
                                Your Number
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                type="text"
                                id="signin_number"
                              />
                            </div>
                          </div>
                        )}
                        {activeTab === "email" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="signin_email"
                              >
                                Your Email
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                type="email"
                                id="signin_email"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                      >
                        Continue
                      </button>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt--12">
                        <div className="rbt-check-group mb--0">
                          <input
                            id="login_checked1"
                            type="checkbox"
                            name="login"
                          />
                          <label htmlFor="login_checked1">Stay Logged In</label>
                        </div>
                        <p className="mb--0 b2">
                          Forget password?{" "}
                          <Link className="rbt-switch-btn ml--4" href="/forgot-password">
                            Reset
                          </Link>
                        </p>
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
                    Don&apos;t have an account?{" "}
                    <Link className="rbt-switch-btn ml--4" href={`/signup`}>
                      <span>Create an account</span>
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
