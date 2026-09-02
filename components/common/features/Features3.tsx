export default function Features3({
  parentClass = "rbt-component-area rbt-quick-inf-area rbt-bg-color-white",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
              <ul className="rbt-inf-box-wrapper-list justify-content-center rbt-gap--120">
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger fade_in animation-order-1">
                    <div className="rbt-inf-box-icon rbt-text-color-primary">
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
                    <div className="rbt-inf-box-icon rbt-text-color-primary">
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
                    <div className="rbt-inf-box-icon rbt-text-color-primary">
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
                    <div className="rbt-inf-box-icon rbt-text-color-primary">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
