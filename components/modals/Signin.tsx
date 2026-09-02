"use client";
import { CloseIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import ReviewSlider from "../other-pages/ReviewSlider";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { useState } from "react";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

export default function Signin() {
  const { close } = useManagedModalPanel("signinModal");
  const [activeTab, setActiveTab] = useState<"phone" | "email">("phone");
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
                    className="rbt-title rbt-text-bold mb--16"
                    id="signinModalLabel"
                  >
                    Sign In To Proceed
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
                          className={`nav-link${activeTab === "phone" ? " active" : ""}`}
                          id="rbt-form-tab-id-1"
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
                          id="rbt-form-tab-id-2"
                          type="button"
                          onClick={() => setActiveTab("email")}
                        >
                          <i className="fa-sharp fa-regular fa-envelope" />
                          Email
                        </button>
                      </li>
                    </ul>
                    {/* End tabs */}
                    <form onSubmit={(e) => e.preventDefault()}>
                      {/* Start tabs content */}
                      <div className="tab-content" id="registerFormTab1Content">
                        {activeTab === "phone" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="modal_signin_number"
                              >
                                Your Number
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                placeholder="Number"
                                type="text"
                                id="modal_signin_number"
                              />
                            </div>
                          </div>
                        )}
                        {activeTab === "email" && (
                          <div className="tab-pane fade show active">
                            <div className="rbt-input-field-grp">
                              <label
                                className="rbt-field-label"
                                htmlFor="modal_signin_email"
                              >
                                Your Email
                                <span className="rbt-text-color-danger">*</span>
                              </label>
                              <input
                                className="rbt-input-field"
                                placeholder="Email"
                                type="email"
                                id="modal_signin_email"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      {/* End tabs content */}
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 mb--16"
                      >
                        Continue
                      </button>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt--12">
                        <div className="rbt-check-group mb--0">
                          <input
                            id="modal_login_checked1"
                            type="checkbox"
                            name="login"
                          />
                          <label htmlFor="modal_login_checked1">
                            Stay Logged In
                          </label>
                        </div>
                        <p className="mb--0 b2">
                          Forget password?{" "}
                          <Link className="rbt-switch-btn ml--4" href="/forgot-password">
                            Reset
                          </Link>
                        </p>
                      </div>
                    </form>
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
                    Don&apos;t have an account?
                    <ModalTriggerButton
                      openModalName="signupModal"
                      className="rbt-switch-btn ml--4"
                    >
                      <span>Create an account</span>
                    </ModalTriggerButton>
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
