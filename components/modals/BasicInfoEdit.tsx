"use client";
import { CloseIcon } from "../svg-icons";
import { useState } from "react";
import SearchableDropdown from "@/components/common/select/SearchableDropdown";
import RbtDatePickerField from "@/components/common/select/RbtDatePickerField";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

export default function BasicInfoEdit() {
  const languageOptions = ["English", "Japanese", "Portuguese", "Bengali"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { close } = useManagedModalPanel("basicInfoEditModal");

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="basicInfoEditModal"
      tabIndex={-1}
      aria-labelledby="basicInfoEditModalLabel"
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
                Change basic information
              </h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row row--12 mt_dec--24">
                  <div className="col-md-6 mt--24">
                    <label htmlFor="first_name" className="form-label">
                      First name
                    </label>
                    <input type="text" id="first_name" defaultValue="Johnson" />
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="last_name" className="form-label">
                      Last name
                    </label>
                    <input type="text" id="last_name" defaultValue="Charle" />
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="language" className="form-label">
                      Language
                    </label>
                    <div className="rbt-input-field-grp mb--0">
                      <div className="rbt-dropdown-select filter-select rbt-modern-select rbt-bordered-style search-by-category w-100">
                        <SearchableDropdown
                          options={languageOptions}
                          selected={selectedLanguage}
                          onChange={setSelectedLanguage}
                          placeholder="Select Language"
                          searchPlaceholder="Search Language"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt--24">
                    <label htmlFor="birth_date" className="form-label">
                      Birth Date
                    </label>
                    <RbtDatePickerField
                      id="birth_date"
                      defaultValue="07/05/1994"
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
