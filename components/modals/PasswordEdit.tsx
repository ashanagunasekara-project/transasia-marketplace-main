'use client'
import { CloseIcon } from '../svg-icons';
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function PasswordEdit() {
  const { close } = useManagedModalPanel("passwordEditModal");
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="passwordEditModal"
      tabIndex={-1}
      aria-labelledby="passwordEditModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered rbt-cart-edit-area">
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
            {/* Start Component Area */}
            <div className="rbt-single-product-area rbt-bg-color-white rbt-content-trs-portion">
              <h5 className="rbt-title rbt-modal-title mb--24">
                Change password
              </h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row row--12 mt_dec--24">
                  <div className="col-md-6 mt--24">
                    <label htmlFor="curent_password" className="form-label">
                      Current password
                    </label>
                    <input
                      type="password"
                      id="curent_password"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="new_password" className="form-label">
                      New password
                    </label>
                    <input
                      type="password"
                      id="new_password"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-flex rbt-gap--16">
                      <button
                        type="button"
                        className="rbt-btn rbt-btn-secondary rbt-btn-md rbt-square-btn mt--24"
                        aria-label="Close"
                        onClick={close}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rbt-btn rbt-btn-md rbt-square-btn mt--24"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* End Component Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
