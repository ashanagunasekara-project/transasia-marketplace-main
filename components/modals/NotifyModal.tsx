"use client";

import { FormEvent, useState } from "react";
import { CloseIcon } from "../svg-icons";
import { useUiElement } from "@/context/Context";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function NotifyModal() {
  const { showToaster } = useUiElement();
  const { close } = useManagedModalPanel("notifyModal");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      showToaster("Please enter your email address");
      return;
    }

    showToaster("You will be notified when this product is back in stock");
    setEmail("");
    close();
  };

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="notifyModal"
      tabIndex={-1}
      aria-labelledby="notifyModalLabel"
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
                  id="notifyModalLabel"
                >
                  <span className="mr--4">
                    <i className="fa-regular fa-bell" />
                  </span>
                  Back In Stock Notification
                </h5>
                <div className="rbt-info-wrapper d-flex mt--8 rbt-gap--12">
                  <div className="rbt-info-box rbt-notify-box w-100">
                    <p className="b1 mb--16">
                      Want to be notified when this product is back in stock?
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="rbt-input-field-grp">
                        <input
                          className="rbt-input-field rbt-bg-color-white shadow-none plr--24"
                          type="email"
                          placeholder="Enter your e-mail"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="rbt-btn rbt-btn-rounded w-100 mt--12"
                      >
                        Notify Me
                      </button>
                    </form>
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
