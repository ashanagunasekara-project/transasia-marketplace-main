export default function Features({ justifyCenter = false }) {
  return (
    <div className="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap3 rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
              <ul
                className={`rbt-inf-box-wrapper-list ${
                  justifyCenter
                    ? "justify-content-center rbt-gap--120"
                    : "@@gapSpaceBetween"
                }`}
              >
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-truck-fast" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Free Shipping</h6>
                      <p className="rbt-inf-box-desc">
                        From all orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-2">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Quality Support</h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-3">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-box" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Return &amp; Refund</h6>
                      <p className="rbt-inf-box-desc">
                        Return money within 30 days
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-4">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-ticket" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Gift Voucher</h6>
                      <p className="rbt-inf-box-desc">
                        20% off when you shop online
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-5">
                    <div className="rbt-inf-box-icon">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title">Quality Support</h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
