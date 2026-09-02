import MiniCheckout from "./MiniCheckout";
import Link from "next/link";
import CheckoutShippingForm from "./CheckoutShippingForm";
export default function CheckoutShipping() {
  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray">
              <div className="rbt-checkout-wrapper-box">
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">
                    <i className="fa-regular fa-check" />
                  </span>
                  <div className="inner w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="title">Delivery Details</h5>
                      <div className="rbt-link-hover">
                        <Link href="/checkout-delivery-step-two">Edit</Link>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="h6 mb-0">Postcode</h6>
                      <p className="desc mt--12">15006</p>
                      <h6 className="h6 mb-0 mt--12">
                        Estimated delivery date
                      </h6>
                      <p className="desc mt--12">Monday, 13 | 12:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                <div className="rbt-checkout-single-content active">
                  <span className="rbt-checkout-step">2</span>
                  <div className="inners">
                    <h5 className="title">Shipping Options</h5>
                    <CheckoutShippingForm />
                  </div>
                </div>
                <div className="rbt-checkout-single-content">
                  <span className="rbt-checkout-step">3</span>
                  <h5 className="title">Secure Payment</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt--24">
            <MiniCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}
