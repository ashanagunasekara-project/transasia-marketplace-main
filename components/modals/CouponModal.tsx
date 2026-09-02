"use client";

import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function CouponModal() {
  const { close } = useManagedModalPanel("findStoreModal");
  return (
    <div
      className="rbt-default-modal modal fade"
      id="findStoreModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered xl-size">
        <div className="modal-content p--0">
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
          <div className="rbt-google-map bg-color-white">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              height={600}
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
