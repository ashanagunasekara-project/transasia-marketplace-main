'use client'
import { CloseIcon } from '../svg-icons';
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function RequestPageModal() {
  const { close } = useManagedModalPanel("requestDemoModal");
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="requestDemoModal"
      tabIndex={-1}
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
                <h5 className="rbt-title rbt-text-bold mb--8">
                  <span className="mr--4">
                    <i className="fa-regular fa-headset" />
                  </span>
                  Contact To Request a Demo
                </h5>
                <div className="rbt-info-wrapper d-flex mt--8 rbt-gap--12">
                  <div className="rbt-info-box rbt-notify-box w-100">
                    <p className="b1 mb--16">
                      Want to be Call Back when this product Queries.
                    </p>
                    {/* Start tabs content */}
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="rbt-input-field-grp d-flex flex-column rbt-gap--8">
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_name"
                        >
                          Your Name
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Your Name"
                          id="req-demo_name"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_email"
                        >
                          Your Email
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="email"
                          placeholder="Email"
                          id="req-demo_email"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_title"
                        >
                          Suggested Demo Name
                          <span className="rbt-text-color-danger">*</span>
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Demo Name"
                          id="req-demo_title"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_category"
                        >
                          Suggested Demo Category Name
                        </label>
                        <input
                          className="rbt-input-field mb--20"
                          type="text"
                          placeholder="Demo Category Name"
                          id="req-demo_category"
                        />
                        <label
                          className="rbt-field-label mb--0"
                          htmlFor="req-demo_example-link"
                        >
                          Example Link (Optional)
                        </label>
                        <input
                          className="rbt-input-field mb--0"
                          type="text"
                          placeholder="example.abc"
                          id="req-demo_example-link"
                        />
                      </div>
                      <button
                        type="submit"
                        className="rbt-btn d-block w-100 mt--24 "
                      >
                        Submit
                      </button>
                    </form>
                    {/* End tabs content */}
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
