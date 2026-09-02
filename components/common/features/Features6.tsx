import Countdown from "../ui/Countdown";

export default function Features({
  textColor = "rbt-text-color-white",
  countdownBg = "bg-variation-green",
}) {
  return (
    <div className="rbt-component-area rbt-quick-inf-area rbt-section-gap rbt-bg-color-dark-black rbt-has-bg-event-shape">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-exclusive-section-title text-center mb--80 mb_sm--36 mb_md--56">
              <h2 className="rbt-title rbt-text-color-white mb--32">
                <span
                  className={`rbt-bold--text ${textColor}  rbt-scroll-trigger fade_in animation-order-2`}
                >
                  WAIT WILL COME TO AN END IN...
                </span>
              </h2>
              <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                <div
                  className={`rbt-countdown-one ${countdownBg}  cd-border-style`}
                >
                  <Countdown targetDate="2027-12-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
              <ul className="rbt-inf-box-wrapper-list justify-content-center rbt-gap--120">
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-1">
                    <div className="rbt-inf-box-icon rbt-text-color-white">
                      <i className="fa-light fa-truck-fast" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title rbt-text-color-white">
                        Free Shipping
                      </h6>
                      <p className="rbt-inf-box-desc">
                        From all orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-2">
                    <div className="rbt-inf-box-icon rbt-text-color-white">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title rbt-text-color-white">
                        Quality Support
                      </h6>
                      <p className="rbt-inf-box-desc">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-3">
                    <div className="rbt-inf-box-icon rbt-text-color-white">
                      <i className="fa-light fa-box" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title rbt-text-color-white">
                        Return &amp; Refund
                      </h6>
                      <p className="rbt-inf-box-desc">
                        Return money within 30 days
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="rbt-inf-box rbt-scroll-trigger zoom_in animation-order-4">
                    <div className="rbt-inf-box-icon rbt-text-color-white">
                      <i className="fa-light fa-ticket" />
                    </div>
                    <div className="rbt-inf-box-content">
                      <h6 className="rbt-inf-box-title rbt-text-color-white">
                        Gift Voucher
                      </h6>
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
