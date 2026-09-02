"use client";



export default function AddPaymentMethodForm({
  activeTab,
  onCancel,
}: {
  activeTab: "card" | "paypal";
  onCancel: () => void;
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Start tabs content */}
      <div className="tab-content" id="registerFormTab1Content">
        {activeTab === "card" && (
        <div className="tab-pane fade active show mt_dec--20">
          <div className="rbt-input-field-grp mt--20">
            <label className="rbt-field-label" htmlFor="card_number">
              Card Number
            </label>
            <input
              className="rbt-input-field rbt-credit-card-input"
              placeholder="XXXX XXXX XXXX XXXX"
              type="text"
              id="card_number"
            />
          </div>
          <div className="rbt-input-field-grp mt--20">
            <label className="rbt-field-label" htmlFor="card_user_name">
              Name on card
            </label>
            <input
              className="rbt-input-field"
              placeholder="Full name"
              type="text"
              id="card_user_name"
            />
          </div>
          <div className="rbt-input-field-grp mt--20">
            <label className="rbt-field-label" htmlFor="card_expiration_date">
              Expiration date
            </label>
            <input
              className="rbt-input-field rbt-expiration-date"
              placeholder="MM/YY"
              type="text"
              id="card_expiration_date"
            />
          </div>
          <div className="rbt-input-field-grp mt--20">
            <label className="rbt-field-label" htmlFor="card_cvv">
              CVV
            </label>
            <input
              className="rbt-input-field rbt-cvv-input"
              placeholder="XXXX"
              type="text"
              id="card_cvv"
            />
          </div>
        </div>
        )}
        {activeTab === "paypal" && (
        <div className="tab-pane fade active show">
          <div className="rbt-input-field-grp">
            <label className="rbt-field-label" htmlFor="paypal_email_address">
              Your Email
            </label>
            <input
              className="rbt-input-field"
              placeholder="Email"
              type="email"
              id="paypal_email_address"
            />
          </div>
        </div>
        )}
      </div>
      {/* End tabs content */}
      <div className="d-flex rbt-gap--24">
        <button
          type="button"
          className="rbt-btn rbt-btn-gray d-block w-100 mt--24 mb--16"
          data-bs-dismiss="modal"
          onClick={onCancel}
          aria-label="Close"
        >
          Cancel
        </button>
        <button type="submit" className="rbt-btn d-block w-100 mt--24 mb--16">
          Continue
        </button>
      </div>
    </form>
  );
}
